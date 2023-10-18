import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      feed: [
        {id: '1', nome: 'Rodrigo', idade: 20, email: 'rodrigo@gmail.com'},
        {id: '2', nome: 'Victor', idade: 89, email: 'victor@gmail.com'},
        {id: '3', nome: 'Henrique', idade: 39, email: 'henrique@gmail.com'},
        {id: '4', nome: 'Paulo', idade: 15, email: 'paulo@gmail.com'},
        {id: '5', nome: 'Jose', idade: 75, email: 'jose@gmail.com'},
      ]
    };
  }
  
  render(){
    return(
      <View style={styles.container}>
        <FlatList data={this.state.feed} keyExtractor={(item) => item.id} renderItem={ ({item}) => <Pessoa data={item} /> }/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  areaPessoa: {
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15
  },
  textoPessoa: {
    color: '#fff',
    fontSize: 20
  }
})

class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome} </Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade} </Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email} </Text>
      </View>
    );
  }
}