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

<!-- al igual que en JS, un if block puede tener un else block -->

{#if count > 10}
<p>{count} is greater than 10</p>
{:else}
<p>{count} is between 0 and 10</p>
{/if}

<!-- Con  {#...} abre un bloque. {/...} cierra un bloque. {:...}-->