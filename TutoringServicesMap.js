import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {StyleSheet,View,Text,Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Constants from './App';

const initialCoords = {
latitude: 43.0861,
longitude: longitude: -77.6705,
latitudeDelta: 0.0522,
longitudeDelta: 0.0421,
};

function getCallout(title, text){
	return(
	<MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>{title}</Text>
               </View>
               <View>
               <Text>{text}</Text>
               </View>
               </View>
    </MapView.Callout>
    );
}

class TutoringServicesMap extends Component {
    static navigationOptions= {header:null};
    render(){
    	var coords = [
    		{latitude: 43.083190,longitude: -77.676915},//Accounting/Finance
    		{latitude: 43.083408,longitude: -77.677146},//Chemistry/Physics
    		{latitude: 43.083977,longitude: -77.679325},//Comp Sci
    		{latitude: 43.084542,longitude: -77.679570},//Comp Sec
    		{latitude: 43.084159,longitude: -77.680178},//Game Design & New Media
    		{latitude: 43.083856,longitude: -77.679769},//IS&T
    		{latitude: 43.083870,longitude: -77.679823},//Software Engineering
    		{latitude: 43.085482,longitude: -77.679113},//Biomed/Chemical Engineering
    		{latitude: 43.084515,longitude: -77.678093},//Computer Engineering
    		{latitude: 43.084383,longitude: -77.677243},//Electrical & Microelectronic Engineering
    		{latitude: 43.084253,longitude: -77.678216},//Industrial & Systems Engineering
    		{latitude: 43.084150,longitude: -77.677178},//Mechanical Engineering
    	];
    	return(
    		<MapView
               style = {{flex: 1}}
               initialRegion={initialCoords}
            >
            <Mapview.Marker
            	coordinate={coords[0]}
            >
            {getCallout("Accounting/Finance", "Lowenthal Hall, 3rd floor study lounge")}
            </Mapview.Marker>
            <Mapview.Marker
            	coordinate={coords[1]}
            >
            {getCallout("Chemistry/Physics", "Gosnell College of Science")}
            </Mapview.Marker>
            <Mapview.Marker
            	coordinate={coords[2]}
            >
            {getCallout("Computer Science", "Golisano 3660")}
            </Mapview.Marker>
            <Mapview.Marker
            	coordinate={coords[3]}
            >
            {getCallout("Computing Security", "Golisano 2410")}
            </Mapview.Marker>
            <Mapview.Marker
            	coordinate={coords[4]}
            >
            {getCallout("Game Design & New Media", "Golisano 2000 & 2550")}
            </Mapview.Marker>
            <Mapview.Marker
            	coordinate={coords[5]}
            >
            {getCallout("Information Science & Technology", "Golisano 2670")}
            </Mapview.Marker>
            <Mapview.Marker
            	coordinate={coords[6]}
            >
            {getCallout("Software Engineering", "Golisano 1670")}
            </Mapview.Marker>
            <Mapview.Marker
            	coordinate={coords[7]}
            >
            {getCallout("Biomedical/Chemical Engineering", "Institute Hall 3101 & 2101")}
            </Mapview.Marker>
            <Mapview.Marker
            	coordinate={coords[8]}
            >
            {getCallout("Computer Engineering", "GLE-3452")}
            </Mapview.Marker>
            <Mapview.Marker
            	coordinate={coords[9]}
            >
            {getCallout("Electrical & Microelectronic Engineering", "North Side of Erdle Commons")}
            </Mapview.Marker>
            <Mapview.Marker
            	coordinate={coords[10]}
            >
            {getCallout("Industrial & Systems Engineering", "")}
            </Mapview.Marker>
            <Mapview.Marker
            	coordinate={coords[11]}
            >
            {getCallout("Mechanical Engineering", "South side of Erdle Commons")}
            </Mapview.Marker>
            </MapView>
    		);
    }
}