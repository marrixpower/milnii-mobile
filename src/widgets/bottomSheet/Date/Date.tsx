import React, { forwardRef } from 'react'

import { parseISO } from 'date-fns'
import DPicker from 'react-native-date-picker'

import { ELanguages, i18n } from '@/app/i18n'

import { BottomSheet } from '@/shared/ui/bottomSheet'
import { TBottomSheetModalRef } from '@/shared/ui/bottomSheet/Modal'

import { Container, styles } from './styles'
import { TDatePickerProps } from './types'
import { H3 } from '@/shared/ui/styled/Text'

export const DateBS = forwardRef<TBottomSheetModalRef, TDatePickerProps>(
  (
    {
      dateValue = new Date().toISOString(),
      setDate = () => {},
      pickerProps,
      maximumDate,
      minimumDate,
      mode = 'date',
      locale,
      title,
    },
    ref,
  ) => {
    return (
      <BottomSheet.Modal
        enableDynamicSizing
        withScroll
        snapPoints={[]}
        scrollEnabled={false}
        ref={ref}>
        <Container>
          {!!title && (
            <H3 mBottom="6px" style={styles.title}>
              {title}
            </H3>
          )}

          {/* Date picker */}
          <DPicker
            style={styles.datePicker}
            date={dateValue ? parseISO(dateValue) : new Date()}
            locale={locale || (i18n.language as ELanguages)}
            onDateChange={date => setDate(date.toISOString())}
            // androidVariant="iosClone"
            mode={mode}
            theme={'light'}
            maximumDate={maximumDate}
            minimumDate={minimumDate}
            {...pickerProps}
          />
        </Container>
      </BottomSheet.Modal>
    )
  },
)
