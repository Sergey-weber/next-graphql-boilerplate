import gql from "graphql-tag";

export const getStations = gql`
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

export const getStationByID = gql`
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
