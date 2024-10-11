import { HOST } from '@env'
import auth from '@react-native-firebase/auth'
import axios, { InternalAxiosRequestConfig } from 'axios'
import i18next from 'i18next'

import { ELanguages } from '@/app/i18n'
import { EStacks, Navigation } from '@/app/navigation'
import { store } from '@/app/store'

import { favoriteActions } from '@/entities/favorite/store'
import { tasksActions } from '@/entities/tasks/store'
import { userActions } from '@/entities/user/store'

// if Firebase token
// import auth from '@react-native-firebase/auth'

const privateInstance = axios.create({
  baseURL: HOST,
  headers: {
    'Content-Type': 'application/json',
  },
})

const publicInstance = axios.create({
  baseURL: HOST,
  headers: {
    'Content-Type': 'application/json',
  },
})

const langConfig = (config: InternalAxiosRequestConfig<unknown>) => {
  // Append current lang
  const lang = i18next.language || ELanguages.en

  // If get method
  if (['get'].includes(config.method as string)) {
    config.params = { lang, ...config.params }
    return config
  }

  return config
}

privateInstance.interceptors.request.use(
  async config => {
    const token = await auth().currentUser?.getIdToken(true)

    // console.log('token =>', token)
    if (token && config.headers) {
      config.headers.Authorization = 'Bearer ' + token
    }

    return langConfig(config)
  },
  error => {
    return Promise.reject(error)
  },
)

publicInstance.interceptors.request.use(
  async config => {
    return langConfig(config)
  },
  error => {
    return Promise.reject(error)
  },
)

privateInstance.interceptors.response.use(
  response => response,
  error => {
    if (axios.isAxiosError(error)) {
      console.log('privateInstance error =>', error.response?.data?.message)

      if (error.response?.status === 401) {
        console.log('[ERROR]: USER LOGOUT')

        auth().signOut()

        store.dispatch(userActions.clearState())
        store.dispatch(favoriteActions.clearState())
        store.dispatch(tasksActions.clearState())

        // Navigation.ref.reset({
        //   index: 0,
        //   routes: [{ name: EStacks.Auth }],
        // })
      }
    }
    // handleError(error)
    return Promise.reject(error)
  },
)

export const apiPrivate = privateInstance
export const apiPublic = publicInstance
