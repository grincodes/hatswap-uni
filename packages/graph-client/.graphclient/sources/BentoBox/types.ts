// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace BentoBoxTypes {
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

export type Balance = {
  id: Scalars['ID'];
  token: Token;
  user: User;
  share: Scalars['BigInt'];
};

export type Balance_filter = {
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
  user_?: InputMaybe<User_filter>;
  share?: InputMaybe<Scalars['BigInt']>;
  share_not?: InputMaybe<Scalars['BigInt']>;
  share_gt?: InputMaybe<Scalars['BigInt']>;
  share_lt?: InputMaybe<Scalars['BigInt']>;
  share_gte?: InputMaybe<Scalars['BigInt']>;
  share_lte?: InputMaybe<Scalars['BigInt']>;
  share_in?: InputMaybe<Array<Scalars['BigInt']>>;
  share_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Balance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Balance_filter>>>;
};

export type Balance_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__symbolSuccess'
  | 'token__name'
  | 'token__nameSuccess'
  | 'token__decimals'
  | 'token__decimalsSuccess'
  | 'user'
  | 'user__id'
  | 'user__block'
  | 'user__timestamp'
  | 'share';

export type BentoBox = {
  /**  BentoBox address  */
  id: Scalars['ID'];
  /**  Protocols that belong to this bento box  */
  protocols?: Maybe<Array<Protocol>>;
  /**  Users that belong to this bento box  */
  users?: Maybe<Array<User>>;
  /**  Tokens that belong to this bento box  */
  tokens?: Maybe<Array<Token>>;
  /**  Master contracts that belong to this bento box  */
  masterContracts: Array<MasterContract>;
  /**  Clones that belong to this bento box  */
  clones?: Maybe<Array<Clone>>;
  /**  Flash loans that belong to this bento box  */
  flashloans?: Maybe<Array<FlashLoan>>;
  /**  Transactions that belong to this bento box  */
  transactions?: Maybe<Array<Transaction>>;
  /**  Totals that belong to this bento box  */
  totals?: Maybe<Array<Rebase>>;
};


export type BentoBoxprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
};


export type BentoBoxusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
};


export type BentoBoxtokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};


export type BentoBoxmasterContractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContract_filter>;
};


export type BentoBoxclonesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Clone_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Clone_filter>;
};


export type BentoBoxflashloansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlashLoan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlashLoan_filter>;
};


export type BentoBoxtransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
};


export type BentoBoxtotalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rebase_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Rebase_filter>;
};

export type BentoBoxKpi = {
  /**  BentoBox address  */
  id: Scalars['ID'];
  /**  Deposit count  */
  depositCount: Scalars['BigInt'];
  /**  Withdraw count  */
  withdrawCount: Scalars['BigInt'];
  /**  Transfer count  */
  transferCount: Scalars['BigInt'];
  /**  Protocol count  */
  protocolCount: Scalars['BigInt'];
  /**  User count  */
  userCount: Scalars['BigInt'];
  /**  Token count  */
  tokenCount: Scalars['BigInt'];
  /**  Master contract count  */
  masterContractCount: Scalars['BigInt'];
  /**  Clone count  */
  cloneCount: Scalars['BigInt'];
  /**  Flash loan count  */
  flashloanCount: Scalars['BigInt'];
  /**  Transaction count  */
  transactionCount: Scalars['BigInt'];
  /**  Strategy count  */
  strategyCount: Scalars['BigInt'];
  /**  Active strategy count  */
  activeStrategyCount: Scalars['BigInt'];
  /**  Pending strategy count  */
  pendingStrategyCount: Scalars['BigInt'];
};

export type BentoBoxKpi_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  depositCount?: InputMaybe<Scalars['BigInt']>;
  depositCount_not?: InputMaybe<Scalars['BigInt']>;
  depositCount_gt?: InputMaybe<Scalars['BigInt']>;
  depositCount_lt?: InputMaybe<Scalars['BigInt']>;
  depositCount_gte?: InputMaybe<Scalars['BigInt']>;
  depositCount_lte?: InputMaybe<Scalars['BigInt']>;
  depositCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawCount?: InputMaybe<Scalars['BigInt']>;
  withdrawCount_not?: InputMaybe<Scalars['BigInt']>;
  withdrawCount_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawCount_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawCount_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawCount_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferCount?: InputMaybe<Scalars['BigInt']>;
  transferCount_not?: InputMaybe<Scalars['BigInt']>;
  transferCount_gt?: InputMaybe<Scalars['BigInt']>;
  transferCount_lt?: InputMaybe<Scalars['BigInt']>;
  transferCount_gte?: InputMaybe<Scalars['BigInt']>;
  transferCount_lte?: InputMaybe<Scalars['BigInt']>;
  transferCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocolCount?: InputMaybe<Scalars['BigInt']>;
  protocolCount_not?: InputMaybe<Scalars['BigInt']>;
  protocolCount_gt?: InputMaybe<Scalars['BigInt']>;
  protocolCount_lt?: InputMaybe<Scalars['BigInt']>;
  protocolCount_gte?: InputMaybe<Scalars['BigInt']>;
  protocolCount_lte?: InputMaybe<Scalars['BigInt']>;
  protocolCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocolCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount?: InputMaybe<Scalars['BigInt']>;
  userCount_not?: InputMaybe<Scalars['BigInt']>;
  userCount_gt?: InputMaybe<Scalars['BigInt']>;
  userCount_lt?: InputMaybe<Scalars['BigInt']>;
  userCount_gte?: InputMaybe<Scalars['BigInt']>;
  userCount_lte?: InputMaybe<Scalars['BigInt']>;
  userCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount?: InputMaybe<Scalars['BigInt']>;
  tokenCount_not?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  masterContractCount?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_not?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_gt?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_lt?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_gte?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_lte?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  masterContractCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cloneCount?: InputMaybe<Scalars['BigInt']>;
  cloneCount_not?: InputMaybe<Scalars['BigInt']>;
  cloneCount_gt?: InputMaybe<Scalars['BigInt']>;
  cloneCount_lt?: InputMaybe<Scalars['BigInt']>;
  cloneCount_gte?: InputMaybe<Scalars['BigInt']>;
  cloneCount_lte?: InputMaybe<Scalars['BigInt']>;
  cloneCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cloneCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flashloanCount?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_not?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_gt?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_lt?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_gte?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_lte?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flashloanCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  strategyCount?: InputMaybe<Scalars['BigInt']>;
  strategyCount_not?: InputMaybe<Scalars['BigInt']>;
  strategyCount_gt?: InputMaybe<Scalars['BigInt']>;
  strategyCount_lt?: InputMaybe<Scalars['BigInt']>;
  strategyCount_gte?: InputMaybe<Scalars['BigInt']>;
  strategyCount_lte?: InputMaybe<Scalars['BigInt']>;
  strategyCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  strategyCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  activeStrategyCount?: InputMaybe<Scalars['BigInt']>;
  activeStrategyCount_not?: InputMaybe<Scalars['BigInt']>;
  activeStrategyCount_gt?: InputMaybe<Scalars['BigInt']>;
  activeStrategyCount_lt?: InputMaybe<Scalars['BigInt']>;
  activeStrategyCount_gte?: InputMaybe<Scalars['BigInt']>;
  activeStrategyCount_lte?: InputMaybe<Scalars['BigInt']>;
  activeStrategyCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  activeStrategyCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pendingStrategyCount?: InputMaybe<Scalars['BigInt']>;
  pendingStrategyCount_not?: InputMaybe<Scalars['BigInt']>;
  pendingStrategyCount_gt?: InputMaybe<Scalars['BigInt']>;
  pendingStrategyCount_lt?: InputMaybe<Scalars['BigInt']>;
  pendingStrategyCount_gte?: InputMaybe<Scalars['BigInt']>;
  pendingStrategyCount_lte?: InputMaybe<Scalars['BigInt']>;
  pendingStrategyCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pendingStrategyCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BentoBoxKpi_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BentoBoxKpi_filter>>>;
};

export type BentoBoxKpi_orderBy =
  | 'id'
  | 'depositCount'
  | 'withdrawCount'
  | 'transferCount'
  | 'protocolCount'
  | 'userCount'
  | 'tokenCount'
  | 'masterContractCount'
  | 'cloneCount'
  | 'flashloanCount'
  | 'transactionCount'
  | 'strategyCount'
  | 'activeStrategyCount'
  | 'pendingStrategyCount';

