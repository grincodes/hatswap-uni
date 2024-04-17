// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ConcentratedTypes {
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
  CONCENTRATED_BigDecimal: any;
  BigInt: any;
  CONCENTRATED_Bytes: any;
  CONCENTRATED_Int8: any;
  Timestamp: any;
};

export type CONCENTRATED_Aggregation_interval =
  | 'hour'
  | 'day';

export type CONCENTRATED_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type CONCENTRATED_Block_height = {
  hash?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type CONCENTRATED_Bundle = {
  id: Scalars['ID'];
  ethPriceUSD: Scalars['CONCENTRATED_BigDecimal'];
};

export type CONCENTRATED_Bundle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ethPriceUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  ethPriceUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  ethPriceUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  ethPriceUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  ethPriceUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  ethPriceUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  ethPriceUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  ethPriceUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_Bundle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_Bundle_filter>>>;
};

export type CONCENTRATED_Bundle_orderBy =
  | 'id'
  | 'ethPriceUSD';

export type CONCENTRATED_Burn = {
  id: Scalars['ID'];
  transaction: CONCENTRATED_Transaction;
  pool: CONCENTRATED_Pool;
  token0: CONCENTRATED_Token;
  token1: CONCENTRATED_Token;
  timestamp: Scalars['BigInt'];
  owner?: Maybe<Scalars['CONCENTRATED_Bytes']>;
  origin: Scalars['CONCENTRATED_Bytes'];
  amount: Scalars['BigInt'];
  amount0: Scalars['CONCENTRATED_BigDecimal'];
  amount1: Scalars['CONCENTRATED_BigDecimal'];
  amountUSD?: Maybe<Scalars['CONCENTRATED_BigDecimal']>;
  tickLower: Scalars['BigInt'];
  tickUpper: Scalars['BigInt'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type CONCENTRATED_Burn_filter = {
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
  transaction_?: InputMaybe<CONCENTRATED_Transaction_filter>;
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
  pool_?: InputMaybe<CONCENTRATED_Pool_filter>;
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
  token0_?: InputMaybe<CONCENTRATED_Token_filter>;
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
  token1_?: InputMaybe<CONCENTRATED_Token_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_not?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_gt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_lt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_gte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_lte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_not?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_gt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_lt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_gte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_lte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  origin_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  origin_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
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
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_Burn_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_Burn_filter>>>;
};

export type CONCENTRATED_Burn_orderBy =
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

export type CONCENTRATED_Collect = {
  id: Scalars['ID'];
  transaction: CONCENTRATED_Transaction;
  timestamp: Scalars['BigInt'];
  pool: CONCENTRATED_Pool;
  owner?: Maybe<Scalars['CONCENTRATED_Bytes']>;
  amount0: Scalars['CONCENTRATED_BigDecimal'];
  amount1: Scalars['CONCENTRATED_BigDecimal'];
  amountUSD?: Maybe<Scalars['CONCENTRATED_BigDecimal']>;
  tickLower: Scalars['BigInt'];
  tickUpper: Scalars['BigInt'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type CONCENTRATED_Collect_filter = {
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
  transaction_?: InputMaybe<CONCENTRATED_Transaction_filter>;
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
  pool_?: InputMaybe<CONCENTRATED_Pool_filter>;
  owner?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_not?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_gt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_lt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_gte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_lte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  amount0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
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
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_Collect_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_Collect_filter>>>;
};

export type CONCENTRATED_Collect_orderBy =
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

export type CONCENTRATED_Factory = {
  id: Scalars['ID'];
  poolCount: Scalars['BigInt'];
  txCount: Scalars['BigInt'];
  totalVolumeUSD: Scalars['CONCENTRATED_BigDecimal'];
  totalVolumeETH: Scalars['CONCENTRATED_BigDecimal'];
  totalFeesUSD: Scalars['CONCENTRATED_BigDecimal'];
  totalFeesETH: Scalars['CONCENTRATED_BigDecimal'];
  untrackedVolumeUSD: Scalars['CONCENTRATED_BigDecimal'];
  totalValueLockedUSD: Scalars['CONCENTRATED_BigDecimal'];
  totalValueLockedETH: Scalars['CONCENTRATED_BigDecimal'];
  totalValueLockedUSDUntracked: Scalars['CONCENTRATED_BigDecimal'];
  totalValueLockedETHUntracked: Scalars['CONCENTRATED_BigDecimal'];
  owner: Scalars['ID'];
};

export type CONCENTRATED_Factory_filter = {
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
  totalVolumeUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalVolumeETH?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalVolumeETH_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalVolumeETH_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalVolumeETH_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalVolumeETH_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalVolumeETH_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalVolumeETH_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalVolumeETH_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalFeesUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalFeesUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalFeesUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalFeesUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalFeesUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalFeesUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalFeesUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalFeesUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalFeesETH?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalFeesETH_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalFeesETH_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalFeesETH_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalFeesETH_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalFeesETH_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalFeesETH_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalFeesETH_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedETH?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETH_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETH_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETH_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETH_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETH_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETH_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedETH_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedETHUntracked?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETHUntracked_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETHUntracked_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETHUntracked_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETHUntracked_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETHUntracked_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETHUntracked_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedETHUntracked_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  owner?: InputMaybe<Scalars['ID']>;
  owner_not?: InputMaybe<Scalars['ID']>;
  owner_gt?: InputMaybe<Scalars['ID']>;
  owner_lt?: InputMaybe<Scalars['ID']>;
  owner_gte?: InputMaybe<Scalars['ID']>;
  owner_lte?: InputMaybe<Scalars['ID']>;
  owner_in?: InputMaybe<Array<Scalars['ID']>>;
  owner_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_Factory_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_Factory_filter>>>;
};

export type CONCENTRATED_Factory_orderBy =
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

export type CONCENTRATED_Flash = {
  id: Scalars['ID'];
  transaction: CONCENTRATED_Transaction;
  timestamp: Scalars['BigInt'];
  pool: CONCENTRATED_Pool;
  sender: Scalars['CONCENTRATED_Bytes'];
  recipient: Scalars['CONCENTRATED_Bytes'];
  amount0: Scalars['CONCENTRATED_BigDecimal'];
  amount1: Scalars['CONCENTRATED_BigDecimal'];
  amountUSD: Scalars['CONCENTRATED_BigDecimal'];
  amount0Paid: Scalars['CONCENTRATED_BigDecimal'];
  amount1Paid: Scalars['CONCENTRATED_BigDecimal'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type CONCENTRATED_Flash_filter = {
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
  transaction_?: InputMaybe<CONCENTRATED_Transaction_filter>;
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
  pool_?: InputMaybe<CONCENTRATED_Pool_filter>;
  sender?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_not?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_gt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_lt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_gte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_lte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  sender_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  recipient?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  recipient_not?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  recipient_gt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  recipient_lt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  recipient_gte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  recipient_lte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  amount0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount0Paid?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0Paid_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0Paid_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0Paid_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0Paid_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0Paid_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0Paid_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount0Paid_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount1Paid?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1Paid_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1Paid_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1Paid_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1Paid_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1Paid_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1Paid_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount1Paid_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_Flash_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_Flash_filter>>>;
};

export type CONCENTRATED_Flash_orderBy =
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

export type CONCENTRATED_Mint = {
  id: Scalars['ID'];
  transaction: CONCENTRATED_Transaction;
  timestamp: Scalars['BigInt'];
  pool: CONCENTRATED_Pool;
  token0: CONCENTRATED_Token;
  token1: CONCENTRATED_Token;
  owner: Scalars['CONCENTRATED_Bytes'];
  sender?: Maybe<Scalars['CONCENTRATED_Bytes']>;
  origin: Scalars['CONCENTRATED_Bytes'];
  amount: Scalars['BigInt'];
  amount0: Scalars['CONCENTRATED_BigDecimal'];
  amount1: Scalars['CONCENTRATED_BigDecimal'];
  amountUSD?: Maybe<Scalars['CONCENTRATED_BigDecimal']>;
  tickLower: Scalars['BigInt'];
  tickUpper: Scalars['BigInt'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type CONCENTRATED_Mint_filter = {
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
  transaction_?: InputMaybe<CONCENTRATED_Transaction_filter>;
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
  pool_?: InputMaybe<CONCENTRATED_Pool_filter>;
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
  token0_?: InputMaybe<CONCENTRATED_Token_filter>;
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
  token1_?: InputMaybe<CONCENTRATED_Token_filter>;
  owner?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_not?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_gt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_lt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_gte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_lte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_not?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_gt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_lt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_gte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_lte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  sender_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_not?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_gt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_lt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_gte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_lte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  origin_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  origin_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
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
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_Mint_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_Mint_filter>>>;
};

export type CONCENTRATED_Mint_orderBy =
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
export type CONCENTRATED_OrderDirection =
  | 'asc'
  | 'desc';

export type CONCENTRATED_Pool = {
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  token0: CONCENTRATED_Token;
  token1: CONCENTRATED_Token;
  feeTier: Scalars['BigInt'];
  liquidity: Scalars['BigInt'];
  sqrtPrice: Scalars['BigInt'];
  feeGrowthGlobal0X128: Scalars['BigInt'];
  feeGrowthGlobal1X128: Scalars['BigInt'];
  token0Price: Scalars['CONCENTRATED_BigDecimal'];
  token1Price: Scalars['CONCENTRATED_BigDecimal'];
  tick?: Maybe<Scalars['BigInt']>;
  observationIndex: Scalars['BigInt'];
  volumeToken0: Scalars['CONCENTRATED_BigDecimal'];
  volumeToken1: Scalars['CONCENTRATED_BigDecimal'];
  volumeUSD: Scalars['CONCENTRATED_BigDecimal'];
  untrackedVolumeUSD: Scalars['CONCENTRATED_BigDecimal'];
  feesUSD: Scalars['CONCENTRATED_BigDecimal'];
  txCount: Scalars['BigInt'];
  collectedFeesToken0: Scalars['CONCENTRATED_BigDecimal'];
  collectedFeesToken1: Scalars['CONCENTRATED_BigDecimal'];
  collectedFeesUSD: Scalars['CONCENTRATED_BigDecimal'];
  totalValueLockedToken0: Scalars['CONCENTRATED_BigDecimal'];
  totalValueLockedToken1: Scalars['CONCENTRATED_BigDecimal'];
  totalValueLockedETH: Scalars['CONCENTRATED_BigDecimal'];
  totalValueLockedUSD: Scalars['CONCENTRATED_BigDecimal'];
  totalValueLockedUSDUntracked: Scalars['CONCENTRATED_BigDecimal'];
  liquidityProviderCount: Scalars['BigInt'];
  poolHourData: Array<CONCENTRATED_PoolHourData>;
  poolDayData: Array<CONCENTRATED_PoolDayData>;
  mints: Array<CONCENTRATED_Mint>;
  burns: Array<CONCENTRATED_Burn>;
  swaps: Array<CONCENTRATED_Swap>;
  collects: Array<CONCENTRATED_Collect>;
  ticks: Array<CONCENTRATED_Tick>;
};


export type CONCENTRATED_PoolpoolHourDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_PoolHourData_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_PoolHourData_filter>;
};


export type CONCENTRATED_PoolpoolDayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_PoolDayData_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_PoolDayData_filter>;
};


export type CONCENTRATED_PoolmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Mint_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Mint_filter>;
};


export type CONCENTRATED_PoolburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Burn_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Burn_filter>;
};


export type CONCENTRATED_PoolswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Swap_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Swap_filter>;
};


export type CONCENTRATED_PoolcollectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Collect_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Collect_filter>;
};


export type CONCENTRATED_PoolticksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Tick_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Tick_filter>;
};

export type CONCENTRATED_PoolDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  pool: CONCENTRATED_Pool;
  liquidity: Scalars['BigInt'];
  sqrtPrice: Scalars['BigInt'];
  token0Price: Scalars['CONCENTRATED_BigDecimal'];
  token1Price: Scalars['CONCENTRATED_BigDecimal'];
  tick?: Maybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128: Scalars['BigInt'];
  feeGrowthGlobal1X128: Scalars['BigInt'];
  tvlUSD: Scalars['CONCENTRATED_BigDecimal'];
  volumeToken0: Scalars['CONCENTRATED_BigDecimal'];
  volumeToken1: Scalars['CONCENTRATED_BigDecimal'];
  volumeUSD: Scalars['CONCENTRATED_BigDecimal'];
  feesUSD: Scalars['CONCENTRATED_BigDecimal'];
  txCount: Scalars['BigInt'];
  open: Scalars['CONCENTRATED_BigDecimal'];
  high: Scalars['CONCENTRATED_BigDecimal'];
  low: Scalars['CONCENTRATED_BigDecimal'];
  close: Scalars['CONCENTRATED_BigDecimal'];
};

