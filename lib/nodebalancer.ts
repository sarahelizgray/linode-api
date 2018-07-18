import Request from './request';
import { setGET } from './methods';
import setPath from './path';

export default {
  getNodeBalancers: () => Request(
    setGET,
    setPath(`/nodebalancers`),
  ),
  getNodeBalancer: (nodeBalancerId: number) => Request(
    setGET,
    setPath(`/nodebalancers/${nodeBalancerId}`),
  ),

  getNodeBalancerStats: (nodeBalancerId: number) => Request(
    setGET,
    setPath(`/nodebalancers/${nodeBalancerId}/stats`),
  ),

  getNodeBalancerConfigs: (nodeBalancerId: number) => Request(
    setGET,
    setPath(`/nodebalancers/${nodeBalancerId}/configs`),
  ),

  getNodeBalancerConfig: (nodeBalancerId: number, configId: number) => Request(
    setGET,
    setPath(`/nodebalancers/${nodeBalancerId}/configs/${configId}`),
  ),

  getNodeBalancerConfigNodes: (nodeBalancerId: number, configId: number) => Request(
    setGET,
    setPath(`/nodebalancers/${nodeBalancerId}/configs/${configId}/nodes`),
  ),

  getNodeBalancerConfigNode: (nodeBalancerId: number, configId: number, nodeId: number) => Request(
    setGET,
    setPath(`/nodebalancers/${nodeBalancerId}/configs/${configId}/nodes/${nodeId}`),
  ),
};
