import * as Icons from '@expo/vector-icons'
import * as React from 'react'

import Colors from '../Colors'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator()

export default class MainNavigator extends React.Component {
  render = () => {
    return (
      <Navigator
        tabBarOptions={{
          activeTintColor: Colors.primary,
        }}>
        <Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: (props: { focused: boolean, color: string }) =>
              <Icons.AntDesign name='book' size={24} color={props.color} />
          }}
        />
        <Screen
          name='Profile'
          component={Profile}
          options={{
            tabBarIcon: (props: { focused: boolean, color: string }) =>
              <Icons.AntDesign name='user' size={24} color={props.color} />
          }}
        />
      </Navigator>
    )
  }
}
