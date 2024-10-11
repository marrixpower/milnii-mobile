import { ERoles } from '@/entities/user/models/common'

export type TCreateAccountForm = {
  fullName: string
  email: string
  password: string
  role: { key: ERoles; title: string } | null
  weddingDate: string
  country: string
  city: string
  terms: boolean | null
  promotion: boolean
}

export type TCreateAccountFormProps = {
  onSubmit: (data: TCreateAccountForm) => void
}
