import { ESortTypes } from '@/screens/Notes/Main/config'

export const sortBy = {
  [ESortTypes.date_edited]: {
    sortBy: 'updatedAt',
    order: 1,
  },
  [ESortTypes.date_created]: {
    sortBy: 'createdAt',
    order: 1,
  },
  [ESortTypes.title]: {
    sortBy: 'text',
    order: 1,
  },
}
