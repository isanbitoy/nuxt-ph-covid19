<template>
	<div id="sub-header" class="subheader__wrapper">
		<div class="segment__A">
			<div class="main--info">Alert level: <span>Code RED level 2</span></div>
		</div>
		<div class="segment__B">
			<div class="sub--info">{{ info }}</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			info: "LGU Tagum is now under Enhanced Community Quarantine from April 5, 2020 to April 20, 2020"
		}
	}
};
</script>
