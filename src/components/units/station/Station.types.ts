export type allStations = {
  allStations: Station[];
};

export type Station = {
  rackTotCnt: string;
  stationName: string;
  parkingBikeTotCnt: string;
  shared: string;
  stationLatitude: string;
  stationLongitude: string;
  stationId: string;
};
