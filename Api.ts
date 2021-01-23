import axios from 'axios'

const auth = {
  username: '',
  password: '',
}

const api = axios.create({
  baseURL: 'https://localhost/api/',
  auth,
})

export { api as Api, auth }
