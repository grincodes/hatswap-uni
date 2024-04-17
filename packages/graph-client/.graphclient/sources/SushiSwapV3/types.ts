// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace SushiSwapV3Types {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  SUSHISWAP_V3_BigDecimal: any;
  BigInt: any;
  SUSHISWAP_V3_Bytes: any;
  SUSHISWAP_V3_Int8: any;
  Timestamp: any;
};

export type SUSHISWAP_V3_Aggregation_interval =
  | 'hour'
  | 'day';

export type SUSHISWAP_V3_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type SUSHISWAP_V3_Block_height = {
  hash?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type SUSHISWAP_V3_Bundle = {
  id: Scalars['ID'];
  ethPriceUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
};

export type SUSHISWAP_V3_Bundle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ethPriceUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  ethPriceUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  ethPriceUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  ethPriceUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  ethPriceUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  ethPriceUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  ethPriceUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  ethPriceUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Bundle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Bundle_filter>>>;
};

export type SUSHISWAP_V3_Bundle_orderBy =
  | 'id'
  | 'ethPriceUSD';

export type SUSHISWAP_V3_Burn = {
  id: Scalars['ID'];
  transaction: SUSHISWAP_V3_Transaction;
  pool: SUSHISWAP_V3_Pool;
  token0: SUSHISWAP_V3_Token;
  token1: SUSHISWAP_V3_Token;
  timestamp: Scalars['BigInt'];
  owner?: Maybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin: Scalars['SUSHISWAP_V3_Bytes'];
  amount: Scalars['BigInt'];
  amount0: Scalars['SUSHISWAP_V3_BigDecimal'];
  amount1: Scalars['SUSHISWAP_V3_BigDecimal'];
  amountUSD?: Maybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tickLower: Scalars['BigInt'];
  tickUpper: Scalars['BigInt'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type SUSHISWAP_V3_Burn_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<SUSHISWAP_V3_Transaction_filter>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<SUSHISWAP_V3_Pool_filter>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<SUSHISWAP_V3_Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<SUSHISWAP_V3_Token_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_not?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_gt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_lt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_gte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_lte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_not?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_gt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_lt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_gte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_lte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  origin_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  origin_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  tickLower?: InputMaybe<Scalars['BigInt']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Burn_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Burn_filter>>>;
};

export type SUSHISWAP_V3_Burn_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'timestamp'
  | 'owner'
  | 'origin'
  | 'amount'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'tickLower'
  | 'tickUpper'
  | 'logIndex';

export type SUSHISWAP_V3_Collect = {
  id: Scalars['ID'];
  transaction: SUSHISWAP_V3_Transaction;
  timestamp: Scalars['BigInt'];
  pool: SUSHISWAP_V3_Pool;
  owner?: Maybe<Scalars['SUSHISWAP_V3_Bytes']>;
  amount0: Scalars['SUSHISWAP_V3_BigDecimal'];
  amount1: Scalars['SUSHISWAP_V3_BigDecimal'];
  amountUSD?: Maybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tickLower: Scalars['BigInt'];
  tickUpper: Scalars['BigInt'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type SUSHISWAP_V3_Collect_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<SUSHISWAP_V3_Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<SUSHISWAP_V3_Pool_filter>;
  owner?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_not?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_gt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_lt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_gte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_lte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  amount0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  tickLower?: InputMaybe<Scalars['BigInt']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Collect_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Collect_filter>>>;
};

export type SUSHISWAP_V3_Collect_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'timestamp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'owner'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'tickLower'
  | 'tickUpper'
  | 'logIndex';

export type SUSHISWAP_V3_Factory = {
  id: Scalars['ID'];
  poolCount: Scalars['BigInt'];
  txCount: Scalars['BigInt'];
  totalVolumeUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalVolumeETH: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalFeesUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalFeesETH: Scalars['SUSHISWAP_V3_BigDecimal'];
  untrackedVolumeUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalValueLockedUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalValueLockedETH: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalValueLockedUSDUntracked: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalValueLockedETHUntracked: Scalars['SUSHISWAP_V3_BigDecimal'];
  owner: Scalars['ID'];
};

export type SUSHISWAP_V3_Factory_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  poolCount?: InputMaybe<Scalars['BigInt']>;
  poolCount_not?: InputMaybe<Scalars['BigInt']>;
  poolCount_gt?: InputMaybe<Scalars['BigInt']>;
  poolCount_lt?: InputMaybe<Scalars['BigInt']>;
  poolCount_gte?: InputMaybe<Scalars['BigInt']>;
  poolCount_lte?: InputMaybe<Scalars['BigInt']>;
  poolCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolumeUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalVolumeETH?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalVolumeETH_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalVolumeETH_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalVolumeETH_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalVolumeETH_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalVolumeETH_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalVolumeETH_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalVolumeETH_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalFeesUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalFeesUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalFeesUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalFeesUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalFeesUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalFeesUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalFeesUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalFeesUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalFeesETH?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalFeesETH_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalFeesETH_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalFeesETH_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalFeesETH_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalFeesETH_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalFeesETH_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalFeesETH_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedETH?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETH_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETH_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETH_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETH_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETH_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETH_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedETH_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedETHUntracked?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETHUntracked_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETHUntracked_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETHUntracked_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETHUntracked_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETHUntracked_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETHUntracked_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedETHUntracked_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  owner?: InputMaybe<Scalars['ID']>;
  owner_not?: InputMaybe<Scalars['ID']>;
  owner_gt?: InputMaybe<Scalars['ID']>;
  owner_lt?: InputMaybe<Scalars['ID']>;
  owner_gte?: InputMaybe<Scalars['ID']>;
  owner_lte?: InputMaybe<Scalars['ID']>;
  owner_in?: InputMaybe<Array<Scalars['ID']>>;
  owner_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Factory_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Factory_filter>>>;
};

export type SUSHISWAP_V3_Factory_orderBy =
  | 'id'
  | 'poolCount'
  | 'txCount'
  | 'totalVolumeUSD'
  | 'totalVolumeETH'
  | 'totalFeesUSD'
  | 'totalFeesETH'
  | 'untrackedVolumeUSD'
  | 'totalValueLockedUSD'
  | 'totalValueLockedETH'
  | 'totalValueLockedUSDUntracked'
  | 'totalValueLockedETHUntracked'
  | 'owner';

export type SUSHISWAP_V3_Flash = {
  id: Scalars['ID'];
  transaction: SUSHISWAP_V3_Transaction;
  timestamp: Scalars['BigInt'];
  pool: SUSHISWAP_V3_Pool;
  sender: Scalars['SUSHISWAP_V3_Bytes'];
  recipient: Scalars['SUSHISWAP_V3_Bytes'];
  amount0: Scalars['SUSHISWAP_V3_BigDecimal'];
  amount1: Scalars['SUSHISWAP_V3_BigDecimal'];
  amountUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  amount0Paid: Scalars['SUSHISWAP_V3_BigDecimal'];
  amount1Paid: Scalars['SUSHISWAP_V3_BigDecimal'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type SUSHISWAP_V3_Flash_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<SUSHISWAP_V3_Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<SUSHISWAP_V3_Pool_filter>;
  sender?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_not?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_gt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_lt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_gte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_lte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  sender_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  recipient?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  recipient_not?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  recipient_gt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  recipient_lt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  recipient_gte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  recipient_lte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  amount0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount0Paid?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0Paid_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0Paid_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0Paid_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0Paid_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0Paid_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0Paid_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount0Paid_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount1Paid?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1Paid_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1Paid_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1Paid_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1Paid_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1Paid_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1Paid_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount1Paid_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Flash_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Flash_filter>>>;
};

export type SUSHISWAP_V3_Flash_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'timestamp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'sender'
  | 'recipient'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'amount0Paid'
  | 'amount1Paid'
  | 'logIndex';

export type SUSHISWAP_V3_Mint = {
  id: Scalars['ID'];
  transaction: SUSHISWAP_V3_Transaction;
  timestamp: Scalars['BigInt'];
  pool: SUSHISWAP_V3_Pool;
  token0: SUSHISWAP_V3_Token;
  token1: SUSHISWAP_V3_Token;
  owner: Scalars['SUSHISWAP_V3_Bytes'];
  sender?: Maybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin: Scalars['SUSHISWAP_V3_Bytes'];
  amount: Scalars['BigInt'];
  amount0: Scalars['SUSHISWAP_V3_BigDecimal'];
  amount1: Scalars['SUSHISWAP_V3_BigDecimal'];
  amountUSD?: Maybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tickLower: Scalars['BigInt'];
  tickUpper: Scalars['BigInt'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type SUSHISWAP_V3_Mint_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<SUSHISWAP_V3_Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<SUSHISWAP_V3_Pool_filter>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<SUSHISWAP_V3_Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<SUSHISWAP_V3_Token_filter>;
  owner?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_not?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_gt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_lt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_gte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_lte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_not?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_gt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_lt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_gte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_lte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  sender_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_not?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_gt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_lt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_gte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_lte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  origin_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  origin_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  tickLower?: InputMaybe<Scalars['BigInt']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Mint_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Mint_filter>>>;
};

export type SUSHISWAP_V3_Mint_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'timestamp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'owner'
  | 'sender'
  | 'origin'
  | 'amount'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'tickLower'
  | 'tickUpper'
  | 'logIndex';

/** Defines the order direction, either ascending or descending */
export type SUSHISWAP_V3_OrderDirection =
  | 'asc'
  | 'desc';

export type SUSHISWAP_V3_Pool = {
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  token0: SUSHISWAP_V3_Token;
  token1: SUSHISWAP_V3_Token;
  feeTier: Scalars['BigInt'];
  liquidity: Scalars['BigInt'];
  sqrtPrice: Scalars['BigInt'];
  feeGrowthGlobal0X128: Scalars['BigInt'];
  feeGrowthGlobal1X128: Scalars['BigInt'];
  token0Price: Scalars['SUSHISWAP_V3_BigDecimal'];
  token1Price: Scalars['SUSHISWAP_V3_BigDecimal'];
  tick?: Maybe<Scalars['BigInt']>;
  observationIndex: Scalars['BigInt'];
  volumeToken0: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeToken1: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  untrackedVolumeUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  feesUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  txCount: Scalars['BigInt'];
  collectedFeesToken0: Scalars['SUSHISWAP_V3_BigDecimal'];
  collectedFeesToken1: Scalars['SUSHISWAP_V3_BigDecimal'];
  collectedFeesUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalValueLockedToken0: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalValueLockedToken1: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalValueLockedETH: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalValueLockedUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalValueLockedUSDUntracked: Scalars['SUSHISWAP_V3_BigDecimal'];
  liquidityProviderCount: Scalars['BigInt'];
  poolHourData: Array<SUSHISWAP_V3_PoolHourData>;
  poolDayData: Array<SUSHISWAP_V3_PoolDayData>;
  mints: Array<SUSHISWAP_V3_Mint>;
  burns: Array<SUSHISWAP_V3_Burn>;
  swaps: Array<SUSHISWAP_V3_Swap>;
  collects: Array<SUSHISWAP_V3_Collect>;
  ticks: Array<SUSHISWAP_V3_Tick>;
};


export type SUSHISWAP_V3_PoolpoolHourDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_PoolHourData_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_PoolHourData_filter>;
};


export type SUSHISWAP_V3_PoolpoolDayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_PoolDayData_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_PoolDayData_filter>;
};


export type SUSHISWAP_V3_PoolmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Mint_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Mint_filter>;
};


