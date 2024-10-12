import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { SelectDestination, SelectOrigin, setTravelInformation } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import{useRef} from "react"


const Map = () => {
  const origin = useSelector(SelectOrigin); // donne la valeur de la recherche
  const destination = useSelector(SelectDestination);
  //refernece to the map
  const mapRef = useRef(null);
  const dispatch = useDispatch()

  useEffect(() =>{
    if(!origin || !destination) return;

    //zoom and fit the markers
    mapRef.current.fitToSuppliedMarkers(['origin','destination'],{
        edgePadding:{top:50,right:50,bottom:50,left:50},
    })
  }

  ,[origin,destination]);


  useEffect(() => {
    if (!origin || !destination) return;
  
    const getTravelTime = () => {
      fetch( `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
      .then((res) => res.json()) 
      .then((data) =>
    {
      dispatch(setTravelInformation(data.rows[0].elements[0]));
    });
     
    };
  
    getTravelTime();
  }, [origin, destination]); // 'GOOGLE_MAPS_APIKEY' n'a pas besoin d'être dans les dépendances
  
  return (
    <MapView
    ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={origin.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};
export default Map;
