import React, { Component } from 'react';
import {StyleSheet,View, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class AlignItems extends Component {
    render() {
        return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={[styles.box, styles.box1]}>
                 <Button style={styles.button} onPress={ ()=>{navigate('Title',(title: 'Entertainment'))}}title='Entertainment' color='#000000'/>
                </View>
            </View>
                <View style={styles.container2}>
                    <View style={[styles.box, styles.box2]}>
                    <Button style={styles.button} onPress={ ()=>{navigate('Title',(title: 'Athletics'))}}title='Athletics' color='#ffffff'/>
                    </View>
                </View>
                <View style={styles.container}>
                <View style={[styles.box, styles.box2r]}>
    
                </View>
                </View>
                <View style={styles.container2}>
                <View style={[styles.box, styles.box1]}>
                <Button style={styles.button} onPress={ ()=>{navigate('Title',(title: 'Tutoring Services'))}}title='Tutoring Services' color='#000000'/>
                </View>
                </View>
                <View style={styles.container}>
                <View style={[styles.box, styles.box2]}>
                <Button style={styles.button} onPress={ ()=>{navigate('Title',(title: 'Tunnels'))}}title='Tunnels' color='#ffffff'/>
                </View>
                </View>
                <View style={styles.container3}>
                <View style={[styles.box, styles.box2l]}>
                </View>
                </View>
                <View style={styles.container2}>
                <View style={[styles.box, styles.box1]}>
                <Button style={styles.button} onPress={ ()=>{navigate('Title',(title: 'Smart Study Spots'))}}title='Smart Study Spots' color='#000000'/>
                </View>
                </View>
                <View style={styles.container}>
                <View style={[styles.box, styles.box2]}>
                <Button style={styles.button} onPress={ ()=>{navigate('Title',(title: 'Dining'))}}title='Dining' color='#ffffff'/>
                </View>
                </View>
                <View style={styles.container2}>
                <View style={[styles.box, styles.box1]}>
                <Button style={styles.button} onPress={ ()=>{navigate('Title',(title: 'Trails'))}}title='Trails' color='#000000'/>
                </View>
                </View>
                <View style={styles.container4}>
                <View style={[styles.box, styles.box2l]}>
                </View>
                </View>
                <View style={styles.container}>
                <View style={[styles.box, styles.box2]}>
                <Button style={styles.button} onPress={ ()=>{navigate('Title',(title: 'Student Employment'))}}title='Student Employment' color='#ffffff'/>
                </View>
                </View>
                <View style={styles.container}>
                <View style={[styles.box, styles.homebox]}>
                <Button style={styles.homeButton} onPress={ ()=>{navigate('Title',(title: 'RITips'))}}title='RITips' color='#000000'/>
                </View>
                </View>
               
                </View>
                );
    }
}

const styles = StyleSheet.create({
                                 wrapper: {
                                 flex: 1,
                                 backgroundColor: '#F36E21',
                                 marginTop: 20,
                                 },
                                 container: {
                                 flex: .5,
                                 flexDirection: 'row',
                                 justifyContent: 'flex-end', //replace with flex-end or center
                                 
                                 },
                                 container2: {
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
                                 justifyContent: 'center',
                                 
                                 },
                                 homebox: {
                                 backgroundColor: '#ffffff',
                                 width: 75,
                                 height: 35,
                               
                                 },
                                 box: {
                            
                                 marginTop: 10,
                                 width: 350,
                                 height: 35,
                             
                                 
                                 },
                                 box2r: {
                                 marginTop: 10,
                                 width: 100,
                                 height: 40,
                                 backgroundColor: '#663300',
                              
                                 },
                                 box2l: {
                                 marginTop: 10,
                                 width: 100,
                                 height: 40,
                                 backgroundColor: '#663300',
                                 
                                 },
                                 box1: {
                                 backgroundColor: '#D3D3D3',
                               
                                 },
                                 box2: {
                                 backgroundColor: '#2f4f4f',
                               
                                 },
                                 box3: {
                                 backgroundColor: '#e3aa1a',
                                 
                                 },
                                 button: {
                                 flex: .5,
                                 alignSelf: 'flex-start',
                                 justifyContent: 'flex-start',
                                
                                 
                                 
                                 },
                                 homeButton: {
                                 flex: 1,
                                 alignSelf: 'flex-end',
                                 justifyContent: 'flex-end',
                                 
                                 
                                 
                                 
                                 },

                                 });
