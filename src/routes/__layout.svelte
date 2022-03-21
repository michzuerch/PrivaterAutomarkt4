<script>
	import '../app.css';
	import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
	import '@splidejs/splide/dist/css/splide.min.css';
	import Navbar from '../components/navbar.svelte';
</script>

<div class="min-h-screen dark:bg-coolGray-800 dark:text-coolGray-100">
	<Navbar />
	<slot />
</div>
