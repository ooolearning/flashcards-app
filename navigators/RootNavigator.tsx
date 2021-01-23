import * as React from 'react'

import { AppContext, AppState, Routes } from '../AppContext'

import Login from '../screens/Login'
import MainNavigator from './MainNavigator'
import Quiz from '../screens/Quiz'
import Register from '../screens/Register'
import { createStackNavigator } from '@react-navigation/stack'

export type RootRoutes = {
  Quiz: undefined
  Login: undefined
  Register: undefined
  Main: undefined
}

export type RootParamList = {
  Quiz: { title: string }
  Login: undefined
  Register: undefined
  Main: undefined
}

const { Navigator, Screen } = createStackNavigator<RootParamList>()

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
            <>
              <Screen
                name='Main'
                component={MainNavigator}
              />
              <Screen
                name='Quiz'
                component={Quiz}
              />
            </>
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
