<!-- Los key blocks destruyen y recrean su contenido cuando
 cambia el valor de una expresion. Esto es util si desea que un elemento
 reproduzca su transicion cada vez que cambia un valor en lugar de solo
 cuando el elemento ingresa o sale del DOM -->

<!-- En este ejemplo nos gustaria usar el typewriter transition
 desde transition.js cada vez que se carga el mensaje, es decir i cambios
 . Envuelve el <p> elemento en un bloque de claves. -->
<script>
	import { typewriter } from './transition.js';
	import { messages } from './loading-messages.js';

	let i = $state(-1);

	$effect(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= messages.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<h1>loading...</h1>

{#key i}
<p in:typewriter={{ speed: 10 }}>
	{messages[i] || ''}
</p>
{/key}