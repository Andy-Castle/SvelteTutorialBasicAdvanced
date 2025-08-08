<script>
	let { name, version, description, website } = $props();

  // En este caso se puede tener un objeto que contenga todo los datos
  //usando una propiedad de descanso
  // let {name, ...stuff} = $props();

  //o saltando desestructuracion en conjunto
  // let stuff = $props();
  // console.log(stuff.name, stuff.version, stuff.description, stuff.website)

</script>

<p>
	The <code>{name}</code> package is {description}. Download version {version} from
	<a href="https://www.npmjs.com/package/{name}">npm</a> and <a href={website}>learn more here</a>
</p>
