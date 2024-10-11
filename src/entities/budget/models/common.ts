export type TBudget = {
  _id: string
  owner: string
  name: string
  estimatedCost: number
  finalCost: number
  note: string
  group: string
  status: EBudgetStatus
}

export enum EBudgetStatus {
  paid = 'paid',
  unpaid = 'unpaid',
}

export type TBudgetGroup = { _id: string; owner: string; name: string }

export type TBudgetGrouped = {
  _id: string
  budget: TBudget[]
  estimatedCost: number
  finalCost: number
  group: TBudgetGroup
}
