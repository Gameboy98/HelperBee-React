import React, { Component } from "react";
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
  AsyncStorage,Alert
} from 'react-native';
import {Header, Title, Body} from 'native-base';

const iconWallet = require('../assets/walle.png');

export default class WalletScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={{height:80, width:"100%"}}>
          <Text style={{margin:20,fontSize:16, fontWeight:"bold"}}>Savings Wallet</Text>
          <Text style={{marginLeft:20,fontSize:16, fontWeight:"bold"}}>₹   {this.state.total}.0</Text>
        </View>
        <View style={{height:100, width:"100%"}}>
          <Text style={{margin:20,fontSize:16, fontWeight:"bold"}}>Expenditure</Text>
          <Text style={{marginLeft:20,fontSize:16, fontWeight:"bold"}}>₹   {this.state.total}.0</Text>
        </View>
        <View style={{backgroundColor:"#000", width:"100%", height:5}}></View>
        <View style={{backgroundColor:"#ffc313", width:"100%", height:5}}></View>
        <View style={{backgroundColor:"#d3d3d3", width:"100%", height:25, justifyContent: 'center',}}><Text style={{fontWeight:"bold", marginLeft:10}}>Recents</Text></View>
        <ScrollView style={styles.view}>
           <FlatList
            style={styles.list}
            horizontal={false}
            data={this.state.wallet_data}
            renderItem={({item}) =>  
              <View style={styles.box}>
                <View style={{backgroundColor:"#a9a9a9", width:"100%", height:25, justifyContent: 'center',}}><Text style={{fontWeight:"bold", marginLeft:10}}>{item.paymentDate}</Text></View>
                <View style={{backgroundColor:"#fff", width:"100%", flexDirection:"row",}}>
                  <Image resizeMode="contain" source={iconWallet} style={{margin:20, height:50, width:50}} />
                  <View style={styles.Details}>
                    <Text style={{fontWeight:"bold",}}>{item.reason}</Text>
                    <Text style={{fontWeight:"bold", marginTop:10}}>{item.paymentFrom}</Text>
                    <View style={{flexDirection:"row"}}><Text style={{color:"#a9a9a9", marginTop:10}}>{item.time}</Text><Text style={{color:"#9E1A1A",fontWeight:"bold", marginTop:10, marginLeft:"50%"}}>-₹{item.balance}</Text></View>
                    <Text style={{color:"#a9a9a9", marginTop:10}}>Txn Id: {item.paymentId}</Text>
                  </View>
                </View>
              </View>
            }
            keyExtractor={(item, index) => index.toString()}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  main:{
    backgroundColor:"#ffffff",
    height:"100%",
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
  view:{
    flex:1,
  },
  Details:{
    margin:10,
    width:"75%",
    marginLeft:0,
  },
});