export type SUSHISWAP_V3_PoolburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Burn_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Burn_filter>;
};


export type SUSHISWAP_V3_PoolswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Swap_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Swap_filter>;
};


export type SUSHISWAP_V3_PoolcollectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Collect_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Collect_filter>;
};


export type SUSHISWAP_V3_PoolticksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Tick_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Tick_filter>;
};

export type SUSHISWAP_V3_PoolDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  pool: SUSHISWAP_V3_Pool;
  liquidity: Scalars['BigInt'];
  sqrtPrice: Scalars['BigInt'];
  token0Price: Scalars['SUSHISWAP_V3_BigDecimal'];
  token1Price: Scalars['SUSHISWAP_V3_BigDecimal'];
  tick?: Maybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128: Scalars['BigInt'];
  feeGrowthGlobal1X128: Scalars['BigInt'];
  tvlUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeToken0: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeToken1: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  feesUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  txCount: Scalars['BigInt'];
  open: Scalars['SUSHISWAP_V3_BigDecimal'];
  high: Scalars['SUSHISWAP_V3_BigDecimal'];
  low: Scalars['SUSHISWAP_V3_BigDecimal'];
  close: Scalars['SUSHISWAP_V3_BigDecimal'];
};

export type SUSHISWAP_V3_PoolDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<SUSHISWAP_V3_Pool_filter>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token0Price?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  tick?: InputMaybe<Scalars['BigInt']>;
  tick_not?: InputMaybe<Scalars['BigInt']>;
  tick_gt?: InputMaybe<Scalars['BigInt']>;
  tick_lt?: InputMaybe<Scalars['BigInt']>;
  tick_gte?: InputMaybe<Scalars['BigInt']>;
  tick_lte?: InputMaybe<Scalars['BigInt']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tvlUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  open?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  high?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  low?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  close?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_PoolDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_PoolDayData_filter>>>;
};

export type SUSHISWAP_V3_PoolDayData_orderBy =
  | 'id'
  | 'date'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'liquidity'
  | 'sqrtPrice'
  | 'token0Price'
  | 'token1Price'
  | 'tick'
  | 'feeGrowthGlobal0X128'
  | 'feeGrowthGlobal1X128'
  | 'tvlUSD'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'open'
  | 'high'
  | 'low'
  | 'close';

export type SUSHISWAP_V3_PoolHourData = {
  id: Scalars['ID'];
  periodStartUnix: Scalars['Int'];
  pool: SUSHISWAP_V3_Pool;
  liquidity: Scalars['BigInt'];
  sqrtPrice: Scalars['BigInt'];
  token0Price: Scalars['SUSHISWAP_V3_BigDecimal'];
  token1Price: Scalars['SUSHISWAP_V3_BigDecimal'];
  tick?: Maybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128: Scalars['BigInt'];
  feeGrowthGlobal1X128: Scalars['BigInt'];
  tvlUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeToken0: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeToken1: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  feesUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  txCount: Scalars['BigInt'];
  open: Scalars['SUSHISWAP_V3_BigDecimal'];
  high: Scalars['SUSHISWAP_V3_BigDecimal'];
  low: Scalars['SUSHISWAP_V3_BigDecimal'];
  close: Scalars['SUSHISWAP_V3_BigDecimal'];
};

export type SUSHISWAP_V3_PoolHourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  periodStartUnix?: InputMaybe<Scalars['Int']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']>>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<SUSHISWAP_V3_Pool_filter>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token0Price?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  tick?: InputMaybe<Scalars['BigInt']>;
  tick_not?: InputMaybe<Scalars['BigInt']>;
  tick_gt?: InputMaybe<Scalars['BigInt']>;
  tick_lt?: InputMaybe<Scalars['BigInt']>;
  tick_gte?: InputMaybe<Scalars['BigInt']>;
  tick_lte?: InputMaybe<Scalars['BigInt']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tvlUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  open?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  high?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  low?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  close?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_PoolHourData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_PoolHourData_filter>>>;
};

export type SUSHISWAP_V3_PoolHourData_orderBy =
  | 'id'
  | 'periodStartUnix'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'liquidity'
  | 'sqrtPrice'
  | 'token0Price'
  | 'token1Price'
  | 'tick'
  | 'feeGrowthGlobal0X128'
  | 'feeGrowthGlobal1X128'
  | 'tvlUSD'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'open'
  | 'high'
  | 'low'
  | 'close';

export type SUSHISWAP_V3_Pool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<SUSHISWAP_V3_Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<SUSHISWAP_V3_Token_filter>;
  feeTier?: InputMaybe<Scalars['BigInt']>;
  feeTier_not?: InputMaybe<Scalars['BigInt']>;
  feeTier_gt?: InputMaybe<Scalars['BigInt']>;
  feeTier_lt?: InputMaybe<Scalars['BigInt']>;
  feeTier_gte?: InputMaybe<Scalars['BigInt']>;
  feeTier_lte?: InputMaybe<Scalars['BigInt']>;
  feeTier_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeTier_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token0Price?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  tick?: InputMaybe<Scalars['BigInt']>;
  tick_not?: InputMaybe<Scalars['BigInt']>;
  tick_gt?: InputMaybe<Scalars['BigInt']>;
  tick_lt?: InputMaybe<Scalars['BigInt']>;
  tick_gte?: InputMaybe<Scalars['BigInt']>;
  tick_lte?: InputMaybe<Scalars['BigInt']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  observationIndex?: InputMaybe<Scalars['BigInt']>;
  observationIndex_not?: InputMaybe<Scalars['BigInt']>;
  observationIndex_gt?: InputMaybe<Scalars['BigInt']>;
  observationIndex_lt?: InputMaybe<Scalars['BigInt']>;
  observationIndex_gte?: InputMaybe<Scalars['BigInt']>;
  observationIndex_lte?: InputMaybe<Scalars['BigInt']>;
  observationIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  observationIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeToken0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collectedFeesToken0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedToken0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedToken0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedToken0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedToken0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedToken0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedToken0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedToken0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedToken0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedToken1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedToken1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedToken1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedToken1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedToken1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedToken1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedToken1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedToken1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedETH?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETH_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETH_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETH_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETH_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETH_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedETH_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedETH_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolHourData_?: InputMaybe<SUSHISWAP_V3_PoolHourData_filter>;
  poolDayData_?: InputMaybe<SUSHISWAP_V3_PoolDayData_filter>;
  mints_?: InputMaybe<SUSHISWAP_V3_Mint_filter>;
  burns_?: InputMaybe<SUSHISWAP_V3_Burn_filter>;
  swaps_?: InputMaybe<SUSHISWAP_V3_Swap_filter>;
  collects_?: InputMaybe<SUSHISWAP_V3_Collect_filter>;
  ticks_?: InputMaybe<SUSHISWAP_V3_Tick_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Pool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Pool_filter>>>;
};

