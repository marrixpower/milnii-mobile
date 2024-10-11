import React, { useEffect, useState } from 'react'

import { Dropdown } from 'react-native-element-dropdown'

import { Icon } from '../../Icon'
import { EColors, Styled } from '../../styled'

import { Container, styles } from './styled'
import { TDropDown } from './types'

export const DropDown = ({
  items = [],
  width = '100%',
  value = '',
  style,
  placeholder = '',
  containerStyle,
  onChange = () => {},
  selectedTextStyle = {},
  ...props
}: TDropDown) => {
  const [focuse, setFocuse] = useState(false)

  const [currValue, setCurrValue] = useState('')

  useEffect(() => {
    value && setCurrValue(value)
  }, [value])

  const renderRightIcon = () => (
    <Styled.FlexWrapper width={'20%'} height={'40px'} style={styles.renderIcon}>
      <Icon name={focuse ? 'AngleArrowTop' : 'AngleArrowBottom'} />
    </Styled.FlexWrapper>
  )

  return (
    <Container width={width} style={containerStyle} {...props}>
      {/* Drop down*/}
      <Dropdown
        {...styles}
        style={[styles.style, style]}
        // iconStyle={[
        //   styles.iconStyle,
        //   disable ? styles.disableIcons : styles.activeIcon,
        // ]}

        autoScroll={false}
        renderRightIcon={renderRightIcon}
        data={items}
        maxHeight={150}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        selectedTextProps={{
          numberOfLines: 1,
          style: [
            {
              width: '80%',

              color: EColors.black,
            },
            selectedTextStyle,
          ],
        }}
        onFocus={() => setFocuse(true)}
        onBlur={() => setFocuse(false)}
        value={currValue}
        dropdownPosition={'bottom'}
        flatListProps={{
          scrollEnabled: true,
        }}
        onChange={item => {
          setCurrValue(item)
          onChange(item.value)
        }}
      />

      {/* {error && (
        <Body2
          mTop={'10px'}
          mLeft={'8px'}
          mBottom={'10px'}
          color={EColors.red_CE3939}>
          {t(error)}
        </Body2>
      )} */}
    </Container>
  )
}
