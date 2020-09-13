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
  TextInput,
  AsyncStorage,Alert,
} from 'react-native';

import {Header, Title, Body} from 'native-base';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
   navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
         this.fetchData();
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }

   async fetchData() {     
  }  

  render() {
    return (
      <View style={styles.main}>
        <Header style={styles.header}>
          <Text style={styles.text1}>YOU ARE IN</Text>
          <Text style={styles.text2}>{this.state.place}</Text>
        </Header>
        <View style={styles.view}>   
                 
        </View>
        { (this.state.count>0)?
          <TouchableOpacity
          style={styles.add1}
          onPress={() => this.props.navigation.navigate("BuyPlan")}
          underlayColor='#fff'>
          <Text style={{fontSize:18, color:"#ffffff", marginTop:14,width:"60%",}}>{this.state.count} Selected</Text>
          <Text style={styles.text}>Proceed</Text>
          <FeatherI style={{padding:10}} name="arrow-right" size={30} color="#fff"/>
        </TouchableOpacity>:    
          <TouchableOpacity
            style={styles.add}
            onPress={() => this.props.navigation.navigate("Add")}
            underlayColor='#fff'>
            <Text style={styles.text}>Add Product</Text>
          </TouchableOpacity>}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  main:{
    backgroundColor:"#d3d3d3",
    height:"100%",
  },
  text:{
    alignSelf:"center",
    fontSize:18,
    fontWeight:"bold",
    color:"#ffffff",
  },
  header:{
    width: "100%",
    backgroundColor:"#ff8b1a",
    alignSelf:"center",
    flexDirection:"column",
  },
  text1:{
    marginTop:5,
    fontSize:14,
    color:"#ffffff",
    marginLeft:10,
  },
  text2:{
    fontSize:18,
    color:"#ffffff",
    fontWeight:"bold",
    marginLeft:10,
  },
  text4:{
    fontSize:14,
    color:"#000000",
    textAlign:"center",
    marginTop:2,
  },
  text5:{
    fontSize:14,
    color:"#000000",
    fontWeight:"bold",
    textAlign:"center",
    marginTop:10,
    marginLeft:5,
  },
  text51:{
    fontSize:14,
    color:"#a9a9a9",
    fontWeight:"bold",
    textAlign:"center",
    marginTop:10,
    marginLeft:5,
  },
  text512:{
    fontSize:14,
    color:"#000000",
    fontWeight:"bold",
    textAlign:"center",
  },
  text6:{
    fontSize:14,
    color:"#000000",
    fontWeight:"bold",
    marginTop:2,
    textAlign:"center",
  },
  text61:{
    fontSize:14,
    color:"#000000",
    fontWeight:"bold",
    marginTop:10,
    textAlign:"center",
  },
  text7:{
    fontSize:14,
    color:"#a9a9a9",
    marginLeft:5,
  },
  text8:{
    fontSize:14,
    color:"#a9a9a9",
    alignSelf:"center",
    fontWeight:"bold",
    marginTop:5
  },
  text9:{
    fontSize:14,
    color:"#a9a9a9",
    alignSelf:"center",
    marginTop:5,
    width:"90%"
  },
  text10:{
    fontSize:17,
    color:"#ff8b1a",
    fontWeight:"bold",
  },
  text11:{
    fontSize:17,
    color:"#000000",
    fontWeight:"bold",
    textAlign:"center",
    marginTop:10,
  },
  view:{
    flex:1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list:{
    marginTop:-5,
  },
  mod:{
    flexDirection:"row",
  },
  mod1:{
    borderWidth:0.5,
    borderColor:"#d3d3d3",
    marginTop:3,
    justifyContent:"center",
    width:150,
    height:35,
  },
  mod12:{
    marginTop:3,
    justifyContent:"center",
    width:150,
    height:35,
    borderRadius:2,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius:2,
    height:40,
    marginTop:6,
  },
  searchIcon: {
    padding: 10,
 },
callIcon: {
    marginTop: 10,
 },
  call: {
    width:"100%",
    height:40,
    borderWidth:0.8,
    borderColor:"#d3d3d3",
    justifyContent:"center",
    marginTop:10,
    flexDirection:"row",
},
  input: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    fontSize:18,
    height:40,
},
  add:{
    alignSelf:"center",
    width:"95%",
    justifyContent:"center",
    height:50,
    marginBottom:3,
    backgroundColor:'#ff8b1a',
    borderRadius:10,
  },
  add1:{
    alignSelf:"center",
    width:"100%",
    justifyContent:"center",
    height:50,
    marginBottom:3,
    backgroundColor:'#000',
    flexDirection:"row",
  },
  body1:{
    marginTop:5,
    marginLeft:-8,
  },
  Image:{
    marginTop:10,
    height:80,
    width:80,
    alignSelf:"center",
  },
  Image1:{
    height:16,
    width:16,
    marginLeft:10,
    alignSelf:"center",
  },
  box:{
    backgroundColor:"#ffffff",
    borderRadius:3,
    marginLeft:14,
    width:"45.5%",
    textAlign:"center",
    alignSelf:"center",
    shadowOffset:{height:1, width:1},
    shadowOpacity:0.5,
    marginTop:10,
  },
  button: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
    width:"40%",
    marginTop:15,
    marginBottom:15,
  },
  button1: {
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
    width:"45%",
    height:35,
    marginTop:15,
    marginBottom:15,
    flexDirection:"row",
  },
  modalContent: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
    width:"95%"
  },
});
