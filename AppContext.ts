import * as React from 'react'

export type Routes = {
  Login: undefined
  Register: undefined
  Home: undefined
  Profile: undefined
  Quiz: undefined
}

export type AppState = {
  profile: {
    username: string
    email: string
  }
  loading: boolean
  logged: boolean
  login: (email: string, password: string) => void
  register: (email: string, password: string, username: string) => void
}

const State: AppState = {
  profile: {
    email: '',
    username: '',
  },
  loading: true,
  logged: false,
  login: () => { },
  register: () => { },
}

const AppContext = React.createContext(State)

export {
  AppContext,
  State,
}
