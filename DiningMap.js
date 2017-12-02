import React, {Component} from 'react';
import MapView from 'react-native-maps';
import StackNavigator from 'react-navigation';
import {StyleSheet,View, Button, Alert,Text,Image} from 'react-native';
import Constants from './App';


const initialCoords = {
latitude: 43.0861,
longitude: -77.6705,
latitudeDelta: 0.0522,
longitudeDelta: 0.0421,
};

class DiningMap extends Component {
    static navigationOptions= {header:null};
    render(){
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
    
   
        return(
               <MapView
               style = {{flex: 1}}
               initialRegion={initialCoords}
               >
               
               <MapView.Marker
               coordinate={coords[0]}
               title="Artesano Bakery and Cafe">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Artesano Bakery and Cafe</Text>
               </View>
               <View>
               <Image
               
               source={require('./artesanos.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Weekday Hours: 7:30am-6:00pm</Text>
               <Text>-Weekend Hours: 10:00am-2:00pm</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               
               <MapView.Marker
               coordinate={coords[0]}
               title="Bytes">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Bytes</Text>
               </View>
               <View>
               <Image
               
               source={require('./bytes.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Weekday Hours: 9:00am-9:00pm</Text>
               <Text>-Saturday Hours: 10:00am-9:00pm</Text>
               <Text>-Sunday Hours: 12:00pm-7:00pm</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               <MapView.Marker
               coordinate={coords[1]}
               title="Beanz">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Beanz</Text>
               </View>
               <View>
               <Image
               
               source={require('./beanz.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Weekday Hours: 7:30am-11:00pm</Text>
               <Text>-Saturday Hours: 11:00am-11:00pm</Text>
               <Text>-Sunday Hours: 9:00am-11:00pm</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               <MapView.Marker
               coordinate={coords[2]}
               title="Ben and Jerry's">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Ben and Jerry's</Text>
               </View>
               <View>
               <Image
               
               source={require('./bandj.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Weekday Hours: 11:00am-9:00pm</Text>
               <Text>-Saturday Hours: 12:00pm-8:00pm</Text>
               <Text>-Sunday Hours: 12:00pm-5:00pm</Text>
               <Text>Review: Ben and Jerry’s is your basic ice cream shop, so if you’re craving some on academic side it’s the spot to be. When it gets real cold in the winter the discounts start to rack up, so for those who can handle ice cream on a below zero degree day the value is fantastic.</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               <MapView.Marker
               coordinate={coords[2]}
               title="Brick City Cafe">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Brick City Cafe</Text>
               </View>
               <View>
               <Image
               
               source={require('./brick.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Breakfast Hours: 7:00am-10:30am</Text>
               <Text>-Lunch Hours: 11:00am-2:00pm</Text>
               <Text>-Closed Weekends</Text>
               <Text>Review: Brick City is the best place to get breakfast on campus on weekdays. If you have time before or between classes in the morning it’s the place to go. For lunch it’s also a decent spot, but unless the guest chef is particularly good Ritz right downstairs is usually the preferable option.</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               
               <MapView.Marker
               coordinate={coords[2]}
               title="RITZ Sports Zone">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>RITZ Sports Zone</Text>
               </View>
               <View>
               <Image
               
               source={require('./ritz.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Weekday Hours: 10:45am - 7:30pm</Text>
               <Text>-Closed Weekends</Text>
               <Text>Review: Ritz is one of the best spots to eat on campus, and it’s located right in the middle of dorm and academic side so it’s always accessible. The pasta bakes and ever-present guest chefs make Ritz a great lunch destination whenever you have a break between classes.</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               <MapView.Marker
               coordinate={coords[3]}
               title="Crossroads">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Crossroads</Text>
               </View>
               <View>
               <Image
               
               source={require('./crossroads.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Monday - Thursday Hours: 11:00am - 10:00pm</Text>
               <Text>-Friday Hours: 11:00am - 6:00pm</Text>
               <Text>-Sunday Hours: 12:00pm - 8:00pm</Text>
               <Text>-Closed Saturdays</Text>
               <Text>Reviews: Crossroads has a wide assortment of food, including sandwiches, salads, and a grill. It’s a pretty good spot to grab lunch on academic side, especially when the line for Salsarita’s is extra long around noon.</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               <MapView.Marker
               coordinate={coords[4]}
               title="The College Grind">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>The College Grind</Text>
               </View>
               <View>
               <Image
               
               source={require('./grind.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Weekday Hours: 7:30am - 9:00pm</Text>
               <Text>-Saturday Hours: 9:00am - 9:00pm</Text>
               <Text>-Sunday Hours: 9:00am - 9:00pm</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               <MapView.Marker
               coordinate={coords[5]}
               title="Commons">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Commons</Text>
               </View>
               <View>
               <Image
               
               source={require('./commons.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Weekday Hours: 11:00am - 12:00am</Text>
               <Text>-Saturday Hours: 12:00pm - 12:00am</Text>
               <Text>-Sunday Hours: 12:00pm - 12:00am</Text>
               <Text>Review: Commons has a little bit of everything, including salads, sandwiches, grill food, pizza, and pasta. Their specials are different everyday so dinner there never gets boring. On weekends the breakfast burritos are fantastic, so if you’re awake by noon it’s the place to be. Overall, Commons is academic side’s best available dining location.</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               <MapView.Marker
               coordinate={coords[6]}
               title="The Corner Store">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>The Corner Store</Text>
               </View>
               <View>
               <Image
               
               source={require('./cstore.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Weekday Hours: 8:00am - 2:00am</Text>
               <Text>-Saturday Hours: 10:30am - 2:00am</Text>
               <Text>-Sunday Hours: 10:30am - 2:00am</Text>
               <Text>Review: The Corner Store is every RIT student’s best friend when it’s 1:30am and you just need to eat something. There’s a pretty decent selection of frozen dinners to choose from, and lots of good snacks to keep your room well stocked.</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               
               <MapView.Marker
               coordinate={coords[7]}
               title="Ctrl Alt Deli">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Ctrl Alt Deli</Text>
               </View>
               <View>
               <Image
               
               source={require('./cad.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Monday - Thursday Hours: 7:30am - 8:00pm</Text>
               <Text>-Friday Hours: 7:30am - 3:00pm</Text>
               <Text>-Closed Weekends</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               
               <MapView.Marker
               coordinate={coords[8]}
               title="Salsarita's">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Salsarita’s</Text>
               </View>
               <View>
               <Image
               
               source={require('./salsas.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Monday - Thursday Hours: 11:00am - 9:00pm</Text>
               <Text>-Friday Hours: 11:00am - 8:00pm</Text>
               <Text>-Saturday Hours: 12:00pm - 8:00pm</Text>
               <Text>Closed Sundays</Text>
               <Text>Review: Salsarita’s, RIT’s very own poor man’s Chipotle, is the closest thing to real restaurant food one can get on campus. While the food is great, beware the crazy noon lunch rush lines and the relatively high prices which will leave you debit-less by week 12.</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               
               <MapView.Marker
               coordinate={coords[8]}
               title="Global Village Grille">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Global Village Grille</Text>
               </View>
               <View>
               <Image
               
               source={require('./gvg.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Weekday Lunch Hours: 11:00am - 3:00pm</Text>
               <Text>-Saturday Lunch Hours: 12:00pm - 3:00pm</Text>
               <Text>-Weekday Dinner Hours: 4:30pm-8:00pm</Text>
               <Text>Closed Sundays</Text>
               <Text>Review: The Grille is always a decent academic side lunch option when you’re totally sick of Salsarita’s or the line is just way too long. Their stir-fries are usually the best menu options available.</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               <MapView.Marker
               coordinate={coords[9]}
               title="Gracie's">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Gracie's</Text>
               </View>
               <View>
               <Image
               
               source={require('./gracies.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Weekday Breakfast Hours: 7:00am-10:00am</Text>
               <Text>-Monday-Sunday Lunch Hours: 11:00am-2:30pm</Text>
               <Text>-Weekday Dinner Hours: 4:30pm-7:30pm</Text>
               <Text>-Weekend Dinner Hours: 4:30pm-7:00pm</Text>
               <Text>Review: Gracie’s is the basic dining hall every college has to have one of. Unfortunately, it is also the worst food available on campus, and every freshman meal plan involves at least 5 meals per week there. The one upside it has is that the food, while terrible, is unlimited and there is usually at least one edible option at Mongolian Grill. Beware the 6pm dinner rush and the ridiculous lines that come along with it.</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               
               <MapView.Marker
               coordinate={coords[10]}
               title="Java Wally's">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Java Wally's</Text>
               </View>
               <View>
               <Image
               
               source={require('./javas.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Monday - Thursday Hours: 7:30am - 10:30pm</Text>
               <Text>-Friday Hours: 7:30am - 9:00pm</Text>
               <Text>-Saturday Hours: 11:30am - 9:00pm</Text>
               <Text>-Sunday Hours: 11:30am - 9:00pm</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               
               <MapView.Marker
               coordinate={coords[11]}
               title="Midnight Oil">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Midnight Oil</Text>
               </View>
               <View>
               <Image
               
               source={require('./mo.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Weekday Hours: 7:30am - 12:00am</Text>
               <Text>-Saturday Hours: 10:00am - 12:00am</Text>
               <Text>-Sunday Hours: 10:00am - 12:00am</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               <MapView.Marker
               coordinate={coords[12]}
               title="Nathan's Soup and Salad">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Nathan's Soup and Salad</Text>
               </View>
               <View>
               <Image
               
               source={require('./nathans.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Monday - Thursday Hours: 10:00am - 6:00pm</Text>
               <Text>-Friday Hours: 10:00am - 5:00pm</Text>
               <Text>-Saturday Hours: 10:00am - 2:00pm</Text>
               <Text>Closed Sundays</Text>
               </View>
               </View>
               </MapView.Callout>
               </MapView.Marker>
               
               
               <MapView.Marker
               coordinate={coords[13]}
               title="Sol's Underground">
               <MapView.Callout tooltip={true}>
               <View style={calloutStyleBubble}>
               <View style={calloutStyleHeader}>
               <Text style={textStyleHeader}>Sol's Underground</Text>
               </View>
               <View>
               <Image
               
               source={require('./sols.png')}
               style={calloutStyleImage}>
               </Image>
               </View>
               <View>
               <Text>-Everyday Hours: 11:00am-11:00pm</Text>
               <Text>Review: Sol’s is best for their guest chefs, who are there Monday-Saturday from 4-8pm. At other times, they have paninis, pizza, and wraps which make good quick meals to bring back to dorms. If you ever need basic toiletry or hygiene supplies this is also the place to go, but beware they cost real money.</Text>
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

export default DiningMap
