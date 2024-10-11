import { useEffect, useState } from 'react'

import { useIsFocused } from '@react-navigation/native'
import _ from 'lodash'

import { TVendor } from '@/entities/vendor/models/common'

import { usePagination } from '@/shared/hooks/usePagination'

import { EFavoriteType } from '../models'
import { FavoriteService } from '../services'

type Props = {
  category: string
}
export const useGetSavedFromCategory = ({ category }: Props) => {
  const [totalCount, setTotalCount] = useState(0)
  const [vendors, setVendors] = useState<TVendor[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  const isFocused = useIsFocused()
  const getAction = async (skip: number) => {
    try {
      console.log('params =>', {
        skip,
        limit: 10,
        type: EFavoriteType.saved,
        name: search.length > 3 ? search : undefined,
        category,
      })
      setLoading(true)
      const { data } = await FavoriteService.getFavorites({
        skip,
        limit: 10,
        type: EFavoriteType.saved,
        name: search.length > 3 ? search : undefined,
        category,
      })

      console.log('length =>', data.docs.length)

      const parsedData = data.docs.map(item => item.favorite)

      setVendors(prev => (skip === 0 ? parsedData : [...prev, ...parsedData]))
      setTotalCount(data.totalCount)
    } catch (error) {
      console.log('useGetSavedFromCategory error =>', error)
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
    isFocused && getAction(0)
  }, [isFocused])

  const { ...paginationProps } = usePagination({
    items: vendors,
    totalCount,
    getAction,
    loading,
  })

  return {
    search,
    setSearch,
    vendors,
    getAction,
    totalCount,
    ...paginationProps,
  }
}
