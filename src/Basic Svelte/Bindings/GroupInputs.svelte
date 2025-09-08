<script>
	let scoops = $state(1);
	let flavours = $state([]);

	const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
</script>

<h2>Size</h2>

<!-- Si tienes varios type=radio o type=checkbox de entradas relacionadas, con
 el mismo valor, puedes utilizar bind:group junto con el value atributo.
 Las entradas de radio en el mismo grupo son mutuamente excluyentes; las
 entradas de casillas de verificación en el mismo grupo forman una matriz
 de valores seleccionados -->

 <!-- Agregamos bind:group={scoops} a las entradas de radio -->
{#each [1, 2, 3] as number}
	<label>
		<input
			type="radio"
			name="scoops"
			value={number}
      bind:group={scoops}
		/>

		{number} {number === 1 ? 'scoop' : 'scoops'}
	</label>
{/each}

<h2>Flavours</h2>

<!-- y bind:group={flavours} a las entradas de la casilla de verificación -->
{#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
	<label>
		<input
			type="checkbox"
			name="flavours"
			value={flavour}
      bind:group={flavours}
		/>

		{flavour}
	</label>
{/each}

{#if flavours.length === 0}
	<p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
	<p>Can't order more flavours than scoops!</p>
{:else}
	<p>
		You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
		of {formatter.format(flavours)}
	</p>
{/if}
