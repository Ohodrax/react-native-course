import React, { Component } from "react";
import { View, Text } from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View style={{flex: 1, backgroundColor: "#DDD"}}>

        <View style={{height: 65, backgroundColor: '#222'}}></View>

        <View style={{flex: 1, backgroundColor: '#FFF'}}></View>
        
        <View style={{height: 65, backgroundColor: '#222'}}></View>

      </View>
    );
  }
}
