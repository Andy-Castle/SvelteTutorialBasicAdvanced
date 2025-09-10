<script>
	import Box from './Box.svelte';
</script>

<!-- A menudo es necesario influir en los estilos dentro de un componente
 secundario, como en este ejemplo que queremos hacer cajas rojas,
 verdes y azules -->

 <!-- una forma de hacerlo es con el :global modificador CSS,
  esto permite apuntar indiscriminadamente a elementos dentro de otros
  componentes -->


  <!-- Como cualquier elementos principal (como <div class="boxes"></div>)
   puede establecer el valor de --color, pero tambien podemos configurarlo
   en componentes individuales -->
<div class="boxes">
	<Box --color="red" />
	<Box --color="green"/>
	<Box --color="blue"/>

  <!-- Esta caracteristica funciona envolviendo
   cada componente en un elemento con display: contents, cuando sea
   necesario y aplicandole las propiedades personalizadas, si 
   inspeccionas los elementos, veras un marcado como este -->
  <!-- Ya qur por causa de display: contents, esto no afectara tu
   diseño, sino el elemento adicional can affect selectors like
   .parent > .child  -->
  <svelte-css-wrapper style="display: contents; --color:purple">
    <Box/>
  </svelte-css-wrapper>
</div>




<!-- Pero hay problemas con este, ya que es extremadamente
 verboso, por otro lado es fragil, cualquier cambio en los detalles
 de implementaciín de Box.svelte podria romper el selector -->

<!-- Pero por asi decirlo es de mala educacion, los componentes
 deberian poder decidir por si mismos que estilos se puede controlar
 desde fuera, de la misma manera que deciden que variables estan
 expuestas como accesorios. :global debe de utilizarse como ultimo
 recurso -->

<!-- <style>
  .boxes :global(.box:nth-child(1)){
    background-color: red;
  }

    .boxes :global(.box:nth-child(2)){
    background-color: green;
  }

      .boxes :global(.box:nth-child(3)){
    background-color: blue;
  }
</style> -->
