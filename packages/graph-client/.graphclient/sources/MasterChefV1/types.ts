// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace MasterChefV1Types {
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
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
  Timestamp: any;
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type History = {
  id: Scalars['ID'];
  owner: MasterChef;
  slpBalance: Scalars['BigDecimal'];
  slpAge: Scalars['BigDecimal'];
  slpAgeRemoved: Scalars['BigDecimal'];
  slpDeposited: Scalars['BigDecimal'];
  slpWithdrawn: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  block: Scalars['BigInt'];
  sourceName?: Maybe<Scalars['String']>;
};

export type History_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<MasterChef_filter>;
  slpBalance?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_not?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpAge?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_not?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpAge_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpAgeRemoved?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_not?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpAgeRemoved_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpDeposited?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_not?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpDeposited_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpWithdrawn?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_not?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpWithdrawn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
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
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<History_filter>>>;
  or?: InputMaybe<Array<InputMaybe<History_filter>>>;
};

export type History_orderBy =
  | 'id'
  | 'owner'
  | 'owner__id'
  | 'owner__bonusMultiplier'
  | 'owner__bonusEndBlock'
  | 'owner__devaddr'
  | 'owner__migrator'
  | 'owner__owner'
  | 'owner__startBlock'
  | 'owner__sushi'
  | 'owner__sushiPerBlock'
  | 'owner__totalAllocPoint'
  | 'owner__poolCount'
  | 'owner__slpBalance'
  | 'owner__slpAge'
  | 'owner__slpAgeRemoved'
  | 'owner__slpDeposited'
  | 'owner__slpWithdrawn'
  | 'owner__updatedAt'
  | 'slpBalance'
  | 'slpAge'
  | 'slpAgeRemoved'
  | 'slpDeposited'
  | 'slpWithdrawn'
  | 'timestamp'
  | 'block';

export type MasterChef = {
  id: Scalars['ID'];
  bonusMultiplier: Scalars['BigInt'];
  bonusEndBlock: Scalars['BigInt'];
  devaddr: Scalars['Bytes'];
  migrator: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  startBlock: Scalars['BigInt'];
  sushi: Scalars['Bytes'];
  sushiPerBlock: Scalars['BigInt'];
  totalAllocPoint: Scalars['BigInt'];
  pools: Array<Pool>;
  poolCount: Scalars['BigInt'];
  slpBalance: Scalars['BigDecimal'];
  slpAge: Scalars['BigDecimal'];
  slpAgeRemoved: Scalars['BigDecimal'];
  slpDeposited: Scalars['BigDecimal'];
  slpWithdrawn: Scalars['BigDecimal'];
  history: Array<History>;
  updatedAt: Scalars['BigInt'];
  sourceName?: Maybe<Scalars['String']>;
};


export type MasterChefpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
};


export type MasterChefhistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<History_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<History_filter>;
};

