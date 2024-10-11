import React, { useContext } from 'react'

import { useRoute } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { LoaderContext } from '@/app/contexts/Loader'
import { EScreens } from '@/app/navigation'
import { TScreenQueryProps } from '@/app/navigation/types'

import { Header } from '@/widgets/header'

import { GuestsFeature } from '@/features/guests'

import { GuestsService } from '@/entities/guests/services'

import { useNavigation } from '@/shared/hooks'
import { Background } from '@/shared/ui/background'

import { Modal } from '@/shared/ui/modal'

import { styles } from './styled'

export const AddGuest = () => {
  const { t } = useTranslation()
  const { goBack } = useNavigation()
  const { setLoading } = useContext(LoaderContext)
  const params = useRoute<TScreenQueryProps<EScreens.GuestsAddGuest>>().params

  const [modalVisible, setModalVisible] = React.useState(false)
  const onDelete = async () => {
    try {
      if (!params.id) return
      setLoading(true)

      await GuestsService.deleteGuest({ id: params.id })

      goBack()
    } catch (error) {
      console.log('onDelete error =>', error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <Header.Nested
        title={t('home.links.guests')}
        rightIcon={!!params.id ? 'Trash' : undefined}
        onRightIconPress={() => setModalVisible(true)}
      />
      <Background.Scroll
        nestedScrollEnabled
        extraScrollHeight={100}
        keyboardShouldPersistTaps={'handled'}
        style={styles.main}>
        <GuestsFeature.AddGuestForm />
      </Background.Scroll>

      <Modal.Delete
        {...{ onDelete, modalVisible, setModalVisible }}
        title={t('guests.delete_title')}
        description={t('guests.delete_desc')}
      />
    </>
  )
}
