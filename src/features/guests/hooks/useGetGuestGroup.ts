import { useEffect, useState } from 'react'

import { TGuestGroups } from '@/entities/guests'
import { GuestsService } from '@/entities/guests/services'

export const useGetGuestGroup = () => {
  const [guestGroups, setGuestGroups] = useState<TGuestGroups[]>([])
  const getAction = async () => {
    try {
      const {
        data: { docs },
      } = await GuestsService.getGuestGroups({ limit: 1000 })

      setGuestGroups(docs)
    } catch (error) {
      console.log('useGetGuestGroup error =>', error)
    }
  }

  useEffect(() => {
    getAction()
  }, [])

  return {
    guestGroups,
    getAction,
  }
}
