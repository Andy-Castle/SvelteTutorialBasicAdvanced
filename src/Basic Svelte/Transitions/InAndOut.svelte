<!-- En lugar de tener una transicion directiva, un elemento
 puede tener una in o un out directiva, o ambas juntas,
 Hay que importar fade al lado de fly -->
<script>
	import { fade, fly } from 'svelte/transition';

	let visible = $state(true);
</script>

<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

<!-- reemplazamos la transition directiva con separado in y out directivas  -->
{#if visible}
	<p in:fly={{ y: 200, duration: 2000 }} out:fade>
		Flies in, fades out
	</p>
{/if}

<!-- En este caso las transiciones no son reversibles -->