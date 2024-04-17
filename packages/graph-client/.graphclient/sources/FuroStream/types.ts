// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace FuroStreamTypes {
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

export type FuroStatus =
  | 'ACTIVE'
  | 'CANCELLED';

export type Global = {
  id: Scalars['ID'];
  vestingCount: Scalars['BigInt'];
  streamCount: Scalars['BigInt'];
  userCount: Scalars['BigInt'];
  transactionCount: Scalars['BigInt'];
};

export type Global_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  vestingCount?: InputMaybe<Scalars['BigInt']>;
  vestingCount_not?: InputMaybe<Scalars['BigInt']>;
  vestingCount_gt?: InputMaybe<Scalars['BigInt']>;
  vestingCount_lt?: InputMaybe<Scalars['BigInt']>;
  vestingCount_gte?: InputMaybe<Scalars['BigInt']>;
  vestingCount_lte?: InputMaybe<Scalars['BigInt']>;
  vestingCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vestingCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  streamCount?: InputMaybe<Scalars['BigInt']>;
  streamCount_not?: InputMaybe<Scalars['BigInt']>;
  streamCount_gt?: InputMaybe<Scalars['BigInt']>;
  streamCount_lt?: InputMaybe<Scalars['BigInt']>;
  streamCount_gte?: InputMaybe<Scalars['BigInt']>;
  streamCount_lte?: InputMaybe<Scalars['BigInt']>;
  streamCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  streamCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount?: InputMaybe<Scalars['BigInt']>;
  userCount_not?: InputMaybe<Scalars['BigInt']>;
  userCount_gt?: InputMaybe<Scalars['BigInt']>;
  userCount_lt?: InputMaybe<Scalars['BigInt']>;
  userCount_gte?: InputMaybe<Scalars['BigInt']>;
  userCount_lte?: InputMaybe<Scalars['BigInt']>;
  userCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Global_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Global_filter>>>;
};

export type Global_orderBy =
  | 'id'
  | 'vestingCount'
  | 'streamCount'
  | 'userCount'
  | 'transactionCount';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  global?: Maybe<Global>;
  globals: Array<Global>;
  stream?: Maybe<Stream>;
  streams: Array<Stream>;
  vesting?: Maybe<Vesting>;
  vestings: Array<Vesting>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  user?: Maybe<User>;
  users: Array<User>;
  rebase?: Maybe<Rebase>;
  rebases: Array<Rebase>;
  tokenHourSnapshot?: Maybe<TokenHourSnapshot>;
  tokenHourSnapshots: Array<TokenHourSnapshot>;
  tokenDaySnapshot?: Maybe<TokenDaySnapshot>;
  tokenDaySnapshots: Array<TokenDaySnapshot>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryglobalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryglobalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Global_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Global_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystreamArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystreamsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stream_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stream_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvestingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvestingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vesting_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Vesting_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrebaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrebasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rebase_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Rebase_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenHourSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenHourSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenHourSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenHourSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenDaySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenDaySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDaySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDaySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Rebase = {
  /**  Token address  */
  id: Scalars['ID'];
  /**  Token this rebase belongs to  */
  token: Token;
  /**  Base (Share)  */
  base: Scalars['BigInt'];
  /**  Elastic (Amount)  */
  elastic: Scalars['BigInt'];
  /**  created at block, used internally to know when to ignore updates for the rebase  */
  createdAtBlock: Scalars['BigInt'];
};

export type Rebase_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  token_?: InputMaybe<Token_filter>;
  base?: InputMaybe<Scalars['BigInt']>;
  base_not?: InputMaybe<Scalars['BigInt']>;
  base_gt?: InputMaybe<Scalars['BigInt']>;
  base_lt?: InputMaybe<Scalars['BigInt']>;
  base_gte?: InputMaybe<Scalars['BigInt']>;
  base_lte?: InputMaybe<Scalars['BigInt']>;
  base_in?: InputMaybe<Array<Scalars['BigInt']>>;
  base_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  elastic?: InputMaybe<Scalars['BigInt']>;
  elastic_not?: InputMaybe<Scalars['BigInt']>;
  elastic_gt?: InputMaybe<Scalars['BigInt']>;
  elastic_lt?: InputMaybe<Scalars['BigInt']>;
  elastic_gte?: InputMaybe<Scalars['BigInt']>;
  elastic_lte?: InputMaybe<Scalars['BigInt']>;
  elastic_in?: InputMaybe<Array<Scalars['BigInt']>>;
  elastic_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Rebase_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Rebase_filter>>>;
};

export type Rebase_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__liquidityShares'
  | 'token__symbol'
  | 'token__symbolSuccess'
  | 'token__name'
  | 'token__nameSuccess'
  | 'token__decimals'
  | 'token__decimalsSuccess'
  | 'token__createdAtBlock'
  | 'token__createdAtTimestamp'
  | 'base'
  | 'elastic'
  | 'createdAtBlock';

