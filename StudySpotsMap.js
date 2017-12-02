import React, {Component} from 'react';
import MapView from 'react-native-maps';
import StackNavigator from 'react-navigation';
import {StyleSheet,View,Text,Image} from 'react-native';
import Constants from './App';

const initialCoords = {
latitude: 43.0861,
longitude: -77.6705,
latitudeDelta: 0.0522,
longitudeDelta: 0.0421,
};

class StudySpotsMap extends Component {
static navigationOptions= {header:null};
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
{longitude: -77.6798415, latitude: 43.0839971},//Golisano
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
{longitude : -77.6738682, latitude: 43.0839364},//Fireside Lounge
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
    >
    {getCallout("Sol Heumann Quad Ellipse", "Nice spot to enjoy the day and leisurely do homework. Can sometimes be a little loud, and no wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[1]}
    title="Sol Heumann Quad Concrete Circle"
    >
    {getCallout("Sol Heumann Quad Concrete Circle","Across from the Sol Heumann ellipse.  Popular study spot on warm days, hard to get. No wifi")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[2]}
    title="Barbeque Park"
    >
    {getCallout("Barbeque Park","Field near Gracie's, several picnic tables and walking trails nearby. Almost no one studies here, so it is a quiet place to get work done on a nice day. No wifi")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[3]}
    title="Magic Center Grass"
    >
    {getCallout("Magic Center Grass", "On a warm day, many people lay on the grass napping. Can be a loud place, but you can work and get some sun. Chance of wifi")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[4]}
    title="Global Concrete Benches"
    >
    {getCallout("Global Concrete Benches", "Not the most comfortable study spot, but is good if you are just reading. No wifi")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[5]}
    title="Global Fire Pit"
    >
    {getCallout("Global Fire Pit", "Nice area with comfortable seating with sun and shady spots. Can be somewhat loud, but there are places within the area that shield you from the sound. Wifi only available in certain spots.")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[6]}
    title="Koi Pond"
    >
    {getCallout("Koi Pond", "Not a lot of seating but it is a great place to read a book. Very quiet area that many people do not know about. No wifi")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[7]}
    title="Gannett Roof"
    >
    {getCallout("Gannett Roof", "Very hard to get to due to Gannet's poor layout. You must go to the third floor and find the airport lounge. Once there, the door to the roof is part of the large windows.")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[8]}
    title="Salsarita's Outdoor Seating"
    >
    {getCallout("Salsarita's Outdoor Seating", "Shady area with access to wifi")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[9]}
    title="Destler-Johnson Quad"
    >
    {getCallout("Destler-Johnson Quad", "Very quiet area with little foot traffic. During the spring, the fountain will be on, giving you a nice view")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[10]}
    title="Liberal Arts Bench"
    >
    {getCallout("Liberal Arts Bench", "One of the only study spots near the liberal arts building. Very loud. Wifi Available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[11]}
    title="Midnight Oil Fire Place"
    >
    {getCallout("Midnight Oil Fire Place", "On a cold day, this is the best spot to be. Grab a cop of coffee and curl up near the fire. Midnight Oil usually plays study music, making this a premier study location. Wifi available.")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[12]}
    title="Global Fire Pit"
    >
    {getCallout("Global Fire Pit", "If you are used to the cold, this is a nice spot to study and stay relatively warm. You still have to brave the wind chills though. Wifi available in certain spots")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[13]}
    title="Fire Place Lounge"
    >
    {getCallout("Fire Place Lounge", "Hidden in the back corner of fireside lounge. Not very crowded. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[14]}
    title="Commons Fire Place"
    >
    {getCallout("Commons Fire Place", "Located on the second floor. Not a lot of seating, but great location to stay warm if you can get it. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[15]}
    title="Crossroads Back Hallway"
    >
    {getCallout("Crossroads Back Hallway", "Near the employee kitchen entrance. Can be a little drafty, but very quiet. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[16]}
    title="Institute Hall Sky Bridge"
    >
    {getCallout("Institute Hall Sky Bridge", "Located on the second floor bridge. Extremely quiet. Usually only used by the chemical engineering students, but all are welcome. Great view of pi quad. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[17]}
    title="SAU Quarter Mile Look Out"
    >
    {getCallout("SAU Quarter Mile Lookout", "Second floor of SAU, above information desk. Plenty of seating with options of individual or group work. Nice view of quarter mile. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[18]}
    title="Commons Study Room"
    >
    {getCallout("Commons Study Room", "Second Floor. Great area for individualized study. Seems to be a popular spot as it is always crowded. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[19]}
    title="Gosnell Side Study Rooms"
    >
    {getCallout("Gosnell Side Study Rooms", "Located on floors 1,2,3. These study rooms are always crowded, but if you can get a seat, they are very comfortable and quiet. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[20]}
    title="Gleason Engineering Study Area"
    >
    {getCallout("Gleason Engineering Study Area", "Second Floor. Usually quiet unless it is passing time. Can be used for group or individualized study. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[21]}
    title="SAU Basement"
    >
    {getCallout("SAU Basement", "In basement, by water bleachers. Not many know about this spot, but it has comfortable seating and a bleacher fountain. Very quiet. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[22]}
    title="Wegman's School Lobby"
    >
    {getCallout("Wegman's School Lobby", "Located on the bottom floor. Can almost always find a seat. Not many people go to study here due to it being on the outskirt of campus. Very quiet. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[23]}
    title="Golisano"
    >
    {getCallout("Golisano", "First floor. Comfortable seating with a nice view of global village. Usually only used by Golisano students, but all are welcome. Very quiet. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[24]}
    title="Library Floor 3"
    >
    {getCallout("Library Floor 3", "Contains individual study pods, reservable study rooms, and group work areas. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[25]}
    title="Library Floor 4"
    >
    {getCallout("Library Floor 4", "Quietest floor, only accessible by southeast staircase and elevator and mostly contains individual desks. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[26]}
    title="Bioscience Lobby"
    >
    {getCallout("Bioscience Lobby", "Usually used by biomedical engineering students, but all are welcome. Nice view of pi quad. Great for individual or group work. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[27]}
    title="Sustainability Study Rooms"
    >
    {getCallout("Sustainability Study Rooms", "Floors 2, 3, and 4 have enclosed study rooms as well as more open seating areas at either end. Extremely quiet because no one goes into this building. Probably the most student empty building. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[28]}
    title="River Room"
    >
    {getCallout("River Room","")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[29]}
    title="Gosnell Atrium"
    >
    {getCallout("Gosnell Atrium", "Floor A (basement), very open space and easy to find. Tables for individual or group work, used by students of all majors.")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[30]}
    title="Gosnell Atrium Overlook"
    >
    {getCallout("Gosnell Atrium Overlook", "Floor 1 overlooking atrium. Tables for groups and seating for individuals as well, this is an open and well-lit space.")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[31]}
    title="Gleason Engineering Hall"
    >
    {getCallout("Gleason Engineering Hall", "Erdle Commons, located on the first floor by the front doors (facing the infinity quad), is a good place for any type of work. There are whiteboards available for working out problems.")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[32]}
    title="Bates Study Center"
    >
    {getCallout("Bates Study Center", "Floor 1 of Gosnell, across from the lecture hall. Works for any subject but is especially great for getting help in math, physics, or other similar courses.") }   
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[33]}
    title="Gannett Green Screen Overlook"
    >
    {getCallout("Gannett Green Screen Overlook", "First floor and second floor of Gannett provide students with comfortable seating arrangements. Building may be confusing to navigate.")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[34]}
    title="Fireside Lounge"
    >
    {getCallout("Fireside Lounge", "Nice place to group or study work. Depending on the day, it can be very quiet or very loud. Common place for college activities to be held. Wifi available.")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[35]}
    title="Midnight Oil"
    >
    {getCallout("Midnight Oil", "Perfect place to eat, study, and talk. Comfortable seating and nice decor. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[36]}
    title="Grace Watson Lobby"
    >
    {getCallout("Grace Watson Lobby", "Relatively loud area. No tables available so only a good place to read. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[37]}
    title="Commons Fire Place"
    >
    {getCallout("Commons Fire Place", "Second Floor. Not much seating, but if you get a seat, it is very comfortable. Quiet or loud depending on the day. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[38]}
    title="Crossroads"
    >
    {getCallout("Crossroads", "Very loud area, but good place to eat, work and talk. Plenty of tables. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[39]}
    title="Salsarita's"
    >
    {getCallout("Salsarita's", "Located in Global Village, Salsarita's and the Cantina & Grille are great places to get fresh food and study, especially in a group.")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[40]}
    title="Engineering Hall"
    >
    {getCallout("Engineering Hall", "First Floor. Not many tables, but great for group work. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[41]}
    title="Golisano Atrium"
    >
    {getCallout("Golisano Atrium", "Contains benches and more tables with outlets by Ctrl Alt Deli")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[42]}
    title="Golisano Atrium Overlook"
    >
    {getCallout("Golisano Atrium Overlook", "Third Floor. Can be loud or quiet depending on the time of day, but usually quiet on most afternoons. Great place for individual study. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[43]}
    title="Library Floor 1"
    >
    {getCallout("Library Floor 1", "Good for group work, printing, and snacks/drinks at Java's.")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[44]}
    title="Library Floor 2"
    >
    {getCallout("Library Floor 2", "Good for group work and contains computer lab/printing stations.")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[45]}
    title="Chemical Engineering Lobby"
    >
    {getCallout("Chemical Engineering Lobby", "No tables, but comfortable seating. Can be loud or quiet depending on the time of day. Wifi available")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[46]}
    title="Slaughter Lobby"
    >
    {getCallout("Slaughter Lobby", "There is a small study space to the right of the front doors of Louise Slaughter Hall. Works well for short periods of studying, may be a little loud at times since people will be passing through the lobby.")}
    </MapView.Marker>
    <MapView.Marker
    coordinate={coords[47]}
    title="CAST Floor 1"
    >
    {getCallout("CAST Floor 1", "Nice open work space on the first floor of the College of Applied Sciences and Technology Building. Relatively quiet, not many people come here on most days.")}
    </MapView.Marker>
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
fontWeight: 'bold',
fontSize: 16,
justifyContent: 'center'
}

const calloutStyleImage = {
width: 150,
height: 100,

};

const calloutStyleDesc = {
width: 150,
height: 150
};

export default StudySpotsMap
