import { PlacesProvider } from './context/';
import { HomeScreen } from './screens/HomeScreen';
import './styles.css';
import { MapProvider } from './context/';

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  )
}