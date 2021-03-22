import { Delegation } from "@lib/models";
import { CosmosResponse } from "./util";

export interface ListDelegatorDelegationsResponse extends CosmosResponse<Delegation[]> { }
export interface ListDelegatorDelegationsOpts {
  delegator: string
}
