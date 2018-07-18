import Request from './request';
import { setGET } from './methods';
import setPath from './path';

export default {

  getClients: () => Request(
    setGET,
    setPath(`/longview/clients`),
  ),

  getClient: (clientId: number) => Request(
    setGET,
    setPath(`/longview/clients/${clientId}`),
  ),

  getSubscriptions: () => Request(
    setGET,
    setPath(`/longview/subscriptions`),
  ),

  getSubscription: (subscriptionId: number) => Request(
    setGET,
    setPath(`/longview/subscriptions/${subscriptionId}`),
  ),
};
