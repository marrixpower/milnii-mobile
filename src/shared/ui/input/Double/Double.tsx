import React from 'react'

import { useTranslation } from 'react-i18next'

import { Input } from '..'

import { EColors } from '../../styled'

import { DoubleInputWrapper, styles } from './styles'

import { TDoubleInputsProps } from './types'

export const Double = ({
  nameValue = '',
  onChangeName = () => {},
}: // locationValue = '',
// onChangeLocation = () => {},
TDoubleInputsProps) => {
  const { t } = useTranslation()
  return (
    <DoubleInputWrapper>
      <Input.Standard
        value={nameValue}
        placeholder={t('vendors.search_by_name')}
        style={styles.input}
        onChange={onChangeName}
        placeholderTextColor={EColors.text_grey_100}
        inputContainerStyle={styles.input_container}
      />
      {/* <Input.Standard
        value={locationValue}
        onChange={onChangeLocation}
        placeholderTextColor={EColors.text_grey_100}
        placeholder={t('vendors.location')}
        style={styles.input}
        width="40%"
        inputContainerStyle={styles.input_container_second}
      /> */}
    </DoubleInputWrapper>
  )
}
