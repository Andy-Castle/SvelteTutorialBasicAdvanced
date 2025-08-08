<script>
	let count = $state(0);

	function increment() {
		count += 1;
	}
</script>

<button onclick={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<!-- Se pueden encadenar multiples condiciones junto con el
 else if -->

{#if count > 10}
	<p>{count} is greater than 10</p>
{:else if count < 5}
  <p>{count} is less than 5</p>
{:else}
	<p>{count} is between 5 and 10</p>
{/if}