export type CONCENTRATED_PoolDayData_filter = {
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
  pool_?: InputMaybe<CONCENTRATED_Pool_filter>;
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
  token0Price?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
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
  tvlUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  open?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  high?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  low?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  close?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_PoolDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_PoolDayData_filter>>>;
};

export type CONCENTRATED_PoolDayData_orderBy =
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

export type CONCENTRATED_PoolHourData = {
  id: Scalars['ID'];
  periodStartUnix: Scalars['Int'];
  pool: CONCENTRATED_Pool;
  liquidity: Scalars['BigInt'];
  sqrtPrice: Scalars['BigInt'];
  token0Price: Scalars['CONCENTRATED_BigDecimal'];
  token1Price: Scalars['CONCENTRATED_BigDecimal'];
  tick?: Maybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128: Scalars['BigInt'];
  feeGrowthGlobal1X128: Scalars['BigInt'];
  tvlUSD: Scalars['CONCENTRATED_BigDecimal'];
  volumeToken0: Scalars['CONCENTRATED_BigDecimal'];
  volumeToken1: Scalars['CONCENTRATED_BigDecimal'];
  volumeUSD: Scalars['CONCENTRATED_BigDecimal'];
  feesUSD: Scalars['CONCENTRATED_BigDecimal'];
  txCount: Scalars['BigInt'];
  open: Scalars['CONCENTRATED_BigDecimal'];
  high: Scalars['CONCENTRATED_BigDecimal'];
  low: Scalars['CONCENTRATED_BigDecimal'];
  close: Scalars['CONCENTRATED_BigDecimal'];
};

