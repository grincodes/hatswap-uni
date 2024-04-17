// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace XSushiTypes {
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

export type DaySnapshot = {
  /**  {day}-{date}  */
  id: Scalars['ID'];
  date: Scalars['Int'];
  userCount: Scalars['BigInt'];
  transactionCount: Scalars['BigInt'];
  sushiSupply: Scalars['BigDecimal'];
  xSushiSupply: Scalars['BigDecimal'];
  sushiStaked: Scalars['BigDecimal'];
  sushiHarvested: Scalars['BigDecimal'];
  totalFeeAmount: Scalars['BigDecimal'];
  xSushiBurned: Scalars['BigDecimal'];
  xSushiMinted: Scalars['BigDecimal'];
  xSushiSushiRatio: Scalars['BigDecimal'];
  sushiXsushiRatio: Scalars['BigDecimal'];
  apr1m: Scalars['BigDecimal'];
  apr3m: Scalars['BigDecimal'];
  apr6m: Scalars['BigDecimal'];
  apr12m: Scalars['BigDecimal'];
  newTransactions: Scalars['BigInt'];
  newSushiStaked: Scalars['BigDecimal'];
  newSushiHarvested: Scalars['BigDecimal'];
  newFeeAmount: Scalars['BigDecimal'];
  newXSushiBurned: Scalars['BigDecimal'];
  newXSushiMinted: Scalars['BigDecimal'];
};

export type DaySnapshot_filter = {
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
  sushiSupply?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiSupply?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiStaked?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiStaked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvested?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvested_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalFeeAmount?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalFeeAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiBurned?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_not?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_gt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_lt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_gte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_lte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiBurned_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiMinted?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_not?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_gt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_lt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_gte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_lte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiMinted_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiSushiRatio?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_not?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_gt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_lt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_gte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_lte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiSushiRatio_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiXsushiRatio?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiXsushiRatio_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr1m?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_not?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr1m_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr3m?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_not?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr3m_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr6m?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_not?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr6m_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr12m?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_not?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr12m_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newTransactions?: InputMaybe<Scalars['BigInt']>;
  newTransactions_not?: InputMaybe<Scalars['BigInt']>;
  newTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  newTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  newTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  newTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  newTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newSushiStaked?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_not?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_gt?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_lt?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_gte?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_lte?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newSushiStaked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newSushiHarvested?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_not?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_gt?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_lt?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_gte?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_lte?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newSushiHarvested_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newFeeAmount?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newFeeAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newXSushiBurned?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_not?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_gt?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_lt?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_gte?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_lte?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newXSushiBurned_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newXSushiMinted?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_not?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_gt?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_lt?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_gte?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_lte?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newXSushiMinted_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DaySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DaySnapshot_filter>>>;
};

export type DaySnapshot_orderBy =
  | 'id'
  | 'date'
  | 'userCount'
  | 'transactionCount'
  | 'sushiSupply'
  | 'xSushiSupply'
  | 'sushiStaked'
  | 'sushiHarvested'
  | 'totalFeeAmount'
  | 'xSushiBurned'
  | 'xSushiMinted'
  | 'xSushiSushiRatio'
  | 'sushiXsushiRatio'
  | 'apr1m'
  | 'apr3m'
  | 'apr6m'
  | 'apr12m'
  | 'newTransactions'
  | 'newSushiStaked'
  | 'newSushiHarvested'
  | 'newFeeAmount'
  | 'newXSushiBurned'
  | 'newXSushiMinted';

export type Fee = {
  id: Scalars['ID'];
  sender: FeeSender;
  amount: Scalars['BigInt'];
  createdAtBlock: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
};

export type FeeSender = {
  id: Scalars['ID'];
  totalFeeSent: Scalars['BigInt'];
  fees: Array<Fee>;
  createdAtBlock: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
  modifiedAtBlock: Scalars['BigInt'];
  modifiedAtTimestamp: Scalars['BigInt'];
};


export type FeeSenderfeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Fee_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Fee_filter>;
};

export type FeeSender_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalFeeSent?: InputMaybe<Scalars['BigInt']>;
  totalFeeSent_not?: InputMaybe<Scalars['BigInt']>;
  totalFeeSent_gt?: InputMaybe<Scalars['BigInt']>;
  totalFeeSent_lt?: InputMaybe<Scalars['BigInt']>;
  totalFeeSent_gte?: InputMaybe<Scalars['BigInt']>;
  totalFeeSent_lte?: InputMaybe<Scalars['BigInt']>;
  totalFeeSent_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFeeSent_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_?: InputMaybe<Fee_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FeeSender_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FeeSender_filter>>>;
};

