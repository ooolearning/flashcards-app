import * as React from 'react'

import Login from '../screens/Login'
import Register from '../screens/Register'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

export default class RootNavigator extends React.Component {
  render = () => {
    return (
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen
          name='Login'
          component={Login}
        />
        <Screen
          name='Register'
          component={Register}
        />
      </Navigator>
    )
  }
}
