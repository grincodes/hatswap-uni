// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace GraphNodeTypes {
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
  BigInt: any;
  Bytes: any;
  Date: any;
  JSONObject: any;
};

export type ApiVersion = {
  /**
   * Version number in SemVer format
   *
   */
  version: Scalars['String'];
};

export type Block = {
  hash: Scalars['Bytes'];
  number: Scalars['BigInt'];
};

export type BlockInput = {
  hash: Scalars['Bytes'];
  number: Scalars['BigInt'];
};

export type CachedEthereumCall = {
  idHash: Scalars['Bytes'];
  block: Block;
  contractAddress: Scalars['Bytes'];
  returnValue: Scalars['Bytes'];
};

export type ChainIndexingStatus = {
  network: Scalars['String'];
  chainHeadBlock?: Maybe<Block>;
  earliestBlock?: Maybe<EarliestBlock>;
  latestBlock?: Maybe<Block>;
  lastHealthyBlock?: Maybe<Block>;
};

export type EarliestBlock = {
  hash: Scalars['Bytes'];
  number: Scalars['BigInt'];
};

export type EntityChanges = {
  updates: Array<EntityTypeUpdates>;
  deletions: Array<EntityTypeDeletions>;
};

export type EntityTypeDeletions = {
  type: Scalars['String'];
  entities: Array<Scalars['ID']>;
};

export type EntityTypeUpdates = {
  type: Scalars['String'];
  entities: Array<Scalars['JSONObject']>;
};

export type EthereumIndexingStatus = ChainIndexingStatus & {
  network: Scalars['String'];
  chainHeadBlock?: Maybe<Block>;
  earliestBlock?: Maybe<EarliestBlock>;
  latestBlock?: Maybe<Block>;
  lastHealthyBlock?: Maybe<Block>;
};

export type Feature =
  | 'nonFatalErrors'
  | 'grafting'
  | 'fullTextSearch'
  | 'ipfsOnEthereumContracts';

export type Health =
  /** Subgraph syncing normally */
  | 'healthy'
  /** Subgraph syncing but with errors */
  | 'unhealthy'
  /** Subgraph halted due to errors */
  | 'failed';

export type PartialBlock = {
  hash?: Maybe<Scalars['Bytes']>;
  number: Scalars['BigInt'];
};

export type ProofOfIndexingRequest = {
  deployment: Scalars['String'];
  block: BlockInput;
};

export type ProofOfIndexingResult = {
  deployment: Scalars['String'];
  block: Block;
  /** There may not be a proof of indexing available for the deployment and block */
  proofOfIndexing?: Maybe<Scalars['Bytes']>;
};

export type PublicProofOfIndexingRequest = {
  deployment: Scalars['String'];
  blockNumber: Scalars['BigInt'];
};

export type PublicProofOfIndexingResult = {
  deployment: Scalars['String'];
  block: PartialBlock;
  proofOfIndexing: Scalars['Bytes'];
};

export type Query = {
  indexingStatusForCurrentVersion?: Maybe<SubgraphIndexingStatus>;
  indexingStatusForPendingVersion?: Maybe<SubgraphIndexingStatus>;
  indexingStatusesForSubgraphName: Array<SubgraphIndexingStatus>;
  indexingStatuses: Array<SubgraphIndexingStatus>;
  proofOfIndexing?: Maybe<Scalars['Bytes']>;
  /**
   * Proofs of indexing for several deployments and blocks that can be shared and
   * compared in public without revealing the _actual_ proof of indexing that every
   * indexer has in their database
   *
   */
  publicProofsOfIndexing: Array<PublicProofOfIndexingResult>;
  subgraphFeatures: SubgraphFeatures;
  entityChangesInBlock: EntityChanges;
  blockData?: Maybe<Scalars['JSONObject']>;
  blockHashFromNumber?: Maybe<Scalars['Bytes']>;
  version: Version;
  cachedEthereumCalls?: Maybe<Array<CachedEthereumCall>>;
  apiVersions: Array<ApiVersion>;
};


export type QueryindexingStatusForCurrentVersionArgs = {
  subgraphName: Scalars['String'];
};


export type QueryindexingStatusForPendingVersionArgs = {
  subgraphName: Scalars['String'];
};


export type QueryindexingStatusesForSubgraphNameArgs = {
  subgraphName: Scalars['String'];
};


