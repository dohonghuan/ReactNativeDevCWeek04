import React from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput, Button, Alert, ImageBackground, KeyboardAvoidingView } from 'react-native';
import {TODOS} from '../constants/data'
import ToDoButton from '../components/ToDoButton'

export default class HomeScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputText : '',
      toDoList : TODOS,
    };
  }

  onChange = (text) => {
    this.setState({
      inputText: text,
    });
  }

  onSubmit = () =>{
    const newToDo = {
      id: this.state.toDoList.length + 1, 
      status: 'Active',
      body : this.state.inputText,
    }
    this.setState( state => {
      const toDoList = state.toDoList.concat(newToDo)
      const inputText = ''
      return {
        toDoList,
        inputText,
      }
    });
  }

  onPressToDo=(id)=>{
    const {toDoList} = this.state;
    const todo = toDoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = toDoList.findIndex(todo => todo.id === id);
    toDoList[foundIndex] = todo;
    const newTodoList = [...toDoList];
    this.setState({
      toDoList: newTodoList
    }, () => {
      setTimeout(() => {
        this.props.navigation.navigate('Detail', {data: todo})})
    });
    
  }

  deleteAndUpdate = (data) => {
    this.setState(state => {
      const toDoList = state.toDoList.filter(item => item.id !== data.id);
      return {
        toDoList,
      };
    });   
  }

  onLongPressToDo = (data) => {
    const prompt = `"${data.body}"`;
    Alert.alert(
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this.deleteAndUpdate(data)}
      ],
      { cancelable: true }
    );
  }
  render() {
    return (
    <ImageBackground style={styles.imageBack} 
      source={{uri: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/09/11/15/galaxy-2643089-1920.jpg"}}>
      <KeyboardAvoidingView 
        enabled
        behavior="padding">
        <ScrollView style={{flex: 1, margin: 30}} contentContainerStyle = {styles.container}>
          {
            this.state.toDoList.map(item => {
              return <ToDoButton 
              data= {item}  
              onPressButton = {() => this.onPressToDo(item.id)}
              onLongPressButton = {() => this.onLongPressToDo(item)}
              key = {item.id} />
            })
          }
          <TextInput style = {styles.textInput} onChangeText = {this.onChange} value = {this.state.inputText}/>
          <Button title = 'Submit' style = {styles.button} onPress = {this.onSubmit}/>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  imageBack: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  container: {
    justifyContent: 'center',
  },
  textInput:{
    margin: 10,
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    color: 'white',
    fontSize: 25,
  },
  button: {
    height: 50,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
  }
});