<script>
	import PackageInfo from './PackageInfo.svelte';

	const pkg = {
		name: 'svelte',
		version: 5,
		description: 'blazing fast',
		website: 'https://svelte.dev'
	};
</script>

<!-- En este caso se nos olvido pasar el prop de name -->
<!-- <PackageInfo
  name={pkg.name}
	version={pkg.version}
	description={pkg.description}
	website={pkg.website}
/> -->

<!-- Pero datos que las propiedades de pkg corresponden a las propiedades
 esperadas del componente, podemos extenderlas en el componente -->
 <PackageInfo {...pkg}/>
