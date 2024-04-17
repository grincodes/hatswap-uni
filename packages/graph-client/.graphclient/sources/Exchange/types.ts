// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ExchangeTypes {
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
  deprecated_BigDecimal: any;
  BigInt: any;
  deprecated_Bytes: any;
  deprecated_Int8: any;
  Timestamp: any;
};

export type deprecated_Aggregation_interval =
  | 'hour'
  | 'day';

export type deprecated_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type deprecated_Block_height = {
  hash?: InputMaybe<Scalars['deprecated_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type deprecated_Bundle = {
  id: Scalars['ID'];
  ethPrice: Scalars['deprecated_BigDecimal'];
};

export type deprecated_Bundle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ethPrice?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  ethPrice_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  ethPrice_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  ethPrice_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  ethPrice_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  ethPrice_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  ethPrice_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  ethPrice_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<deprecated_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<deprecated_Bundle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<deprecated_Bundle_filter>>>;
};

export type deprecated_Bundle_orderBy =
  | 'id'
  | 'ethPrice';

export type deprecated_Burn = {
  id: Scalars['ID'];
  transaction: deprecated_Transaction;
  timestamp: Scalars['BigInt'];
  pair: deprecated_Pair;
  liquidity: Scalars['deprecated_BigDecimal'];
  sender?: Maybe<Scalars['String']>;
  amount0?: Maybe<Scalars['deprecated_BigDecimal']>;
  amount1?: Maybe<Scalars['deprecated_BigDecimal']>;
  to?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD?: Maybe<Scalars['deprecated_BigDecimal']>;
  complete: Scalars['Boolean'];
  feeTo?: Maybe<Scalars['String']>;
  feeLiquidity?: Maybe<Scalars['deprecated_BigDecimal']>;
};

export type deprecated_Burn_filter = {
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
  transaction_?: InputMaybe<deprecated_Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<deprecated_Pair_filter>;
  liquidity?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  sender?: InputMaybe<Scalars['String']>;
  sender_not?: InputMaybe<Scalars['String']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['String']>>;
  sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  sender_contains?: InputMaybe<Scalars['String']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['String']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount0?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  complete?: InputMaybe<Scalars['Boolean']>;
  complete_not?: InputMaybe<Scalars['Boolean']>;
  complete_in?: InputMaybe<Array<Scalars['Boolean']>>;
  complete_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  feeTo?: InputMaybe<Scalars['String']>;
  feeTo_not?: InputMaybe<Scalars['String']>;
  feeTo_gt?: InputMaybe<Scalars['String']>;
  feeTo_lt?: InputMaybe<Scalars['String']>;
  feeTo_gte?: InputMaybe<Scalars['String']>;
  feeTo_lte?: InputMaybe<Scalars['String']>;
  feeTo_in?: InputMaybe<Array<Scalars['String']>>;
  feeTo_not_in?: InputMaybe<Array<Scalars['String']>>;
  feeTo_contains?: InputMaybe<Scalars['String']>;
  feeTo_contains_nocase?: InputMaybe<Scalars['String']>;
  feeTo_not_contains?: InputMaybe<Scalars['String']>;
  feeTo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  feeTo_starts_with?: InputMaybe<Scalars['String']>;
  feeTo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feeTo_not_starts_with?: InputMaybe<Scalars['String']>;
  feeTo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feeTo_ends_with?: InputMaybe<Scalars['String']>;
  feeTo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feeTo_not_ends_with?: InputMaybe<Scalars['String']>;
  feeTo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feeLiquidity?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  feeLiquidity_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  feeLiquidity_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  feeLiquidity_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  feeLiquidity_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  feeLiquidity_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  feeLiquidity_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  feeLiquidity_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<deprecated_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<deprecated_Burn_filter>>>;
  or?: InputMaybe<Array<InputMaybe<deprecated_Burn_filter>>>;
};

export type deprecated_Burn_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'timestamp'
  | 'pair'
  | 'pair__id'
  | 'pair__name'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__liquidityProviderCount'
  | 'pair__timestamp'
  | 'pair__block'
  | 'liquidity'
  | 'sender'
  | 'amount0'
  | 'amount1'
  | 'to'
  | 'logIndex'
  | 'amountUSD'
  | 'complete'
  | 'feeTo'
  | 'feeLiquidity';

export type deprecated_DayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  factory: deprecated_Factory;
  volumeETH: Scalars['deprecated_BigDecimal'];
  volumeUSD: Scalars['deprecated_BigDecimal'];
  untrackedVolume: Scalars['deprecated_BigDecimal'];
  liquidityETH: Scalars['deprecated_BigDecimal'];
  liquidityUSD: Scalars['deprecated_BigDecimal'];
  txCount: Scalars['BigInt'];
};

export type deprecated_DayData_filter = {
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
  factory?: InputMaybe<Scalars['String']>;
  factory_not?: InputMaybe<Scalars['String']>;
  factory_gt?: InputMaybe<Scalars['String']>;
  factory_lt?: InputMaybe<Scalars['String']>;
  factory_gte?: InputMaybe<Scalars['String']>;
  factory_lte?: InputMaybe<Scalars['String']>;
  factory_in?: InputMaybe<Array<Scalars['String']>>;
  factory_not_in?: InputMaybe<Array<Scalars['String']>>;
  factory_contains?: InputMaybe<Scalars['String']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_not_contains?: InputMaybe<Scalars['String']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_starts_with?: InputMaybe<Scalars['String']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_starts_with?: InputMaybe<Scalars['String']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_ends_with?: InputMaybe<Scalars['String']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_?: InputMaybe<deprecated_Factory_filter>;
  volumeETH?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  untrackedVolume?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolume_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolume_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolume_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolume_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolume_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolume_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  untrackedVolume_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityETH?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityETH_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<deprecated_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<deprecated_DayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<deprecated_DayData_filter>>>;
};

export type deprecated_DayData_orderBy =
  | 'id'
  | 'date'
  | 'factory'
  | 'factory__id'
  | 'factory__pairCount'
  | 'factory__volumeUSD'
  | 'factory__volumeETH'
  | 'factory__untrackedVolumeUSD'
  | 'factory__liquidityUSD'
  | 'factory__liquidityETH'
  | 'factory__txCount'
  | 'factory__tokenCount'
  | 'factory__userCount'
  | 'volumeETH'
  | 'volumeUSD'
  | 'untrackedVolume'
  | 'liquidityETH'
  | 'liquidityUSD'
  | 'txCount';

export type deprecated_Factory = {
  id: Scalars['ID'];
  pairCount: Scalars['BigInt'];
  volumeUSD: Scalars['deprecated_BigDecimal'];
  volumeETH: Scalars['deprecated_BigDecimal'];
  untrackedVolumeUSD: Scalars['deprecated_BigDecimal'];
  liquidityUSD: Scalars['deprecated_BigDecimal'];
  liquidityETH: Scalars['deprecated_BigDecimal'];
  txCount: Scalars['BigInt'];
  tokenCount: Scalars['BigInt'];
  userCount: Scalars['BigInt'];
  pairs: Array<deprecated_Pair>;
  tokens: Array<deprecated_Token>;
  hourData: Array<deprecated_HourData>;
  dayData: Array<deprecated_DayData>;
};


export type deprecated_FactorypairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Pair_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Pair_filter>;
};


export type deprecated_FactorytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Token_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Token_filter>;
};


export type deprecated_FactoryhourDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_HourData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_HourData_filter>;
};


export type deprecated_FactorydayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_DayData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_DayData_filter>;
};

