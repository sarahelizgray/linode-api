import Request from './request';
import { setGET } from './methods';
import setPath from './path';

export default {
  getManagedContacts: () => Request(
    setGET,
    setPath(`/managed/contacts`),
  ),

  getManagedContact: (contactId: number) => Request(
    setGET,
    setPath(`/managed/contacts/${contactId}`),
  ),

  getManagedCredentials: () => Request(
    setGET,
    setPath(`/managed/credentials`),
  ),

  getManagedCredential: (credentialId: number) => Request(
    setGET,
    setPath(`/managed/credentials/${credentialId}`),
  ),

  getManagedIssues: () => Request(
    setGET,
    setPath(`/managed/issues`),
  ),

  getManagedIssue: (issueId: number) => Request(
    setGET,
    setPath(`/managed/issues/${issueId}`),
  ),

  getManagedLinodesSettings: () => Request(
    setGET,
    setPath(`/managed/linode-settings`),
  ),

  getManagedLinodeSettings: (linodeId: number) => Request(
    setGET,
    setPath(`/managed/linode-settings/${linodeId}`),
  ),

  getManagedServices: () => Request(
    setGET,
    setPath(`/managed/services`),
  ),

  getManagedService: (serviceId: number) => Request(
    setGET,
    setPath(`/managed/services/${serviceId}`),
  ),
};
