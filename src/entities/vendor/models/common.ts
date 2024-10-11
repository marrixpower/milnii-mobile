import { TFavorite } from '@/entities/favorite/models'

export enum EVendors {
  venue = 'Venue',
  gurdwara = 'Gurdwara',
  catering = 'Catering',
  photography = 'Photography',
  videography = 'Videography',
  bartending_services = 'Bartending Services',
  invitations = 'Invitations',
  music_dj = 'Music & DJs',
  wedding_cake = 'Wedding Cake',
  wedding_wardrobe = 'Wedding Wardrobe & Jewelry',
  event_rentals = 'Event Rentals & Decor',
  entertainment = 'Entertainment',
  transportation = 'Transportation',
  flowers = 'Flowers',
  hair = 'Hair & Makeup Artists',
  menhdis = 'Menhdi Artists',
  favours = 'Wedding Favours',
  maiyan_boards = 'Maiyan Boards',
}

export type TVendor = {
  _id: string
  owner: string
  increment: number
  name: string
  email: string
  address: string
  city: string
  postalCode: string
  phone: string
  category: TVendorCategory
  site: string
  booking: string
  images: string[]
  description: string
  price: number
  favorite: TFavorite[]
  location: {
    type: string
    coordinates: number[]
  }
}

export type TVendorCategory = {
  _id: string
  name: TTranslateText[]
  image: string
}

export type TTranslateText = {
  lang: string
  value: string
  _id: string
}
