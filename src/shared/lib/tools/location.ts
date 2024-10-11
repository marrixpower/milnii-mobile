type TAddressComponents = {
  long_name: string
  short_name: string
  types: string[]
}[]

export const getFormattedAddress = (
  address_components?: TAddressComponents,
) => {
  const city = address_components?.find(val =>
    val.types.includes('locality'),
  )?.long_name

  const country = address_components?.find(val =>
    val.types.includes('country'),
  )?.long_name

  if (city && country) {
    return `${city}, ${country}`
  }

  return ''
}
