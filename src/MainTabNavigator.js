 /* eslint-disable import/no-unresolved */
import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './Home';
import CalendarScreen from './Calendar';
import CalorieScreen from './Calorie';
import ToDoScreen from './ToDo';

const iconHome = require('../assets/tabbar/home1.png');
const iconCalendar = require('../assets/tabbar/calendar.png');
const iconCalorie = require('../assets/tabbar/calorie.png');
const iconToDo = require('../assets/tabbar/todo.png');

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
    width: 23,
    height: 20,
  },
  tabBarIconFocused: {
    tintColor: "#ff8b1a"
  },
  headerContainer: {
    height: 70,
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
    ToDo: {
      screen: ToDoScreen,
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
          case 'ToDo':
            iconSource = iconToDo;
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
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor:'#ff8b1a',
      inactiveTintColor:'#a9a9a9',
      showLabel: true,
      style: {
        backgroundColor: "#ffffff",
        borderTopWidth: 2,
        borderTopColor: '#ffffff',
      },
      labelStyle: {
        color: "#a9a9a9",
        
        fontSize: 15,
      },
    },
  },
);