export type BentoBox_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocols_?: InputMaybe<Protocol_filter>;
  users_?: InputMaybe<User_filter>;
  tokens_?: InputMaybe<Token_filter>;
  masterContracts_?: InputMaybe<MasterContract_filter>;
  clones_?: InputMaybe<Clone_filter>;
  flashloans_?: InputMaybe<FlashLoan_filter>;
  transactions_?: InputMaybe<Transaction_filter>;
  totals_?: InputMaybe<Rebase_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BentoBox_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BentoBox_filter>>>;
};

export type BentoBox_orderBy =
  | 'id'
  | 'protocols'
  | 'users'
  | 'tokens'
  | 'masterContracts'
  | 'clones'
  | 'flashloans'
  | 'transactions'
  | 'totals';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Clone = {
  /**  Clone address  */
  id: Scalars['ID'];
  /**  BentoBox this clone belongs to  */
  bentoBox: BentoBox;
  /**  Master contract this clone belongs to  */
  masterContract: MasterContract;
  /**  Clone data  */
  data: Scalars['Bytes'];
  /**  Block number of this clone  */
  block: Scalars['BigInt'];
  /**  Timestamp of this clone  */
  timestamp: Scalars['BigInt'];
};

export type Clone_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_?: InputMaybe<BentoBox_filter>;
  masterContract?: InputMaybe<Scalars['String']>;
  masterContract_not?: InputMaybe<Scalars['String']>;
  masterContract_gt?: InputMaybe<Scalars['String']>;
  masterContract_lt?: InputMaybe<Scalars['String']>;
  masterContract_gte?: InputMaybe<Scalars['String']>;
  masterContract_lte?: InputMaybe<Scalars['String']>;
  masterContract_in?: InputMaybe<Array<Scalars['String']>>;
  masterContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  masterContract_contains?: InputMaybe<Scalars['String']>;
  masterContract_contains_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_contains?: InputMaybe<Scalars['String']>;
  masterContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  masterContract_starts_with?: InputMaybe<Scalars['String']>;
  masterContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_starts_with?: InputMaybe<Scalars['String']>;
  masterContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_ends_with?: InputMaybe<Scalars['String']>;
  masterContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_ends_with?: InputMaybe<Scalars['String']>;
  masterContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_?: InputMaybe<MasterContract_filter>;
  data?: InputMaybe<Scalars['Bytes']>;
  data_not?: InputMaybe<Scalars['Bytes']>;
  data_gt?: InputMaybe<Scalars['Bytes']>;
  data_lt?: InputMaybe<Scalars['Bytes']>;
  data_gte?: InputMaybe<Scalars['Bytes']>;
  data_lte?: InputMaybe<Scalars['Bytes']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_contains?: InputMaybe<Scalars['Bytes']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Clone_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Clone_filter>>>;
};

export type Clone_orderBy =
  | 'id'
  | 'bentoBox'
  | 'bentoBox__id'
  | 'masterContract'
  | 'masterContract__id'
  | 'masterContract__approved'
  | 'data'
  | 'block'
  | 'timestamp';

export type FlashLoan = {
  /**  Concatenation of transaction and log index  */
  id: Scalars['ID'];
  /**  BentoBox this flash loan belongs to  */
  bentoBox: BentoBox;
  /**  Borrower address  */
  borrower: Scalars['Bytes'];
  /**  Receiver address  */
  receiver: Scalars['Bytes'];
  /**  Token this flash loan belongs to  */
  token: Token;
  /**  Amount of this flash loan  */
  amount: Scalars['BigInt'];
  /**  Fee amount of this flash loan  */
  feeAmount: Scalars['BigInt'];
  /**  Block number of this flash loan  */
  block: Scalars['BigInt'];
  /**  Timestamp of this flash loan  */
  timestamp: Scalars['BigInt'];
};

export type FlashLoan_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_?: InputMaybe<BentoBox_filter>;
  borrower?: InputMaybe<Scalars['Bytes']>;
  borrower_not?: InputMaybe<Scalars['Bytes']>;
  borrower_gt?: InputMaybe<Scalars['Bytes']>;
  borrower_lt?: InputMaybe<Scalars['Bytes']>;
  borrower_gte?: InputMaybe<Scalars['Bytes']>;
  borrower_lte?: InputMaybe<Scalars['Bytes']>;
  borrower_in?: InputMaybe<Array<Scalars['Bytes']>>;
  borrower_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  borrower_contains?: InputMaybe<Scalars['Bytes']>;
  borrower_not_contains?: InputMaybe<Scalars['Bytes']>;
  receiver?: InputMaybe<Scalars['Bytes']>;
  receiver_not?: InputMaybe<Scalars['Bytes']>;
  receiver_gt?: InputMaybe<Scalars['Bytes']>;
  receiver_lt?: InputMaybe<Scalars['Bytes']>;
  receiver_gte?: InputMaybe<Scalars['Bytes']>;
  receiver_lte?: InputMaybe<Scalars['Bytes']>;
  receiver_in?: InputMaybe<Array<Scalars['Bytes']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  receiver_contains?: InputMaybe<Scalars['Bytes']>;
  receiver_not_contains?: InputMaybe<Scalars['Bytes']>;
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
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeAmount?: InputMaybe<Scalars['BigInt']>;
  feeAmount_not?: InputMaybe<Scalars['BigInt']>;
  feeAmount_gt?: InputMaybe<Scalars['BigInt']>;
  feeAmount_lt?: InputMaybe<Scalars['BigInt']>;
  feeAmount_gte?: InputMaybe<Scalars['BigInt']>;
  feeAmount_lte?: InputMaybe<Scalars['BigInt']>;
  feeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FlashLoan_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FlashLoan_filter>>>;
};

export type FlashLoan_orderBy =
  | 'id'
  | 'bentoBox'
  | 'bentoBox__id'
  | 'borrower'
  | 'receiver'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__symbolSuccess'
  | 'token__name'
  | 'token__nameSuccess'
  | 'token__decimals'
  | 'token__decimalsSuccess'
  | 'amount'
  | 'feeAmount'
  | 'block'
  | 'timestamp';

export type Harvest = {
  /**  Concatenation of strategy and block number  */
  id: Scalars['ID'];
  /**  The Token this harvest belongs to  */
  token: Token;
  /**  The Strategy this harvest belongs to  */
  strategy: Strategy;
  /**  The ProfitOrLoss of this harvest  */
  profitOrLoss?: Maybe<ProfitOrLoss>;
  /**  The InvestOrDivest of this harvest  */
  investOrDivest?: Maybe<InvestOrDivest>;
  /**  Block number of this harvest  */
  block: Scalars['BigInt'];
  /**  Timestamp of this harvest  */
  timestamp: Scalars['BigInt'];
};

