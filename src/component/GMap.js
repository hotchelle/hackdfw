import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { blue } from '@material-ui/core/colors';
import anotherOne from "../anotherOne.PNG";
import smallOne from "../smallOne.png"


//'location': '32.750909,-97.0600161',

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 32.7509,
  lng: -97.0600
};

const locations =
  [{
    name: "loc1",
    prob: 2,
    location: {
      lat: 32.750909,
      lng: -97.0600161
    }

  },

  {
    name: "loc2",
    prob: 0,
    location: {
      lat: 32.751909,
      lng: -97.0600161
    }

  },

  {
    name: "loc3",
    prob: 0,
    location: {
      lat: 32.752909,
      lng: -97.0600161
    }

  },

  {
    name: "loc4",
    prob: 0,
    location: {
      lat: 32.753909,
      lng: -97.0600161
    }

  },


  ]


const onLoad = marker => {
  console.log('marker: ', marker)
}


const GMap = ({ zoom }) => {
  const [mapInstance, setMapInstance] = useState(0);
  return (
    <div style = {{display: 'flex', justifyContent: 'center', flex: 1}}>
      <LoadScript
        googleMapsApiKey="API_KEY"
      >
        <GoogleMap
        style = {{alignContent: 'center'}}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={(map) => setTimeout(() => setMapInstance(map))}
        >
          {mapInstance && locations.map(item => {
            return (<Marker key={item.name} position={item.location} icon= {item.prob > 1 ? smallOne : null}/>)
          })}
        </GoogleMap>
      </LoadScript>
    </div>

  )
}

export default React.memo(GMap)