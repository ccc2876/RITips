import React, { Component } from 'react';
import StyleSheet,{View, Button, Alert} from 'react-native';
import {StackNavigator} from 'react-navigation';




export default class AlignItems extends Component {
    render() {
        return (
        <View style={styles.wrapper}>
            <View style={styles.right}>
                <View style={styles.box}>
                <Button style={styles.button} onPress={ ()=>{Alert.alert('Entertainment','this will take you to the map of entertainment')}} title='Entertainment' color='#D3D3D3' fontColor= '#000000'/>
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
                <Button style={styles.button} onPress={ ()=>{Alert.alert('Tutoring Services','this will take you to the map of tutoring services')}}title='Tutoring Services' color='#D3D3D3'/>
                </View>
                </View>
                <View style={styles.right}>
                <View style={styles.whiteboxsizechange}>
                <Button style={styles.button} onPress={ ()=>{Alert.alert('Tunnels','this will take you to the map of the tunnels')}}title='Tunnels' color='#000000'/>
                </View>
                </View>
                <View style={styles.container3}>
                <View style={[styles.box, styles.box2l]}>
                </View>
                </View>
                <View style={styles.left}>
                <View style={styles.box}>
                <Button style={styles.button} onPress={ ()=>{Alert.alert('Smart Study Spots','this will take you to the map of study spots')}}title='Smart Study Spots' color='#D3D3D3'/>
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
                <Button style={styles.homeButton} onPress={() => navigate('Home')} title='RITips'  color='#000000'/>
                </View>
                </View>
               
                </View>
                );
    }
}

const styles = {
                                 
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
