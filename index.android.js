/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '',
                 text1:'',
                 text2:''
                 };
  }
  
  
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          체중을 입력해 주세요
        </Text>
        <TextInput
            style={{
              height: 50, 
              width: 200,
              borderWidth: 1,
              borderColor: "rgba(198,56,56,0.5)",
            }}
            placeholder={"체중(단위:kg)"}
            placeholderTextColor={"rgba(198,198,204,1)"}
            onChangeText={(text1) => {this.setState({text1})}}
          />
        <Text style={styles.welcome}>
          키를 입력해 주세요
        </Text>
        <TextInput
            style={{
              height: 50, 
              width: 200,
              borderWidth: 1,
              borderColor: "rgba(198,56,56,0.5)",
            }}
            placeholder={"키(단위:cm)"}
            placeholderTextColor={"rgba(198,198,204,1)"}
            onChangeText={(text2) => {this.setState({text2})}}
          />
        
        <Text style={styles.welcome}>
          당신의 BMI는{this.state.text1 / (this.state.text2*this.state.text2)/10000 || 0}입니다.
          
          당신은 {this.state.text2}이군요!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Project', () => Project);
