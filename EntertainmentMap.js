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
               <Text style={textStyleHeader}>Gene Polisseni Center</Text>
               </View>
               <View>
               <Image
               
               source={require('./genepol.jpg')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Hours: Open 24 hours a day (Generally only used for hockey games)</Text>
               <Text>-Located between dorm side and academic side</Text>
                <Text>-Ice arena on campus</Text>
               <Text>-Opened in September of 2014</Text>
               <Text>-Location where RIT’s men and women hockey teams play and where the campus and community comes out to support them. During hockey games the RIT pep band and Corner Crew are always present, livening up the crowd and cheering on the team</Text>
               </View>
               </View>
               </MapView.Callout>
               
               
               </MapView.Marker>
               
               <MapView.Marker
               coordinate={coords[1]}
               title="Frank Ritter Ice Arena">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Frank Ritter Ice Arena</Text>
               </View>
               <View>
               <Image
               
               source={require('./fri.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Hours: Sun-Mon from 3:15 p.m. - 4:45 p.m.</Text>
               <Text>        Wed-Thurs from 11:45 a.m. - 12:45 p.m.</Text>
               <Text>        Fri from 8 pm - 10 p.m.</Text>
               <Text>        No public skate Thurs and Sat</Text>
               <Text>-Located north of Clark Gymnasium next to the Gordon Field House</Text>
               <Text>-An arena that is a venue for ice hockey, figure skating classes, and recreational skating. Serves both RIT and the Rochester community's needs for ice rental time, public skate sessions, and more.</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               
               <MapView.Marker
               coordinate={coords[2]}
               title="Clark Gymnasium">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Clark Gymnasium</Text>
               </View>
               <View>
               <Image
               
               source={require('./clark.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Hours: Only Available Upon Reservation</Text>
               <Text>-Located across from the Campus Center and south of Frank Ritter Ice Rink, next to the Gordon Field House</Text>
               <Text>-The building has a main gym, auxiliary gym, wrestling room, Weight and Training Room for varsity athletes, and an equipment room. The building is mostly used by Intercollegiate Athletics, but some wellness and recreation programs take place there as well.</Text>
               
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               <MapView.Marker
               coordinate={coords[3]}
               title="Gordon Field House">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Gordon Field House</Text>
               </View>
               <View>
               <Image
               
               source={require('./gordon.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Hours: Mon-Fri from 6 a.m. - 11 p.m.</Text>
               <Text>       Sat from 8 a.m. - 11 p.m.</Text>
               <Text>       Sun from 10 a.m. - 11 p.m.</Text>
               <Text>       The Aquatic Center and Indoor Track have their own separate hours.</Text>
               <Text>-Located between the residence halls and the Frank Ritter Ice Arena/Clark Gym</Text>
               <Text>-A two story building, the Gordon Field House has an aquatics center, racquetball courts, several gyms that can be converted for most sports, a fully equipped weight room, a Green Room, and much more. It is the prime location for students as well as alumni to stay in shape and enjoy some physical exercise.</Text>
               
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               <MapView.Marker
               coordinate={coords[4]}
               title="RITZ Sports Zone">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>RITZ Sports Zone</Text>
               </View>
               <View>
               <Image
               
               source={require('./ritzgame.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Hours: Mon-Thurs from 11 a.m. - 7:30 p.m.</Text>
               <Text>       Fri from 11 a.m. - 6 p.m.</Text>
               <Text>       Closed Sat-Sun</Text>
               <Text>-Located in the tunnels under the SAU; Can reach it by going down stairs next to Ben and Jerry’s</Text>
               <Text>-Great place to grab a bite to eat, but if you’re not hungry you can rent the necessary equipment to play on one of the many pool tables. Can also play other games such as Guitar Hero, darts, a couple shooting games, Just Dance, and others for a small cost.</Text>
               
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               
               <MapView.Marker
               coordinate={coords[5]}
               title="RITchie's Game Room">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>RITchie's Game Room</Text>
               </View>
               <View>
               <Image
               
               source={require('./ritchies.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Hours: Mon-Thurs from 8 p.m. - 2 a.m.</Text>
               <Text>       F from 8 p.m. - 3 a.m.</Text>
               <Text>       Sat from 2 p.m. - 3 a.m.</Text>
               <Text>       Sun 8 p.m. - Midnight</Text>
               <Text>-Located in tunnels under Gibson Hall</Text>
               <Text>-Place where students can get together to play billiards, ping pong, foosball, air hockey, and video gaming. Also able to watch shows and movies on a large screen television. Must reserve two weeks in advance; $15.00 per reserved hour.</Text>
               
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               
               
               
               <MapView.Marker
               coordinate={coords[6]}
               title="The Den">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>The Den</Text>
               </View>
               <View>
               <Image
               
               source={require('./genepol.jpg')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Hours: Mon-Fri from 5 p.m. - 11 p.m.</Text>
               <Text>        Sat-Sun from 12 p.m. - 6 p.m</Text>
               <Text>-Located in tunnels next to Gracie's under Baker Residence Hall</Text>
               <Text>-Place where residence hall students can rent DVDs for free and machines for events (such as Popcorn, Cotton Candy, and Snow Cone machines). They also offer contraceptives, mural supplies, and more. It is often possible to donate a nonperishable food item for a free ticket to the next hockey game here as well.</Text>
               
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               
               <MapView.Marker
               coordinate={coords[7]}
               title="Red Barn">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Red Barn</Text>
               </View>
               <View>
               <Image
               
               source={require('./redbarn.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Hours: Mon-Fri from 5 p.m. - 10 p.m.</Text>
               <Text>        Sat-Sun from 1 p.m. - 6 p.m.</Text>
               <Text>-Located behind the Louise Slaughter Hall and Riverknoll Apartments</Text>
               <Text>-It is a bouldering-only gym, meaning the climbs are shorter and falls are protected with padding. There are set routes for all abilities and skill levels, from beginning to expert, and all non-RIT visitors must be 18 years or older. It lacks modern amenities like heat, so dress according to outside weather, and plumbing, there is a Port-A-John in the main parking lot. With an RIT ID, a day pass is $4 and a Semester pass is $40.</Text>
               
               </View>
               </View>
               </MapView.Callout>
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


export default EntertainmentMap
