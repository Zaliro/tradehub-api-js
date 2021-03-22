import { CosmosResponse } from "./util";

export interface StakingPool {
  not_bonded_tokens: number,
  bonded_tokens: number
}
export interface GetStakingPoolResponse extends CosmosResponse<StakingPool> { }
