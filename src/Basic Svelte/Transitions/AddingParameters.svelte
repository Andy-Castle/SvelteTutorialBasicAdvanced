<!-- Las funciones de transición pueden aceptar parámetros.
 Reemplazar el fade con la transicion fly  -->

<script>
	import { fly } from 'svelte/transition';

	let visible = $state(true);
</script>



<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

<!-- y los aplicamos al <p> junto con algunas opciones -->
{#if visible}
	<p transition:fly={{ y:-200, x:-200, duration: 2000}}>
		Flies in and out
	</p>
{/if}

<!-- Hay que tener en cuenta que las transicionees son reversibles,
 si alternamos la casilla de verificación mientras la transición esta en
 curso, pasa del punto actual, en lugar del principio o el final -->