export type Stream = {
  id: Scalars['ID'];
  recipient: User;
  /**  Initial shares  */
  initialShares: Scalars['BigInt'];
  /**  Initial amount  */
  initialAmount: Scalars['BigInt'];
  /**  Extended shares, increases for each time the stream is updated with a top up amount  */
  extendedShares: Scalars['BigInt'];
  /**  Set when a stream is extended, useful to keep track of how much many shares a stream contained after extending  */
  initialSharesExtended: Scalars['BigInt'];
  /**  Amount that has been withdrawn after extending the stream  */
  withdrawnAmountAfterExtension: Scalars['BigInt'];
  /**  Remaining shares  */
  remainingShares: Scalars['BigInt'];
  /**  Withdrawn amount  */
  withdrawnAmount: Scalars['BigInt'];
  token: Token;
  status: FuroStatus;
  createdBy: User;
  fromBentoBox: Scalars['Boolean'];
  startedAt: Scalars['BigInt'];
  expiresAt: Scalars['BigInt'];
  txHash: Scalars['String'];
  transactionCount: Scalars['BigInt'];
  createdAtBlock: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
  extendedAtBlock: Scalars['BigInt'];
  extendedAtTimestamp: Scalars['BigInt'];
  modifiedAtBlock: Scalars['BigInt'];
  modifiedAtTimestamp: Scalars['BigInt'];
};

export type Stream_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  recipient?: InputMaybe<Scalars['String']>;
  recipient_not?: InputMaybe<Scalars['String']>;
  recipient_gt?: InputMaybe<Scalars['String']>;
  recipient_lt?: InputMaybe<Scalars['String']>;
  recipient_gte?: InputMaybe<Scalars['String']>;
  recipient_lte?: InputMaybe<Scalars['String']>;
  recipient_in?: InputMaybe<Array<Scalars['String']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['String']>>;
  recipient_contains?: InputMaybe<Scalars['String']>;
  recipient_contains_nocase?: InputMaybe<Scalars['String']>;
  recipient_not_contains?: InputMaybe<Scalars['String']>;
  recipient_not_contains_nocase?: InputMaybe<Scalars['String']>;
  recipient_starts_with?: InputMaybe<Scalars['String']>;
  recipient_starts_with_nocase?: InputMaybe<Scalars['String']>;
  recipient_not_starts_with?: InputMaybe<Scalars['String']>;
  recipient_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  recipient_ends_with?: InputMaybe<Scalars['String']>;
  recipient_ends_with_nocase?: InputMaybe<Scalars['String']>;
  recipient_not_ends_with?: InputMaybe<Scalars['String']>;
  recipient_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  recipient_?: InputMaybe<User_filter>;
  initialShares?: InputMaybe<Scalars['BigInt']>;
  initialShares_not?: InputMaybe<Scalars['BigInt']>;
  initialShares_gt?: InputMaybe<Scalars['BigInt']>;
  initialShares_lt?: InputMaybe<Scalars['BigInt']>;
  initialShares_gte?: InputMaybe<Scalars['BigInt']>;
  initialShares_lte?: InputMaybe<Scalars['BigInt']>;
  initialShares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialShares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialAmount?: InputMaybe<Scalars['BigInt']>;
  initialAmount_not?: InputMaybe<Scalars['BigInt']>;
  initialAmount_gt?: InputMaybe<Scalars['BigInt']>;
  initialAmount_lt?: InputMaybe<Scalars['BigInt']>;
  initialAmount_gte?: InputMaybe<Scalars['BigInt']>;
  initialAmount_lte?: InputMaybe<Scalars['BigInt']>;
  initialAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  extendedShares?: InputMaybe<Scalars['BigInt']>;
  extendedShares_not?: InputMaybe<Scalars['BigInt']>;
  extendedShares_gt?: InputMaybe<Scalars['BigInt']>;
  extendedShares_lt?: InputMaybe<Scalars['BigInt']>;
  extendedShares_gte?: InputMaybe<Scalars['BigInt']>;
  extendedShares_lte?: InputMaybe<Scalars['BigInt']>;
  extendedShares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  extendedShares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialSharesExtended?: InputMaybe<Scalars['BigInt']>;
  initialSharesExtended_not?: InputMaybe<Scalars['BigInt']>;
  initialSharesExtended_gt?: InputMaybe<Scalars['BigInt']>;
  initialSharesExtended_lt?: InputMaybe<Scalars['BigInt']>;
  initialSharesExtended_gte?: InputMaybe<Scalars['BigInt']>;
  initialSharesExtended_lte?: InputMaybe<Scalars['BigInt']>;
  initialSharesExtended_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialSharesExtended_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnAmountAfterExtension?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmountAfterExtension_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmountAfterExtension_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmountAfterExtension_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmountAfterExtension_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmountAfterExtension_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmountAfterExtension_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnAmountAfterExtension_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  remainingShares?: InputMaybe<Scalars['BigInt']>;
  remainingShares_not?: InputMaybe<Scalars['BigInt']>;
  remainingShares_gt?: InputMaybe<Scalars['BigInt']>;
  remainingShares_lt?: InputMaybe<Scalars['BigInt']>;
  remainingShares_gte?: InputMaybe<Scalars['BigInt']>;
  remainingShares_lte?: InputMaybe<Scalars['BigInt']>;
  remainingShares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  remainingShares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnAmount?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  token_?: InputMaybe<Token_filter>;
  status?: InputMaybe<FuroStatus>;
  status_not?: InputMaybe<FuroStatus>;
  status_in?: InputMaybe<Array<FuroStatus>>;
  status_not_in?: InputMaybe<Array<FuroStatus>>;
  createdBy?: InputMaybe<Scalars['String']>;
  createdBy_not?: InputMaybe<Scalars['String']>;
  createdBy_gt?: InputMaybe<Scalars['String']>;
  createdBy_lt?: InputMaybe<Scalars['String']>;
  createdBy_gte?: InputMaybe<Scalars['String']>;
  createdBy_lte?: InputMaybe<Scalars['String']>;
  createdBy_in?: InputMaybe<Array<Scalars['String']>>;
  createdBy_not_in?: InputMaybe<Array<Scalars['String']>>;
  createdBy_contains?: InputMaybe<Scalars['String']>;
  createdBy_contains_nocase?: InputMaybe<Scalars['String']>;
  createdBy_not_contains?: InputMaybe<Scalars['String']>;
  createdBy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  createdBy_starts_with?: InputMaybe<Scalars['String']>;
  createdBy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdBy_not_starts_with?: InputMaybe<Scalars['String']>;
  createdBy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdBy_ends_with?: InputMaybe<Scalars['String']>;
  createdBy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdBy_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdBy_?: InputMaybe<User_filter>;
  fromBentoBox?: InputMaybe<Scalars['Boolean']>;
  fromBentoBox_not?: InputMaybe<Scalars['Boolean']>;
  fromBentoBox_in?: InputMaybe<Array<Scalars['Boolean']>>;
  fromBentoBox_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  startedAt?: InputMaybe<Scalars['BigInt']>;
  startedAt_not?: InputMaybe<Scalars['BigInt']>;
  startedAt_gt?: InputMaybe<Scalars['BigInt']>;
  startedAt_lt?: InputMaybe<Scalars['BigInt']>;
  startedAt_gte?: InputMaybe<Scalars['BigInt']>;
  startedAt_lte?: InputMaybe<Scalars['BigInt']>;
  startedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiresAt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_not?: InputMaybe<Scalars['BigInt']>;
  expiresAt_gt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_lt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_gte?: InputMaybe<Scalars['BigInt']>;
  expiresAt_lte?: InputMaybe<Scalars['BigInt']>;
  expiresAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiresAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txHash?: InputMaybe<Scalars['String']>;
  txHash_not?: InputMaybe<Scalars['String']>;
  txHash_gt?: InputMaybe<Scalars['String']>;
  txHash_lt?: InputMaybe<Scalars['String']>;
  txHash_gte?: InputMaybe<Scalars['String']>;
  txHash_lte?: InputMaybe<Scalars['String']>;
  txHash_in?: InputMaybe<Array<Scalars['String']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  txHash_contains?: InputMaybe<Scalars['String']>;
  txHash_contains_nocase?: InputMaybe<Scalars['String']>;
  txHash_not_contains?: InputMaybe<Scalars['String']>;
  txHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  txHash_starts_with?: InputMaybe<Scalars['String']>;
  txHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']>;
  txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_ends_with?: InputMaybe<Scalars['String']>;
  txHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']>;
  txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  extendedAtBlock?: InputMaybe<Scalars['BigInt']>;
  extendedAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  extendedAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  extendedAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  extendedAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  extendedAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  extendedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  extendedAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  extendedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  extendedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  extendedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  extendedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  extendedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  extendedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  extendedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  extendedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  modifiedAtBlock?: InputMaybe<Scalars['BigInt']>;
  modifiedAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  modifiedAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  modifiedAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  modifiedAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  modifiedAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  modifiedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  modifiedAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  modifiedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  modifiedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  modifiedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  modifiedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  modifiedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  modifiedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  modifiedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  modifiedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Stream_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Stream_filter>>>;
};