export type deprecated_Factory_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pairCount?: InputMaybe<Scalars['BigInt']>;
  pairCount_not?: InputMaybe<Scalars['BigInt']>;
  pairCount_gt?: InputMaybe<Scalars['BigInt']>;
  pairCount_lt?: InputMaybe<Scalars['BigInt']>;
  pairCount_gte?: InputMaybe<Scalars['BigInt']>;
  pairCount_lte?: InputMaybe<Scalars['BigInt']>;
  pairCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pairCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeETH?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityETH?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityETH_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount?: InputMaybe<Scalars['BigInt']>;
  tokenCount_not?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount?: InputMaybe<Scalars['BigInt']>;
  userCount_not?: InputMaybe<Scalars['BigInt']>;
  userCount_gt?: InputMaybe<Scalars['BigInt']>;
  userCount_lt?: InputMaybe<Scalars['BigInt']>;
  userCount_gte?: InputMaybe<Scalars['BigInt']>;
  userCount_lte?: InputMaybe<Scalars['BigInt']>;
  userCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pairs_?: InputMaybe<deprecated_Pair_filter>;
  tokens_?: InputMaybe<deprecated_Token_filter>;
  hourData_?: InputMaybe<deprecated_HourData_filter>;
  dayData_?: InputMaybe<deprecated_DayData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<deprecated_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<deprecated_Factory_filter>>>;
  or?: InputMaybe<Array<InputMaybe<deprecated_Factory_filter>>>;
};

export type deprecated_Factory_orderBy =
  | 'id'
  | 'pairCount'
  | 'volumeUSD'
  | 'volumeETH'
  | 'untrackedVolumeUSD'
  | 'liquidityUSD'
  | 'liquidityETH'
  | 'txCount'
  | 'tokenCount'
  | 'userCount'
  | 'pairs'
  | 'tokens'
  | 'hourData'
  | 'dayData';

export type deprecated_HourData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  factory: deprecated_Factory;
  volumeETH: Scalars['deprecated_BigDecimal'];
  volumeUSD: Scalars['deprecated_BigDecimal'];
  untrackedVolume: Scalars['deprecated_BigDecimal'];
  liquidityETH: Scalars['deprecated_BigDecimal'];
  liquidityUSD: Scalars['deprecated_BigDecimal'];
  txCount: Scalars['BigInt'];
};

export type deprecated_HourData_filter = {
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
  factory?: InputMaybe<Scalars['String']>;
  factory_not?: InputMaybe<Scalars['String']>;
  factory_gt?: InputMaybe<Scalars['String']>;
  factory_lt?: InputMaybe<Scalars['String']>;
  factory_gte?: InputMaybe<Scalars['String']>;
  factory_lte?: InputMaybe<Scalars['String']>;
  factory_in?: InputMaybe<Array<Scalars['String']>>;
  factory_not_in?: InputMaybe<Array<Scalars['String']>>;
  factory_contains?: InputMaybe<Scalars['String']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_not_contains?: InputMaybe<Scalars['String']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_starts_with?: InputMaybe<Scalars['String']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_starts_with?: InputMaybe<Scalars['String']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_ends_with?: InputMaybe<Scalars['String']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_?: InputMaybe<deprecated_Factory_filter>;
  volumeETH?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  untrackedVolume?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolume_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolume_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolume_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolume_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolume_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolume_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  untrackedVolume_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityETH?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityETH_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<deprecated_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<deprecated_HourData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<deprecated_HourData_filter>>>;
};

export type deprecated_HourData_orderBy =
  | 'id'
  | 'date'
  | 'factory'
  | 'factory__id'
  | 'factory__pairCount'
  | 'factory__volumeUSD'
  | 'factory__volumeETH'
  | 'factory__untrackedVolumeUSD'
  | 'factory__liquidityUSD'
  | 'factory__liquidityETH'
  | 'factory__txCount'
  | 'factory__tokenCount'
  | 'factory__userCount'
  | 'volumeETH'
  | 'volumeUSD'
  | 'untrackedVolume'
  | 'liquidityETH'
  | 'liquidityUSD'
  | 'txCount';

export type deprecated_LiquidityPosition = {
  id: Scalars['ID'];
  user: deprecated_User;
  pair: deprecated_Pair;
  liquidityTokenBalance: Scalars['deprecated_BigDecimal'];
  snapshots: Array<deprecated_LiquidityPositionSnapshot>;
  block: Scalars['Int'];
  timestamp: Scalars['Int'];
};


export type deprecated_LiquidityPositionsnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_LiquidityPositionSnapshot_filter>;
};

export type deprecated_LiquidityPositionSnapshot = {
  id: Scalars['ID'];
  liquidityPosition: deprecated_LiquidityPosition;
  timestamp: Scalars['Int'];
  block: Scalars['Int'];
  user: deprecated_User;
  pair: deprecated_Pair;
  token0PriceUSD: Scalars['deprecated_BigDecimal'];
  token1PriceUSD: Scalars['deprecated_BigDecimal'];
  reserve0: Scalars['deprecated_BigDecimal'];
  reserve1: Scalars['deprecated_BigDecimal'];
  reserveUSD: Scalars['deprecated_BigDecimal'];
  liquidityTokenTotalSupply: Scalars['deprecated_BigDecimal'];
  liquidityTokenBalance: Scalars['deprecated_BigDecimal'];
};

export type deprecated_LiquidityPositionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidityPosition?: InputMaybe<Scalars['String']>;
  liquidityPosition_not?: InputMaybe<Scalars['String']>;
  liquidityPosition_gt?: InputMaybe<Scalars['String']>;
  liquidityPosition_lt?: InputMaybe<Scalars['String']>;
  liquidityPosition_gte?: InputMaybe<Scalars['String']>;
  liquidityPosition_lte?: InputMaybe<Scalars['String']>;
  liquidityPosition_in?: InputMaybe<Array<Scalars['String']>>;
  liquidityPosition_not_in?: InputMaybe<Array<Scalars['String']>>;
  liquidityPosition_contains?: InputMaybe<Scalars['String']>;
  liquidityPosition_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_contains?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_starts_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_starts_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_ends_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_ends_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_?: InputMaybe<deprecated_LiquidityPosition_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  block?: InputMaybe<Scalars['Int']>;
  block_not?: InputMaybe<Scalars['Int']>;
  block_gt?: InputMaybe<Scalars['Int']>;
  block_lt?: InputMaybe<Scalars['Int']>;
  block_gte?: InputMaybe<Scalars['Int']>;
  block_lte?: InputMaybe<Scalars['Int']>;
  block_in?: InputMaybe<Array<Scalars['Int']>>;
  block_not_in?: InputMaybe<Array<Scalars['Int']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<deprecated_User_filter>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<deprecated_Pair_filter>;
  token0PriceUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token0PriceUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token0PriceUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token0PriceUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token0PriceUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token0PriceUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token0PriceUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  token0PriceUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  token1PriceUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token1PriceUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token1PriceUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token1PriceUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token1PriceUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token1PriceUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token1PriceUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  token1PriceUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserve0?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserve1?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserveUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityTokenTotalSupply?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenTotalSupply_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenTotalSupply_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenTotalSupply_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenTotalSupply_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenTotalSupply_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenTotalSupply_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityTokenTotalSupply_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityTokenBalance?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenBalance_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenBalance_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenBalance_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenBalance_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenBalance_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<deprecated_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<deprecated_LiquidityPositionSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<deprecated_LiquidityPositionSnapshot_filter>>>;
};

export type deprecated_LiquidityPositionSnapshot_orderBy =
  | 'id'
  | 'liquidityPosition'
  | 'liquidityPosition__id'
  | 'liquidityPosition__liquidityTokenBalance'
  | 'liquidityPosition__block'
  | 'liquidityPosition__timestamp'
  | 'timestamp'
  | 'block'
  | 'user'
  | 'user__id'
  | 'pair'
  | 'pair__id'
  | 'pair__name'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__liquidityProviderCount'
  | 'pair__timestamp'
  | 'pair__block'
  | 'token0PriceUSD'
  | 'token1PriceUSD'
  | 'reserve0'
  | 'reserve1'
  | 'reserveUSD'
  | 'liquidityTokenTotalSupply'
  | 'liquidityTokenBalance';

