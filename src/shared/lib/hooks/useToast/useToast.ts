import { useTranslation } from 'react-i18next'
import Toast from 'react-native-toast-message'

export type TCallToast = {
  type: 'success' | 'error'

  info?: boolean
  message: string
}

export const useToast = () => {
  const { t } = useTranslation()

  const callToast = ({ type, info, message }: TCallToast) => {
    if (!!info) {
      Toast.show({
        type: 'info',
        text2: message,
      })
      return
    }

    Toast.show({
      type,
      text1: type === 'success' ? (t('success') as string) : t('error'),
      text2: message,
    })
  }

  return { callToast }
}
