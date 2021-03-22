const TradehubEndpoints = {
  // generic apis
  'markets/list': '/get_markets',
  'account/detail': '/get_account',
  'blocks/list': '/get_blocks',
  'tokens/list': '/get_tokens',
  'misc/block_time': '/get_block_time',
  'misc/insurance_balance': '/get_insurance_balance',

  // staking
  'staking/pool': '/staking/pool',

  // validators
  'validators/list': '/get_all_validators',
  'validators/delegations': '/staking/validators/:validator/delegations',

  // delegators
  'delegators/delegations': '/staking/delegators/:delegator/delegations',
  'delegators/rewards': '/distribution/delegators/:delegator/rewards'
} as const

export default TradehubEndpoints;
