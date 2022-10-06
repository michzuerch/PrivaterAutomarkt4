<script>
	import '../app.postcss';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="app">
	<header>
		<Header />
	</header>

	<main>
		<div class="w-full h-full mx-auto p-20">
			<slot />
		</div>
	</main>

	<footer>
		<Footer />
	</footer>
</div>