export type Stream_orderBy =
  | 'id'
  | 'recipient'
  | 'recipient__id'
  | 'recipient__createdAtBlock'
  | 'recipient__createdAtTimestamp'
  | 'initialShares'
  | 'initialAmount'
  | 'extendedShares'
  | 'initialSharesExtended'
  | 'withdrawnAmountAfterExtension'
  | 'remainingShares'
  | 'withdrawnAmount'
  | 'token'
  | 'token__id'
  | 'token__liquidityShares'
  | 'token__symbol'
  | 'token__symbolSuccess'
  | 'token__name'
  | 'token__nameSuccess'
  | 'token__decimals'
  | 'token__decimalsSuccess'
  | 'token__createdAtBlock'
  | 'token__createdAtTimestamp'
  | 'status'
  | 'createdBy'
  | 'createdBy__id'
  | 'createdBy__createdAtBlock'
  | 'createdBy__createdAtTimestamp'
  | 'fromBentoBox'
  | 'startedAt'
  | 'expiresAt'
  | 'txHash'
  | 'transactionCount'
  | 'createdAtBlock'
  | 'createdAtTimestamp'
  | 'extendedAtBlock'
  | 'extendedAtTimestamp'
  | 'modifiedAtBlock'
  | 'modifiedAtTimestamp';

