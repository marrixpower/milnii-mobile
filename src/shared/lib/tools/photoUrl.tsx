import { imageUrl } from '../config'

export const getPhotoUrl = (photo: string, type: keyof typeof imageUrl) => {
  // console.log('url', `${imageUrl[type]}${photo}`)
  return `${imageUrl[type]}${photo}`
}