export type FeeSender_orderBy =
  | 'id'
  | 'totalFeeSent'
  | 'fees'
  | 'createdAtBlock'
  | 'createdAtTimestamp'
  | 'modifiedAtBlock'
  | 'modifiedAtTimestamp';

export type Fee_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  sender_?: InputMaybe<FeeSender_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  and?: InputMaybe<Array<InputMaybe<Fee_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Fee_filter>>>;
};

export type Fee_orderBy =
  | 'id'
  | 'sender'
  | 'sender__id'
  | 'sender__totalFeeSent'
  | 'sender__createdAtBlock'
  | 'sender__createdAtTimestamp'
  | 'sender__modifiedAtBlock'
  | 'sender__modifiedAtTimestamp'
  | 'amount'
  | 'createdAtBlock'
  | 'createdAtTimestamp';

export type HourSnapshot = {
  /**  {hour}-{date}  */
  id: Scalars['ID'];
  date: Scalars['Int'];
  userCount: Scalars['BigInt'];
  transactionCount: Scalars['BigInt'];
  sushiSupply: Scalars['BigDecimal'];
  xSushiSupply: Scalars['BigDecimal'];
  sushiStaked: Scalars['BigDecimal'];
  sushiHarvested: Scalars['BigDecimal'];
  totalFeeAmount: Scalars['BigDecimal'];
  xSushiBurned: Scalars['BigDecimal'];
  xSushiMinted: Scalars['BigDecimal'];
  xSushiSushiRatio: Scalars['BigDecimal'];
  sushiXsushiRatio: Scalars['BigDecimal'];
  apr1m: Scalars['BigDecimal'];
  apr3m: Scalars['BigDecimal'];
  apr6m: Scalars['BigDecimal'];
  apr12m: Scalars['BigDecimal'];
  newTransactions: Scalars['BigInt'];
  newSushiStaked: Scalars['BigDecimal'];
  newSushiHarvested: Scalars['BigDecimal'];
  newFeeAmount: Scalars['BigDecimal'];
  newXSushiBurned: Scalars['BigDecimal'];
  newXSushiMinted: Scalars['BigDecimal'];
};

export type HourSnapshot_filter = {
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
  sushiSupply?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiSupply?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiStaked?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiStaked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvested?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvested_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalFeeAmount?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalFeeAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiBurned?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_not?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_gt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_lt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_gte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_lte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiBurned_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiMinted?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_not?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_gt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_lt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_gte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_lte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiMinted_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiSushiRatio?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_not?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_gt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_lt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_gte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_lte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiSushiRatio_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiXsushiRatio?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiXsushiRatio_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr1m?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_not?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr1m_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr3m?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_not?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr3m_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr6m?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_not?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr6m_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr12m?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_not?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr12m_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newTransactions?: InputMaybe<Scalars['BigInt']>;
  newTransactions_not?: InputMaybe<Scalars['BigInt']>;
  newTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  newTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  newTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  newTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  newTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newSushiStaked?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_not?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_gt?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_lt?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_gte?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_lte?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newSushiStaked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newSushiHarvested?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_not?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_gt?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_lt?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_gte?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_lte?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newSushiHarvested_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newFeeAmount?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newFeeAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newXSushiBurned?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_not?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_gt?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_lt?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_gte?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_lte?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newXSushiBurned_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newXSushiMinted?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_not?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_gt?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_lt?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_gte?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_lte?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newXSushiMinted_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HourSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HourSnapshot_filter>>>;
};

export type HourSnapshot_orderBy =
  | 'id'
  | 'date'
  | 'userCount'
  | 'transactionCount'
  | 'sushiSupply'
  | 'xSushiSupply'
  | 'sushiStaked'
  | 'sushiHarvested'
  | 'totalFeeAmount'
  | 'xSushiBurned'
  | 'xSushiMinted'
  | 'xSushiSushiRatio'
  | 'sushiXsushiRatio'
  | 'apr1m'
  | 'apr3m'
  | 'apr6m'
  | 'apr12m'
  | 'newTransactions'
  | 'newSushiStaked'
  | 'newSushiHarvested'
  | 'newFeeAmount'
  | 'newXSushiBurned'
  | 'newXSushiMinted';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  xsushi?: Maybe<XSushi>;
  xsushis: Array<XSushi>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  user?: Maybe<User>;
  users: Array<User>;
  feeSender?: Maybe<FeeSender>;
  feeSenders: Array<FeeSender>;
  fee?: Maybe<Fee>;
  fees: Array<Fee>;
  hourSnapshot?: Maybe<HourSnapshot>;
  hourSnapshots: Array<HourSnapshot>;
  daySnapshot?: Maybe<DaySnapshot>;
  daySnapshots: Array<DaySnapshot>;
  weekSnapshot?: Maybe<WeekSnapshot>;
  weekSnapshots: Array<WeekSnapshot>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryxsushiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryxsushisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<XSushi_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<XSushi_filter>;
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


