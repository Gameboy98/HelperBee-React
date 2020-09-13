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
 

export default class CalorieScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View  style={styles.container} >
     
        </View>
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
});