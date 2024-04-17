// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace BondsTypes {
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
  Bonds_BigDecimal: any;
  BigInt: any;
  Bonds_Bytes: any;
  Bonds_Int8: any;
  Timestamp: any;
};

export type Bonds_Aggregation_interval =
  | 'hour'
  | 'day';

/**
 * The BalancerWeightedPool entity contains the details of a BalancerWeightedPool Token.
 *
 */
export type Bonds_BalancerWeightedPool = {
  /**
   * Unique ID for the BalancerWeightedPool entity, in the format:
   * [chain Id]_[pool address]
   *
   */
  id: Scalars['String'];
  /**
   * The pool's vault address.
   *
   */
  vaultAddress: Scalars['String'];
  /**
   * The pool's ID, for use in calls to vault functions.
   *
   */
  poolId: Scalars['String'];
  /**
   * A list of the Tokens which make up the vault.
   *
   */
  constituentTokens: Array<Bonds_Token>;
};


/**
 * The BalancerWeightedPool entity contains the details of a BalancerWeightedPool Token.
 *
 */
export type Bonds_BalancerWeightedPoolconstituentTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_Token_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_Token_filter>;
};

export type Bonds_BalancerWeightedPool_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vaultAddress?: InputMaybe<Scalars['String']>;
  vaultAddress_not?: InputMaybe<Scalars['String']>;
  vaultAddress_gt?: InputMaybe<Scalars['String']>;
  vaultAddress_lt?: InputMaybe<Scalars['String']>;
  vaultAddress_gte?: InputMaybe<Scalars['String']>;
  vaultAddress_lte?: InputMaybe<Scalars['String']>;
  vaultAddress_in?: InputMaybe<Array<Scalars['String']>>;
  vaultAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  vaultAddress_contains?: InputMaybe<Scalars['String']>;
  vaultAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  vaultAddress_not_contains?: InputMaybe<Scalars['String']>;
  vaultAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  vaultAddress_starts_with?: InputMaybe<Scalars['String']>;
  vaultAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vaultAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  vaultAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vaultAddress_ends_with?: InputMaybe<Scalars['String']>;
  vaultAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vaultAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  vaultAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId?: InputMaybe<Scalars['String']>;
  poolId_not?: InputMaybe<Scalars['String']>;
  poolId_gt?: InputMaybe<Scalars['String']>;
  poolId_lt?: InputMaybe<Scalars['String']>;
  poolId_gte?: InputMaybe<Scalars['String']>;
  poolId_lte?: InputMaybe<Scalars['String']>;
  poolId_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_contains?: InputMaybe<Scalars['String']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_contains?: InputMaybe<Scalars['String']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_starts_with?: InputMaybe<Scalars['String']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_ends_with?: InputMaybe<Scalars['String']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  constituentTokens?: InputMaybe<Array<Scalars['String']>>;
  constituentTokens_not?: InputMaybe<Array<Scalars['String']>>;
  constituentTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  constituentTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  constituentTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  constituentTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  constituentTokens_?: InputMaybe<Bonds_Token_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_BalancerWeightedPool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_BalancerWeightedPool_filter>>>;
};

export type Bonds_BalancerWeightedPool_orderBy =
  | 'id'
  | 'vaultAddress'
  | 'poolId'
  | 'constituentTokens';

