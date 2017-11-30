import React, {Component} from 'react';
import MapView from 'react-native-maps';

const initialCoords = {
  latitude: 43.0861,
  longitude: -77.6705,
  latitudeDelta: 0.0522,
  longitudeDelta: 0.0421,
};

class DiningMap extends Component {
  var coords = [
  	{latitude : 43.084350, longitude : -77.675061},//artenaso bakery and cafe/bytes
  	{latitude : 43.083842, longitude : -77.668691},//beanz
  	{latitude : 43.084034, longitude : -77.674531},//ben and jerry's/brick city cafe/RITZ
  	{latitude : 43.083114, longitude : -77.680653},//crossroads
  	{latitude : 43.086373, longitude : -77.668522},//the college grind
  	{latitude : 43.086364, longitude : -77.669112 },//commons
  	{latitude : 43.084896, longitude : -77.667443},//corner store
  	{latitude : 43.084312, longitude : -77.679807},//ctrl alt deli
  	{latitude : 43.083114, longitude : -77.679807},//salsaritas/global village grille
  	{latitude : 43.083756, longitude : -77.669446},//gracie's
  	{latitude : 43.08433, longitude : -77.67633},//java wally's
  	{latitude : 43.08262, longitude : -77.67960},//midnight oil
  	{latitude : 43.084014, longitude : -77.674442},//nathan's
  	{latitude : 43.085482, longitude : -77.667279}//sol's underground
  ];

  render(){
    return(
      <MapView
        style = {{flex: 1}}
        initialRegion={initialCoords}
      >
      <MapView.Marker
        coordinate={coords[0]}
        title="Artenaso Bakery and Cafe"
      />
      <MapView.Marker
        coordinate={coords[0]}
        title="Bytes"
      />
      <MapView.Marker
        coordinate={coords[1]}
        title="Beanz"
      />
      <MapView.Marker
        coordinate={coords[2]}
        title="Ben and Jerry's"
      />
      <MapView.Marker
        coordinate={coords[2]}
        title="Brick City Cafe"
      />
      <MapView.Marker
        coordinate={coords[2]}
        title="RITZ Sports Zone"
      />
      <MapView.Marker
        coordinate={coords[3]}
        title="Crossroads"
      />
      <MapView.Marker
        coordinate={coords[4]}
        title="The College Grind"
      />
      <MapView.Marker
        coordinate={coords[5]}
        title="Commons"
      />
      <MapView.Marker
        coordinate={coords[6]}
        title="The Corner Store"
      />
      <MapView.Marker
        coordinate={coords[7]}
        title="Ctrl Alt Deli"
      />
      <MapView.Marker
        coordinate={coords[8]}
        title="Salsarita's"
      />
      <MapView.Marker
        coordinate={coords[8]}
        title="Global Village Grille"
      />
      <MapView.Marker
        coordinate={coords[9]}
        title="Gracie's"
      />
      <MapView.Marker
        coordinate={coords[10]}
        title="Java Wally's"
      />
      <MapView.Marker
        coordinate={coords[11]}
        title="Midnight Oil"
      />
      <MapView.Marker
        coordinate={coords[12]}
        title="Nathan's Soup and Salad"
      />
      <MapView.Marker
        coordinate={coords[13]}
        title="Sol's Underground"
      />
      </MapView>
    );
  }
}
