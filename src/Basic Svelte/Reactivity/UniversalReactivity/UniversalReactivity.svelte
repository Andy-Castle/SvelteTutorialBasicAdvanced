<script>
	import Counter from './Counter.svelte';
  /*Aqui antes de que le añada algo se ven 3 botones en el cual todos estos
  comparten el mismo estado, osea le suman + 1 y todos se le ve reflejado*/
</script>

<!-- Anteriormente se utilizo las runas para agregar reactividad
 dentro de los componente, pero tambien se puede utilizar runas
 exterior componentes, por ejemplo para compartir algun estado global -->

<Counter />
<Counter />
<Counter />
