/*Antes no tenia el $state */
export const counter = $state({
  count: 0,
});

/*Al añadir el $state, este arroja error porque el .js
no acepta las runas, y solo hay que cambiar a .svelte.js */