export type Bonds_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Bonds_Block_height = {
  hash?: InputMaybe<Scalars['Bonds_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/**
 * The BondPurchase entity tracks individual bond purchases.
 *
 */
export type Bonds_BondPurchase = {
  /**
   * The transaction hash is used as the BondPurchase ID.
   *
   */
  id: Scalars['String'];
  /**
   * The ID of the Market from which the bond was purchased.
   *
   */
  market: Bonds_Market;
  /**
   * The owner address of the Market from which the bond was purchased.
   *
   */
  owner: Scalars['String'];
  /**
   * The amount of quote tokens paid.
   *
   */
  amount: Scalars['Bonds_BigDecimal'];
  /**
   * The amount of payout tokens purchased.
   *
   */
  payout: Scalars['Bonds_BigDecimal'];
  /**
   * The purchaser's address.
   *
   */
  recipient: Scalars['String'];
  /**
   * The frontend referrer address.
   *
   */
  referrer: Scalars['String'];
  /**
   * The time of the purchase.
   *
   */
  timestamp: Scalars['BigInt'];
  /**
   * The address of the relevant Teller contract.
   *
   */
  teller: Scalars['String'];
  /**
   * The address of the relevant Auctioneer contract.
   *
   */
  auctioneer: Scalars['String'];
  /**
   * A reference to the payout Token record.
   *
   */
  payoutToken: Bonds_Token;
  /**
   * A reference to the quote Token record.
   *
   */
  quoteToken: Bonds_Token;
  /**
   * The network name, as used by Graph Protocol.
   * **NOTE** This may not be the same as the name as used by wallets.
   * As such, we use the chainId field to identify networks in our frontend.
   *
   */
  network: Scalars['String'];
  /**
   * The numeric chain ID on which the contracts are deployed.
   *
   */
  chainId: Scalars['BigInt'];
  /**
   * The price at which the bond was purchased.
   * **NOTE** this is quoteToken amount / payoutToken amount, it is NOT a USD price.
   *
   */
  purchasePrice: Scalars['Bonds_BigDecimal'];
  /**
   * The new bond price, updated after the purchase.
   * **NOTE** this is the Auctioneer contract's marketPrice adjusted for marketScale, it is NOT a USD price.
   *
   */
  postPurchasePrice: Scalars['Bonds_BigDecimal'];
  /**
   * A reference to the OwnerTokenTbv record for this chain/owner/token combination.
   *
   */
  ownerTokenTbv?: Maybe<Bonds_OwnerTokenTbv>;
  /**
   * A reference to the PayoutTokenTbv record for this chain/owner/token combination.
   *
   */
  payoutTokenTbv?: Maybe<Bonds_PayoutTokenTbv>;
};

export type Bonds_BondPurchase_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_?: InputMaybe<Bonds_Market_filter>;
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
  amount?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  amount_not?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  payout?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  payout_not?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  payout_gt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  payout_lt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  payout_gte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  payout_lte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  payout_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  payout_not_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
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
  referrer?: InputMaybe<Scalars['String']>;
  referrer_not?: InputMaybe<Scalars['String']>;
  referrer_gt?: InputMaybe<Scalars['String']>;
  referrer_lt?: InputMaybe<Scalars['String']>;
  referrer_gte?: InputMaybe<Scalars['String']>;
  referrer_lte?: InputMaybe<Scalars['String']>;
  referrer_in?: InputMaybe<Array<Scalars['String']>>;
  referrer_not_in?: InputMaybe<Array<Scalars['String']>>;
  referrer_contains?: InputMaybe<Scalars['String']>;
  referrer_contains_nocase?: InputMaybe<Scalars['String']>;
  referrer_not_contains?: InputMaybe<Scalars['String']>;
  referrer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  referrer_starts_with?: InputMaybe<Scalars['String']>;
  referrer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  referrer_not_starts_with?: InputMaybe<Scalars['String']>;
  referrer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  referrer_ends_with?: InputMaybe<Scalars['String']>;
  referrer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  referrer_not_ends_with?: InputMaybe<Scalars['String']>;
  referrer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  teller?: InputMaybe<Scalars['String']>;
  teller_not?: InputMaybe<Scalars['String']>;
  teller_gt?: InputMaybe<Scalars['String']>;
  teller_lt?: InputMaybe<Scalars['String']>;
  teller_gte?: InputMaybe<Scalars['String']>;
  teller_lte?: InputMaybe<Scalars['String']>;
  teller_in?: InputMaybe<Array<Scalars['String']>>;
  teller_not_in?: InputMaybe<Array<Scalars['String']>>;
  teller_contains?: InputMaybe<Scalars['String']>;
  teller_contains_nocase?: InputMaybe<Scalars['String']>;
  teller_not_contains?: InputMaybe<Scalars['String']>;
  teller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  teller_starts_with?: InputMaybe<Scalars['String']>;
  teller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  teller_not_starts_with?: InputMaybe<Scalars['String']>;
  teller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  teller_ends_with?: InputMaybe<Scalars['String']>;
  teller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  teller_not_ends_with?: InputMaybe<Scalars['String']>;
  teller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auctioneer?: InputMaybe<Scalars['String']>;
  auctioneer_not?: InputMaybe<Scalars['String']>;
  auctioneer_gt?: InputMaybe<Scalars['String']>;
  auctioneer_lt?: InputMaybe<Scalars['String']>;
  auctioneer_gte?: InputMaybe<Scalars['String']>;
  auctioneer_lte?: InputMaybe<Scalars['String']>;
  auctioneer_in?: InputMaybe<Array<Scalars['String']>>;
  auctioneer_not_in?: InputMaybe<Array<Scalars['String']>>;
  auctioneer_contains?: InputMaybe<Scalars['String']>;
  auctioneer_contains_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_not_contains?: InputMaybe<Scalars['String']>;
  auctioneer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_starts_with?: InputMaybe<Scalars['String']>;
  auctioneer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_not_starts_with?: InputMaybe<Scalars['String']>;
  auctioneer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_ends_with?: InputMaybe<Scalars['String']>;
  auctioneer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_not_ends_with?: InputMaybe<Scalars['String']>;
  auctioneer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken?: InputMaybe<Scalars['String']>;
  payoutToken_not?: InputMaybe<Scalars['String']>;
  payoutToken_gt?: InputMaybe<Scalars['String']>;
  payoutToken_lt?: InputMaybe<Scalars['String']>;
  payoutToken_gte?: InputMaybe<Scalars['String']>;
  payoutToken_lte?: InputMaybe<Scalars['String']>;
  payoutToken_in?: InputMaybe<Array<Scalars['String']>>;
  payoutToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  payoutToken_contains?: InputMaybe<Scalars['String']>;
  payoutToken_contains_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_not_contains?: InputMaybe<Scalars['String']>;
  payoutToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_starts_with?: InputMaybe<Scalars['String']>;
  payoutToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_not_starts_with?: InputMaybe<Scalars['String']>;
  payoutToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_ends_with?: InputMaybe<Scalars['String']>;
  payoutToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_not_ends_with?: InputMaybe<Scalars['String']>;
  payoutToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_?: InputMaybe<Bonds_Token_filter>;
  quoteToken?: InputMaybe<Scalars['String']>;
  quoteToken_not?: InputMaybe<Scalars['String']>;
  quoteToken_gt?: InputMaybe<Scalars['String']>;
  quoteToken_lt?: InputMaybe<Scalars['String']>;
  quoteToken_gte?: InputMaybe<Scalars['String']>;
  quoteToken_lte?: InputMaybe<Scalars['String']>;
  quoteToken_in?: InputMaybe<Array<Scalars['String']>>;
  quoteToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  quoteToken_contains?: InputMaybe<Scalars['String']>;
  quoteToken_contains_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_not_contains?: InputMaybe<Scalars['String']>;
  quoteToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_starts_with?: InputMaybe<Scalars['String']>;
  quoteToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_not_starts_with?: InputMaybe<Scalars['String']>;
  quoteToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_ends_with?: InputMaybe<Scalars['String']>;
  quoteToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_not_ends_with?: InputMaybe<Scalars['String']>;
  quoteToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_?: InputMaybe<Bonds_Token_filter>;
  network?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  purchasePrice?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  purchasePrice_not?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  purchasePrice_gt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  purchasePrice_lt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  purchasePrice_gte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  purchasePrice_lte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  purchasePrice_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  purchasePrice_not_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  postPurchasePrice?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  postPurchasePrice_not?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  postPurchasePrice_gt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  postPurchasePrice_lt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  postPurchasePrice_gte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  postPurchasePrice_lte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  postPurchasePrice_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  postPurchasePrice_not_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  ownerTokenTbv?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_not?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_gt?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_lt?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_gte?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_lte?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_in?: InputMaybe<Array<Scalars['String']>>;
  ownerTokenTbv_not_in?: InputMaybe<Array<Scalars['String']>>;
  ownerTokenTbv_contains?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_contains_nocase?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_not_contains?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_starts_with?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_not_starts_with?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_ends_with?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_not_ends_with?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_?: InputMaybe<Bonds_OwnerTokenTbv_filter>;
  payoutTokenTbv?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_not?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_gt?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_lt?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_gte?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_lte?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_in?: InputMaybe<Array<Scalars['String']>>;
  payoutTokenTbv_not_in?: InputMaybe<Array<Scalars['String']>>;
  payoutTokenTbv_contains?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_contains_nocase?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_not_contains?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_starts_with?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_not_starts_with?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_ends_with?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_not_ends_with?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutTokenTbv_?: InputMaybe<Bonds_PayoutTokenTbv_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_BondPurchase_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_BondPurchase_filter>>>;
};

export type Bonds_BondPurchase_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__type'
  | 'market__network'
  | 'market__chainId'
  | 'market__auctioneer'
  | 'market__teller'
  | 'market__marketId'
  | 'market__owner'
  | 'market__vesting'
  | 'market__start'
  | 'market__conclusion'
  | 'market__vestingType'
  | 'market__isInstantSwap'
  | 'market__hasClosed'
  | 'market__totalBondedAmount'
  | 'market__totalPayoutAmount'
  | 'market__creationBlockTimestamp'
  | 'market__callbackAddress'
  | 'market__capacity'
  | 'market__capacityInQuote'
  | 'market__minPrice'
  | 'market__price'
  | 'market__scale'
  | 'market__averageBondPrice'
  | 'market__bondsIssued'
  | 'owner'
  | 'amount'
  | 'payout'
  | 'recipient'
  | 'referrer'
  | 'timestamp'
  | 'teller'
  | 'auctioneer'
  | 'payoutToken'
  | 'payoutToken__id'
  | 'payoutToken__network'
  | 'payoutToken__chainId'
  | 'payoutToken__address'
  | 'payoutToken__decimals'
  | 'payoutToken__symbol'
  | 'payoutToken__name'
  | 'payoutToken__typeName'
  | 'payoutToken__usedAsPayout'
  | 'payoutToken__usedAsQuote'
  | 'payoutToken__totalPayoutAmount'
  | 'payoutToken__purchaseCount'
  | 'quoteToken'
  | 'quoteToken__id'
  | 'quoteToken__network'
  | 'quoteToken__chainId'
  | 'quoteToken__address'
  | 'quoteToken__decimals'
  | 'quoteToken__symbol'
  | 'quoteToken__name'
  | 'quoteToken__typeName'
  | 'quoteToken__usedAsPayout'
  | 'quoteToken__usedAsQuote'
  | 'quoteToken__totalPayoutAmount'
  | 'quoteToken__purchaseCount'
  | 'network'
  | 'chainId'
  | 'purchasePrice'
  | 'postPurchasePrice'
  | 'ownerTokenTbv'
  | 'ownerTokenTbv__id'
  | 'ownerTokenTbv__owner'
  | 'ownerTokenTbv__token'
  | 'ownerTokenTbv__network'
  | 'ownerTokenTbv__chainId'
  | 'ownerTokenTbv__tbv'
  | 'payoutTokenTbv'
  | 'payoutTokenTbv__id'
  | 'payoutTokenTbv__network'
  | 'payoutTokenTbv__chainId'
  | 'payoutTokenTbv__tbv';

/**
 * A BondToken record is created to track vesting tokens, both ERC-20 and ERC-1155, created by our contracts.
 *
 */
export type Bonds_BondToken = {
  /**
   * Unique ID for the BondToken entity. In the case of an ERC-20 token, this will be the token's address. In the case of an ERC-1155 token, it will be the token's ID.
   *
   */
  id: Scalars['String'];
  /**
   * The number of decimals if an ERC-20, null if an ERC-1155.
   *
   */
  decimals?: Maybe<Scalars['BigInt']>;
  /**
   * The token symbol if an ERC-20, null if an ERC-1155.
   *
   */
  symbol?: Maybe<Scalars['String']>;
  /**
   * A reference to the Token which will be paid out upon vesting.
   *
   */
  underlying: Bonds_Token;
  /**
   * Timestamp at which vesting completes.
   *
   */
  expiry: Scalars['BigInt'];
  /**
   * The address of the relevant Teller contract.
   *
   */
  teller: Scalars['String'];
  /**
   * The network name, as used by Graph Protocol.
   * **NOTE** This may not be the same as the name as used by wallets.
   * As such, we use the chainId field to identify networks in our frontend.
   *
   */
  network: Scalars['String'];
  /**
   * The numeric chain ID on which the contracts are deployed.
   *
   */
  chainId: Scalars['BigInt'];
  /**
   * The type of bond, either "fixed-term" or "fixed-expiration".
   *
   */
  type: Scalars['String'];
};

export type Bonds_BondToken_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  underlying?: InputMaybe<Scalars['String']>;
  underlying_not?: InputMaybe<Scalars['String']>;
  underlying_gt?: InputMaybe<Scalars['String']>;
  underlying_lt?: InputMaybe<Scalars['String']>;
  underlying_gte?: InputMaybe<Scalars['String']>;
  underlying_lte?: InputMaybe<Scalars['String']>;
  underlying_in?: InputMaybe<Array<Scalars['String']>>;
  underlying_not_in?: InputMaybe<Array<Scalars['String']>>;
  underlying_contains?: InputMaybe<Scalars['String']>;
  underlying_contains_nocase?: InputMaybe<Scalars['String']>;
  underlying_not_contains?: InputMaybe<Scalars['String']>;
  underlying_not_contains_nocase?: InputMaybe<Scalars['String']>;
  underlying_starts_with?: InputMaybe<Scalars['String']>;
  underlying_starts_with_nocase?: InputMaybe<Scalars['String']>;
  underlying_not_starts_with?: InputMaybe<Scalars['String']>;
  underlying_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  underlying_ends_with?: InputMaybe<Scalars['String']>;
  underlying_ends_with_nocase?: InputMaybe<Scalars['String']>;
  underlying_not_ends_with?: InputMaybe<Scalars['String']>;
  underlying_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  underlying_?: InputMaybe<Bonds_Token_filter>;
  expiry?: InputMaybe<Scalars['BigInt']>;
  expiry_not?: InputMaybe<Scalars['BigInt']>;
  expiry_gt?: InputMaybe<Scalars['BigInt']>;
  expiry_lt?: InputMaybe<Scalars['BigInt']>;
  expiry_gte?: InputMaybe<Scalars['BigInt']>;
  expiry_lte?: InputMaybe<Scalars['BigInt']>;
  expiry_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiry_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  teller?: InputMaybe<Scalars['String']>;
  teller_not?: InputMaybe<Scalars['String']>;
  teller_gt?: InputMaybe<Scalars['String']>;
  teller_lt?: InputMaybe<Scalars['String']>;
  teller_gte?: InputMaybe<Scalars['String']>;
  teller_lte?: InputMaybe<Scalars['String']>;
  teller_in?: InputMaybe<Array<Scalars['String']>>;
  teller_not_in?: InputMaybe<Array<Scalars['String']>>;
  teller_contains?: InputMaybe<Scalars['String']>;
  teller_contains_nocase?: InputMaybe<Scalars['String']>;
  teller_not_contains?: InputMaybe<Scalars['String']>;
  teller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  teller_starts_with?: InputMaybe<Scalars['String']>;
  teller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  teller_not_starts_with?: InputMaybe<Scalars['String']>;
  teller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  teller_ends_with?: InputMaybe<Scalars['String']>;
  teller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  teller_not_ends_with?: InputMaybe<Scalars['String']>;
  teller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_BondToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_BondToken_filter>>>;
};

export type Bonds_BondToken_orderBy =
  | 'id'
  | 'decimals'
  | 'symbol'
  | 'underlying'
  | 'underlying__id'
  | 'underlying__network'
  | 'underlying__chainId'
  | 'underlying__address'
  | 'underlying__decimals'
  | 'underlying__symbol'
  | 'underlying__name'
  | 'underlying__typeName'
  | 'underlying__usedAsPayout'
  | 'underlying__usedAsQuote'
  | 'underlying__totalPayoutAmount'
  | 'underlying__purchaseCount'
  | 'expiry'
  | 'teller'
  | 'network'
  | 'chainId'
  | 'type';

/**
 * The Market entity tracks all bond markets which have been created, whether currently open or closed.
 *
 */