export type SUSHISWAP_V3_Pool_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'feeTier'
  | 'liquidity'
  | 'sqrtPrice'
  | 'feeGrowthGlobal0X128'
  | 'feeGrowthGlobal1X128'
  | 'token0Price'
  | 'token1Price'
  | 'tick'
  | 'observationIndex'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'collectedFeesUSD'
  | 'totalValueLockedToken0'
  | 'totalValueLockedToken1'
  | 'totalValueLockedETH'
  | 'totalValueLockedUSD'
  | 'totalValueLockedUSDUntracked'
  | 'liquidityProviderCount'
  | 'poolHourData'
  | 'poolDayData'
  | 'mints'
  | 'burns'
  | 'swaps'
  | 'collects'
  | 'ticks';

export type SUSHISWAP_V3_Position = {
  id: Scalars['ID'];
  owner: Scalars['SUSHISWAP_V3_Bytes'];
  pool: SUSHISWAP_V3_Pool;
  token0: SUSHISWAP_V3_Token;
  token1: SUSHISWAP_V3_Token;
  tickLower: SUSHISWAP_V3_Tick;
  tickUpper: SUSHISWAP_V3_Tick;
  liquidity: Scalars['BigInt'];
  depositedToken0: Scalars['SUSHISWAP_V3_BigDecimal'];
  depositedToken1: Scalars['SUSHISWAP_V3_BigDecimal'];
  withdrawnToken0: Scalars['SUSHISWAP_V3_BigDecimal'];
  withdrawnToken1: Scalars['SUSHISWAP_V3_BigDecimal'];
  collectedFeesToken0: Scalars['SUSHISWAP_V3_BigDecimal'];
  collectedFeesToken1: Scalars['SUSHISWAP_V3_BigDecimal'];
  transaction: SUSHISWAP_V3_Transaction;
  feeGrowthInside0LastX128: Scalars['BigInt'];
  feeGrowthInside1LastX128: Scalars['BigInt'];
};

export type SUSHISWAP_V3_PositionSnapshot = {
  id: Scalars['ID'];
  owner: Scalars['SUSHISWAP_V3_Bytes'];
  pool: SUSHISWAP_V3_Pool;
  position: SUSHISWAP_V3_Position;
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  liquidity: Scalars['BigInt'];
  depositedToken0: Scalars['SUSHISWAP_V3_BigDecimal'];
  depositedToken1: Scalars['SUSHISWAP_V3_BigDecimal'];
  withdrawnToken0: Scalars['SUSHISWAP_V3_BigDecimal'];
  withdrawnToken1: Scalars['SUSHISWAP_V3_BigDecimal'];
  collectedFeesToken0: Scalars['SUSHISWAP_V3_BigDecimal'];
  collectedFeesToken1: Scalars['SUSHISWAP_V3_BigDecimal'];
  transaction: SUSHISWAP_V3_Transaction;
  feeGrowthInside0LastX128: Scalars['BigInt'];
  feeGrowthInside1LastX128: Scalars['BigInt'];
};

export type SUSHISWAP_V3_PositionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_not?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_gt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_lt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_gte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_lte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<SUSHISWAP_V3_Pool_filter>;
  position?: InputMaybe<Scalars['String']>;
  position_not?: InputMaybe<Scalars['String']>;
  position_gt?: InputMaybe<Scalars['String']>;
  position_lt?: InputMaybe<Scalars['String']>;
  position_gte?: InputMaybe<Scalars['String']>;
  position_lte?: InputMaybe<Scalars['String']>;
  position_in?: InputMaybe<Array<Scalars['String']>>;
  position_not_in?: InputMaybe<Array<Scalars['String']>>;
  position_contains?: InputMaybe<Scalars['String']>;
  position_contains_nocase?: InputMaybe<Scalars['String']>;
  position_not_contains?: InputMaybe<Scalars['String']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']>;
  position_starts_with?: InputMaybe<Scalars['String']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_starts_with?: InputMaybe<Scalars['String']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_ends_with?: InputMaybe<Scalars['String']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_ends_with?: InputMaybe<Scalars['String']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_?: InputMaybe<SUSHISWAP_V3_Position_filter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedToken0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  depositedToken0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  depositedToken1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  depositedToken1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  withdrawnToken0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  withdrawnToken0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  withdrawnToken1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  withdrawnToken1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesToken0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<SUSHISWAP_V3_Transaction_filter>;
  feeGrowthInside0LastX128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside0LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside1LastX128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside1LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_PositionSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_PositionSnapshot_filter>>>;
};

export type SUSHISWAP_V3_PositionSnapshot_orderBy =
  | 'id'
  | 'owner'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'position'
  | 'position__id'
  | 'position__owner'
  | 'position__liquidity'
  | 'position__depositedToken0'
  | 'position__depositedToken1'
  | 'position__withdrawnToken0'
  | 'position__withdrawnToken1'
  | 'position__collectedFeesToken0'
  | 'position__collectedFeesToken1'
  | 'position__feeGrowthInside0LastX128'
  | 'position__feeGrowthInside1LastX128'
  | 'blockNumber'
  | 'timestamp'
  | 'liquidity'
  | 'depositedToken0'
  | 'depositedToken1'
  | 'withdrawnToken0'
  | 'withdrawnToken1'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'feeGrowthInside0LastX128'
  | 'feeGrowthInside1LastX128';

export type SUSHISWAP_V3_Position_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_not?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_gt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_lt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_gte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_lte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<SUSHISWAP_V3_Pool_filter>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<SUSHISWAP_V3_Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<SUSHISWAP_V3_Token_filter>;
  tickLower?: InputMaybe<Scalars['String']>;
  tickLower_not?: InputMaybe<Scalars['String']>;
  tickLower_gt?: InputMaybe<Scalars['String']>;
  tickLower_lt?: InputMaybe<Scalars['String']>;
  tickLower_gte?: InputMaybe<Scalars['String']>;
  tickLower_lte?: InputMaybe<Scalars['String']>;
  tickLower_in?: InputMaybe<Array<Scalars['String']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['String']>>;
  tickLower_contains?: InputMaybe<Scalars['String']>;
  tickLower_contains_nocase?: InputMaybe<Scalars['String']>;
  tickLower_not_contains?: InputMaybe<Scalars['String']>;
  tickLower_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tickLower_starts_with?: InputMaybe<Scalars['String']>;
  tickLower_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tickLower_not_starts_with?: InputMaybe<Scalars['String']>;
  tickLower_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tickLower_ends_with?: InputMaybe<Scalars['String']>;
  tickLower_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickLower_not_ends_with?: InputMaybe<Scalars['String']>;
  tickLower_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickLower_?: InputMaybe<SUSHISWAP_V3_Tick_filter>;
  tickUpper?: InputMaybe<Scalars['String']>;
  tickUpper_not?: InputMaybe<Scalars['String']>;
  tickUpper_gt?: InputMaybe<Scalars['String']>;
  tickUpper_lt?: InputMaybe<Scalars['String']>;
  tickUpper_gte?: InputMaybe<Scalars['String']>;
  tickUpper_lte?: InputMaybe<Scalars['String']>;
  tickUpper_in?: InputMaybe<Array<Scalars['String']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['String']>>;
  tickUpper_contains?: InputMaybe<Scalars['String']>;
  tickUpper_contains_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_not_contains?: InputMaybe<Scalars['String']>;
  tickUpper_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_starts_with?: InputMaybe<Scalars['String']>;
  tickUpper_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_not_starts_with?: InputMaybe<Scalars['String']>;
  tickUpper_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_ends_with?: InputMaybe<Scalars['String']>;
  tickUpper_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_not_ends_with?: InputMaybe<Scalars['String']>;
  tickUpper_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_?: InputMaybe<SUSHISWAP_V3_Tick_filter>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedToken0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  depositedToken0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  depositedToken1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  depositedToken1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  depositedToken1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  withdrawnToken0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  withdrawnToken0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  withdrawnToken1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  withdrawnToken1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  withdrawnToken1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesToken0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<SUSHISWAP_V3_Transaction_filter>;
  feeGrowthInside0LastX128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside0LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside1LastX128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside1LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Position_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Position_filter>>>;
};

