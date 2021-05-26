import React, { useState, useCallback} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

function LocationMap({data, title, type}) {
    let ipData,
    dataError;
    if(type === "location" && data){
        const {ipLocationData, ipLocationError} = data
        ipData = ipLocationData
        dataError = ipLocationError
    }else if(type === "search" && data){
        const {ipUrlSearchData, ipUrlSearchError} = data
        ipData = ipUrlSearchData
        dataError = ipUrlSearchError
    }
    
    const containerStyle = {
        width: '100%',
        height: '350px'
      };
      
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCdSonVIwLNizDYyum-HCCzpXeR5YxSfKA"
      })
      const [map, setMap] = useState(null)

      const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = useCallback(function callback(map) {
        setMap(null)
      }, [])
      return (
          <div>
           <h5 className="text-center mb-3">{title}</h5>
          {isLoaded && ipData && !dataError ? <GoogleMap
            mapContainerStyle={containerStyle}
            center={{
                lat: ipData.latitude || 0,
                lng: ipData.longitude || 0
              }}
            zoom={13}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker position={{
                lat: ipData.latitude || 0,
                lng: ipData.longitude || 0
            }}/>
          </GoogleMap> : (<h6>No Data Available</h6>)}
          </div>
      )
      
    }
export default React.memo(LocationMap)