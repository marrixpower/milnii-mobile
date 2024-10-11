import { PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'
import _ from 'lodash'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { TRootState, TSetStatePayload } from './types'

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector

export const ReduxTools = {
  withPayloadType: <T>() => {
    return (t: T) => ({ payload: t })
  },
}

export const Reducers = {
  setState:
    <TInitialState>() =>
    (
      state: WritableDraft<TInitialState>,
      { payload }: PayloadAction<TSetStatePayload<TInitialState>>,
    ) => {
      ;(Object.keys(state) as (keyof typeof state)[]).forEach(key => {
        const value = payload[key] as never

        state[key] = _.isBoolean(value) ? value : value || state[key]
      })
    },
  setError:
    <TInitialState extends { loading: boolean }>() =>
    (
      state: WritableDraft<TInitialState>,
      { payload }: PayloadAction<TSetStatePayload<TInitialState>>,
    ) => {
      if (state.loading) {
        state.loading = false as never
      }
    },
  clearState:
    <TInitialState>(initialState: TInitialState) =>
    (state: WritableDraft<TInitialState>) => {
      ;(Object.keys(state) as (keyof typeof state)[]).forEach(key => {
        state[key] = initialState[key] as never
      })
    },
}

/**
 *
 * @param data props that will be in form data
 * @param imageProps array of props name that include images
 * @returns generate form data
 */
export const generateFormData = (
  data: Object,
  imageProps?: Array<string>,
  mimeType?: string,
): FormData => {
  const formData = new FormData()

  Object.entries(data).forEach(([prop, value]) => {
    if (value === undefined) {
      return
    }

    if (value === '') {
      return
    }

    if (value === null) {
      formData.append(prop, 'null')
      return
    }

    const mime = mimeType || 'image'

    if (value.includes('/')) {
      // If prop has images
      if (imageProps?.includes(prop)) {
        // image prop has array of images
        if (Array.isArray(value)) {
          console.log('is Array')

          value.forEach(image => {
            formData.append(prop, {
              uri: image,
              name: image?.split('/')?.[image?.split('/')?.length - 1],
              type: `${mime}/${image?.split('.').pop()}`,
            })
          })

          return
        }
        console.log('is  NO Array', value)

        formData.append(prop, {
          uri: value,
          name: value?.split('/')?.[value?.split('/')?.length - 1],
          type: `${mime}/${value?.split('.').pop()}`,
        })

        return
      }
    }

    // if simple type object or array of objects
    if (typeof value === 'object' || Array.isArray(value)) {
      formData.append(prop, JSON.stringify(value))
      return
    }

    formData.append(prop, value)
  })

  return formData
}