export type Harvest_filter = {
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
  strategy?: InputMaybe<Scalars['String']>;
  strategy_not?: InputMaybe<Scalars['String']>;
  strategy_gt?: InputMaybe<Scalars['String']>;
  strategy_lt?: InputMaybe<Scalars['String']>;
  strategy_gte?: InputMaybe<Scalars['String']>;
  strategy_lte?: InputMaybe<Scalars['String']>;
  strategy_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_contains?: InputMaybe<Scalars['String']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_contains?: InputMaybe<Scalars['String']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_starts_with?: InputMaybe<Scalars['String']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_ends_with?: InputMaybe<Scalars['String']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_?: InputMaybe<Strategy_filter>;
  profitOrLoss?: InputMaybe<Scalars['String']>;
  profitOrLoss_not?: InputMaybe<Scalars['String']>;
  profitOrLoss_gt?: InputMaybe<Scalars['String']>;
  profitOrLoss_lt?: InputMaybe<Scalars['String']>;
  profitOrLoss_gte?: InputMaybe<Scalars['String']>;
  profitOrLoss_lte?: InputMaybe<Scalars['String']>;
  profitOrLoss_in?: InputMaybe<Array<Scalars['String']>>;
  profitOrLoss_not_in?: InputMaybe<Array<Scalars['String']>>;
  profitOrLoss_contains?: InputMaybe<Scalars['String']>;
  profitOrLoss_contains_nocase?: InputMaybe<Scalars['String']>;
  profitOrLoss_not_contains?: InputMaybe<Scalars['String']>;
  profitOrLoss_not_contains_nocase?: InputMaybe<Scalars['String']>;
  profitOrLoss_starts_with?: InputMaybe<Scalars['String']>;
  profitOrLoss_starts_with_nocase?: InputMaybe<Scalars['String']>;
  profitOrLoss_not_starts_with?: InputMaybe<Scalars['String']>;
  profitOrLoss_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  profitOrLoss_ends_with?: InputMaybe<Scalars['String']>;
  profitOrLoss_ends_with_nocase?: InputMaybe<Scalars['String']>;
  profitOrLoss_not_ends_with?: InputMaybe<Scalars['String']>;
  profitOrLoss_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  profitOrLoss_?: InputMaybe<ProfitOrLoss_filter>;
  investOrDivest?: InputMaybe<Scalars['String']>;
  investOrDivest_not?: InputMaybe<Scalars['String']>;
  investOrDivest_gt?: InputMaybe<Scalars['String']>;
  investOrDivest_lt?: InputMaybe<Scalars['String']>;
  investOrDivest_gte?: InputMaybe<Scalars['String']>;
  investOrDivest_lte?: InputMaybe<Scalars['String']>;
  investOrDivest_in?: InputMaybe<Array<Scalars['String']>>;
  investOrDivest_not_in?: InputMaybe<Array<Scalars['String']>>;
  investOrDivest_contains?: InputMaybe<Scalars['String']>;
  investOrDivest_contains_nocase?: InputMaybe<Scalars['String']>;
  investOrDivest_not_contains?: InputMaybe<Scalars['String']>;
  investOrDivest_not_contains_nocase?: InputMaybe<Scalars['String']>;
  investOrDivest_starts_with?: InputMaybe<Scalars['String']>;
  investOrDivest_starts_with_nocase?: InputMaybe<Scalars['String']>;
  investOrDivest_not_starts_with?: InputMaybe<Scalars['String']>;
  investOrDivest_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  investOrDivest_ends_with?: InputMaybe<Scalars['String']>;
  investOrDivest_ends_with_nocase?: InputMaybe<Scalars['String']>;
  investOrDivest_not_ends_with?: InputMaybe<Scalars['String']>;
  investOrDivest_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  investOrDivest_?: InputMaybe<InvestOrDivest_filter>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Harvest_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Harvest_filter>>>;
};

export type Harvest_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__symbolSuccess'
  | 'token__name'
  | 'token__nameSuccess'
  | 'token__decimals'
  | 'token__decimalsSuccess'
  | 'strategy'
  | 'strategy__id'
  | 'strategy__block'
  | 'strategy__timestamp'
  | 'profitOrLoss'
  | 'profitOrLoss__id'
  | 'profitOrLoss__elastic'
  | 'profitOrLoss__base'
  | 'profitOrLoss__amount'
  | 'profitOrLoss__block'
  | 'profitOrLoss__timestamp'
  | 'investOrDivest'
  | 'investOrDivest__id'
  | 'investOrDivest__elastic'
  | 'investOrDivest__base'
  | 'investOrDivest__amount'
  | 'investOrDivest__block'
  | 'investOrDivest__timestamp'
  | 'block'
  | 'timestamp';

export type InvestOrDivest = {
  /**  Concatenation of strategy and invest or divest count  */
  id: Scalars['ID'];
  /**  The Harvest this invest or divest belongs to  */
  harvest: Harvest;
  /**  The cached token elastic at time of invest or divest */
  elastic: Scalars['BigInt'];
  /**  The cached token base at time of invest or divest */
  base: Scalars['BigInt'];
  /**  Amount of invest or divest  */
  amount: Scalars['BigInt'];
  /**  Block number of this invest or divest  */
  block: Scalars['BigInt'];
  /**  Timestamp of this invest or divest  */
  timestamp: Scalars['BigInt'];
};

export type InvestOrDivest_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  harvest?: InputMaybe<Scalars['String']>;
  harvest_not?: InputMaybe<Scalars['String']>;
  harvest_gt?: InputMaybe<Scalars['String']>;
  harvest_lt?: InputMaybe<Scalars['String']>;
  harvest_gte?: InputMaybe<Scalars['String']>;
  harvest_lte?: InputMaybe<Scalars['String']>;
  harvest_in?: InputMaybe<Array<Scalars['String']>>;
  harvest_not_in?: InputMaybe<Array<Scalars['String']>>;
  harvest_contains?: InputMaybe<Scalars['String']>;
  harvest_contains_nocase?: InputMaybe<Scalars['String']>;
  harvest_not_contains?: InputMaybe<Scalars['String']>;
  harvest_not_contains_nocase?: InputMaybe<Scalars['String']>;
  harvest_starts_with?: InputMaybe<Scalars['String']>;
  harvest_starts_with_nocase?: InputMaybe<Scalars['String']>;
  harvest_not_starts_with?: InputMaybe<Scalars['String']>;
  harvest_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  harvest_ends_with?: InputMaybe<Scalars['String']>;
  harvest_ends_with_nocase?: InputMaybe<Scalars['String']>;
  harvest_not_ends_with?: InputMaybe<Scalars['String']>;
  harvest_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  harvest_?: InputMaybe<Harvest_filter>;
  elastic?: InputMaybe<Scalars['BigInt']>;
  elastic_not?: InputMaybe<Scalars['BigInt']>;
  elastic_gt?: InputMaybe<Scalars['BigInt']>;
  elastic_lt?: InputMaybe<Scalars['BigInt']>;
  elastic_gte?: InputMaybe<Scalars['BigInt']>;
  elastic_lte?: InputMaybe<Scalars['BigInt']>;
  elastic_in?: InputMaybe<Array<Scalars['BigInt']>>;
  elastic_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  base?: InputMaybe<Scalars['BigInt']>;
  base_not?: InputMaybe<Scalars['BigInt']>;
  base_gt?: InputMaybe<Scalars['BigInt']>;
  base_lt?: InputMaybe<Scalars['BigInt']>;
  base_gte?: InputMaybe<Scalars['BigInt']>;
  base_lte?: InputMaybe<Scalars['BigInt']>;
  base_in?: InputMaybe<Array<Scalars['BigInt']>>;
  base_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<InvestOrDivest_filter>>>;
  or?: InputMaybe<Array<InputMaybe<InvestOrDivest_filter>>>;
};

export type InvestOrDivest_orderBy =
  | 'id'
  | 'harvest'
  | 'harvest__id'
  | 'harvest__block'
  | 'harvest__timestamp'
  | 'elastic'
  | 'base'
  | 'amount'
  | 'block'
  | 'timestamp';

export type MasterContract = {
  /**  MasterContract address  */
  id: Scalars['ID'];
  /**  BentoBox this master contract belongs to  */
  bentoBox: BentoBox;
  /**  Clones that belong to this master contract  */
  clones?: Maybe<Array<Clone>>;
  /**  MasterContractApprovals that belong to this master contract  */
  masterContractApprovals?: Maybe<Array<MasterContractApproval>>;
  /**  MasterContract is whitelisted by Sushi Operations */
  approved: Scalars['Boolean'];
};


export type MasterContractclonesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Clone_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Clone_filter>;
};


export type MasterContractmasterContractApprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContractApproval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContractApproval_filter>;
};

export type MasterContractApproval = {
  /** Concatenation of user adddress and master contract address */
  id: Scalars['ID'];
  /**  MasterContract this master contract approval belongs to  */
  masterContract: MasterContract;
  /**  User this master contract approval belongs to  */
  user: User;
  /**  If user has approved this master contract  */
  approved: Scalars['Boolean'];
};

export type MasterContractApproval_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  masterContract?: InputMaybe<Scalars['String']>;
  masterContract_not?: InputMaybe<Scalars['String']>;
  masterContract_gt?: InputMaybe<Scalars['String']>;
  masterContract_lt?: InputMaybe<Scalars['String']>;
  masterContract_gte?: InputMaybe<Scalars['String']>;
  masterContract_lte?: InputMaybe<Scalars['String']>;
  masterContract_in?: InputMaybe<Array<Scalars['String']>>;
  masterContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  masterContract_contains?: InputMaybe<Scalars['String']>;
  masterContract_contains_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_contains?: InputMaybe<Scalars['String']>;
  masterContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  masterContract_starts_with?: InputMaybe<Scalars['String']>;
  masterContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_starts_with?: InputMaybe<Scalars['String']>;
  masterContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_ends_with?: InputMaybe<Scalars['String']>;
  masterContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_ends_with?: InputMaybe<Scalars['String']>;
  masterContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_?: InputMaybe<MasterContract_filter>;
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
  user_?: InputMaybe<User_filter>;
  approved?: InputMaybe<Scalars['Boolean']>;
  approved_not?: InputMaybe<Scalars['Boolean']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MasterContractApproval_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MasterContractApproval_filter>>>;
};