export type QueryfeeSenderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeeSendersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeeSender_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeeSender_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Fee_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Fee_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhourSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhourSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HourSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HourSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydaySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydaySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DaySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DaySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryweekSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryweekSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WeekSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WeekSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  xsushi?: Maybe<XSushi>;
  xsushis: Array<XSushi>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  user?: Maybe<User>;
  users: Array<User>;
  feeSender?: Maybe<FeeSender>;
  feeSenders: Array<FeeSender>;
  fee?: Maybe<Fee>;
  fees: Array<Fee>;
  hourSnapshot?: Maybe<HourSnapshot>;
  hourSnapshots: Array<HourSnapshot>;
  daySnapshot?: Maybe<DaySnapshot>;
  daySnapshots: Array<DaySnapshot>;
  weekSnapshot?: Maybe<WeekSnapshot>;
  weekSnapshots: Array<WeekSnapshot>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionxsushiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionxsushisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<XSushi_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<XSushi_filter>;
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


export type SubscriptionfeeSenderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeeSendersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FeeSender_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FeeSender_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Fee_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Fee_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhourSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhourSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HourSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HourSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondaySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondaySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DaySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DaySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionweekSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionweekSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WeekSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WeekSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Transaction = {
  id: Scalars['ID'];
  from: User;
  to: User;
  amount: Scalars['BigDecimal'];
  type: TransactionType;
  gasUsed: Scalars['BigInt'];
  gasLimit: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  createdAtBlock: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
};

export type TransactionType =
  | 'TRANSFER'
  | 'MINT'
  | 'BURN';

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  type?: InputMaybe<TransactionType>;
  type_not?: InputMaybe<TransactionType>;
  type_in?: InputMaybe<Array<TransactionType>>;
  type_not_in?: InputMaybe<Array<TransactionType>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  | 'from'
  | 'from__id'
  | 'from__balance'
  | 'from__createdAtBlock'
  | 'from__createdAtTimestamp'
  | 'from__modifiedAtBlock'
  | 'from__modifiedAtTimestamp'
  | 'to'
  | 'to__id'
  | 'to__balance'
  | 'to__createdAtBlock'
  | 'to__createdAtTimestamp'
  | 'to__modifiedAtBlock'
  | 'to__modifiedAtTimestamp'
  | 'amount'
  | 'type'
  | 'gasUsed'
  | 'gasLimit'
  | 'gasPrice'
  | 'createdAtBlock'
  | 'createdAtTimestamp';

export type User = {
  id: Scalars['ID'];
  balance: Scalars['BigInt'];
  withdrawals: Array<Transaction>;
  deposits: Array<Transaction>;
  createdAtBlock: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
  modifiedAtBlock: Scalars['BigInt'];
  modifiedAtTimestamp: Scalars['BigInt'];
};


export type UserwithdrawalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
};


export type UserdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
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
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawals_?: InputMaybe<Transaction_filter>;
  deposits_?: InputMaybe<Transaction_filter>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'balance'
  | 'withdrawals'
  | 'deposits'
  | 'createdAtBlock'
  | 'createdAtTimestamp'
  | 'modifiedAtBlock'
  | 'modifiedAtTimestamp';

export type WeekSnapshot = {
  /**  {week}-{date}  */
  id: Scalars['ID'];
  date: Scalars['Int'];
  userCount: Scalars['BigInt'];
  transactionCount: Scalars['BigInt'];
  sushiSupply: Scalars['BigDecimal'];
  xSushiSupply: Scalars['BigDecimal'];
  sushiStaked: Scalars['BigDecimal'];
  sushiHarvested: Scalars['BigDecimal'];
  totalFeeAmount: Scalars['BigDecimal'];
  xSushiBurned: Scalars['BigDecimal'];
  xSushiMinted: Scalars['BigDecimal'];
  xSushiSushiRatio: Scalars['BigDecimal'];
  sushiXsushiRatio: Scalars['BigDecimal'];
  apr1m: Scalars['BigDecimal'];
  apr3m: Scalars['BigDecimal'];
  apr6m: Scalars['BigDecimal'];
  apr12m: Scalars['BigDecimal'];
  newTransactions: Scalars['BigInt'];
  newSushiStaked: Scalars['BigDecimal'];
  newSushiHarvested: Scalars['BigDecimal'];
  newFeeAmount: Scalars['BigDecimal'];
  newXSushiBurned: Scalars['BigDecimal'];
  newXSushiMinted: Scalars['BigDecimal'];
};

