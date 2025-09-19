<!-- Al igual que las transiciones y las animaciones, una action
 puede tomar un argumento, al que se llamara la función de acción
 junto con el elemento al que pertenece -->

 <!-- En este ejercicio, queremos agregar información sobre herramientas
  al <button> usando el Tippy.js biblioteca. La acción ya esta programada
  con use:tooltip, pero si pasa el cursor sobre el boton (o lo enfoca con el teclado)
  ,la información sobre herramientas no contiene contenido -->

<script>
	import tippy from 'tippy.js';

	let content = $state('Hello!');

  /*
  Primero, la acción debe aceptar una función que devuelva algunas
  opciones para pasar a Tippy
  */

	function tooltip(node, fn) {
		$effect(() => {
			const tooltip = tippy(node, fn());

			return tooltip.destroy;
		});

    /*
    Estamos pasando una función, en lugar de las opciones en si, porque
    tooltip La función no se vuelve a ejecutar cuando cambia las opciones
    */
	}
</script>

<input bind:value={content} />

<!-- Luego, necesitamos pasar las opcines a la acción -->
<button use:tooltip = {() => ({content})}>
	Hover me
</button>

<style>
	:global {
		[data-tippy-root] {
			--bg: #666;
			background-color: var(--bg);
			color: white;
			border-radius: 0.2rem;
			padding: 0.2rem 0.6rem;
			filter: drop-shadow(1px 1px 3px rgb(0 0 0 / 0.1));

			* {
				transition: none;
			}
		}

		[data-tippy-root]::before {
			--size: 0.4rem;
			content: '';
			position: absolute;
			left: calc(50% - var(--size));
			top: calc(-2 * var(--size) + 1px);
			border: var(--size) solid transparent;
			border-bottom-color: var(--bg);
		}
	}
</style>