export type Bonds_Market = {
  /**
   * Unique ID for the Market entity, in the format:
   * [chainId]_[auctioneer contract name]_[market id]
   * **NOTE** At the time of writing, contract name will be either 'BondFixedTermCDA' or BondFixedExpCDA. More will be added in the future as different auctioneer types become available.
   *
   */
  id: Scalars['String'];
  /**
   * The Auctioneer contract name.
   *
   */
  name: Scalars['String'];
  /**
   * The type of Market.
   *
   */
  type: Scalars['String'];
  /**
   * The network name, as used by Graph Protocol.
   * **NOTE** This may not be the same as the name as used by wallets.
   * As such, we use the chainId field to identify networks in our frontend.
   *
   */
  network: Scalars['String'];
  /**
   * The numeric chain ID on which the contracts are deployed.
   *
   */
  chainId: Scalars['BigInt'];
  /**
   * The address of the Market's Auctioneer contract.
   *
   */
  auctioneer: Scalars['String'];
  /**
   * The address of the Market's Teller contract.
   *
   */
  teller: Scalars['String'];
  /**
   * The Market's ID for use with the Auctioneer.
   *
   */
  marketId: Scalars['BigInt'];
  /**
   * The address of the Market owner.
   *
   */
  owner: Scalars['String'];
  /**
   * A reference to the payout Token record.
   *
   */
  payoutToken: Bonds_Token;
  /**
   * A reference to the quote Token record.
   *
   */
  quoteToken: Bonds_Token;
  /**
   * The Market's vesting time. In the case of fixed expiry markets, this will be a timestamp. In the case of fixed term markets, it will be the vesting duration in seconds.
   *
   */
  vesting: Scalars['BigInt'];
  /**
   * The Market's start time (for supported Market types)
   *
   */
  start?: Maybe<Scalars['BigInt']>;
  /**
   * The Market's conclusion time
   *
   */
  conclusion?: Maybe<Scalars['BigInt']>;
  /**
   * The type of vesting for the market. At the time of writing, this will be either "fixed-term" or "fixed-expiration". More options may be added in the future if new vesting types become available.
   *
   */
  vestingType: Scalars['String'];
  /**
   * Whether or not the Market is an instant swap market.
   *
   */
  isInstantSwap: Scalars['Boolean'];
  /**
   * Whether or not the Market has been closed.
   *
   */
  hasClosed: Scalars['Boolean'];
  /**
   * The total amount of quote tokens bonded for this market.
   * **NOTE** This is the number of quote tokens, NOT their USD value.
   *
   */
  totalBondedAmount: Scalars['Bonds_BigDecimal'];
  /**
   * The total amount of payout tokens purchased through this market.
   * **NOTE** This is the number of payout tokens, NOT their USD value.
   *
   */
  totalPayoutAmount: Scalars['Bonds_BigDecimal'];
  /**
   * The timestamp of the block in which the Market was created.
   *
   */
  creationBlockTimestamp: Scalars['BigInt'];
  /**
   * The address of the Market callback contract, if specified. 0x0000000000000000000000000000000000000000 if there is no callback contract.
   *
   */
  callbackAddress: Scalars['String'];
  /**
   * The current capacity of the Market. This can be in either the quote or payout Token, according to the value of the capacityInQuote field.
   *
   */
  capacity: Scalars['BigInt'];
  /**
   * Whether the Market capacity is measured in the quote (true) or payout (false) Token.
   *
   */
  capacityInQuote: Scalars['Boolean'];
  /**
   * The minimum price at which a bond can be purchased.
   * **NOTE** This is a minimum return value for the Auctioneer marketPrice function, NOT a USD price.
   *
   */
  minPrice?: Maybe<Scalars['BigInt']>;
  /**
   * The price at which a bond can be purchased.
   * **NOTE** This is a minimum return value for the Auctioneer marketPrice function, NOT a USD price.
   *
   */
  price?: Maybe<Scalars['BigInt']>;
  /**
   * Scale value to use when converting between quote token and payout token amounts with marketPrice.
   *
   */
  scale?: Maybe<Scalars['BigInt']>;
  /**
   * The average bond price across all purchases.
   *
   */
  averageBondPrice?: Maybe<Scalars['Bonds_BigDecimal']>;
  /**
   * A list of all tuning events that have been emitted for this Market.
   *
   */
  tunes?: Maybe<Array<Bonds_Tune>>;
  /**
   * A list of BondPurchase records for this Market.
   *
   */
  bondPurchases?: Maybe<Array<Bonds_BondPurchase>>;
  /**
   * A count of BondPurchases for this market
   *
   */
  bondsIssued: Scalars['BigInt'];
};


/**
 * The Market entity tracks all bond markets which have been created, whether currently open or closed.
 *
 */
export type Bonds_MarkettunesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_Tune_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_Tune_filter>;
};


/**
 * The Market entity tracks all bond markets which have been created, whether currently open or closed.
 *
 */
export type Bonds_MarketbondPurchasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_BondPurchase_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_BondPurchase_filter>;
};

/**
 * Workaround due to no simple entity count being available.
 *
 */
export type Bonds_MarketOwnerCount = {
  /**
   * There should be one MarketOwnerCount entry per market owner, with owner address as id.
   *
   */
  id: Scalars['String'];
  /**
   * The total number of markets (open and closed) owned by this address on this chain.
   *
   */
  count: Scalars['BigInt'];
};

export type Bonds_MarketOwnerCount_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_MarketOwnerCount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_MarketOwnerCount_filter>>>;
};

export type Bonds_MarketOwnerCount_orderBy =
  | 'id'
  | 'count';

export type Bonds_Market_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  type?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  auctioneer?: InputMaybe<Scalars['String']>;
  auctioneer_not?: InputMaybe<Scalars['String']>;
  auctioneer_gt?: InputMaybe<Scalars['String']>;
  auctioneer_lt?: InputMaybe<Scalars['String']>;
  auctioneer_gte?: InputMaybe<Scalars['String']>;
  auctioneer_lte?: InputMaybe<Scalars['String']>;
  auctioneer_in?: InputMaybe<Array<Scalars['String']>>;
  auctioneer_not_in?: InputMaybe<Array<Scalars['String']>>;
  auctioneer_contains?: InputMaybe<Scalars['String']>;
  auctioneer_contains_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_not_contains?: InputMaybe<Scalars['String']>;
  auctioneer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_starts_with?: InputMaybe<Scalars['String']>;
  auctioneer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_not_starts_with?: InputMaybe<Scalars['String']>;
  auctioneer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_ends_with?: InputMaybe<Scalars['String']>;
  auctioneer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_not_ends_with?: InputMaybe<Scalars['String']>;
  auctioneer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  teller?: InputMaybe<Scalars['String']>;
  teller_not?: InputMaybe<Scalars['String']>;
  teller_gt?: InputMaybe<Scalars['String']>;
  teller_lt?: InputMaybe<Scalars['String']>;
  teller_gte?: InputMaybe<Scalars['String']>;
  teller_lte?: InputMaybe<Scalars['String']>;
  teller_in?: InputMaybe<Array<Scalars['String']>>;
  teller_not_in?: InputMaybe<Array<Scalars['String']>>;
  teller_contains?: InputMaybe<Scalars['String']>;
  teller_contains_nocase?: InputMaybe<Scalars['String']>;
  teller_not_contains?: InputMaybe<Scalars['String']>;
  teller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  teller_starts_with?: InputMaybe<Scalars['String']>;
  teller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  teller_not_starts_with?: InputMaybe<Scalars['String']>;
  teller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  teller_ends_with?: InputMaybe<Scalars['String']>;
  teller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  teller_not_ends_with?: InputMaybe<Scalars['String']>;
  teller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketId?: InputMaybe<Scalars['BigInt']>;
  marketId_not?: InputMaybe<Scalars['BigInt']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']>;
  marketId_lt?: InputMaybe<Scalars['BigInt']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  payoutToken?: InputMaybe<Scalars['String']>;
  payoutToken_not?: InputMaybe<Scalars['String']>;
  payoutToken_gt?: InputMaybe<Scalars['String']>;
  payoutToken_lt?: InputMaybe<Scalars['String']>;
  payoutToken_gte?: InputMaybe<Scalars['String']>;
  payoutToken_lte?: InputMaybe<Scalars['String']>;
  payoutToken_in?: InputMaybe<Array<Scalars['String']>>;
  payoutToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  payoutToken_contains?: InputMaybe<Scalars['String']>;
  payoutToken_contains_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_not_contains?: InputMaybe<Scalars['String']>;
  payoutToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_starts_with?: InputMaybe<Scalars['String']>;
  payoutToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_not_starts_with?: InputMaybe<Scalars['String']>;
  payoutToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_ends_with?: InputMaybe<Scalars['String']>;
  payoutToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_not_ends_with?: InputMaybe<Scalars['String']>;
  payoutToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_?: InputMaybe<Bonds_Token_filter>;
  quoteToken?: InputMaybe<Scalars['String']>;
  quoteToken_not?: InputMaybe<Scalars['String']>;
  quoteToken_gt?: InputMaybe<Scalars['String']>;
  quoteToken_lt?: InputMaybe<Scalars['String']>;
  quoteToken_gte?: InputMaybe<Scalars['String']>;
  quoteToken_lte?: InputMaybe<Scalars['String']>;
  quoteToken_in?: InputMaybe<Array<Scalars['String']>>;
  quoteToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  quoteToken_contains?: InputMaybe<Scalars['String']>;
  quoteToken_contains_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_not_contains?: InputMaybe<Scalars['String']>;
  quoteToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_starts_with?: InputMaybe<Scalars['String']>;
  quoteToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_not_starts_with?: InputMaybe<Scalars['String']>;
  quoteToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_ends_with?: InputMaybe<Scalars['String']>;
  quoteToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_not_ends_with?: InputMaybe<Scalars['String']>;
  quoteToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_?: InputMaybe<Bonds_Token_filter>;
  vesting?: InputMaybe<Scalars['BigInt']>;
  vesting_not?: InputMaybe<Scalars['BigInt']>;
  vesting_gt?: InputMaybe<Scalars['BigInt']>;
  vesting_lt?: InputMaybe<Scalars['BigInt']>;
  vesting_gte?: InputMaybe<Scalars['BigInt']>;
  vesting_lte?: InputMaybe<Scalars['BigInt']>;
  vesting_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vesting_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  start?: InputMaybe<Scalars['BigInt']>;
  start_not?: InputMaybe<Scalars['BigInt']>;
  start_gt?: InputMaybe<Scalars['BigInt']>;
  start_lt?: InputMaybe<Scalars['BigInt']>;
  start_gte?: InputMaybe<Scalars['BigInt']>;
  start_lte?: InputMaybe<Scalars['BigInt']>;
  start_in?: InputMaybe<Array<Scalars['BigInt']>>;
  start_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  conclusion?: InputMaybe<Scalars['BigInt']>;
  conclusion_not?: InputMaybe<Scalars['BigInt']>;
  conclusion_gt?: InputMaybe<Scalars['BigInt']>;
  conclusion_lt?: InputMaybe<Scalars['BigInt']>;
  conclusion_gte?: InputMaybe<Scalars['BigInt']>;
  conclusion_lte?: InputMaybe<Scalars['BigInt']>;
  conclusion_in?: InputMaybe<Array<Scalars['BigInt']>>;
  conclusion_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vestingType?: InputMaybe<Scalars['String']>;
  vestingType_not?: InputMaybe<Scalars['String']>;
  vestingType_gt?: InputMaybe<Scalars['String']>;
  vestingType_lt?: InputMaybe<Scalars['String']>;
  vestingType_gte?: InputMaybe<Scalars['String']>;
  vestingType_lte?: InputMaybe<Scalars['String']>;
  vestingType_in?: InputMaybe<Array<Scalars['String']>>;
  vestingType_not_in?: InputMaybe<Array<Scalars['String']>>;
  vestingType_contains?: InputMaybe<Scalars['String']>;
  vestingType_contains_nocase?: InputMaybe<Scalars['String']>;
  vestingType_not_contains?: InputMaybe<Scalars['String']>;
  vestingType_not_contains_nocase?: InputMaybe<Scalars['String']>;
  vestingType_starts_with?: InputMaybe<Scalars['String']>;
  vestingType_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vestingType_not_starts_with?: InputMaybe<Scalars['String']>;
  vestingType_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vestingType_ends_with?: InputMaybe<Scalars['String']>;
  vestingType_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vestingType_not_ends_with?: InputMaybe<Scalars['String']>;
  vestingType_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  isInstantSwap?: InputMaybe<Scalars['Boolean']>;
  isInstantSwap_not?: InputMaybe<Scalars['Boolean']>;
  isInstantSwap_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isInstantSwap_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  hasClosed?: InputMaybe<Scalars['Boolean']>;
  hasClosed_not?: InputMaybe<Scalars['Boolean']>;
  hasClosed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  hasClosed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  totalBondedAmount?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalBondedAmount_not?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalBondedAmount_gt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalBondedAmount_lt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalBondedAmount_gte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalBondedAmount_lte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalBondedAmount_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  totalBondedAmount_not_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  totalPayoutAmount?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalPayoutAmount_not?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalPayoutAmount_gt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalPayoutAmount_lt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalPayoutAmount_gte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalPayoutAmount_lte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalPayoutAmount_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  totalPayoutAmount_not_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  creationBlockTimestamp?: InputMaybe<Scalars['BigInt']>;
  creationBlockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  creationBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  creationBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  creationBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  creationBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  creationBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creationBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackAddress?: InputMaybe<Scalars['String']>;
  callbackAddress_not?: InputMaybe<Scalars['String']>;
  callbackAddress_gt?: InputMaybe<Scalars['String']>;
  callbackAddress_lt?: InputMaybe<Scalars['String']>;
  callbackAddress_gte?: InputMaybe<Scalars['String']>;
  callbackAddress_lte?: InputMaybe<Scalars['String']>;
  callbackAddress_in?: InputMaybe<Array<Scalars['String']>>;
  callbackAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  callbackAddress_contains?: InputMaybe<Scalars['String']>;
  callbackAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  callbackAddress_not_contains?: InputMaybe<Scalars['String']>;
  callbackAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  callbackAddress_starts_with?: InputMaybe<Scalars['String']>;
  callbackAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  callbackAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  callbackAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  callbackAddress_ends_with?: InputMaybe<Scalars['String']>;
  callbackAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  callbackAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  callbackAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  capacity?: InputMaybe<Scalars['BigInt']>;
  capacity_not?: InputMaybe<Scalars['BigInt']>;
  capacity_gt?: InputMaybe<Scalars['BigInt']>;
  capacity_lt?: InputMaybe<Scalars['BigInt']>;
  capacity_gte?: InputMaybe<Scalars['BigInt']>;
  capacity_lte?: InputMaybe<Scalars['BigInt']>;
  capacity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  capacity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  capacityInQuote?: InputMaybe<Scalars['Boolean']>;
  capacityInQuote_not?: InputMaybe<Scalars['Boolean']>;
  capacityInQuote_in?: InputMaybe<Array<Scalars['Boolean']>>;
  capacityInQuote_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  minPrice?: InputMaybe<Scalars['BigInt']>;
  minPrice_not?: InputMaybe<Scalars['BigInt']>;
  minPrice_gt?: InputMaybe<Scalars['BigInt']>;
  minPrice_lt?: InputMaybe<Scalars['BigInt']>;
  minPrice_gte?: InputMaybe<Scalars['BigInt']>;
  minPrice_lte?: InputMaybe<Scalars['BigInt']>;
  minPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scale?: InputMaybe<Scalars['BigInt']>;
  scale_not?: InputMaybe<Scalars['BigInt']>;
  scale_gt?: InputMaybe<Scalars['BigInt']>;
  scale_lt?: InputMaybe<Scalars['BigInt']>;
  scale_gte?: InputMaybe<Scalars['BigInt']>;
  scale_lte?: InputMaybe<Scalars['BigInt']>;
  scale_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scale_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageBondPrice?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  averageBondPrice_not?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  averageBondPrice_gt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  averageBondPrice_lt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  averageBondPrice_gte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  averageBondPrice_lte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  averageBondPrice_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  averageBondPrice_not_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  tunes_?: InputMaybe<Bonds_Tune_filter>;
  bondPurchases_?: InputMaybe<Bonds_BondPurchase_filter>;
  bondsIssued?: InputMaybe<Scalars['BigInt']>;
  bondsIssued_not?: InputMaybe<Scalars['BigInt']>;
  bondsIssued_gt?: InputMaybe<Scalars['BigInt']>;
  bondsIssued_lt?: InputMaybe<Scalars['BigInt']>;
  bondsIssued_gte?: InputMaybe<Scalars['BigInt']>;
  bondsIssued_lte?: InputMaybe<Scalars['BigInt']>;
  bondsIssued_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bondsIssued_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_Market_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_Market_filter>>>;
};