export type Subscription = {
  global?: Maybe<Global>;
  globals: Array<Global>;
  stream?: Maybe<Stream>;
  streams: Array<Stream>;
  vesting?: Maybe<Vesting>;
  vestings: Array<Vesting>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  user?: Maybe<User>;
  users: Array<User>;
  rebase?: Maybe<Rebase>;
  rebases: Array<Rebase>;
  tokenHourSnapshot?: Maybe<TokenHourSnapshot>;
  tokenHourSnapshots: Array<TokenHourSnapshot>;
  tokenDaySnapshot?: Maybe<TokenDaySnapshot>;
  tokenDaySnapshots: Array<TokenDaySnapshot>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionglobalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionglobalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Global_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Global_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstreamArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstreamsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stream_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stream_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvestingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvestingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vesting_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Vesting_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrebaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrebasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rebase_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Rebase_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenHourSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenHourSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenHourSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenHourSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenDaySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenDaySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDaySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDaySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Token = {
  id: Scalars['ID'];
  liquidityShares: Scalars['BigInt'];
  symbol: Scalars['String'];
  symbolSuccess: Scalars['Boolean'];
  name: Scalars['String'];
  nameSuccess: Scalars['Boolean'];
  decimals: Scalars['BigInt'];
  decimalsSuccess: Scalars['Boolean'];
  rebase: Rebase;
  createdAtBlock: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
};

export type TokenDaySnapshot = {
  /**  {tokenId}-day-{timestamp}  */
  id: Scalars['ID'];
  date: Scalars['Int'];
  token: Token;
  cumulativeLiquidityShares: Scalars['BigInt'];
  cumulativeLiquidityAmount: Scalars['BigInt'];
  transactionCount: Scalars['BigInt'];
};

export type TokenDaySnapshot_filter = {
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
  token_?: InputMaybe<Token_filter>;
  cumulativeLiquidityShares?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityShares_not?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityShares_gt?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityShares_lt?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityShares_gte?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityShares_lte?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityShares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeLiquidityShares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeLiquidityAmount?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityAmount_not?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityAmount_gt?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityAmount_lt?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityAmount_gte?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityAmount_lte?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeLiquidityAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenDaySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenDaySnapshot_filter>>>;
};

export type TokenDaySnapshot_orderBy =
  | 'id'
  | 'date'
  | 'token'
  | 'token__id'
  | 'token__liquidityShares'
  | 'token__symbol'
  | 'token__symbolSuccess'
  | 'token__name'
  | 'token__nameSuccess'
  | 'token__decimals'
  | 'token__decimalsSuccess'
  | 'token__createdAtBlock'
  | 'token__createdAtTimestamp'
  | 'cumulativeLiquidityShares'
  | 'cumulativeLiquidityAmount'
  | 'transactionCount';

export type TokenHourSnapshot = {
  /**  {tokenId}-hour-{timestamp}  */
  id: Scalars['ID'];
  date: Scalars['Int'];
  token: Token;
  cumulativeLiquidityShares: Scalars['BigInt'];
  cumulativeLiquidityAmount: Scalars['BigInt'];
  transactionCount: Scalars['BigInt'];
};

export type TokenHourSnapshot_filter = {
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
  token_?: InputMaybe<Token_filter>;
  cumulativeLiquidityShares?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityShares_not?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityShares_gt?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityShares_lt?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityShares_gte?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityShares_lte?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityShares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeLiquidityShares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeLiquidityAmount?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityAmount_not?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityAmount_gt?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityAmount_lt?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityAmount_gte?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityAmount_lte?: InputMaybe<Scalars['BigInt']>;
  cumulativeLiquidityAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeLiquidityAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenHourSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenHourSnapshot_filter>>>;
};

export type TokenHourSnapshot_orderBy =
  | 'id'
  | 'date'
  | 'token'
  | 'token__id'
  | 'token__liquidityShares'
  | 'token__symbol'
  | 'token__symbolSuccess'
  | 'token__name'
  | 'token__nameSuccess'
  | 'token__decimals'
  | 'token__decimalsSuccess'
  | 'token__createdAtBlock'
  | 'token__createdAtTimestamp'
  | 'cumulativeLiquidityShares'
  | 'cumulativeLiquidityAmount'
  | 'transactionCount';

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidityShares?: InputMaybe<Scalars['BigInt']>;
  liquidityShares_not?: InputMaybe<Scalars['BigInt']>;
  liquidityShares_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityShares_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityShares_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityShares_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityShares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityShares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  rebase?: InputMaybe<Scalars['String']>;
  rebase_not?: InputMaybe<Scalars['String']>;
  rebase_gt?: InputMaybe<Scalars['String']>;
  rebase_lt?: InputMaybe<Scalars['String']>;
  rebase_gte?: InputMaybe<Scalars['String']>;
  rebase_lte?: InputMaybe<Scalars['String']>;
  rebase_in?: InputMaybe<Array<Scalars['String']>>;
  rebase_not_in?: InputMaybe<Array<Scalars['String']>>;
  rebase_contains?: InputMaybe<Scalars['String']>;
  rebase_contains_nocase?: InputMaybe<Scalars['String']>;
  rebase_not_contains?: InputMaybe<Scalars['String']>;
  rebase_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rebase_starts_with?: InputMaybe<Scalars['String']>;
  rebase_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rebase_not_starts_with?: InputMaybe<Scalars['String']>;
  rebase_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rebase_ends_with?: InputMaybe<Scalars['String']>;
  rebase_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rebase_not_ends_with?: InputMaybe<Scalars['String']>;
  rebase_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rebase_?: InputMaybe<Rebase_filter>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};

export type Token_orderBy =
  | 'id'
  | 'liquidityShares'
  | 'symbol'
  | 'symbolSuccess'
  | 'name'
  | 'nameSuccess'
  | 'decimals'
  | 'decimalsSuccess'
  | 'rebase'
  | 'rebase__id'
  | 'rebase__base'
  | 'rebase__elastic'
  | 'rebase__createdAtBlock'
  | 'createdAtBlock'
  | 'createdAtTimestamp';

export type Transaction = {
  id: Scalars['ID'];
  type: TransactionType;
  stream?: Maybe<Stream>;
  vesting?: Maybe<Vesting>;
  amount: Scalars['BigInt'];
  to: User;
  token: Token;
  toBentoBox: Scalars['Boolean'];
  txHash: Scalars['String'];
  createdAtBlock: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
};

