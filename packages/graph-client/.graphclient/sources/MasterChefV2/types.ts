// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace MasterChefV2Types {
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

export type MasterChef = {
  id: Scalars['ID'];
  totalAllocPoint: Scalars['BigInt'];
  pools?: Maybe<Array<Pool>>;
  poolCount: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  block: Scalars['BigInt'];
  sourceName?: Maybe<Scalars['String']>;
};


export type MasterChefpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
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
  and?: InputMaybe<Array<InputMaybe<MasterChef_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MasterChef_filter>>>;
};

export type MasterChef_orderBy =
  | 'id'
  | 'totalAllocPoint'
  | 'pools'
  | 'poolCount'
  | 'timestamp'
  | 'block';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Pool = {
  id: Scalars['ID'];
  masterChef: MasterChef;
  pair: Scalars['Bytes'];
  rewarder?: Maybe<Rewarder>;
  allocPoint: Scalars['BigInt'];
  lastRewardBlock: Scalars['BigInt'];
  accSushiPerShare: Scalars['BigInt'];
  slpBalance: Scalars['BigInt'];
  users: Array<User>;
  userCount: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  block: Scalars['BigInt'];
  sourceName?: Maybe<Scalars['String']>;
};


export type PoolusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
};

export type Pool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  masterChef?: InputMaybe<Scalars['String']>;
  masterChef_not?: InputMaybe<Scalars['String']>;
  masterChef_gt?: InputMaybe<Scalars['String']>;
  masterChef_lt?: InputMaybe<Scalars['String']>;
  masterChef_gte?: InputMaybe<Scalars['String']>;
  masterChef_lte?: InputMaybe<Scalars['String']>;
  masterChef_in?: InputMaybe<Array<Scalars['String']>>;
  masterChef_not_in?: InputMaybe<Array<Scalars['String']>>;
  masterChef_contains?: InputMaybe<Scalars['String']>;
  masterChef_contains_nocase?: InputMaybe<Scalars['String']>;
  masterChef_not_contains?: InputMaybe<Scalars['String']>;
  masterChef_not_contains_nocase?: InputMaybe<Scalars['String']>;
  masterChef_starts_with?: InputMaybe<Scalars['String']>;
  masterChef_starts_with_nocase?: InputMaybe<Scalars['String']>;
  masterChef_not_starts_with?: InputMaybe<Scalars['String']>;
  masterChef_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  masterChef_ends_with?: InputMaybe<Scalars['String']>;
  masterChef_ends_with_nocase?: InputMaybe<Scalars['String']>;
  masterChef_not_ends_with?: InputMaybe<Scalars['String']>;
  masterChef_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  masterChef_?: InputMaybe<MasterChef_filter>;
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
  rewarder?: InputMaybe<Scalars['String']>;
  rewarder_not?: InputMaybe<Scalars['String']>;
  rewarder_gt?: InputMaybe<Scalars['String']>;
  rewarder_lt?: InputMaybe<Scalars['String']>;
  rewarder_gte?: InputMaybe<Scalars['String']>;
  rewarder_lte?: InputMaybe<Scalars['String']>;
  rewarder_in?: InputMaybe<Array<Scalars['String']>>;
  rewarder_not_in?: InputMaybe<Array<Scalars['String']>>;
  rewarder_contains?: InputMaybe<Scalars['String']>;
  rewarder_contains_nocase?: InputMaybe<Scalars['String']>;
  rewarder_not_contains?: InputMaybe<Scalars['String']>;
  rewarder_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rewarder_starts_with?: InputMaybe<Scalars['String']>;
  rewarder_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewarder_not_starts_with?: InputMaybe<Scalars['String']>;
  rewarder_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rewarder_ends_with?: InputMaybe<Scalars['String']>;
  rewarder_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rewarder_not_ends_with?: InputMaybe<Scalars['String']>;
  rewarder_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rewarder_?: InputMaybe<Rewarder_filter>;
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
  slpBalance?: InputMaybe<Scalars['BigInt']>;
  slpBalance_not?: InputMaybe<Scalars['BigInt']>;
  slpBalance_gt?: InputMaybe<Scalars['BigInt']>;
  slpBalance_lt?: InputMaybe<Scalars['BigInt']>;
  slpBalance_gte?: InputMaybe<Scalars['BigInt']>;
  slpBalance_lte?: InputMaybe<Scalars['BigInt']>;
  slpBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slpBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  users_?: InputMaybe<User_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
};

