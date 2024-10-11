export type TChangePasswordForm = {
  newPassword: string
  confirmPassword: string
}

export type TChangePasswordFormProps = {
  onSubmit: (val: TChangePasswordForm) => void
}