export type MasterContractApproval_orderBy =
  | 'id'
  | 'masterContract'
  | 'masterContract__id'
  | 'masterContract__approved'
  | 'user'
  | 'user__id'
  | 'user__block'
  | 'user__timestamp'
  | 'approved';

export type MasterContract_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_?: InputMaybe<BentoBox_filter>;
  clones_?: InputMaybe<Clone_filter>;
  masterContractApprovals_?: InputMaybe<MasterContractApproval_filter>;
  approved?: InputMaybe<Scalars['Boolean']>;
  approved_not?: InputMaybe<Scalars['Boolean']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MasterContract_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MasterContract_filter>>>;
};

export type MasterContract_orderBy =
  | 'id'
  | 'bentoBox'
  | 'bentoBox__id'
  | 'clones'
  | 'masterContractApprovals'
  | 'approved';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type ProfitOrLoss = {
  /**  Concatenation of strategy and profit or loss count  */
  id: Scalars['ID'];
  /**  The Harvest this profit or loss belongs to  */
  harvest: Harvest;
  /**  The cached token elastic at time of profit or loss */
  elastic: Scalars['BigInt'];
  /**  The cached token base at time of profit or loss */
  base: Scalars['BigInt'];
  /**  Amount of profit or loss  */
  amount: Scalars['BigInt'];
  /**  Block number of this profit or loss  */
  block: Scalars['BigInt'];
  /**  Timestamp of this profit or loss  */
  timestamp: Scalars['BigInt'];
};

export type ProfitOrLoss_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  harvest?: InputMaybe<Scalars['String']>;
  harvest_not?: InputMaybe<Scalars['String']>;
  harvest_gt?: InputMaybe<Scalars['String']>;
  harvest_lt?: InputMaybe<Scalars['String']>;
  harvest_gte?: InputMaybe<Scalars['String']>;
  harvest_lte?: InputMaybe<Scalars['String']>;
  harvest_in?: InputMaybe<Array<Scalars['String']>>;
  harvest_not_in?: InputMaybe<Array<Scalars['String']>>;
  harvest_contains?: InputMaybe<Scalars['String']>;
  harvest_contains_nocase?: InputMaybe<Scalars['String']>;
  harvest_not_contains?: InputMaybe<Scalars['String']>;
  harvest_not_contains_nocase?: InputMaybe<Scalars['String']>;
  harvest_starts_with?: InputMaybe<Scalars['String']>;
  harvest_starts_with_nocase?: InputMaybe<Scalars['String']>;
  harvest_not_starts_with?: InputMaybe<Scalars['String']>;
  harvest_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  harvest_ends_with?: InputMaybe<Scalars['String']>;
  harvest_ends_with_nocase?: InputMaybe<Scalars['String']>;
  harvest_not_ends_with?: InputMaybe<Scalars['String']>;
  harvest_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  harvest_?: InputMaybe<Harvest_filter>;
  elastic?: InputMaybe<Scalars['BigInt']>;
  elastic_not?: InputMaybe<Scalars['BigInt']>;
  elastic_gt?: InputMaybe<Scalars['BigInt']>;
  elastic_lt?: InputMaybe<Scalars['BigInt']>;
  elastic_gte?: InputMaybe<Scalars['BigInt']>;
  elastic_lte?: InputMaybe<Scalars['BigInt']>;
  elastic_in?: InputMaybe<Array<Scalars['BigInt']>>;
  elastic_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  base?: InputMaybe<Scalars['BigInt']>;
  base_not?: InputMaybe<Scalars['BigInt']>;
  base_gt?: InputMaybe<Scalars['BigInt']>;
  base_lt?: InputMaybe<Scalars['BigInt']>;
  base_gte?: InputMaybe<Scalars['BigInt']>;
  base_lte?: InputMaybe<Scalars['BigInt']>;
  base_in?: InputMaybe<Array<Scalars['BigInt']>>;
  base_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProfitOrLoss_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProfitOrLoss_filter>>>;
};

export type ProfitOrLoss_orderBy =
  | 'id'
  | 'harvest'
  | 'harvest__id'
  | 'harvest__block'
  | 'harvest__timestamp'
  | 'elastic'
  | 'base'
  | 'amount'
  | 'block'
  | 'timestamp';

export type Protocol = {
  /**  Protocol address  */
  id: Scalars['ID'];
  /**  BentoBox this protocol belongs to  */
  bentoBox: BentoBox;
};

export type Protocol_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_?: InputMaybe<BentoBox_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Protocol_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Protocol_filter>>>;
};

export type Protocol_orderBy =
  | 'id'
  | 'bentoBox'
  | 'bentoBox__id';

export type Query = {
  bentoBox?: Maybe<BentoBox>;
  bentoBoxes: Array<BentoBox>;
  bentoBoxKpi?: Maybe<BentoBoxKpi>;
  bentoBoxKpis: Array<BentoBoxKpi>;
  masterContract?: Maybe<MasterContract>;
  masterContracts: Array<MasterContract>;
  masterContractApproval?: Maybe<MasterContractApproval>;
  masterContractApprovals: Array<MasterContractApproval>;
  clone?: Maybe<Clone>;
  clones: Array<Clone>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  tokenKpi?: Maybe<TokenKpi>;
  tokenKpis: Array<TokenKpi>;
  tokenStrategy?: Maybe<TokenStrategy>;
  tokenStrategies: Array<TokenStrategy>;
  strategy?: Maybe<Strategy>;
  strategies: Array<Strategy>;
  strategyData?: Maybe<StrategyData>;
  strategyDatas: Array<StrategyData>;
  strategyKpi?: Maybe<StrategyKpi>;
  strategyKpis: Array<StrategyKpi>;
  harvest?: Maybe<Harvest>;
  harvests: Array<Harvest>;
  profitOrLoss?: Maybe<ProfitOrLoss>;
  profitOrLosses: Array<ProfitOrLoss>;
  investOrDivest?: Maybe<InvestOrDivest>;
  investOrDivests: Array<InvestOrDivest>;
  rebase?: Maybe<Rebase>;
  rebases: Array<Rebase>;
  flashLoan?: Maybe<FlashLoan>;
  flashLoans: Array<FlashLoan>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  user?: Maybe<User>;
  users: Array<User>;
  balance?: Maybe<Balance>;
  balances: Array<Balance>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerybentoBoxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybentoBoxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BentoBox_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BentoBox_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybentoBoxKpiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybentoBoxKpisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BentoBoxKpi_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BentoBoxKpi_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymasterContractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymasterContractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymasterContractApprovalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymasterContractApprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContractApproval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContractApproval_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycloneArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclonesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Clone_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Clone_filter>;
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


export type QuerytokenKpiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenKpisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenKpi_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenKpi_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenStrategyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenStrategiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenStrategy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenStrategy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystrategyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystrategiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Strategy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Strategy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystrategyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystrategyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StrategyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StrategyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystrategyKpiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystrategyKpisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StrategyKpi_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StrategyKpi_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryharvestArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryharvestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Harvest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Harvest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprofitOrLossArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprofitOrLossesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProfitOrLoss_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProfitOrLoss_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinvestOrDivestArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinvestOrDivestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InvestOrDivest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InvestOrDivest_filter>;
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


export type QueryflashLoanArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflashLoansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlashLoan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlashLoan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
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


export type QuerybalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Balance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Balance_filter>;
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


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Rebase = {
  /**  Token address  */
  id: Scalars['ID'];
  /**  BentoBox this rebase belongs to  */
  bentoBox: BentoBox;
  /**  Token this rebase belongs to  */
  token: Token;
  /**  Base (Share)  */
  base: Scalars['BigInt'];
  /**  Elastic (Amount)  */
  elastic: Scalars['BigInt'];
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
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_?: InputMaybe<BentoBox_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Rebase_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Rebase_filter>>>;
};

export type Rebase_orderBy =
  | 'id'
  | 'bentoBox'
  | 'bentoBox__id'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__symbolSuccess'
  | 'token__name'
  | 'token__nameSuccess'
  | 'token__decimals'
  | 'token__decimalsSuccess'
  | 'base'
  | 'elastic';

export type Strategy = {
  /**  Strategy address  */
  id: Scalars['ID'];
  /**  StrategyKpi of this strategy  */
  kpi: StrategyKpi;
  /**  Harvests which belong to this strategy  */
  harvests?: Maybe<Array<Harvest>>;
  /**  The Token this strategy belongs to  */
  token: Token;
  /**  Block number of this strategy  */
  block: Scalars['BigInt'];
  /**  Timestamp of this strategy  */
  timestamp: Scalars['BigInt'];
};


export type StrategyharvestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Harvest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Harvest_filter>;
};

