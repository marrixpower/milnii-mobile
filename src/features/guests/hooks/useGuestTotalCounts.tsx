import { useEffect, useState } from 'react'

import { useIsFocused } from '@react-navigation/native'

import { EGuestStatus } from '@/entities/guests'
import { GuestsService } from '@/entities/guests/services'

export const useGuestTotalCounts = () => {
  const isFocused = useIsFocused()

  const [totalCount, setTotalCount] = useState<number>(0)
  const [done, setDone] = useState<number>(0)

  const getTotalCount = async () => {
    try {
      const {
        data: { totalCount: newTCConfirmed },
      } = await GuestsService.getGuests({ status: EGuestStatus.confirmed })

      setDone(newTCConfirmed)

      const {
        data: { totalCount: newTC2 },
      } = await GuestsService.getGuests({})

      setTotalCount(newTC2)
    } catch (error) {
      console.log('useTotalCounts getTotalCount error =>', error)
    } finally {
    }
  }

  useEffect(() => {
    if (isFocused) {
      getTotalCount()
    }
  }, [isFocused])

  return {
    totalCount,
    done,
    getTotalCount,
  }
}
