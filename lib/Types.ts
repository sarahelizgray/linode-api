import paginated  from './paginated';
import Request from './Request';

@paginated
export default class TypesRequest extends Request {
  page: (v: number) => this;
  pageSize: (v: number) => this;

  constructor(token, path) {
    super(`${path}/types`, token);
  }
}