export type MasterChef_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bonusMultiplier?: InputMaybe<Scalars['BigInt']>;
  bonusMultiplier_not?: InputMaybe<Scalars['BigInt']>;
  bonusMultiplier_gt?: InputMaybe<Scalars['BigInt']>;
  bonusMultiplier_lt?: InputMaybe<Scalars['BigInt']>;
  bonusMultiplier_gte?: InputMaybe<Scalars['BigInt']>;
  bonusMultiplier_lte?: InputMaybe<Scalars['BigInt']>;
  bonusMultiplier_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bonusMultiplier_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bonusEndBlock?: InputMaybe<Scalars['BigInt']>;
  bonusEndBlock_not?: InputMaybe<Scalars['BigInt']>;
  bonusEndBlock_gt?: InputMaybe<Scalars['BigInt']>;
  bonusEndBlock_lt?: InputMaybe<Scalars['BigInt']>;
  bonusEndBlock_gte?: InputMaybe<Scalars['BigInt']>;
  bonusEndBlock_lte?: InputMaybe<Scalars['BigInt']>;
  bonusEndBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bonusEndBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  devaddr?: InputMaybe<Scalars['Bytes']>;
  devaddr_not?: InputMaybe<Scalars['Bytes']>;
  devaddr_gt?: InputMaybe<Scalars['Bytes']>;
  devaddr_lt?: InputMaybe<Scalars['Bytes']>;
  devaddr_gte?: InputMaybe<Scalars['Bytes']>;
  devaddr_lte?: InputMaybe<Scalars['Bytes']>;
  devaddr_in?: InputMaybe<Array<Scalars['Bytes']>>;
  devaddr_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  devaddr_contains?: InputMaybe<Scalars['Bytes']>;
  devaddr_not_contains?: InputMaybe<Scalars['Bytes']>;
  migrator?: InputMaybe<Scalars['Bytes']>;
  migrator_not?: InputMaybe<Scalars['Bytes']>;
  migrator_gt?: InputMaybe<Scalars['Bytes']>;
  migrator_lt?: InputMaybe<Scalars['Bytes']>;
  migrator_gte?: InputMaybe<Scalars['Bytes']>;
  migrator_lte?: InputMaybe<Scalars['Bytes']>;
  migrator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  migrator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  migrator_contains?: InputMaybe<Scalars['Bytes']>;
  migrator_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  startBlock?: InputMaybe<Scalars['BigInt']>;
  startBlock_not?: InputMaybe<Scalars['BigInt']>;
  startBlock_gt?: InputMaybe<Scalars['BigInt']>;
  startBlock_lt?: InputMaybe<Scalars['BigInt']>;
  startBlock_gte?: InputMaybe<Scalars['BigInt']>;
  startBlock_lte?: InputMaybe<Scalars['BigInt']>;
  startBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sushi?: InputMaybe<Scalars['Bytes']>;
  sushi_not?: InputMaybe<Scalars['Bytes']>;
  sushi_gt?: InputMaybe<Scalars['Bytes']>;
  sushi_lt?: InputMaybe<Scalars['Bytes']>;
  sushi_gte?: InputMaybe<Scalars['Bytes']>;
  sushi_lte?: InputMaybe<Scalars['Bytes']>;
  sushi_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sushi_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sushi_contains?: InputMaybe<Scalars['Bytes']>;
  sushi_not_contains?: InputMaybe<Scalars['Bytes']>;
  sushiPerBlock?: InputMaybe<Scalars['BigInt']>;
  sushiPerBlock_not?: InputMaybe<Scalars['BigInt']>;
  sushiPerBlock_gt?: InputMaybe<Scalars['BigInt']>;
  sushiPerBlock_lt?: InputMaybe<Scalars['BigInt']>;
  sushiPerBlock_gte?: InputMaybe<Scalars['BigInt']>;
  sushiPerBlock_lte?: InputMaybe<Scalars['BigInt']>;
  sushiPerBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sushiPerBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAllocPoint?: InputMaybe<Scalars['BigInt']>;
  totalAllocPoint_not?: InputMaybe<Scalars['BigInt']>;
  totalAllocPoint_gt?: InputMaybe<Scalars['BigInt']>;
  totalAllocPoint_lt?: InputMaybe<Scalars['BigInt']>;
  totalAllocPoint_gte?: InputMaybe<Scalars['BigInt']>;
  totalAllocPoint_lte?: InputMaybe<Scalars['BigInt']>;
  totalAllocPoint_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAllocPoint_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pools_?: InputMaybe<Pool_filter>;
  poolCount?: InputMaybe<Scalars['BigInt']>;
  poolCount_not?: InputMaybe<Scalars['BigInt']>;
  poolCount_gt?: InputMaybe<Scalars['BigInt']>;
  poolCount_lt?: InputMaybe<Scalars['BigInt']>;
  poolCount_gte?: InputMaybe<Scalars['BigInt']>;
  poolCount_lte?: InputMaybe<Scalars['BigInt']>;
  poolCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slpBalance?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_not?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpAge?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_not?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpAge_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpAgeRemoved?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_not?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpAgeRemoved_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpDeposited?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_not?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpDeposited_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpWithdrawn?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_not?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpWithdrawn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  history_?: InputMaybe<History_filter>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MasterChef_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MasterChef_filter>>>;
};