export type CONCENTRATED_PoolHourData_filter = {
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
  pool_?: InputMaybe<CONCENTRATED_Pool_filter>;
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
  token0Price?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
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
  tvlUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  open?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  high?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  low?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  close?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_PoolHourData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_PoolHourData_filter>>>;
};

export type CONCENTRATED_PoolHourData_orderBy =
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

export type CONCENTRATED_Pool_filter = {
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
  token0_?: InputMaybe<CONCENTRATED_Token_filter>;
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
  token1_?: InputMaybe<CONCENTRATED_Token_filter>;
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
  token0Price?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
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
  volumeToken0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collectedFeesToken0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedToken0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedToken0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedToken0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedToken0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedToken0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedToken0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedToken0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedToken0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedToken1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedToken1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedToken1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedToken1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedToken1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedToken1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedToken1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedToken1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedETH?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETH_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETH_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETH_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETH_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETH_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedETH_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedETH_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolHourData_?: InputMaybe<CONCENTRATED_PoolHourData_filter>;
  poolDayData_?: InputMaybe<CONCENTRATED_PoolDayData_filter>;
  mints_?: InputMaybe<CONCENTRATED_Mint_filter>;
  burns_?: InputMaybe<CONCENTRATED_Burn_filter>;
  swaps_?: InputMaybe<CONCENTRATED_Swap_filter>;
  collects_?: InputMaybe<CONCENTRATED_Collect_filter>;
  ticks_?: InputMaybe<CONCENTRATED_Tick_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_Pool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_Pool_filter>>>;
};

export type CONCENTRATED_Pool_orderBy =
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

export type CONCENTRATED_Position = {
  id: Scalars['ID'];
  owner: Scalars['CONCENTRATED_Bytes'];
  pool: CONCENTRATED_Pool;
  token0: CONCENTRATED_Token;
  token1: CONCENTRATED_Token;
  tickLower: CONCENTRATED_Tick;
  tickUpper: CONCENTRATED_Tick;
  liquidity: Scalars['BigInt'];
  depositedToken0: Scalars['CONCENTRATED_BigDecimal'];
  depositedToken1: Scalars['CONCENTRATED_BigDecimal'];
  withdrawnToken0: Scalars['CONCENTRATED_BigDecimal'];
  withdrawnToken1: Scalars['CONCENTRATED_BigDecimal'];
  collectedFeesToken0: Scalars['CONCENTRATED_BigDecimal'];
  collectedFeesToken1: Scalars['CONCENTRATED_BigDecimal'];
  transaction: CONCENTRATED_Transaction;
  feeGrowthInside0LastX128: Scalars['BigInt'];
  feeGrowthInside1LastX128: Scalars['BigInt'];
};

export type CONCENTRATED_PositionSnapshot = {
  id: Scalars['ID'];
  owner: Scalars['CONCENTRATED_Bytes'];
  pool: CONCENTRATED_Pool;
  position: CONCENTRATED_Position;
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  liquidity: Scalars['BigInt'];
  depositedToken0: Scalars['CONCENTRATED_BigDecimal'];
  depositedToken1: Scalars['CONCENTRATED_BigDecimal'];
  withdrawnToken0: Scalars['CONCENTRATED_BigDecimal'];
  withdrawnToken1: Scalars['CONCENTRATED_BigDecimal'];
  collectedFeesToken0: Scalars['CONCENTRATED_BigDecimal'];
  collectedFeesToken1: Scalars['CONCENTRATED_BigDecimal'];
  transaction: CONCENTRATED_Transaction;
  feeGrowthInside0LastX128: Scalars['BigInt'];
  feeGrowthInside1LastX128: Scalars['BigInt'];
};

export type CONCENTRATED_PositionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_not?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_gt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_lt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_gte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_lte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
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
  pool_?: InputMaybe<CONCENTRATED_Pool_filter>;
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
  position_?: InputMaybe<CONCENTRATED_Position_filter>;
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
  depositedToken0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  depositedToken0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  depositedToken1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  depositedToken1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  withdrawnToken0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  withdrawnToken0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  withdrawnToken1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  withdrawnToken1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesToken0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
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
  transaction_?: InputMaybe<CONCENTRATED_Transaction_filter>;
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
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_PositionSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_PositionSnapshot_filter>>>;
};

export type CONCENTRATED_PositionSnapshot_orderBy =
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

export type CONCENTRATED_Position_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_not?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_gt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_lt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_gte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_lte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
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
  pool_?: InputMaybe<CONCENTRATED_Pool_filter>;
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
  token0_?: InputMaybe<CONCENTRATED_Token_filter>;
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
  token1_?: InputMaybe<CONCENTRATED_Token_filter>;
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
  tickLower_?: InputMaybe<CONCENTRATED_Tick_filter>;
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
  tickUpper_?: InputMaybe<CONCENTRATED_Tick_filter>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedToken0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  depositedToken0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  depositedToken1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  depositedToken1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  depositedToken1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  withdrawnToken0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  withdrawnToken0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  withdrawnToken1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  withdrawnToken1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  withdrawnToken1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesToken0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
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
  transaction_?: InputMaybe<CONCENTRATED_Transaction_filter>;
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
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_Position_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_Position_filter>>>;
};

export type CONCENTRATED_Position_orderBy =
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
  CONCENTRATED_factory?: Maybe<CONCENTRATED_Factory>;
  CONCENTRATED_factories: Array<CONCENTRATED_Factory>;
  CONCENTRATED_bundle?: Maybe<CONCENTRATED_Bundle>;
  CONCENTRATED_bundles: Array<CONCENTRATED_Bundle>;
  CONCENTRATED_token?: Maybe<CONCENTRATED_Token>;
  CONCENTRATED_tokens: Array<CONCENTRATED_Token>;
  CONCENTRATED_pool?: Maybe<CONCENTRATED_Pool>;
  CONCENTRATED_pools: Array<CONCENTRATED_Pool>;
  CONCENTRATED_tick?: Maybe<CONCENTRATED_Tick>;
  CONCENTRATED_ticks: Array<CONCENTRATED_Tick>;
  CONCENTRATED_position?: Maybe<CONCENTRATED_Position>;
  CONCENTRATED_positions: Array<CONCENTRATED_Position>;
  CONCENTRATED_positionSnapshot?: Maybe<CONCENTRATED_PositionSnapshot>;
  CONCENTRATED_positionSnapshots: Array<CONCENTRATED_PositionSnapshot>;
  CONCENTRATED_transaction?: Maybe<CONCENTRATED_Transaction>;
  CONCENTRATED_transactions: Array<CONCENTRATED_Transaction>;
  CONCENTRATED_mint?: Maybe<CONCENTRATED_Mint>;
  CONCENTRATED_mints: Array<CONCENTRATED_Mint>;
  CONCENTRATED_burn?: Maybe<CONCENTRATED_Burn>;
  CONCENTRATED_burns: Array<CONCENTRATED_Burn>;
  CONCENTRATED_swap?: Maybe<CONCENTRATED_Swap>;
  CONCENTRATED_swaps: Array<CONCENTRATED_Swap>;
  CONCENTRATED_collect?: Maybe<CONCENTRATED_Collect>;
  CONCENTRATED_collects: Array<CONCENTRATED_Collect>;
  CONCENTRATED_flash?: Maybe<CONCENTRATED_Flash>;
  CONCENTRATED_flashes: Array<CONCENTRATED_Flash>;
  CONCENTRATED_uniswapDayData?: Maybe<CONCENTRATED_UniswapDayData>;
  CONCENTRATED_uniswapDayDatas: Array<CONCENTRATED_UniswapDayData>;
  CONCENTRATED_poolDayData?: Maybe<CONCENTRATED_PoolDayData>;
  CONCENTRATED_poolDayDatas: Array<CONCENTRATED_PoolDayData>;
  CONCENTRATED_poolHourData?: Maybe<CONCENTRATED_PoolHourData>;
  CONCENTRATED_poolHourDatas: Array<CONCENTRATED_PoolHourData>;
  CONCENTRATED_tickHourData?: Maybe<CONCENTRATED_TickHourData>;
  CONCENTRATED_tickHourDatas: Array<CONCENTRATED_TickHourData>;
  CONCENTRATED_tickDayData?: Maybe<CONCENTRATED_TickDayData>;
  CONCENTRATED_tickDayDatas: Array<CONCENTRATED_TickDayData>;
  CONCENTRATED_tokenDayData?: Maybe<CONCENTRATED_TokenDayData>;
  CONCENTRATED_tokenDayDatas: Array<CONCENTRATED_TokenDayData>;
  CONCENTRATED_tokenHourData?: Maybe<CONCENTRATED_TokenHourData>;
  CONCENTRATED_tokenHourDatas: Array<CONCENTRATED_TokenHourData>;
  /** Access to subgraph metadata */
  CONCENTRATED__meta?: Maybe<CONCENTRATED__Meta_>;
};