export type TransactionType =
  | 'DEPOSIT'
  | 'EXTEND'
  | 'WITHDRAWAL'
  | 'DISBURSEMENT';

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<TransactionType>;
  type_not?: InputMaybe<TransactionType>;
  type_in?: InputMaybe<Array<TransactionType>>;
  type_not_in?: InputMaybe<Array<TransactionType>>;
  stream?: InputMaybe<Scalars['String']>;
  stream_not?: InputMaybe<Scalars['String']>;
  stream_gt?: InputMaybe<Scalars['String']>;
  stream_lt?: InputMaybe<Scalars['String']>;
  stream_gte?: InputMaybe<Scalars['String']>;
  stream_lte?: InputMaybe<Scalars['String']>;
  stream_in?: InputMaybe<Array<Scalars['String']>>;
  stream_not_in?: InputMaybe<Array<Scalars['String']>>;
  stream_contains?: InputMaybe<Scalars['String']>;
  stream_contains_nocase?: InputMaybe<Scalars['String']>;
  stream_not_contains?: InputMaybe<Scalars['String']>;
  stream_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stream_starts_with?: InputMaybe<Scalars['String']>;
  stream_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stream_not_starts_with?: InputMaybe<Scalars['String']>;
  stream_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stream_ends_with?: InputMaybe<Scalars['String']>;
  stream_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stream_not_ends_with?: InputMaybe<Scalars['String']>;
  stream_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stream_?: InputMaybe<Stream_filter>;
  vesting?: InputMaybe<Scalars['String']>;
  vesting_not?: InputMaybe<Scalars['String']>;
  vesting_gt?: InputMaybe<Scalars['String']>;
  vesting_lt?: InputMaybe<Scalars['String']>;
  vesting_gte?: InputMaybe<Scalars['String']>;
  vesting_lte?: InputMaybe<Scalars['String']>;
  vesting_in?: InputMaybe<Array<Scalars['String']>>;
  vesting_not_in?: InputMaybe<Array<Scalars['String']>>;
  vesting_contains?: InputMaybe<Scalars['String']>;
  vesting_contains_nocase?: InputMaybe<Scalars['String']>;
  vesting_not_contains?: InputMaybe<Scalars['String']>;
  vesting_not_contains_nocase?: InputMaybe<Scalars['String']>;
  vesting_starts_with?: InputMaybe<Scalars['String']>;
  vesting_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vesting_not_starts_with?: InputMaybe<Scalars['String']>;
  vesting_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vesting_ends_with?: InputMaybe<Scalars['String']>;
  vesting_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vesting_not_ends_with?: InputMaybe<Scalars['String']>;
  vesting_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vesting_?: InputMaybe<Vesting_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  to_?: InputMaybe<User_filter>;
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
  token_?: InputMaybe<Token_filter>;
  toBentoBox?: InputMaybe<Scalars['Boolean']>;
  toBentoBox_not?: InputMaybe<Scalars['Boolean']>;
  toBentoBox_in?: InputMaybe<Array<Scalars['Boolean']>>;
  toBentoBox_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  txHash?: InputMaybe<Scalars['String']>;
  txHash_not?: InputMaybe<Scalars['String']>;
  txHash_gt?: InputMaybe<Scalars['String']>;
  txHash_lt?: InputMaybe<Scalars['String']>;
  txHash_gte?: InputMaybe<Scalars['String']>;
  txHash_lte?: InputMaybe<Scalars['String']>;
  txHash_in?: InputMaybe<Array<Scalars['String']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  txHash_contains?: InputMaybe<Scalars['String']>;
  txHash_contains_nocase?: InputMaybe<Scalars['String']>;
  txHash_not_contains?: InputMaybe<Scalars['String']>;
  txHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  txHash_starts_with?: InputMaybe<Scalars['String']>;
  txHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']>;
  txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_ends_with?: InputMaybe<Scalars['String']>;
  txHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']>;
  txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transaction_filter>>>;
};

export type Transaction_orderBy =
  | 'id'
  | 'type'
  | 'stream'
  | 'stream__id'
  | 'stream__initialShares'
  | 'stream__initialAmount'
  | 'stream__extendedShares'
  | 'stream__initialSharesExtended'
  | 'stream__withdrawnAmountAfterExtension'
  | 'stream__remainingShares'
  | 'stream__withdrawnAmount'
  | 'stream__status'
  | 'stream__fromBentoBox'
  | 'stream__startedAt'
  | 'stream__expiresAt'
  | 'stream__txHash'
  | 'stream__transactionCount'
  | 'stream__createdAtBlock'
  | 'stream__createdAtTimestamp'
  | 'stream__extendedAtBlock'
  | 'stream__extendedAtTimestamp'
  | 'stream__modifiedAtBlock'
  | 'stream__modifiedAtTimestamp'
  | 'vesting'
  | 'vesting__id'
  | 'vesting__cliffDuration'
  | 'vesting__stepDuration'
  | 'vesting__steps'
  | 'vesting__cliffShares'
  | 'vesting__stepShares'
  | 'vesting__remainingShares'
  | 'vesting__initialShares'
  | 'vesting__initialAmount'
  | 'vesting__withdrawnAmount'
  | 'vesting__status'
  | 'vesting__fromBentoBox'
  | 'vesting__startedAt'
  | 'vesting__expiresAt'
  | 'vesting__txHash'
  | 'vesting__transactionCount'
  | 'vesting__createdAtBlock'
  | 'vesting__createdAtTimestamp'
  | 'vesting__modifiedAtBlock'
  | 'vesting__modifiedAtTimestamp'
  | 'vesting__cancelledAtBlock'
  | 'vesting__cancelledAtTimestamp'
  | 'amount'
  | 'to'
  | 'to__id'
  | 'to__createdAtBlock'
  | 'to__createdAtTimestamp'
  | 'token'
  | 'token__id'
  | 'token__liquidityShares'
  | 'token__symbol'
  | 'token__symbolSuccess'
  | 'token__name'
  | 'token__nameSuccess'
  | 'token__decimals'
  | 'token__decimalsSuccess'
  | 'token__createdAtBlock'
  | 'token__createdAtTimestamp'
  | 'toBentoBox'
  | 'txHash'
  | 'createdAtBlock'
  | 'createdAtTimestamp';

