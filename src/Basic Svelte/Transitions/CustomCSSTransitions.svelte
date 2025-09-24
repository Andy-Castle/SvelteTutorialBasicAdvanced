<!-- El modulo de svelte/transition tiene un puñado de transiciones
 integradas, pero es muy facil crear las tuyas, en este ejemplo,
 esta es la fuente de la fade transiunea: -->

 <!-- 
  function fade(node, { delay = 0, duration = 400 }) {
    const o = +getComputedStyle(node).opacity;

    return {
      delay,
      duration,
      css: (t) => `opacity: ${t * o}`
    };
  }
 -->

<!-- La función toma dos argumento, - el node al que se
 aplica la transicón y cualquier parametros que se haya pasado
 - y devuelve un objeto de transiciín que puede tener las siguiente
 propiedades: -->

 <!-- 
 delay - milisegundos antes de que comience la transicion
 duration - duracion de la transicion en milisegundos
 easing - a p => t funcion de flexibilizacion
 css - a (t, u) => css función, donde u === 1 -t
 tick - a (t, u) => {...} funcion que tiene algun efecto en el nodo
 -->

 <!-- El t El valor es 0 al principio de una introducción o al final de 
  un outro, y 1 al final de una introducción o al comienzo de un outro. -->

<!-- La mayoría de las veces debes devolver el css propiedad y no el
  tick propiedad, ya que las animaciones CSS se ejecutan fuera del hilo
  principal para evitar bloqueos siempre que sea posible. Svelte 
  ‘simula’ la transición y construye una animación CSS, luego la 
  deja ejecutarse. -->

<!-- Por ejemplo, el fade la transicion genera una animacion de CSS
 similar a esta:
  0% { opacity: 0 }
  10% { opacity: 0.1 }
  20% { opacity: 0.2 }
  /* ... */
  100% { opacity: 1 } -->

<script>
	import { fade } from 'svelte/transition';
  import {elasticOut} from 'svelte/easing'

	let visible = $state(true);

	function spin(node, { duration }) {
		return {
			duration,
			css: (t, u) => {
        const eased = elasticOut(t)

        return `
        transform: scale(${eased}) rotate(${eased  * 1080}deg);
        color: hsl(
        ${Math.trunc(t * 360)},
        ${Math.min(100, 1000 * u)}%,
        ${Math.min(50, 500 * u)}%
        );`
      }
		};
	}
</script>

<div class="body">
<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

{#if visible}
	<div
		class="centered"
		in:spin={{ duration: 8000 }}
		out:fade 
	>
		<span>transitions!</span>
	</div>
{/if}
</div>

<style>
	.centered {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	span {
		position: absolute;
		transform: translate(-50%, -50%);
		font-size: 4em;
	}

  .body{
    min-height: 20vh;
  }
</style>