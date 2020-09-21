import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Item,
  Constants,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Card,
  AppRegistry,
  AsyncStorage,Alert,
  TouchableHighlight
} from 'react-native';

import {Header, Title, Body} from 'native-base';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount() {this.fetchData();}

  async fetchData() {}

  render() {
    return (
      <View style={styles.Container}>
          <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate("Calendar")}>
              
              <Image                   
                  style={{position: 'relative',alignSelf:"center", height:"100%", width:"100%", borderRadius:10,borderColor:"#d3d3d3",borderWidth:0.5}}
                  source={require('../assets/calendarbg.jpg')}
                  resizeMode="stretch"/>
              <Text style={{position: 'absolute',alignSelf:"center", width:"90%",fontStyle:"italic",fontSize:18, fontWeight: "bold", color:"#fff", margin: 15}}>Calendar</Text>
              
          </TouchableOpacity> 
          <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate("Calorie")}>
              
              <Image                   
                  style={{position: 'relative',alignSelf:"center", height:"100%", width:"100%", borderRadius:10,borderColor:"#d3d3d3",borderWidth:0.5}}
                  source={require('../assets/healthbg.jpg')}
                  resizeMode="stretch"/>
              <Text style={{position: 'absolute',alignSelf:"center", width:"90%",fontStyle:"italic",fontSize:18, fontWeight: "bold", color:"#fff", margin: 15}}>Health</Text>
              
          </TouchableOpacity>   
          <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate("ToDo")}>
              
              <Image                   
                  style={{position: 'relative',alignSelf:"center", height:"100%", width:"100%", borderRadius:10,borderColor:"#d3d3d3",borderWidth:0.5}}
                  source={require('../assets/walletbg.png')}
                  resizeMode="stretch"/>
              <Text style={{position: 'absolute', alignSelf:"center", width:"90%",fontStyle:"italic",fontSize:18,  fontWeight: "bold", color:"#fff", margin: 15}}>Wallet</Text>
              
          </TouchableOpacity>             
      </View>
    );
  }
}

const styles = StyleSheet.create({

  Container:{
    flex:1,
    backgroundColor:"#fff",
    height:"100%",
    width:"100%"  
  },
  header:{
    width: "100%",
    backgroundColor:"#98D9B7",
    alignSelf:"center",
    flexDirection:"column",
  },
  box:{
    width:"94%",
    alignSelf:"center",
    backgroundColor:"#fff",
    marginTop:20,
    borderRadius:10,
    shadowOffset:{height:1, width:1},
    shadowOpacity:0.5,
    height:150,
  }
});
        