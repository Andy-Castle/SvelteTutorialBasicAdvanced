<script>
	import { marked } from 'marked';

	let value = $state(`Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool`);
</script>

<!-- El elemento de textarea se comporta de manera similar a una entrada
 de texto en svelte, se usa bind:value -->
<div class="grid">
	input
  <!-- En casos como estos, donde los nombres coinciden, tambien podemos
   utilicar una forma abreviada -->
	<textarea bind:value></textarea>

	output
	<div>{@html marked(value)}</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 5em 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 1em;
		height: 100%;
	}

	textarea {
		flex: 1;
		resize: none;
	}
</style>