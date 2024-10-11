import React from 'react'

import { FlatList } from 'react-native-gesture-handler'

import { Icon } from '../Icon'
import { EColors } from '../styled'
import { Divider } from '../styled/Styled'
import { BodyM3SB, BodyM5B } from '../styled/Text'

import {
  Group,
  GroupIconWrapper,
  SelectGroupButton,
  SelectGroupContainer,
  SelectGroupWrapper,
  styles,
} from './styles'
import { TSelectGroupProps } from './types'

export const SelectGroup = ({
  title = '',
  onTitlePress = () => {},
  onAddPress = () => {},
  onChange = () => {},
  onClose = () => {},
  open = false,
  addText = '',
  data = [],
  value = '',
  error,
}: TSelectGroupProps) => {
  // render

  const _onPressItem = (id: string) => {
    onChange(id)
    onClose()
  }
  return (
    <SelectGroupWrapper>
      <SelectGroupButton onPress={onTitlePress}>
        <BodyM3SB>
          {!!value ? data.find(item => item._id === value)?.name || '' : title}
        </BodyM3SB>
        <GroupIconWrapper open={open}>
          <Icon fill={EColors.translation} name="ChevronDown" size={14} />
        </GroupIconWrapper>
      </SelectGroupButton>

      {!!error && (
        <BodyM5B
          mTop={'5px'}
          mLeft={'8px'}
          mBottom={'10px'}
          color={EColors.primary}>
          {error}
        </BodyM5B>
      )}
      {open && (
        <SelectGroupContainer>
          <FlatList
            bounces={false}
            data={data}
            contentContainerStyle={styles.select_group_list}
            ItemSeparatorComponent={() => <Divider />}
            ListFooterComponent={() => (
              <>
                <Divider />
                <Group onPress={onAddPress}>
                  <BodyM3SB>{addText}</BodyM3SB>
                </Group>
              </>
            )}
            renderItem={({ item }) => (
              <Group onPress={() => _onPressItem(item._id)}>
                <BodyM3SB>{item.name}</BodyM3SB>
              </Group>
            )}
          />
        </SelectGroupContainer>
      )}
    </SelectGroupWrapper>
  )
}
