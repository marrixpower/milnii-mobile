export type TContactForm = {
  name: string
  email: string
  message: string
  terms: boolean
}

export type TContactFormProps = {
  onSubmit: (val: TContactForm) => void
}