export type QueryCONCENTRATED_factoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_factoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Factory_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Factory_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_bundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Bundle_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Bundle_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_tokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Token_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Token_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Pool_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Pool_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_tickArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_ticksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Tick_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Tick_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_positionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_positionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Position_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Position_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_positionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_positionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_PositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_PositionSnapshot_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Transaction_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Transaction_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_mintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_mintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Mint_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Mint_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_burnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_burnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Burn_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Burn_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_swapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Swap_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Swap_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_collectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_collectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Collect_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Collect_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_flashArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_flashesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Flash_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Flash_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_uniswapDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_uniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_UniswapDayData_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_UniswapDayData_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_poolDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_poolDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_PoolDayData_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_PoolDayData_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_poolHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_poolHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_PoolHourData_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_PoolHourData_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_tickHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_tickHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_TickHourData_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_TickHourData_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_tickDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_tickDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_TickDayData_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_TickDayData_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_tokenDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_tokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_TokenDayData_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_TokenDayData_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_tokenHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED_tokenHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_TokenHourData_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_TokenHourData_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCONCENTRATED__metaArgs = {
  block?: InputMaybe<CONCENTRATED_Block_height>;
};

export type Subscription = {
  CONCENTRATED_factory?: Maybe<CONCENTRATED_Factory>;
  CONCENTRATED_factories: Array<CONCENTRATED_Factory>;
  CONCENTRATED_bundle?: Maybe<CONCENTRATED_Bundle>;
  CONCENTRATED_bundles: Array<CONCENTRATED_Bundle>;
  CONCENTRATED_token?: Maybe<CONCENTRATED_Token>;
  CONCENTRATED_tokens: Array<CONCENTRATED_Token>;
  CONCENTRATED_pool?: Maybe<CONCENTRATED_Pool>;
  CONCENTRATED_pools: Array<CONCENTRATED_Pool>;
  CONCENTRATED_tick?: Maybe<CONCENTRATED_Tick>;
  CONCENTRATED_ticks: Array<CONCENTRATED_Tick>;
  CONCENTRATED_position?: Maybe<CONCENTRATED_Position>;
  CONCENTRATED_positions: Array<CONCENTRATED_Position>;
  CONCENTRATED_positionSnapshot?: Maybe<CONCENTRATED_PositionSnapshot>;
  CONCENTRATED_positionSnapshots: Array<CONCENTRATED_PositionSnapshot>;
  CONCENTRATED_transaction?: Maybe<CONCENTRATED_Transaction>;
  CONCENTRATED_transactions: Array<CONCENTRATED_Transaction>;
  CONCENTRATED_mint?: Maybe<CONCENTRATED_Mint>;
  CONCENTRATED_mints: Array<CONCENTRATED_Mint>;
  CONCENTRATED_burn?: Maybe<CONCENTRATED_Burn>;
  CONCENTRATED_burns: Array<CONCENTRATED_Burn>;
  CONCENTRATED_swap?: Maybe<CONCENTRATED_Swap>;
  CONCENTRATED_swaps: Array<CONCENTRATED_Swap>;
  CONCENTRATED_collect?: Maybe<CONCENTRATED_Collect>;
  CONCENTRATED_collects: Array<CONCENTRATED_Collect>;
  CONCENTRATED_flash?: Maybe<CONCENTRATED_Flash>;
  CONCENTRATED_flashes: Array<CONCENTRATED_Flash>;
  CONCENTRATED_uniswapDayData?: Maybe<CONCENTRATED_UniswapDayData>;
  CONCENTRATED_uniswapDayDatas: Array<CONCENTRATED_UniswapDayData>;
  CONCENTRATED_poolDayData?: Maybe<CONCENTRATED_PoolDayData>;
  CONCENTRATED_poolDayDatas: Array<CONCENTRATED_PoolDayData>;
  CONCENTRATED_poolHourData?: Maybe<CONCENTRATED_PoolHourData>;
  CONCENTRATED_poolHourDatas: Array<CONCENTRATED_PoolHourData>;
  CONCENTRATED_tickHourData?: Maybe<CONCENTRATED_TickHourData>;
  CONCENTRATED_tickHourDatas: Array<CONCENTRATED_TickHourData>;
  CONCENTRATED_tickDayData?: Maybe<CONCENTRATED_TickDayData>;
  CONCENTRATED_tickDayDatas: Array<CONCENTRATED_TickDayData>;
  CONCENTRATED_tokenDayData?: Maybe<CONCENTRATED_TokenDayData>;
  CONCENTRATED_tokenDayDatas: Array<CONCENTRATED_TokenDayData>;
  CONCENTRATED_tokenHourData?: Maybe<CONCENTRATED_TokenHourData>;
  CONCENTRATED_tokenHourDatas: Array<CONCENTRATED_TokenHourData>;
  /** Access to subgraph metadata */
  CONCENTRATED__meta?: Maybe<CONCENTRATED__Meta_>;
};


export type SubscriptionCONCENTRATED_factoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_factoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Factory_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Factory_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_bundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Bundle_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Bundle_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_tokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Token_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Token_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Pool_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Pool_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_tickArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_ticksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Tick_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Tick_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_positionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_positionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Position_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Position_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_positionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_positionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_PositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_PositionSnapshot_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Transaction_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Transaction_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_mintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_mintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Mint_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Mint_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_burnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_burnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Burn_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Burn_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_swapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Swap_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Swap_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_collectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_collectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Collect_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Collect_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_flashArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_flashesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Flash_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Flash_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_uniswapDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_uniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_UniswapDayData_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_UniswapDayData_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_poolDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_poolDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_PoolDayData_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_PoolDayData_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_poolHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_poolHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_PoolHourData_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_PoolHourData_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_tickHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_tickHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_TickHourData_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_TickHourData_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_tickDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_tickDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_TickDayData_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_TickDayData_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_tokenDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_tokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_TokenDayData_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_TokenDayData_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_tokenHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED_tokenHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_TokenHourData_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_TokenHourData_filter>;
  block?: InputMaybe<CONCENTRATED_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCONCENTRATED__metaArgs = {
  block?: InputMaybe<CONCENTRATED_Block_height>;
};

