import invariant from 'invariant';
import { Lens, compose, lensPath, over, set, view } from 'ramda';

import TypesRequest from './Types';

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


