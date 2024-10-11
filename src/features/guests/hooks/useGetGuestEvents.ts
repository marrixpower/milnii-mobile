import { useEffect, useState } from 'react'

import { TGuestEvent } from '@/entities/guests'
import { GuestsService } from '@/entities/guests/services'

export const useGetGuestEvents = () => {
  const [guestEvent, setGuestEvent] = useState<TGuestEvent[]>([])
  const getAction = async () => {
    try {
      const {
        data: { docs },
      } = await GuestsService.getEvent({ limit: 1000 })

      setGuestEvent(docs)
    } catch (error) {
      console.log('useGetGuestEvents error =>', error)
    }
  }

  useEffect(() => {
    getAction()
  }, [])

  return {
    guestEvent,
    getAction,
  }
}
