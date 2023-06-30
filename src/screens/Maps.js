import React, { useCallback, useEffect, useState } from 'react';
import {
  View, StyleSheet, PermissionsAndroid,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

function Maps() {
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ]);
  }, []);
  const addMarker = useCallback((ev) => {
    setMarkers([...markers, ev.nativeEvent.coordinate]);
  }, [markers]);
  return (
    <View style={styles.wrapper}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        userLocationPriority="high"
        followsUserLocation
        showsMyLocationButton
        initialRegion={{
          latitude: 40.8062626,
          longitude: 43.856820,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        onPress={addMarker}
      >
        {markers.map((m, i) => (
          <Marker
            key={`${m.latitude}-${m.longitude}`}
            coordinate={m}
            draggable
            anchor={{
              x: 0.5,
              y: 1,
            }}
            onDragEnd={(ev) => {
              markers[i] = ev.nativeEvent.coordinate;
              setMarkers([...markers]);
            }}
            // image={pointer}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
export default Maps;