export type deprecated_LiquidityPosition_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<deprecated_User_filter>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<deprecated_Pair_filter>;
  liquidityTokenBalance?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenBalance_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenBalance_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenBalance_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenBalance_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenBalance_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  snapshots_?: InputMaybe<deprecated_LiquidityPositionSnapshot_filter>;
  block?: InputMaybe<Scalars['Int']>;
  block_not?: InputMaybe<Scalars['Int']>;
  block_gt?: InputMaybe<Scalars['Int']>;
  block_lt?: InputMaybe<Scalars['Int']>;
  block_gte?: InputMaybe<Scalars['Int']>;
  block_lte?: InputMaybe<Scalars['Int']>;
  block_in?: InputMaybe<Array<Scalars['Int']>>;
  block_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<deprecated_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<deprecated_LiquidityPosition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<deprecated_LiquidityPosition_filter>>>;
};

export type deprecated_LiquidityPosition_orderBy =
  | 'id'
  | 'user'
  | 'user__id'
  | 'pair'
  | 'pair__id'
  | 'pair__name'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__liquidityProviderCount'
  | 'pair__timestamp'
  | 'pair__block'
  | 'liquidityTokenBalance'
  | 'snapshots'
  | 'block'
  | 'timestamp';

export type deprecated_Mint = {
  id: Scalars['ID'];
  transaction: deprecated_Transaction;
  timestamp: Scalars['BigInt'];
  pair: deprecated_Pair;
  to: Scalars['String'];
  liquidity: Scalars['deprecated_BigDecimal'];
  sender?: Maybe<Scalars['deprecated_Bytes']>;
  amount0?: Maybe<Scalars['deprecated_BigDecimal']>;
  amount1?: Maybe<Scalars['deprecated_BigDecimal']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD?: Maybe<Scalars['deprecated_BigDecimal']>;
  feeTo?: Maybe<Scalars['deprecated_Bytes']>;
  feeLiquidity?: Maybe<Scalars['deprecated_BigDecimal']>;
};

export type deprecated_Mint_filter = {
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
  transaction_?: InputMaybe<deprecated_Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<deprecated_Pair_filter>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidity?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  sender?: InputMaybe<Scalars['deprecated_Bytes']>;
  sender_not?: InputMaybe<Scalars['deprecated_Bytes']>;
  sender_gt?: InputMaybe<Scalars['deprecated_Bytes']>;
  sender_lt?: InputMaybe<Scalars['deprecated_Bytes']>;
  sender_gte?: InputMaybe<Scalars['deprecated_Bytes']>;
  sender_lte?: InputMaybe<Scalars['deprecated_Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['deprecated_Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['deprecated_Bytes']>>;
  sender_contains?: InputMaybe<Scalars['deprecated_Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['deprecated_Bytes']>;
  amount0?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  feeTo?: InputMaybe<Scalars['deprecated_Bytes']>;
  feeTo_not?: InputMaybe<Scalars['deprecated_Bytes']>;
  feeTo_gt?: InputMaybe<Scalars['deprecated_Bytes']>;
  feeTo_lt?: InputMaybe<Scalars['deprecated_Bytes']>;
  feeTo_gte?: InputMaybe<Scalars['deprecated_Bytes']>;
  feeTo_lte?: InputMaybe<Scalars['deprecated_Bytes']>;
  feeTo_in?: InputMaybe<Array<Scalars['deprecated_Bytes']>>;
  feeTo_not_in?: InputMaybe<Array<Scalars['deprecated_Bytes']>>;
  feeTo_contains?: InputMaybe<Scalars['deprecated_Bytes']>;
  feeTo_not_contains?: InputMaybe<Scalars['deprecated_Bytes']>;
  feeLiquidity?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  feeLiquidity_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  feeLiquidity_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  feeLiquidity_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  feeLiquidity_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  feeLiquidity_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  feeLiquidity_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  feeLiquidity_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<deprecated_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<deprecated_Mint_filter>>>;
  or?: InputMaybe<Array<InputMaybe<deprecated_Mint_filter>>>;
};

export type deprecated_Mint_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'timestamp'
  | 'pair'
  | 'pair__id'
  | 'pair__name'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__liquidityProviderCount'
  | 'pair__timestamp'
  | 'pair__block'
  | 'to'
  | 'liquidity'
  | 'sender'
  | 'amount0'
  | 'amount1'
  | 'logIndex'
  | 'amountUSD'
  | 'feeTo'
  | 'feeLiquidity';

/** Defines the order direction, either ascending or descending */
export type deprecated_OrderDirection =
  | 'asc'
  | 'desc';

export type deprecated_Pair = {
  id: Scalars['ID'];
  factory: deprecated_Factory;
  name: Scalars['String'];
  token0: deprecated_Token;
  token1: deprecated_Token;
  reserve0: Scalars['deprecated_BigDecimal'];
  reserve1: Scalars['deprecated_BigDecimal'];
  totalSupply: Scalars['deprecated_BigDecimal'];
  reserveETH: Scalars['deprecated_BigDecimal'];
  reserveUSD: Scalars['deprecated_BigDecimal'];
  trackedReserveETH: Scalars['deprecated_BigDecimal'];
  token0Price: Scalars['deprecated_BigDecimal'];
  token1Price: Scalars['deprecated_BigDecimal'];
  volumeToken0: Scalars['deprecated_BigDecimal'];
  volumeToken1: Scalars['deprecated_BigDecimal'];
  volumeUSD: Scalars['deprecated_BigDecimal'];
  untrackedVolumeUSD: Scalars['deprecated_BigDecimal'];
  txCount: Scalars['BigInt'];
  liquidityProviderCount: Scalars['BigInt'];
  liquidityPositions: Array<deprecated_LiquidityPosition>;
  liquidityPositionSnapshots: Array<deprecated_LiquidityPositionSnapshot>;
  dayData: Array<deprecated_PairDayData>;
  hourData: Array<deprecated_PairHourData>;
  mints: Array<deprecated_Mint>;
  burns: Array<deprecated_Burn>;
  swaps: Array<deprecated_Swap>;
  timestamp: Scalars['BigInt'];
  block: Scalars['BigInt'];
};


export type deprecated_PairliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_LiquidityPosition_filter>;
};


export type deprecated_PairliquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_LiquidityPositionSnapshot_filter>;
};


export type deprecated_PairdayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_PairDayData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_PairDayData_filter>;
};


export type deprecated_PairhourDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_PairHourData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_PairHourData_filter>;
};


export type deprecated_PairmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Mint_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Mint_filter>;
};


export type deprecated_PairburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Burn_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Burn_filter>;
};


export type deprecated_PairswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Swap_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Swap_filter>;
};

export type deprecated_PairDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  pair: deprecated_Pair;
  token0: deprecated_Token;
  token1: deprecated_Token;
  reserve0: Scalars['deprecated_BigDecimal'];
  reserve1: Scalars['deprecated_BigDecimal'];
  totalSupply: Scalars['deprecated_BigDecimal'];
  reserveUSD: Scalars['deprecated_BigDecimal'];
  volumeToken0: Scalars['deprecated_BigDecimal'];
  volumeToken1: Scalars['deprecated_BigDecimal'];
  volumeUSD: Scalars['deprecated_BigDecimal'];
  txCount: Scalars['BigInt'];
};

