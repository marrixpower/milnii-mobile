import React from 'react'

import { useTranslation } from 'react-i18next'

import { Header } from '@/widgets/header'

import { TaskFeature } from '@/features/tasks'

import { Background } from '@/shared/ui/background'
import { BodyM1SB } from '@/shared/ui/styled/Text'

import { styles } from './styled'

export const CreateTask = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header.Nested title={t('home.links.tasks')} />
      <Background.Scroll
        style={styles.main}
        nestedScrollEnabled
        keyboardShouldPersistTaps={'always'}>
        <BodyM1SB mBottom="62px">{t('tasks.new_task')}</BodyM1SB>
        <TaskFeature.CreateTaskForm />
      </Background.Scroll>
    </>
  )
}
