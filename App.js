import React, { Component } from "react";
import { View, Text, StyleSheet, Switch, TextInput, TouchableOpacity } from 'react-native';

import { Picker } from "@react-native-picker/picker";
import Slider from "react-native-slider"

export default class App extends Component{

  constructor(props){
    super(props);

    this.state = {
        nome: "",
        idade: "",
        sexo: 0,
        limite: 0,
        estudante: true,
        sexoOpt: [
          {key: 0, nome: "Selecionar"},
          {key: 1, nome: "Masculino"},
          {key: 2, nome: "Feminino"},
        ]
    };

    this.enviarDados = this.enviarDados.bind(this);
  }

  enviarDados() {
    if (this.state.nome == "" || this.state.idade == "" || this.state.sexo == 0 || this.state.limite == 0) {
      alert("Um ou mais campos estão inválidos.");
      return;
    }

    alert(`Seus dados foram cadastrados! \n \nDados: \n\nNome: ${this.state.nome} \nIdade: ${this.state.idade} \nSexo: ${this.state.sexoOpt[this.state.sexo].nome} \nLimite Desejado: R$ ${this.state.limite.toFixed(2)} \nÉ estudante? ${this.state.estudante ? "Sim" : "Não"}`);
  }
  
  render(){

    let generoItem = this.state.sexoOpt.map( (v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })

    return(
      <View style={styles.container}>
        <TextInput onChangeText={ (valorNome) => this.setState({nome: valorNome}) } value={ this.state.nome } placeholder="Nome"/>

        <TextInput onChangeText={ (valorIdade) => this.setState({idade: valorIdade }) } value={ +this.state.idade } placeholder="Idade" keyboardType="numeric"/>

        <Text>
          É estudante? 
          <Switch value={this.state.estudante} onValueChange={ (valorEstudante) => this.setState({estudante: valorEstudante}) } />
          {this.state.estudante ? "Sim" : "Não"}
        </Text>
        
        <Text>Limite desejado: R$ {this.state.limite.toFixed(2)}</Text>
        <Slider minimumValue={0} maximumValue={10000} onValueChange={ (valorLimite) => this.setState({limite: valorLimite}) } value={this.state.limite}/>

        <Picker selectedValue={this.state.sexo} onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemValue})}>
          {generoItem}
        </Picker>

        <TouchableOpacity onPress={() => this.enviarDados()}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  }
})