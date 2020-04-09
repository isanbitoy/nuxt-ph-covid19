<template>
	<div id="footer" class="footer__wrapper">
		<div>
			<span><small>developed by</small></span>
			<span><small>
				<a class="author" target="_blank"
					:href="authorLink">
					{{ author }}
				</a>
			</small></span>
			<span><small>|</small></span>
		</div>
		<div>
			<span><small>resources</small></span>
			<span><small>
				<a class="author" target="_blank"
					:href="sourceLink">
					{{ source }}
				</a>
			</small></span>
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			author: 'Lisandro A. Bitoy',
			authorLink: 'https://isan-web-portfolio.netlify.com/',
			source: 'City Government of Tagum',
			sourceLink: 'https://www.facebook.com/tagumcity/'
		}
	}
};
</script>