export type MasterChef_orderBy =
  | 'id'
  | 'bonusMultiplier'
  | 'bonusEndBlock'
  | 'devaddr'
  | 'migrator'
  | 'owner'
  | 'startBlock'
  | 'sushi'
  | 'sushiPerBlock'
  | 'totalAllocPoint'
  | 'pools'
  | 'poolCount'
  | 'slpBalance'
  | 'slpAge'
  | 'slpAgeRemoved'
  | 'slpDeposited'
  | 'slpWithdrawn'
  | 'history'
  | 'updatedAt';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Pool = {
  id: Scalars['ID'];
  masterChef: MasterChef;
  pair: Scalars['Bytes'];
  allocPoint: Scalars['BigInt'];
  lastRewardBlock: Scalars['BigInt'];
  accSushiPerShare: Scalars['BigInt'];
  slpBalance: Scalars['BigDecimal'];
  users: Array<User>;
  userCount: Scalars['BigInt'];
  slpAge: Scalars['BigDecimal'];
  slpAgeRemoved: Scalars['BigDecimal'];
  slpDeposited: Scalars['BigDecimal'];
  slpWithdrawn: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  block: Scalars['BigInt'];
  updatedAt: Scalars['BigInt'];
  entryUSD: Scalars['BigDecimal'];
  exitUSD: Scalars['BigDecimal'];
  sushiHarvested: Scalars['BigDecimal'];
  sushiHarvestedUSD: Scalars['BigDecimal'];
  sourceName?: Maybe<Scalars['String']>;
};


export type PoolusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
};

export type PoolHistory = {
  id: Scalars['ID'];
  pool: Pool;
  slpBalance: Scalars['BigDecimal'];
  slpAge: Scalars['BigDecimal'];
  slpAgeRemoved: Scalars['BigDecimal'];
  slpDeposited: Scalars['BigDecimal'];
  slpWithdrawn: Scalars['BigDecimal'];
  userCount: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  block: Scalars['BigInt'];
  entryUSD: Scalars['BigDecimal'];
  exitUSD: Scalars['BigDecimal'];
  sushiHarvested: Scalars['BigDecimal'];
  sushiHarvestedUSD: Scalars['BigDecimal'];
  sourceName?: Maybe<Scalars['String']>;
};

export type PoolHistory_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  pool_?: InputMaybe<Pool_filter>;
  slpBalance?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_not?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpAge?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_not?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpAge_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpAgeRemoved?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_not?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpAgeRemoved_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpDeposited?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_not?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpDeposited_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpWithdrawn?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_not?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpWithdrawn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  userCount?: InputMaybe<Scalars['BigInt']>;
  userCount_not?: InputMaybe<Scalars['BigInt']>;
  userCount_gt?: InputMaybe<Scalars['BigInt']>;
  userCount_lt?: InputMaybe<Scalars['BigInt']>;
  userCount_gte?: InputMaybe<Scalars['BigInt']>;
  userCount_lte?: InputMaybe<Scalars['BigInt']>;
  userCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  entryUSD?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  entryUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exitUSD?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exitUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvested?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvested_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvestedUSD?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvestedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolHistory_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolHistory_filter>>>;
};

export type PoolHistory_orderBy =
  | 'id'
  | 'pool'
  | 'pool__id'
  | 'pool__pair'
  | 'pool__allocPoint'
  | 'pool__lastRewardBlock'
  | 'pool__accSushiPerShare'
  | 'pool__balance'
  | 'pool__userCount'
  | 'pool__slpBalance'
  | 'pool__slpAge'
  | 'pool__slpAgeRemoved'
  | 'pool__slpDeposited'
  | 'pool__slpWithdrawn'
  | 'pool__timestamp'
  | 'pool__block'
  | 'pool__updatedAt'
  | 'pool__entryUSD'
  | 'pool__exitUSD'
  | 'pool__sushiHarvested'
  | 'pool__sushiHarvestedUSD'
  | 'slpBalance'
  | 'slpAge'
  | 'slpAgeRemoved'
  | 'slpDeposited'
  | 'slpWithdrawn'
  | 'userCount'
  | 'timestamp'
  | 'block'
  | 'entryUSD'
  | 'exitUSD'
  | 'sushiHarvested'
  | 'sushiHarvestedUSD';

