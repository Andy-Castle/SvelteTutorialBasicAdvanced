<!-- En el ejercicio del State, el estado reacciona a reasignaciones,
 pero tambien reacciona a mutaciones, esto se le llama reactividad profunda -->

<script>
	let numbers = $state([1, 2, 3, 4]);

	function addNumber() {
		// TODO implement
    // numbers[numbers.length] = numbers.length + 1;
    numbers.push(numbers.length + 1);
	}
</script>

<p>{numbers.join(' + ')} = ...</p>

<button onclick={addNumber}>
	Add a number
</button>

<!-- La reactividad profunda se implementa utilizando proxies, y las mutaciones
 en el proxy no afectan al objeto original -->