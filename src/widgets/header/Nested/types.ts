export type TNestedProps = {
  title: string
  withGoBack?: boolean
  rightIcon?: 'Plus' | 'Heart' | 'Trash'
  onRightIconPress?: () => void
  onExtraRightIconPress?: () => void
  extraRightIcon?: 'Plus' | 'Heart'
}