export type deprecated_PairDayData_filter = {
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
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<deprecated_Pair_filter>;
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
  token0_?: InputMaybe<deprecated_Token_filter>;
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
  token1_?: InputMaybe<deprecated_Token_filter>;
  reserve0?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserve1?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  totalSupply?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  totalSupply_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  totalSupply_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  totalSupply_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  totalSupply_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  totalSupply_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  totalSupply_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserveUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<deprecated_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<deprecated_PairDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<deprecated_PairDayData_filter>>>;
};

export type deprecated_PairDayData_orderBy =
  | 'id'
  | 'date'
  | 'pair'
  | 'pair__id'
  | 'pair__name'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__liquidityProviderCount'
  | 'pair__timestamp'
  | 'pair__block'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__symbolSuccess'
  | 'token0__name'
  | 'token0__nameSuccess'
  | 'token0__decimals'
  | 'token0__decimalsSuccess'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__txCount'
  | 'token0__liquidity'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__symbolSuccess'
  | 'token1__name'
  | 'token1__nameSuccess'
  | 'token1__decimals'
  | 'token1__decimalsSuccess'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__txCount'
  | 'token1__liquidity'
  | 'token1__derivedETH'
  | 'reserve0'
  | 'reserve1'
  | 'totalSupply'
  | 'reserveUSD'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'txCount';

export type deprecated_PairHourData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  pair: deprecated_Pair;
  reserve0: Scalars['deprecated_BigDecimal'];
  reserve1: Scalars['deprecated_BigDecimal'];
  reserveUSD: Scalars['deprecated_BigDecimal'];
  volumeToken0: Scalars['deprecated_BigDecimal'];
  volumeToken1: Scalars['deprecated_BigDecimal'];
  volumeUSD: Scalars['deprecated_BigDecimal'];
  txCount: Scalars['BigInt'];
};

export type deprecated_PairHourData_filter = {
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
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<deprecated_Pair_filter>;
  reserve0?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserve1?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserveUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<deprecated_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<deprecated_PairHourData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<deprecated_PairHourData_filter>>>;
};

export type deprecated_PairHourData_orderBy =
  | 'id'
  | 'date'
  | 'pair'
  | 'pair__id'
  | 'pair__name'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__liquidityProviderCount'
  | 'pair__timestamp'
  | 'pair__block'
  | 'reserve0'
  | 'reserve1'
  | 'reserveUSD'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'txCount';

export type deprecated_Pair_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  factory?: InputMaybe<Scalars['String']>;
  factory_not?: InputMaybe<Scalars['String']>;
  factory_gt?: InputMaybe<Scalars['String']>;
  factory_lt?: InputMaybe<Scalars['String']>;
  factory_gte?: InputMaybe<Scalars['String']>;
  factory_lte?: InputMaybe<Scalars['String']>;
  factory_in?: InputMaybe<Array<Scalars['String']>>;
  factory_not_in?: InputMaybe<Array<Scalars['String']>>;
  factory_contains?: InputMaybe<Scalars['String']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_not_contains?: InputMaybe<Scalars['String']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_starts_with?: InputMaybe<Scalars['String']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_starts_with?: InputMaybe<Scalars['String']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_ends_with?: InputMaybe<Scalars['String']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_?: InputMaybe<deprecated_Factory_filter>;
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
  token0_?: InputMaybe<deprecated_Token_filter>;
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
  token1_?: InputMaybe<deprecated_Token_filter>;
  reserve0?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve0_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserve1?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserve1_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  totalSupply?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  totalSupply_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  totalSupply_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  totalSupply_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  totalSupply_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  totalSupply_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  totalSupply_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserveETH?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveETH_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveETH_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveETH_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveETH_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveETH_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveETH_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserveETH_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserveUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  trackedReserveETH?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  trackedReserveETH_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  trackedReserveETH_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  trackedReserveETH_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  trackedReserveETH_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  trackedReserveETH_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  trackedReserveETH_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  trackedReserveETH_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  token0Price?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityPositions_?: InputMaybe<deprecated_LiquidityPosition_filter>;
  liquidityPositionSnapshots_?: InputMaybe<deprecated_LiquidityPositionSnapshot_filter>;
  dayData_?: InputMaybe<deprecated_PairDayData_filter>;
  hourData_?: InputMaybe<deprecated_PairHourData_filter>;
  mints_?: InputMaybe<deprecated_Mint_filter>;
  burns_?: InputMaybe<deprecated_Burn_filter>;
  swaps_?: InputMaybe<deprecated_Swap_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<deprecated_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<deprecated_Pair_filter>>>;
  or?: InputMaybe<Array<InputMaybe<deprecated_Pair_filter>>>;
};

export type deprecated_Pair_orderBy =
  | 'id'
  | 'factory'
  | 'factory__id'
  | 'factory__pairCount'
  | 'factory__volumeUSD'
  | 'factory__volumeETH'
  | 'factory__untrackedVolumeUSD'
  | 'factory__liquidityUSD'
  | 'factory__liquidityETH'
  | 'factory__txCount'
  | 'factory__tokenCount'
  | 'factory__userCount'
  | 'name'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__symbolSuccess'
  | 'token0__name'
  | 'token0__nameSuccess'
  | 'token0__decimals'
  | 'token0__decimalsSuccess'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__txCount'
  | 'token0__liquidity'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__symbolSuccess'
  | 'token1__name'
  | 'token1__nameSuccess'
  | 'token1__decimals'
  | 'token1__decimalsSuccess'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__txCount'
  | 'token1__liquidity'
  | 'token1__derivedETH'
  | 'reserve0'
  | 'reserve1'
  | 'totalSupply'
  | 'reserveETH'
  | 'reserveUSD'
  | 'trackedReserveETH'
  | 'token0Price'
  | 'token1Price'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'txCount'
  | 'liquidityProviderCount'
  | 'liquidityPositions'
  | 'liquidityPositionSnapshots'
  | 'dayData'
  | 'hourData'
  | 'mints'
  | 'burns'
  | 'swaps'
  | 'timestamp'
  | 'block';

export type Query = {
  deprecated_user?: Maybe<deprecated_User>;
  deprecated_users: Array<deprecated_User>;
  deprecated_bundle?: Maybe<deprecated_Bundle>;
  deprecated_bundles: Array<deprecated_Bundle>;
  deprecated_factory?: Maybe<deprecated_Factory>;
  deprecated_factories: Array<deprecated_Factory>;
  deprecated_hourData?: Maybe<deprecated_HourData>;
  deprecated_hourDatas: Array<deprecated_HourData>;
  deprecated_dayData?: Maybe<deprecated_DayData>;
  deprecated_dayDatas: Array<deprecated_DayData>;
  deprecated_token?: Maybe<deprecated_Token>;
  deprecated_tokens: Array<deprecated_Token>;
  deprecated_tokenHourData?: Maybe<deprecated_TokenHourData>;
  deprecated_tokenHourDatas: Array<deprecated_TokenHourData>;
  deprecated_tokenDayData?: Maybe<deprecated_TokenDayData>;
  deprecated_tokenDayDatas: Array<deprecated_TokenDayData>;
  deprecated_pair?: Maybe<deprecated_Pair>;
  deprecated_pairs: Array<deprecated_Pair>;
  deprecated_pairHourData?: Maybe<deprecated_PairHourData>;
  deprecated_pairHourDatas: Array<deprecated_PairHourData>;
  deprecated_pairDayData?: Maybe<deprecated_PairDayData>;
  deprecated_pairDayDatas: Array<deprecated_PairDayData>;
  deprecated_liquidityPosition?: Maybe<deprecated_LiquidityPosition>;
  deprecated_liquidityPositions: Array<deprecated_LiquidityPosition>;
  deprecated_liquidityPositionSnapshot?: Maybe<deprecated_LiquidityPositionSnapshot>;
  deprecated_liquidityPositionSnapshots: Array<deprecated_LiquidityPositionSnapshot>;
  deprecated_transaction?: Maybe<deprecated_Transaction>;
  deprecated_transactions: Array<deprecated_Transaction>;
  deprecated_mint?: Maybe<deprecated_Mint>;
  deprecated_mints: Array<deprecated_Mint>;
  deprecated_burn?: Maybe<deprecated_Burn>;
  deprecated_burns: Array<deprecated_Burn>;
  deprecated_swap?: Maybe<deprecated_Swap>;
  deprecated_swaps: Array<deprecated_Swap>;
  /** Access to subgraph metadata */
  deprecated__meta?: Maybe<deprecated__Meta_>;
};


