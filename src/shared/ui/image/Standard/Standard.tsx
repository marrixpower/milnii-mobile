import React, { useEffect, useState } from 'react'

import { FastImageProps } from 'react-native-fast-image'

import { Png } from '@assets/png'

import { imageUrl } from '@/shared/lib/config'

import { StyledImage } from './styled'
import { TImageStandard } from './types'

const DEFAULT_IMAGE = Png.DefaultImage
const StandardComponent = ({
  height = '48px',
  width = '48px',
  pngSource,
  style = {},
  borderRadius = 0,
  resizeMode,
  ...props
}: TImageStandard) => {
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setError(false)
  }, [props.source])

  const validSource: FastImageProps['source'] = props.source
    ? {
        uri:
          props.type && !props.source.includes('/')
            ? imageUrl[props.type] + props.source
            : props.source,
      }
    : { uri: DEFAULT_IMAGE + '' }

  const source = error ? DEFAULT_IMAGE : validSource

  return (
    <StyledImage
      {...props}
      style={style}
      source={(pngSource || source) as FastImageProps['source']}
      onError={() => {
        setError(true)
      }}
      resizeMode={resizeMode}
      w={width}
      h={height}
      r={borderRadius}
      defaultSource={DEFAULT_IMAGE as FastImageProps['defaultSource']}
    />
  )
}

export const Standard = React.memo(StandardComponent)
