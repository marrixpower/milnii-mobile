import React, { useContext, useRef, useState } from 'react'

import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native'

import { useRoute } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { LoaderContext } from '@/app/contexts/Loader'

import { EScreens } from '@/app/navigation'
import { TScreenQueryProps } from '@/app/navigation/types'

import { Header } from '@/widgets/header'

import { NoteService } from '@/entities/note/services'

import { useNavigation } from '@/shared/hooks'
import { Background } from '@/shared/ui/background'
import { BottomBar } from '@/shared/ui/BottomBar'
import { Button } from '@/shared/ui/button'

import { formattingText } from './hepler'
import { styles } from './styles'

export const Note = () => {
  const { t } = useTranslation()
  const { setLoading } = useContext(LoaderContext)

  const secondInputRef = useRef<TextInput>(null)

  const param = useRoute<TScreenQueryProps<EScreens.NotesNote>>().params
  const [text, setText] = useState(formattingText(param?.text).part1)
  const [desc, setDesc] = useState(formattingText(param?.text).part2)

  const { goBack } = useNavigation()

  const onCreate = async () => {
    if (!text) return
    try {
      setLoading(true)

      if (param.id) {
        await NoteService.patchNote({
          id: param.id,
          text: text + '\n' + desc,
        })
      } else {
        await NoteService.postNote({
          text: text + '\n' + desc,
        })
      }

      goBack()
    } catch (error) {
      console.log('NoteOnCreate error =>', error)
    } finally {
      setLoading(false)
    }
  }

  const onKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (event.nativeEvent.key === 'Enter') {
      secondInputRef.current?.focus()
    }
  }

  const onChangeText = (eventText: string) => {
    const sanitizedText = eventText.replace(/\n/g, '')

    setText(sanitizedText)
  }

  return (
    <>
      <Header.Notes />
      <Background.Scroll style={styles.background}>
        <TextInput
          placeholder={t('notes.note_text')}
          value={text}
          onChangeText={onChangeText}
          multiline
          style={styles.title_input}
          onKeyPress={onKeyPress}
        />

        <TextInput
          ref={secondInputRef}
          multiline
          value={desc}
          style={styles.desc_input}
          onChangeText={setDesc}
        />
      </Background.Scroll>
      <BottomBar pHorizontal={34}>
        <Button.Standard
          disabled={!text}
          onPress={onCreate}
          text={t('button.save')}
        />
      </BottomBar>
    </>
  )
}