export type Bonds_Market_orderBy =
  | 'id'
  | 'name'
  | 'type'
  | 'network'
  | 'chainId'
  | 'auctioneer'
  | 'teller'
  | 'marketId'
  | 'owner'
  | 'payoutToken'
  | 'payoutToken__id'
  | 'payoutToken__network'
  | 'payoutToken__chainId'
  | 'payoutToken__address'
  | 'payoutToken__decimals'
  | 'payoutToken__symbol'
  | 'payoutToken__name'
  | 'payoutToken__typeName'
  | 'payoutToken__usedAsPayout'
  | 'payoutToken__usedAsQuote'
  | 'payoutToken__totalPayoutAmount'
  | 'payoutToken__purchaseCount'
  | 'quoteToken'
  | 'quoteToken__id'
  | 'quoteToken__network'
  | 'quoteToken__chainId'
  | 'quoteToken__address'
  | 'quoteToken__decimals'
  | 'quoteToken__symbol'
  | 'quoteToken__name'
  | 'quoteToken__typeName'
  | 'quoteToken__usedAsPayout'
  | 'quoteToken__usedAsQuote'
  | 'quoteToken__totalPayoutAmount'
  | 'quoteToken__purchaseCount'
  | 'vesting'
  | 'start'
  | 'conclusion'
  | 'vestingType'
  | 'isInstantSwap'
  | 'hasClosed'
  | 'totalBondedAmount'
  | 'totalPayoutAmount'
  | 'creationBlockTimestamp'
  | 'callbackAddress'
  | 'capacity'
  | 'capacityInQuote'
  | 'minPrice'
  | 'price'
  | 'scale'
  | 'averageBondPrice'
  | 'tunes'
  | 'bondPurchases'
  | 'bondsIssued';

/** Defines the order direction, either ascending or descending */
export type Bonds_OrderDirection =
  | 'asc'
  | 'desc';

/**
 * The OwnerBalance entity tracks user balances of fixed-term ERC-1155 bond tokens.
 * It does not track balances of fixed-expiry ERC-20 tokens. These can be found by querying the user's wallet.
 *
 */
export type Bonds_OwnerBalance = {
  /**
   * Unique ID for the OwnerBalance entity, in the format:
   * [owner address]_[BondToken tokenId]
   *
   */
  id: Scalars['String'];
  /**
   * The unique ID of the token, assigned on creation.
   *
   */
  tokenId: Scalars['BigInt'];
  /**
   * The wallet address the balance pertains to.
   *
   */
  owner: Scalars['String'];
  /**
   * The current balance of ERC-1155 bond tokens.
   *
   */
  balance: Scalars['BigInt'];
  /**
   * The network name, as used by Graph Protocol.
   * **NOTE** This may not be the same as the name as used by wallets.
   * As such, we use the chainId field to identify networks in our frontend.
   *
   */
  network: Scalars['String'];
  /**
   * The numeric chain ID on which the contracts are deployed.
   *
   */
  chainId: Scalars['BigInt'];
  /**
   * A reference to the BondToken for which the balance is being recorded.
   *
   */
  bondToken?: Maybe<Bonds_BondToken>;
};

export type Bonds_OwnerBalance_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  network?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bondToken?: InputMaybe<Scalars['String']>;
  bondToken_not?: InputMaybe<Scalars['String']>;
  bondToken_gt?: InputMaybe<Scalars['String']>;
  bondToken_lt?: InputMaybe<Scalars['String']>;
  bondToken_gte?: InputMaybe<Scalars['String']>;
  bondToken_lte?: InputMaybe<Scalars['String']>;
  bondToken_in?: InputMaybe<Array<Scalars['String']>>;
  bondToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  bondToken_contains?: InputMaybe<Scalars['String']>;
  bondToken_contains_nocase?: InputMaybe<Scalars['String']>;
  bondToken_not_contains?: InputMaybe<Scalars['String']>;
  bondToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bondToken_starts_with?: InputMaybe<Scalars['String']>;
  bondToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bondToken_not_starts_with?: InputMaybe<Scalars['String']>;
  bondToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bondToken_ends_with?: InputMaybe<Scalars['String']>;
  bondToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bondToken_not_ends_with?: InputMaybe<Scalars['String']>;
  bondToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bondToken_?: InputMaybe<Bonds_BondToken_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_OwnerBalance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_OwnerBalance_filter>>>;
};

export type Bonds_OwnerBalance_orderBy =
  | 'id'
  | 'tokenId'
  | 'owner'
  | 'balance'
  | 'network'
  | 'chainId'
  | 'bondToken'
  | 'bondToken__id'
  | 'bondToken__decimals'
  | 'bondToken__symbol'
  | 'bondToken__expiry'
  | 'bondToken__teller'
  | 'bondToken__network'
  | 'bondToken__chainId'
  | 'bondToken__type';

/**
 * The OwnerTokenTbv entity tracks the total of each quote token received by each Market owner.
 *
 */
export type Bonds_OwnerTokenTbv = {
  /**
   * Unique ID for the OwnerTokenTbv entity, in the format:
   * [chainId]_[Market owner address]__[quote Token id]
   * **NOTE** the Token ID also appends the chain ID before the token address, so the chain ID will appear once at the start of the OwnerTokenTbv ID and once in the quote token subsection of the ID.
   *
   */
  id: Scalars['String'];
  /**
   * The Market owner address for which TBV is being calculated.
   *
   */
  owner: Scalars['String'];
  /**
   * The quote Token for which TBV is being calculated.
   *
   */
  token: Scalars['String'];
  /**
   * The network name, as used by Graph Protocol.
   * **NOTE** This may not be the same as the name as used by wallets.
   * As such, we use the chainId field to identify networks in our frontend.
   *
   */
  network: Scalars['String'];
  /**
   * The numeric chain ID on which the contracts are deployed.
   *
   */
  chainId: Scalars['BigInt'];
  /**
   * The amount of the quote token received across the owner's markets.
   *
   */
  tbv: Scalars['Bonds_BigDecimal'];
  /**
   * A list of BondPurchase records in which the owner has received the quote token.
   *
   */
  bondPurchases?: Maybe<Array<Bonds_BondPurchase>>;
};


/**
 * The OwnerTokenTbv entity tracks the total of each quote token received by each Market owner.
 *
 */
export type Bonds_OwnerTokenTbvbondPurchasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_BondPurchase_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_BondPurchase_filter>;
};

export type Bonds_OwnerTokenTbv_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  network?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tbv?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  tbv_not?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  tbv_gt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  tbv_lt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  tbv_gte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  tbv_lte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  tbv_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  tbv_not_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  bondPurchases_?: InputMaybe<Bonds_BondPurchase_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_OwnerTokenTbv_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_OwnerTokenTbv_filter>>>;
};

export type Bonds_OwnerTokenTbv_orderBy =
  | 'id'
  | 'owner'
  | 'token'
  | 'network'
  | 'chainId'
  | 'tbv'
  | 'bondPurchases';

/**
 * The Pair entity stores references to the Tokens which make up a Uniswap-V2 or similar LP Pair.
 *
 */
export type Bonds_Pair = {
  /**
   * The address of the LP pair.
   * **NOTE** for consistency, this should probably be updated to append the chainId, as Token and BalancerWeightedPool do.
   *
   */
  id: Scalars['String'];
  /**
   * A reference to the Token record for the LP pair's token0.
   *
   */
  token0: Bonds_Token;
  /**
   * A reference to the Token record for the LP pair's token1.
   *
   */
  token1: Bonds_Token;
};

export type Bonds_Pair_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  token0_?: InputMaybe<Bonds_Token_filter>;
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
  token1_?: InputMaybe<Bonds_Token_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_Pair_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_Pair_filter>>>;
};

