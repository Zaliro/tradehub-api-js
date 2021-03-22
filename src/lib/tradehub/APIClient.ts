import { NETWORK } from "@lib/config";
import { Network } from "@lib/types";
import {
  GetAccountOpts,
  GetAccountResponse,
  GetInsuranceBalancesResponse,
  GetStakingPoolResponse,
  ListBlocksResponse,
  ListDelegatorDelegationsOpts,
  ListDelegatorDelegationsResponse,
  ListDelegatorRewardsOpts,
  ListDelegatorRewardsResponse,
  ListTokensResponse,
  ListValidatorDelegationsOpts,
  ListValidatorDelegationsResponse,
  ListValidatorsResponse,
} from "./api";
import APIManager from "./APIConnector";
import TradehubEndpoints from "./rest_endpoints";

export interface APIClientOpts {
  debugMode?: boolean;
}

class APIClient {
  public readonly apiManager: APIManager<typeof TradehubEndpoints>;
  public readonly debugMode: boolean;

  constructor(public readonly network: Network, opts?: APIClientOpts) {
    const restUrl = NETWORK[network].REST_URL;
    this.apiManager = new APIManager(restUrl, TradehubEndpoints);

    this.debugMode = opts?.debugMode ?? false;
  }

  async getAccount(opts: GetAccountOpts): Promise<GetAccountResponse> {
    const queryParams = { account: opts.address };
    const routeParams = {};
    const request = this.apiManager.path(
      "account/detail",
      routeParams,
      queryParams
    );
    const response = await request.get();
    return response.data as GetAccountResponse;
  }

  async getValidators(): Promise<ListValidatorsResponse> {
    const request = this.apiManager.path("validators/list");
    const response = await request.get();
    return response.data as ListValidatorsResponse;
  }

  async getValidatorDelegations(
    opts: ListValidatorDelegationsOpts
  ): Promise<ListValidatorDelegationsResponse> {
    const routeParams = { validator: opts.validator };
    const request = this.apiManager.path("validators/delegations", routeParams);
    const response = await request.get();
    return response.data as ListValidatorDelegationsResponse;
  }

  async getBlocks(): Promise<ListBlocksResponse> {
    const request = this.apiManager.path("blocks/list");
    const response = await request.get();
    return response.data as ListBlocksResponse;
  }

  async getTokens(): Promise<ListTokensResponse> {
    const request = this.apiManager.path("tokens/list");
    const response = await request.get();
    return response.data as ListTokensResponse;
  }

  async getBlockTime(): Promise<string> {
    const request = this.apiManager.path("misc/block_time");
    const response = await request.get();
    return response.data as string;
  }

  async getInsuranceBalance(): Promise<GetInsuranceBalancesResponse> {
    const request = this.apiManager.path("misc/insurance_balance");
    const response = await request.get();
    return response.data as GetInsuranceBalancesResponse;
  }

  async getStakingPool(): Promise<GetStakingPoolResponse> {
    const request = this.apiManager.path("staking/pool");
    const response = await request.get();
    return response.data as GetStakingPoolResponse;
  }

  async getDelegatorDelegations(opts: ListDelegatorDelegationsOpts): Promise<ListDelegatorDelegationsResponse> {
    const routeParams = { delegator: opts.delegator };
    const request = this.apiManager.path("delegators/delegations", routeParams);
    const response = await request.get();
    return response.data as ListDelegatorDelegationsResponse
  }

  async getDelegatorRewards(opts: ListDelegatorRewardsOpts): Promise<ListDelegatorRewardsResponse> {
    const routeParams = { delegator: opts.delegator };
    const request = this.apiManager.path("delegators/rewards", routeParams);
    const response = await request.get();
    return response.data as ListDelegatorRewardsResponse;
  }
}

export default APIClient;
