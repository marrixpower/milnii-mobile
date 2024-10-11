import React, { useEffect, useState } from 'react'

import { FlatList, StyleSheet, View } from 'react-native'

import { useIsFocused } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { EScreens, EStacks } from '@/app/navigation'

import { ETaskStatus, TTask } from '@/entities/tasks/models'
import { TasksService } from '@/entities/tasks/services'
import { UserEntity } from '@/entities/user'

import { useNavigation } from '@/shared/hooks'
import { Button } from '@/shared/ui/button'
import { EColors } from '@/shared/ui/styled'
import { BodyM1SB, BodyM2B } from '@/shared/ui/styled/Text'

export const Tasks = () => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const isFocused = useIsFocused()

  const [tasks, setTasks] = useState<TTask[]>([])

  const getTask = async () => {
    TasksService.getTasks({
      limit: 3,
      status: [ETaskStatus.not_done],
    }).then(data => setTasks(data.data.docs))
  }
  useEffect(() => {
    isFocused && getTask()
  }, [isFocused])

  const onButtonPress = () => {
    navigate(EStacks.Tasks)
  }

  const onPressTsk = (task: TTask) => {
    navigate(EScreens.HomeTask, { task })
  }
  return (
    <>
      <BodyM1SB mBottom="18px" mTop="23px">
        {t('home.tasks.title')}
      </BodyM1SB>
      <FlatList
        data={tasks}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <UserEntity.Task
            item={item}
            onRefresh={getTask}
            onPress={() => onPressTsk(item)}
          />
        )}
      />
      <Button.Standard onPress={onButtonPress} mTop="12px">
        <BodyM2B color={EColors.white}>
          {t('home.tasks.button').toUpperCase()}
        </BodyM2B>
      </Button.Standard>
    </>
  )
}

const styles = StyleSheet.create({
  separator: {
    height: 12,
  },
})