export type User = {
  id: Scalars['ID'];
  incomingStreams: Array<Stream>;
  outgoingStreams: Array<Stream>;
  incomingVestings: Array<Vesting>;
  outgoingVestings: Array<Vesting>;
  createdAtBlock: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
};


export type UserincomingStreamsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stream_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stream_filter>;
};


export type UseroutgoingStreamsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stream_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stream_filter>;
};


export type UserincomingVestingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vesting_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Vesting_filter>;
};


export type UseroutgoingVestingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vesting_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Vesting_filter>;
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
  incomingStreams_?: InputMaybe<Stream_filter>;
  outgoingStreams_?: InputMaybe<Stream_filter>;
  incomingVestings_?: InputMaybe<Vesting_filter>;
  outgoingVestings_?: InputMaybe<Vesting_filter>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'incomingStreams'
  | 'outgoingStreams'
  | 'incomingVestings'
  | 'outgoingVestings'
  | 'createdAtBlock'
  | 'createdAtTimestamp';

export type Vesting = {
  id: Scalars['ID'];
  recipient: User;
  cliffDuration: Scalars['BigInt'];
  stepDuration: Scalars['BigInt'];
  steps: Scalars['BigInt'];
  cliffShares: Scalars['BigInt'];
  stepShares: Scalars['BigInt'];
  /**  shares remaining, decreases on withdrawal  */
  remainingShares: Scalars['BigInt'];
  /**  Initial shares  */
  initialShares: Scalars['BigInt'];
  /**  Initial amount  */
  initialAmount: Scalars['BigInt'];
  /**  Withdrawn amount  */
  withdrawnAmount: Scalars['BigInt'];
  token: Token;
  status: FuroStatus;
  createdBy: User;
  fromBentoBox: Scalars['Boolean'];
  startedAt: Scalars['BigInt'];
  expiresAt: Scalars['BigInt'];
  txHash: Scalars['String'];
  transactionCount: Scalars['BigInt'];
  createdAtBlock: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
  modifiedAtBlock: Scalars['BigInt'];
  modifiedAtTimestamp: Scalars['BigInt'];
  cancelledAtBlock?: Maybe<Scalars['BigInt']>;
  cancelledAtTimestamp?: Maybe<Scalars['BigInt']>;
};

