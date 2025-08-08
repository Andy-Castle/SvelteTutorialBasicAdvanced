<script>
	const emojis = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚'
	};

	// `name` is updated whenever the prop value changes...
	let { name } = $props();
  // name es un accesorio dinaico pero emoji es una constante
  /*el nodo de texto que contiene ‘donut’ ahora contiene ‘egg’, etc.), 
  pero no el emoji.*/

	// ...but `emoji` is fixed upon initialisation
	const emoji = emojis[name];

  //Esta seria una forma de arreglarlo
	// const emoji = $derived(emojis[name]);

</script>

<p>{emoji} = {name}</p>
