/*export interface MaptilerGeocoderParameters {
  key: string | undefined;
  language?: string | Array<string>;
  proximity?: Array<number>;
  bbox?: Array<number>;
}*/

export interface MaptilerGeocoderParameters {
  key: string | undefined;
  language?: string | Array<string>;
  proximity?: GeoJSON.Position;
  bbox?: GeoJSON.BBox;
}

export interface MaptilerGeocoderQuery {
  query: string;
}

export interface MaptilerGeocoderResponse {
  format: string;
}
