import React, { forwardRef } from 'react'

import { useTranslation } from 'react-i18next'

import { useModalRef } from '@/shared/lib/hooks/useModalRef'
import { BottomSheet } from '@/shared/ui/bottomSheet'
import { TBottomSheetModalRef } from '@/shared/ui/bottomSheet/Modal'
import { Input } from '@/shared/ui/input'

import { BodyM1SB } from '@/shared/ui/styled/Text'

import * as S from './styles'
import { TLocationProps } from './types'

export const Location = forwardRef<TBottomSheetModalRef, TLocationProps>(
  ({ value, onChange, setSelectedCountry, selectedCountry }, ref) => {
    const { t } = useTranslation()

    const bottomSheetRef = useModalRef(ref)

    const onSelect = (val: string) => {
      onChange?.(val)

      !!val && bottomSheetRef.current?.close()
    }

    return (
      <BottomSheet.Modal ref={bottomSheetRef} snapPoints={['85%']}>
        <S.Container>
          <BodyM1SB mBottom="16px">
            {selectedCountry
              ? t('auth.create_account.select_city')
              : t('auth.create_account.select_country')}
          </BodyM1SB>

          <Input.GooglePlaces
            autoFocus
            value={value}
            onChange={onSelect}
            setSelectedCountry={setSelectedCountry}
            selectedCountry={selectedCountry}
          />
        </S.Container>
      </BottomSheet.Modal>
    )
  },
)
