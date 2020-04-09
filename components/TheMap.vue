<template>
	<div id="map" class="map__wrapper">
		<client-only>
			<l-map
				style="height: 100%"
				:zoom="zoomView"
				:maxZoom="maxZoom"
				:minZoom="minZoom"
				:center="centerView">

				<l-tile-layer 
					:url="tileUrl" 
					:attribution="tileAttribute">
				</l-tile-layer>

				<l-geo-json :geojson="geojson"
					:options="optionFunction"
					:options-style="styleFunction">
				</l-geo-json>

				<l-control position="topright">
					<div class="legend">
						<h4>Population Density</h4>
						<i style="background: #FFEDA0"></i><span>0 - 1,000</span><br>
						<i style="background: #FED976"></i><span>1,000 - 5,000</span><br>
						<i style="background: #FEB24C"></i><span>5,000 - 10,000</span><br>
						<i style="background: #FD8D3C"></i><span>10,000 - 15,000</span><br>
						<i style="background: #FC4E2A"></i><span>15,000 - 20,000</span><br>
						<i style="background: #E31A1C"></i><span>20,000 - 30,000</span><br>
						<i style="background: #BD0026"></i><span>30,000 - 40,000</span><br>
						<i style="background: #800026"></i><span>40,000 +</span><br>
					</div>
				</l-control>
				
			</l-map>
		</client-only>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			tileUrl: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
			tileAttribute: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
			centerView: [7.4241503, 125.8194842],
			zoomView: 11,
			maxZoom: 15,
			minZoom: 11,
			geojson: null
		}
	},
	mounted() {
		this.initLayer();
	},
	methods: {
		initLayer: function() {
			this.geojson = boundaries.features;
		}
	},
	computed: {
		getColor: function() {
			return (e) => {
				return e > 40000 ? '#800026':
					e > 30000 ? '#BD0026':
					e > 20000 ? '#E31A1C':
					e > 15000 ? '#FC4E2A':
					e > 10000 ? '#FD8D3C':
					e > 5000 ? '#FEB24C':
					e > 1000 ? '#FED976':
							'#FFEDA0';
			}
		},
		styleFunction: function() {
			return (feature) => {
				return {
					fillColor: this.getColor(feature.properties.POP),
					weight: 2,
					opacity: 1,
					color: '#FFF',
			        dashArray: '6',
			        fillOpacity: 0.8
		    	}
			}
		},

		optionFunction() {
			return {
				onEachFeature: this.onEachFeatureFunc
			}
		},
		highlightLayer: function() {
			return (e) => {
				let layer = e.target;
				layer.setStyle({
					weight: 3,
					color: '#78c679',
					dashArray: '',
					fillOpacity: 0.6
				});
				if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
					layer.bringToFront();
				}
			}
		},
		resetHighlightLayer: function() {
			return (e) => {
				let layer = e.target;
				layer.setStyle({
					weight: 2,
					opacity: 1,
					color: '#FFF',
					dashArray: '6',
					fillOpacity: 0.8
				}); 
			}
		},
		onEachFeatureFunc: function() {
			return (feature, layer) => {
				layer.bindTooltip(
					"<div><span style='color:green; font-size: 1.2rem; font-weight:bold;'>" +
						feature.properties.NAME +
					"</span></div><table class='info__table'><tr><td>Est. Population</td>" +
						"<td><span style='font-weight:bold;'>" +
							feature.properties.POP +
						"</span></td>" +
					"</tr><tr><td>Confirmed Cases</td>" +
						"<td><span style='color:red; font-weight:bold;'>" +
							feature.properties.CC +
						"</span></td>" +
					"</tr><tr><td>PUIs</td>" +
						"<td><span style='color:red; font-weight:bold;'>" +
							feature.properties.PUI +
						"</span></td>" +
					"</tr><tr><td>PUMs</td>" +
						"<td><span style='color:red; font-weight:bold;'>" +
							feature.properties.PUM +
						"</span></td>" +
					"</tr><tr><td>Recovered</td>" +
						"<td><span style='color:green; font-weight:bold;'>" +
							feature.properties.RECOVERED +
						"</span></td>" +
					"</tr><tr><td>Death</td>" + 
						"<td><span style='color:red; font-weight:bold;'>" +
							feature.properties.DEATH +
						"</span></td>" +
					"</tr></table>",
					{ permanent: false, sticky: false }
				);
				layer.on({
					mouseover: this.highlightLayer,
					mouseout: this.resetHighlightLayer
				});
			}
		}
	}
};
</script>