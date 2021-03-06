import * as React from 'react'

import { AppContext, AppState, Routes } from '../AppContext'
import { Button, Caption, Text, Title } from 'react-native-paper'
import { Image, SafeAreaView, StyleSheet } from 'react-native'
import { StatusBar, Unmasked } from '@suresure/react-native-components'

import Colors from '../Colors'
import Logo from '../assets/icon.png'
import { StackNavigationProp } from '@react-navigation/stack'

type Props = {
  navigation: StackNavigationProp<Routes, 'Login'>
}

type State = {
  email: string
  password: string
}

export default class Login extends React.Component<Props, State> {
  static contextType = AppContext
  // @ts-ignore
  context: AppState

  state = {
    email: '',
    password: '',
  }

  setEmail = (email: string) => {
    this.setState({ email })
  }

  setPassword = (password: string) => {
    this.setState({ password })
  }

  callLogin = () => {
    this.context.login(this.state.email, this.state.password)
  }

  gotoRegister = () => {
    this.props.navigation.navigate('Register')
  }

  render = () => {
    return (
      <SafeAreaView style={{ paddingTop: 14, alignItems: 'center', paddingHorizontal: 40 }}>
        <Title>Login</Title>
        <Image style={styles.logo} source={Logo} />
        <Caption>Email</Caption>
        <Unmasked onChangeText={this.setEmail} style={styles.input} keyboardType='email-address' />
        <Caption>Password</Caption>
        <Unmasked onChangeText={this.setPassword} style={styles.input} secureTextEntry />
        <Button onPress={this.callLogin}>
          <Text>Login</Text>
        </Button>
        <Button onPress={this.gotoRegister}>
          <Text>Register</Text>
        </Button>
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
})
