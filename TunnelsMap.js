import React, {Component} from 'react';
import MapView from 'react-native-maps';

const initialCoords = {
  latitude: 43.0861,
  longitude: -77.6705,
  latitudeDelta: 0.0522,
  longitudeDelta: 0.0421,
};

class TunnelsMap extends Component {

  var coords = [
    {latitude : 43.084896, longitude : -77.673350},//Ritter Entrance 1
    {latitude : 43.084437, longitude: -77.673889},//Clark Gym 1
    {latitude : 43.084336, longitude : -77.673766},//Clark Gym Entrance 1
    {latitude : 43.084346, longitude : -77.673869},//Clark Gym Entrance 2
    {latitude : 43.084179, longitude : -77.673946},//Campus Center Entrance
    {latitude : 43.083673, longitude : -77.673913},//Back Campus Center Entrance
    {latitude : 43.083942, longitude : -77.674499},//Ritz Entrance
    {latitude : 43.084153, longitude : -77.674958},//Artenaso Entrance
    {latitude : 43.084023, longitude : -77.675539},//SAU Back Entrance
    {latitude : 43.084445, longitude : -77.673526},//Interfaith Center Entrance
    {latitude : 43.083828, longitude : -77.673591},//Interfaith Center Back Entrance
    {latitude : 43.083786, longitude : -77.673465},//SAU Creepy Back Entrance
    {latitude : 43.083841, longitude : -77.675874},//Library Entrance 1
    {latitude : 43.083578, longitude : -77.676453},//Library Entrance 2
    {latitude : 43.084287, longitude : -77.676545},//Library Front Entrance
    {latitude : 43.084632, longitude : -77.676319},//COLA Entrance 1
    {latitude : 43.084484, longitude : -77.676561},//COLA Entrance 2
    {latitude : 43.084322, longitude : -77.677307},//Gleason Entrance 1
    {latitude : 43.084048, longitude : -77.677451},//Gleason Entrance 2
    {latitude : 43.083770, longitude : -77.677356},//Gosnell Entrance 1
    {latitude : 43.083601, longitude : -77.676740},//Gosnell Entrance 2
    {latitude : 43.083458, longitude : -77.676899},//Gosnell Entrance 3
    {latitiude : 43.083502, longitude : -77.677543},//Gosnell Entrance 4
    {latitiude : 43.083684, longitude : -77.678120},//Gosnell Entrance 5
  ];

  render(){
    return(
      <MapView
        style = {{flex: 1}}
        initialRegion={initialCoords}
      >
      <MapView.Marker
        coordinate={coords[0]}
        title="Ritter Entrance 1"
      />
      <MapView.Marker
        coordinate={coords[1]}
        title="Clark Gym 1"
      />
      <MapView.Marker
        coordinate={coords[2]}
        title="Clark Gym Entrance 1"
      />
      <MapView.Marker
        coordinate={coords[3]}
        title="Clark Gym Entrance 2"
      />
      <MapView.Marker
        coordinate={coords[4]}
        title="Campus Center Entrance"
      />
      <MapView.Marker
        coordinate={coords[5]}
        title="Back Campus Center Entrance"
      />
      <MapView.Marker
        coordinate={coords[6]}
        title="Ritz Entrance"
      />
      <MapView.Marker
        coordinate={coords[7]}
        title="Artenaso Entrance"
      />
      <MapView.Marker
        coordinate={coords[8]}
        title="SAU Back Entrance"
      />
      <MapView.Marker
        coordinate={coords[9]}
        title="Interfaith Center Entrance"
      />
      <MapView.Marker
        coordinate={coords[10]}
        title="Interfaith Center Back Entrance"
      />
      <MapView.Marker
        coordinate={coords[11]}
        title="SAU Creepy Back Entrance"
      />
      <MapView.Marker
        coordinate={coords[12]}
        title="Library Entrance 1"
      />
      <MapView.Marker
        coordinate={coords[13]}
        title="Library Entrance 2"
      />
      <MapView.Marker
        coordinate={coords[14]}
        title="Library Front Entrance"
      />
      <MapView.Marker
        coordinate={coords[15]}
        title="COLA Entrance 1"
      />
      <MapView.Marker
        coordinate={coords[16]}
        title="COLA Entrance 2"
      />
      <MapView.Marker
        coordinate={coords[17]}
        title="Gleason Entrance 1"
      />
      <MapView.Marker
        coordinate={coords[18]}
        title="Gleason Entrance 2"
      />
      <MapView.Marker
        coordinate={coords[19]}
        title="Gosnell Entrance 1"
      />
      <MapView.Marker
        coordinate={coords[20]}
        title="Gosnell Entrance 2"
      />
      <MapView.Marker
        coordinate={coords[21]}
        title="Gosnell Entrance 3"
      />
      <MapView.Marker
        coordinate={coords[22]}
        title="Gosnell Entrance 4"
      />
      <MapView.Marker
        coordinate={coords[23]}
        title="Gosnell Entrance 5"
      />
      </MapView>
    );
  }
}