export type WeekSnapshot_filter = {
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
  sushiSupply?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiSupply?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiStaked?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiStaked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvested?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvested_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalFeeAmount?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalFeeAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiBurned?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_not?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_gt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_lt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_gte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_lte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiBurned_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiMinted?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_not?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_gt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_lt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_gte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_lte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiMinted_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiSushiRatio?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_not?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_gt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_lt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_gte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_lte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiSushiRatio_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiXsushiRatio?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiXsushiRatio_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr1m?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_not?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr1m_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr3m?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_not?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr3m_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr6m?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_not?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr6m_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr12m?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_not?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr12m_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newTransactions?: InputMaybe<Scalars['BigInt']>;
  newTransactions_not?: InputMaybe<Scalars['BigInt']>;
  newTransactions_gt?: InputMaybe<Scalars['BigInt']>;
  newTransactions_lt?: InputMaybe<Scalars['BigInt']>;
  newTransactions_gte?: InputMaybe<Scalars['BigInt']>;
  newTransactions_lte?: InputMaybe<Scalars['BigInt']>;
  newTransactions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newSushiStaked?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_not?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_gt?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_lt?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_gte?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_lte?: InputMaybe<Scalars['BigDecimal']>;
  newSushiStaked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newSushiStaked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newSushiHarvested?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_not?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_gt?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_lt?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_gte?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_lte?: InputMaybe<Scalars['BigDecimal']>;
  newSushiHarvested_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newSushiHarvested_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newFeeAmount?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  newFeeAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newFeeAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newXSushiBurned?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_not?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_gt?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_lt?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_gte?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_lte?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiBurned_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newXSushiBurned_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newXSushiMinted?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_not?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_gt?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_lt?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_gte?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_lte?: InputMaybe<Scalars['BigDecimal']>;
  newXSushiMinted_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newXSushiMinted_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<WeekSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<WeekSnapshot_filter>>>;
};

export type WeekSnapshot_orderBy =
  | 'id'
  | 'date'
  | 'userCount'
  | 'transactionCount'
  | 'sushiSupply'
  | 'xSushiSupply'
  | 'sushiStaked'
  | 'sushiHarvested'
  | 'totalFeeAmount'
  | 'xSushiBurned'
  | 'xSushiMinted'
  | 'xSushiSushiRatio'
  | 'sushiXsushiRatio'
  | 'apr1m'
  | 'apr3m'
  | 'apr6m'
  | 'apr12m'
  | 'newTransactions'
  | 'newSushiStaked'
  | 'newSushiHarvested'
  | 'newFeeAmount'
  | 'newXSushiBurned'
  | 'newXSushiMinted';

export type XSushi = {
  id: Scalars['ID'];
  userCount: Scalars['BigInt'];
  transactionCount: Scalars['BigInt'];
  sushiSupply: Scalars['BigDecimal'];
  xSushiSupply: Scalars['BigDecimal'];
  sushiStaked: Scalars['BigDecimal'];
  sushiHarvested: Scalars['BigDecimal'];
  totalFeeAmount: Scalars['BigDecimal'];
  xSushiBurned: Scalars['BigDecimal'];
  xSushiMinted: Scalars['BigDecimal'];
  xSushiSushiRatio: Scalars['BigDecimal'];
  sushiXsushiRatio: Scalars['BigDecimal'];
  apr1m: Scalars['BigDecimal'];
  apr3m: Scalars['BigDecimal'];
  apr6m: Scalars['BigDecimal'];
  apr12m: Scalars['BigDecimal'];
  aprUpdatedAtTimestamp: Scalars['BigInt'];
};

export type XSushi_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  sushiSupply?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiSupply?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiStaked?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiStaked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiStaked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvested?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiHarvested_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiHarvested_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalFeeAmount?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalFeeAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalFeeAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiBurned?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_not?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_gt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_lt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_gte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_lte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiBurned_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiBurned_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiMinted?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_not?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_gt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_lt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_gte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_lte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiMinted_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiMinted_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiSushiRatio?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_not?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_gt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_lt?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_gte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_lte?: InputMaybe<Scalars['BigDecimal']>;
  xSushiSushiRatio_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  xSushiSushiRatio_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiXsushiRatio?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_not?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_gt?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_lt?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_gte?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_lte?: InputMaybe<Scalars['BigDecimal']>;
  sushiXsushiRatio_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sushiXsushiRatio_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr1m?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_not?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr1m_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr1m_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr3m?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_not?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr3m_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr3m_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr6m?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_not?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr6m_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr6m_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr12m?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_not?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr12m_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr12m_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  aprUpdatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  aprUpdatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  aprUpdatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  aprUpdatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  aprUpdatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  aprUpdatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  aprUpdatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aprUpdatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<XSushi_filter>>>;
  or?: InputMaybe<Array<InputMaybe<XSushi_filter>>>;
};

