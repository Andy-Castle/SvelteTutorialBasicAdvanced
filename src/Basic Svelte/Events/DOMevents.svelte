<script>
	let m = $state({ x: 0, y: 0 });

	function onpointermove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>
<!-- Se puede escuchar cualquier evento DOM en un elemento,
 como puede ser hacer click o pointermove, con un on<name> function: -->

<!-- <div onpointermove={onpointermove}> -->
  <!-- Con esta función podemos ver la posion x y y del mouse -->
<div {onpointermove}>
  <!-- Como ocurren con cualquier otra propiedad donde el nombre
   coincida con el valor, podemos usar la forma corta -->
	The pointer is at {Math.round(m.x)} x {Math.round(m.y)}
</div>

<style>
	div {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		padding: 1rem;
	}
</style>