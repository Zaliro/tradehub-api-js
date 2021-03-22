import { TokenAmount } from "@lib/models";
import { CosmosResponse } from "./util";

export interface DelegatorReward {
    validator_address: string
    reward: Array<TokenAmount>
}

export interface DelegatorRewards {
    rewards: Array<DelegatorReward>
    total: Array<TokenAmount>
}

export interface ListDelegatorRewardsResponse extends CosmosResponse<DelegatorRewards> { }
export interface ListDelegatorRewardsOpts {
  delegator: string
}