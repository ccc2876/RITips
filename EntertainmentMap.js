import React, {Component} from 'react';
import MapView from 'react-native-maps';
import StackNavigator from 'react-navigation';
import {StyleSheet,View, Button, Alert,Text,Image} from 'react-native';

const initialCoords = {
  latitude: 43.0861,
  longitude: -77.6705,
  latitudeDelta: 0.0522,
  longitudeDelta: 0.0421,
};

class EntertainmentMap extends Component {
    static navigationOptions= {header:null};
render(){
var coords = [
{latitude: 43.0826459, longitude: -77.67460119999998},//GPC
{latitude: 43.0853195, longitude: -77.6738977},//FRIA
{latitude: 43.0844212, longitude: -77.67386650000003},//CG
{latitude: 43.0850952, longitude: -77.6716879},//GFH
{latitude: 43.0839247, longitude: -77.6746139},//RITZ
{latitude: 43.0859855, longitude: -77.66755510000002},//RITchies (currently Carlton Gibson until I get better data)
{latitude: 43.084097095096894, longitude: -77.66891766217958},//The Den
{latitude: 43.08430500000001, longitude: -77.68473700000004}//Red Barn
];

return(
<MapView
    style={{flex: 1}}
    initialRegion={initialCoords}
    >
    <MapView.Marker
        coordinate={coords[0]}
        title="Gene Polisseni Center"
        >
        <MapView.Callout tooltip={true}>
            <View style={calloutStyleBubble}>
                <View style={calloutStyleHeader}>
                    <Text style={textStyleHeader}> Gene Polisseni Center </Text>
                </View>
                <View style={calloutStyleImage}>

                </View>
                <View style={calloutStyleDesc}>
                    <Text> testing testing 1 2 3 </Text>
                </View>
            </View>
        </MapView.Callout>
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[1]}
    title="Frank Ritter Ice Arena"
    />
    <MapView.Marker
    coordinate={coords[2]}
    title="Clark Gymnasium"
    />
    <MapView.Marker
    coordinate={coords[3]}
    title="Gordon Field House"
    />
    <MapView.Marker
    coordinate={coords[4]}
    title="RITZ Sports Zone"
    />
    <MapView.Marker
    coordinate={coords[5]}
    title="RITchie's Game Room"
    />
    <MapView.Marker
    coordinate={coords[6]}
    title="The Den"
    />
    <MapView.Marker
    coordinate={coords[7]}
    title="Red Barn"
    />
</MapView>
);
}
}
const calloutStyleBubble = {
backgroundColor: '#fff',
borderRadius: 6,
borderColor: '#ccc',
borderWidth: 0.5,
padding: 15,
width: 180
}
const calloutStyleHeader = {
width: 150,
height: 50,
justifyContent: 'center',
alignItems: 'center',
};

const textStyleHeader = {
fontSize: 16,
justifyContent: 'center'
}

const calloutStyleImage = {
width: 150,
height: 100,
backgroundColor: 'skyblue'
};

const calloutStyleDesc = {
width: 150,
height: 150
};


export default EntertainmentMap
