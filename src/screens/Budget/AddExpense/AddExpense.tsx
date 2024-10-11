import React, { useContext } from 'react'

import { useRoute } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { LoaderContext } from '@/app/contexts/Loader'

import { EScreens } from '@/app/navigation'

import { TScreenQueryProps } from '@/app/navigation/types'

import { Header } from '@/widgets/header'

import { BudgetFeatures } from '@/features/budget'

import { BudgetService } from '@/entities/budget/services'

import { useNavigation } from '@/shared/hooks'
import { Background } from '@/shared/ui/background'
import { Modal } from '@/shared/ui/modal'
import { BodyM1SB } from '@/shared/ui/styled/Text'

export const AddExpense = () => {
  const { t } = useTranslation()
  const { goBack } = useNavigation()
  const { setLoading } = useContext(LoaderContext)
  const params = useRoute<TScreenQueryProps<EScreens.GuestsAddGuest>>().params

  const [modalVisible, setModalVisible] = React.useState(false)

  const onDelete = async () => {
    try {
      if (!params.id) return
      setLoading(true)

      await BudgetService.deleteBudget({ id: params.id })

      goBack()
    } catch (error) {
      console.log('onDelete error =>', error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <Header.Nested
        title={t('home.links.budget')}
        rightIcon={!!params?.id ? 'Trash' : undefined}
        onRightIconPress={() => setModalVisible(true)}
      />
      <Background.Scroll style={{ paddingTop: 38 }}>
        <BodyM1SB mLeft="23px">{t('budget.new_expense_alt')}</BodyM1SB>
        <BudgetFeatures.AddExpenseForm />
      </Background.Scroll>

      <Modal.Delete
        {...{ onDelete, modalVisible, setModalVisible }}
        title={t('budget.delete_title')}
        description={t('budget.delete_desc')}
      />
    </>
  )
}
