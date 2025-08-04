<script>
	let numbers = $state([1, 2, 3, 4]);
	let total = $derived(numbers.reduce((t, n) => t + n, 0));

	function addNumber() {
		numbers.push(numbers.length + 1);
		// console.log(numbers); //Esto marca un error, porque numbers es un reactivo proxy
		// console.log($state.snapshot(numbers)); 
    /*Esto de arriba es un sistema no reactivo instantanea del estado
    con $state.snapshot(...)*/
	}

  // $inspect(numbers);
  /*Una mejor alternativa es usar el $inspect que es una runa para
  registrar automaticamente una instantanea del estado cada vez que
  cambia, este codigo se eliminara automaticamente de su compilación
  de producción*/

  $inspect(numbers).with(console.trace)
  /*Se puede personalizar como se muestra la información utilizando
  esto de arriba, en este ejemplo se puede usar console.trace, para ver
  de donde se origino el cambio de estado*/
</script>

<p>{numbers.join(' + ')} = {total}</p>

<button onclick={addNumber}>
	Add a number
</button>