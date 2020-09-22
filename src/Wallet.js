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

import AntDesignI from 'react-native-vector-icons/AntDesign';
const iconAdd = require('../assets/plus.png');

import Modal from 'react-native-modal';

export default class WalletScreen extends Component {
  state = {
    visibleModal: null,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  AddModal(){
    return(
      <Modal isVisible={this.state.visibleModal === 1}>
          <View style={styles.modalContent}>
          <View style={{width:"100%", marginTop:3, justifyContent:"center", height:70,}}><Text style={styles.text11}>Your product is within 1 year. It's advised to call Brand Call center</Text></View>
            <View style={styles.mod}>
              <View style={styles.mod12}><View><Text style={styles.text4}>Your Brand :-</Text><Text style={styles.text4}>Call Center No :-</Text></View></View>
              <View style={styles.mod12}><Text style={styles.text4}>{this.state.product.age}</Text></View>
            </View>
            <View style={styles.mod}>
              <TouchableOpacity onPress={() => this.setState({ visibleModal: null })} style={styles.button1}><Text style={styles.text512}>Confirm</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate("Complaint", {item:this.state.product}); this.setState({ visibleModal: null });}} style={styles.button1}><Text style={styles.text512}>Call</Text><Image resizeMode="contain" source={icon} style={[styles.Image1]} /></TouchableOpacity>
            </View>
          </View>
        </Modal>
      );
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
        <TouchableOpacity
            style={styles.add}
            onPress={() => this.setState({ visibleModal: 1 })}
            underlayColor='#fff'>
            <AntDesignI style={{alignSelf:"center"}} name="plus" size={22} color="#fff"/>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  main:{
    backgroundColor:"#ffffff",
    height:"100%",
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
  add:{
    alignSelf:"flex-end",
    justifyContent:"center",
    height:50,
    width:50,
    margin:15,
    backgroundColor:'#ffc313',
    borderRadius:25,
  },
  modalContent: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
    width:"95%"
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
});