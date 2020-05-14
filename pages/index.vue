<template>
	<div class="app--wrapper">
		<the-header />
		<the-sub-header />
		<main>
			<section class="section__A">
				<the-side-panel />
			</section>
			<section class="section__null--divider"></section>
			<section class="section__B">
				<the-map />
			</section>
		</main>
		<div class="flourish-embed flourish-chart" 
			data-src="visualisation/2389383" 
			data-url="https://flo.uri.sh/visualisation/2389383/embed">
			<script src="https://public.flourish.studio/resources/embed.js"></script>
		</div>
		<the-footer />
	</div>
</template>

<style>
.app--wrapper {
	position: relative;
	margin: 0.5rem;
}
</style>