export type SUSHISWAP_V3_Position_orderBy =
  | 'id'
  | 'owner'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'tickLower'
  | 'tickLower__id'
  | 'tickLower__poolAddress'
  | 'tickLower__tickIdx'
  | 'tickLower__liquidityGross'
  | 'tickLower__liquidityNet'
  | 'tickLower__price0'
  | 'tickLower__price1'
  | 'tickLower__volumeToken0'
  | 'tickLower__volumeToken1'
  | 'tickLower__volumeUSD'
  | 'tickLower__untrackedVolumeUSD'
  | 'tickLower__feesUSD'
  | 'tickLower__collectedFeesToken0'
  | 'tickLower__collectedFeesToken1'
  | 'tickLower__collectedFeesUSD'
  | 'tickLower__createdAtTimestamp'
  | 'tickLower__createdAtBlockNumber'
  | 'tickLower__liquidityProviderCount'
  | 'tickLower__feeGrowthOutside0X128'
  | 'tickLower__feeGrowthOutside1X128'
  | 'tickUpper'
  | 'tickUpper__id'
  | 'tickUpper__poolAddress'
  | 'tickUpper__tickIdx'
  | 'tickUpper__liquidityGross'
  | 'tickUpper__liquidityNet'
  | 'tickUpper__price0'
  | 'tickUpper__price1'
  | 'tickUpper__volumeToken0'
  | 'tickUpper__volumeToken1'
  | 'tickUpper__volumeUSD'
  | 'tickUpper__untrackedVolumeUSD'
  | 'tickUpper__feesUSD'
  | 'tickUpper__collectedFeesToken0'
  | 'tickUpper__collectedFeesToken1'
  | 'tickUpper__collectedFeesUSD'
  | 'tickUpper__createdAtTimestamp'
  | 'tickUpper__createdAtBlockNumber'
  | 'tickUpper__liquidityProviderCount'
  | 'tickUpper__feeGrowthOutside0X128'
  | 'tickUpper__feeGrowthOutside1X128'
  | 'liquidity'
  | 'depositedToken0'
  | 'depositedToken1'
  | 'withdrawnToken0'
  | 'withdrawnToken1'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'feeGrowthInside0LastX128'
  | 'feeGrowthInside1LastX128';

export type Query = {
  SUSHISWAP_V3_factory?: Maybe<SUSHISWAP_V3_Factory>;
  SUSHISWAP_V3_factories: Array<SUSHISWAP_V3_Factory>;
  SUSHISWAP_V3_bundle?: Maybe<SUSHISWAP_V3_Bundle>;
  SUSHISWAP_V3_bundles: Array<SUSHISWAP_V3_Bundle>;
  SUSHISWAP_V3_token?: Maybe<SUSHISWAP_V3_Token>;
  SUSHISWAP_V3_tokens: Array<SUSHISWAP_V3_Token>;
  SUSHISWAP_V3_pool?: Maybe<SUSHISWAP_V3_Pool>;
  SUSHISWAP_V3_pools: Array<SUSHISWAP_V3_Pool>;
  SUSHISWAP_V3_tick?: Maybe<SUSHISWAP_V3_Tick>;
  SUSHISWAP_V3_ticks: Array<SUSHISWAP_V3_Tick>;
  SUSHISWAP_V3_position?: Maybe<SUSHISWAP_V3_Position>;
  SUSHISWAP_V3_positions: Array<SUSHISWAP_V3_Position>;
  SUSHISWAP_V3_positionSnapshot?: Maybe<SUSHISWAP_V3_PositionSnapshot>;
  SUSHISWAP_V3_positionSnapshots: Array<SUSHISWAP_V3_PositionSnapshot>;
  SUSHISWAP_V3_transaction?: Maybe<SUSHISWAP_V3_Transaction>;
  SUSHISWAP_V3_transactions: Array<SUSHISWAP_V3_Transaction>;
  SUSHISWAP_V3_mint?: Maybe<SUSHISWAP_V3_Mint>;
  SUSHISWAP_V3_mints: Array<SUSHISWAP_V3_Mint>;
  SUSHISWAP_V3_burn?: Maybe<SUSHISWAP_V3_Burn>;
  SUSHISWAP_V3_burns: Array<SUSHISWAP_V3_Burn>;
  SUSHISWAP_V3_swap?: Maybe<SUSHISWAP_V3_Swap>;
  SUSHISWAP_V3_swaps: Array<SUSHISWAP_V3_Swap>;
  SUSHISWAP_V3_collect?: Maybe<SUSHISWAP_V3_Collect>;
  SUSHISWAP_V3_collects: Array<SUSHISWAP_V3_Collect>;
  SUSHISWAP_V3_flash?: Maybe<SUSHISWAP_V3_Flash>;
  SUSHISWAP_V3_flashes: Array<SUSHISWAP_V3_Flash>;
  SUSHISWAP_V3_uniswapDayData?: Maybe<SUSHISWAP_V3_UniswapDayData>;
  SUSHISWAP_V3_uniswapDayDatas: Array<SUSHISWAP_V3_UniswapDayData>;
  SUSHISWAP_V3_poolDayData?: Maybe<SUSHISWAP_V3_PoolDayData>;
  SUSHISWAP_V3_poolDayDatas: Array<SUSHISWAP_V3_PoolDayData>;
  SUSHISWAP_V3_poolHourData?: Maybe<SUSHISWAP_V3_PoolHourData>;
  SUSHISWAP_V3_poolHourDatas: Array<SUSHISWAP_V3_PoolHourData>;
  SUSHISWAP_V3_tickHourData?: Maybe<SUSHISWAP_V3_TickHourData>;
  SUSHISWAP_V3_tickHourDatas: Array<SUSHISWAP_V3_TickHourData>;
  SUSHISWAP_V3_tickDayData?: Maybe<SUSHISWAP_V3_TickDayData>;
  SUSHISWAP_V3_tickDayDatas: Array<SUSHISWAP_V3_TickDayData>;
  SUSHISWAP_V3_tokenDayData?: Maybe<SUSHISWAP_V3_TokenDayData>;
  SUSHISWAP_V3_tokenDayDatas: Array<SUSHISWAP_V3_TokenDayData>;
  SUSHISWAP_V3_tokenHourData?: Maybe<SUSHISWAP_V3_TokenHourData>;
  SUSHISWAP_V3_tokenHourDatas: Array<SUSHISWAP_V3_TokenHourData>;
  /** Access to subgraph metadata */
  SUSHISWAP_V3__meta?: Maybe<SUSHISWAP_V3__Meta_>;
};


export type QuerySUSHISWAP_V3_factoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_factoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Factory_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Factory_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_bundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Bundle_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Bundle_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_tokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Token_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Token_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Pool_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Pool_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_tickArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_ticksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Tick_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Tick_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_positionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_positionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Position_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Position_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_positionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_positionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_PositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_PositionSnapshot_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Transaction_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Transaction_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_mintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_mintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Mint_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Mint_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_burnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_burnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Burn_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Burn_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_swapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Swap_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Swap_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_collectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_collectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Collect_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Collect_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_flashArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_flashesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Flash_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Flash_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_uniswapDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_uniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_UniswapDayData_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_UniswapDayData_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_poolDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_poolDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_PoolDayData_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_PoolDayData_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_poolHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_poolHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_PoolHourData_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_PoolHourData_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_tickHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_tickHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_TickHourData_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_TickHourData_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_tickDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_tickDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_TickDayData_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_TickDayData_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_tokenDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_tokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_TokenDayData_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_TokenDayData_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_tokenHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3_tokenHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_TokenHourData_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_TokenHourData_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySUSHISWAP_V3__metaArgs = {
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
};

