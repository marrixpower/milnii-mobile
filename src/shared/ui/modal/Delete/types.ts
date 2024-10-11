export type TDeleteModalProps = {
  modalVisible: boolean
  setModalVisible: (value: boolean) => void
  title?: string
  description?: string
  onDelete?: () => void
}
