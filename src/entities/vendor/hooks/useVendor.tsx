import { useEffect, useState } from 'react'

import { TVendor } from '@/entities/vendor/models/common'

import { VendorService } from '../services'

type Props = {
  vendor?: TVendor
}

export const useVendor = ({ vendor: initial }: Props) => {
  const [vendor, setVendor] = useState<TVendor | undefined>(initial)

  const getAction = async () => {
    if (!initial?._id) return

    try {
      const { data } = await VendorService.getVendorById({
        id: initial._id,
      })

      setVendor(data)
    } catch (error) {
      console.log('useVendor error =>', error)
    } finally {
    }
  }

  useEffect(() => {
    if (initial?._id) {
      getAction()
    }
  }, [initial?._id])

  return {
    vendor,
    getAction,
  }
}