export type Querydeprecated_userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_User_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_User_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_bundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Bundle_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Bundle_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_factoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_factoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Factory_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Factory_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_hourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_hourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_HourData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_HourData_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_dayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_dayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_DayData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_DayData_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_tokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Token_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Token_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_tokenHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_tokenHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_TokenHourData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_TokenHourData_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_tokenDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_tokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_TokenDayData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_TokenDayData_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_pairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_pairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Pair_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Pair_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_pairHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_pairHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_PairHourData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_PairHourData_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_pairDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_pairDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_PairDayData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_PairDayData_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_liquidityPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_liquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_LiquidityPosition_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_liquidityPositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_liquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_LiquidityPositionSnapshot_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Transaction_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Transaction_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_mintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_mintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Mint_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Mint_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_burnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_burnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Burn_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Burn_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_swapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Swap_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Swap_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Querydeprecated__metaArgs = {
  block?: InputMaybe<deprecated_Block_height>;
};

export type Subscription = {
  deprecated_user?: Maybe<deprecated_User>;
  deprecated_users: Array<deprecated_User>;
  deprecated_bundle?: Maybe<deprecated_Bundle>;
  deprecated_bundles: Array<deprecated_Bundle>;
  deprecated_factory?: Maybe<deprecated_Factory>;
  deprecated_factories: Array<deprecated_Factory>;
  deprecated_hourData?: Maybe<deprecated_HourData>;
  deprecated_hourDatas: Array<deprecated_HourData>;
  deprecated_dayData?: Maybe<deprecated_DayData>;
  deprecated_dayDatas: Array<deprecated_DayData>;
  deprecated_token?: Maybe<deprecated_Token>;
  deprecated_tokens: Array<deprecated_Token>;
  deprecated_tokenHourData?: Maybe<deprecated_TokenHourData>;
  deprecated_tokenHourDatas: Array<deprecated_TokenHourData>;
  deprecated_tokenDayData?: Maybe<deprecated_TokenDayData>;
  deprecated_tokenDayDatas: Array<deprecated_TokenDayData>;
  deprecated_pair?: Maybe<deprecated_Pair>;
  deprecated_pairs: Array<deprecated_Pair>;
  deprecated_pairHourData?: Maybe<deprecated_PairHourData>;
  deprecated_pairHourDatas: Array<deprecated_PairHourData>;
  deprecated_pairDayData?: Maybe<deprecated_PairDayData>;
  deprecated_pairDayDatas: Array<deprecated_PairDayData>;
  deprecated_liquidityPosition?: Maybe<deprecated_LiquidityPosition>;
  deprecated_liquidityPositions: Array<deprecated_LiquidityPosition>;
  deprecated_liquidityPositionSnapshot?: Maybe<deprecated_LiquidityPositionSnapshot>;
  deprecated_liquidityPositionSnapshots: Array<deprecated_LiquidityPositionSnapshot>;
  deprecated_transaction?: Maybe<deprecated_Transaction>;
  deprecated_transactions: Array<deprecated_Transaction>;
  deprecated_mint?: Maybe<deprecated_Mint>;
  deprecated_mints: Array<deprecated_Mint>;
  deprecated_burn?: Maybe<deprecated_Burn>;
  deprecated_burns: Array<deprecated_Burn>;
  deprecated_swap?: Maybe<deprecated_Swap>;
  deprecated_swaps: Array<deprecated_Swap>;
  /** Access to subgraph metadata */
  deprecated__meta?: Maybe<deprecated__Meta_>;
};


export type Subscriptiondeprecated_userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_User_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_User_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_bundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Bundle_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Bundle_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_factoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_factoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Factory_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Factory_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_hourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_hourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_HourData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_HourData_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_dayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_dayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_DayData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_DayData_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_tokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Token_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Token_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_tokenHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_tokenHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_TokenHourData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_TokenHourData_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_tokenDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_tokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_TokenDayData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_TokenDayData_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_pairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_pairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Pair_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Pair_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_pairHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_pairHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_PairHourData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_PairHourData_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_pairDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_pairDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_PairDayData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_PairDayData_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_liquidityPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_liquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_LiquidityPosition_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_liquidityPositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_liquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_LiquidityPositionSnapshot_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Transaction_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Transaction_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_mintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_mintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Mint_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Mint_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_burnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_burnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Burn_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Burn_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_swapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Swap_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Swap_filter>;
  block?: InputMaybe<deprecated_Block_height>;
  subgraphError?: deprecated__SubgraphErrorPolicy_;
};


export type Subscriptiondeprecated__metaArgs = {
  block?: InputMaybe<deprecated_Block_height>;
};

export type deprecated_Swap = {
  id: Scalars['ID'];
  transaction: deprecated_Transaction;
  timestamp: Scalars['BigInt'];
  pair: deprecated_Pair;
  sender: Scalars['String'];
  amount0In: Scalars['deprecated_BigDecimal'];
  amount1In: Scalars['deprecated_BigDecimal'];
  amount0Out: Scalars['deprecated_BigDecimal'];
  amount1Out: Scalars['deprecated_BigDecimal'];
  to: Scalars['String'];
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD: Scalars['deprecated_BigDecimal'];
};

export type deprecated_Swap_filter = {
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
  transaction_?: InputMaybe<deprecated_Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<deprecated_Pair_filter>;
  sender?: InputMaybe<Scalars['String']>;
  sender_not?: InputMaybe<Scalars['String']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['String']>>;
  sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  sender_contains?: InputMaybe<Scalars['String']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['String']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount0In?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0In_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0In_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0In_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0In_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0In_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0In_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  amount0In_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  amount1In?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1In_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1In_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1In_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1In_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1In_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1In_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  amount1In_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  amount0Out?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0Out_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0Out_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0Out_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0Out_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0Out_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount0Out_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  amount0Out_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  amount1Out?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1Out_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1Out_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1Out_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1Out_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1Out_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amount1Out_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  amount1Out_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<deprecated_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<deprecated_Swap_filter>>>;
  or?: InputMaybe<Array<InputMaybe<deprecated_Swap_filter>>>;
};

export type deprecated_Swap_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'timestamp'
  | 'pair'
  | 'pair__id'
  | 'pair__name'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__liquidityProviderCount'
  | 'pair__timestamp'
  | 'pair__block'
  | 'sender'
  | 'amount0In'
  | 'amount1In'
  | 'amount0Out'
  | 'amount1Out'
  | 'to'
  | 'logIndex'
  | 'amountUSD';