export type Pool_orderBy =
  | 'id'
  | 'masterChef'
  | 'masterChef__id'
  | 'masterChef__totalAllocPoint'
  | 'masterChef__poolCount'
  | 'masterChef__timestamp'
  | 'masterChef__block'
  | 'pair'
  | 'rewarder'
  | 'rewarder__id'
  | 'rewarder__rewardToken'
  | 'rewarder__rewardPerSecond'
  | 'rewarder__timestamp'
  | 'rewarder__block'
  | 'allocPoint'
  | 'lastRewardBlock'
  | 'accSushiPerShare'
  | 'slpBalance'
  | 'users'
  | 'userCount'
  | 'timestamp'
  | 'block';

export type Query = {
  MASTERCHEF_V2_masterChef?: Maybe<MasterChef>;
  MASTERCHEF_V2_masterChefs: Array<MasterChef>;
  MASTERCHEF_V2_pool?: Maybe<Pool>;
  MASTERCHEF_V2_pools: Array<Pool>;
  MASTERCHEF_V2_rewarder?: Maybe<Rewarder>;
  MASTERCHEF_V2_rewarders: Array<Rewarder>;
  MASTERCHEF_V2_user?: Maybe<User>;
  MASTERCHEF_V2_users: Array<User>;
  /** Access to subgraph metadata */
  MASTERCHEF_V2__meta?: Maybe<_Meta_>;
  MASTERCHEF_V2_sourceName?: Maybe<Scalars['String']>;
};


export type QueryMASTERCHEF_V2_masterChefArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V2_masterChefsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterChef_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterChef_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V2_poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V2_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V2_rewarderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V2_rewardersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rewarder_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Rewarder_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V2_userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V2_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMASTERCHEF_V2__metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Rewarder = {
  id: Scalars['ID'];
  rewardToken: Scalars['Bytes'];
  rewardPerSecond: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  block: Scalars['BigInt'];
  sourceName?: Maybe<Scalars['String']>;
};

export type Rewarder_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rewardToken?: InputMaybe<Scalars['Bytes']>;
  rewardToken_not?: InputMaybe<Scalars['Bytes']>;
  rewardToken_gt?: InputMaybe<Scalars['Bytes']>;
  rewardToken_lt?: InputMaybe<Scalars['Bytes']>;
  rewardToken_gte?: InputMaybe<Scalars['Bytes']>;
  rewardToken_lte?: InputMaybe<Scalars['Bytes']>;
  rewardToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardToken_contains?: InputMaybe<Scalars['Bytes']>;
  rewardToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewardPerSecond?: InputMaybe<Scalars['BigInt']>;
  rewardPerSecond_not?: InputMaybe<Scalars['BigInt']>;
  rewardPerSecond_gt?: InputMaybe<Scalars['BigInt']>;
  rewardPerSecond_lt?: InputMaybe<Scalars['BigInt']>;
  rewardPerSecond_gte?: InputMaybe<Scalars['BigInt']>;
  rewardPerSecond_lte?: InputMaybe<Scalars['BigInt']>;
  rewardPerSecond_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardPerSecond_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  and?: InputMaybe<Array<InputMaybe<Rewarder_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Rewarder_filter>>>;
};

export type Rewarder_orderBy =
  | 'id'
  | 'rewardToken'
  | 'rewardPerSecond'
  | 'timestamp'
  | 'block';

export type Subscription = {
  MASTERCHEF_V2_masterChef?: Maybe<MasterChef>;
  MASTERCHEF_V2_masterChefs: Array<MasterChef>;
  MASTERCHEF_V2_pool?: Maybe<Pool>;
  MASTERCHEF_V2_pools: Array<Pool>;
  MASTERCHEF_V2_rewarder?: Maybe<Rewarder>;
  MASTERCHEF_V2_rewarders: Array<Rewarder>;
  MASTERCHEF_V2_user?: Maybe<User>;
  MASTERCHEF_V2_users: Array<User>;
  /** Access to subgraph metadata */
  MASTERCHEF_V2__meta?: Maybe<_Meta_>;
  MASTERCHEF_V2_sourceName?: Maybe<Scalars['String']>;
};