export type StrategyData = {
  /**  Token address  */
  id: Scalars['ID'];
  /**  Strategy start date  */
  strategyStartDate: Scalars['BigInt'];
  /**  Target percentage  */
  targetPercentage: Scalars['BigInt'];
  /**  BentoBox's understanding of the balance  */
  balance: Scalars['BigInt'];
};

export type StrategyData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  strategyStartDate?: InputMaybe<Scalars['BigInt']>;
  strategyStartDate_not?: InputMaybe<Scalars['BigInt']>;
  strategyStartDate_gt?: InputMaybe<Scalars['BigInt']>;
  strategyStartDate_lt?: InputMaybe<Scalars['BigInt']>;
  strategyStartDate_gte?: InputMaybe<Scalars['BigInt']>;
  strategyStartDate_lte?: InputMaybe<Scalars['BigInt']>;
  strategyStartDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  strategyStartDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  targetPercentage?: InputMaybe<Scalars['BigInt']>;
  targetPercentage_not?: InputMaybe<Scalars['BigInt']>;
  targetPercentage_gt?: InputMaybe<Scalars['BigInt']>;
  targetPercentage_lt?: InputMaybe<Scalars['BigInt']>;
  targetPercentage_gte?: InputMaybe<Scalars['BigInt']>;
  targetPercentage_lte?: InputMaybe<Scalars['BigInt']>;
  targetPercentage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  targetPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StrategyData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<StrategyData_filter>>>;
};

export type StrategyData_orderBy =
  | 'id'
  | 'strategyStartDate'
  | 'targetPercentage'
  | 'balance';

export type StrategyKpi = {
  /**  Strategy address  */
  id: Scalars['ID'];
  /**  Harvest count  */
  harvestCount: Scalars['BigInt'];
  /**  Invest or divest count  */
  investOrDivestCount: Scalars['BigInt'];
  /**  Invest count  */
  investCount: Scalars['BigInt'];
  /**  Invested  */
  invested: Scalars['BigInt'];
  /**  Divest count  */
  divestCount: Scalars['BigInt'];
  /**  Divested */
  divested: Scalars['BigInt'];
  /**  Profit or loss count  */
  profitOrLossCount: Scalars['BigInt'];
  /**  Profit count  */
  profitCount: Scalars['BigInt'];
  /**  Loss count  */
  lossCount: Scalars['BigInt'];
  /**  Profit & Loss */
  profitAndLoss: Scalars['BigInt'];
  /**  APR  */
  apr?: Maybe<Scalars['BigDecimal']>;
  /**  Utilization  */
  utilization?: Maybe<Scalars['BigDecimal']>;
};

export type StrategyKpi_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  harvestCount?: InputMaybe<Scalars['BigInt']>;
  harvestCount_not?: InputMaybe<Scalars['BigInt']>;
  harvestCount_gt?: InputMaybe<Scalars['BigInt']>;
  harvestCount_lt?: InputMaybe<Scalars['BigInt']>;
  harvestCount_gte?: InputMaybe<Scalars['BigInt']>;
  harvestCount_lte?: InputMaybe<Scalars['BigInt']>;
  harvestCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  harvestCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  investOrDivestCount?: InputMaybe<Scalars['BigInt']>;
  investOrDivestCount_not?: InputMaybe<Scalars['BigInt']>;
  investOrDivestCount_gt?: InputMaybe<Scalars['BigInt']>;
  investOrDivestCount_lt?: InputMaybe<Scalars['BigInt']>;
  investOrDivestCount_gte?: InputMaybe<Scalars['BigInt']>;
  investOrDivestCount_lte?: InputMaybe<Scalars['BigInt']>;
  investOrDivestCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  investOrDivestCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  investCount?: InputMaybe<Scalars['BigInt']>;
  investCount_not?: InputMaybe<Scalars['BigInt']>;
  investCount_gt?: InputMaybe<Scalars['BigInt']>;
  investCount_lt?: InputMaybe<Scalars['BigInt']>;
  investCount_gte?: InputMaybe<Scalars['BigInt']>;
  investCount_lte?: InputMaybe<Scalars['BigInt']>;
  investCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  investCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  invested?: InputMaybe<Scalars['BigInt']>;
  invested_not?: InputMaybe<Scalars['BigInt']>;
  invested_gt?: InputMaybe<Scalars['BigInt']>;
  invested_lt?: InputMaybe<Scalars['BigInt']>;
  invested_gte?: InputMaybe<Scalars['BigInt']>;
  invested_lte?: InputMaybe<Scalars['BigInt']>;
  invested_in?: InputMaybe<Array<Scalars['BigInt']>>;
  invested_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  divestCount?: InputMaybe<Scalars['BigInt']>;
  divestCount_not?: InputMaybe<Scalars['BigInt']>;
  divestCount_gt?: InputMaybe<Scalars['BigInt']>;
  divestCount_lt?: InputMaybe<Scalars['BigInt']>;
  divestCount_gte?: InputMaybe<Scalars['BigInt']>;
  divestCount_lte?: InputMaybe<Scalars['BigInt']>;
  divestCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  divestCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  divested?: InputMaybe<Scalars['BigInt']>;
  divested_not?: InputMaybe<Scalars['BigInt']>;
  divested_gt?: InputMaybe<Scalars['BigInt']>;
  divested_lt?: InputMaybe<Scalars['BigInt']>;
  divested_gte?: InputMaybe<Scalars['BigInt']>;
  divested_lte?: InputMaybe<Scalars['BigInt']>;
  divested_in?: InputMaybe<Array<Scalars['BigInt']>>;
  divested_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profitOrLossCount?: InputMaybe<Scalars['BigInt']>;
  profitOrLossCount_not?: InputMaybe<Scalars['BigInt']>;
  profitOrLossCount_gt?: InputMaybe<Scalars['BigInt']>;
  profitOrLossCount_lt?: InputMaybe<Scalars['BigInt']>;
  profitOrLossCount_gte?: InputMaybe<Scalars['BigInt']>;
  profitOrLossCount_lte?: InputMaybe<Scalars['BigInt']>;
  profitOrLossCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profitOrLossCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profitCount?: InputMaybe<Scalars['BigInt']>;
  profitCount_not?: InputMaybe<Scalars['BigInt']>;
  profitCount_gt?: InputMaybe<Scalars['BigInt']>;
  profitCount_lt?: InputMaybe<Scalars['BigInt']>;
  profitCount_gte?: InputMaybe<Scalars['BigInt']>;
  profitCount_lte?: InputMaybe<Scalars['BigInt']>;
  profitCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profitCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lossCount?: InputMaybe<Scalars['BigInt']>;
  lossCount_not?: InputMaybe<Scalars['BigInt']>;
  lossCount_gt?: InputMaybe<Scalars['BigInt']>;
  lossCount_lt?: InputMaybe<Scalars['BigInt']>;
  lossCount_gte?: InputMaybe<Scalars['BigInt']>;
  lossCount_lte?: InputMaybe<Scalars['BigInt']>;
  lossCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lossCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profitAndLoss?: InputMaybe<Scalars['BigInt']>;
  profitAndLoss_not?: InputMaybe<Scalars['BigInt']>;
  profitAndLoss_gt?: InputMaybe<Scalars['BigInt']>;
  profitAndLoss_lt?: InputMaybe<Scalars['BigInt']>;
  profitAndLoss_gte?: InputMaybe<Scalars['BigInt']>;
  profitAndLoss_lte?: InputMaybe<Scalars['BigInt']>;
  profitAndLoss_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profitAndLoss_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  apr?: InputMaybe<Scalars['BigDecimal']>;
  apr_not?: InputMaybe<Scalars['BigDecimal']>;
  apr_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  utilization?: InputMaybe<Scalars['BigDecimal']>;
  utilization_not?: InputMaybe<Scalars['BigDecimal']>;
  utilization_gt?: InputMaybe<Scalars['BigDecimal']>;
  utilization_lt?: InputMaybe<Scalars['BigDecimal']>;
  utilization_gte?: InputMaybe<Scalars['BigDecimal']>;
  utilization_lte?: InputMaybe<Scalars['BigDecimal']>;
  utilization_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  utilization_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StrategyKpi_filter>>>;
  or?: InputMaybe<Array<InputMaybe<StrategyKpi_filter>>>;
};

