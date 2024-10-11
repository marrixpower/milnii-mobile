import React from 'react'

import { useDispatch } from 'react-redux'

import { ETaskStatus, TTask } from '@/entities/tasks/models'

import { TasksService } from '@/entities/tasks/services'

import { tasksActions } from '@/entities/tasks/store'

import { Button } from '@/shared/ui/button'
import { FlexWrapper } from '@/shared/ui/styled/Styled'

import { BodyM2SB } from '@/shared/ui/styled/Text'

import { Container } from './styles'

export const Task = ({
  item,
  onPress = () => {},
  onRefresh = () => {},
}: {
  item: TTask
  onPress?: () => void
  onRefresh?: () => void
}) => {
  const dispatch = useDispatch()
  const onPressCheckbox = () => {
    if (!item._id) return

    if (item.status !== ETaskStatus.done) {
      TasksService.patchTask({
        id: item._id,
        status: ETaskStatus.done,
      }).then(() => {
        dispatch(tasksActions.getDoneStatusRequest())

        onRefresh()
      })
    }
  }
  // render
  return (
    <Container onPress={onPress}>
      <Button.Radio active={false} onPress={onPressCheckbox} />
      <FlexWrapper
        mLeft="13px "
        width="auto"
        flexDirection="column"
        align="flex-start">
        <BodyM2SB>{item.name}</BodyM2SB>
      </FlexWrapper>
    </Container>
  )
}
