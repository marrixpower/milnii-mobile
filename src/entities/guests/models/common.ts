export type TGuest = {
  _id: string
  owner: string
  persons: {
    name: string
    age: EGuestType
  }[]
  invites: string[]
  group: string
  email: string
  phone: string
  address: string
  postalCode: string
  note: string
  status: EGuestStatus
}

export type TGuestGroups = {
  _id: string
  owner: string
  name: string
}

export type TGuestEvent = {
  _id: string
  owner: string
  name: string
  group: EGuestEventGroup
  maxGuests: number
}

export enum EGuestEventGroup {
  wedding = 'wedding',
  pre_wedding = 'pre-wedding',
}

export type TGuestGroped = {
  _id: string
  count: number
  group: TGuestGroups
  guests: TGuest[]
}
export enum EGuestType {
  adult = 'adult',
  child = 'child',
  baby = 'infant',
}

export enum EGuestStatus {
  pending = 'pending',
  confirmed = 'confirmed',
  declined = 'declined',
}
