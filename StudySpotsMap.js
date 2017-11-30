import React, {Component} from 'react';
import MapView from 'react-native-maps';

const initialCoords = {
  latitude: 43.0861,
  longitude: -77.6705,
  latitudeDelta: 0.0522,
  longitudeDelta: 0.0421,
};

class StudySpotsMap extends Component {
	render(){
		var coords = [
			//Nice Day Study Spots
			{longitude: -77.6675543, latitude: 43.0856054},//Sol Heumann Quad Ellipse
			{longitude: -77.6676401, latitude: 43.0853606},//Sol heumann Quad Concrete Circle
			{longitude: -77.6699737, latitude: 43.0839775},//Barbeque Park
			{longitude: -77.6796484, latitude: 43.0831029},//Magic Center Grass
			{longitude: -77.6799595, latitude: 43.0828707},//Global Concrete Benches
			{longitude: -77.680952, latitude: 43.0828981},//Global Fire Pit
			{longitude: -77.675845, latitude: 43.084863},//Koi Pond
			{longitude: -77.6758772, latitude: 43.085149},//Gannett Roof
			{longitude: -77.68085, latitude: 43.083049},//Salsarita's Outdoor Seating
			{longitude: -77.6814026, latitude: 43.0849453},//Destler-Johnson Quad
			{longitude: -77.6765746, latitude: 43.0845535},//Liberal Arts Bench
			//Cold Day Study Spots
			{longitude: -77.679745, latitude: 43.0826102},//Midnight Oil Fireplace
			{longitude: -77.6809359, latitude: 43.0828942},//Global Fire Pit
			{longitude: -77.6739836, latitude: 43.0839227},//Fire Place Lounge
			{longitude: -77.6686943, latitude: 43.0865114},//Commons Fire Place
			//Quiet Study Spots
			{longitude: -77.6800776, latitude: 43.0824691},//Crossroads Back Hallway
			{longitude: -77.6788867, latitude: 43.0855839},//Institute Hall Sky Bridge
			{longitude: -77.6738709, latitude: 43.0841852},//SAU Quarter Mile Lookout
			{longitude: -77.6687211, latitude: 43.0866142},//Commons Study Room
			{longitude: -77.6769018, latitude: 43.0834956},//Gosnell Side Study Rooms
			{longitude: -77.6779532, latitude: 43.0842361},//Gleason Engineering Study Area
			{longitude: -77.6742277, latitude: 43.0840775},//SAU Basement
			{longitude: -77.6822448, latitude: 43.0853762},//Wegmans School Lobby
			{ longitude: -77.6798415, latitude: 43.0839971},//Golisano
			{longitude: -77.6764941, latitude: 43.0838796},//Library Floor 3
			{longitude: -77.6761186, latitude: 43.0839775},//Library Floor 4
			{longitude: -77.6785085, latitude: 43.0855878},//Bioscience Lobby
			{longitude: -77.6810378, latitude: 43.0853958},//Sustainability Study Rooms
			{longitude: -77.6802492, latitude: 43.0827434},//River Room
			//Ambient Background Noise Study Spots
			{longitude: -77.6772022, latitude: 43.0836249},//Gosnell Atrium
			{longitude: -77.6772881, latitude: 43.0836641},//Gosnell Atrium Overlook
			{longitude: -77.677567, latitude: 43.0842831},//Gleason Enginerring Hall
			{longitude: -77.6770949, latitude: 43.0838091},//Bates Study Center
			{longitude: -77.6761079, latitude: 43.085243},//Gannett Green Screen Overlook
			{logitude : -77.6738682, latitude: 43.0839364},//Fireside Lounge
			{longitude: -77.6798174, latitude: 43.0826121},//Midnight Oil
			{longitude: -77.6692307, latitude: 43.0837973},//Grace Watson Lobby
			{longitude: -77.6687291, latitude: 43.0865163},//Commons Fire Place
			{longitude: -77.6800534, latitude: 43.082667},//Crossroads
			{longitude: -77.6808581, latitude: 43.083145},//Salsarita's
			{longitude: -77.6786828, latitude: 43.0843889},//Engineering Hall
			{longitude: -77.6799166, latitude: 43.0843615},//Golisano Atrium
			{longitude: -77.6801258, latitude: 43.0845456},//Golisano Atrium Overlook
			{longitude: -77.6766175, latitude: 43.0840206},//Library Floor 1/Java Wally's
			{longitude: -77.6764244, latitude: 43.0840677},//Library Floor 2
			{longitude: -77.6789698, latitude: 43.0855662},//Chemical Engineering Lobby
			{longitude: -77.6819015, latitude: 43.0846083},//Slaughter Lobby
			{longitude: -77.6802707, latitude: 43.0850432}//CAST Floor 1
		];
		return(
			<MapView
				style = {{flex : 1}}
				initialRegion = {initialCoords}
			>
			<MapView.Marker
				coordinate={coords[0]}
				title="Sol Heumann Quad Ellipse"
			/>
			<MapView.Marker
				coordinate={coords[1]}
				title="Sol Heumann Quad Concrete Circle"
			/>
			<MapView.Marker
				coordinate={coords[2]}
				title="Barbeque Park"
			/>
			<MapView.Marker
				coordinate={coords[3]}
				title="Magic Center Grass"
			/>
			<MapView.Marker
				coordinate={coords[4]}
				title="Global Concrete Benches"
			/>
			<MapView.Marker
				coordinate={coords[5]}
				title="Global Fire Pit"
			/>
			<MapView.Marker
				coordinate={coords[6]}
				title="Koi Pond"
			/>
			<MapView.Marker
				coordinate={coords[7]}
				title="Gannett Roof"
			/>
			<MapView.Marker
				coordinate={coords[8]}
				title="Salsarita's Outdoor Seating"
			/>
			<MapView.Marker
				coordinate={coords[9]}
				title="Destler-Johnson Quad"
			/>
			<MapView.Marker
				coordinate={coords[10]}
				title="Liberal Arts Bench"
			/>
			<MapView.Marker
				coordinate={coords[11]}
				title="Midnight Oil Fire Place"
			/>
			<MapView.Marker
				coordinate={coords[12]}
				title="Global Fire Pit"
			/>
			<MapView.Marker
				coordinate={coords[13]}
				title="Fire Place Lounge"
			/>
			<MapView.Marker
				coordinate={coords[14]}
				title="Commons Fire Place"
			/>
			<MapView.Marker
				coordinate={coords[15]}
				title="Crossroads Back hallway"
			/>
			<MapView.Marker
				coordinate={coords[16]}
				title="Institute Hall Sky Bridge"
			/>
			<MapView.Marker
				coordinate={coords[17]}
				title="SAU Quarter Mile Look Out"
			/>
			<MapView.Marker
				coordinate={coords[18]}
				title="Commons Study Room"
			/>
			<MapView.Marker
				coordinate={coords[19]}
				title="Gosnell Side Study Rooms"
			/>
			<MapView.Marker
				coordinate={coords[20]}
				title="Gleason Engineering Study Area"
			/>
			<MapView.Marker
				coordinate={coords[21]}
				title="SAU Basement"
			/>
			<MapView.Marker
				coordinate={coords[22]}
				title="Wegman's School Lobby"
			/>
			<MapView.Marker
				coordinate={coords[23]}
				title="Golisano"
			/>
			<MapView.Marker
				coordinate={coords[24]}
				title="Library Floor 3"
			/>
			<MapView.Marker
				coordinate={coords[25]}
				title="Library Floor 4"
			/>
			<MapView.Marker
				coordinate={coords[26]}
				title="Bioscience Lobby"
			/>
			<MapView.Marker
				coordinate={coords[27]}
				title="Sustainability Study Rooms"
			/>
			<MapView.Marker
				coordinate={coords[28]}
				title="River Room"
			/>
			<MapView.Marker
				coordinate={coords[29]}
				title="Gosnell Atrium"
			/>
			<MapView.Marker
				coordinate={coords[30]}
				title="Gosnell Atrium Overlook"
			/>
			<MapView.Marker
				coordinate={coords[31]}
				title="Gleason Engineering Hall"
			/>
			<MapView.Marker
				coordinate={coords[32]}
				title="Bates Study Center"
			/>
			<MapView.Marker
				coordinate={coords[33]}
				title="Gannett Green Screen Overlook"
			/>
			<MapView.Marker
				coordinate={coords[34]}
				title="Fireside Lounge"
			/>
			<MapView.Marker
				coordinate={coords[35]}
				title="Midnight Oil"
			/>
			<MapView.Marker
				coordinate={coords[36]}
				title="Grace Watson Lobby"
			/>
			<MapView.Marker
				coordinate={coords[37]}
				title="Commons Fire Place"
			/>
			<MapView.Marker
				coordinate={coords[38]}
				title="Crossroads"
			/>
			<MapView.Marker
				coordinate={coords[39]}
				title="Salsarita's"
			/>
			<MapView.Marker
				coordinate={coords[40]}
				title="Engineering Hall"
			/>
			<MapView.Marker
				coordinate={coords[41]}
				title="Golisano Atrium"
			/>
			<MapView.Marker
				coordinate={coords[42]}
				title="Golisano Atrium Overlook"
			/>
			<MapView.Marker
				coordinate={coords[43]}
				title="Library Floor 1"
			/>
			<MapView.Marker
				coordinate={coords[44]}
				title="Library Floor 2"
			/>
			<MapView.Marker
				coordinate={coords[45]}
				title="Chemical Engineering Lobby"
			/>
			<MapView.Marker
				coordinate={coords[46]}
				title="Slaughter Lobby"
			/>
			<MapView.Marker
				coordinate={coords[47]}
				title="CAST Floor 1"
			/>
			</MapView>
		);
	}
}