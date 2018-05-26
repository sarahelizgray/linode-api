import invariant from 'invariant';
import { Lens, compose, lensPath, over, set } from 'ramda';

const request = (...args: any[]) => Promise.resolve();

export interface RequestConfig {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: any;
  params?: any,
  data?: any,
}

const ConfigLenses = {
  url: lensPath(['url']),
  method: lensPath(['method']),
  headers: lensPath(['headers']),
  params: lensPath(['params']),
  data: lensPath(['data']),
};

const HeaderLenses = {
  authorization: compose(ConfigLenses.headers, lensPath(['authorization'])) as Lens,
}

export default class Request {
  public config: RequestConfig;
  private _path: string;
  private _token: string;

  constructor(url: string, token: string) {
    this.setURL(url)
    this.setAuthorizationHeader(`Bearer ${token}`);
  }

  get = () => {
    this.setMethod('GET');

    return request(this.config);
  }

  private set = (lens: Lens) => (value: any) => {
    this.config = set(lens, value, this.config);
  };

  private over = <T>(lens: Lens) => (fn: (c: T) => T) => {
    this.config = over(lens, fn, this.config);
  }

  private setMethod = this.set(ConfigLenses.method);

  private setAuthorizationHeader = this.set(HeaderLenses.authorization);

  private setURL = this.set(ConfigLenses.url);

  private updateParams = this.over(ConfigLenses.params);
}
