<script>
	let questions = $state([
		{
			id: 1,
			text: `Where did you go to school?`
		},
		{
			id: 2,
			text: `What is your mother's name?`
		},
		{
			id: 3,
			text: `What is another personal fact that an attacker could easily find with Google?`
		}
	]);

	let selected = $state();

	let answer = $state('');

	function handleSubmit(e) {
		e.preventDefault();

		alert(
			`answered question ${selected.id} (${selected.text}) with "${answer}"`
		);
	}
</script>

<h2>Insecurity questions</h2>

<!-- Tambien podemos utilizar bind:value con select elementos: -->

<!-- Hay que tener en cuenta que el option, los valores son objetos
 en lugar de cadenas, a svelte no le importa -->

<form onsubmit={handleSubmit}>
	<select
		bind:value={selected}
		onchange={() => (answer = '')}
	>
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>

	<input bind:value={answer} />

	<button disabled={!answer} type="submit">
		Submit
	</button>
</form>

<!-- Porque no hemos establecido un valor inicial de selected, el 
 enlace lo establecerá automáticamente en el valor predeterminado 
 (el primero de la lista). Pero tenga cuidado — hasta que se inicialice 
 el enlace, selected permanece indefinido, por lo que no podemos hacer 
 referencia ciega, por ejemplo. selected.id en la plantilla. -->
<p>
	selected question {selected
		? selected.id
		: '[waiting...]'}
</p>