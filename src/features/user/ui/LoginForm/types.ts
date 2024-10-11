export type TLoginForm = {
  email: string
  password: string
}

export type TLoginFormProps = {
  onSubmit: (data: TLoginForm) => void
}
