import React from 'react'

import { useTranslation } from 'react-i18next'

import { EScreens } from '@/app/navigation'

import { useTypedSelector } from '@/app/store'

import { Header } from '@/widgets/header'

import { TaskFeature } from '@/features/tasks'

import { getTaskSelector } from '@/entities/tasks/store'

import { useNavigation } from '@/shared/hooks'
import { Background } from '@/shared/ui/background'
import { Progress } from '@/shared/ui/Progress'

import { PaddingContainer, styles } from './styles'

export const Main = () => {
  const { t } = useTranslation()
  const { totalCount, doneCount } = useTypedSelector(getTaskSelector)

  const { navigate } = useNavigation()
  const onCreateTask = () => {
    navigate(EScreens.TasksCreateTask)
  }

  return (
    <>
      <Header.Nested
        withGoBack={false}
        title={t('home.links.tasks')}
        rightIcon="Plus"
        onRightIconPress={onCreateTask}
      />
      <Background.Standard isList style={styles.background}>
        <PaddingContainer>
          <Progress
            title={t('tasks.completed')}
            filled={doneCount}
            total={totalCount}
          />
        </PaddingContainer>

        <TaskFeature.MainList />
      </Background.Standard>
    </>
  )
}
