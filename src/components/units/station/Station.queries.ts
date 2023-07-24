import { gql } from "@apollo/client";

export const FETCH_BIKE_STATIONS = gql`
  query {
    allStations {
      stationName
      stationLongitude
      stationLatitude
      stationId
      shared
      rackTotCnt
      parkingBikeTotCnt
    }
  }
`;
