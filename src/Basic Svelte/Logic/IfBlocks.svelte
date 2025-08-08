<script>
	let count = $state(0);

	function increment() {
		count += 1;
	}
</script>

<!-- HTML no tiene forma de expresar logica, como condiciones y bucles
 , esto lo hace Svelte -->

 <!-- Para representar condicionalmente algun marcado, lo envolvemos
  en un if block -->

<button onclick={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

{#if count > 10}
<p>{count} is greater than 10</p>
{/if}