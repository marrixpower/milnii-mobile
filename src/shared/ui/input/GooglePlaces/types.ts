import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native'

export type TGooglePlacesProps = {
  value?: string
  onChange?: (value: string) => void
  setSelectedCountry?: (value: string | undefined) => void
  selectedCountry?: string | undefined
  placeholder?: string
  disableCities?: boolean
  error?: string
  autoFocus?: boolean
  setAllAddress?: boolean
  styles?: Partial<{
    container: StyleProp<ViewStyle>
    description: StyleProp<TextStyle>
    textInputContainer: StyleProp<ViewStyle>
    textInput: StyleProp<TextStyle>
    loader: StyleProp<ViewStyle>
    listView: StyleProp<ViewStyle>
    predefinedPlacesDescription: StyleProp<TextStyle>
    poweredContainer: StyleProp<ViewStyle>
    powered: StyleProp<ImageStyle>
    separator: StyleProp<ViewStyle>
    row: StyleProp<ViewStyle>
  }>
}
