<script lang="ts">
	import type { Options } from '@splidejs/splide';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';

	let options: Options = {
		rewind: true,
		gap: '1rem',
		autoplay: true,
		pauseOnHover: false,
		arrows: 'slider',
		height: '30rem'
	};
</script>

<Splide {options} hasSliderWrapper>
	<SplideSlide>
		<img src="Autos/Gallery/1.jpg" alt="Image 1" />
	</SplideSlide>
	<SplideSlide>
		<img src="Autos/Gallery/2.jpg" alt="Image 2" />
	</SplideSlide>
	<svelte:fragment slot="after-slider">
		<div class="splide__progress">
			<div class="splide__progress__bar" />
		</div>

		<div class="splide__autoplay">
			<button class="splide__play">Play</button>
			<button class="splide__pause">Pause</button>
		</div>
	</svelte:fragment>
</Splide>

<style>
	.slide-progress {
		background: #ccc;
	}

	.slide-progress-bar {
		background: greenyellow;
		height: 2px;
		transition: width 400ms ease;
		width: 0;
	}
</style>
