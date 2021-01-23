import * as React from 'react'

export type AppState = {
  profile: {
    username: string
    email: string
  }
  loading: boolean
  logged: boolean
  login: Function
}

const State: AppState = {
  profile: {
    email: '',
    username: '',
  },
  loading: true,
  logged: false,
  login: () => { },
}

const AppContext = React.createContext(State)

export {
  AppContext,
  State,
}
