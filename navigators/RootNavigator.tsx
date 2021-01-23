import * as React from 'react'

import { AppContext, AppState, Routes } from '../AppContext'

import Login from '../screens/Login'
import MainNavigator from './MainNavigator'
import Register from '../screens/Register'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

export default class RootNavigator extends React.Component {
  static contextType = AppContext
  // @ts-ignore
  context: AppState

  render = () => {
    return (
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {this.context.logged ?
          (
            <Screen
              name='Main'
              component={MainNavigator}
            />
          ) :
          (
            <>
              <Screen
                name='Login'
                component={Login}
              />
              <Screen
                name='Register'
                component={Register}
              />
            </>
          )
        }
      </Navigator>
    )
  }
}
