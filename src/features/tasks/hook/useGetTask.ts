import { useEffect, useState } from 'react'

import _ from 'lodash'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from '@/app/store'

import { ETaskStatus } from '@/entities/tasks/models'
import { TasksService } from '@/entities/tasks/services'
import { getTaskSelector, tasksActions } from '@/entities/tasks/store'

import { usePagination } from '@/shared/hooks/usePagination'

type Props = {
  filter?: ETaskStatus | undefined
}

export const useGetTask = ({ filter }: Props) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const { tasks } = useTypedSelector(getTaskSelector)
  const [search, setSearch] = useState('')
  const [localTotalCount, setLocalTotalCount] = useState(0)
  const getAction = async (skip: number) => {
    try {
      setLoading(true)

      const {
        data: { docs, totalCount: newTC },
      } = await TasksService.getTasks({
        limit: 10,
        skip,
        status: !!filter ? [filter] : undefined,
        sortBy: 'activeAfter',
        order: 1,
        name: search.length > 3 ? search : undefined,
      })

      !search && !filter && dispatch(tasksActions.setTotalCount(newTC))

      setLocalTotalCount(newTC)

      dispatch(
        tasksActions.setState({
          tasks: skip === 0 ? docs : [...tasks, ...docs],
        }),
      )

      dispatch(tasksActions.getDoneStatusRequest())
    } catch (error) {
      console.log('useGetTask error =>', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAction(0)
  }, [filter])

  const debounces = _.debounce(getAction, 300)

  useEffect(() => {
    if (search.length > 3) {
      debounces(0)
    }

    getAction(0)
  }, [search])

  const { ...paginationProps } = usePagination({
    items: tasks,
    getAction,
    loading,
    totalCount: localTotalCount,
    updateFunc: { filter, search },
  })

  return {
    tasks,
    ...paginationProps,
    loading,
    search,
    setSearch,
    localTotalCount,
  }
}
