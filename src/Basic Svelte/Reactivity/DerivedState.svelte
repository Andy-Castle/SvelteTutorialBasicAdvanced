<!-- En ocasiones se necesita derivar un estado de otro estado
 asi que se usa la runa de $derived -->

<script>
	let numbers = $state([1, 2, 3, 4]);
  let total = $derived(numbers.reduce((t, n) => t + n, 0));
  let totalMult = $derived(numbers.reduce((t, n) => t * n))
  let totalDiv = $derived(numbers.reduce((t, n) => t / n))
  let totalMin = $derived(numbers.reduce((t, n) => t - n))

	function addNumber() {
		numbers.push(numbers.length + 1);
	}
</script>

<p>{numbers.join(' + ')} = {total}</p>
<p>{numbers.join(' * ')} = {totalMult}</p>
<p>{numbers.join(' / ')} = {totalDiv}</p>
<p>{numbers.join(' - ')} = {totalMin}</p>

<button onclick={addNumber}>
	Add a number
</button>

<!-- Aqui la expresion $derived, la declaración sera reevaluada siempre
 que sus dependencias, en este caso el numbers se actualizan -->