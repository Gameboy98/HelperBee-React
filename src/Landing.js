import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  AsyncStorage,Alert,
  ImageBackground,
  ScrollView
} from "react-native";

 

export default class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: '',
        pass: '',
    };
  }

 

  CheckTextInput = () => {
    if (this.state.user == '' || this.state.pass == '') {
        alert('Please Enter Fields');
      } else {
        if (this.state.user == 'user123' && this.state.pass == 'password'){
          this.props.navigation.navigate("Main");
        } else {
          alert("Wrong Credentials")
        }
      }
  };

 

  render() {
    return (
      <ImageBackground source={require('../assets/background.png')} style={styles.container} >
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../assets/Logo.jpg')}/>    
          <TextInput placeholder="Enter Username" style={styles.textInput} onChangeText={(text) => this.setState({user: text}) }/>
          <TextInput placeholder="Enter Password" secureTextEntry style={styles.textInput} onChangeText={(text) => this.setState({pass: text}) }/>
        <TouchableOpacity
          onPress={this.CheckTextInput}
          style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>        
        </ImageBackground>
    );
  }
}

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center",    
  },

  image: {
    alignSelf: "center",
    height: 100,
    width: 100,    
  },

  
  
  textInput: {
    width: "80%",
    height: 50,
    color: "#ffc313",
    borderRadius: 15,
    backgroundColor: "#ffffff",
    borderColor: "black",
    borderWidth: 0.5,
    alignSelf: "center",
    textAlign:"center",
    marginTop:30,
  },

  button: {
    backgroundColor:'#ffc313',
    borderRadius:10,
    borderWidth: 0.5,
    borderColor: '#fff',
    width:"80%",
    alignSelf:"center",
    marginTop:30,
    height:50,
    textAlign:"center",
    justifyContent:"center",
    marginBottom:30
  },

  text: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 16,
  },
});