export type Subscription = {
  SUSHISWAP_V3_factory?: Maybe<SUSHISWAP_V3_Factory>;
  SUSHISWAP_V3_factories: Array<SUSHISWAP_V3_Factory>;
  SUSHISWAP_V3_bundle?: Maybe<SUSHISWAP_V3_Bundle>;
  SUSHISWAP_V3_bundles: Array<SUSHISWAP_V3_Bundle>;
  SUSHISWAP_V3_token?: Maybe<SUSHISWAP_V3_Token>;
  SUSHISWAP_V3_tokens: Array<SUSHISWAP_V3_Token>;
  SUSHISWAP_V3_pool?: Maybe<SUSHISWAP_V3_Pool>;
  SUSHISWAP_V3_pools: Array<SUSHISWAP_V3_Pool>;
  SUSHISWAP_V3_tick?: Maybe<SUSHISWAP_V3_Tick>;
  SUSHISWAP_V3_ticks: Array<SUSHISWAP_V3_Tick>;
  SUSHISWAP_V3_position?: Maybe<SUSHISWAP_V3_Position>;
  SUSHISWAP_V3_positions: Array<SUSHISWAP_V3_Position>;
  SUSHISWAP_V3_positionSnapshot?: Maybe<SUSHISWAP_V3_PositionSnapshot>;
  SUSHISWAP_V3_positionSnapshots: Array<SUSHISWAP_V3_PositionSnapshot>;
  SUSHISWAP_V3_transaction?: Maybe<SUSHISWAP_V3_Transaction>;
  SUSHISWAP_V3_transactions: Array<SUSHISWAP_V3_Transaction>;
  SUSHISWAP_V3_mint?: Maybe<SUSHISWAP_V3_Mint>;
  SUSHISWAP_V3_mints: Array<SUSHISWAP_V3_Mint>;
  SUSHISWAP_V3_burn?: Maybe<SUSHISWAP_V3_Burn>;
  SUSHISWAP_V3_burns: Array<SUSHISWAP_V3_Burn>;
  SUSHISWAP_V3_swap?: Maybe<SUSHISWAP_V3_Swap>;
  SUSHISWAP_V3_swaps: Array<SUSHISWAP_V3_Swap>;
  SUSHISWAP_V3_collect?: Maybe<SUSHISWAP_V3_Collect>;
  SUSHISWAP_V3_collects: Array<SUSHISWAP_V3_Collect>;
  SUSHISWAP_V3_flash?: Maybe<SUSHISWAP_V3_Flash>;
  SUSHISWAP_V3_flashes: Array<SUSHISWAP_V3_Flash>;
  SUSHISWAP_V3_uniswapDayData?: Maybe<SUSHISWAP_V3_UniswapDayData>;
  SUSHISWAP_V3_uniswapDayDatas: Array<SUSHISWAP_V3_UniswapDayData>;
  SUSHISWAP_V3_poolDayData?: Maybe<SUSHISWAP_V3_PoolDayData>;
  SUSHISWAP_V3_poolDayDatas: Array<SUSHISWAP_V3_PoolDayData>;
  SUSHISWAP_V3_poolHourData?: Maybe<SUSHISWAP_V3_PoolHourData>;
  SUSHISWAP_V3_poolHourDatas: Array<SUSHISWAP_V3_PoolHourData>;
  SUSHISWAP_V3_tickHourData?: Maybe<SUSHISWAP_V3_TickHourData>;
  SUSHISWAP_V3_tickHourDatas: Array<SUSHISWAP_V3_TickHourData>;
  SUSHISWAP_V3_tickDayData?: Maybe<SUSHISWAP_V3_TickDayData>;
  SUSHISWAP_V3_tickDayDatas: Array<SUSHISWAP_V3_TickDayData>;
  SUSHISWAP_V3_tokenDayData?: Maybe<SUSHISWAP_V3_TokenDayData>;
  SUSHISWAP_V3_tokenDayDatas: Array<SUSHISWAP_V3_TokenDayData>;
  SUSHISWAP_V3_tokenHourData?: Maybe<SUSHISWAP_V3_TokenHourData>;
  SUSHISWAP_V3_tokenHourDatas: Array<SUSHISWAP_V3_TokenHourData>;
  /** Access to subgraph metadata */
  SUSHISWAP_V3__meta?: Maybe<SUSHISWAP_V3__Meta_>;
};


export type SubscriptionSUSHISWAP_V3_factoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_factoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Factory_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Factory_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_bundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Bundle_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Bundle_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_tokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Token_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Token_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Pool_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Pool_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_tickArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_ticksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Tick_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Tick_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_positionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_positionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Position_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Position_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_positionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_positionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_PositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_PositionSnapshot_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Transaction_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Transaction_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_mintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_mintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Mint_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Mint_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_burnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_burnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Burn_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Burn_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_swapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Swap_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Swap_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_collectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_collectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Collect_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Collect_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_flashArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_flashesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Flash_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Flash_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_uniswapDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_uniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_UniswapDayData_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_UniswapDayData_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_poolDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_poolDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_PoolDayData_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_PoolDayData_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_poolHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_poolHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_PoolHourData_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_PoolHourData_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_tickHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_tickHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_TickHourData_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_TickHourData_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_tickDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_tickDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_TickDayData_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_TickDayData_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_tokenDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_tokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_TokenDayData_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_TokenDayData_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_tokenHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3_tokenHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_TokenHourData_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_TokenHourData_filter>;
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSUSHISWAP_V3__metaArgs = {
  block?: InputMaybe<SUSHISWAP_V3_Block_height>;
};

export type SUSHISWAP_V3_Swap = {
  id: Scalars['ID'];
  transaction: SUSHISWAP_V3_Transaction;
  timestamp: Scalars['BigInt'];
  pool: SUSHISWAP_V3_Pool;
  token0: SUSHISWAP_V3_Token;
  token1: SUSHISWAP_V3_Token;
  sender: Scalars['SUSHISWAP_V3_Bytes'];
  recipient: Scalars['SUSHISWAP_V3_Bytes'];
  origin: Scalars['SUSHISWAP_V3_Bytes'];
  amount0: Scalars['SUSHISWAP_V3_BigDecimal'];
  amount1: Scalars['SUSHISWAP_V3_BigDecimal'];
  amountUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  sqrtPriceX96: Scalars['BigInt'];
  tick: Scalars['BigInt'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type SUSHISWAP_V3_Swap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<SUSHISWAP_V3_Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<SUSHISWAP_V3_Pool_filter>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<SUSHISWAP_V3_Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<SUSHISWAP_V3_Token_filter>;
  sender?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_not?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_gt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_lt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_gte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_lte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  sender_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  recipient?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  recipient_not?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  recipient_gt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  recipient_lt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  recipient_gte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  recipient_lte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_not?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_gt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_lt?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_gte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_lte?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  origin_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_Bytes']>>;
  origin_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['SUSHISWAP_V3_Bytes']>;
  amount0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  sqrtPriceX96?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPriceX96_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick?: InputMaybe<Scalars['BigInt']>;
  tick_not?: InputMaybe<Scalars['BigInt']>;
  tick_gt?: InputMaybe<Scalars['BigInt']>;
  tick_lt?: InputMaybe<Scalars['BigInt']>;
  tick_gte?: InputMaybe<Scalars['BigInt']>;
  tick_lte?: InputMaybe<Scalars['BigInt']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Swap_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Swap_filter>>>;
};

export type SUSHISWAP_V3_Swap_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'timestamp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'sender'
  | 'recipient'
  | 'origin'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'sqrtPriceX96'
  | 'tick'
  | 'logIndex';

export type SUSHISWAP_V3_Tick = {
  id: Scalars['ID'];
  poolAddress?: Maybe<Scalars['String']>;
  tickIdx: Scalars['BigInt'];
  pool: SUSHISWAP_V3_Pool;
  liquidityGross: Scalars['BigInt'];
  liquidityNet: Scalars['BigInt'];
  price0: Scalars['SUSHISWAP_V3_BigDecimal'];
  price1: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeToken0: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeToken1: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  untrackedVolumeUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  feesUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  collectedFeesToken0: Scalars['SUSHISWAP_V3_BigDecimal'];
  collectedFeesToken1: Scalars['SUSHISWAP_V3_BigDecimal'];
  collectedFeesUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  liquidityProviderCount: Scalars['BigInt'];
  feeGrowthOutside0X128: Scalars['BigInt'];
  feeGrowthOutside1X128: Scalars['BigInt'];
};

export type SUSHISWAP_V3_TickDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  pool: SUSHISWAP_V3_Pool;
  tick: SUSHISWAP_V3_Tick;
  liquidityGross: Scalars['BigInt'];
  liquidityNet: Scalars['BigInt'];
  volumeToken0: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeToken1: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  feesUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  feeGrowthOutside0X128: Scalars['BigInt'];
  feeGrowthOutside1X128: Scalars['BigInt'];
};

export type SUSHISWAP_V3_TickDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<SUSHISWAP_V3_Pool_filter>;
  tick?: InputMaybe<Scalars['String']>;
  tick_not?: InputMaybe<Scalars['String']>;
  tick_gt?: InputMaybe<Scalars['String']>;
  tick_lt?: InputMaybe<Scalars['String']>;
  tick_gte?: InputMaybe<Scalars['String']>;
  tick_lte?: InputMaybe<Scalars['String']>;
  tick_in?: InputMaybe<Array<Scalars['String']>>;
  tick_not_in?: InputMaybe<Array<Scalars['String']>>;
  tick_contains?: InputMaybe<Scalars['String']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']>;
  tick_not_contains?: InputMaybe<Scalars['String']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tick_starts_with?: InputMaybe<Scalars['String']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tick_not_starts_with?: InputMaybe<Scalars['String']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tick_ends_with?: InputMaybe<Scalars['String']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tick_?: InputMaybe<SUSHISWAP_V3_Tick_filter>;
  liquidityGross?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeToken0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feeGrowthOutside0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_TickDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_TickDayData_filter>>>;
};

export type SUSHISWAP_V3_TickDayData_orderBy =
  | 'id'
  | 'date'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'tick'
  | 'tick__id'
  | 'tick__poolAddress'
  | 'tick__tickIdx'
  | 'tick__liquidityGross'
  | 'tick__liquidityNet'
  | 'tick__price0'
  | 'tick__price1'
  | 'tick__volumeToken0'
  | 'tick__volumeToken1'
  | 'tick__volumeUSD'
  | 'tick__untrackedVolumeUSD'
  | 'tick__feesUSD'
  | 'tick__collectedFeesToken0'
  | 'tick__collectedFeesToken1'
  | 'tick__collectedFeesUSD'
  | 'tick__createdAtTimestamp'
  | 'tick__createdAtBlockNumber'
  | 'tick__liquidityProviderCount'
  | 'tick__feeGrowthOutside0X128'
  | 'tick__feeGrowthOutside1X128'
  | 'liquidityGross'
  | 'liquidityNet'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD'
  | 'feeGrowthOutside0X128'
  | 'feeGrowthOutside1X128';

