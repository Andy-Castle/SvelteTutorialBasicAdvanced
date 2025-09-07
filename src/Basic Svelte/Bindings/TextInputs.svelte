<!-- Como regla general, el flujo de datos en svelte es de arriba abajo
 ,un componente puede establecer propiedades en un componente secundario,
 y un componente puede establecer atributos en un elementos, pero no al reves. -->

 <!-- A veces es util romper esa regla. En este caso tomemos el input elemento,
  en este componente, nosotros podemos añadir un oninput controlador de eventos
  que establece el valor de name to event.target.value, pero es un poco repetitivo.
  La cosa empeora aun mas con otros elementos del formulario. -->

  <!-- En este caso podemos usar bind:value la directiva -->
<script>
	let name = $state('world');
  $inspect(name)
</script>

<input bind:value={name} />
<!-- Esto significa que no solo cambiaria el valor de name actualice el
 valor de entrada, pero los cambios en el valor de entrada se actualizaran
 name -->

<h1>Hello {name}!</h1>
