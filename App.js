import React,  {Component } from 'react';
import {StyleSheet,View, Button, Alert,Text,Image} from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
import EntertainmentMap from './EntertainmentMap';
import TunnelsMap from './TunnelsMap';
import DiningMap from './DiningMap';
import TrailsMap from './TrailsMap';
import StudySpotsMap from './StudySpotsMap';

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
                <View style={styles.right}>
                <View style={[styles.box, styles.box3]}>
                
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
                <Button style={styles.button} onPress={() => navigate('StudySpotsPage')}title='Smart Study Spots' color='#A9A9A9'/>
                </View>
                </View>
                <View style={styles.right}>
                <View style={styles.blackboxsizechange}>
                <Button style={styles.button} onPress={() => navigate('DiningPage')} title='Dining' color='#173636'/>
                </View>
                </View>
                <View style={styles.center}>
                <View style={[styles.box, styles.box2r]}>
                
                </View>
                </View>
                <View style={styles.container3}>
                <View style={[styles.box, styles.box4]}>
                </View>
                </View>
                <View style={styles.center}>
                <View style={styles.box3}>
                <Button style={styles.button} onPress={() => navigate('TrailsPage')} title='Trails' color='#173636'/>
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
    static navigationOptions ={ tabBarLabel: 'CC',header: null, swipeEnabled: true}
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
    static navigationOptions ={ tabBarLabel: 'KS',header: null, swipeEnabled: true}
    render() {
        
        return (
                <View>
                <Text style={styles.title}>Ken Shultes</Text>
                <Image
                
                source={require('./ken.png')}
                style={styles.image}>
                </Image>
                <Text>I am a first year Applied Mathematics student at RIT, and I contributed to the project by helping with research. There are many student attractions and tutoring services that I helped research and contributed to the content of the final product for the app.</Text>
                </View>
                );
    }
}
class MackenzieScreen extends Component{
    static navigationOptions ={ tabBarLabel: 'MO',header: null, swipeEnabled: true}
    render() {
        
        return (
                <View>
                <Text style={styles.title}>Mackenzie Orcutt</Text>
                <Image
                
                source={require('./mackenzie.png')}
                style={styles.image}>
                </Image>
                <Text>I am a first year Biomedical Sciences and Biotechnology and Molecular Bioscience dual-major at RIT. My contributions to this map have been in field research and contact outreach. I met with collaborators of the project to compile data, facilitated communication to administrative sources, and aided in UI design.</Text>
                </View>
                );
    }
}
class MalcolmScreen extends Component{
    static navigationOptions ={ tabBarLabel: 'MSG',header: null, swipeEnabled: true}
    render() {
        
        return (
                <View>
                <Text style={styles.title}>Malcolm Sherman-Godfrey</Text>
                <Image
                
                source={require('./malcolm.png')}
                style={styles.image}>
                </Image>
                <Text>I am a first year Electrical Engineering student here at RIT. My primary contribution to the development of this app was in the form of research. I went out and physically mapped some of the locations, and also accumulated data to include in the final product.</Text>
                </View>
                );
        
    }
}
class NateScreen extends Component{
    static navigationOptions ={ tabBarLabel: 'NB',header: null, swipeEnabled: true}
    render() {
        
        return (
                <View>
                <Text style={styles.title}>Nate Baker</Text>
                <Image
                
                source={require('./nate.jpg')}
                style={styles.image}>
                </Image>
                <Text>I am a first year Computer Science student at RIT. My contribution was development of the Google Maps integration, and learning and using the API in order to create something that is both informative and presentable.</Text>
                </View>
                );
    }
}
class infoScreen extends Component{
    static navigationOptions ={ tabBarLabel: 'I',header: null, swipeEnabled: true}
    render() {
        return (
        <View>
        <Text style={styles.title}>Author Statement</Text>
        </View>
                );
    }
    
}

const TabNav= TabNavigator({
                           info: {screen: infoScreen},
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
                                TunnelsPage: {screen: TunnelsMap},
                                DiningPage: {screen: DiningMap},
                                TrailsPage: {screen: TrailsMap},
                                StudySpotsPage: {screen: StudySpotsMap}
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
 
box3: {
marginTop: 10,
width: 300,
height: 40,
backgroundColor: '#173636',
borderWidth: 2,
borderColor: '#000000',
},
box4: {
marginTop: 10,
width: 300,
height: 40,
backgroundColor: '#000000',
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
