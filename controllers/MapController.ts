import { store, mapSlice } from '../store';
import { config } from '../config'

class MapController {

	initMap = () => {

	}

	changeLocation = async () => {

	}

	getStops = async () => {
		const request = await fetch(config.endPoints.busStops);
		const response = await request.json();
		store.dispatch(mapSlice.actions.setValue({key: 'busStops', value: response.features}));
	}
}

export const mapController = new MapController();