export type Bonds_Pair_orderBy =
  | 'id'
  | 'token0'
  | 'token0__id'
  | 'token0__network'
  | 'token0__chainId'
  | 'token0__address'
  | 'token0__decimals'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__typeName'
  | 'token0__usedAsPayout'
  | 'token0__usedAsQuote'
  | 'token0__totalPayoutAmount'
  | 'token0__purchaseCount'
  | 'token1'
  | 'token1__id'
  | 'token1__network'
  | 'token1__chainId'
  | 'token1__address'
  | 'token1__decimals'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__typeName'
  | 'token1__usedAsPayout'
  | 'token1__usedAsQuote'
  | 'token1__totalPayoutAmount'
  | 'token1__purchaseCount';

export type Bonds_PayoutToken = {
  id: Scalars['String'];
};

/**
 * The PayoutTokenTbv entity tracks the total of each quote token received in exchange for the given payout token.
 *
 */
export type Bonds_PayoutTokenTbv = {
  /**
   * Unique ID for the PayoutTokenTbv entity, in the format:
   * [chainId]_[payout token address]__[quote token id]
   * **NOTE** the Token ID also appends the chain ID before the token address, so the chain ID will appear once at the start of the OwnerTokenTbv ID and once in the quote token subsection of the ID.
   *
   */
  id: Scalars['String'];
  /**
   * The payout Token address for which TBV is being calculated.
   *
   */
  payoutToken: Bonds_Token;
  /**
   * The quote Token for which TBV is being calculated.
   *
   */
  quoteToken: Bonds_Token;
  /**
   * The network name, as used by Graph Protocol.
   * **NOTE** This may not be the same as the name as used by wallets.
   * As such, we use the chainId field to identify networks in our frontend.
   *
   */
  network: Scalars['String'];
  /**
   * The numeric chain ID on which the contracts are deployed.
   *
   */
  chainId: Scalars['BigInt'];
  /**
   * The amount of the quote token received across the owner's markets.
   *
   */
  tbv: Scalars['Bonds_BigDecimal'];
  /**
   * A list of BondPurchase records in which the owner has received the quote token.
   *
   */
  bondPurchases?: Maybe<Array<Bonds_BondPurchase>>;
};


/**
 * The PayoutTokenTbv entity tracks the total of each quote token received in exchange for the given payout token.
 *
 */
export type Bonds_PayoutTokenTbvbondPurchasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_BondPurchase_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_BondPurchase_filter>;
};

export type Bonds_PayoutTokenTbv_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken?: InputMaybe<Scalars['String']>;
  payoutToken_not?: InputMaybe<Scalars['String']>;
  payoutToken_gt?: InputMaybe<Scalars['String']>;
  payoutToken_lt?: InputMaybe<Scalars['String']>;
  payoutToken_gte?: InputMaybe<Scalars['String']>;
  payoutToken_lte?: InputMaybe<Scalars['String']>;
  payoutToken_in?: InputMaybe<Array<Scalars['String']>>;
  payoutToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  payoutToken_contains?: InputMaybe<Scalars['String']>;
  payoutToken_contains_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_not_contains?: InputMaybe<Scalars['String']>;
  payoutToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_starts_with?: InputMaybe<Scalars['String']>;
  payoutToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_not_starts_with?: InputMaybe<Scalars['String']>;
  payoutToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_ends_with?: InputMaybe<Scalars['String']>;
  payoutToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_not_ends_with?: InputMaybe<Scalars['String']>;
  payoutToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_?: InputMaybe<Bonds_Token_filter>;
  quoteToken?: InputMaybe<Scalars['String']>;
  quoteToken_not?: InputMaybe<Scalars['String']>;
  quoteToken_gt?: InputMaybe<Scalars['String']>;
  quoteToken_lt?: InputMaybe<Scalars['String']>;
  quoteToken_gte?: InputMaybe<Scalars['String']>;
  quoteToken_lte?: InputMaybe<Scalars['String']>;
  quoteToken_in?: InputMaybe<Array<Scalars['String']>>;
  quoteToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  quoteToken_contains?: InputMaybe<Scalars['String']>;
  quoteToken_contains_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_not_contains?: InputMaybe<Scalars['String']>;
  quoteToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_starts_with?: InputMaybe<Scalars['String']>;
  quoteToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_not_starts_with?: InputMaybe<Scalars['String']>;
  quoteToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_ends_with?: InputMaybe<Scalars['String']>;
  quoteToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_not_ends_with?: InputMaybe<Scalars['String']>;
  quoteToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_?: InputMaybe<Bonds_Token_filter>;
  network?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tbv?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  tbv_not?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  tbv_gt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  tbv_lt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  tbv_gte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  tbv_lte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  tbv_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  tbv_not_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  bondPurchases_?: InputMaybe<Bonds_BondPurchase_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_PayoutTokenTbv_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_PayoutTokenTbv_filter>>>;
};

export type Bonds_PayoutTokenTbv_orderBy =
  | 'id'
  | 'payoutToken'
  | 'payoutToken__id'
  | 'payoutToken__network'
  | 'payoutToken__chainId'
  | 'payoutToken__address'
  | 'payoutToken__decimals'
  | 'payoutToken__symbol'
  | 'payoutToken__name'
  | 'payoutToken__typeName'
  | 'payoutToken__usedAsPayout'
  | 'payoutToken__usedAsQuote'
  | 'payoutToken__totalPayoutAmount'
  | 'payoutToken__purchaseCount'
  | 'quoteToken'
  | 'quoteToken__id'
  | 'quoteToken__network'
  | 'quoteToken__chainId'
  | 'quoteToken__address'
  | 'quoteToken__decimals'
  | 'quoteToken__symbol'
  | 'quoteToken__name'
  | 'quoteToken__typeName'
  | 'quoteToken__usedAsPayout'
  | 'quoteToken__usedAsQuote'
  | 'quoteToken__totalPayoutAmount'
  | 'quoteToken__purchaseCount'
  | 'network'
  | 'chainId'
  | 'tbv'
  | 'bondPurchases';

export type Bonds_PayoutToken_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_PayoutToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_PayoutToken_filter>>>;
};

export type Bonds_PayoutToken_orderBy =
  | 'id';

/**
 * Workaround due to no simple entity count being available.
 *
 */
export type Bonds_PurchaseCount = {
  /**
   * There should only be one PurchaseCount entry, with id "purchase-count".
   *
   */
  id: Scalars['String'];
  /**
   * The total number of bond purchases across all markets on this chain.
   *
   */
  count: Scalars['BigInt'];
};

export type Bonds_PurchaseCount_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_PurchaseCount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_PurchaseCount_filter>>>;
};

export type Bonds_PurchaseCount_orderBy =
  | 'id'
  | 'count';

export type Query = {
  Bonds_ownerBalance?: Maybe<Bonds_OwnerBalance>;
  Bonds_ownerBalances: Array<Bonds_OwnerBalance>;
  Bonds_uniqueBonder?: Maybe<Bonds_UniqueBonder>;
  Bonds_uniqueBonders: Array<Bonds_UniqueBonder>;
  Bonds_uniqueBonderCount?: Maybe<Bonds_UniqueBonderCount>;
  Bonds_uniqueBonderCounts: Array<Bonds_UniqueBonderCount>;
  Bonds_uniqueTokenBonder?: Maybe<Bonds_UniqueTokenBonder>;
  Bonds_uniqueTokenBonders: Array<Bonds_UniqueTokenBonder>;
  Bonds_uniqueTokenBonderCount?: Maybe<Bonds_UniqueTokenBonderCount>;
  Bonds_uniqueTokenBonderCounts: Array<Bonds_UniqueTokenBonderCount>;
  Bonds_bondToken?: Maybe<Bonds_BondToken>;
  Bonds_bondTokens: Array<Bonds_BondToken>;
  Bonds_ownerTokenTbv?: Maybe<Bonds_OwnerTokenTbv>;
  Bonds_ownerTokenTbvs: Array<Bonds_OwnerTokenTbv>;
  Bonds_payoutTokenTbv?: Maybe<Bonds_PayoutTokenTbv>;
  Bonds_payoutTokenTbvs: Array<Bonds_PayoutTokenTbv>;
  Bonds_bondPurchase?: Maybe<Bonds_BondPurchase>;
  Bonds_bondPurchases: Array<Bonds_BondPurchase>;
  Bonds_token?: Maybe<Bonds_Token>;
  Bonds_tokens: Array<Bonds_Token>;
  Bonds_market?: Maybe<Bonds_Market>;
  Bonds_markets: Array<Bonds_Market>;
  Bonds_pair?: Maybe<Bonds_Pair>;
  Bonds_pairs: Array<Bonds_Pair>;
  Bonds_balancerWeightedPool?: Maybe<Bonds_BalancerWeightedPool>;
  Bonds_balancerWeightedPools: Array<Bonds_BalancerWeightedPool>;
  Bonds_tune?: Maybe<Bonds_Tune>;
  Bonds_tunes: Array<Bonds_Tune>;
  Bonds_purchaseCount?: Maybe<Bonds_PurchaseCount>;
  Bonds_purchaseCounts: Array<Bonds_PurchaseCount>;
  Bonds_marketOwnerCount?: Maybe<Bonds_MarketOwnerCount>;
  Bonds_marketOwnerCounts: Array<Bonds_MarketOwnerCount>;
  Bonds_payoutToken?: Maybe<Bonds_PayoutToken>;
  Bonds_payoutTokens: Array<Bonds_PayoutToken>;
  Bonds_quoteToken?: Maybe<Bonds_QuoteToken>;
  Bonds_quoteTokens: Array<Bonds_QuoteToken>;
  /** Access to subgraph metadata */
  Bonds__meta?: Maybe<Bonds__Meta_>;
};


export type QueryBonds_ownerBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_ownerBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_OwnerBalance_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_OwnerBalance_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_uniqueBonderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_uniqueBondersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_UniqueBonder_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_UniqueBonder_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_uniqueBonderCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_uniqueBonderCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_UniqueBonderCount_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_UniqueBonderCount_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_uniqueTokenBonderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_uniqueTokenBondersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_UniqueTokenBonder_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_UniqueTokenBonder_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_uniqueTokenBonderCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_uniqueTokenBonderCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_UniqueTokenBonderCount_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_UniqueTokenBonderCount_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_bondTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_bondTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_BondToken_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_BondToken_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_ownerTokenTbvArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_ownerTokenTbvsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_OwnerTokenTbv_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_OwnerTokenTbv_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_payoutTokenTbvArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_payoutTokenTbvsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_PayoutTokenTbv_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_PayoutTokenTbv_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_bondPurchaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_bondPurchasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_BondPurchase_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_BondPurchase_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_tokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_Token_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_Token_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_marketArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_marketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_Market_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_Market_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_pairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_pairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_Pair_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_Pair_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_balancerWeightedPoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_balancerWeightedPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_BalancerWeightedPool_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_BalancerWeightedPool_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_tuneArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_tunesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_Tune_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_Tune_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_purchaseCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_purchaseCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_PurchaseCount_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_PurchaseCount_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_marketOwnerCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_marketOwnerCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_MarketOwnerCount_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_MarketOwnerCount_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_payoutTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_payoutTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_PayoutToken_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_PayoutToken_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_quoteTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds_quoteTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_QuoteToken_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_QuoteToken_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBonds__metaArgs = {
  block?: InputMaybe<Bonds_Block_height>;
};

export type Bonds_QuoteToken = {
  id: Scalars['String'];
};

