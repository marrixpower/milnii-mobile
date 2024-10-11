import { useEffect, useState } from 'react'

import { useIsFocused } from '@react-navigation/native'
import _ from 'lodash'

import { TVendor } from '@/entities/vendor/models/common'

import { usePagination } from '@/shared/hooks/usePagination'

import { VendorService } from '../services'

type Props = {
  category: string
}

export const useGetVendors = ({ category }: Props) => {
  const [vendors, setVendors] = useState<TVendor[]>([])
  const [totalCount, setTotalCount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [search, setSearch] = useState('')
  const isFocused = useIsFocused()

  const getAction = async (skip: number) => {
    try {
      setLoading(true)

      const {
        data: { totalCount: newTC, docs },
      } = await VendorService.getVendors({
        limit: 10,
        skip,
        category: category,
        name: search.length > 3 ? search : undefined,
      })

      console.log('docs =>', docs.length)

      setTotalCount(newTC)

      setVendors(pev => (skip === 0 ? docs : [...pev, ...docs]))
    } catch (error) {
      console.log('useGetVendors error =>', error)
    } finally {
      setLoading(false)
    }
  }

  const { getFirstPage, ...paginationProps } = usePagination({
    getAction,
    items: vendors,
    loading,
    totalCount,
  })

  useEffect(() => {
    isFocused && getFirstPage()
  }, [isFocused])

  const debounced = _.debounce(() => getAction(0), 300)

  useEffect(() => {
    if (search.length > 3) {
      debounced()
    }
  }, [search])

  return {
    vendors,
    getFirstPage,
    search,
    setSearch,
    totalCount,
    ...paginationProps,
  }
}
