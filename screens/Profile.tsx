import * as React from 'react'

import { AppContext, AppState, Routes } from '../AppContext'
import { Button, Caption, Text, Title } from 'react-native-paper'
import { Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { StatusBar, Unmasked } from '@suresure/react-native-components'

import Colors from '../Colors'
import Logo from '../assets/icon.png'
import { StackNavigationProp } from '@react-navigation/stack'

type Props = {
  navigation: StackNavigationProp<Routes, 'Profile'>
}

type State = {
  email: string
  password: string
}

export default class Profile extends React.Component<Props, State> {
  static contextType = AppContext
  // @ts-ignore
  context: AppState

  setEmail = (email: string) => {
    this.setState({ email })
  }

  setPassword = (password: string) => {
    this.setState({ password })
  }

  callLogin = () => {
    alert('Login')
    alert(this.context.logged)
  }

  gotoRegister = () => {
    this.props.navigation.navigate('Register')
  }

  render = () => {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
          <Title>Profile</Title>
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
    borderRadius: 100,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'center',
    width: '100%',
  },
  logo: {
    height: 140,
    width: 140,
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
})
