import { useEffect, useState } from 'react'

import { ESortTypes } from '@/screens/Notes/Main/config'

import { TNote } from '@/entities/note'

import { NoteService } from '@/entities/note/services'

import { usePagination } from '@/shared/hooks/usePagination'

import { sortBy } from './config'

type TProps = {
  sort: ESortTypes
}

export const useGetNote = ({ sort }: TProps) => {
  const [totalCount, setTotalCount] = useState(0)
  const [notes, setNotes] = useState<TNote[]>([])
  const [loading, setLoading] = useState(false)

  const getAction = async (skip: number) => {
    try {
      setLoading(true)

      const params = sortBy[sort]

      const {
        data: { docs, totalCount: newTC },
      } = await NoteService.getNote({
        skip,
        limit: 10,
        ...params,
      })

      setNotes(prev => (skip === 0 ? docs : [...prev, ...docs]))

      setTotalCount(newTC)
    } catch (error) {
      console.log('useGetNote error =>', error)
    } finally {
      setLoading(false)
    }
  }

  const { refresh, ...paginationProps } = usePagination({
    totalCount,
    getAction,
    loading,
    items: notes,
  })

  useEffect(() => {
    refresh()
  }, [sort])
  return {
    ...paginationProps,
    notes,
    totalCount,
    refresh,
  }
}