export type Bonds_QuoteToken_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_QuoteToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_QuoteToken_filter>>>;
};

export type Bonds_QuoteToken_orderBy =
  | 'id';

export type Subscription = {
  Bonds_ownerBalance?: Maybe<Bonds_OwnerBalance>;
  Bonds_ownerBalances: Array<Bonds_OwnerBalance>;
  Bonds_uniqueBonder?: Maybe<Bonds_UniqueBonder>;
  Bonds_uniqueBonders: Array<Bonds_UniqueBonder>;
  Bonds_uniqueBonderCount?: Maybe<Bonds_UniqueBonderCount>;
  Bonds_uniqueBonderCounts: Array<Bonds_UniqueBonderCount>;
  Bonds_uniqueTokenBonder?: Maybe<Bonds_UniqueTokenBonder>;
  Bonds_uniqueTokenBonders: Array<Bonds_UniqueTokenBonder>;
  Bonds_uniqueTokenBonderCount?: Maybe<Bonds_UniqueTokenBonderCount>;
  Bonds_uniqueTokenBonderCounts: Array<Bonds_UniqueTokenBonderCount>;
  Bonds_bondToken?: Maybe<Bonds_BondToken>;
  Bonds_bondTokens: Array<Bonds_BondToken>;
  Bonds_ownerTokenTbv?: Maybe<Bonds_OwnerTokenTbv>;
  Bonds_ownerTokenTbvs: Array<Bonds_OwnerTokenTbv>;
  Bonds_payoutTokenTbv?: Maybe<Bonds_PayoutTokenTbv>;
  Bonds_payoutTokenTbvs: Array<Bonds_PayoutTokenTbv>;
  Bonds_bondPurchase?: Maybe<Bonds_BondPurchase>;
  Bonds_bondPurchases: Array<Bonds_BondPurchase>;
  Bonds_token?: Maybe<Bonds_Token>;
  Bonds_tokens: Array<Bonds_Token>;
  Bonds_market?: Maybe<Bonds_Market>;
  Bonds_markets: Array<Bonds_Market>;
  Bonds_pair?: Maybe<Bonds_Pair>;
  Bonds_pairs: Array<Bonds_Pair>;
  Bonds_balancerWeightedPool?: Maybe<Bonds_BalancerWeightedPool>;
  Bonds_balancerWeightedPools: Array<Bonds_BalancerWeightedPool>;
  Bonds_tune?: Maybe<Bonds_Tune>;
  Bonds_tunes: Array<Bonds_Tune>;
  Bonds_purchaseCount?: Maybe<Bonds_PurchaseCount>;
  Bonds_purchaseCounts: Array<Bonds_PurchaseCount>;
  Bonds_marketOwnerCount?: Maybe<Bonds_MarketOwnerCount>;
  Bonds_marketOwnerCounts: Array<Bonds_MarketOwnerCount>;
  Bonds_payoutToken?: Maybe<Bonds_PayoutToken>;
  Bonds_payoutTokens: Array<Bonds_PayoutToken>;
  Bonds_quoteToken?: Maybe<Bonds_QuoteToken>;
  Bonds_quoteTokens: Array<Bonds_QuoteToken>;
  /** Access to subgraph metadata */
  Bonds__meta?: Maybe<Bonds__Meta_>;
};


export type SubscriptionBonds_ownerBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_ownerBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_OwnerBalance_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_OwnerBalance_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_uniqueBonderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_uniqueBondersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_UniqueBonder_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_UniqueBonder_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_uniqueBonderCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_uniqueBonderCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_UniqueBonderCount_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_UniqueBonderCount_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_uniqueTokenBonderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_uniqueTokenBondersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_UniqueTokenBonder_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_UniqueTokenBonder_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_uniqueTokenBonderCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_uniqueTokenBonderCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_UniqueTokenBonderCount_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_UniqueTokenBonderCount_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_bondTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_bondTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_BondToken_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_BondToken_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_ownerTokenTbvArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_ownerTokenTbvsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_OwnerTokenTbv_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_OwnerTokenTbv_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_payoutTokenTbvArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_payoutTokenTbvsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_PayoutTokenTbv_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_PayoutTokenTbv_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_bondPurchaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_bondPurchasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_BondPurchase_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_BondPurchase_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_tokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_Token_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_Token_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_marketArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_marketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_Market_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_Market_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_pairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_pairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_Pair_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_Pair_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_balancerWeightedPoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_balancerWeightedPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_BalancerWeightedPool_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_BalancerWeightedPool_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_tuneArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_tunesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_Tune_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_Tune_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_purchaseCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_purchaseCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_PurchaseCount_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_PurchaseCount_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_marketOwnerCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_marketOwnerCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_MarketOwnerCount_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_MarketOwnerCount_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_payoutTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_payoutTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_PayoutToken_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_PayoutToken_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_quoteTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds_quoteTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_QuoteToken_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_QuoteToken_filter>;
  block?: InputMaybe<Bonds_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBonds__metaArgs = {
  block?: InputMaybe<Bonds_Block_height>;
};

/**
 * The Token entity tracks all payout and quote tokens, including LP pairs, Balancer Pools etc and their constituent tokens.
 *
 */
export type Bonds_Token = {
  /**
   * Unique ID for the Token entity, in the format:
   * [chainId]_[token address]
   *
   */
  id: Scalars['String'];
  /**
   * The network name, as used by Graph Protocol.
   * **NOTE** This may not be the same as the name as used by wallets.
   * As such, we use the chainId field to identify networks in our frontend.
   *
   */
  network: Scalars['String'];
  /**
   * The numeric chain ID on which the contracts are deployed.
   *
   */
  chainId: Scalars['BigInt'];
  /**
   * The address of the Token.
   *
   */
  address: Scalars['String'];
  /**
   * The number of decimals for the Token.
   *
   */
  decimals: Scalars['BigInt'];
  /**
   * The Token symbol.
   *
   */
  symbol: Scalars['String'];
  /**
   * The Token name.
   *
   */
  name: Scalars['String'];
  /**
   * The smart contract (as opposed to token) name - e.g. "ERC20", "SLP", "BalancerWeightedPool".
   *
   */
  typeName: Scalars['String'];
  /**
   * A reference to the Pair record, if the Token is a Uniswap-V2 (or compatible) LP token, null if it is not.
   *
   */
  lpPair?: Maybe<Bonds_Pair>;
  /**
   * A reference to the BalancerWeightedPool record, if the Token is a BalancerWeightedPool, or null if it is not.
   *
   */
  balancerWeightedPool?: Maybe<Bonds_BalancerWeightedPool>;
  /**
   * Whether the Token has been used as a Payout Token for any Markets
   *
   */
  usedAsPayout: Scalars['Boolean'];
  /**
   * Whether the Token has been used as a Quote Token for any Markets
   *
   */
  usedAsQuote: Scalars['Boolean'];
  /**
   * The amount of the this token paid out across the owner's markets.
   *
   */
  totalPayoutAmount: Scalars['Bonds_BigDecimal'];
  /**
   * The total number of times this Token has been purchased on this chain.
   *
   */
  purchaseCount: Scalars['BigInt'];
  /**
   * A list of PayoutTokenTbv for this Token.
   *
   */
  payoutTokenTbvs?: Maybe<Array<Bonds_PayoutTokenTbv>>;
  /**
   * The UniqueTokenBonderCount for this Token
   *
   */
  uniqueBonders?: Maybe<Bonds_UniqueTokenBonderCount>;
  /**
   * Markets for this Token
   *
   */
  markets?: Maybe<Array<Bonds_Market>>;
};


/**
 * The Token entity tracks all payout and quote tokens, including LP pairs, Balancer Pools etc and their constituent tokens.
 *
 */
export type Bonds_TokenpayoutTokenTbvsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_PayoutTokenTbv_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_PayoutTokenTbv_filter>;
};


/**
 * The Token entity tracks all payout and quote tokens, including LP pairs, Balancer Pools etc and their constituent tokens.
 *
 */
export type Bonds_TokenmarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bonds_Market_orderBy>;
  orderDirection?: InputMaybe<Bonds_OrderDirection>;
  where?: InputMaybe<Bonds_Market_filter>;
};

export type Bonds_Token_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  address?: InputMaybe<Scalars['String']>;
  address_not?: InputMaybe<Scalars['String']>;
  address_gt?: InputMaybe<Scalars['String']>;
  address_lt?: InputMaybe<Scalars['String']>;
  address_gte?: InputMaybe<Scalars['String']>;
  address_lte?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<Scalars['String']>>;
  address_not_in?: InputMaybe<Array<Scalars['String']>>;
  address_contains?: InputMaybe<Scalars['String']>;
  address_contains_nocase?: InputMaybe<Scalars['String']>;
  address_not_contains?: InputMaybe<Scalars['String']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']>;
  address_starts_with?: InputMaybe<Scalars['String']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']>;
  address_not_starts_with?: InputMaybe<Scalars['String']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  address_ends_with?: InputMaybe<Scalars['String']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address_not_ends_with?: InputMaybe<Scalars['String']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  typeName?: InputMaybe<Scalars['String']>;
  typeName_not?: InputMaybe<Scalars['String']>;
  typeName_gt?: InputMaybe<Scalars['String']>;
  typeName_lt?: InputMaybe<Scalars['String']>;
  typeName_gte?: InputMaybe<Scalars['String']>;
  typeName_lte?: InputMaybe<Scalars['String']>;
  typeName_in?: InputMaybe<Array<Scalars['String']>>;
  typeName_not_in?: InputMaybe<Array<Scalars['String']>>;
  typeName_contains?: InputMaybe<Scalars['String']>;
  typeName_contains_nocase?: InputMaybe<Scalars['String']>;
  typeName_not_contains?: InputMaybe<Scalars['String']>;
  typeName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  typeName_starts_with?: InputMaybe<Scalars['String']>;
  typeName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  typeName_not_starts_with?: InputMaybe<Scalars['String']>;
  typeName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  typeName_ends_with?: InputMaybe<Scalars['String']>;
  typeName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  typeName_not_ends_with?: InputMaybe<Scalars['String']>;
  typeName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lpPair?: InputMaybe<Scalars['String']>;
  lpPair_not?: InputMaybe<Scalars['String']>;
  lpPair_gt?: InputMaybe<Scalars['String']>;
  lpPair_lt?: InputMaybe<Scalars['String']>;
  lpPair_gte?: InputMaybe<Scalars['String']>;
  lpPair_lte?: InputMaybe<Scalars['String']>;
  lpPair_in?: InputMaybe<Array<Scalars['String']>>;
  lpPair_not_in?: InputMaybe<Array<Scalars['String']>>;
  lpPair_contains?: InputMaybe<Scalars['String']>;
  lpPair_contains_nocase?: InputMaybe<Scalars['String']>;
  lpPair_not_contains?: InputMaybe<Scalars['String']>;
  lpPair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lpPair_starts_with?: InputMaybe<Scalars['String']>;
  lpPair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lpPair_not_starts_with?: InputMaybe<Scalars['String']>;
  lpPair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lpPair_ends_with?: InputMaybe<Scalars['String']>;
  lpPair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lpPair_not_ends_with?: InputMaybe<Scalars['String']>;
  lpPair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lpPair_?: InputMaybe<Bonds_Pair_filter>;
  balancerWeightedPool?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_not?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_gt?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_lt?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_gte?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_lte?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_in?: InputMaybe<Array<Scalars['String']>>;
  balancerWeightedPool_not_in?: InputMaybe<Array<Scalars['String']>>;
  balancerWeightedPool_contains?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_contains_nocase?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_not_contains?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_starts_with?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_not_starts_with?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_ends_with?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_not_ends_with?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  balancerWeightedPool_?: InputMaybe<Bonds_BalancerWeightedPool_filter>;
  usedAsPayout?: InputMaybe<Scalars['Boolean']>;
  usedAsPayout_not?: InputMaybe<Scalars['Boolean']>;
  usedAsPayout_in?: InputMaybe<Array<Scalars['Boolean']>>;
  usedAsPayout_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  usedAsQuote?: InputMaybe<Scalars['Boolean']>;
  usedAsQuote_not?: InputMaybe<Scalars['Boolean']>;
  usedAsQuote_in?: InputMaybe<Array<Scalars['Boolean']>>;
  usedAsQuote_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  totalPayoutAmount?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalPayoutAmount_not?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalPayoutAmount_gt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalPayoutAmount_lt?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalPayoutAmount_gte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalPayoutAmount_lte?: InputMaybe<Scalars['Bonds_BigDecimal']>;
  totalPayoutAmount_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  totalPayoutAmount_not_in?: InputMaybe<Array<Scalars['Bonds_BigDecimal']>>;
  purchaseCount?: InputMaybe<Scalars['BigInt']>;
  purchaseCount_not?: InputMaybe<Scalars['BigInt']>;
  purchaseCount_gt?: InputMaybe<Scalars['BigInt']>;
  purchaseCount_lt?: InputMaybe<Scalars['BigInt']>;
  purchaseCount_gte?: InputMaybe<Scalars['BigInt']>;
  purchaseCount_lte?: InputMaybe<Scalars['BigInt']>;
  purchaseCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  purchaseCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  payoutTokenTbvs_?: InputMaybe<Bonds_PayoutTokenTbv_filter>;
  uniqueBonders_?: InputMaybe<Bonds_UniqueTokenBonderCount_filter>;
  markets_?: InputMaybe<Bonds_Market_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_Token_filter>>>;
};

