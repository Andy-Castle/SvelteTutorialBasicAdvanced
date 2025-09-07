<script>
	import Stepper from './Stepper.svelte';

	let value = $state(0);
</script>

<p>The current value is {value}</p>
<!-- Aqui definimos los controladores -->
<Stepper 
increment={() => value += 1}
decrement={() => value -= 1} 
/>
