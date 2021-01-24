import * as React from 'react'

import { ActivityIndicator, Button, Caption, Headline, Modal, Paragraph, Surface, Text, Title } from 'react-native-paper'
import { AppContext, AppState } from '../AppContext'
import { Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { MainParamList, MainRoutes } from '../navigators/MainNavigator'
import { RootParamList, RootRoutes } from '../navigators/RootNavigator'
import { StatusBar, Unmasked } from '@suresure/react-native-components'

import Colors from '../Colors'
import Logo from '../assets/icon.png'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type Props = {
  navigation: StackNavigationProp<MainRoutes & RootRoutes, 'Home'>
  route: RouteProp<MainParamList & RootParamList, 'Home'>
}

type State = {
  email: string
  password: string
  loading: boolean
}

export default class Home extends React.Component<Props, State> {
  static contextType = AppContext
  // @ts-ignore
  context: AppState

  state: State = {
    email: '',
    password: '',
    loading: true,
  }

  setEmail = (email: string) => {
    this.setState({ email })
  }

  setPassword = (password: string) => {
    this.setState({ password })
  }

  gotoQuiz = (params: RootParamList['Quiz']) => {
    // @ts-ignore
    this.props.navigation.navigate('Quiz', params)
  }

  render = () => {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
          <Title>Home</Title>
          <Surface style={styles.surface}>
            <Headline>Kanji training</Headline>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et assumenda non eum, itaque, ipsam dignissimos nemo incidunt qui eligendi sunt eveniet, error inventore aperiam quis. Dolorem nobis quam officia. Id.</Paragraph>
            <Button onPress={() => this.gotoQuiz({ title: 'Kanji' })}>
              <Text>Start</Text>
            </Button>
          </Surface>
          <Surface style={styles.surface}>
            <Headline>Hiragana training</Headline>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et assumenda non eum, itaque, ipsam dignissimos nemo incidunt qui eligendi sunt eveniet, error inventore aperiam quis. Dolorem nobis quam officia. Id.</Paragraph>
            <Button onPress={() => this.gotoQuiz({ title: 'Hiragana' })}>
              <Text>Start</Text>
            </Button>
          </Surface>
          <Surface style={styles.surface}>
            <Headline>Katakana training</Headline>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et assumenda non eum, itaque, ipsam dignissimos nemo incidunt qui eligendi sunt eveniet, error inventore aperiam quis. Dolorem nobis quam officia. Id.</Paragraph>
            <Button onPress={() => this.gotoQuiz({ title: 'Katakana' })}>
              <Text>Start</Text>
            </Button>
          </Surface>
          {/* <Image style={styles.logo} source={Logo} />
        <Caption>Email</Caption>
        <Unmasked onChangeText={this.setEmail} style={styles.input} keyboardType='email-address' />
        <Caption>Password</Caption>
        <Unmasked onChangeText={this.setPassword} style={styles.input} secureTextEntry />
        <Button onPress={this.callLogin}>
        <Text>Login</Text>
        </Button>
        <Button onPress={this.gotoRegister}>
          <Text>Register</Text>
        </Button> */}
        </ScrollView>
        <StatusBar translucent barStyle='dark-content' backgroundColor='transparent' />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.light,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 100,
    textAlign: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 140,
    height: 140,
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 14,
  },
  scrollView: {
    width: '100%',
    height: '100%',
  },
  safeAreaView: {
    alignItems: 'center',
  },
  surface: {
    marginVertical: 20,
    padding: 14,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
})
