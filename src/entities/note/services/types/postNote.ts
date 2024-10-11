import { TQuery } from '@/features/api/types'

import { TNote } from '../../models'

export type TPostNoteRequest = TQuery<TPayload, TResponse>

type TPayload = { text: string }

type TResponse = TNote
