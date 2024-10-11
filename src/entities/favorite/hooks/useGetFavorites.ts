import { useEffect, useState } from 'react'

import { useIsFocused } from '@react-navigation/native'
import _ from 'lodash'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from '@/app/store'

import { usePagination } from '@/shared/hooks/usePagination'

import { EFavoriteType } from '../models'
import { FavoriteService } from '../services'
import { favoriteActions, getFavoriteSelector } from '../store'

export const useGetFavorites = () => {
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const { favorites, favoriteTotalCount } =
    useTypedSelector(getFavoriteSelector)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  const getAction = async (skip: number) => {
    try {
      setLoading(true)
      const { data } = await FavoriteService.getFavorites({
        skip,
        limit: 10,
        sortBy: 'favorite.category',
        order: 1,
        name: search.length > 3 ? search : undefined,
        type: EFavoriteType.favorite,
      })

      const parsedData = data.docs.map(item => item.favorite)

      const dataSorted = skip === 0 ? parsedData : [...favorites, ...parsedData]

      dispatch(favoriteActions.setFavorite(dataSorted))
      dispatch(favoriteActions.setFavoriteTotalCount(data.totalCount))
    } catch (error) {
      console.log('useGetFavorites error =>', error)
    } finally {
      setLoading(false)
    }
  }

  const debounces = _.debounce(getAction, 300)

  useEffect(() => {
    if (search.length > 3) {
      debounces(0)
    }

    getAction(0)
  }, [search])

  useEffect(() => {
    getAction(0)
  }, [isFocused])

  const { ...paginationProps } = usePagination({
    items: favorites,
    totalCount: favoriteTotalCount,
    getAction,
    loading,
  })

  return {
    search,
    setSearch,
    vendors: favorites,
    getAction,
    ...paginationProps,
  }
}