export type Vesting_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  recipient?: InputMaybe<Scalars['String']>;
  recipient_not?: InputMaybe<Scalars['String']>;
  recipient_gt?: InputMaybe<Scalars['String']>;
  recipient_lt?: InputMaybe<Scalars['String']>;
  recipient_gte?: InputMaybe<Scalars['String']>;
  recipient_lte?: InputMaybe<Scalars['String']>;
  recipient_in?: InputMaybe<Array<Scalars['String']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['String']>>;
  recipient_contains?: InputMaybe<Scalars['String']>;
  recipient_contains_nocase?: InputMaybe<Scalars['String']>;
  recipient_not_contains?: InputMaybe<Scalars['String']>;
  recipient_not_contains_nocase?: InputMaybe<Scalars['String']>;
  recipient_starts_with?: InputMaybe<Scalars['String']>;
  recipient_starts_with_nocase?: InputMaybe<Scalars['String']>;
  recipient_not_starts_with?: InputMaybe<Scalars['String']>;
  recipient_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  recipient_ends_with?: InputMaybe<Scalars['String']>;
  recipient_ends_with_nocase?: InputMaybe<Scalars['String']>;
  recipient_not_ends_with?: InputMaybe<Scalars['String']>;
  recipient_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  recipient_?: InputMaybe<User_filter>;
  cliffDuration?: InputMaybe<Scalars['BigInt']>;
  cliffDuration_not?: InputMaybe<Scalars['BigInt']>;
  cliffDuration_gt?: InputMaybe<Scalars['BigInt']>;
  cliffDuration_lt?: InputMaybe<Scalars['BigInt']>;
  cliffDuration_gte?: InputMaybe<Scalars['BigInt']>;
  cliffDuration_lte?: InputMaybe<Scalars['BigInt']>;
  cliffDuration_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cliffDuration_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stepDuration?: InputMaybe<Scalars['BigInt']>;
  stepDuration_not?: InputMaybe<Scalars['BigInt']>;
  stepDuration_gt?: InputMaybe<Scalars['BigInt']>;
  stepDuration_lt?: InputMaybe<Scalars['BigInt']>;
  stepDuration_gte?: InputMaybe<Scalars['BigInt']>;
  stepDuration_lte?: InputMaybe<Scalars['BigInt']>;
  stepDuration_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stepDuration_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  steps?: InputMaybe<Scalars['BigInt']>;
  steps_not?: InputMaybe<Scalars['BigInt']>;
  steps_gt?: InputMaybe<Scalars['BigInt']>;
  steps_lt?: InputMaybe<Scalars['BigInt']>;
  steps_gte?: InputMaybe<Scalars['BigInt']>;
  steps_lte?: InputMaybe<Scalars['BigInt']>;
  steps_in?: InputMaybe<Array<Scalars['BigInt']>>;
  steps_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cliffShares?: InputMaybe<Scalars['BigInt']>;
  cliffShares_not?: InputMaybe<Scalars['BigInt']>;
  cliffShares_gt?: InputMaybe<Scalars['BigInt']>;
  cliffShares_lt?: InputMaybe<Scalars['BigInt']>;
  cliffShares_gte?: InputMaybe<Scalars['BigInt']>;
  cliffShares_lte?: InputMaybe<Scalars['BigInt']>;
  cliffShares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cliffShares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stepShares?: InputMaybe<Scalars['BigInt']>;
  stepShares_not?: InputMaybe<Scalars['BigInt']>;
  stepShares_gt?: InputMaybe<Scalars['BigInt']>;
  stepShares_lt?: InputMaybe<Scalars['BigInt']>;
  stepShares_gte?: InputMaybe<Scalars['BigInt']>;
  stepShares_lte?: InputMaybe<Scalars['BigInt']>;
  stepShares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stepShares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  remainingShares?: InputMaybe<Scalars['BigInt']>;
  remainingShares_not?: InputMaybe<Scalars['BigInt']>;
  remainingShares_gt?: InputMaybe<Scalars['BigInt']>;
  remainingShares_lt?: InputMaybe<Scalars['BigInt']>;
  remainingShares_gte?: InputMaybe<Scalars['BigInt']>;
  remainingShares_lte?: InputMaybe<Scalars['BigInt']>;
  remainingShares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  remainingShares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialShares?: InputMaybe<Scalars['BigInt']>;
  initialShares_not?: InputMaybe<Scalars['BigInt']>;
  initialShares_gt?: InputMaybe<Scalars['BigInt']>;
  initialShares_lt?: InputMaybe<Scalars['BigInt']>;
  initialShares_gte?: InputMaybe<Scalars['BigInt']>;
  initialShares_lte?: InputMaybe<Scalars['BigInt']>;
  initialShares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialShares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialAmount?: InputMaybe<Scalars['BigInt']>;
  initialAmount_not?: InputMaybe<Scalars['BigInt']>;
  initialAmount_gt?: InputMaybe<Scalars['BigInt']>;
  initialAmount_lt?: InputMaybe<Scalars['BigInt']>;
  initialAmount_gte?: InputMaybe<Scalars['BigInt']>;
  initialAmount_lte?: InputMaybe<Scalars['BigInt']>;
  initialAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnAmount?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_not?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  token_?: InputMaybe<Token_filter>;
  status?: InputMaybe<FuroStatus>;
  status_not?: InputMaybe<FuroStatus>;
  status_in?: InputMaybe<Array<FuroStatus>>;
  status_not_in?: InputMaybe<Array<FuroStatus>>;
  createdBy?: InputMaybe<Scalars['String']>;
  createdBy_not?: InputMaybe<Scalars['String']>;
  createdBy_gt?: InputMaybe<Scalars['String']>;
  createdBy_lt?: InputMaybe<Scalars['String']>;
  createdBy_gte?: InputMaybe<Scalars['String']>;
  createdBy_lte?: InputMaybe<Scalars['String']>;
  createdBy_in?: InputMaybe<Array<Scalars['String']>>;
  createdBy_not_in?: InputMaybe<Array<Scalars['String']>>;
  createdBy_contains?: InputMaybe<Scalars['String']>;
  createdBy_contains_nocase?: InputMaybe<Scalars['String']>;
  createdBy_not_contains?: InputMaybe<Scalars['String']>;
  createdBy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  createdBy_starts_with?: InputMaybe<Scalars['String']>;
  createdBy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdBy_not_starts_with?: InputMaybe<Scalars['String']>;
  createdBy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdBy_ends_with?: InputMaybe<Scalars['String']>;
  createdBy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdBy_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdBy_?: InputMaybe<User_filter>;
  fromBentoBox?: InputMaybe<Scalars['Boolean']>;
  fromBentoBox_not?: InputMaybe<Scalars['Boolean']>;
  fromBentoBox_in?: InputMaybe<Array<Scalars['Boolean']>>;
  fromBentoBox_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  startedAt?: InputMaybe<Scalars['BigInt']>;
  startedAt_not?: InputMaybe<Scalars['BigInt']>;
  startedAt_gt?: InputMaybe<Scalars['BigInt']>;
  startedAt_lt?: InputMaybe<Scalars['BigInt']>;
  startedAt_gte?: InputMaybe<Scalars['BigInt']>;
  startedAt_lte?: InputMaybe<Scalars['BigInt']>;
  startedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiresAt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_not?: InputMaybe<Scalars['BigInt']>;
  expiresAt_gt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_lt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_gte?: InputMaybe<Scalars['BigInt']>;
  expiresAt_lte?: InputMaybe<Scalars['BigInt']>;
  expiresAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiresAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txHash?: InputMaybe<Scalars['String']>;
  txHash_not?: InputMaybe<Scalars['String']>;
  txHash_gt?: InputMaybe<Scalars['String']>;
  txHash_lt?: InputMaybe<Scalars['String']>;
  txHash_gte?: InputMaybe<Scalars['String']>;
  txHash_lte?: InputMaybe<Scalars['String']>;
  txHash_in?: InputMaybe<Array<Scalars['String']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  txHash_contains?: InputMaybe<Scalars['String']>;
  txHash_contains_nocase?: InputMaybe<Scalars['String']>;
  txHash_not_contains?: InputMaybe<Scalars['String']>;
  txHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  txHash_starts_with?: InputMaybe<Scalars['String']>;
  txHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']>;
  txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_ends_with?: InputMaybe<Scalars['String']>;
  txHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']>;
  txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  modifiedAtBlock?: InputMaybe<Scalars['BigInt']>;
  modifiedAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  modifiedAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  modifiedAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  modifiedAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  modifiedAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  modifiedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  modifiedAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  modifiedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  modifiedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  modifiedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  modifiedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  modifiedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  modifiedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  modifiedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  modifiedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledAtBlock?: InputMaybe<Scalars['BigInt']>;
  cancelledAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  cancelledAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  cancelledAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  cancelledAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  cancelledAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  cancelledAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  cancelledAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  cancelledAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  cancelledAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  cancelledAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  cancelledAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  cancelledAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelledAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Vesting_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Vesting_filter>>>;
};

