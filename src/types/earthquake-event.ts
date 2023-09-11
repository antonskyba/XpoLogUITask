export interface EarthquakeEvent {
  properties: {
    mag: number;
    url: string;
    type: string;
    time: number;
    title: string;
  };
}
