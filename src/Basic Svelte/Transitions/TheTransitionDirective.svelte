<script>
  import {fade} from 'svelte/transition';
  // Importamos esto

	let visible = $state(true);
</script>

<!-- Podemos crear interfaces de usuario mas atractivas haciendo 
 una transición elegante de elementos dentro y fuera del DOM,
 svelte hace que esto sea facil con el transition directive -->

<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

{#if visible}
<!-- Y luego colocamos transition:fade -->
	<p transition:fade>
		Fades in and out
	</p>
{/if}