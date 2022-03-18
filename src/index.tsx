import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYmlycmVpbiIsImEiOiJjbDByeTlmdWkwMzhvM2RucTZ5cHA1cWYxIn0.OIcl-c_VUWkSUmJYuh-VBw';

if (!navigator.geolocation) {
  alert('Geolocation is not supported by your browser');
  throw new Error('Geolocation is not supported by your browser');
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);
