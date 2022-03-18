import { useContext } from 'react';
import { PlacesContext, MapContext } from '../context';

export const BtnMyLocation = () => {
  const { userLocation } = useContext(PlacesContext);
  const { map, isMapReady } = useContext(MapContext)

  const onClick = () => {
    if (!isMapReady) throw new Error('Map is not ready');
    if (!userLocation) throw new Error('User location is not available');

    map?.flyTo({ center: userLocation });
  };

  return (
    <button
      className="btn btn-primary"
      onClick={onClick}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 999,
      }}
    >
      My Location
    </button>
  );
};
