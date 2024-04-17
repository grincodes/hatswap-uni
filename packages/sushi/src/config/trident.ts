import { ChainId } from '../chain/index.js'

export const TRIDENT_STABLE_POOL_FACTORY_ADDRESS = {
  [ChainId.ARBITRUM]: '0xc2fB256ABa36852DCcEA92181eC6b355f09A0288',
  [ChainId.AVALANCHE]: '0x7770978eED668a3ba661d51a773d3a992Fc9DDCB',
  [ChainId.BSC]: '0xA4C0363edD74F55AC8f316a3Bf447F8aa09607D3',
  [ChainId.BTTC]: '0x120140d0c1EBC938befc84840575EcDc5fE55aFe',
  [ChainId.ETHEREUM]: '0xC040F84Cf7046409f92d578eF9040fE45E6ef4be',
  //Todo degen
   [ChainId.DEGEN]: '0xC040F84Cf7046409f92d578eF9040fE45E6ef4be',
  [ChainId.FANTOM]: '0x97a32B4f8486735075f2cBEcff64208fBF2e610A',
  [ChainId.GNOSIS]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.KAVA]: '0x9B3fF703FA9C8B467F5886d7b61E61ba07a9b51c',
  [ChainId.METIS]: '0x2f686751b19a9d91cc3d57d90150Bc767f050066',
  [ChainId.OPTIMISM]: '0x827179dD56d07A7eeA32e3873493835da2866976',
  [ChainId.POLYGON]: '0x2A0Caa28331bC6a18FF195f06694f90671dE70f2',
} as const

export const TRIDENT_CONSTANT_POOL_FACTORY_ADDRESS = {
  [ChainId.ARBITRUM]: '0xc79Ae87E9f55761c08e346B98dDdf070C9872787',
  [ChainId.AVALANCHE]: '0xb84a043bc4fCA97B7a74eD7dAaB1Bf12A8DF929F',
  [ChainId.BSC]: '0x3D2f8ae0344d38525d2AE96Ab750B83480c0844F',
  [ChainId.BTTC]: '0x752Dc00ABa9c930c84aC81D288dB5E2a02Afe633',
  [ChainId.ETHEREUM]: '0xD75F5369724b513b497101fb15211160c1d96550',
  //TODO0 DEGEN
   [ChainId.DEGEN]: '0xD75F5369724b513b497101fb15211160c1d96550',
  [ChainId.FANTOM]: '0x2c8C987C4777AB740d20Cb581f5d381BE95A4A4a',
  [ChainId.GNOSIS]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
  [ChainId.KAVA]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.METIS]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.OPTIMISM]: '0x93395129bd3fcf49d95730D3C2737c17990fF328',
  [ChainId.POLYGON]: '0x28890e3C0aA9B4b48b1a716f46C9abc9B12abfab',
} as const

export const TRIDENT_ROUTER_ADDRESS = {
  [ChainId.ARBITRUM]: '0xD9988b4B5bBC53A794240496cfA9Bf5b1F8E0523',
  [ChainId.AVALANCHE]: '0xF70c086618dcf2b1A461311275e00D6B722ef914',
  [ChainId.BSC]: '0x97a32B4f8486735075f2cBEcff64208fBF2e610A',
  [ChainId.BTTC]: '0xeae23C766a1B25481025a02B2d82a1DB3FC130Ca',
  [ChainId.ETHEREUM]: '0xDdC1b5920723F774d2Ec2C3c9355251A20819776',
  //TODO DEGEN
   [ChainId.DEGEN]: '0xDdC1b5920723F774d2Ec2C3c9355251A20819776',
  [ChainId.FANTOM]: '0x7cf167390E2526Bc03F3CF6852A7AF1CEC3e243d',
  [ChainId.GNOSIS]: '0xCaAbdD9Cf4b61813D4a52f980d6BC1B713FE66F5',
  [ChainId.KAVA]: '0xbE811A0D44E2553d25d11CB8DC0d3F0D0E6430E6',
  [ChainId.METIS]: '0xaB235da7f52d35fb4551AfBa11BFB56e18774A65',
  [ChainId.OPTIMISM]: '0xE52180815c81D7711B83412e53259bed6a3aB70a',
  [ChainId.POLYGON]: '0x7A250C60Cde7A5Ca7B667209beAB5eA4E16eed67',
} as const

export const TRIDENT_SUPPORTED_CHAIN_IDS = [
  ChainId.ARBITRUM,
  ChainId.AVALANCHE,
  ChainId.BSC,
  ChainId.BTTC,
  // ChainId.ETHEREUM,
  // ChainId.FANTOM,
  // ChainId.GNOSIS,
  ChainId.KAVA,
  ChainId.METIS,
  ChainId.OPTIMISM,
  ChainId.POLYGON,
]

export const TridentChainIds = TRIDENT_SUPPORTED_CHAIN_IDS

export type TridentChainId = (typeof TRIDENT_SUPPORTED_CHAIN_IDS)[number]

export const isTridentChainId = (chainId: ChainId): chainId is TridentChainId =>
  TRIDENT_SUPPORTED_CHAIN_IDS.includes(chainId as TridentChainId)
