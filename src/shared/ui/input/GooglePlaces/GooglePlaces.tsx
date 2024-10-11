import React, { useEffect, useRef, useState } from 'react'

import { API_KEY } from '@env'

import i18next from 'i18next'
import {
  GooglePlaceData,
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
  GooglePlaceDetail,
} from 'react-native-google-places-autocomplete'

import { Icon } from '../../Icon'

import { EColors } from '../../styled'

import { BodyM5B } from '../../styled/Text'

import * as S from './styles'

import { TGooglePlacesProps } from './types'

export const GooglePlaces = ({
  onChange,
  value,
  setSelectedCountry,
  selectedCountry,
  styles,
  disableCities = false,
  placeholder = '',
  error,
  autoFocus = false,
  setAllAddress = false,
}: TGooglePlacesProps) => {
  const ref = useRef<GooglePlacesAutocompleteRef | null>(null)
  const [inputText, setInputText] = useState<string>('')

  useEffect(() => {
    ref.current?.setAddressText(value ?? '')
  }, [value])

  const onPress = (data: GooglePlaceData, detail: GooglePlaceDetail | null) => {
    const location = setAllAddress
      ? detail?.formatted_address || ''
      : data.structured_formatting.main_text

    ref.current?.setAddressText(location)

    setSelectedCountry &&
      setSelectedCountry(
        setAllAddress
          ? detail?.formatted_address || ''
          : detail?.address_components[0].short_name,
      )
    onChange?.(location)
  }

  const onPressClear = () => {
    onChange?.('')
    setInputText('')
    ref.current?.setAddressText('')
  }

  return (
    <>
      <GooglePlacesAutocomplete
        ref={ref}
        debounce={300}
        minLength={2}
        fetchDetails
        onPress={onPress}
        placeholder={placeholder}
        keyboardShouldPersistTaps="always"
        textInputProps={{
          defaultValue: value,
          clearButtonMode: 'never',
          autoFocus: autoFocus,
          onChangeText: setInputText,
          value: inputText,
          selectionColor: EColors.dark_grey_300,
        }}
        onFail={e => console.log(e)}
        query={{
          key: API_KEY,
          language: i18next.language,
          ...(!disableCities && {
            types: selectedCountry ? '(cities)' : 'country',
          }),

          ...(!disableCities && {
            components: selectedCountry ? `country:${selectedCountry}` : '',
          }),
        }}
        enablePoweredByContainer={false}
        styles={{ ...S.autocompleteStyles, ...styles }}
        renderRightButton={() => (
          <>
            {!!inputText && (
              <S.RightButtonContainer onPress={onPressClear}>
                <S.RightButton>
                  <Icon name="Close" fill={EColors.grey_1000} size={16} />
                </S.RightButton>
              </S.RightButtonContainer>
            )}
          </>
        )}
      />
      {!!error && (
        <BodyM5B color={EColors.primary} mTop={'5px'} mLeft={'8px'}>
          {error}
        </BodyM5B>
      )}
    </>
  )
}
