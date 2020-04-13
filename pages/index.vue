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
		<the-footer />
	</div>
</template>

<style>
.app--wrapper {
	position: relative;
	margin: 0.5rem;
}
</style>