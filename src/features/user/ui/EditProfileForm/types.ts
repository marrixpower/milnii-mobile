export type TEditProfileForm = {
  weddingDate: string
  name: string
  partner: string
  country: string
  city: string
  email: string
  phone: string
}

export type TEditProfileFormProps = {
  onSubmit: (val: TEditProfileForm) => void
}
