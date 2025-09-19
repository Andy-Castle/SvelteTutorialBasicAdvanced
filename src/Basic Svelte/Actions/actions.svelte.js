/* 
Echemos un vistazo al trapFocus funcion en actions.svelte.js. Una
función de acción se llama con a node - el <div class="menu"> en
nuestro caso - cuando el nodo esta montado en el DOM. Dentro de
la acción, tenemos un efecto.
*/

export function trapFocus(node) {
  const previous = document.activeElement;

  function focusable() {
    return Array.from(
      node.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    );
  }

  function handleKeydown(event) {
    if (event.key !== "Tab") return;

    const current = document.activeElement;

    const elements = focusable();
    const first = elements.at(0);
    const last = elements.at(-1);

    if (event.shiftKey && current === first) {
      last.focus();
      event.preventDefault();
    }

    if (!event.shiftKey && current === last) {
      first.focus();
      event.preventDefault();
    }
  }

  /* 
  Primero, necesitamos agregar un detector de eventos que intercepte
  las pulsaciones de teclas Tab:
  */

  $effect(() => {
    focusable()[0]?.focus();
    // TODO finish writing the action
    node.addEventListener("keydown", handleKeydown);
  });

  /* 
  En segundo lugar, debemos realizar una limpieza cuando el nodo está
  desmontado - eliminado el detector de eventos y restaurado el foco
  a donde estaba antes de montar el elemento:
  */
  return () => {
    node.removeEventListener("keydown", handleKeydown);
    previous?.focus();
  };

  //Ahora, cuando abres el menú, puedes recorrer las opciones con la tecla Tab
}