export type StrategyKpi_orderBy =
  | 'id'
  | 'harvestCount'
  | 'investOrDivestCount'
  | 'investCount'
  | 'invested'
  | 'divestCount'
  | 'divested'
  | 'profitOrLossCount'
  | 'profitCount'
  | 'lossCount'
  | 'profitAndLoss'
  | 'apr'
  | 'utilization';

export type Strategy_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  kpi?: InputMaybe<Scalars['String']>;
  kpi_not?: InputMaybe<Scalars['String']>;
  kpi_gt?: InputMaybe<Scalars['String']>;
  kpi_lt?: InputMaybe<Scalars['String']>;
  kpi_gte?: InputMaybe<Scalars['String']>;
  kpi_lte?: InputMaybe<Scalars['String']>;
  kpi_in?: InputMaybe<Array<Scalars['String']>>;
  kpi_not_in?: InputMaybe<Array<Scalars['String']>>;
  kpi_contains?: InputMaybe<Scalars['String']>;
  kpi_contains_nocase?: InputMaybe<Scalars['String']>;
  kpi_not_contains?: InputMaybe<Scalars['String']>;
  kpi_not_contains_nocase?: InputMaybe<Scalars['String']>;
  kpi_starts_with?: InputMaybe<Scalars['String']>;
  kpi_starts_with_nocase?: InputMaybe<Scalars['String']>;
  kpi_not_starts_with?: InputMaybe<Scalars['String']>;
  kpi_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  kpi_ends_with?: InputMaybe<Scalars['String']>;
  kpi_ends_with_nocase?: InputMaybe<Scalars['String']>;
  kpi_not_ends_with?: InputMaybe<Scalars['String']>;
  kpi_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  kpi_?: InputMaybe<StrategyKpi_filter>;
  harvests_?: InputMaybe<Harvest_filter>;
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
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Strategy_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Strategy_filter>>>;
};

export type Strategy_orderBy =
  | 'id'
  | 'kpi'
  | 'kpi__id'
  | 'kpi__harvestCount'
  | 'kpi__investOrDivestCount'
  | 'kpi__investCount'
  | 'kpi__invested'
  | 'kpi__divestCount'
  | 'kpi__divested'
  | 'kpi__profitOrLossCount'
  | 'kpi__profitCount'
  | 'kpi__lossCount'
  | 'kpi__profitAndLoss'
  | 'kpi__apr'
  | 'kpi__utilization'
  | 'harvests'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__symbolSuccess'
  | 'token__name'
  | 'token__nameSuccess'
  | 'token__decimals'
  | 'token__decimalsSuccess'
  | 'block'
  | 'timestamp';

export type Subscription = {
  bentoBox?: Maybe<BentoBox>;
  bentoBoxes: Array<BentoBox>;
  bentoBoxKpi?: Maybe<BentoBoxKpi>;
  bentoBoxKpis: Array<BentoBoxKpi>;
  masterContract?: Maybe<MasterContract>;
  masterContracts: Array<MasterContract>;
  masterContractApproval?: Maybe<MasterContractApproval>;
  masterContractApprovals: Array<MasterContractApproval>;
  clone?: Maybe<Clone>;
  clones: Array<Clone>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  tokenKpi?: Maybe<TokenKpi>;
  tokenKpis: Array<TokenKpi>;
  tokenStrategy?: Maybe<TokenStrategy>;
  tokenStrategies: Array<TokenStrategy>;
  strategy?: Maybe<Strategy>;
  strategies: Array<Strategy>;
  strategyData?: Maybe<StrategyData>;
  strategyDatas: Array<StrategyData>;
  strategyKpi?: Maybe<StrategyKpi>;
  strategyKpis: Array<StrategyKpi>;
  harvest?: Maybe<Harvest>;
  harvests: Array<Harvest>;
  profitOrLoss?: Maybe<ProfitOrLoss>;
  profitOrLosses: Array<ProfitOrLoss>;
  investOrDivest?: Maybe<InvestOrDivest>;
  investOrDivests: Array<InvestOrDivest>;
  rebase?: Maybe<Rebase>;
  rebases: Array<Rebase>;
  flashLoan?: Maybe<FlashLoan>;
  flashLoans: Array<FlashLoan>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  user?: Maybe<User>;
  users: Array<User>;
  balance?: Maybe<Balance>;
  balances: Array<Balance>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionbentoBoxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbentoBoxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BentoBox_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BentoBox_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbentoBoxKpiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbentoBoxKpisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BentoBoxKpi_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BentoBoxKpi_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmasterContractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmasterContractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmasterContractApprovalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmasterContractApprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContractApproval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContractApproval_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncloneArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclonesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Clone_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Clone_filter>;
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


export type SubscriptiontokenKpiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenKpisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenKpi_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenKpi_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenStrategyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenStrategiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenStrategy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenStrategy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstrategyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstrategiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Strategy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Strategy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstrategyDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstrategyDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StrategyData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StrategyData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstrategyKpiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstrategyKpisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StrategyKpi_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StrategyKpi_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionharvestArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionharvestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Harvest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Harvest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprofitOrLossArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprofitOrLossesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProfitOrLoss_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProfitOrLoss_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninvestOrDivestArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninvestOrDivestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InvestOrDivest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InvestOrDivest_filter>;
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


export type SubscriptionflashLoanArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflashLoansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlashLoan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlashLoan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
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


export type SubscriptionbalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Balance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Balance_filter>;
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


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Token = {
  /**  Token address  */
  id: Scalars['ID'];
  /**  The BentoBox this token belongs to  */
  bentoBox: BentoBox;
  /**  The Rebase that belongs to this token  */
  rebase: Rebase;
  /**  Strategies, past and present, which belong to this token  */
  strategies?: Maybe<Array<Strategy>>;
  /**  Token symbol, if fetched successfully, else default to ???  */
  symbol: Scalars['String'];
  /**  If the symbol was succesfully fetched  */
  symbolSuccess: Scalars['Boolean'];
  /**  Token name, if fetched successfully, else default to ???  */
  name: Scalars['String'];
  /**  If the name was succesfully fetched  */
  nameSuccess: Scalars['Boolean'];
  /**  Token decimals, if fetched successfully, else default to 18  */
  decimals: Scalars['BigInt'];
  /**  If the decimals was succesfully fetched  */
  decimalsSuccess: Scalars['Boolean'];
};


export type TokenstrategiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Strategy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Strategy_filter>;
};

export type TokenKpi = {
  /**  Token address  */
  id: Scalars['ID'];
  /**  Liquidity  */
  liquidity: Scalars['BigInt'];
  /**  Strategy count  */
  strategyCount: Scalars['BigInt'];
};

export type TokenKpi_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  strategyCount?: InputMaybe<Scalars['BigInt']>;
  strategyCount_not?: InputMaybe<Scalars['BigInt']>;
  strategyCount_gt?: InputMaybe<Scalars['BigInt']>;
  strategyCount_lt?: InputMaybe<Scalars['BigInt']>;
  strategyCount_gte?: InputMaybe<Scalars['BigInt']>;
  strategyCount_lte?: InputMaybe<Scalars['BigInt']>;
  strategyCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  strategyCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenKpi_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenKpi_filter>>>;
};

export type TokenKpi_orderBy =
  | 'id'
  | 'liquidity'
  | 'strategyCount';

export type TokenStrategy = {
  /**  Token address  */
  id: Scalars['ID'];
  /**  The Token this strategy belongs to  */
  token: Token;
  /**  Strategy address  */
  strategy?: Maybe<Strategy>;
  /**  Pending strategy address  */
  pendingStrategy?: Maybe<Strategy>;
  /**  The Strategy data  */
  data: StrategyData;
  /**  The block number of this strategy  */
  block: Scalars['BigInt'];
  /**  The timestamp of this strategy  */
  timestamp: Scalars['BigInt'];
};

