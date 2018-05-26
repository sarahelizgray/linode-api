import {
  compose,
  lensPath,
  over,
  set,
  view,

  /** Types */
  Lens,
} from 'ramda';
import invariant from 'invariant';
import { request } from './request';

interface RequestConfig {
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

export default class LinodeAPIWrapper {
  token: string;
  path: string;

  constructor(
    token: string,
    path: string = 'https://api.linode.com/v4',
  ) {
    invariant(token, 'An API token is required to use the LinodeAPIWrapper.');
    this.token = token;
    this.path = path;
  }

  get types() {
    return new TypesRequest(this.token, this.path);
  }
}

class Request {
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

  private view = (lens: Lens) => {
    this.config = view(lens, this.config);
  };

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

function Filtered<T extends { new(...args: any[]): any }>(constructor: T) {
  return constructor;
}

function Paginated<T extends { new(...args: any[]): any }>(constructor: T) {
  return class extends constructor {
    private _page: number;
    private _pageSize: number;

    page = (page: number) => {

      this.updateParams(p => ({ ...p, page }))
      return this;
    }

    pageSize = (page_size: number) => {
      this.updateParams(p => ({ ...p, page_size }))
      return this;
    };
  }
}

@Paginated
export class TypesRequest extends Request {
  page: (v: number) => this;
  pageSize: (v: number) => this;

  constructor(token, path) {
    super(`${path}/types`, token);
  }
}
