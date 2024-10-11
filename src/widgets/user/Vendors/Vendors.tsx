import { Button } from '@/shared/ui/button'
import { EColors } from '@/shared/ui/styled'
import { FlexWrapper } from '@/shared/ui/styled/Styled'
import { BodyM1SB, BodyM2B, BodyM5SB } from '@/shared/ui/styled/Text'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList } from 'react-native'
import { Separator, styles } from './styles'

import { PaddingContainer } from '@/screens/Home/Main/styles'
import { useNavigation } from '@/shared/hooks'
import { EStacks } from '@/app/navigation'

export const Vendors = () => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const data = ['Venue', 'Catering', 'Photography', 'Music', 'Entertainment']
  const onButtonPress = () => {
    navigate(EStacks.Vendors)
  }
  return (
    <>
      <BodyM1SB mLeft="44px" mBottom="18px" mTop="23px">
        {t('home.vendors.title')}
      </BodyM1SB>

      <FlatList
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator />}
        horizontal
        data={data}
        renderItem={({ item }) => (
          <FlexWrapper width="auto" flexDirection="column">
            <Button.Plus size={85} />
            <BodyM5SB mTop="7px">{item}</BodyM5SB>
          </FlexWrapper>
        )}
      />

      <PaddingContainer>
        <Button.Standard onPress={onButtonPress} mTop="28px">
          <BodyM2B color={EColors.white}>
            {t('home.vendors.button').toUpperCase()}
          </BodyM2B>
        </Button.Standard>
      </PaddingContainer>
    </>
  )
}