export type Vesting_orderBy =
  | 'id'
  | 'recipient'
  | 'recipient__id'
  | 'recipient__createdAtBlock'
  | 'recipient__createdAtTimestamp'
  | 'cliffDuration'
  | 'stepDuration'
  | 'steps'
  | 'cliffShares'
  | 'stepShares'
  | 'remainingShares'
  | 'initialShares'
  | 'initialAmount'
  | 'withdrawnAmount'
  | 'token'
  | 'token__id'
  | 'token__liquidityShares'
  | 'token__symbol'
  | 'token__symbolSuccess'
  | 'token__name'
  | 'token__nameSuccess'
  | 'token__decimals'
  | 'token__decimalsSuccess'
  | 'token__createdAtBlock'
  | 'token__createdAtTimestamp'
  | 'status'
  | 'createdBy'
  | 'createdBy__id'
  | 'createdBy__createdAtBlock'
  | 'createdBy__createdAtTimestamp'
  | 'fromBentoBox'
  | 'startedAt'
  | 'expiresAt'
  | 'txHash'
  | 'transactionCount'
  | 'createdAtBlock'
  | 'createdAtTimestamp'
  | 'modifiedAtBlock'
  | 'modifiedAtTimestamp'
  | 'cancelledAtBlock'
  | 'cancelledAtTimestamp';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']>;
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
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  global: InContextSdkMethod<Query['global'], QueryglobalArgs, MeshContext>,
  /** null **/
  globals: InContextSdkMethod<Query['globals'], QueryglobalsArgs, MeshContext>,
  /** null **/
  stream: InContextSdkMethod<Query['stream'], QuerystreamArgs, MeshContext>,
  /** null **/
  streams: InContextSdkMethod<Query['streams'], QuerystreamsArgs, MeshContext>,
  /** null **/
  vesting: InContextSdkMethod<Query['vesting'], QueryvestingArgs, MeshContext>,
  /** null **/
  vestings: InContextSdkMethod<Query['vestings'], QueryvestingsArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<Query['transaction'], QuerytransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<Query['transactions'], QuerytransactionsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  rebase: InContextSdkMethod<Query['rebase'], QueryrebaseArgs, MeshContext>,
  /** null **/
  rebases: InContextSdkMethod<Query['rebases'], QueryrebasesArgs, MeshContext>,
  /** null **/
  tokenHourSnapshot: InContextSdkMethod<Query['tokenHourSnapshot'], QuerytokenHourSnapshotArgs, MeshContext>,
  /** null **/
  tokenHourSnapshots: InContextSdkMethod<Query['tokenHourSnapshots'], QuerytokenHourSnapshotsArgs, MeshContext>,
  /** null **/
  tokenDaySnapshot: InContextSdkMethod<Query['tokenDaySnapshot'], QuerytokenDaySnapshotArgs, MeshContext>,
  /** null **/
  tokenDaySnapshots: InContextSdkMethod<Query['tokenDaySnapshots'], QuerytokenDaySnapshotsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  global: InContextSdkMethod<Subscription['global'], SubscriptionglobalArgs, MeshContext>,
  /** null **/
  globals: InContextSdkMethod<Subscription['globals'], SubscriptionglobalsArgs, MeshContext>,
  /** null **/
  stream: InContextSdkMethod<Subscription['stream'], SubscriptionstreamArgs, MeshContext>,
  /** null **/
  streams: InContextSdkMethod<Subscription['streams'], SubscriptionstreamsArgs, MeshContext>,
  /** null **/
  vesting: InContextSdkMethod<Subscription['vesting'], SubscriptionvestingArgs, MeshContext>,
  /** null **/
  vestings: InContextSdkMethod<Subscription['vestings'], SubscriptionvestingsArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<Subscription['transaction'], SubscriptiontransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<Subscription['transactions'], SubscriptiontransactionsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** null **/
  rebase: InContextSdkMethod<Subscription['rebase'], SubscriptionrebaseArgs, MeshContext>,
  /** null **/
  rebases: InContextSdkMethod<Subscription['rebases'], SubscriptionrebasesArgs, MeshContext>,
  /** null **/
  tokenHourSnapshot: InContextSdkMethod<Subscription['tokenHourSnapshot'], SubscriptiontokenHourSnapshotArgs, MeshContext>,
  /** null **/
  tokenHourSnapshots: InContextSdkMethod<Subscription['tokenHourSnapshots'], SubscriptiontokenHourSnapshotsArgs, MeshContext>,
  /** null **/
  tokenDaySnapshot: InContextSdkMethod<Subscription['tokenDaySnapshot'], SubscriptiontokenDaySnapshotArgs, MeshContext>,
  /** null **/
  tokenDaySnapshots: InContextSdkMethod<Subscription['tokenDaySnapshots'], SubscriptiontokenDaySnapshotsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["FuroStream"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      ["subgraphHost"]: Scalars['ID'],
["subgraphName"]: Scalars['ID']
    };
}
