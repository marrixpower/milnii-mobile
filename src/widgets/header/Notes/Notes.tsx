import React, { useContext } from 'react'

import { useRoute } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { LoaderContext } from '@/app/contexts/Loader'
import { EScreens } from '@/app/navigation'
import { TScreenQueryProps } from '@/app/navigation/types'

import { NoteService } from '@/entities/note/services'

import { useNavigation } from '@/shared/hooks'

import { Icon } from '@/shared/ui/Icon'

import { EColors } from '@/shared/ui/styled'

import { FlexWrapper, Touchable } from '@/shared/ui/styled/Styled'
import { BodyM4SB } from '@/shared/ui/styled/Text'

import { Header } from '..'

import { Container, styles } from './styles'

export const Notes = () => {
  const { goBack } = useNavigation()
  const { t } = useTranslation()
  const { setLoading } = useContext(LoaderContext)

  const { id } = useRoute<TScreenQueryProps<EScreens.NotesNote>>().params

  const isEdit = !!id

  const onDelete = async () => {
    if (!id) return

    try {
      setLoading(true)
      await NoteService.deleteNote({ id })

      goBack()
    } catch (error) {
      console.log('NoteOnDelete error =>', error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Header.Container color={EColors.white}>
      <Container>
        <Touchable onPress={goBack} style={styles.touch}>
          <Icon
            fill={EColors.translation}
            stroke={EColors.primary}
            name={'Back'}
            size={22}
          />
        </Touchable>
        {!!isEdit && (
          <Touchable onPress={onDelete}>
            <FlexWrapper width="auto" justify="flex-end">
              <BodyM4SB mLeft="12px" color={EColors.primary}>
                {t('notes.delete').toUpperCase()}
              </BodyM4SB>
            </FlexWrapper>
          </Touchable>
        )}
      </Container>
    </Header.Container>
  )
}