export type Pool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<MasterChef_filter>;
  pair?: InputMaybe<Scalars['Bytes']>;
  pair_not?: InputMaybe<Scalars['Bytes']>;
  pair_gt?: InputMaybe<Scalars['Bytes']>;
  pair_lt?: InputMaybe<Scalars['Bytes']>;
  pair_gte?: InputMaybe<Scalars['Bytes']>;
  pair_lte?: InputMaybe<Scalars['Bytes']>;
  pair_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pair_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pair_contains?: InputMaybe<Scalars['Bytes']>;
  pair_not_contains?: InputMaybe<Scalars['Bytes']>;
  allocPoint?: InputMaybe<Scalars['BigInt']>;
  allocPoint_not?: InputMaybe<Scalars['BigInt']>;
  allocPoint_gt?: InputMaybe<Scalars['BigInt']>;
  allocPoint_lt?: InputMaybe<Scalars['BigInt']>;
  allocPoint_gte?: InputMaybe<Scalars['BigInt']>;
  allocPoint_lte?: InputMaybe<Scalars['BigInt']>;
  allocPoint_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allocPoint_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastRewardBlock?: InputMaybe<Scalars['BigInt']>;
  lastRewardBlock_not?: InputMaybe<Scalars['BigInt']>;
  lastRewardBlock_gt?: InputMaybe<Scalars['BigInt']>;
  lastRewardBlock_lt?: InputMaybe<Scalars['BigInt']>;
  lastRewardBlock_gte?: InputMaybe<Scalars['BigInt']>;
  lastRewardBlock_lte?: InputMaybe<Scalars['BigInt']>;
  lastRewardBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastRewardBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  accSushiPerShare?: InputMaybe<Scalars['BigInt']>;
  accSushiPerShare_not?: InputMaybe<Scalars['BigInt']>;
  accSushiPerShare_gt?: InputMaybe<Scalars['BigInt']>;
  accSushiPerShare_lt?: InputMaybe<Scalars['BigInt']>;
  accSushiPerShare_gte?: InputMaybe<Scalars['BigInt']>;
  accSushiPerShare_lte?: InputMaybe<Scalars['BigInt']>;
  accSushiPerShare_in?: InputMaybe<Array<Scalars['BigInt']>>;
  accSushiPerShare_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  users_?: InputMaybe<User_filter>;
  userCount?: InputMaybe<Scalars['BigInt']>;
  userCount_not?: InputMaybe<Scalars['BigInt']>;
  userCount_gt?: InputMaybe<Scalars['BigInt']>;
  userCount_lt?: InputMaybe<Scalars['BigInt']>;
  userCount_gte?: InputMaybe<Scalars['BigInt']>;
  userCount_lte?: InputMaybe<Scalars['BigInt']>;
  userCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slpBalance?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_not?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpAge?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_not?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpAge_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpAge_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpAgeRemoved?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_not?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpAgeRemoved_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpAgeRemoved_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpDeposited?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_not?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpDeposited_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpDeposited_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpWithdrawn?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_not?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_gt?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_lt?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_gte?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_lte?: InputMaybe<Scalars['BigDecimal']>;
  slpWithdrawn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  slpWithdrawn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
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
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  entryUSD?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  entryUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exitUSD?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exitUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvested?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvested_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvestedUSD?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvestedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
};

export type Pool_orderBy =
  | 'id'
  | 'owner'
  | 'owner__id'
  | 'owner__bonusMultiplier'
  | 'owner__bonusEndBlock'
  | 'owner__devaddr'
  | 'owner__migrator'
  | 'owner__owner'
  | 'owner__startBlock'
  | 'owner__sushi'
  | 'owner__sushiPerBlock'
  | 'owner__totalAllocPoint'
  | 'owner__poolCount'
  | 'owner__slpBalance'
  | 'owner__slpAge'
  | 'owner__slpAgeRemoved'
  | 'owner__slpDeposited'
  | 'owner__slpWithdrawn'
  | 'owner__updatedAt'
  | 'pair'
  | 'allocPoint'
  | 'lastRewardBlock'
  | 'accSushiPerShare'
  | 'balance'
  | 'users'
  | 'userCount'
  | 'slpBalance'
  | 'slpAge'
  | 'slpAgeRemoved'
  | 'slpDeposited'
  | 'slpWithdrawn'
  | 'timestamp'
  | 'block'
  | 'updatedAt'
  | 'entryUSD'
  | 'exitUSD'
  | 'sushiHarvested'
  | 'sushiHarvestedUSD';

