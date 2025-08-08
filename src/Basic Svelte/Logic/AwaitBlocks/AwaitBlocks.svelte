<!-- La mayoria de las aplicaciones web tiene que lidiar
 con datos asincronicos en algun momento, svelte hace facil el
 await el valor de promesas directamente en el marcado: -->
<script>
	import { roll } from './utils.js';

	let promise = $state(roll());
</script>

<button onclick={() => promise = roll()}>
	roll the dice
</button>

<!-- {#await promise}
  <p>...rolling</p>
{:then number} 
  <p>you rolled a {number}!</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await} -->

<!-- Sólo lo más reciente promise se considera, lo que significa que 
 no necesitas preocuparte por las condiciones de la carrera. -->

 <!-- Si la promesa no puede ser rechazada, puede omitir el catch block
  tambien puedes omitir el primer bloque si no quieres mostrar nada
  hasta que se resuelva la promesa -->

{#await promise then number}
  <p>you rolled a {number}</p>
{/await}