export type SUSHISWAP_V3_TickHourData = {
  id: Scalars['ID'];
  periodStartUnix: Scalars['Int'];
  pool: SUSHISWAP_V3_Pool;
  tick: SUSHISWAP_V3_Tick;
  liquidityGross: Scalars['BigInt'];
  liquidityNet: Scalars['BigInt'];
  volumeToken0: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeToken1: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  feesUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
};

export type SUSHISWAP_V3_TickHourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  periodStartUnix?: InputMaybe<Scalars['Int']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']>>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<SUSHISWAP_V3_Pool_filter>;
  tick?: InputMaybe<Scalars['String']>;
  tick_not?: InputMaybe<Scalars['String']>;
  tick_gt?: InputMaybe<Scalars['String']>;
  tick_lt?: InputMaybe<Scalars['String']>;
  tick_gte?: InputMaybe<Scalars['String']>;
  tick_lte?: InputMaybe<Scalars['String']>;
  tick_in?: InputMaybe<Array<Scalars['String']>>;
  tick_not_in?: InputMaybe<Array<Scalars['String']>>;
  tick_contains?: InputMaybe<Scalars['String']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']>;
  tick_not_contains?: InputMaybe<Scalars['String']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tick_starts_with?: InputMaybe<Scalars['String']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tick_not_starts_with?: InputMaybe<Scalars['String']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tick_ends_with?: InputMaybe<Scalars['String']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tick_?: InputMaybe<SUSHISWAP_V3_Tick_filter>;
  liquidityGross?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeToken0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_TickHourData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_TickHourData_filter>>>;
};

export type SUSHISWAP_V3_TickHourData_orderBy =
  | 'id'
  | 'periodStartUnix'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'tick'
  | 'tick__id'
  | 'tick__poolAddress'
  | 'tick__tickIdx'
  | 'tick__liquidityGross'
  | 'tick__liquidityNet'
  | 'tick__price0'
  | 'tick__price1'
  | 'tick__volumeToken0'
  | 'tick__volumeToken1'
  | 'tick__volumeUSD'
  | 'tick__untrackedVolumeUSD'
  | 'tick__feesUSD'
  | 'tick__collectedFeesToken0'
  | 'tick__collectedFeesToken1'
  | 'tick__collectedFeesUSD'
  | 'tick__createdAtTimestamp'
  | 'tick__createdAtBlockNumber'
  | 'tick__liquidityProviderCount'
  | 'tick__feeGrowthOutside0X128'
  | 'tick__feeGrowthOutside1X128'
  | 'liquidityGross'
  | 'liquidityNet'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD';

export type SUSHISWAP_V3_Tick_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  poolAddress?: InputMaybe<Scalars['String']>;
  poolAddress_not?: InputMaybe<Scalars['String']>;
  poolAddress_gt?: InputMaybe<Scalars['String']>;
  poolAddress_lt?: InputMaybe<Scalars['String']>;
  poolAddress_gte?: InputMaybe<Scalars['String']>;
  poolAddress_lte?: InputMaybe<Scalars['String']>;
  poolAddress_in?: InputMaybe<Array<Scalars['String']>>;
  poolAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolAddress_contains?: InputMaybe<Scalars['String']>;
  poolAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_not_contains?: InputMaybe<Scalars['String']>;
  poolAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_starts_with?: InputMaybe<Scalars['String']>;
  poolAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  poolAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_ends_with?: InputMaybe<Scalars['String']>;
  poolAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  poolAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickIdx?: InputMaybe<Scalars['BigInt']>;
  tickIdx_not?: InputMaybe<Scalars['BigInt']>;
  tickIdx_gt?: InputMaybe<Scalars['BigInt']>;
  tickIdx_lt?: InputMaybe<Scalars['BigInt']>;
  tickIdx_gte?: InputMaybe<Scalars['BigInt']>;
  tickIdx_lte?: InputMaybe<Scalars['BigInt']>;
  tickIdx_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickIdx_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<SUSHISWAP_V3_Pool_filter>;
  liquidityGross?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  price0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  price0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  price0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  price0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  price0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  price0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  price0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  price1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  price1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  price1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  price1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  price1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  price1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  price1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  price1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesToken0?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  collectedFeesUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  collectedFeesUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Tick_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Tick_filter>>>;
};

export type SUSHISWAP_V3_Tick_orderBy =
  | 'id'
  | 'poolAddress'
  | 'tickIdx'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'liquidityGross'
  | 'liquidityNet'
  | 'price0'
  | 'price1'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'feesUSD'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'collectedFeesUSD'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'liquidityProviderCount'
  | 'feeGrowthOutside0X128'
  | 'feeGrowthOutside1X128';

export type SUSHISWAP_V3_Token = {
  id: Scalars['ID'];
  symbol: Scalars['String'];
  name: Scalars['String'];
  decimals: Scalars['BigInt'];
  totalSupply: Scalars['BigInt'];
  volume: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  untrackedVolumeUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  feesUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  txCount: Scalars['BigInt'];
  poolCount: Scalars['BigInt'];
  totalValueLocked: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalValueLockedUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalValueLockedUSDUntracked: Scalars['SUSHISWAP_V3_BigDecimal'];
  derivedETH: Scalars['SUSHISWAP_V3_BigDecimal'];
  whitelistPools: Array<SUSHISWAP_V3_Pool>;
  tokenDayData: Array<SUSHISWAP_V3_TokenDayData>;
};


export type SUSHISWAP_V3_TokenwhitelistPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Pool_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Pool_filter>;
};


export type SUSHISWAP_V3_TokentokenDayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_TokenDayData_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_TokenDayData_filter>;
};

export type SUSHISWAP_V3_TokenDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  token: SUSHISWAP_V3_Token;
  volume: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  untrackedVolumeUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalValueLocked: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalValueLockedUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  priceUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  feesUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  open: Scalars['SUSHISWAP_V3_BigDecimal'];
  high: Scalars['SUSHISWAP_V3_BigDecimal'];
  low: Scalars['SUSHISWAP_V3_BigDecimal'];
  close: Scalars['SUSHISWAP_V3_BigDecimal'];
};

export type SUSHISWAP_V3_TokenDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<SUSHISWAP_V3_Token_filter>;
  volume?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLocked?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  priceUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  priceUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  priceUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  priceUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  priceUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  priceUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  priceUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  open?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  high?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  low?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  close?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_TokenDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_TokenDayData_filter>>>;
};

export type SUSHISWAP_V3_TokenDayData_orderBy =
  | 'id'
  | 'date'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__totalSupply'
  | 'token__volume'
  | 'token__volumeUSD'
  | 'token__untrackedVolumeUSD'
  | 'token__feesUSD'
  | 'token__txCount'
  | 'token__poolCount'
  | 'token__totalValueLocked'
  | 'token__totalValueLockedUSD'
  | 'token__totalValueLockedUSDUntracked'
  | 'token__derivedETH'
  | 'volume'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'totalValueLocked'
  | 'totalValueLockedUSD'
  | 'priceUSD'
  | 'feesUSD'
  | 'open'
  | 'high'
  | 'low'
  | 'close';

export type SUSHISWAP_V3_TokenHourData = {
  id: Scalars['ID'];
  periodStartUnix: Scalars['Int'];
  token: SUSHISWAP_V3_Token;
  volume: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  untrackedVolumeUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalValueLocked: Scalars['SUSHISWAP_V3_BigDecimal'];
  totalValueLockedUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  priceUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  feesUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  open: Scalars['SUSHISWAP_V3_BigDecimal'];
  high: Scalars['SUSHISWAP_V3_BigDecimal'];
  low: Scalars['SUSHISWAP_V3_BigDecimal'];
  close: Scalars['SUSHISWAP_V3_BigDecimal'];
};

export type SUSHISWAP_V3_TokenHourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  periodStartUnix?: InputMaybe<Scalars['Int']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']>>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<SUSHISWAP_V3_Token_filter>;
  volume?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLocked?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  priceUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  priceUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  priceUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  priceUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  priceUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  priceUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  priceUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  open?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  high?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  low?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  close?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_TokenHourData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_TokenHourData_filter>>>;
};

export type SUSHISWAP_V3_TokenHourData_orderBy =
  | 'id'
  | 'periodStartUnix'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__totalSupply'
  | 'token__volume'
  | 'token__volumeUSD'
  | 'token__untrackedVolumeUSD'
  | 'token__feesUSD'
  | 'token__txCount'
  | 'token__poolCount'
  | 'token__totalValueLocked'
  | 'token__totalValueLockedUSD'
  | 'token__totalValueLockedUSDUntracked'
  | 'token__derivedETH'
  | 'volume'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'totalValueLocked'
  | 'totalValueLockedUSD'
  | 'priceUSD'
  | 'feesUSD'
  | 'open'
  | 'high'
  | 'low'
  | 'close';

