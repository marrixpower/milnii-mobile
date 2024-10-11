import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { EColors } from '@/shared/ui/styled'
import { FlexWrapper } from '@/shared/ui/styled/Styled'
import { BodyM1SB } from '@/shared/ui/styled/Text'

import { ETaskStatus } from '../../models'

import { TasksService } from '../../services'

import { tasksActions } from '../../store'

import { Container } from './styles'
import { TListItemProps } from './types'

export const ListItem = ({
  onPress = () => {},
  onRefresh = () => {},
  name = '',
  status,
  _id,
}: TListItemProps) => {
  const dispatch = useDispatch()
  const [localStatus, setLocalStatus] = React.useState<ETaskStatus>(
    ETaskStatus.not_done,
  )
  const isDone = localStatus === ETaskStatus.done

  useEffect(() => {
    if (status) setLocalStatus(status)
  }, [status])

  const onPressCheckbox = () => {
    if (!_id) return

    const newStatus = !isDone ? ETaskStatus.done : ETaskStatus.not_done

    TasksService.patchTask({
      id: _id,
      status: newStatus,
    }).then(() => {
      onRefresh()
      setLocalStatus(newStatus)
      dispatch(tasksActions.getDoneStatusRequest())
    })
  }

  return (
    <Container onPress={onPress}>
      <Checkbox
        active={isDone}
        size={23}
        type="circle"
        onPress={onPressCheckbox}
      />
      <FlexWrapper
        width="auto"
        mLeft="12px"
        flexDirection="column"
        justify="flex-start"
        align="flex-start">
        <BodyM1SB
          color={isDone ? EColors.grey_700 : EColors.black}
          crossed={isDone}>
          {name}
        </BodyM1SB>
      </FlexWrapper>
    </Container>
  )
}
