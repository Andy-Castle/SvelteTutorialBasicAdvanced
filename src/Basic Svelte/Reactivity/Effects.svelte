<!-- Lo que reacciona se le llama effect,
 hay ejemplos de effects como los que crea svelte cuando quieres
 actualizar un nombre para actualizar el DOM en respuesta a cambios 
 de estado.
 Tambien uno puede crear los suyos mediante la runa de $effect -->

 <!-- La mayoría de las veces no deberías hacerlo. $effect Es mejor 
  considerarlo como una trampilla de escape, en lugar de algo para usar 
  con frecuencia. Si puedes poner tus efectos secundarios en un 
  Basic Svelte / Events / DOM events
, por ejemplo, eso casi siempre es preferible. -->
<script>
	let elapsed = $state(0);
	let interval = $state(1000);
  /*En este ejemplo se usara un setInterval para realizar el seguimiento
  de cuanto tiempo ha estado montado el componente*/

  $effect(() => {
    const id = setInterval(() => {
      elapsed += 1;
    }, interval);

    return () =>{
      clearInterval(id)
    }
  })

  /*Si la función de efecto no lee ningún estado cuando se ejecuta,
  solo se ejecutará una vez, cuando se monte el componente.*/
</script>

<button onclick={() => interval /= 2}>speed up</button>
<button onclick={() => interval *= 2}>slow down</button>

<p>elapsed: {elapsed}</p>