export type XSushi_orderBy =
  | 'id'
  | 'userCount'
  | 'transactionCount'
  | 'sushiSupply'
  | 'xSushiSupply'
  | 'sushiStaked'
  | 'sushiHarvested'
  | 'totalFeeAmount'
  | 'xSushiBurned'
  | 'xSushiMinted'
  | 'xSushiSushiRatio'
  | 'sushiXsushiRatio'
  | 'apr1m'
  | 'apr3m'
  | 'apr6m'
  | 'apr12m'
  | 'aprUpdatedAtTimestamp';

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
  xsushi: InContextSdkMethod<Query['xsushi'], QueryxsushiArgs, MeshContext>,
  /** null **/
  xsushis: InContextSdkMethod<Query['xsushis'], QueryxsushisArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<Query['transaction'], QuerytransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<Query['transactions'], QuerytransactionsArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  feeSender: InContextSdkMethod<Query['feeSender'], QueryfeeSenderArgs, MeshContext>,
  /** null **/
  feeSenders: InContextSdkMethod<Query['feeSenders'], QueryfeeSendersArgs, MeshContext>,
  /** null **/
  fee: InContextSdkMethod<Query['fee'], QueryfeeArgs, MeshContext>,
  /** null **/
  fees: InContextSdkMethod<Query['fees'], QueryfeesArgs, MeshContext>,
  /** null **/
  hourSnapshot: InContextSdkMethod<Query['hourSnapshot'], QueryhourSnapshotArgs, MeshContext>,
  /** null **/
  hourSnapshots: InContextSdkMethod<Query['hourSnapshots'], QueryhourSnapshotsArgs, MeshContext>,
  /** null **/
  daySnapshot: InContextSdkMethod<Query['daySnapshot'], QuerydaySnapshotArgs, MeshContext>,
  /** null **/
  daySnapshots: InContextSdkMethod<Query['daySnapshots'], QuerydaySnapshotsArgs, MeshContext>,
  /** null **/
  weekSnapshot: InContextSdkMethod<Query['weekSnapshot'], QueryweekSnapshotArgs, MeshContext>,
  /** null **/
  weekSnapshots: InContextSdkMethod<Query['weekSnapshots'], QueryweekSnapshotsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  xsushi: InContextSdkMethod<Subscription['xsushi'], SubscriptionxsushiArgs, MeshContext>,
  /** null **/
  xsushis: InContextSdkMethod<Subscription['xsushis'], SubscriptionxsushisArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<Subscription['transaction'], SubscriptiontransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<Subscription['transactions'], SubscriptiontransactionsArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** null **/
  feeSender: InContextSdkMethod<Subscription['feeSender'], SubscriptionfeeSenderArgs, MeshContext>,
  /** null **/
  feeSenders: InContextSdkMethod<Subscription['feeSenders'], SubscriptionfeeSendersArgs, MeshContext>,
  /** null **/
  fee: InContextSdkMethod<Subscription['fee'], SubscriptionfeeArgs, MeshContext>,
  /** null **/
  fees: InContextSdkMethod<Subscription['fees'], SubscriptionfeesArgs, MeshContext>,
  /** null **/
  hourSnapshot: InContextSdkMethod<Subscription['hourSnapshot'], SubscriptionhourSnapshotArgs, MeshContext>,
  /** null **/
  hourSnapshots: InContextSdkMethod<Subscription['hourSnapshots'], SubscriptionhourSnapshotsArgs, MeshContext>,
  /** null **/
  daySnapshot: InContextSdkMethod<Subscription['daySnapshot'], SubscriptiondaySnapshotArgs, MeshContext>,
  /** null **/
  daySnapshots: InContextSdkMethod<Subscription['daySnapshots'], SubscriptiondaySnapshotsArgs, MeshContext>,
  /** null **/
  weekSnapshot: InContextSdkMethod<Subscription['weekSnapshot'], SubscriptionweekSnapshotArgs, MeshContext>,
  /** null **/
  weekSnapshots: InContextSdkMethod<Subscription['weekSnapshots'], SubscriptionweekSnapshotsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["xSUSHI"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
