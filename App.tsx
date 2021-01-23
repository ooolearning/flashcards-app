import 'react-native-gesture-handler'

import * as Font from 'expo-font'
import * as React from 'react'

import { DefaultTheme, ThemeProvider, configureFonts } from 'react-native-paper'

import Colors from './Colors'
import { Font as FontType } from 'react-native-paper/lib/typescript/types'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigators/RootNavigator'

const defaultFont: FontType = {
  fontFamily: 'OpenSans-Regular',
  fontWeight: 'normal',
}

type State = {
  loading: boolean
}

export default class App extends React.Component<{}, State> {
  state = {
    loading: true,
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
    )
  }
}
