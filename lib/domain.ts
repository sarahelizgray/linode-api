import Request from './request';
import { setGET } from './methods';
import setPath from './path';

export default {
  getDomains: () => Request(
    setGET,
    setPath(`/domains`),
  ),

  getDomain: (domainId: number) => Request(
    setGET,
    setPath(`/domains/${domainId}`),
  ),

  getDomainRecords: (domainId: number) => Request(
    setGET,
    setPath(`/domains/${domainId}/records`),
  ),

  getDomainRecord: (domainId: number, recordId: number) => Request(
    setGET,
    setPath(`/domains/${domainId}/records/${recordId}`),
  ),
};
