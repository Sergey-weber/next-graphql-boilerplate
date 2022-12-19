// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  stations: Array<Station>;
  station: Station;
};


export type QueryStationArgs = {
  id: Scalars['Float'];
};

export type Station = {
  __typename?: 'Station';
  id: Scalars['Int'];
  name: Scalars['String'];
  metrics: StationMetric;
};

export type StationMetric = {
  __typename?: 'StationMetric';
  volume: Scalars['Int'];
  margin: Scalars['Float'];
  profit: Scalars['Int'];
};

export type GetStationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStationsQuery = (
  { __typename?: 'Query' }
  & { stations: Array<(
    { __typename?: 'Station' }
    & Pick<Station, 'id' | 'name'>
    & { metrics: (
      { __typename?: 'StationMetric' }
      & Pick<StationMetric, 'volume' | 'margin' | 'profit'>
    ) }
  )> }
);

export type GetStationByIdQueryVariables = Exact<{
  stationID: Scalars['Float'];
}>;


export type GetStationByIdQuery = (
  { __typename?: 'Query' }
  & { station: (
    { __typename?: 'Station' }
    & Pick<Station, 'id' | 'name'>
    & { metrics: (
      { __typename?: 'StationMetric' }
      & Pick<StationMetric, 'volume' | 'margin' | 'profit'>
    ) }
  ) }
);


export const GetStationsDocument = gql`
    query getStations {
  stations {
    id
    name
    metrics {
      volume
      margin
      profit
    }
  }
}
    `;

/**
 * __useGetStationsQuery__
 *
 * To run a query within a React component, call `useGetStationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStationsQuery(baseOptions?: Apollo.QueryHookOptions<GetStationsQuery, GetStationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStationsQuery, GetStationsQueryVariables>(GetStationsDocument, options);
      }
export function useGetStationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStationsQuery, GetStationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStationsQuery, GetStationsQueryVariables>(GetStationsDocument, options);
        }
export type GetStationsQueryHookResult = ReturnType<typeof useGetStationsQuery>;
export type GetStationsLazyQueryHookResult = ReturnType<typeof useGetStationsLazyQuery>;
export type GetStationsQueryResult = Apollo.QueryResult<GetStationsQuery, GetStationsQueryVariables>;
export const GetStationByIdDocument = gql`
    query getStationByID($stationID: Float!) {
  station(id: $stationID) {
    id
    name
    metrics {
      volume
      margin
      profit
    }
  }
}
    `;

/**
 * __useGetStationByIdQuery__
 *
 * To run a query within a React component, call `useGetStationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStationByIdQuery({
 *   variables: {
 *      stationID: // value for 'stationID'
 *   },
 * });
 */
export function useGetStationByIdQuery(baseOptions: Apollo.QueryHookOptions<GetStationByIdQuery, GetStationByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStationByIdQuery, GetStationByIdQueryVariables>(GetStationByIdDocument, options);
      }
export function useGetStationByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStationByIdQuery, GetStationByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStationByIdQuery, GetStationByIdQueryVariables>(GetStationByIdDocument, options);
        }
export type GetStationByIdQueryHookResult = ReturnType<typeof useGetStationByIdQuery>;
export type GetStationByIdLazyQueryHookResult = ReturnType<typeof useGetStationByIdLazyQuery>;
export type GetStationByIdQueryResult = Apollo.QueryResult<GetStationByIdQuery, GetStationByIdQueryVariables>;