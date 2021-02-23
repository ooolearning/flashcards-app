import * as React from 'react'

import { ActivityIndicator, Button, Caption, Headline, Modal, Paragraph, Subheading, Surface, Text, Title, TouchableRipple } from 'react-native-paper'
import { AppContext, AppState } from '../AppContext'
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { RootParamList, RootRoutes } from '../navigators/RootNavigator'
import { StatusBar, Unmasked } from '@suresure/react-native-components'

import Colors from '../Colors'
import Logo from '../assets/icon.png'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type Question = {
  question: string
  answers: {
    text: string
    correct: boolean
  }[]
}

type Props = {
  navigation: StackNavigationProp<RootRoutes, 'Quiz'>
  route: RouteProp<RootParamList, 'Quiz'>
}

type State = {
  questions: Question[]
  loading: boolean
}

export default class Quiz extends React.Component<Props, State> {
  static contextType = AppContext
  // @ts-ignore
  context: AppState

  state: State = {
    questions: [
      {
        question: 'Dare',
        answers: [
          { text: 'Who', correct: true },
          { text: 'When', correct: false },
          { text: 'Why', correct: false },
          { text: 'How', correct: false },
          { text: 'Which', correct: false },
        ],
      },
      {
        question: 'Yakusoku',
        answers: [
          { text: 'Destiny', correct: false },
          { text: 'Existence', correct: false },
          { text: 'Promise', correct: true },
          { text: 'Honor', correct: false },
          { text: 'Soup', correct: false },
        ],
      },
      {
        question: 'Oyasumi',
        answers: [
          { text: 'Good afternoon', correct: false },
          { text: 'No problem', correct: false },
          { text: 'Good night', correct: true },
          { text: 'Thank you', correct: false },
          { text: 'Don\'t worry', correct: false },
        ],
      },
    ],
    loading: true,
  }

  render = () => {
    const index: number = Math.floor(Math.random() * 3)
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
          <Title>Quiz - {this.props.route.params.title}</Title>
          <Surface style={styles.surface}>
            <Subheading>{this.state.questions[index].question}</Subheading>
          </Surface>

          <View style={{ width: '100%', paddingHorizontal: 20, paddingVertical: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
            {
              this.state.questions[index].answers.map((v, k) => {
                return (
                  <Surface key={k.toString()} style={styles.cards}>
                    <Paragraph>{v.text}</Paragraph>
                    <TouchableRipple
                      style={{ position: 'absolute', width: '100%', height: '100%' }}
                      onPress={() => alert(v.correct ? 'Correct' : 'Wrong')}><View /></TouchableRipple>
                  </Surface>
                )
              })
            }
          </View>

          {/* <Surface style={styles.surface}>
            <Headline>Kanji training</Headline>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et assumenda non eum, itaque, ipsam dignissimos nemo incidunt qui eligendi sunt eveniet, error inventore aperiam quis. Dolorem nobis quam officia. Id.</Paragraph>
            <Button onPress={this.gotoQuiz}>
              <Text>Start</Text>
            </Button>
          </Surface>
          <Surface style={styles.surface}>
            <Headline>Hiragana training</Headline>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et assumenda non eum, itaque, ipsam dignissimos nemo incidunt qui eligendi sunt eveniet, error inventore aperiam quis. Dolorem nobis quam officia. Id.</Paragraph>
            <Button onPress={this.gotoQuiz}>
              <Text>Start</Text>
            </Button>
          </Surface>
          <Surface style={styles.surface}>
            <Headline>Katakana training</Headline>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et assumenda non eum, itaque, ipsam dignissimos nemo incidunt qui eligendi sunt eveniet, error inventore aperiam quis. Dolorem nobis quam officia. Id.</Paragraph>
            <Button onPress={this.gotoQuiz}>
              <Text>Start</Text>
            </Button>
          </Surface> */}
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
  cards: {
    width: 60,
    height: 60,
    //padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
})
