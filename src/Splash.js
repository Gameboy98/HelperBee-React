import React from 'react';
import { View, Text ,AsyncStorage, Image} from 'react-native';


export default class Splash extends React.Component {

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    let isLogin =  await AsyncStorage.getItem("isLogIn");
    if(isLogin =="1"){
      this.props.navigation.navigate('Landing');
    }else{
      this.props.navigation.navigate('Landing');
    }
  }

  async storeData(response) {
    try {
        await AsyncStorage.getItem("isLogIn");
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Image
          source={require('../assets/Logo.png')}
          resizeMode="contain"/>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  textStyles: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold'
  }
}
