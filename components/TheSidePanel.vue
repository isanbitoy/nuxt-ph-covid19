<template>
	<div id="side-panel" class="panel__wrapper">
		<div class="infos">
			<div class="head--container">TAGUM CASE COUNT</div>
			<div class="date--container">As of <span>{{ date.currentDate }}</span></div>
		</div>
		<div class="indicators">
			<div v-for="(data, index) in stat" :key="index" class="box">
				<div :class="data.className"></div>
				<div class="panel--container">
					<h1>{{ data.label }}</h1>
					<span class="stat--container">
						{{ data.stat }}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import stat from '~/assets/data/stats.json'
import date from '~/assets/data/date.json' 

export default {
	data: () => {
		return {
			stat,
			date,
			warning_a: "STAY AT HOME",
			warning_b: "WASH HANDS REGULARLY",
			warning_c: "AVOID TOUCHING YOUR FACE",
			warning_d: "OBSERVE SOCIAL DISTANCING",
			warning_e: "AVOID GROUP GATHERINGS",
			warning_f: "STAY HEALTHY!",
		}
	}
};
</script>