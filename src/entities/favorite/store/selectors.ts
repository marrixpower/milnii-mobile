import { EStoreReducer, TRootState } from '@/app/store'

export const getFavoriteSelector = (state: TRootState) =>
  state[EStoreReducer.favorite]
