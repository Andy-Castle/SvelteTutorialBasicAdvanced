<div class="box"></div>

<!-- En el componente que le queremos cambiar el estilo
 se debe hacer lo siguiente: var(--color, #ddd) -->

<style>
	.box {
		width: 5em;
		height: 5em;
		border-radius: 0.5em;
		margin: 0 0 1em 0;
		background-color: var(--color, #ddd);
	}
</style>
