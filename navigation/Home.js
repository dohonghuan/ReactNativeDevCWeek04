import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator} from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });

const HomeStack = createStackNavigator(
    {
      Home: HomeScreen,
      Detail: DetailScreen,
    },
    config
  );
  
  HomeStack.navigationOptions = {
    tabBarLabel: 'Complete',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-done-all' : 'md-link'}
      />
    )
  };
  HomeStack.path = '';
  
  export default HomeStack;