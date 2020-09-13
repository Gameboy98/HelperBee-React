import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  Image,
  Text,
  AsyncStorage,Alert,Platform
} from 'react-native';

import {KeyboardAvoidingView} from 'react-native';


export default class QuestionScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ImageBackground source={require('../assets/background.png')} style={styles.container}>
          <View style={styles.row}>
            <TouchableOpacity
            disabled={this.state.section5}
              onPress={() => this.props.navigation.navigate("Calender")}
              style={styles.button}>
              <Image
               style={{width: 160, height: 162,margin:5,alignSelf: "center", borderRadius:20}}
               source={require('../assets/1.jpeg')}/>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}>
              <Image
               style={{width: 160, height: 162,margin:5,alignSelf: "center", borderRadius:20}}
               source={require('../assets/1.jpeg')}/>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
  },
  row: {
    flexDirection:"row",
    marginTop:10,
    marginBottom:10,
    justifyContent:"center",
  },
  button: {
    width: 170,
    height: 195,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    justifyContent: "center",
    marginRight:10,
    alignSelf:"center",
    marginLeft:10
  },
});
