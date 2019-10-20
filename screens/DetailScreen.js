import React from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default class DetailScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        const { navigation } = this.props;
        const toDoItem = navigation.getParam('data')
        return(
            <View>
                <View style = {{justifyContent: 'center', alignSelf: 'center'}}>
                    <Text style = {styles.status}>Status: {toDoItem.status}</Text>
                </View>

                <View style = {{justifyContent: 'center', alignSelf: 'center'}}>
                    <Text style = {styles.text}>{toDoItem.body}</Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize: 25,
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    status:{
        fontWeight: 'normal',
        fontSize: 20,
    }
})