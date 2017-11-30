import React,  {Component } from 'react';
import {StyleSheet,View, Button, Alert,Text,Image} from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
import EntertainmentMap from './EntertainmentMap';
import TunnelsMap from './TunnelsMap';

class HomeScreen extends Component {
    
    
    static navigationOptions={header: null};
    render() {
        const {navigate} =this.props.navigation;
        return (
                <View style={styles.wrapper}>
                <View style={styles.right}>
                <View style={styles.box}>
                <Button style={styles.button} onPress={() => navigate('EntertainmentPage')} title='Entertainment'  color='#A9A9A9' />
                </View>
                </View>
                <View style={styles.left}>
                <View style={styles.blackboxsizechange}>
                <Button style={styles.button} onPress={ ()=>{Alert.alert('Athletics','this will take you to the map of athletics')}}title='Athletics' color='#173636'/>
                </View>
                </View>
                
                <View style={styles.container4}>
                <View style={[styles.box, styles.box2r]}>
                </View>
                </View>
                <View style={styles.left}>
                <View style={styles.box}>
                <Button style={styles.button} onPress={ ()=>{Alert.alert('Tutoring Services','this will take you to the map of tutoring services')}}title='Tutoring Services' color='#A9A9A9'/>
                </View>
                </View>
                <View style={styles.right}>
                <View style={styles.whiteboxsizechange}>
                <Button style={styles.button} onPress={() => navigate('TunnelsPage')}title='Tunnels' color='#000000'/>
                </View>
                </View>
                <View style={styles.container3}>
                <View style={[styles.box, styles.box2l]}>
                </View>
                </View>
                <View style={styles.left}>
                <View style={styles.box}>
                <Button style={styles.button} onPress={ ()=>{Alert.alert('Smart Study Spots','this will take you to the map of study spots')}}title='Smart Study Spots' color='#A9A9A9'/>
                </View>
                </View>
                <View style={styles.right}>
                <View style={styles.blackboxsizechange}>
                <Button style={styles.button} onPress={() => navigate('Home')} title='Dining' color='#173636'/>
                </View>
                </View>
                <View style={styles.left}>
                <View style={styles.whiteboxsizechange}>
                <Button style={styles.button} onPress={ ()=>{Alert.alert('Trails','this will take you to the map of the trails')}}title='Trails' color='#000000'/>
                </View>
                </View>
                <View style={styles.center}>
                <View style={[styles.box, styles.box2l]}>
                </View>
                </View>
                <View style={styles.right}>
                <View style={styles.box}>
                <Button style={styles.button} onPress={ ()=>{Alert.alert('Student Employment','this will take you to the map of student employment')}}title='Student Employment' color='#173636'/>
                </View>
                </View>
                <View style={styles.right}>
                <View style={[styles.box, styles.homebox]}>
                <Button style={styles.homeButton} onPress={() => navigate('AboutUs')} title='RITips'  color='#000000'/>
                </View>
                </View>
                
                </View>
                );
    }
    
}

class ClaireScreen extends Component{
    static navigationOptions ={ tabBarLabel: 'Claire',header: null, swipeEnabled: true}
    render() {
        
        return (
                <View>
                <Text style={styles.title}>Claire Casalnova</Text>
                <Image
                
                source={require('./IMG_1207.jpg')}
                style={styles.image}>
                </Image>
                </View>
                );
    }
}
class KenScreen extends Component{
    static navigationOptions ={ tabBarLabel: 'Ken',header: null, swipeEnabled: true}
    render() {
        
        return (
                <Text RITips/>
                );
    }
}
class MackenzieScreen extends Component{
    static navigationOptions ={ tabBarLabel: 'Mackenzie',header: null, swipeEnabled: true}
    render() {
        
        return (
                <Text RITips/>
                );
    }
}
class MalcolmScreen extends Component{
    static navigationOptions ={ tabBarLabel: 'Malcolm',header: null, swipeEnabled: true}
    render() {
        
        return (
                <View>
                <Text style={styles.title}>Malcolm Sherman-Godfrey</Text>
                <Image
                
                source={require('./IMG_1207.jpg')}
                style={styles.image}>
                </Image>
                <Text>I am a first year Electrical Engineering student here at RIT. My primary contribution to the development of this app was in the form of research. I went out and physically mapped some of the locations, and also accumulated data to include in the final product.</Text>
                </View>
                );
        
    }
}
class NateScreen extends Component{
    static navigationOptions ={ tabBarLabel: 'Nate',header: null, swipeEnabled: true}
    render() {
        
        return (
                <View>
                <Text RITips/>
                </View>
                );
    }
}

const TabNav= TabNavigator({
                           Claire: {screen: ClaireScreen},
                           Ken: {screen: KenScreen},
                           Mackenzie: {screen: MackenzieScreen},
                           Malcolm: {screen: MalcolmScreen},
                           Nate: {screen: NateScreen},
                           
                           
                           
                           
                           });

const BasicApp = StackNavigator({
                                Home: {screen: HomeScreen},
                                AboutUs: {screen: TabNav},
                                EntertainmentPage: {screen: EntertainmentMap},
                                TunnelsPage: {screen: TunnelsMap}
                                
                                },
                                
                                );


const styles = {
tabbar:{
allowFontScaling: false,
},
title:{
fontWeight: 'bold',
fontSize: 35,
textAlign: 'center',
    
},
image: {
width: 400,
height: 300,
},
text:{
fontSize: 15
},


    
black: {
color: '#000000',
},
    
wrapper: {
flex: 1,
backgroundColor: '#F36E21',
marginTop: 20,
},
    
right: {
flex: .5,
flexDirection: 'row',
justifyContent: 'flex-end', //replace with flex-end or center
},
    
left: {
flex: .5,
flexDirection: 'row',
alignItems: 'flex-start', //replace with flex-end or center
justifyContent: 'center',
},
    
container3: {
flex: .5,
flexDirection: 'row',
alignItems: 'flex-start', //replace with flex-end or center
justifyContent: 'flex-start',
    
},
    
container4: {
flex: .5,
flexDirection: 'row',
alignItems: 'center', //replace with flex-end or center
justifyContent: 'flex-end',
    
},
    
center: {
flex: .5,
flexDirection: 'row',
alignItems: 'center', //replace with flex-end or center
justifyContent: 'center',
    
},
    
homebox: {
width: 75,
height: 45,
    
},
    
box: {
marginTop: 10,
width: 350,
height: 45,
},
    
box2r: {
marginTop: 10,
width: 100,
height: 40,
backgroundColor: '#663300',
borderWidth: 2,
borderColor: '#000000',
},
    
box2l: {
marginTop: 10,
width: 100,
height: 40,
backgroundColor: '#663300',
borderWidth: 2,
borderColor: '#000000',
},
    
greybox: {
backgroundColor: '#D3D3D3',
borderWidth: 2,
borderColor: '#000000',
    
},
blackbox: {
backgroundColor: '#173636',
borderWidth: 2,
borderColor: '#000000',
    
},
whitebox: {
backgroundColor: '#ffffff',
borderWidth: 2,
alignItems:'center',
borderColor: '#000000',
    
},
whiteboxsizechange: {
marginTop: 10,
width: 275,
height: 45,
},
blackboxsizechange: {
marginTop: 10,
width: 200,
height: 45,
},
button: {
flex: 1,
alignSelf: 'flex-start',
justifyContent: 'flex-start',
},
homeButton: {
flex: 1,
alignSelf: 'flex-end',
justifyContent: 'flex-end',
fontWeight: 'bold',
    
},
blacktext: {
color: '#000000',
}
    
};


export default BasicApp;
