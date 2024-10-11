import { EStoreReducer, TRootState } from '@/app/store'

export const getTaskSelector = (state: TRootState) => state[EStoreReducer.task]