export type CONCENTRATED_Swap = {
  id: Scalars['ID'];
  transaction: CONCENTRATED_Transaction;
  timestamp: Scalars['BigInt'];
  pool: CONCENTRATED_Pool;
  token0: CONCENTRATED_Token;
  token1: CONCENTRATED_Token;
  sender: Scalars['CONCENTRATED_Bytes'];
  recipient: Scalars['CONCENTRATED_Bytes'];
  origin: Scalars['CONCENTRATED_Bytes'];
  amount0: Scalars['CONCENTRATED_BigDecimal'];
  amount1: Scalars['CONCENTRATED_BigDecimal'];
  amountUSD: Scalars['CONCENTRATED_BigDecimal'];
  sqrtPriceX96: Scalars['BigInt'];
  tick: Scalars['BigInt'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type CONCENTRATED_Swap_filter = {
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
  transaction_?: InputMaybe<CONCENTRATED_Transaction_filter>;
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
  pool_?: InputMaybe<CONCENTRATED_Pool_filter>;
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
  token0_?: InputMaybe<CONCENTRATED_Token_filter>;
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
  token1_?: InputMaybe<CONCENTRATED_Token_filter>;
  sender?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_not?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_gt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_lt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_gte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_lte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  sender_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  recipient?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  recipient_not?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  recipient_gt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  recipient_lt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  recipient_gte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  recipient_lte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_not?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_gt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_lt?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_gte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_lte?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  origin_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_Bytes']>>;
  origin_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['CONCENTRATED_Bytes']>;
  amount0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
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
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_Swap_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_Swap_filter>>>;
};

export type CONCENTRATED_Swap_orderBy =
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

export type CONCENTRATED_Tick = {
  id: Scalars['ID'];
  poolAddress?: Maybe<Scalars['String']>;
  tickIdx: Scalars['BigInt'];
  pool: CONCENTRATED_Pool;
  liquidityGross: Scalars['BigInt'];
  liquidityNet: Scalars['BigInt'];
  price0: Scalars['CONCENTRATED_BigDecimal'];
  price1: Scalars['CONCENTRATED_BigDecimal'];
  volumeToken0: Scalars['CONCENTRATED_BigDecimal'];
  volumeToken1: Scalars['CONCENTRATED_BigDecimal'];
  volumeUSD: Scalars['CONCENTRATED_BigDecimal'];
  untrackedVolumeUSD: Scalars['CONCENTRATED_BigDecimal'];
  feesUSD: Scalars['CONCENTRATED_BigDecimal'];
  collectedFeesToken0: Scalars['CONCENTRATED_BigDecimal'];
  collectedFeesToken1: Scalars['CONCENTRATED_BigDecimal'];
  collectedFeesUSD: Scalars['CONCENTRATED_BigDecimal'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  liquidityProviderCount: Scalars['BigInt'];
  feeGrowthOutside0X128: Scalars['BigInt'];
  feeGrowthOutside1X128: Scalars['BigInt'];
};

export type CONCENTRATED_TickDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  pool: CONCENTRATED_Pool;
  tick: CONCENTRATED_Tick;
  liquidityGross: Scalars['BigInt'];
  liquidityNet: Scalars['BigInt'];
  volumeToken0: Scalars['CONCENTRATED_BigDecimal'];
  volumeToken1: Scalars['CONCENTRATED_BigDecimal'];
  volumeUSD: Scalars['CONCENTRATED_BigDecimal'];
  feesUSD: Scalars['CONCENTRATED_BigDecimal'];
  feeGrowthOutside0X128: Scalars['BigInt'];
  feeGrowthOutside1X128: Scalars['BigInt'];
};

export type CONCENTRATED_TickDayData_filter = {
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
  pool_?: InputMaybe<CONCENTRATED_Pool_filter>;
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
  tick_?: InputMaybe<CONCENTRATED_Tick_filter>;
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
  volumeToken0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
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
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_TickDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_TickDayData_filter>>>;
};

export type CONCENTRATED_TickDayData_orderBy =
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

export type CONCENTRATED_TickHourData = {
  id: Scalars['ID'];
  periodStartUnix: Scalars['Int'];
  pool: CONCENTRATED_Pool;
  tick: CONCENTRATED_Tick;
  liquidityGross: Scalars['BigInt'];
  liquidityNet: Scalars['BigInt'];
  volumeToken0: Scalars['CONCENTRATED_BigDecimal'];
  volumeToken1: Scalars['CONCENTRATED_BigDecimal'];
  volumeUSD: Scalars['CONCENTRATED_BigDecimal'];
  feesUSD: Scalars['CONCENTRATED_BigDecimal'];
};

export type CONCENTRATED_TickHourData_filter = {
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
  pool_?: InputMaybe<CONCENTRATED_Pool_filter>;
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
  tick_?: InputMaybe<CONCENTRATED_Tick_filter>;
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
  volumeToken0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_TickHourData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_TickHourData_filter>>>;
};

export type CONCENTRATED_TickHourData_orderBy =
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

export type CONCENTRATED_Tick_filter = {
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
  pool_?: InputMaybe<CONCENTRATED_Pool_filter>;
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
  price0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  price0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  price0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  price0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  price0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  price0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  price0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  price0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  price1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  price1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  price1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  price1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  price1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  price1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  price1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  price1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesToken0?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  collectedFeesUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  collectedFeesUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
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
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_Tick_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_Tick_filter>>>;
};

export type CONCENTRATED_Tick_orderBy =
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

export type CONCENTRATED_Token = {
  id: Scalars['ID'];
  symbol: Scalars['String'];
  name: Scalars['String'];
  decimals: Scalars['BigInt'];
  totalSupply: Scalars['BigInt'];
  volume: Scalars['CONCENTRATED_BigDecimal'];
  volumeUSD: Scalars['CONCENTRATED_BigDecimal'];
  untrackedVolumeUSD: Scalars['CONCENTRATED_BigDecimal'];
  feesUSD: Scalars['CONCENTRATED_BigDecimal'];
  txCount: Scalars['BigInt'];
  poolCount: Scalars['BigInt'];
  totalValueLocked: Scalars['CONCENTRATED_BigDecimal'];
  totalValueLockedUSD: Scalars['CONCENTRATED_BigDecimal'];
  totalValueLockedUSDUntracked: Scalars['CONCENTRATED_BigDecimal'];
  derivedETH: Scalars['CONCENTRATED_BigDecimal'];
  whitelistPools: Array<CONCENTRATED_Pool>;
  tokenDayData: Array<CONCENTRATED_TokenDayData>;
};


export type CONCENTRATED_TokenwhitelistPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Pool_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Pool_filter>;
};


export type CONCENTRATED_TokentokenDayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_TokenDayData_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_TokenDayData_filter>;
};