export type SUSHISWAP_V3_Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolCount?: InputMaybe<Scalars['BigInt']>;
  poolCount_not?: InputMaybe<Scalars['BigInt']>;
  poolCount_gt?: InputMaybe<Scalars['BigInt']>;
  poolCount_lt?: InputMaybe<Scalars['BigInt']>;
  poolCount_gte?: InputMaybe<Scalars['BigInt']>;
  poolCount_lte?: InputMaybe<Scalars['BigInt']>;
  poolCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLocked?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  derivedETH?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  derivedETH_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  derivedETH_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  derivedETH_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  derivedETH_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  derivedETH_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  derivedETH_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  derivedETH_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  whitelistPools?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_contains?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not_contains?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_?: InputMaybe<SUSHISWAP_V3_Pool_filter>;
  tokenDayData_?: InputMaybe<SUSHISWAP_V3_TokenDayData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Token_filter>>>;
};

export type SUSHISWAP_V3_Token_orderBy =
  | 'id'
  | 'symbol'
  | 'name'
  | 'decimals'
  | 'totalSupply'
  | 'volume'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'poolCount'
  | 'totalValueLocked'
  | 'totalValueLockedUSD'
  | 'totalValueLockedUSDUntracked'
  | 'derivedETH'
  | 'whitelistPools'
  | 'tokenDayData';

export type SUSHISWAP_V3_Transaction = {
  id: Scalars['ID'];
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  mints: Array<Maybe<SUSHISWAP_V3_Mint>>;
  burns: Array<Maybe<SUSHISWAP_V3_Burn>>;
  swaps: Array<Maybe<SUSHISWAP_V3_Swap>>;
  flashed: Array<Maybe<SUSHISWAP_V3_Flash>>;
  collects: Array<Maybe<SUSHISWAP_V3_Collect>>;
};


export type SUSHISWAP_V3_TransactionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Mint_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Mint_filter>;
};


export type SUSHISWAP_V3_TransactionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Burn_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Burn_filter>;
};


export type SUSHISWAP_V3_TransactionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Swap_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Swap_filter>;
};


export type SUSHISWAP_V3_TransactionflashedArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Flash_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Flash_filter>;
};


export type SUSHISWAP_V3_TransactioncollectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SUSHISWAP_V3_Collect_orderBy>;
  orderDirection?: InputMaybe<SUSHISWAP_V3_OrderDirection>;
  where?: InputMaybe<SUSHISWAP_V3_Collect_filter>;
};

export type SUSHISWAP_V3_Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mints_?: InputMaybe<SUSHISWAP_V3_Mint_filter>;
  burns_?: InputMaybe<SUSHISWAP_V3_Burn_filter>;
  swaps_?: InputMaybe<SUSHISWAP_V3_Swap_filter>;
  flashed_?: InputMaybe<SUSHISWAP_V3_Flash_filter>;
  collects_?: InputMaybe<SUSHISWAP_V3_Collect_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Transaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_Transaction_filter>>>;
};

export type SUSHISWAP_V3_Transaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'gasUsed'
  | 'gasPrice'
  | 'mints'
  | 'burns'
  | 'swaps'
  | 'flashed'
  | 'collects';

export type SUSHISWAP_V3_UniswapDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  volumeETH: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  volumeUSDUntracked: Scalars['SUSHISWAP_V3_BigDecimal'];
  feesUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
  txCount: Scalars['BigInt'];
  tvlUSD: Scalars['SUSHISWAP_V3_BigDecimal'];
};

export type SUSHISWAP_V3_UniswapDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  volumeETH?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeETH_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeETH_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeETH_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeETH_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeETH_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeETH_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSDUntracked?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSDUntracked_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSDUntracked_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSDUntracked_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSDUntracked_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSDUntracked_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  volumeUSDUntracked_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  volumeUSDUntracked_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tvlUSD?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_not?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_gt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_lt?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_gte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_lte?: InputMaybe<Scalars['SUSHISWAP_V3_BigDecimal']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['SUSHISWAP_V3_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SUSHISWAP_V3_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_UniswapDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SUSHISWAP_V3_UniswapDayData_filter>>>;
};

export type SUSHISWAP_V3_UniswapDayData_orderBy =
  | 'id'
  | 'date'
  | 'volumeETH'
  | 'volumeUSD'
  | 'volumeUSDUntracked'
  | 'feesUSD'
  | 'txCount'
  | 'tvlUSD';

export type SUSHISWAP_V3__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['SUSHISWAP_V3_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['SUSHISWAP_V3_Bytes']>;
};

