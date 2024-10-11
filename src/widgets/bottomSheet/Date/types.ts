import { DatePickerProps } from 'react-native-date-picker'

export type TDatePickerProps = {
  dateValue?: string
  setDate?: (value: string) => void
  pickerProps?: Partial<DatePickerProps>
  maximumDate?: Date
  minimumDate?: Date
  locale?: string
  mode?: 'date' | 'time'
  title?: string
}