export type deprecated_Token = {
  id: Scalars['ID'];
  factory: deprecated_Factory;
  symbol: Scalars['String'];
  symbolSuccess: Scalars['Boolean'];
  name: Scalars['String'];
  nameSuccess: Scalars['Boolean'];
  decimals: Scalars['BigInt'];
  decimalsSuccess: Scalars['Boolean'];
  totalSupply: Scalars['BigInt'];
  volume: Scalars['deprecated_BigDecimal'];
  volumeUSD: Scalars['deprecated_BigDecimal'];
  untrackedVolumeUSD: Scalars['deprecated_BigDecimal'];
  txCount: Scalars['BigInt'];
  liquidity: Scalars['deprecated_BigDecimal'];
  derivedETH: Scalars['deprecated_BigDecimal'];
  whitelistPairs: Array<deprecated_Pair>;
  hourData: Array<deprecated_TokenHourData>;
  dayData: Array<deprecated_TokenDayData>;
  basePairs: Array<deprecated_Pair>;
  quotePairs: Array<deprecated_Pair>;
  basePairsDayData: Array<deprecated_PairDayData>;
  quotePairsDayData: Array<deprecated_PairDayData>;
};


export type deprecated_TokenwhitelistPairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Pair_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Pair_filter>;
};


export type deprecated_TokenhourDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_TokenHourData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_TokenHourData_filter>;
};


export type deprecated_TokendayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_TokenDayData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_TokenDayData_filter>;
};


export type deprecated_TokenbasePairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Pair_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Pair_filter>;
};


export type deprecated_TokenquotePairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Pair_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Pair_filter>;
};


export type deprecated_TokenbasePairsDayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_PairDayData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_PairDayData_filter>;
};


export type deprecated_TokenquotePairsDayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_PairDayData_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_PairDayData_filter>;
};

export type deprecated_TokenDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  token: deprecated_Token;
  volume: Scalars['deprecated_BigDecimal'];
  volumeETH: Scalars['deprecated_BigDecimal'];
  volumeUSD: Scalars['deprecated_BigDecimal'];
  txCount: Scalars['BigInt'];
  liquidity: Scalars['deprecated_BigDecimal'];
  liquidityETH: Scalars['deprecated_BigDecimal'];
  liquidityUSD: Scalars['deprecated_BigDecimal'];
  priceUSD: Scalars['deprecated_BigDecimal'];
};

export type deprecated_TokenDayData_filter = {
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
  token_?: InputMaybe<deprecated_Token_filter>;
  volume?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeETH?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityETH?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityETH_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  priceUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  priceUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  priceUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  priceUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  priceUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  priceUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  priceUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<deprecated_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<deprecated_TokenDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<deprecated_TokenDayData_filter>>>;
};

export type deprecated_TokenDayData_orderBy =
  | 'id'
  | 'date'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__symbolSuccess'
  | 'token__name'
  | 'token__nameSuccess'
  | 'token__decimals'
  | 'token__decimalsSuccess'
  | 'token__totalSupply'
  | 'token__volume'
  | 'token__volumeUSD'
  | 'token__untrackedVolumeUSD'
  | 'token__txCount'
  | 'token__liquidity'
  | 'token__derivedETH'
  | 'volume'
  | 'volumeETH'
  | 'volumeUSD'
  | 'txCount'
  | 'liquidity'
  | 'liquidityETH'
  | 'liquidityUSD'
  | 'priceUSD';

export type deprecated_TokenHourData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  token: deprecated_Token;
  volume: Scalars['deprecated_BigDecimal'];
  volumeETH: Scalars['deprecated_BigDecimal'];
  volumeUSD: Scalars['deprecated_BigDecimal'];
  txCount: Scalars['BigInt'];
  liquidity: Scalars['deprecated_BigDecimal'];
  liquidityETH: Scalars['deprecated_BigDecimal'];
  liquidityUSD: Scalars['deprecated_BigDecimal'];
  priceUSD: Scalars['deprecated_BigDecimal'];
};

export type deprecated_TokenHourData_filter = {
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
  token_?: InputMaybe<deprecated_Token_filter>;
  volume?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeETH?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeETH_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityETH?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityETH_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityETH_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  priceUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  priceUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  priceUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  priceUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  priceUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  priceUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  priceUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<deprecated_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<deprecated_TokenHourData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<deprecated_TokenHourData_filter>>>;
};

export type deprecated_TokenHourData_orderBy =
  | 'id'
  | 'date'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__symbolSuccess'
  | 'token__name'
  | 'token__nameSuccess'
  | 'token__decimals'
  | 'token__decimalsSuccess'
  | 'token__totalSupply'
  | 'token__volume'
  | 'token__volumeUSD'
  | 'token__untrackedVolumeUSD'
  | 'token__txCount'
  | 'token__liquidity'
  | 'token__derivedETH'
  | 'volume'
  | 'volumeETH'
  | 'volumeUSD'
  | 'txCount'
  | 'liquidity'
  | 'liquidityETH'
  | 'liquidityUSD'
  | 'priceUSD';

export type deprecated_Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  factory?: InputMaybe<Scalars['String']>;
  factory_not?: InputMaybe<Scalars['String']>;
  factory_gt?: InputMaybe<Scalars['String']>;
  factory_lt?: InputMaybe<Scalars['String']>;
  factory_gte?: InputMaybe<Scalars['String']>;
  factory_lte?: InputMaybe<Scalars['String']>;
  factory_in?: InputMaybe<Array<Scalars['String']>>;
  factory_not_in?: InputMaybe<Array<Scalars['String']>>;
  factory_contains?: InputMaybe<Scalars['String']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_not_contains?: InputMaybe<Scalars['String']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_starts_with?: InputMaybe<Scalars['String']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_starts_with?: InputMaybe<Scalars['String']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_ends_with?: InputMaybe<Scalars['String']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_?: InputMaybe<deprecated_Factory_filter>;
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
  symbolSuccess?: InputMaybe<Scalars['Boolean']>;
  symbolSuccess_not?: InputMaybe<Scalars['Boolean']>;
  symbolSuccess_in?: InputMaybe<Array<Scalars['Boolean']>>;
  symbolSuccess_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
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
  nameSuccess?: InputMaybe<Scalars['Boolean']>;
  nameSuccess_not?: InputMaybe<Scalars['Boolean']>;
  nameSuccess_in?: InputMaybe<Array<Scalars['Boolean']>>;
  nameSuccess_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimalsSuccess?: InputMaybe<Scalars['Boolean']>;
  decimalsSuccess_not?: InputMaybe<Scalars['Boolean']>;
  decimalsSuccess_in?: InputMaybe<Array<Scalars['Boolean']>>;
  decimalsSuccess_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  derivedETH?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  derivedETH_not?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  derivedETH_gt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  derivedETH_lt?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  derivedETH_gte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  derivedETH_lte?: InputMaybe<Scalars['deprecated_BigDecimal']>;
  derivedETH_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  derivedETH_not_in?: InputMaybe<Array<Scalars['deprecated_BigDecimal']>>;
  whitelistPairs?: InputMaybe<Array<Scalars['String']>>;
  whitelistPairs_not?: InputMaybe<Array<Scalars['String']>>;
  whitelistPairs_contains?: InputMaybe<Array<Scalars['String']>>;
  whitelistPairs_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  whitelistPairs_not_contains?: InputMaybe<Array<Scalars['String']>>;
  whitelistPairs_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  whitelistPairs_?: InputMaybe<deprecated_Pair_filter>;
  hourData_?: InputMaybe<deprecated_TokenHourData_filter>;
  dayData_?: InputMaybe<deprecated_TokenDayData_filter>;
  basePairs_?: InputMaybe<deprecated_Pair_filter>;
  quotePairs_?: InputMaybe<deprecated_Pair_filter>;
  basePairsDayData_?: InputMaybe<deprecated_PairDayData_filter>;
  quotePairsDayData_?: InputMaybe<deprecated_PairDayData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<deprecated_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<deprecated_Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<deprecated_Token_filter>>>;
};