export type Query = {
  MASTERCHEF_V1_masterChef?: Maybe<MasterChef>;
  MASTERCHEF_V1_masterChefs: Array<MasterChef>;
  MASTERCHEF_V1_history?: Maybe<History>;
  MASTERCHEF_V1_histories: Array<History>;
  MASTERCHEF_V1_pool?: Maybe<Pool>;
  MASTERCHEF_V1_pools: Array<Pool>;
  MASTERCHEF_V1_poolHistory?: Maybe<PoolHistory>;
  MASTERCHEF_V1_poolHistories: Array<PoolHistory>;
  MASTERCHEF_V1_user?: Maybe<User>;
  MASTERCHEF_V1_users: Array<User>;
  /** Access to subgraph metadata */
  MASTERCHEF_V1__meta?: Maybe<_Meta_>;
  MASTERCHEF_V1_sourceName?: Maybe<Scalars['String']>;
};


export type QueryMASTERCHEF_V1_masterChefArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V1_masterChefsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterChef_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterChef_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V1_historyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V1_historiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<History_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<History_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V1_poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V1_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V1_poolHistoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V1_poolHistoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolHistory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolHistory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V1_userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V1_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V1__metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  MASTERCHEF_V1_masterChef?: Maybe<MasterChef>;
  MASTERCHEF_V1_masterChefs: Array<MasterChef>;
  MASTERCHEF_V1_history?: Maybe<History>;
  MASTERCHEF_V1_histories: Array<History>;
  MASTERCHEF_V1_pool?: Maybe<Pool>;
  MASTERCHEF_V1_pools: Array<Pool>;
  MASTERCHEF_V1_poolHistory?: Maybe<PoolHistory>;
  MASTERCHEF_V1_poolHistories: Array<PoolHistory>;
  MASTERCHEF_V1_user?: Maybe<User>;
  MASTERCHEF_V1_users: Array<User>;
  /** Access to subgraph metadata */
  MASTERCHEF_V1__meta?: Maybe<_Meta_>;
  MASTERCHEF_V1_sourceName?: Maybe<Scalars['String']>;
};


