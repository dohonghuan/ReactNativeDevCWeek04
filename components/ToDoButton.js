import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default class ToDoButton extends Component{
    render(){
        return (
            <TouchableOpacity 
                style = {[styles.buttonStyle, this.props.data.status === 'Done' ? styles.done : styles.active]}
                onPress = {this.props.onPressButton}
                onLongPress = {this.props.onLongPressButton}
                >
                <Text style = {styles.buttonText}>
                    {this.props.data.id}. {this.props.data.body}
                </Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 10,
        alignItems: 'center',
        
        justifyContent: 'center',
        marginTop: 15,
        paddingVertical: 10,
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
    done:{
        backgroundColor: 'green',
    },
    active:{
        backgroundColor: 'red',
    }
});