export type deprecated_Token_orderBy =
  | 'id'
  | 'factory'
  | 'factory__id'
  | 'factory__pairCount'
  | 'factory__volumeUSD'
  | 'factory__volumeETH'
  | 'factory__untrackedVolumeUSD'
  | 'factory__liquidityUSD'
  | 'factory__liquidityETH'
  | 'factory__txCount'
  | 'factory__tokenCount'
  | 'factory__userCount'
  | 'symbol'
  | 'symbolSuccess'
  | 'name'
  | 'nameSuccess'
  | 'decimals'
  | 'decimalsSuccess'
  | 'totalSupply'
  | 'volume'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'txCount'
  | 'liquidity'
  | 'derivedETH'
  | 'whitelistPairs'
  | 'hourData'
  | 'dayData'
  | 'basePairs'
  | 'quotePairs'
  | 'basePairsDayData'
  | 'quotePairsDayData';

export type deprecated_Transaction = {
  id: Scalars['ID'];
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  mints: Array<deprecated_Mint>;
  burns: Array<deprecated_Burn>;
  swaps: Array<deprecated_Swap>;
};


export type deprecated_TransactionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Mint_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Mint_filter>;
};


export type deprecated_TransactionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Burn_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Burn_filter>;
};


export type deprecated_TransactionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_Swap_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_Swap_filter>;
};

export type deprecated_Transaction_filter = {
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
  mints?: InputMaybe<Array<Scalars['String']>>;
  mints_not?: InputMaybe<Array<Scalars['String']>>;
  mints_contains?: InputMaybe<Array<Scalars['String']>>;
  mints_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mints_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mints_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mints_?: InputMaybe<deprecated_Mint_filter>;
  burns?: InputMaybe<Array<Scalars['String']>>;
  burns_not?: InputMaybe<Array<Scalars['String']>>;
  burns_contains?: InputMaybe<Array<Scalars['String']>>;
  burns_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  burns_not_contains?: InputMaybe<Array<Scalars['String']>>;
  burns_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  burns_?: InputMaybe<deprecated_Burn_filter>;
  swaps?: InputMaybe<Array<Scalars['String']>>;
  swaps_not?: InputMaybe<Array<Scalars['String']>>;
  swaps_contains?: InputMaybe<Array<Scalars['String']>>;
  swaps_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  swaps_not_contains?: InputMaybe<Array<Scalars['String']>>;
  swaps_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  swaps_?: InputMaybe<deprecated_Swap_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<deprecated_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<deprecated_Transaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<deprecated_Transaction_filter>>>;
};

export type deprecated_Transaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'mints'
  | 'burns'
  | 'swaps';

export type deprecated_User = {
  id: Scalars['ID'];
  liquidityPositions: Array<deprecated_LiquidityPosition>;
};


export type deprecated_UserliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<deprecated_LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<deprecated_OrderDirection>;
  where?: InputMaybe<deprecated_LiquidityPosition_filter>;
};

export type deprecated_User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidityPositions_?: InputMaybe<deprecated_LiquidityPosition_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<deprecated_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<deprecated_User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<deprecated_User_filter>>>;
};

export type deprecated_User_orderBy =
  | 'id'
  | 'liquidityPositions';

export type deprecated__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['deprecated_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['deprecated_Bytes']>;
};

