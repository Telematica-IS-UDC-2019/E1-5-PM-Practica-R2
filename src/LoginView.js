import React, { Component } from 'react';
import { StyleSheet, Button, View, TextInput, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Users from './database/users.json';

export default class LoginView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersMap: new Map(Object.entries(Users)),
      text1: 'Ramses',
      email: '',
      password: '',
    }
  }

  getLogin = () => {
    let credentials;
    if (this.state.email == '' || this.state.password == '') {
      alert('Please fill in all fields');
    } else {
      for (let [key, value] of this.state.usersMap) {
        if (this.state.email == value.email && this.state.password == value.password) {
          credentials = true;
          break;
        } else {
          credentials = false;
        }
      }
      if (credentials) {
        Actions.home({ text1: this.state.text1 });
      } else {
        alert('Invalid credentials');
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.loginImage}
          source={require('../assets/images/FunkUP.png')}
        />
        <Text
          style={styles.labelTitle}>E-mail Address</Text>
        <TextInput
          style={styles.inputText}
          placeholder="E-mail"
          keyboardType="email-address"
          onChangeText={(value) => this.setState({ email: value })}
        />
        <Text
          style={styles.labelTitle}>Password</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={true}
          onChangeText={(value) => this.setState({ password: value })}
        />
        <Button
          onPress={this.getLogin}
          title="Login"
          color="#D93A4D"
          accessibilityLabel="Login button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginImage: {
    width: 300,
    height: 120,
    marginBottom: 40,
    resizeMode: 'stretch',
  },
  inputText: {
    backgroundColor: '#fff',
    borderColor: "#D93A4D",
    borderRadius: 15,
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  labelTitle: {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'flex-start',  
    marginLeft: '10%' 
  }
});