export type CONCENTRATED_TokenDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  token: CONCENTRATED_Token;
  volume: Scalars['CONCENTRATED_BigDecimal'];
  volumeUSD: Scalars['CONCENTRATED_BigDecimal'];
  untrackedVolumeUSD: Scalars['CONCENTRATED_BigDecimal'];
  totalValueLocked: Scalars['CONCENTRATED_BigDecimal'];
  totalValueLockedUSD: Scalars['CONCENTRATED_BigDecimal'];
  priceUSD: Scalars['CONCENTRATED_BigDecimal'];
  feesUSD: Scalars['CONCENTRATED_BigDecimal'];
  open: Scalars['CONCENTRATED_BigDecimal'];
  high: Scalars['CONCENTRATED_BigDecimal'];
  low: Scalars['CONCENTRATED_BigDecimal'];
  close: Scalars['CONCENTRATED_BigDecimal'];
};

export type CONCENTRATED_TokenDayData_filter = {
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
  token_?: InputMaybe<CONCENTRATED_Token_filter>;
  volume?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLocked?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  priceUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  priceUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  priceUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  priceUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  priceUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  priceUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  priceUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  open?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  high?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  low?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  close?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_TokenDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_TokenDayData_filter>>>;
};

export type CONCENTRATED_TokenDayData_orderBy =
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

export type CONCENTRATED_TokenHourData = {
  id: Scalars['ID'];
  periodStartUnix: Scalars['Int'];
  token: CONCENTRATED_Token;
  volume: Scalars['CONCENTRATED_BigDecimal'];
  volumeUSD: Scalars['CONCENTRATED_BigDecimal'];
  untrackedVolumeUSD: Scalars['CONCENTRATED_BigDecimal'];
  totalValueLocked: Scalars['CONCENTRATED_BigDecimal'];
  totalValueLockedUSD: Scalars['CONCENTRATED_BigDecimal'];
  priceUSD: Scalars['CONCENTRATED_BigDecimal'];
  feesUSD: Scalars['CONCENTRATED_BigDecimal'];
  open: Scalars['CONCENTRATED_BigDecimal'];
  high: Scalars['CONCENTRATED_BigDecimal'];
  low: Scalars['CONCENTRATED_BigDecimal'];
  close: Scalars['CONCENTRATED_BigDecimal'];
};

export type CONCENTRATED_TokenHourData_filter = {
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
  token_?: InputMaybe<CONCENTRATED_Token_filter>;
  volume?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLocked?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  priceUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  priceUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  priceUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  priceUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  priceUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  priceUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  priceUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  open?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  high?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  low?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  close?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_TokenHourData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_TokenHourData_filter>>>;
};

export type CONCENTRATED_TokenHourData_orderBy =
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

export type CONCENTRATED_Token_filter = {
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
  volume?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
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
  totalValueLocked?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  derivedETH?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  derivedETH_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  derivedETH_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  derivedETH_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  derivedETH_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  derivedETH_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  derivedETH_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  derivedETH_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  whitelistPools?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_contains?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not_contains?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_?: InputMaybe<CONCENTRATED_Pool_filter>;
  tokenDayData_?: InputMaybe<CONCENTRATED_TokenDayData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_Token_filter>>>;
};

export type CONCENTRATED_Token_orderBy =
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

export type CONCENTRATED_Transaction = {
  id: Scalars['ID'];
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  mints: Array<Maybe<CONCENTRATED_Mint>>;
  burns: Array<Maybe<CONCENTRATED_Burn>>;
  swaps: Array<Maybe<CONCENTRATED_Swap>>;
  flashed: Array<Maybe<CONCENTRATED_Flash>>;
  collects: Array<Maybe<CONCENTRATED_Collect>>;
};


export type CONCENTRATED_TransactionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Mint_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Mint_filter>;
};


export type CONCENTRATED_TransactionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Burn_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Burn_filter>;
};


export type CONCENTRATED_TransactionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Swap_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Swap_filter>;
};


export type CONCENTRATED_TransactionflashedArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Flash_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Flash_filter>;
};


export type CONCENTRATED_TransactioncollectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CONCENTRATED_Collect_orderBy>;
  orderDirection?: InputMaybe<CONCENTRATED_OrderDirection>;
  where?: InputMaybe<CONCENTRATED_Collect_filter>;
};

export type CONCENTRATED_Transaction_filter = {
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
  mints_?: InputMaybe<CONCENTRATED_Mint_filter>;
  burns_?: InputMaybe<CONCENTRATED_Burn_filter>;
  swaps_?: InputMaybe<CONCENTRATED_Swap_filter>;
  flashed_?: InputMaybe<CONCENTRATED_Flash_filter>;
  collects_?: InputMaybe<CONCENTRATED_Collect_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_Transaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_Transaction_filter>>>;
};

export type CONCENTRATED_Transaction_orderBy =
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

export type CONCENTRATED_UniswapDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  volumeETH: Scalars['CONCENTRATED_BigDecimal'];
  volumeUSD: Scalars['CONCENTRATED_BigDecimal'];
  volumeUSDUntracked: Scalars['CONCENTRATED_BigDecimal'];
  feesUSD: Scalars['CONCENTRATED_BigDecimal'];
  txCount: Scalars['BigInt'];
  tvlUSD: Scalars['CONCENTRATED_BigDecimal'];
};

