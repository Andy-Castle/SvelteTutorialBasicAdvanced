<!-- Las transiciones solo se reproduciran en elementos cuando se
 agregue o destruya su bloque contenedor directo. En este ejemplo,
 alternar la visibilidad de toda la lista no aplica transiciones
 a elementos de la lista individuales. -->

 <!-- En cambio, nos gustaria que las transiciones no solo se
  reproduzcan cuando se agregan y eliminan elementos individuales
  con el control deslizante, sino tambien cuando alternamos la casilla
  de verificación -->

<!-- Podemos lograrlo con un global transition, que juega cuando
 cualquiera se agrega o elimina el bloque que contiene las 
 transiciones. -->

<script>
	import { slide } from 'svelte/transition';

	let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

	let showItems = $state(true);
	let i = $state(5);
</script>

<label>
	<input type="checkbox" bind:checked={showItems} />
	show list
</label>

<label>
	<input type="range" bind:value={i} max="10" />
</label>

{#if showItems}
	{#each items.slice(0, i) as item}
		<div transition:slide|global>
			{item}
		</div>
	{/each}
{/if}

<style>
	div {
		padding: 0.5em 0;
		border-top: 1px solid #eee;
	}
</style>