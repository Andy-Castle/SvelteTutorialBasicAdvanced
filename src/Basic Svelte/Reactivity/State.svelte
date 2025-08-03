<!-- En svelte tiene un sistema de reactividad para mantener
 el DOM sincronizado con el estado de la aplicacion,
 como puede ser la respueata a un evento -->
<script>
	let count = $state(0);
  /*Esto se le llama runa, asi se le llama en Svelte*/

	function increment() {
		// TODO implement
    count += 1
	}
</script>

<button onclick={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
