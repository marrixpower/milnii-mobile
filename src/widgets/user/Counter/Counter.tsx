import React, { useState, useEffect } from 'react'

import { Trans } from 'react-i18next'

import { useTypedSelector } from '@/app/store'

import { UserFeature } from '@/features/user'

import { getUserSelector } from '@/entities/user/store'

import { EColors } from '@/shared/ui/styled'
import { FlexWrapper } from '@/shared/ui/styled/Styled'
import { BodyM3SB, H1, H1R } from '@/shared/ui/styled/Text'

export const Counter = ({ profile = false }) => {
  const { user } = useTypedSelector(getUserSelector)
  const [timeRemaining, setTimeRemaining] = useState(
    '000 days | 00 hrs : 00 min : 00 s',
  )

  const weddingDate = new Date(user?.weddingDate as string)
  const currentDate = new Date()

  const timeDifference = weddingDate.getTime() - currentDate.getTime()
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeDifference < 0) {
        setTimeRemaining('000 days | 00 hrs : 00 min : 00 s')
        return
      }

      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hoursDifference = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minutesDifference = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
      )
      const secondsDifference = Math.floor(
        (timeDifference % (1000 * 60)) / 1000,
      )

      const formattedOutput = `${daysDifference
        .toString()
        .padStart(3, '0')} days | ${hoursDifference
        .toString()
        .padStart(2, '0')} hrs : ${minutesDifference
        .toString()
        .padStart(2, '0')} min : ${secondsDifference
        .toString()
        .padStart(2, '0')} s`

      setTimeRemaining(formattedOutput)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [user])

  return (
    <FlexWrapper justify="flex-start">
      <UserFeature.Avatar />
      <FlexWrapper
        mLeft="18px"
        flexDirection="column"
        align="flex-start"
        width="75%">
        <FlexWrapper width="auto" justify="flex-start">
          {!profile && (
            <H1R>
              <Trans
                i18nKey={'home.hello'}
                components={{ bold: <H1 /> }}
                values={{ name: !!user ? user.name : '' }}
              />
            </H1R>
          )}
          {profile && <H1>{!!user ? user.name : ''}</H1>}
        </FlexWrapper>
        {timeDifference > 0 && (
          <BodyM3SB mTop="5px" color={EColors.text_grey_100}>
            {timeRemaining}
          </BodyM3SB>
        )}
      </FlexWrapper>
    </FlexWrapper>
  )
}
