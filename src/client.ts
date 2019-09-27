import * as request from 'request'
import * as http from 'http'
import { MaptilerGeocoderParameters } from './typings'

export default class MaptilerGeocoderClientFactory {
  private client: request.RequestAPI<request.Request, request.CoreOptions, request.RequiredUriUrl>;
  private parameters: MaptilerGeocoderParameters;

  /**
   * @param {RequestAPI} Client
   * @param {MaptilerGeocoderParameters} Options
   */
  constructor(
    Client: request.RequestAPI<request.Request, request.CoreOptions, request.RequiredUriUrl>,
    Parameters: MaptilerGeocoderParameters) {
    this.client = Client
    this.parameters = Parameters
  }

  public getClient() {
    return this.client
  }

  public getParameters() {
    return this.parameters
  }

  public async queue(queries: Array<string>): Promise<request.Request[]> {
    return Promise.all(queries.map((query: string) => {
      return this.query(query)
    }))
  }

  public async query(query: string): Promise<request.Request> {
    return this.client.get(`/geocoding/${encodeURIComponent(query)}.json`, {
      qs: this.parameters
    })
  }

}