/** The type for the top-level _meta field */
export type deprecated__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: deprecated__Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type deprecated__SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  deprecated_user: InContextSdkMethod<Query['deprecated_user'], Querydeprecated_userArgs, MeshContext>,
  /** null **/
  deprecated_users: InContextSdkMethod<Query['deprecated_users'], Querydeprecated_usersArgs, MeshContext>,
  /** null **/
  deprecated_bundle: InContextSdkMethod<Query['deprecated_bundle'], Querydeprecated_bundleArgs, MeshContext>,
  /** null **/
  deprecated_bundles: InContextSdkMethod<Query['deprecated_bundles'], Querydeprecated_bundlesArgs, MeshContext>,
  /** null **/
  deprecated_factory: InContextSdkMethod<Query['deprecated_factory'], Querydeprecated_factoryArgs, MeshContext>,
  /** null **/
  deprecated_factories: InContextSdkMethod<Query['deprecated_factories'], Querydeprecated_factoriesArgs, MeshContext>,
  /** null **/
  deprecated_hourData: InContextSdkMethod<Query['deprecated_hourData'], Querydeprecated_hourDataArgs, MeshContext>,
  /** null **/
  deprecated_hourDatas: InContextSdkMethod<Query['deprecated_hourDatas'], Querydeprecated_hourDatasArgs, MeshContext>,
  /** null **/
  deprecated_dayData: InContextSdkMethod<Query['deprecated_dayData'], Querydeprecated_dayDataArgs, MeshContext>,
  /** null **/
  deprecated_dayDatas: InContextSdkMethod<Query['deprecated_dayDatas'], Querydeprecated_dayDatasArgs, MeshContext>,
  /** null **/
  deprecated_token: InContextSdkMethod<Query['deprecated_token'], Querydeprecated_tokenArgs, MeshContext>,
  /** null **/
  deprecated_tokens: InContextSdkMethod<Query['deprecated_tokens'], Querydeprecated_tokensArgs, MeshContext>,
  /** null **/
  deprecated_tokenHourData: InContextSdkMethod<Query['deprecated_tokenHourData'], Querydeprecated_tokenHourDataArgs, MeshContext>,
  /** null **/
  deprecated_tokenHourDatas: InContextSdkMethod<Query['deprecated_tokenHourDatas'], Querydeprecated_tokenHourDatasArgs, MeshContext>,
  /** null **/
  deprecated_tokenDayData: InContextSdkMethod<Query['deprecated_tokenDayData'], Querydeprecated_tokenDayDataArgs, MeshContext>,
  /** null **/
  deprecated_tokenDayDatas: InContextSdkMethod<Query['deprecated_tokenDayDatas'], Querydeprecated_tokenDayDatasArgs, MeshContext>,
  /** null **/
  deprecated_pair: InContextSdkMethod<Query['deprecated_pair'], Querydeprecated_pairArgs, MeshContext>,
  /** null **/
  deprecated_pairs: InContextSdkMethod<Query['deprecated_pairs'], Querydeprecated_pairsArgs, MeshContext>,
  /** null **/
  deprecated_pairHourData: InContextSdkMethod<Query['deprecated_pairHourData'], Querydeprecated_pairHourDataArgs, MeshContext>,
  /** null **/
  deprecated_pairHourDatas: InContextSdkMethod<Query['deprecated_pairHourDatas'], Querydeprecated_pairHourDatasArgs, MeshContext>,
  /** null **/
  deprecated_pairDayData: InContextSdkMethod<Query['deprecated_pairDayData'], Querydeprecated_pairDayDataArgs, MeshContext>,
  /** null **/
  deprecated_pairDayDatas: InContextSdkMethod<Query['deprecated_pairDayDatas'], Querydeprecated_pairDayDatasArgs, MeshContext>,
  /** null **/
  deprecated_liquidityPosition: InContextSdkMethod<Query['deprecated_liquidityPosition'], Querydeprecated_liquidityPositionArgs, MeshContext>,
  /** null **/
  deprecated_liquidityPositions: InContextSdkMethod<Query['deprecated_liquidityPositions'], Querydeprecated_liquidityPositionsArgs, MeshContext>,
  /** null **/
  deprecated_liquidityPositionSnapshot: InContextSdkMethod<Query['deprecated_liquidityPositionSnapshot'], Querydeprecated_liquidityPositionSnapshotArgs, MeshContext>,
  /** null **/
  deprecated_liquidityPositionSnapshots: InContextSdkMethod<Query['deprecated_liquidityPositionSnapshots'], Querydeprecated_liquidityPositionSnapshotsArgs, MeshContext>,
  /** null **/
  deprecated_transaction: InContextSdkMethod<Query['deprecated_transaction'], Querydeprecated_transactionArgs, MeshContext>,
  /** null **/
  deprecated_transactions: InContextSdkMethod<Query['deprecated_transactions'], Querydeprecated_transactionsArgs, MeshContext>,
  /** null **/
  deprecated_mint: InContextSdkMethod<Query['deprecated_mint'], Querydeprecated_mintArgs, MeshContext>,
  /** null **/
  deprecated_mints: InContextSdkMethod<Query['deprecated_mints'], Querydeprecated_mintsArgs, MeshContext>,
  /** null **/
  deprecated_burn: InContextSdkMethod<Query['deprecated_burn'], Querydeprecated_burnArgs, MeshContext>,
  /** null **/
  deprecated_burns: InContextSdkMethod<Query['deprecated_burns'], Querydeprecated_burnsArgs, MeshContext>,
  /** null **/
  deprecated_swap: InContextSdkMethod<Query['deprecated_swap'], Querydeprecated_swapArgs, MeshContext>,
  /** null **/
  deprecated_swaps: InContextSdkMethod<Query['deprecated_swaps'], Querydeprecated_swapsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  deprecated__meta: InContextSdkMethod<Query['deprecated__meta'], Querydeprecated__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  deprecated_user: InContextSdkMethod<Subscription['deprecated_user'], Subscriptiondeprecated_userArgs, MeshContext>,
  /** null **/
  deprecated_users: InContextSdkMethod<Subscription['deprecated_users'], Subscriptiondeprecated_usersArgs, MeshContext>,
  /** null **/
  deprecated_bundle: InContextSdkMethod<Subscription['deprecated_bundle'], Subscriptiondeprecated_bundleArgs, MeshContext>,
  /** null **/
  deprecated_bundles: InContextSdkMethod<Subscription['deprecated_bundles'], Subscriptiondeprecated_bundlesArgs, MeshContext>,
  /** null **/
  deprecated_factory: InContextSdkMethod<Subscription['deprecated_factory'], Subscriptiondeprecated_factoryArgs, MeshContext>,
  /** null **/
  deprecated_factories: InContextSdkMethod<Subscription['deprecated_factories'], Subscriptiondeprecated_factoriesArgs, MeshContext>,
  /** null **/
  deprecated_hourData: InContextSdkMethod<Subscription['deprecated_hourData'], Subscriptiondeprecated_hourDataArgs, MeshContext>,
  /** null **/
  deprecated_hourDatas: InContextSdkMethod<Subscription['deprecated_hourDatas'], Subscriptiondeprecated_hourDatasArgs, MeshContext>,
  /** null **/
  deprecated_dayData: InContextSdkMethod<Subscription['deprecated_dayData'], Subscriptiondeprecated_dayDataArgs, MeshContext>,
  /** null **/
  deprecated_dayDatas: InContextSdkMethod<Subscription['deprecated_dayDatas'], Subscriptiondeprecated_dayDatasArgs, MeshContext>,
  /** null **/
  deprecated_token: InContextSdkMethod<Subscription['deprecated_token'], Subscriptiondeprecated_tokenArgs, MeshContext>,
  /** null **/
  deprecated_tokens: InContextSdkMethod<Subscription['deprecated_tokens'], Subscriptiondeprecated_tokensArgs, MeshContext>,
  /** null **/
  deprecated_tokenHourData: InContextSdkMethod<Subscription['deprecated_tokenHourData'], Subscriptiondeprecated_tokenHourDataArgs, MeshContext>,
  /** null **/
  deprecated_tokenHourDatas: InContextSdkMethod<Subscription['deprecated_tokenHourDatas'], Subscriptiondeprecated_tokenHourDatasArgs, MeshContext>,
  /** null **/
  deprecated_tokenDayData: InContextSdkMethod<Subscription['deprecated_tokenDayData'], Subscriptiondeprecated_tokenDayDataArgs, MeshContext>,
  /** null **/
  deprecated_tokenDayDatas: InContextSdkMethod<Subscription['deprecated_tokenDayDatas'], Subscriptiondeprecated_tokenDayDatasArgs, MeshContext>,
  /** null **/
  deprecated_pair: InContextSdkMethod<Subscription['deprecated_pair'], Subscriptiondeprecated_pairArgs, MeshContext>,
  /** null **/
  deprecated_pairs: InContextSdkMethod<Subscription['deprecated_pairs'], Subscriptiondeprecated_pairsArgs, MeshContext>,
  /** null **/
  deprecated_pairHourData: InContextSdkMethod<Subscription['deprecated_pairHourData'], Subscriptiondeprecated_pairHourDataArgs, MeshContext>,
  /** null **/
  deprecated_pairHourDatas: InContextSdkMethod<Subscription['deprecated_pairHourDatas'], Subscriptiondeprecated_pairHourDatasArgs, MeshContext>,
  /** null **/
  deprecated_pairDayData: InContextSdkMethod<Subscription['deprecated_pairDayData'], Subscriptiondeprecated_pairDayDataArgs, MeshContext>,
  /** null **/
  deprecated_pairDayDatas: InContextSdkMethod<Subscription['deprecated_pairDayDatas'], Subscriptiondeprecated_pairDayDatasArgs, MeshContext>,
  /** null **/
  deprecated_liquidityPosition: InContextSdkMethod<Subscription['deprecated_liquidityPosition'], Subscriptiondeprecated_liquidityPositionArgs, MeshContext>,
  /** null **/
  deprecated_liquidityPositions: InContextSdkMethod<Subscription['deprecated_liquidityPositions'], Subscriptiondeprecated_liquidityPositionsArgs, MeshContext>,
  /** null **/
  deprecated_liquidityPositionSnapshot: InContextSdkMethod<Subscription['deprecated_liquidityPositionSnapshot'], Subscriptiondeprecated_liquidityPositionSnapshotArgs, MeshContext>,
  /** null **/
  deprecated_liquidityPositionSnapshots: InContextSdkMethod<Subscription['deprecated_liquidityPositionSnapshots'], Subscriptiondeprecated_liquidityPositionSnapshotsArgs, MeshContext>,
  /** null **/
  deprecated_transaction: InContextSdkMethod<Subscription['deprecated_transaction'], Subscriptiondeprecated_transactionArgs, MeshContext>,
  /** null **/
  deprecated_transactions: InContextSdkMethod<Subscription['deprecated_transactions'], Subscriptiondeprecated_transactionsArgs, MeshContext>,
  /** null **/
  deprecated_mint: InContextSdkMethod<Subscription['deprecated_mint'], Subscriptiondeprecated_mintArgs, MeshContext>,
  /** null **/
  deprecated_mints: InContextSdkMethod<Subscription['deprecated_mints'], Subscriptiondeprecated_mintsArgs, MeshContext>,
  /** null **/
  deprecated_burn: InContextSdkMethod<Subscription['deprecated_burn'], Subscriptiondeprecated_burnArgs, MeshContext>,
  /** null **/
  deprecated_burns: InContextSdkMethod<Subscription['deprecated_burns'], Subscriptiondeprecated_burnsArgs, MeshContext>,
  /** null **/
  deprecated_swap: InContextSdkMethod<Subscription['deprecated_swap'], Subscriptiondeprecated_swapArgs, MeshContext>,
  /** null **/
  deprecated_swaps: InContextSdkMethod<Subscription['deprecated_swaps'], Subscriptiondeprecated_swapsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  deprecated__meta: InContextSdkMethod<Subscription['deprecated__meta'], Subscriptiondeprecated__metaArgs, MeshContext>
  };

  export type Context = {
      ["Exchange"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      ["subgraphHost"]: Scalars['ID'],
["subgraphName"]: Scalars['ID']
    };
}
