import React, { Component } from "react";
import { View, Text, Image } from 'react-native';

export default class App extends Component{
  render(){

    let nome = "Matheus";
    let img = "https://sujeitoprogramador.com/steve.png";

    return(
      <View>
        <Text>Olá mundo!</Text>
        <Text>Meu Primeiro App</Text>
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>
          Sujeito Programador
        </Text>

        <Image source={{ uri: img }} style={{ width: 300, height: 300 }} />

        <Text style={{ fontSize: 30 }}>{nome}</Text>
      </View>
    );
  }
}