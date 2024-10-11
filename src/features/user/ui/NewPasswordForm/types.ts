export type TNewPasswordForm = {
  newPassword: string
  confirmPassword: string
}

export type TNewPasswordFormProps = {
  onSubmit: (val: TNewPasswordForm) => void
}
