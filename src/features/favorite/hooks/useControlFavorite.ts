import { Linking } from 'react-native'

import { useDispatch } from 'react-redux'

import { useTypedSelector } from '@/app/store'

import { EFavoriteType } from '@/entities/favorite/models'
import { FavoriteService } from '@/entities/favorite/services'
import { favoriteActions, getFavoriteSelector } from '@/entities/favorite/store'

type Props = {
  id: string | undefined
}

export const useControlFavorite = ({ id }: Props) => {
  const dispatch = useDispatch()
  const { favoriteTotalCount } = useTypedSelector(getFavoriteSelector)

  const onPressFavorite = async (
    isFavorite: boolean,
    type: EFavoriteType,
    email?: string,
  ) => {
    if (!id) return

    try {
      if (isFavorite) {
        console.log('Delete favorite', id, type)
        await FavoriteService.deleteFavorites({
          id,
          type,
        })

        if (type === EFavoriteType.favorite) {
          dispatch(
            favoriteActions.setFavoriteTotalCount(favoriteTotalCount - 1),
          )
        }

        return
      }

      console.log('Post favorite', id, type)
      await FavoriteService.postFavorites({
        favorite: id,
        type,
      })

      if (email) {
        Linking.openURL(`mailto:${email}`)
      }

      if (type === EFavoriteType.favorite) {
        dispatch(favoriteActions.setFavoriteTotalCount(favoriteTotalCount + 1))
      }
    } catch (error) {
      console.log('onPressFavorite error =>', error)
    }
  }
  return {
    onPressFavorite,
  }
}
