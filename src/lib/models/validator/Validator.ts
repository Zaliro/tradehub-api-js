export interface ValidatorDescription {
  moniker: string,
  identity: string,
  website: string,
  security_contact: string,
  details: string
}

export interface ValidatorCommissionRates {
  rate: number,
  max_rate: number,
  max_change_rate: number
}

export interface ValidatorCommission {
  commission_rates: Array<ValidatorCommissionRates>
}

export interface Validator {
  operatorAddress: string
  consPubKey: string
  jailed: boolean
  status: number,
  tokens: number,
  delegatorShares: number,
  description: ValidatorDescription,
  unbondingHeight: number,
  unbondingCompletionTime: string,
  commission: ValidatorCommission,
  minSelfDelegation: number,
  consAddress: string,
  consAddressByte: string,
  walletAddress: string,
  bondStatus: string
}
