 <!-- El bubbling es cuando se agrega un detector de eventos a un 
  elemento principal y el usuario hace click en el elemento secundario -->

  <!-- Normalmente, los controladotes de eventos se ejecutan durante el 
 bubbling phase. En este caso sucede si escribes algo en el <input>, 
 en este ejemplo el controlador interno se ejecuta primero a medido que el
 evento burbujea desde el objetivo hasta el documento, seguido por el
 controlador externo.-->

 <!-- A veces uno desea que los controladores se ejecuten durante
  el capturar fase en su lugar. Agregar capture hasta el final
  del nombre del evento. -->


<!-- <div onkeydown={(e) => alert(`<div> ${e.key}`)} role="presentation">
	<input onkeydown={(e) => alert(`<input> ${e.key}`)} />
</div> -->

<div onkeydowncapture={(e) => alert(`<div> ${e.key}`)} role="presentation">
	<input onkeydowncapture={(e) => alert(`<input> ${e.key}`)} />
</div>

<!-- Ahora el orden relativo se invierte. Si existen controladores de
 captura y no captura para un evento determinado, los controladores
 de captura se ejecutaran primero -->

