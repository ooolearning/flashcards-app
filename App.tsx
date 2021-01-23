import 'react-native-gesture-handler'

import * as Font from 'expo-font'
import * as React from 'react'

import { AppContext, AppState, State } from './AppContext'
import { DefaultTheme, ThemeProvider, configureFonts } from 'react-native-paper'

import Colors from './Colors'
import { Font as FontType } from 'react-native-paper/lib/typescript/types'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigators/RootNavigator'

const defaultFont: FontType = {
  fontFamily: 'OpenSans-Regular',
  fontWeight: 'normal',
}

export default class App extends React.Component<{}, AppState> {
  state = State

  login = (email: string, password: string) => {
    this.setState({
      logged: true,
      profile: {
        email,
        username: 'User',
      },
    })
  }

  register = (email: string, password: string, username: string) => {
    this.setState({
      logged: true,
      profile: {
        email,
        username,
      },
    })
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      'OpenSans-Regular': {
        uri: require('./assets/fonts/OpenSans-Regular.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
      'OpenSans-Bold': {
        uri: require('./assets/fonts/OpenSans-Bold.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
    })
    this.setState({ loading: false })
  }

  render = () => {
    if (this.state.loading) return null
    return (
      <AppContext.Provider value={{
        ...this.state,
        login: this.login,
      }}>
        <ThemeProvider theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            accent: Colors.primary,
          },
          fonts: configureFonts({
            default: {
              light: defaultFont,
              regular: defaultFont,
              medium: defaultFont,
              thin: defaultFont,
            },
          }),
        }}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </AppContext.Provider>
    )
  }
}
