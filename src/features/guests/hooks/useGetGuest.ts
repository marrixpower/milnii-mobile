import { useCallback, useEffect, useState } from 'react'

import { useIsFocused } from '@react-navigation/native'

import _ from 'lodash'

import { TGuestGroped } from '@/entities/guests'
import { GuestsService } from '@/entities/guests/services'

export const useGetGuest = () => {
  const [guests, setGuests] = useState<TGuestGroped[]>([])
  const [totalCountGuest, setTotalCountGuest] = useState<number>(0)
  const [name, setName] = useState('')
  const isFocused = useIsFocused()
  const getAction = async () => {
    try {
      const { data } = await GuestsService.getGuestsGroped({ name })

      setTotalCountGuest(data.flatMap(item => item.guests).length)

      setGuests(data)
    } catch (error) {
      console.log('useGetGuest error =>', error)
    }
  }

  const debounce = useCallback(_.debounce(getAction, 500), [name])

  useEffect(() => {
    debounce()
  }, [name])

  useEffect(() => {
    getAction()
  }, [isFocused])

  return {
    guests,
    getAction,
    name,
    setName,
    totalCountGuest,
  }
}
