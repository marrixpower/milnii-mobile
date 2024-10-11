export type TNotificationForm = {
  email: string
  updates: boolean
  news: boolean
  offers: boolean
}

export type TNotificationFormProps = {
  onSubmit: (val: TNotificationForm) => void
}