export type Bonds_Token_orderBy =
  | 'id'
  | 'network'
  | 'chainId'
  | 'address'
  | 'decimals'
  | 'symbol'
  | 'name'
  | 'typeName'
  | 'lpPair'
  | 'lpPair__id'
  | 'balancerWeightedPool'
  | 'balancerWeightedPool__id'
  | 'balancerWeightedPool__vaultAddress'
  | 'balancerWeightedPool__poolId'
  | 'usedAsPayout'
  | 'usedAsQuote'
  | 'totalPayoutAmount'
  | 'purchaseCount'
  | 'payoutTokenTbvs'
  | 'uniqueBonders'
  | 'uniqueBonders__id'
  | 'uniqueBonders__count'
  | 'markets';

/**
 * The Tune entity tracks Market tuning events.
 *
 */
export type Bonds_Tune = {
  /**
   * The ID of the Market to which the event relates.
   *
   */
  id: Scalars['String'];
  /**
   * A reference to the related Market record.
   *
   */
  market: Bonds_Market;
  /**
   * The pre-tuning value of the control variable.
   *
   */
  oldControlVariable: Scalars['BigInt'];
  /**
   * The post-tuning value of the control variable.
   *
   */
  newControlVariable: Scalars['BigInt'];
  /**
   * The difference between the old and new control variables.
   * oldControlVariable - newControlVariable
   *
   */
  deltaTime: Scalars['BigInt'];
  /**
   * The timestamp at which the tuning event occurred.
   *
   */
  timestamp: Scalars['BigInt'];
};

export type Bonds_Tune_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_?: InputMaybe<Bonds_Market_filter>;
  oldControlVariable?: InputMaybe<Scalars['BigInt']>;
  oldControlVariable_not?: InputMaybe<Scalars['BigInt']>;
  oldControlVariable_gt?: InputMaybe<Scalars['BigInt']>;
  oldControlVariable_lt?: InputMaybe<Scalars['BigInt']>;
  oldControlVariable_gte?: InputMaybe<Scalars['BigInt']>;
  oldControlVariable_lte?: InputMaybe<Scalars['BigInt']>;
  oldControlVariable_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oldControlVariable_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newControlVariable?: InputMaybe<Scalars['BigInt']>;
  newControlVariable_not?: InputMaybe<Scalars['BigInt']>;
  newControlVariable_gt?: InputMaybe<Scalars['BigInt']>;
  newControlVariable_lt?: InputMaybe<Scalars['BigInt']>;
  newControlVariable_gte?: InputMaybe<Scalars['BigInt']>;
  newControlVariable_lte?: InputMaybe<Scalars['BigInt']>;
  newControlVariable_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newControlVariable_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaTime?: InputMaybe<Scalars['BigInt']>;
  deltaTime_not?: InputMaybe<Scalars['BigInt']>;
  deltaTime_gt?: InputMaybe<Scalars['BigInt']>;
  deltaTime_lt?: InputMaybe<Scalars['BigInt']>;
  deltaTime_gte?: InputMaybe<Scalars['BigInt']>;
  deltaTime_lte?: InputMaybe<Scalars['BigInt']>;
  deltaTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deltaTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_Tune_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_Tune_filter>>>;
};

export type Bonds_Tune_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__type'
  | 'market__network'
  | 'market__chainId'
  | 'market__auctioneer'
  | 'market__teller'
  | 'market__marketId'
  | 'market__owner'
  | 'market__vesting'
  | 'market__start'
  | 'market__conclusion'
  | 'market__vestingType'
  | 'market__isInstantSwap'
  | 'market__hasClosed'
  | 'market__totalBondedAmount'
  | 'market__totalPayoutAmount'
  | 'market__creationBlockTimestamp'
  | 'market__callbackAddress'
  | 'market__capacity'
  | 'market__capacityInQuote'
  | 'market__minPrice'
  | 'market__price'
  | 'market__scale'
  | 'market__averageBondPrice'
  | 'market__bondsIssued'
  | 'oldControlVariable'
  | 'newControlVariable'
  | 'deltaTime'
  | 'timestamp';

/**
 * A UniqueBonder record is created for each unique combination of chain, market owner, bond purchaser.
 *
 */
export type Bonds_UniqueBonder = {
  /**
   * Unique ID for the UniqueBonder entity, in the format:
   * [chainId]_[Market owner address]__[bond purchaser address]
   *
   */
  id: Scalars['String'];
};

/**
 * Workaround due to no simple entity count being available.
 *
 */
export type Bonds_UniqueBonderCount = {
  /**
   * There should be one UniqueBonderCount entry per market owner, with owner address as id.
   *
   */
  id: Scalars['String'];
  /**
   * The total number of unique bonders for this token on this chain.
   *
   */
  count: Scalars['BigInt'];
};

export type Bonds_UniqueBonderCount_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_UniqueBonderCount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_UniqueBonderCount_filter>>>;
};

export type Bonds_UniqueBonderCount_orderBy =
  | 'id'
  | 'count';

export type Bonds_UniqueBonder_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_UniqueBonder_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_UniqueBonder_filter>>>;
};

export type Bonds_UniqueBonder_orderBy =
  | 'id';

/**
 * A UniqueTokenBonder record is created for each unique combination of chain, payout token address, bond purchaser.
 *
 */
export type Bonds_UniqueTokenBonder = {
  /**
   * Unique ID for the UniqueTokenBonder entity, in the format:
   * [chainId]_[payout token address]__[bond purchaser address]
   *
   */
  id: Scalars['String'];
};

/**
 * Workaround due to no simple entity count being available.
 *
 */
export type Bonds_UniqueTokenBonderCount = {
  /**
   * There should be one UniqueTokenBonderCount entry per token, with token address as id.
   *
   */
  id: Scalars['String'];
  /**
   * The token for which bonders are being counted.
   *
   */
  token: Bonds_Token;
  /**
   * The total number of unique bonders for this token on this chain.
   *
   */
  count: Scalars['BigInt'];
};

export type Bonds_UniqueTokenBonderCount_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  token_?: InputMaybe<Bonds_Token_filter>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_UniqueTokenBonderCount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_UniqueTokenBonderCount_filter>>>;
};

export type Bonds_UniqueTokenBonderCount_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__network'
  | 'token__chainId'
  | 'token__address'
  | 'token__decimals'
  | 'token__symbol'
  | 'token__name'
  | 'token__typeName'
  | 'token__usedAsPayout'
  | 'token__usedAsQuote'
  | 'token__totalPayoutAmount'
  | 'token__purchaseCount'
  | 'count';

export type Bonds_UniqueTokenBonder_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Bonds_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bonds_UniqueTokenBonder_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bonds_UniqueTokenBonder_filter>>>;
};

export type Bonds_UniqueTokenBonder_orderBy =
  | 'id';

export type Bonds__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bonds_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bonds_Bytes']>;
};

