<script>
	import Thing from './Thing.svelte';

	let things = $state([
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	]);
</script>

<button onclick={() => things.shift()}>
	Remove first thing
</button>

<!-- De forma predeterminada, actualizar el valor de un each block,
 agregara o eliminara nodos DOM en el fin del bloque si el tamaño cambia
 y actualice el DOM restante, eso no es lo que queremos -->

{#each things as thing (thing.id)}
	<Thing name={thing.name} />
{/each}

<!--Una forma de solucionarlo sería hacerlo emoji a $derived valor. 
Pero tiene más sentido eliminar el primero <Thing> componente por 
completo en lugar de eliminar el último uno y actualizar todos los 
demás.-->

<!-- Para ello, especificamos un unico clave para cada iteracion del each
 block -->

<!-- Puedes usar cualquier objeto como clave, ya que Svelte usa a Map 
 internamente — en otras palabras, podrías hacerlo (thing) en lugar de 
 (thing.id). Sin embargo, usar una cadena o un número generalmente es 
 más seguro, ya que significa que la identidad persiste sin igualdad 
 referencial, por ejemplo al actualizar con datos nuevos de un servidor 
 API. -->