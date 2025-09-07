<!-- Se puece pasar controladorres de eventos a componentes
 como cualquier otro accesorio -->
<script>
	let {increment, decrement} = $props();
</script>

<!-- Creamos las variables increment y decrement, y las conectamos -->
<button onclick={decrement}>-1</button>
<button onclick={increment}>+1</button>