export type QueryindexingStatusesArgs = {
  subgraphs?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryproofOfIndexingArgs = {
  subgraph: Scalars['String'];
  blockNumber: Scalars['Int'];
  blockHash: Scalars['Bytes'];
  indexer?: InputMaybe<Scalars['Bytes']>;
};


export type QuerypublicProofsOfIndexingArgs = {
  requests: Array<PublicProofOfIndexingRequest>;
};


export type QuerysubgraphFeaturesArgs = {
  subgraphId: Scalars['String'];
};


export type QueryentityChangesInBlockArgs = {
  subgraphId: Scalars['String'];
  blockNumber: Scalars['Int'];
};


export type QueryblockDataArgs = {
  network: Scalars['String'];
  blockHash: Scalars['Bytes'];
};


export type QueryblockHashFromNumberArgs = {
  network: Scalars['String'];
  blockNumber: Scalars['Int'];
};


export type QuerycachedEthereumCallsArgs = {
  network: Scalars['String'];
  blockHash: Scalars['Bytes'];
};


export type QueryapiVersionsArgs = {
  subgraphId: Scalars['String'];
};

export type SubgraphError = {
  message: Scalars['String'];
  block?: Maybe<Block>;
  handler?: Maybe<Scalars['String']>;
  deterministic: Scalars['Boolean'];
};

export type SubgraphFeatures = {
  apiVersion?: Maybe<Scalars['String']>;
  specVersion: Scalars['String'];
  features: Array<Feature>;
  dataSources: Array<Scalars['String']>;
  handlers: Array<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
};

export type SubgraphIndexingStatus = {
  subgraph: Scalars['String'];
  synced: Scalars['Boolean'];
  health: Health;
  /** If the subgraph has failed, this is the error caused it */
  fatalError?: Maybe<SubgraphError>;
  /** Sorted from first to last, limited to first 1000 */
  nonFatalErrors: Array<SubgraphError>;
  chains: Array<ChainIndexingStatus>;
  entityCount: Scalars['BigInt'];
  node?: Maybe<Scalars['String']>;
  paused: Scalars['Boolean'];
  historyBlocks: Scalars['Int'];
};

export type Version = {
  version: Scalars['String'];
  commit: Scalars['String'];
};

  export type QuerySdk = {
      /** null **/
  indexingStatusForCurrentVersion: InContextSdkMethod<Query['indexingStatusForCurrentVersion'], QueryindexingStatusForCurrentVersionArgs, MeshContext>,
  /** null **/
  indexingStatusForPendingVersion: InContextSdkMethod<Query['indexingStatusForPendingVersion'], QueryindexingStatusForPendingVersionArgs, MeshContext>,
  /** null **/
  indexingStatusesForSubgraphName: InContextSdkMethod<Query['indexingStatusesForSubgraphName'], QueryindexingStatusesForSubgraphNameArgs, MeshContext>,
  /** null **/
  indexingStatuses: InContextSdkMethod<Query['indexingStatuses'], QueryindexingStatusesArgs, MeshContext>,
  /** null **/
  proofOfIndexing: InContextSdkMethod<Query['proofOfIndexing'], QueryproofOfIndexingArgs, MeshContext>,
  /** Proofs of indexing for several deployments and blocks that can be shared and
compared in public without revealing the _actual_ proof of indexing that every
indexer has in their database
 **/
  publicProofsOfIndexing: InContextSdkMethod<Query['publicProofsOfIndexing'], QuerypublicProofsOfIndexingArgs, MeshContext>,
  /** null **/
  subgraphFeatures: InContextSdkMethod<Query['subgraphFeatures'], QuerysubgraphFeaturesArgs, MeshContext>,
  /** null **/
  entityChangesInBlock: InContextSdkMethod<Query['entityChangesInBlock'], QueryentityChangesInBlockArgs, MeshContext>,
  /** null **/
  blockData: InContextSdkMethod<Query['blockData'], QueryblockDataArgs, MeshContext>,
  /** null **/
  blockHashFromNumber: InContextSdkMethod<Query['blockHashFromNumber'], QueryblockHashFromNumberArgs, MeshContext>,
  /** null **/
  version: InContextSdkMethod<Query['version'], {}, MeshContext>,
  /** null **/
  cachedEthereumCalls: InContextSdkMethod<Query['cachedEthereumCalls'], QuerycachedEthereumCallsArgs, MeshContext>,
  /** null **/
  apiVersions: InContextSdkMethod<Query['apiVersions'], QueryapiVersionsArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["GraphNode"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      ["node"]: Scalars['ID']
    };
}
