import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/cycling',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
  }
})

export default directionsApi;