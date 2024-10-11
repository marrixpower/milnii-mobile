import { TQuery } from '@/features/api/types'

import { TVendor } from '../../models/common'

export type TGetVendorByIdRequest = TQuery<TPayload, TResponse>

type TPayload = { id: string }

type TResponse = TVendor