export type CONCENTRATED_UniswapDayData_filter = {
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
  volumeETH?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeETH_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeETH_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeETH_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeETH_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeETH_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeETH_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSDUntracked?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSDUntracked_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSDUntracked_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSDUntracked_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSDUntracked_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSDUntracked_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  volumeUSDUntracked_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  volumeUSDUntracked_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tvlUSD?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_not?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_gt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_lt?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_gte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_lte?: InputMaybe<Scalars['CONCENTRATED_BigDecimal']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['CONCENTRATED_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<CONCENTRATED_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CONCENTRATED_UniswapDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CONCENTRATED_UniswapDayData_filter>>>;
};

export type CONCENTRATED_UniswapDayData_orderBy =
  | 'id'
  | 'date'
  | 'volumeETH'
  | 'volumeUSD'
  | 'volumeUSDUntracked'
  | 'feesUSD'
  | 'txCount'
  | 'tvlUSD';

export type CONCENTRATED__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['CONCENTRATED_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['CONCENTRATED_Bytes']>;
};

/** The type for the top-level _meta field */
export type CONCENTRATED__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: CONCENTRATED__Block_;
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
  CONCENTRATED_factory: InContextSdkMethod<Query['CONCENTRATED_factory'], QueryCONCENTRATED_factoryArgs, MeshContext>,
  /** null **/
  CONCENTRATED_factories: InContextSdkMethod<Query['CONCENTRATED_factories'], QueryCONCENTRATED_factoriesArgs, MeshContext>,
  /** null **/
  CONCENTRATED_bundle: InContextSdkMethod<Query['CONCENTRATED_bundle'], QueryCONCENTRATED_bundleArgs, MeshContext>,
  /** null **/
  CONCENTRATED_bundles: InContextSdkMethod<Query['CONCENTRATED_bundles'], QueryCONCENTRATED_bundlesArgs, MeshContext>,
  /** null **/
  CONCENTRATED_token: InContextSdkMethod<Query['CONCENTRATED_token'], QueryCONCENTRATED_tokenArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tokens: InContextSdkMethod<Query['CONCENTRATED_tokens'], QueryCONCENTRATED_tokensArgs, MeshContext>,
  /** null **/
  CONCENTRATED_pool: InContextSdkMethod<Query['CONCENTRATED_pool'], QueryCONCENTRATED_poolArgs, MeshContext>,
  /** null **/
  CONCENTRATED_pools: InContextSdkMethod<Query['CONCENTRATED_pools'], QueryCONCENTRATED_poolsArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tick: InContextSdkMethod<Query['CONCENTRATED_tick'], QueryCONCENTRATED_tickArgs, MeshContext>,
  /** null **/
  CONCENTRATED_ticks: InContextSdkMethod<Query['CONCENTRATED_ticks'], QueryCONCENTRATED_ticksArgs, MeshContext>,
  /** null **/
  CONCENTRATED_position: InContextSdkMethod<Query['CONCENTRATED_position'], QueryCONCENTRATED_positionArgs, MeshContext>,
  /** null **/
  CONCENTRATED_positions: InContextSdkMethod<Query['CONCENTRATED_positions'], QueryCONCENTRATED_positionsArgs, MeshContext>,
  /** null **/
  CONCENTRATED_positionSnapshot: InContextSdkMethod<Query['CONCENTRATED_positionSnapshot'], QueryCONCENTRATED_positionSnapshotArgs, MeshContext>,
  /** null **/
  CONCENTRATED_positionSnapshots: InContextSdkMethod<Query['CONCENTRATED_positionSnapshots'], QueryCONCENTRATED_positionSnapshotsArgs, MeshContext>,
  /** null **/
  CONCENTRATED_transaction: InContextSdkMethod<Query['CONCENTRATED_transaction'], QueryCONCENTRATED_transactionArgs, MeshContext>,
  /** null **/
  CONCENTRATED_transactions: InContextSdkMethod<Query['CONCENTRATED_transactions'], QueryCONCENTRATED_transactionsArgs, MeshContext>,
  /** null **/
  CONCENTRATED_mint: InContextSdkMethod<Query['CONCENTRATED_mint'], QueryCONCENTRATED_mintArgs, MeshContext>,
  /** null **/
  CONCENTRATED_mints: InContextSdkMethod<Query['CONCENTRATED_mints'], QueryCONCENTRATED_mintsArgs, MeshContext>,
  /** null **/
  CONCENTRATED_burn: InContextSdkMethod<Query['CONCENTRATED_burn'], QueryCONCENTRATED_burnArgs, MeshContext>,
  /** null **/
  CONCENTRATED_burns: InContextSdkMethod<Query['CONCENTRATED_burns'], QueryCONCENTRATED_burnsArgs, MeshContext>,
  /** null **/
  CONCENTRATED_swap: InContextSdkMethod<Query['CONCENTRATED_swap'], QueryCONCENTRATED_swapArgs, MeshContext>,
  /** null **/
  CONCENTRATED_swaps: InContextSdkMethod<Query['CONCENTRATED_swaps'], QueryCONCENTRATED_swapsArgs, MeshContext>,
  /** null **/
  CONCENTRATED_collect: InContextSdkMethod<Query['CONCENTRATED_collect'], QueryCONCENTRATED_collectArgs, MeshContext>,
  /** null **/
  CONCENTRATED_collects: InContextSdkMethod<Query['CONCENTRATED_collects'], QueryCONCENTRATED_collectsArgs, MeshContext>,
  /** null **/
  CONCENTRATED_flash: InContextSdkMethod<Query['CONCENTRATED_flash'], QueryCONCENTRATED_flashArgs, MeshContext>,
  /** null **/
  CONCENTRATED_flashes: InContextSdkMethod<Query['CONCENTRATED_flashes'], QueryCONCENTRATED_flashesArgs, MeshContext>,
  /** null **/
  CONCENTRATED_uniswapDayData: InContextSdkMethod<Query['CONCENTRATED_uniswapDayData'], QueryCONCENTRATED_uniswapDayDataArgs, MeshContext>,
  /** null **/
  CONCENTRATED_uniswapDayDatas: InContextSdkMethod<Query['CONCENTRATED_uniswapDayDatas'], QueryCONCENTRATED_uniswapDayDatasArgs, MeshContext>,
  /** null **/
  CONCENTRATED_poolDayData: InContextSdkMethod<Query['CONCENTRATED_poolDayData'], QueryCONCENTRATED_poolDayDataArgs, MeshContext>,
  /** null **/
  CONCENTRATED_poolDayDatas: InContextSdkMethod<Query['CONCENTRATED_poolDayDatas'], QueryCONCENTRATED_poolDayDatasArgs, MeshContext>,
  /** null **/
  CONCENTRATED_poolHourData: InContextSdkMethod<Query['CONCENTRATED_poolHourData'], QueryCONCENTRATED_poolHourDataArgs, MeshContext>,
  /** null **/
  CONCENTRATED_poolHourDatas: InContextSdkMethod<Query['CONCENTRATED_poolHourDatas'], QueryCONCENTRATED_poolHourDatasArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tickHourData: InContextSdkMethod<Query['CONCENTRATED_tickHourData'], QueryCONCENTRATED_tickHourDataArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tickHourDatas: InContextSdkMethod<Query['CONCENTRATED_tickHourDatas'], QueryCONCENTRATED_tickHourDatasArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tickDayData: InContextSdkMethod<Query['CONCENTRATED_tickDayData'], QueryCONCENTRATED_tickDayDataArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tickDayDatas: InContextSdkMethod<Query['CONCENTRATED_tickDayDatas'], QueryCONCENTRATED_tickDayDatasArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tokenDayData: InContextSdkMethod<Query['CONCENTRATED_tokenDayData'], QueryCONCENTRATED_tokenDayDataArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tokenDayDatas: InContextSdkMethod<Query['CONCENTRATED_tokenDayDatas'], QueryCONCENTRATED_tokenDayDatasArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tokenHourData: InContextSdkMethod<Query['CONCENTRATED_tokenHourData'], QueryCONCENTRATED_tokenHourDataArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tokenHourDatas: InContextSdkMethod<Query['CONCENTRATED_tokenHourDatas'], QueryCONCENTRATED_tokenHourDatasArgs, MeshContext>,
  /** Access to subgraph metadata **/
  CONCENTRATED__meta: InContextSdkMethod<Query['CONCENTRATED__meta'], QueryCONCENTRATED__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  CONCENTRATED_factory: InContextSdkMethod<Subscription['CONCENTRATED_factory'], SubscriptionCONCENTRATED_factoryArgs, MeshContext>,
  /** null **/
  CONCENTRATED_factories: InContextSdkMethod<Subscription['CONCENTRATED_factories'], SubscriptionCONCENTRATED_factoriesArgs, MeshContext>,
  /** null **/
  CONCENTRATED_bundle: InContextSdkMethod<Subscription['CONCENTRATED_bundle'], SubscriptionCONCENTRATED_bundleArgs, MeshContext>,
  /** null **/
  CONCENTRATED_bundles: InContextSdkMethod<Subscription['CONCENTRATED_bundles'], SubscriptionCONCENTRATED_bundlesArgs, MeshContext>,
  /** null **/
  CONCENTRATED_token: InContextSdkMethod<Subscription['CONCENTRATED_token'], SubscriptionCONCENTRATED_tokenArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tokens: InContextSdkMethod<Subscription['CONCENTRATED_tokens'], SubscriptionCONCENTRATED_tokensArgs, MeshContext>,
  /** null **/
  CONCENTRATED_pool: InContextSdkMethod<Subscription['CONCENTRATED_pool'], SubscriptionCONCENTRATED_poolArgs, MeshContext>,
  /** null **/
  CONCENTRATED_pools: InContextSdkMethod<Subscription['CONCENTRATED_pools'], SubscriptionCONCENTRATED_poolsArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tick: InContextSdkMethod<Subscription['CONCENTRATED_tick'], SubscriptionCONCENTRATED_tickArgs, MeshContext>,
  /** null **/
  CONCENTRATED_ticks: InContextSdkMethod<Subscription['CONCENTRATED_ticks'], SubscriptionCONCENTRATED_ticksArgs, MeshContext>,
  /** null **/
  CONCENTRATED_position: InContextSdkMethod<Subscription['CONCENTRATED_position'], SubscriptionCONCENTRATED_positionArgs, MeshContext>,
  /** null **/
  CONCENTRATED_positions: InContextSdkMethod<Subscription['CONCENTRATED_positions'], SubscriptionCONCENTRATED_positionsArgs, MeshContext>,
  /** null **/
  CONCENTRATED_positionSnapshot: InContextSdkMethod<Subscription['CONCENTRATED_positionSnapshot'], SubscriptionCONCENTRATED_positionSnapshotArgs, MeshContext>,
  /** null **/
  CONCENTRATED_positionSnapshots: InContextSdkMethod<Subscription['CONCENTRATED_positionSnapshots'], SubscriptionCONCENTRATED_positionSnapshotsArgs, MeshContext>,
  /** null **/
  CONCENTRATED_transaction: InContextSdkMethod<Subscription['CONCENTRATED_transaction'], SubscriptionCONCENTRATED_transactionArgs, MeshContext>,
  /** null **/
  CONCENTRATED_transactions: InContextSdkMethod<Subscription['CONCENTRATED_transactions'], SubscriptionCONCENTRATED_transactionsArgs, MeshContext>,
  /** null **/
  CONCENTRATED_mint: InContextSdkMethod<Subscription['CONCENTRATED_mint'], SubscriptionCONCENTRATED_mintArgs, MeshContext>,
  /** null **/
  CONCENTRATED_mints: InContextSdkMethod<Subscription['CONCENTRATED_mints'], SubscriptionCONCENTRATED_mintsArgs, MeshContext>,
  /** null **/
  CONCENTRATED_burn: InContextSdkMethod<Subscription['CONCENTRATED_burn'], SubscriptionCONCENTRATED_burnArgs, MeshContext>,
  /** null **/
  CONCENTRATED_burns: InContextSdkMethod<Subscription['CONCENTRATED_burns'], SubscriptionCONCENTRATED_burnsArgs, MeshContext>,
  /** null **/
  CONCENTRATED_swap: InContextSdkMethod<Subscription['CONCENTRATED_swap'], SubscriptionCONCENTRATED_swapArgs, MeshContext>,
  /** null **/
  CONCENTRATED_swaps: InContextSdkMethod<Subscription['CONCENTRATED_swaps'], SubscriptionCONCENTRATED_swapsArgs, MeshContext>,
  /** null **/
  CONCENTRATED_collect: InContextSdkMethod<Subscription['CONCENTRATED_collect'], SubscriptionCONCENTRATED_collectArgs, MeshContext>,
  /** null **/
  CONCENTRATED_collects: InContextSdkMethod<Subscription['CONCENTRATED_collects'], SubscriptionCONCENTRATED_collectsArgs, MeshContext>,
  /** null **/
  CONCENTRATED_flash: InContextSdkMethod<Subscription['CONCENTRATED_flash'], SubscriptionCONCENTRATED_flashArgs, MeshContext>,
  /** null **/
  CONCENTRATED_flashes: InContextSdkMethod<Subscription['CONCENTRATED_flashes'], SubscriptionCONCENTRATED_flashesArgs, MeshContext>,
  /** null **/
  CONCENTRATED_uniswapDayData: InContextSdkMethod<Subscription['CONCENTRATED_uniswapDayData'], SubscriptionCONCENTRATED_uniswapDayDataArgs, MeshContext>,
  /** null **/
  CONCENTRATED_uniswapDayDatas: InContextSdkMethod<Subscription['CONCENTRATED_uniswapDayDatas'], SubscriptionCONCENTRATED_uniswapDayDatasArgs, MeshContext>,
  /** null **/
  CONCENTRATED_poolDayData: InContextSdkMethod<Subscription['CONCENTRATED_poolDayData'], SubscriptionCONCENTRATED_poolDayDataArgs, MeshContext>,
  /** null **/
  CONCENTRATED_poolDayDatas: InContextSdkMethod<Subscription['CONCENTRATED_poolDayDatas'], SubscriptionCONCENTRATED_poolDayDatasArgs, MeshContext>,
  /** null **/
  CONCENTRATED_poolHourData: InContextSdkMethod<Subscription['CONCENTRATED_poolHourData'], SubscriptionCONCENTRATED_poolHourDataArgs, MeshContext>,
  /** null **/
  CONCENTRATED_poolHourDatas: InContextSdkMethod<Subscription['CONCENTRATED_poolHourDatas'], SubscriptionCONCENTRATED_poolHourDatasArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tickHourData: InContextSdkMethod<Subscription['CONCENTRATED_tickHourData'], SubscriptionCONCENTRATED_tickHourDataArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tickHourDatas: InContextSdkMethod<Subscription['CONCENTRATED_tickHourDatas'], SubscriptionCONCENTRATED_tickHourDatasArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tickDayData: InContextSdkMethod<Subscription['CONCENTRATED_tickDayData'], SubscriptionCONCENTRATED_tickDayDataArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tickDayDatas: InContextSdkMethod<Subscription['CONCENTRATED_tickDayDatas'], SubscriptionCONCENTRATED_tickDayDatasArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tokenDayData: InContextSdkMethod<Subscription['CONCENTRATED_tokenDayData'], SubscriptionCONCENTRATED_tokenDayDataArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tokenDayDatas: InContextSdkMethod<Subscription['CONCENTRATED_tokenDayDatas'], SubscriptionCONCENTRATED_tokenDayDatasArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tokenHourData: InContextSdkMethod<Subscription['CONCENTRATED_tokenHourData'], SubscriptionCONCENTRATED_tokenHourDataArgs, MeshContext>,
  /** null **/
  CONCENTRATED_tokenHourDatas: InContextSdkMethod<Subscription['CONCENTRATED_tokenHourDatas'], SubscriptionCONCENTRATED_tokenHourDatasArgs, MeshContext>,
  /** Access to subgraph metadata **/
  CONCENTRATED__meta: InContextSdkMethod<Subscription['CONCENTRATED__meta'], SubscriptionCONCENTRATED__metaArgs, MeshContext>
  };

  export type Context = {
      ["Concentrated"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      ["subgraphHost"]: Scalars['ID'],
["subgraphName"]: Scalars['ID']
    };
}
