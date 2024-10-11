import { TDefaultPaginationParams } from '@/app/store'

import { TQuery } from '@/features/api/types'

import { TResponseDocs } from '@/features/types'

import { TNote } from '../../models'

export type TGetNoteRequest = TQuery<TPayload, TResponse>

type TPayload = {} & TDefaultPaginationParams

type TResponse = TResponseDocs<TNote[]>
