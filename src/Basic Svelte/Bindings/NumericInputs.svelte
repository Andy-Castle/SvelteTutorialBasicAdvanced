<!-- En el DOM, cada valor de entrada es una cadena. -->
<!-- Esto no es util cuando se trata de entradas numericas, ya se
 de tipo number, range,etc. Ya que significa que debes recordar coaccionar
 input.value antes de usarlo -->

 <!-- con bind:value Svelte se encarfa de ello por ti -->
<script>
	let a = $state(1);
	let b = $state(2);
</script>

<label>
	<input type="number" bind:value={a} min="0" max="10" />
	<input type="range" bind:value={a} min="0" max="10" />
</label>

<label>
	<input type="number" bind:value={b} min="0" max="10" />
	<input type="range" bind:value={b} min="0" max="10" />
</label>

<p>{a} + {b} = {a + b}</p>
