import { useEffect, useState } from 'react'

import { useIsFocused } from '@react-navigation/native'

import { useDispatch } from 'react-redux'

import { useTypedSelector } from '@/app/store'

import { favoriteActions, getFavoriteSelector } from '@/entities/favorite/store'

import { VendorService } from '../services'

export const useTotalCounts = () => {
  const isFocused = useIsFocused()
  const dispatch = useDispatch()
  const { favoriteTotalCount } = useTypedSelector(getFavoriteSelector)
  const [totalCount, setTotalCount] = useState<number>(0)

  const getTotalCount = async () => {
    try {
      const {
        data: { totalCount: newTC },
      } = await VendorService.getVendors({})

      setTotalCount(newTC)
    } catch (error) {
      console.log('useTotalCounts getTotalCount error =>', error)
    } finally {
    }
  }

  const getFavoriteCount = async () => {
    dispatch(favoriteActions.getFavoritesTotalCountRequest())
  }

  useEffect(() => {
    if (isFocused) {
      getTotalCount()
      getFavoriteCount()
    }
  }, [isFocused])

  return {
    totalCount,
    favoriteCount: favoriteTotalCount,
  }
}
