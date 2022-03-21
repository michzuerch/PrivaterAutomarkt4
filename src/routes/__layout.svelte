<script>
	import '../app.css';
    import Navbar from '../components/navbar.svelte';
</script>

<div class="min-h-screen dark:bg-coolGray-800 dark:text-coolGray-100">
  <Navbar/>
	<slot />
</div>