/** The type for the top-level _meta field */
export type SUSHISWAP_V3__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: SUSHISWAP_V3__Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  SUSHISWAP_V3_factory: InContextSdkMethod<Query['SUSHISWAP_V3_factory'], QuerySUSHISWAP_V3_factoryArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_factories: InContextSdkMethod<Query['SUSHISWAP_V3_factories'], QuerySUSHISWAP_V3_factoriesArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_bundle: InContextSdkMethod<Query['SUSHISWAP_V3_bundle'], QuerySUSHISWAP_V3_bundleArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_bundles: InContextSdkMethod<Query['SUSHISWAP_V3_bundles'], QuerySUSHISWAP_V3_bundlesArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_token: InContextSdkMethod<Query['SUSHISWAP_V3_token'], QuerySUSHISWAP_V3_tokenArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tokens: InContextSdkMethod<Query['SUSHISWAP_V3_tokens'], QuerySUSHISWAP_V3_tokensArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_pool: InContextSdkMethod<Query['SUSHISWAP_V3_pool'], QuerySUSHISWAP_V3_poolArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_pools: InContextSdkMethod<Query['SUSHISWAP_V3_pools'], QuerySUSHISWAP_V3_poolsArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tick: InContextSdkMethod<Query['SUSHISWAP_V3_tick'], QuerySUSHISWAP_V3_tickArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_ticks: InContextSdkMethod<Query['SUSHISWAP_V3_ticks'], QuerySUSHISWAP_V3_ticksArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_position: InContextSdkMethod<Query['SUSHISWAP_V3_position'], QuerySUSHISWAP_V3_positionArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_positions: InContextSdkMethod<Query['SUSHISWAP_V3_positions'], QuerySUSHISWAP_V3_positionsArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_positionSnapshot: InContextSdkMethod<Query['SUSHISWAP_V3_positionSnapshot'], QuerySUSHISWAP_V3_positionSnapshotArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_positionSnapshots: InContextSdkMethod<Query['SUSHISWAP_V3_positionSnapshots'], QuerySUSHISWAP_V3_positionSnapshotsArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_transaction: InContextSdkMethod<Query['SUSHISWAP_V3_transaction'], QuerySUSHISWAP_V3_transactionArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_transactions: InContextSdkMethod<Query['SUSHISWAP_V3_transactions'], QuerySUSHISWAP_V3_transactionsArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_mint: InContextSdkMethod<Query['SUSHISWAP_V3_mint'], QuerySUSHISWAP_V3_mintArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_mints: InContextSdkMethod<Query['SUSHISWAP_V3_mints'], QuerySUSHISWAP_V3_mintsArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_burn: InContextSdkMethod<Query['SUSHISWAP_V3_burn'], QuerySUSHISWAP_V3_burnArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_burns: InContextSdkMethod<Query['SUSHISWAP_V3_burns'], QuerySUSHISWAP_V3_burnsArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_swap: InContextSdkMethod<Query['SUSHISWAP_V3_swap'], QuerySUSHISWAP_V3_swapArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_swaps: InContextSdkMethod<Query['SUSHISWAP_V3_swaps'], QuerySUSHISWAP_V3_swapsArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_collect: InContextSdkMethod<Query['SUSHISWAP_V3_collect'], QuerySUSHISWAP_V3_collectArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_collects: InContextSdkMethod<Query['SUSHISWAP_V3_collects'], QuerySUSHISWAP_V3_collectsArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_flash: InContextSdkMethod<Query['SUSHISWAP_V3_flash'], QuerySUSHISWAP_V3_flashArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_flashes: InContextSdkMethod<Query['SUSHISWAP_V3_flashes'], QuerySUSHISWAP_V3_flashesArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_uniswapDayData: InContextSdkMethod<Query['SUSHISWAP_V3_uniswapDayData'], QuerySUSHISWAP_V3_uniswapDayDataArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_uniswapDayDatas: InContextSdkMethod<Query['SUSHISWAP_V3_uniswapDayDatas'], QuerySUSHISWAP_V3_uniswapDayDatasArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_poolDayData: InContextSdkMethod<Query['SUSHISWAP_V3_poolDayData'], QuerySUSHISWAP_V3_poolDayDataArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_poolDayDatas: InContextSdkMethod<Query['SUSHISWAP_V3_poolDayDatas'], QuerySUSHISWAP_V3_poolDayDatasArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_poolHourData: InContextSdkMethod<Query['SUSHISWAP_V3_poolHourData'], QuerySUSHISWAP_V3_poolHourDataArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_poolHourDatas: InContextSdkMethod<Query['SUSHISWAP_V3_poolHourDatas'], QuerySUSHISWAP_V3_poolHourDatasArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tickHourData: InContextSdkMethod<Query['SUSHISWAP_V3_tickHourData'], QuerySUSHISWAP_V3_tickHourDataArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tickHourDatas: InContextSdkMethod<Query['SUSHISWAP_V3_tickHourDatas'], QuerySUSHISWAP_V3_tickHourDatasArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tickDayData: InContextSdkMethod<Query['SUSHISWAP_V3_tickDayData'], QuerySUSHISWAP_V3_tickDayDataArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tickDayDatas: InContextSdkMethod<Query['SUSHISWAP_V3_tickDayDatas'], QuerySUSHISWAP_V3_tickDayDatasArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tokenDayData: InContextSdkMethod<Query['SUSHISWAP_V3_tokenDayData'], QuerySUSHISWAP_V3_tokenDayDataArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tokenDayDatas: InContextSdkMethod<Query['SUSHISWAP_V3_tokenDayDatas'], QuerySUSHISWAP_V3_tokenDayDatasArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tokenHourData: InContextSdkMethod<Query['SUSHISWAP_V3_tokenHourData'], QuerySUSHISWAP_V3_tokenHourDataArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tokenHourDatas: InContextSdkMethod<Query['SUSHISWAP_V3_tokenHourDatas'], QuerySUSHISWAP_V3_tokenHourDatasArgs, MeshContext>,
  /** Access to subgraph metadata **/
  SUSHISWAP_V3__meta: InContextSdkMethod<Query['SUSHISWAP_V3__meta'], QuerySUSHISWAP_V3__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  SUSHISWAP_V3_factory: InContextSdkMethod<Subscription['SUSHISWAP_V3_factory'], SubscriptionSUSHISWAP_V3_factoryArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_factories: InContextSdkMethod<Subscription['SUSHISWAP_V3_factories'], SubscriptionSUSHISWAP_V3_factoriesArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_bundle: InContextSdkMethod<Subscription['SUSHISWAP_V3_bundle'], SubscriptionSUSHISWAP_V3_bundleArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_bundles: InContextSdkMethod<Subscription['SUSHISWAP_V3_bundles'], SubscriptionSUSHISWAP_V3_bundlesArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_token: InContextSdkMethod<Subscription['SUSHISWAP_V3_token'], SubscriptionSUSHISWAP_V3_tokenArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tokens: InContextSdkMethod<Subscription['SUSHISWAP_V3_tokens'], SubscriptionSUSHISWAP_V3_tokensArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_pool: InContextSdkMethod<Subscription['SUSHISWAP_V3_pool'], SubscriptionSUSHISWAP_V3_poolArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_pools: InContextSdkMethod<Subscription['SUSHISWAP_V3_pools'], SubscriptionSUSHISWAP_V3_poolsArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tick: InContextSdkMethod<Subscription['SUSHISWAP_V3_tick'], SubscriptionSUSHISWAP_V3_tickArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_ticks: InContextSdkMethod<Subscription['SUSHISWAP_V3_ticks'], SubscriptionSUSHISWAP_V3_ticksArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_position: InContextSdkMethod<Subscription['SUSHISWAP_V3_position'], SubscriptionSUSHISWAP_V3_positionArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_positions: InContextSdkMethod<Subscription['SUSHISWAP_V3_positions'], SubscriptionSUSHISWAP_V3_positionsArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_positionSnapshot: InContextSdkMethod<Subscription['SUSHISWAP_V3_positionSnapshot'], SubscriptionSUSHISWAP_V3_positionSnapshotArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_positionSnapshots: InContextSdkMethod<Subscription['SUSHISWAP_V3_positionSnapshots'], SubscriptionSUSHISWAP_V3_positionSnapshotsArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_transaction: InContextSdkMethod<Subscription['SUSHISWAP_V3_transaction'], SubscriptionSUSHISWAP_V3_transactionArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_transactions: InContextSdkMethod<Subscription['SUSHISWAP_V3_transactions'], SubscriptionSUSHISWAP_V3_transactionsArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_mint: InContextSdkMethod<Subscription['SUSHISWAP_V3_mint'], SubscriptionSUSHISWAP_V3_mintArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_mints: InContextSdkMethod<Subscription['SUSHISWAP_V3_mints'], SubscriptionSUSHISWAP_V3_mintsArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_burn: InContextSdkMethod<Subscription['SUSHISWAP_V3_burn'], SubscriptionSUSHISWAP_V3_burnArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_burns: InContextSdkMethod<Subscription['SUSHISWAP_V3_burns'], SubscriptionSUSHISWAP_V3_burnsArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_swap: InContextSdkMethod<Subscription['SUSHISWAP_V3_swap'], SubscriptionSUSHISWAP_V3_swapArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_swaps: InContextSdkMethod<Subscription['SUSHISWAP_V3_swaps'], SubscriptionSUSHISWAP_V3_swapsArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_collect: InContextSdkMethod<Subscription['SUSHISWAP_V3_collect'], SubscriptionSUSHISWAP_V3_collectArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_collects: InContextSdkMethod<Subscription['SUSHISWAP_V3_collects'], SubscriptionSUSHISWAP_V3_collectsArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_flash: InContextSdkMethod<Subscription['SUSHISWAP_V3_flash'], SubscriptionSUSHISWAP_V3_flashArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_flashes: InContextSdkMethod<Subscription['SUSHISWAP_V3_flashes'], SubscriptionSUSHISWAP_V3_flashesArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_uniswapDayData: InContextSdkMethod<Subscription['SUSHISWAP_V3_uniswapDayData'], SubscriptionSUSHISWAP_V3_uniswapDayDataArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_uniswapDayDatas: InContextSdkMethod<Subscription['SUSHISWAP_V3_uniswapDayDatas'], SubscriptionSUSHISWAP_V3_uniswapDayDatasArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_poolDayData: InContextSdkMethod<Subscription['SUSHISWAP_V3_poolDayData'], SubscriptionSUSHISWAP_V3_poolDayDataArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_poolDayDatas: InContextSdkMethod<Subscription['SUSHISWAP_V3_poolDayDatas'], SubscriptionSUSHISWAP_V3_poolDayDatasArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_poolHourData: InContextSdkMethod<Subscription['SUSHISWAP_V3_poolHourData'], SubscriptionSUSHISWAP_V3_poolHourDataArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_poolHourDatas: InContextSdkMethod<Subscription['SUSHISWAP_V3_poolHourDatas'], SubscriptionSUSHISWAP_V3_poolHourDatasArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tickHourData: InContextSdkMethod<Subscription['SUSHISWAP_V3_tickHourData'], SubscriptionSUSHISWAP_V3_tickHourDataArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tickHourDatas: InContextSdkMethod<Subscription['SUSHISWAP_V3_tickHourDatas'], SubscriptionSUSHISWAP_V3_tickHourDatasArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tickDayData: InContextSdkMethod<Subscription['SUSHISWAP_V3_tickDayData'], SubscriptionSUSHISWAP_V3_tickDayDataArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tickDayDatas: InContextSdkMethod<Subscription['SUSHISWAP_V3_tickDayDatas'], SubscriptionSUSHISWAP_V3_tickDayDatasArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tokenDayData: InContextSdkMethod<Subscription['SUSHISWAP_V3_tokenDayData'], SubscriptionSUSHISWAP_V3_tokenDayDataArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tokenDayDatas: InContextSdkMethod<Subscription['SUSHISWAP_V3_tokenDayDatas'], SubscriptionSUSHISWAP_V3_tokenDayDatasArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tokenHourData: InContextSdkMethod<Subscription['SUSHISWAP_V3_tokenHourData'], SubscriptionSUSHISWAP_V3_tokenHourDataArgs, MeshContext>,
  /** null **/
  SUSHISWAP_V3_tokenHourDatas: InContextSdkMethod<Subscription['SUSHISWAP_V3_tokenHourDatas'], SubscriptionSUSHISWAP_V3_tokenHourDatasArgs, MeshContext>,
  /** Access to subgraph metadata **/
  SUSHISWAP_V3__meta: InContextSdkMethod<Subscription['SUSHISWAP_V3__meta'], SubscriptionSUSHISWAP_V3__metaArgs, MeshContext>
  };

  export type Context = {
      ["SushiSwapV3"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      ["subgraphHost"]: Scalars['ID'],
["subgraphName"]: Scalars['ID']
    };
}