export type SubscriptionMASTERCHEF_V1_masterChefArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V1_masterChefsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterChef_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterChef_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V1_historyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V1_historiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<History_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<History_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V1_poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V1_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V1_poolHistoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V1_poolHistoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolHistory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolHistory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V1_userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V1_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V1__metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type User = {
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  pool?: Maybe<Pool>;
  amount: Scalars['BigInt'];
  rewardDebt: Scalars['BigInt'];
  entryUSD: Scalars['BigDecimal'];
  exitUSD: Scalars['BigDecimal'];
  sushiHarvested: Scalars['BigDecimal'];
  sushiHarvestedUSD: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  block: Scalars['BigInt'];
  sourceName?: Maybe<Scalars['String']>;
};

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_gt?: InputMaybe<Scalars['Bytes']>;
  address_lt?: InputMaybe<Scalars['Bytes']>;
  address_gte?: InputMaybe<Scalars['Bytes']>;
  address_lte?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
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
  pool_?: InputMaybe<Pool_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardDebt?: InputMaybe<Scalars['BigInt']>;
  rewardDebt_not?: InputMaybe<Scalars['BigInt']>;
  rewardDebt_gt?: InputMaybe<Scalars['BigInt']>;
  rewardDebt_lt?: InputMaybe<Scalars['BigInt']>;
  rewardDebt_gte?: InputMaybe<Scalars['BigInt']>;
  rewardDebt_lte?: InputMaybe<Scalars['BigInt']>;
  rewardDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  entryUSD?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  entryUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  entryUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exitUSD?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  exitUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exitUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvested?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvested_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvestedUSD?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvestedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvestedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
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
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'address'
  | 'pool'
  | 'pool__id'
  | 'pool__pair'
  | 'pool__allocPoint'
  | 'pool__lastRewardBlock'
  | 'pool__accSushiPerShare'
  | 'pool__balance'
  | 'pool__userCount'
  | 'pool__slpBalance'
  | 'pool__slpAge'
  | 'pool__slpAgeRemoved'
  | 'pool__slpDeposited'
  | 'pool__slpWithdrawn'
  | 'pool__timestamp'
  | 'pool__block'
  | 'pool__updatedAt'
  | 'pool__entryUSD'
  | 'pool__exitUSD'
  | 'pool__sushiHarvested'
  | 'pool__sushiHarvestedUSD'
  | 'amount'
  | 'rewardDebt'
  | 'entryUSD'
  | 'exitUSD'
  | 'sushiHarvested'
  | 'sushiHarvestedUSD'
  | 'timestamp'
  | 'block';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']>;
  sourceName?: Maybe<Scalars['String']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
  sourceName?: Maybe<Scalars['String']>;
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  MASTERCHEF_V1_masterChef: InContextSdkMethod<Query['MASTERCHEF_V1_masterChef'], QueryMASTERCHEF_V1_masterChefArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_masterChefs: InContextSdkMethod<Query['MASTERCHEF_V1_masterChefs'], QueryMASTERCHEF_V1_masterChefsArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_history: InContextSdkMethod<Query['MASTERCHEF_V1_history'], QueryMASTERCHEF_V1_historyArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_histories: InContextSdkMethod<Query['MASTERCHEF_V1_histories'], QueryMASTERCHEF_V1_historiesArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_pool: InContextSdkMethod<Query['MASTERCHEF_V1_pool'], QueryMASTERCHEF_V1_poolArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_pools: InContextSdkMethod<Query['MASTERCHEF_V1_pools'], QueryMASTERCHEF_V1_poolsArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_poolHistory: InContextSdkMethod<Query['MASTERCHEF_V1_poolHistory'], QueryMASTERCHEF_V1_poolHistoryArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_poolHistories: InContextSdkMethod<Query['MASTERCHEF_V1_poolHistories'], QueryMASTERCHEF_V1_poolHistoriesArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_user: InContextSdkMethod<Query['MASTERCHEF_V1_user'], QueryMASTERCHEF_V1_userArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_users: InContextSdkMethod<Query['MASTERCHEF_V1_users'], QueryMASTERCHEF_V1_usersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  MASTERCHEF_V1__meta: InContextSdkMethod<Query['MASTERCHEF_V1__meta'], QueryMASTERCHEF_V1__metaArgs, MeshContext>,
  /** undefined **/
  MASTERCHEF_V1_sourceName: InContextSdkMethod<Query['MASTERCHEF_V1_sourceName'], {}, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  MASTERCHEF_V1_masterChef: InContextSdkMethod<Subscription['MASTERCHEF_V1_masterChef'], SubscriptionMASTERCHEF_V1_masterChefArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_masterChefs: InContextSdkMethod<Subscription['MASTERCHEF_V1_masterChefs'], SubscriptionMASTERCHEF_V1_masterChefsArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_history: InContextSdkMethod<Subscription['MASTERCHEF_V1_history'], SubscriptionMASTERCHEF_V1_historyArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_histories: InContextSdkMethod<Subscription['MASTERCHEF_V1_histories'], SubscriptionMASTERCHEF_V1_historiesArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_pool: InContextSdkMethod<Subscription['MASTERCHEF_V1_pool'], SubscriptionMASTERCHEF_V1_poolArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_pools: InContextSdkMethod<Subscription['MASTERCHEF_V1_pools'], SubscriptionMASTERCHEF_V1_poolsArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_poolHistory: InContextSdkMethod<Subscription['MASTERCHEF_V1_poolHistory'], SubscriptionMASTERCHEF_V1_poolHistoryArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_poolHistories: InContextSdkMethod<Subscription['MASTERCHEF_V1_poolHistories'], SubscriptionMASTERCHEF_V1_poolHistoriesArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_user: InContextSdkMethod<Subscription['MASTERCHEF_V1_user'], SubscriptionMASTERCHEF_V1_userArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V1_users: InContextSdkMethod<Subscription['MASTERCHEF_V1_users'], SubscriptionMASTERCHEF_V1_usersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  MASTERCHEF_V1__meta: InContextSdkMethod<Subscription['MASTERCHEF_V1__meta'], SubscriptionMASTERCHEF_V1__metaArgs, MeshContext>,
  /** undefined **/
  MASTERCHEF_V1_sourceName: InContextSdkMethod<Subscription['MASTERCHEF_V1_sourceName'], {}, MeshContext>
  };

  export type Context = {
      ["MasterChefV1"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      ["subgraphHost"]: Scalars['ID'],
["subgraphName"]: Scalars['ID']
    };
}
