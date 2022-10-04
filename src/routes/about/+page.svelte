<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div>
	<h1 class="text-5xl text-blue-500 font-serif">Test for custom fonts</h1>

	<p class="text-xl text-red-400 font-sans">
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p class="bg-red-200">
		Testseite The page you're looking at is purely static HTML, with no client-side interactivity
		needed. Because of that, we don't need to load any JavaScript. Try viewing the page's source, or
		opening the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
</div>
<div>
	<button class="btn">Hello daisyUI</button>
</div>

<div class="collapse">
	<input type="checkbox" class="peer" />
	<div
		class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
	>
		Click me to show/hide content
	</div>
	<div
		class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
	>
		<p>hello</p>
	</div>
</div>
<article class="prose lg:prose-xl">
	<h1>Garlic bread with cheese: What the science tells us</h1>
	<p>
		For years parents have espoused the health benefits of eating garlic bread with cheese to their
		children, with the food earning such an iconic status in our culture that kids will often dress
		up as warm, cheesy loaf for Halloween.
	</p>
	<p>
		But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
		springing up around the country.
	</p>
	<!-- ... -->
</article>
