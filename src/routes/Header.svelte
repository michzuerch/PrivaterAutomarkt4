<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<div class="dropdown">
				<label class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/></svg
					>
				</label>
				<ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
					<li><a href="gallery">Galerie</a></li>
					<li><a href="location">Standort</a></li>
					<li><a href="impressum">Impressum</a></li>
				</ul>
			</div>
			<a href="/" class="btn btn-ghost normal-case text-xl">Privater Automarkt</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal p-0">
				<li><a href="gallery">Galerie</a></li>
				<li><a href="location">Standort</a></li>
				<li><a href="impressum">Impressum</a></li>
			</ul>
		</div>
		<div class="navbar-end">
			<a href="https://mobile.de" class="btn">Unsere Fahrzeuge auf mobile.de</a>
		</div>
	</div>
</header>
