export type TUser = {
  firebaseId: string
  increment: number
  name: string
  email: string
  country: string
  city: string
  category: string
  type: string
  weddingDate: string
  role: ERoles
  _id: string
  image: string | null
  phone: string | null
  partner: string | null
}

export enum ERoles {
  planning = 'wedding',
  browsing = 'browsing',
}