export type TokenStrategy_filter = {
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
  strategy?: InputMaybe<Scalars['String']>;
  strategy_not?: InputMaybe<Scalars['String']>;
  strategy_gt?: InputMaybe<Scalars['String']>;
  strategy_lt?: InputMaybe<Scalars['String']>;
  strategy_gte?: InputMaybe<Scalars['String']>;
  strategy_lte?: InputMaybe<Scalars['String']>;
  strategy_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_contains?: InputMaybe<Scalars['String']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_contains?: InputMaybe<Scalars['String']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_starts_with?: InputMaybe<Scalars['String']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_ends_with?: InputMaybe<Scalars['String']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_?: InputMaybe<Strategy_filter>;
  pendingStrategy?: InputMaybe<Scalars['String']>;
  pendingStrategy_not?: InputMaybe<Scalars['String']>;
  pendingStrategy_gt?: InputMaybe<Scalars['String']>;
  pendingStrategy_lt?: InputMaybe<Scalars['String']>;
  pendingStrategy_gte?: InputMaybe<Scalars['String']>;
  pendingStrategy_lte?: InputMaybe<Scalars['String']>;
  pendingStrategy_in?: InputMaybe<Array<Scalars['String']>>;
  pendingStrategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  pendingStrategy_contains?: InputMaybe<Scalars['String']>;
  pendingStrategy_contains_nocase?: InputMaybe<Scalars['String']>;
  pendingStrategy_not_contains?: InputMaybe<Scalars['String']>;
  pendingStrategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pendingStrategy_starts_with?: InputMaybe<Scalars['String']>;
  pendingStrategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pendingStrategy_not_starts_with?: InputMaybe<Scalars['String']>;
  pendingStrategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pendingStrategy_ends_with?: InputMaybe<Scalars['String']>;
  pendingStrategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pendingStrategy_not_ends_with?: InputMaybe<Scalars['String']>;
  pendingStrategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pendingStrategy_?: InputMaybe<Strategy_filter>;
  data?: InputMaybe<Scalars['String']>;
  data_not?: InputMaybe<Scalars['String']>;
  data_gt?: InputMaybe<Scalars['String']>;
  data_lt?: InputMaybe<Scalars['String']>;
  data_gte?: InputMaybe<Scalars['String']>;
  data_lte?: InputMaybe<Scalars['String']>;
  data_in?: InputMaybe<Array<Scalars['String']>>;
  data_not_in?: InputMaybe<Array<Scalars['String']>>;
  data_contains?: InputMaybe<Scalars['String']>;
  data_contains_nocase?: InputMaybe<Scalars['String']>;
  data_not_contains?: InputMaybe<Scalars['String']>;
  data_not_contains_nocase?: InputMaybe<Scalars['String']>;
  data_starts_with?: InputMaybe<Scalars['String']>;
  data_starts_with_nocase?: InputMaybe<Scalars['String']>;
  data_not_starts_with?: InputMaybe<Scalars['String']>;
  data_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  data_ends_with?: InputMaybe<Scalars['String']>;
  data_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data_not_ends_with?: InputMaybe<Scalars['String']>;
  data_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data_?: InputMaybe<StrategyData_filter>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenStrategy_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenStrategy_filter>>>;
};

export type TokenStrategy_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__symbolSuccess'
  | 'token__name'
  | 'token__nameSuccess'
  | 'token__decimals'
  | 'token__decimalsSuccess'
  | 'strategy'
  | 'strategy__id'
  | 'strategy__block'
  | 'strategy__timestamp'
  | 'pendingStrategy'
  | 'pendingStrategy__id'
  | 'pendingStrategy__block'
  | 'pendingStrategy__timestamp'
  | 'data'
  | 'data__id'
  | 'data__strategyStartDate'
  | 'data__targetPercentage'
  | 'data__balance'
  | 'block'
  | 'timestamp';

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_?: InputMaybe<BentoBox_filter>;
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
  strategies_?: InputMaybe<Strategy_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};

export type Token_orderBy =
  | 'id'
  | 'bentoBox'
  | 'bentoBox__id'
  | 'rebase'
  | 'rebase__id'
  | 'rebase__base'
  | 'rebase__elastic'
  | 'strategies'
  | 'symbol'
  | 'symbolSuccess'
  | 'name'
  | 'nameSuccess'
  | 'decimals'
  | 'decimalsSuccess';

export type Transaction = {
  /**  Concatenation of transaction hash and log index  */
  id: Scalars['ID'];
  /**  BentoBox this transaction belongs to  */
  bentoBox: BentoBox;
  /**  Transaction type  */
  type: TransactionType;
  /**  User from whom this transaction is made  */
  from: User;
  /**  User to whom the transaction is sent  */
  to: User;
  /**  Token this transaction belongs to  */
  token: Token;
  /**  Amount of this transaction  */
  amount?: Maybe<Scalars['BigInt']>;
  /**  Share of this transaction  */
  share: Scalars['BigInt'];
  /**  Block number of this transaction  */
  block: Scalars['BigInt'];
  /**  Timestamp of this transaction  */
  timestamp: Scalars['BigInt'];
};

export type TransactionType =
  | 'deposit'
  | 'transfer'
  | 'withdraw';

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_?: InputMaybe<BentoBox_filter>;
  type?: InputMaybe<TransactionType>;
  type_not?: InputMaybe<TransactionType>;
  type_in?: InputMaybe<Array<TransactionType>>;
  type_not_in?: InputMaybe<Array<TransactionType>>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<User_filter>;
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
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  share?: InputMaybe<Scalars['BigInt']>;
  share_not?: InputMaybe<Scalars['BigInt']>;
  share_gt?: InputMaybe<Scalars['BigInt']>;
  share_lt?: InputMaybe<Scalars['BigInt']>;
  share_gte?: InputMaybe<Scalars['BigInt']>;
  share_lte?: InputMaybe<Scalars['BigInt']>;
  share_in?: InputMaybe<Array<Scalars['BigInt']>>;
  share_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transaction_filter>>>;
};

export type Transaction_orderBy =
  | 'id'
  | 'bentoBox'
  | 'bentoBox__id'
  | 'type'
  | 'from'
  | 'from__id'
  | 'from__block'
  | 'from__timestamp'
  | 'to'
  | 'to__id'
  | 'to__block'
  | 'to__timestamp'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__symbolSuccess'
  | 'token__name'
  | 'token__nameSuccess'
  | 'token__decimals'
  | 'token__decimalsSuccess'
  | 'amount'
  | 'share'
  | 'block'
  | 'timestamp';

export type User = {
  /**  User address  */
  id: Scalars['ID'];
  /**  BentoBox this user belongs to  */
  bentoBox: BentoBox;
  /**  MasterContractApprovals that belong to this user  */
  masterContractApprovals?: Maybe<Array<MasterContractApproval>>;
  /**  Balances that belong to this user  */
  balances?: Maybe<Array<Balance>>;
  /**  Block number of this user  */
  block: Scalars['BigInt'];
  /**  Timestamp of this user  */
  timestamp: Scalars['BigInt'];
};


export type UsermasterContractApprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContractApproval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContractApproval_filter>;
};


