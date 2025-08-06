<script>
	import Nested from './Nested.svelte';
</script>

<!-- Hasta ahora solo hemos usado ocupado exclusivamente el estado
 interno, osea los valores son accesibles dentro de un componente
 determinado -->

<!-- En una aplicacion real, se necesitara pasar datos de un 
 componente a sus hijos. Para ello se declaran propiedades o props.
 En Svelte se hace con $props es una runa -->

<Nested answer={42} />
