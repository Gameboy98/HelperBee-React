 /* eslint-disable import/no-unresolved */
import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './Home';
import CalendarScreen from './Calendar';
import CalorieScreen from './Calorie';
import WalletScreen from './Wallet';
import ProfileScreen from './Profile';

const iconHome = require('../assets/tabbar/home1.png');
const iconCalendar = require('../assets/tabbar/calendar.png');
const iconCalorie = require('../assets/tabbar/calorie.png');
const iconWallet = require('../assets/tabbar/wallet.png');
const iconProfile = require('../assets/tabbar/profile.png');

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: "#ffffff",
    paddingHorizontal: 20,
  },
  tabBarIcon: {
    width: 21,
    height: 21,
  },
  tabBarIconFocused: {
    tintColor: "#ffc313"
  },
  headerContainer: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    resizeMode: 'cover',
  },
  headerCaption: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        header: null,
      },
    },
    Calorie: {
      screen: CalorieScreen,
      navigationOptions: {
        header: null,
      },
    },
    Wallet: {
      screen: WalletScreen,
      navigationOptions: {
        header: null,
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
      },
    },

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Home':
            iconSource = iconHome;
            break;
          case 'Calendar':
            iconSource = iconCalendar;
            break;
          case 'Calorie':
            iconSource = iconCalorie;
            break;
          case 'Wallet':
            iconSource = iconWallet;
            break;
          case 'Profile':
            iconSource = iconProfile;
            break;
          default:
            iconSource = iconHome;
        }
        return (
          <View style={styles.tabBarItemContainer}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor:'#ffc313',
      inactiveTintColor:'#a9a9a9',
      showLabel: false,
      style: {
        backgroundColor: "#fff",
        borderTopWidth: 1.5,
        borderTopColor: '#ffc313',
      },
      labelStyle: {
        color: "#d3d3d3",
        fontWeight: "bold",        
        fontSize: 12,
      },
    },
  },
);