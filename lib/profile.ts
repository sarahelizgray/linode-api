import Request from './request';
import { setGET } from './methods';
import setPath from './path';

export default {
  getProfile: () => Request(
    setGET,
    setPath(`/profile`),
  ),

  getAuthorizedApps: () => Request(
    setGET,
    setPath(`/profile/apps`),
  ),

  getAuthorizedApp: (appId: number) => Request(
    setGET,
    setPath(`/profile/apps/${appId}`),
  ),

  getGrants: () => Request(
    setGET,
    setPath(`/profile/grants`),
  ),

  getTrustedComputers: () => Request(
    setGET,
    setPath(`/profile/tfa-trusted-computers`),
  ),

  getTrustedComputer: (trustedComputerId: number) => Request(
    setGET,
    setPath(`/profile/tfa-trusted-computers/${trustedComputerId}`),
  ),

  getPersonalAccessTokens: () => Request(
    setGET,
    setPath(`/profile/tokens`),
  ),

  getPersonalAccessToken: (personalAccessTokenId: number) => Request(
    setGET,
    setPath(`/profile/tokens/${personalAccessTokenId}`),
  ),
};
