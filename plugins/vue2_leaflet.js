import Vue from 'vue';
import { LMap, LTileLayer, LGeoJson, LControl, LCircle, LTooltip } from 'vue2-leaflet';

const VueLeaflet = {
	install(Vue, options) {
		Vue.component('l-map', LMap)
		Vue.component('l-tile-layer', LTileLayer)
		Vue.component('l-geo-json', LGeoJson)
		Vue.component('l-control', LControl)
		Vue.component('l-circle', LCircle)
		Vue.component('l-tooltip', LTooltip)
	}
};
Vue.use(VueLeaflet)
export default VueLeaflet;