import { createSlice } from '@reduxjs/toolkit';
import { MapStateType } from '../types';

const initialState: MapStateType = {
  loaded: false,
	name: 'walter',
  layers: [],
  map: null,
  mapView: null,
  routes: [],
  vehicles: [],
  busStops: [],
  selectedRoute: null,
  selectedVehicle: null,
  selectedStop: null,
  features: [],
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    clearList: (state:any, action: {payload: {keys: string[]}}) => {
      action.payload.keys.forEach((key) => (state[key] = []));
    },
    switch: (state:any, action: {payload: {key: string}}) => {
      state[action.payload.key] = !state[action.payload.key];
    },
    addItems: (state:any, action: {payload: {key: string, list: any[]}}) => {
      state[action.payload.key] = [
        ...state[action.payload.key],
        ...action.payload.list,
      ].sort((a, b) => a - b);
    },
    setValue: (state:any, action: {payload: {key: string, value: any}}) => {
      state[action.payload.key] = action.payload.value;
    },
    clearFeatures: (state) => {
      state.features = []
    },
    addFeatures: (state, action) => {
      state.features = [
        ...state.features,
        { id: action.payload.layerId, attributes: action.payload.attributes },
      ];
    },
    updateFeatures: (state, action) => {
      state.features = [
        ...state.features,
        { id: action.payload.layerId, attributes: action.payload.features },
      ];
    },
  },
});