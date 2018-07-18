import Request from './request';
import { setGET } from './methods';
import setPath from './path';

export default {
  getIPAddresses: () => Request(
    setGET,
    setPath(`/networking/ips`),
  ),

  getIPAddress: (address: string) => Request(
    setGET,
    setPath(`/networking/ips/address/${address}`),
  ),

  getIPv6Pools: () => Request(
    setGET,
    setPath(`/networking/ipv6/pools`),
  ),

  getIPv6Ranges: () => Request(
    setGET,
    setPath(`/networking/ipv6/ranges`),
  )
};
