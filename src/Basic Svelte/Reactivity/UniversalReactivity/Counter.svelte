<script>
	import { counter } from './shared.svelte.js';
</script>

<!-- En counter todos los componentes de este ejercicio importan el counter
 objeto de shared.JSON, pero este es un objeto normal, asi que lo vamos
 ha envolver en $state -->

<button onclick={() => counter.count += 1}>
	clicks: {counter.count}
</button>

<!-- Ahora, cuando haces clic en cualquier botón, los tres se 
 actualizan simultáneamente. -->

<!-- No puedes exportar un $state declaración de un módulo si la 
 declaración se reasigna (en lugar de simplemente mutar), porque los 
 importadores no tendrían forma de saberlo -->