export type UserbalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Balance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Balance_filter>;
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
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_?: InputMaybe<BentoBox_filter>;
  masterContractApprovals_?: InputMaybe<MasterContractApproval_filter>;
  balances_?: InputMaybe<Balance_filter>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'bentoBox'
  | 'bentoBox__id'
  | 'masterContractApprovals'
  | 'balances'
  | 'block'
  | 'timestamp';

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
  bentoBox: InContextSdkMethod<Query['bentoBox'], QuerybentoBoxArgs, MeshContext>,
  /** null **/
  bentoBoxes: InContextSdkMethod<Query['bentoBoxes'], QuerybentoBoxesArgs, MeshContext>,
  /** null **/
  bentoBoxKpi: InContextSdkMethod<Query['bentoBoxKpi'], QuerybentoBoxKpiArgs, MeshContext>,
  /** null **/
  bentoBoxKpis: InContextSdkMethod<Query['bentoBoxKpis'], QuerybentoBoxKpisArgs, MeshContext>,
  /** null **/
  masterContract: InContextSdkMethod<Query['masterContract'], QuerymasterContractArgs, MeshContext>,
  /** null **/
  masterContracts: InContextSdkMethod<Query['masterContracts'], QuerymasterContractsArgs, MeshContext>,
  /** null **/
  masterContractApproval: InContextSdkMethod<Query['masterContractApproval'], QuerymasterContractApprovalArgs, MeshContext>,
  /** null **/
  masterContractApprovals: InContextSdkMethod<Query['masterContractApprovals'], QuerymasterContractApprovalsArgs, MeshContext>,
  /** null **/
  clone: InContextSdkMethod<Query['clone'], QuerycloneArgs, MeshContext>,
  /** null **/
  clones: InContextSdkMethod<Query['clones'], QueryclonesArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  tokenKpi: InContextSdkMethod<Query['tokenKpi'], QuerytokenKpiArgs, MeshContext>,
  /** null **/
  tokenKpis: InContextSdkMethod<Query['tokenKpis'], QuerytokenKpisArgs, MeshContext>,
  /** null **/
  tokenStrategy: InContextSdkMethod<Query['tokenStrategy'], QuerytokenStrategyArgs, MeshContext>,
  /** null **/
  tokenStrategies: InContextSdkMethod<Query['tokenStrategies'], QuerytokenStrategiesArgs, MeshContext>,
  /** null **/
  strategy: InContextSdkMethod<Query['strategy'], QuerystrategyArgs, MeshContext>,
  /** null **/
  strategies: InContextSdkMethod<Query['strategies'], QuerystrategiesArgs, MeshContext>,
  /** null **/
  strategyData: InContextSdkMethod<Query['strategyData'], QuerystrategyDataArgs, MeshContext>,
  /** null **/
  strategyDatas: InContextSdkMethod<Query['strategyDatas'], QuerystrategyDatasArgs, MeshContext>,
  /** null **/
  strategyKpi: InContextSdkMethod<Query['strategyKpi'], QuerystrategyKpiArgs, MeshContext>,
  /** null **/
  strategyKpis: InContextSdkMethod<Query['strategyKpis'], QuerystrategyKpisArgs, MeshContext>,
  /** null **/
  harvest: InContextSdkMethod<Query['harvest'], QueryharvestArgs, MeshContext>,
  /** null **/
  harvests: InContextSdkMethod<Query['harvests'], QueryharvestsArgs, MeshContext>,
  /** null **/
  profitOrLoss: InContextSdkMethod<Query['profitOrLoss'], QueryprofitOrLossArgs, MeshContext>,
  /** null **/
  profitOrLosses: InContextSdkMethod<Query['profitOrLosses'], QueryprofitOrLossesArgs, MeshContext>,
  /** null **/
  investOrDivest: InContextSdkMethod<Query['investOrDivest'], QueryinvestOrDivestArgs, MeshContext>,
  /** null **/
  investOrDivests: InContextSdkMethod<Query['investOrDivests'], QueryinvestOrDivestsArgs, MeshContext>,
  /** null **/
  rebase: InContextSdkMethod<Query['rebase'], QueryrebaseArgs, MeshContext>,
  /** null **/
  rebases: InContextSdkMethod<Query['rebases'], QueryrebasesArgs, MeshContext>,
  /** null **/
  flashLoan: InContextSdkMethod<Query['flashLoan'], QueryflashLoanArgs, MeshContext>,
  /** null **/
  flashLoans: InContextSdkMethod<Query['flashLoans'], QueryflashLoansArgs, MeshContext>,
  /** null **/
  protocol: InContextSdkMethod<Query['protocol'], QueryprotocolArgs, MeshContext>,
  /** null **/
  protocols: InContextSdkMethod<Query['protocols'], QueryprotocolsArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  balance: InContextSdkMethod<Query['balance'], QuerybalanceArgs, MeshContext>,
  /** null **/
  balances: InContextSdkMethod<Query['balances'], QuerybalancesArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<Query['transaction'], QuerytransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<Query['transactions'], QuerytransactionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  bentoBox: InContextSdkMethod<Subscription['bentoBox'], SubscriptionbentoBoxArgs, MeshContext>,
  /** null **/
  bentoBoxes: InContextSdkMethod<Subscription['bentoBoxes'], SubscriptionbentoBoxesArgs, MeshContext>,
  /** null **/
  bentoBoxKpi: InContextSdkMethod<Subscription['bentoBoxKpi'], SubscriptionbentoBoxKpiArgs, MeshContext>,
  /** null **/
  bentoBoxKpis: InContextSdkMethod<Subscription['bentoBoxKpis'], SubscriptionbentoBoxKpisArgs, MeshContext>,
  /** null **/
  masterContract: InContextSdkMethod<Subscription['masterContract'], SubscriptionmasterContractArgs, MeshContext>,
  /** null **/
  masterContracts: InContextSdkMethod<Subscription['masterContracts'], SubscriptionmasterContractsArgs, MeshContext>,
  /** null **/
  masterContractApproval: InContextSdkMethod<Subscription['masterContractApproval'], SubscriptionmasterContractApprovalArgs, MeshContext>,
  /** null **/
  masterContractApprovals: InContextSdkMethod<Subscription['masterContractApprovals'], SubscriptionmasterContractApprovalsArgs, MeshContext>,
  /** null **/
  clone: InContextSdkMethod<Subscription['clone'], SubscriptioncloneArgs, MeshContext>,
  /** null **/
  clones: InContextSdkMethod<Subscription['clones'], SubscriptionclonesArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  tokenKpi: InContextSdkMethod<Subscription['tokenKpi'], SubscriptiontokenKpiArgs, MeshContext>,
  /** null **/
  tokenKpis: InContextSdkMethod<Subscription['tokenKpis'], SubscriptiontokenKpisArgs, MeshContext>,
  /** null **/
  tokenStrategy: InContextSdkMethod<Subscription['tokenStrategy'], SubscriptiontokenStrategyArgs, MeshContext>,
  /** null **/
  tokenStrategies: InContextSdkMethod<Subscription['tokenStrategies'], SubscriptiontokenStrategiesArgs, MeshContext>,
  /** null **/
  strategy: InContextSdkMethod<Subscription['strategy'], SubscriptionstrategyArgs, MeshContext>,
  /** null **/
  strategies: InContextSdkMethod<Subscription['strategies'], SubscriptionstrategiesArgs, MeshContext>,
  /** null **/
  strategyData: InContextSdkMethod<Subscription['strategyData'], SubscriptionstrategyDataArgs, MeshContext>,
  /** null **/
  strategyDatas: InContextSdkMethod<Subscription['strategyDatas'], SubscriptionstrategyDatasArgs, MeshContext>,
  /** null **/
  strategyKpi: InContextSdkMethod<Subscription['strategyKpi'], SubscriptionstrategyKpiArgs, MeshContext>,
  /** null **/
  strategyKpis: InContextSdkMethod<Subscription['strategyKpis'], SubscriptionstrategyKpisArgs, MeshContext>,
  /** null **/
  harvest: InContextSdkMethod<Subscription['harvest'], SubscriptionharvestArgs, MeshContext>,
  /** null **/
  harvests: InContextSdkMethod<Subscription['harvests'], SubscriptionharvestsArgs, MeshContext>,
  /** null **/
  profitOrLoss: InContextSdkMethod<Subscription['profitOrLoss'], SubscriptionprofitOrLossArgs, MeshContext>,
  /** null **/
  profitOrLosses: InContextSdkMethod<Subscription['profitOrLosses'], SubscriptionprofitOrLossesArgs, MeshContext>,
  /** null **/
  investOrDivest: InContextSdkMethod<Subscription['investOrDivest'], SubscriptioninvestOrDivestArgs, MeshContext>,
  /** null **/
  investOrDivests: InContextSdkMethod<Subscription['investOrDivests'], SubscriptioninvestOrDivestsArgs, MeshContext>,
  /** null **/
  rebase: InContextSdkMethod<Subscription['rebase'], SubscriptionrebaseArgs, MeshContext>,
  /** null **/
  rebases: InContextSdkMethod<Subscription['rebases'], SubscriptionrebasesArgs, MeshContext>,
  /** null **/
  flashLoan: InContextSdkMethod<Subscription['flashLoan'], SubscriptionflashLoanArgs, MeshContext>,
  /** null **/
  flashLoans: InContextSdkMethod<Subscription['flashLoans'], SubscriptionflashLoansArgs, MeshContext>,
  /** null **/
  protocol: InContextSdkMethod<Subscription['protocol'], SubscriptionprotocolArgs, MeshContext>,
  /** null **/
  protocols: InContextSdkMethod<Subscription['protocols'], SubscriptionprotocolsArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** null **/
  balance: InContextSdkMethod<Subscription['balance'], SubscriptionbalanceArgs, MeshContext>,
  /** null **/
  balances: InContextSdkMethod<Subscription['balances'], SubscriptionbalancesArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<Subscription['transaction'], SubscriptiontransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<Subscription['transactions'], SubscriptiontransactionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["BentoBox"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      ["subgraphHost"]: Scalars['ID'],
["subgraphName"]: Scalars['ID']
    };
}
