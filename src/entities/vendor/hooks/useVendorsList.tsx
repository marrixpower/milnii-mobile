import { useEffect, useState } from 'react'

import { i18n } from '@/app/i18n'

import { TVendorCategory } from '@/entities/vendor/models/common'

import { usePagination } from '@/shared/hooks/usePagination'

import { VendorService } from '../services'

export const useVendorsList = () => {
  const [category, setCategory] = useState<TVendorCategory[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [totalCount, setTotalCount] = useState<number>(0)

  const getAction = async (skip: number) => {
    try {
      setLoading(true)
      const {
        data: { totalCount: newTC, docs },
      } = await VendorService.getCategory({ skip, limit: 50 })

      setCategory(prev => {
        const data = skip === 0 ? docs : [...prev, ...docs]

        return data.sort((a, b) => {
          const aValue = a.name.find(n => n.lang === i18n.language)?.value || ''
          const bValue = b.name.find(n => n.lang === i18n.language)?.value || ''
          return aValue.localeCompare(bValue)
        })
      })

      setTotalCount(newTC)
    } catch (error) {
      console.log('useVendorsList error =>', error)
    } finally {
      setLoading(false)
    }
  }

  const { getFirstPage, ...paginationProps } = usePagination({
    getAction,
    totalCount,
    items: category,
    loading,
  })

  useEffect(() => {
    getFirstPage()
  }, [])
  return {
    category,
    getFirstPage,
    ...paginationProps,
  }
}
