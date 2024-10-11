import React, { useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { TouchableOpacity } from 'react-native-gesture-handler'

import { isIos } from '@/shared/lib'

import { Icon } from '../../Icon'
import { EColors, Typography } from '../../styled'

import {
  Container,
  StyledTextInputContainer,
  StyledTextInput,
  InputContainer,
  styles,
  Validator,
} from './styled'
import { TStandard } from './types'

const NEUTRAL_COLOR = EColors.text_grey_100

export const Standard = ({
  label = '',
  width = '100%',
  minimal = false,
  height = isIos ? (minimal ? '38px' : '28px') : '40px',
  value = '',
  style,
  notRequired,
  placeholder,
  error,
  RightIcon,
  LeftIcon,
  leftIconProps,
  rightIconProps,
  onChange,
  onPressRightIcon,
  disabled = false,
  onPress,
  keyboardType = 'default',
  multiline = false,
  inputContainerStyle = {},
  autoFocus = false,
  onSubmitEditing = () => {},
  autoComplete,
  withValidator = false,
  onFocus = () => {},
  onBlur = () => {},
  isTouched = false,
  inputStyle,
  placeholderTextColor = NEUTRAL_COLOR,
  mask,
  maxLength = undefined,
  maxHeight = '110px',
  RightIconComponent,
  onKeyPress,
  ref,
  ...props
}: TStandard) => {
  const [inputValue, setInputValue] = useState<string>(value)

  const { t } = useTranslation()

  const onValueChange = (changeValue: string) => {
    onChange && onChange(changeValue)
    setInputValue(changeValue)
  }

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const renderValidatorContent = () => {
    if (isTouched && error) {
      return <Icon name="Close" fill={EColors.white} size={10} />
    }
    if (error) {
      return <Icon name="Close" size={10} fill={EColors.white} />
    }
    if (isTouched && !error) {
      return <Icon name="Done" size={10} fill={EColors.white} />
    }

    return null
  }

  return (
    <>
      <Container
        minimal={minimal}
        disabled={false}
        style={style}
        width={width}
        {...props}>
        {/* Label */}
        {label && (
          <Typography.BodyM2SB mLeft={'10px'} mBottom={'12px'}>
            {label}
            <Typography.BodyM2SB color={EColors.primary}>
              {!notRequired && '*'}
            </Typography.BodyM2SB>
          </Typography.BodyM2SB>
        )}

        {/* Input container*/}
        <StyledTextInputContainer
          disabled={disabled}
          onPress={onPress}
          height={height}
          activeOpacity={1}
          multiline={multiline}
          style={inputContainerStyle}
          maxHeight={maxHeight}
          hasError={!!error}>
          {/*  Left icon*/}
          {!!LeftIcon && <Icon name={LeftIcon} {...leftIconProps} />}

          <InputContainer minimal={minimal}>
            {/* Input */}

            <StyledTextInput
              ref={ref}
              maxLength={maxLength}
              mask={mask}
              style={inputStyle}
              scrollEnabled={multiline}
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              value={inputValue}
              editable={!disabled}
              hasLeftIcon={!!LeftIcon}
              hasRightIcon={!!RightIcon}
              onChangeText={onValueChange}
              keyboardType={keyboardType}
              multiline={multiline}
              onKeyPress={onKeyPress}
              onSubmitEditing={onSubmitEditing}
              autoFocus={autoFocus}
              autoComplete={autoComplete}
            />
          </InputContainer>

          {/* Right icon */}
          {!!RightIconComponent && RightIconComponent()}
          {!!RightIcon && !RightIconComponent && (
            <TouchableOpacity style={styles.padding} onPress={onPressRightIcon}>
              <Icon fill={NEUTRAL_COLOR} name={RightIcon} {...rightIconProps} />
            </TouchableOpacity>
          )}
          {!!withValidator && (
            <Validator isTouched={isTouched} error={!!error}>
              {renderValidatorContent()}
            </Validator>
          )}
        </StyledTextInputContainer>
      </Container>
      {error && !withValidator && (
        <Typography.BodyM5B
          mTop={'5px'}
          mLeft={'8px'}
          mBottom={'10px'}
          color={EColors.primary}>
          {t(error)}
        </Typography.BodyM5B>
      )}
    </>
  )
}
