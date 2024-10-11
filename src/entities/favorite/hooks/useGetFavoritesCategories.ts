import { useEffect, useState } from 'react'

import { useIsFocused } from '@react-navigation/native'

import { useDispatch } from 'react-redux'

import { useTypedSelector } from '@/app/store'

import { usePagination } from '@/shared/hooks/usePagination'

import { EFavoriteType } from '../models'
import { FavoriteService } from '../services'
import { favoriteActions, getFavoriteSelector } from '../store'

export const useGetFavoritesCategories = () => {
  const [totalCount, setTotalCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const isFocused = useIsFocused()
  const dispatch = useDispatch()
  const { savedCategory } = useTypedSelector(getFavoriteSelector)

  const getAction = async (skip: number) => {
    try {
      setLoading(true)

      const { data } = await FavoriteService.getFavoritesCategory({
        skip,
        limit: 30,
        type: EFavoriteType.saved,
      })

      dispatch(
        favoriteActions.setSavedCategory(
          skip === 0 ? data.docs : [...savedCategory, ...data.docs],
        ),
      )
      setTotalCount(data.totalCount)
    } catch (error) {
      console.log('useGetFavoritesCategories error =>', error)
    } finally {
      setLoading(false)
    }
  }

  const { getFirstPage, ...paginationProps } = usePagination({
    items: savedCategory,
    totalCount,
    getAction,
    loading,
  })

  useEffect(() => {
    isFocused && getFirstPage()
  }, [isFocused])

  return {
    savedCategory,
    getAction,
    getFirstPage,
    ...paginationProps,
  }
}