/** The type for the top-level _meta field */
export type Bonds__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: Bonds__Block_;
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
  Bonds_ownerBalance: InContextSdkMethod<Query['Bonds_ownerBalance'], QueryBonds_ownerBalanceArgs, MeshContext>,
  /** null **/
  Bonds_ownerBalances: InContextSdkMethod<Query['Bonds_ownerBalances'], QueryBonds_ownerBalancesArgs, MeshContext>,
  /** null **/
  Bonds_uniqueBonder: InContextSdkMethod<Query['Bonds_uniqueBonder'], QueryBonds_uniqueBonderArgs, MeshContext>,
  /** null **/
  Bonds_uniqueBonders: InContextSdkMethod<Query['Bonds_uniqueBonders'], QueryBonds_uniqueBondersArgs, MeshContext>,
  /** null **/
  Bonds_uniqueBonderCount: InContextSdkMethod<Query['Bonds_uniqueBonderCount'], QueryBonds_uniqueBonderCountArgs, MeshContext>,
  /** null **/
  Bonds_uniqueBonderCounts: InContextSdkMethod<Query['Bonds_uniqueBonderCounts'], QueryBonds_uniqueBonderCountsArgs, MeshContext>,
  /** null **/
  Bonds_uniqueTokenBonder: InContextSdkMethod<Query['Bonds_uniqueTokenBonder'], QueryBonds_uniqueTokenBonderArgs, MeshContext>,
  /** null **/
  Bonds_uniqueTokenBonders: InContextSdkMethod<Query['Bonds_uniqueTokenBonders'], QueryBonds_uniqueTokenBondersArgs, MeshContext>,
  /** null **/
  Bonds_uniqueTokenBonderCount: InContextSdkMethod<Query['Bonds_uniqueTokenBonderCount'], QueryBonds_uniqueTokenBonderCountArgs, MeshContext>,
  /** null **/
  Bonds_uniqueTokenBonderCounts: InContextSdkMethod<Query['Bonds_uniqueTokenBonderCounts'], QueryBonds_uniqueTokenBonderCountsArgs, MeshContext>,
  /** null **/
  Bonds_bondToken: InContextSdkMethod<Query['Bonds_bondToken'], QueryBonds_bondTokenArgs, MeshContext>,
  /** null **/
  Bonds_bondTokens: InContextSdkMethod<Query['Bonds_bondTokens'], QueryBonds_bondTokensArgs, MeshContext>,
  /** null **/
  Bonds_ownerTokenTbv: InContextSdkMethod<Query['Bonds_ownerTokenTbv'], QueryBonds_ownerTokenTbvArgs, MeshContext>,
  /** null **/
  Bonds_ownerTokenTbvs: InContextSdkMethod<Query['Bonds_ownerTokenTbvs'], QueryBonds_ownerTokenTbvsArgs, MeshContext>,
  /** null **/
  Bonds_payoutTokenTbv: InContextSdkMethod<Query['Bonds_payoutTokenTbv'], QueryBonds_payoutTokenTbvArgs, MeshContext>,
  /** null **/
  Bonds_payoutTokenTbvs: InContextSdkMethod<Query['Bonds_payoutTokenTbvs'], QueryBonds_payoutTokenTbvsArgs, MeshContext>,
  /** null **/
  Bonds_bondPurchase: InContextSdkMethod<Query['Bonds_bondPurchase'], QueryBonds_bondPurchaseArgs, MeshContext>,
  /** null **/
  Bonds_bondPurchases: InContextSdkMethod<Query['Bonds_bondPurchases'], QueryBonds_bondPurchasesArgs, MeshContext>,
  /** null **/
  Bonds_token: InContextSdkMethod<Query['Bonds_token'], QueryBonds_tokenArgs, MeshContext>,
  /** null **/
  Bonds_tokens: InContextSdkMethod<Query['Bonds_tokens'], QueryBonds_tokensArgs, MeshContext>,
  /** null **/
  Bonds_market: InContextSdkMethod<Query['Bonds_market'], QueryBonds_marketArgs, MeshContext>,
  /** null **/
  Bonds_markets: InContextSdkMethod<Query['Bonds_markets'], QueryBonds_marketsArgs, MeshContext>,
  /** null **/
  Bonds_pair: InContextSdkMethod<Query['Bonds_pair'], QueryBonds_pairArgs, MeshContext>,
  /** null **/
  Bonds_pairs: InContextSdkMethod<Query['Bonds_pairs'], QueryBonds_pairsArgs, MeshContext>,
  /** null **/
  Bonds_balancerWeightedPool: InContextSdkMethod<Query['Bonds_balancerWeightedPool'], QueryBonds_balancerWeightedPoolArgs, MeshContext>,
  /** null **/
  Bonds_balancerWeightedPools: InContextSdkMethod<Query['Bonds_balancerWeightedPools'], QueryBonds_balancerWeightedPoolsArgs, MeshContext>,
  /** null **/
  Bonds_tune: InContextSdkMethod<Query['Bonds_tune'], QueryBonds_tuneArgs, MeshContext>,
  /** null **/
  Bonds_tunes: InContextSdkMethod<Query['Bonds_tunes'], QueryBonds_tunesArgs, MeshContext>,
  /** null **/
  Bonds_purchaseCount: InContextSdkMethod<Query['Bonds_purchaseCount'], QueryBonds_purchaseCountArgs, MeshContext>,
  /** null **/
  Bonds_purchaseCounts: InContextSdkMethod<Query['Bonds_purchaseCounts'], QueryBonds_purchaseCountsArgs, MeshContext>,
  /** null **/
  Bonds_marketOwnerCount: InContextSdkMethod<Query['Bonds_marketOwnerCount'], QueryBonds_marketOwnerCountArgs, MeshContext>,
  /** null **/
  Bonds_marketOwnerCounts: InContextSdkMethod<Query['Bonds_marketOwnerCounts'], QueryBonds_marketOwnerCountsArgs, MeshContext>,
  /** null **/
  Bonds_payoutToken: InContextSdkMethod<Query['Bonds_payoutToken'], QueryBonds_payoutTokenArgs, MeshContext>,
  /** null **/
  Bonds_payoutTokens: InContextSdkMethod<Query['Bonds_payoutTokens'], QueryBonds_payoutTokensArgs, MeshContext>,
  /** null **/
  Bonds_quoteToken: InContextSdkMethod<Query['Bonds_quoteToken'], QueryBonds_quoteTokenArgs, MeshContext>,
  /** null **/
  Bonds_quoteTokens: InContextSdkMethod<Query['Bonds_quoteTokens'], QueryBonds_quoteTokensArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Bonds__meta: InContextSdkMethod<Query['Bonds__meta'], QueryBonds__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  Bonds_ownerBalance: InContextSdkMethod<Subscription['Bonds_ownerBalance'], SubscriptionBonds_ownerBalanceArgs, MeshContext>,
  /** null **/
  Bonds_ownerBalances: InContextSdkMethod<Subscription['Bonds_ownerBalances'], SubscriptionBonds_ownerBalancesArgs, MeshContext>,
  /** null **/
  Bonds_uniqueBonder: InContextSdkMethod<Subscription['Bonds_uniqueBonder'], SubscriptionBonds_uniqueBonderArgs, MeshContext>,
  /** null **/
  Bonds_uniqueBonders: InContextSdkMethod<Subscription['Bonds_uniqueBonders'], SubscriptionBonds_uniqueBondersArgs, MeshContext>,
  /** null **/
  Bonds_uniqueBonderCount: InContextSdkMethod<Subscription['Bonds_uniqueBonderCount'], SubscriptionBonds_uniqueBonderCountArgs, MeshContext>,
  /** null **/
  Bonds_uniqueBonderCounts: InContextSdkMethod<Subscription['Bonds_uniqueBonderCounts'], SubscriptionBonds_uniqueBonderCountsArgs, MeshContext>,
  /** null **/
  Bonds_uniqueTokenBonder: InContextSdkMethod<Subscription['Bonds_uniqueTokenBonder'], SubscriptionBonds_uniqueTokenBonderArgs, MeshContext>,
  /** null **/
  Bonds_uniqueTokenBonders: InContextSdkMethod<Subscription['Bonds_uniqueTokenBonders'], SubscriptionBonds_uniqueTokenBondersArgs, MeshContext>,
  /** null **/
  Bonds_uniqueTokenBonderCount: InContextSdkMethod<Subscription['Bonds_uniqueTokenBonderCount'], SubscriptionBonds_uniqueTokenBonderCountArgs, MeshContext>,
  /** null **/
  Bonds_uniqueTokenBonderCounts: InContextSdkMethod<Subscription['Bonds_uniqueTokenBonderCounts'], SubscriptionBonds_uniqueTokenBonderCountsArgs, MeshContext>,
  /** null **/
  Bonds_bondToken: InContextSdkMethod<Subscription['Bonds_bondToken'], SubscriptionBonds_bondTokenArgs, MeshContext>,
  /** null **/
  Bonds_bondTokens: InContextSdkMethod<Subscription['Bonds_bondTokens'], SubscriptionBonds_bondTokensArgs, MeshContext>,
  /** null **/
  Bonds_ownerTokenTbv: InContextSdkMethod<Subscription['Bonds_ownerTokenTbv'], SubscriptionBonds_ownerTokenTbvArgs, MeshContext>,
  /** null **/
  Bonds_ownerTokenTbvs: InContextSdkMethod<Subscription['Bonds_ownerTokenTbvs'], SubscriptionBonds_ownerTokenTbvsArgs, MeshContext>,
  /** null **/
  Bonds_payoutTokenTbv: InContextSdkMethod<Subscription['Bonds_payoutTokenTbv'], SubscriptionBonds_payoutTokenTbvArgs, MeshContext>,
  /** null **/
  Bonds_payoutTokenTbvs: InContextSdkMethod<Subscription['Bonds_payoutTokenTbvs'], SubscriptionBonds_payoutTokenTbvsArgs, MeshContext>,
  /** null **/
  Bonds_bondPurchase: InContextSdkMethod<Subscription['Bonds_bondPurchase'], SubscriptionBonds_bondPurchaseArgs, MeshContext>,
  /** null **/
  Bonds_bondPurchases: InContextSdkMethod<Subscription['Bonds_bondPurchases'], SubscriptionBonds_bondPurchasesArgs, MeshContext>,
  /** null **/
  Bonds_token: InContextSdkMethod<Subscription['Bonds_token'], SubscriptionBonds_tokenArgs, MeshContext>,
  /** null **/
  Bonds_tokens: InContextSdkMethod<Subscription['Bonds_tokens'], SubscriptionBonds_tokensArgs, MeshContext>,
  /** null **/
  Bonds_market: InContextSdkMethod<Subscription['Bonds_market'], SubscriptionBonds_marketArgs, MeshContext>,
  /** null **/
  Bonds_markets: InContextSdkMethod<Subscription['Bonds_markets'], SubscriptionBonds_marketsArgs, MeshContext>,
  /** null **/
  Bonds_pair: InContextSdkMethod<Subscription['Bonds_pair'], SubscriptionBonds_pairArgs, MeshContext>,
  /** null **/
  Bonds_pairs: InContextSdkMethod<Subscription['Bonds_pairs'], SubscriptionBonds_pairsArgs, MeshContext>,
  /** null **/
  Bonds_balancerWeightedPool: InContextSdkMethod<Subscription['Bonds_balancerWeightedPool'], SubscriptionBonds_balancerWeightedPoolArgs, MeshContext>,
  /** null **/
  Bonds_balancerWeightedPools: InContextSdkMethod<Subscription['Bonds_balancerWeightedPools'], SubscriptionBonds_balancerWeightedPoolsArgs, MeshContext>,
  /** null **/
  Bonds_tune: InContextSdkMethod<Subscription['Bonds_tune'], SubscriptionBonds_tuneArgs, MeshContext>,
  /** null **/
  Bonds_tunes: InContextSdkMethod<Subscription['Bonds_tunes'], SubscriptionBonds_tunesArgs, MeshContext>,
  /** null **/
  Bonds_purchaseCount: InContextSdkMethod<Subscription['Bonds_purchaseCount'], SubscriptionBonds_purchaseCountArgs, MeshContext>,
  /** null **/
  Bonds_purchaseCounts: InContextSdkMethod<Subscription['Bonds_purchaseCounts'], SubscriptionBonds_purchaseCountsArgs, MeshContext>,
  /** null **/
  Bonds_marketOwnerCount: InContextSdkMethod<Subscription['Bonds_marketOwnerCount'], SubscriptionBonds_marketOwnerCountArgs, MeshContext>,
  /** null **/
  Bonds_marketOwnerCounts: InContextSdkMethod<Subscription['Bonds_marketOwnerCounts'], SubscriptionBonds_marketOwnerCountsArgs, MeshContext>,
  /** null **/
  Bonds_payoutToken: InContextSdkMethod<Subscription['Bonds_payoutToken'], SubscriptionBonds_payoutTokenArgs, MeshContext>,
  /** null **/
  Bonds_payoutTokens: InContextSdkMethod<Subscription['Bonds_payoutTokens'], SubscriptionBonds_payoutTokensArgs, MeshContext>,
  /** null **/
  Bonds_quoteToken: InContextSdkMethod<Subscription['Bonds_quoteToken'], SubscriptionBonds_quoteTokenArgs, MeshContext>,
  /** null **/
  Bonds_quoteTokens: InContextSdkMethod<Subscription['Bonds_quoteTokens'], SubscriptionBonds_quoteTokensArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Bonds__meta: InContextSdkMethod<Subscription['Bonds__meta'], SubscriptionBonds__metaArgs, MeshContext>
  };

  export type Context = {
      ["Bonds"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      ["url"]: Scalars['ID']
    };
}