export type SubscriptionMASTERCHEF_V2_masterChefArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V2_masterChefsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterChef_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterChef_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V2_poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V2_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V2_rewarderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V2_rewardersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rewarder_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Rewarder_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V2_userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V2_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMASTERCHEF_V2__metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type User = {
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  pool?: Maybe<Pool>;
  amount: Scalars['BigInt'];
  rewardDebt: Scalars['BigInt'];
  sushiHarvested: Scalars['BigInt'];
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
  sushiHarvested?: InputMaybe<Scalars['BigInt']>;
  sushiHarvested_not?: InputMaybe<Scalars['BigInt']>;
  sushiHarvested_gt?: InputMaybe<Scalars['BigInt']>;
  sushiHarvested_lt?: InputMaybe<Scalars['BigInt']>;
  sushiHarvested_gte?: InputMaybe<Scalars['BigInt']>;
  sushiHarvested_lte?: InputMaybe<Scalars['BigInt']>;
  sushiHarvested_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sushiHarvested_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  | 'pool__slpBalance'
  | 'pool__userCount'
  | 'pool__timestamp'
  | 'pool__block'
  | 'amount'
  | 'rewardDebt'
  | 'sushiHarvested'
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
  MASTERCHEF_V2_masterChef: InContextSdkMethod<Query['MASTERCHEF_V2_masterChef'], QueryMASTERCHEF_V2_masterChefArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V2_masterChefs: InContextSdkMethod<Query['MASTERCHEF_V2_masterChefs'], QueryMASTERCHEF_V2_masterChefsArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V2_pool: InContextSdkMethod<Query['MASTERCHEF_V2_pool'], QueryMASTERCHEF_V2_poolArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V2_pools: InContextSdkMethod<Query['MASTERCHEF_V2_pools'], QueryMASTERCHEF_V2_poolsArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V2_rewarder: InContextSdkMethod<Query['MASTERCHEF_V2_rewarder'], QueryMASTERCHEF_V2_rewarderArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V2_rewarders: InContextSdkMethod<Query['MASTERCHEF_V2_rewarders'], QueryMASTERCHEF_V2_rewardersArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V2_user: InContextSdkMethod<Query['MASTERCHEF_V2_user'], QueryMASTERCHEF_V2_userArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V2_users: InContextSdkMethod<Query['MASTERCHEF_V2_users'], QueryMASTERCHEF_V2_usersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  MASTERCHEF_V2__meta: InContextSdkMethod<Query['MASTERCHEF_V2__meta'], QueryMASTERCHEF_V2__metaArgs, MeshContext>,
  /** undefined **/
  MASTERCHEF_V2_sourceName: InContextSdkMethod<Query['MASTERCHEF_V2_sourceName'], {}, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  MASTERCHEF_V2_masterChef: InContextSdkMethod<Subscription['MASTERCHEF_V2_masterChef'], SubscriptionMASTERCHEF_V2_masterChefArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V2_masterChefs: InContextSdkMethod<Subscription['MASTERCHEF_V2_masterChefs'], SubscriptionMASTERCHEF_V2_masterChefsArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V2_pool: InContextSdkMethod<Subscription['MASTERCHEF_V2_pool'], SubscriptionMASTERCHEF_V2_poolArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V2_pools: InContextSdkMethod<Subscription['MASTERCHEF_V2_pools'], SubscriptionMASTERCHEF_V2_poolsArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V2_rewarder: InContextSdkMethod<Subscription['MASTERCHEF_V2_rewarder'], SubscriptionMASTERCHEF_V2_rewarderArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V2_rewarders: InContextSdkMethod<Subscription['MASTERCHEF_V2_rewarders'], SubscriptionMASTERCHEF_V2_rewardersArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V2_user: InContextSdkMethod<Subscription['MASTERCHEF_V2_user'], SubscriptionMASTERCHEF_V2_userArgs, MeshContext>,
  /** null **/
  MASTERCHEF_V2_users: InContextSdkMethod<Subscription['MASTERCHEF_V2_users'], SubscriptionMASTERCHEF_V2_usersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  MASTERCHEF_V2__meta: InContextSdkMethod<Subscription['MASTERCHEF_V2__meta'], SubscriptionMASTERCHEF_V2__metaArgs, MeshContext>,
  /** undefined **/
  MASTERCHEF_V2_sourceName: InContextSdkMethod<Subscription['MASTERCHEF_V2_sourceName'], {}, MeshContext>
  };

  export type Context = {
      ["MasterChefV2"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
