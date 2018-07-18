import Request from './request';
import { setGET } from './methods';
import setPath from './path';

export default {
  getAccount: () => Request(
    setGET,
    setPath(`/account`),
  ),

  getEvents: () => Request(
    setGET,
    setPath(`/account/events`),
  ),

  getEvent: (eventId: number) => Request(
    setGET,
    setPath(`/account/events/${eventId}`),
  ),

  getInvoices: () => Request(
    setGET,
    setPath(`/account/invoices`),
  ),

  getInvoice: (invoiceId: number) => Request(
    setGET,
    setPath(`/account/invoices/${invoiceId}`),
  ),

  getInvoiceItems: (invoiceId: number) => Request(
    setGET,
    setPath(`/account/invoices/${invoiceId}/items`),
  ),

  getNotifications: () => Request(
    setGET,
    setPath(`/account/notifications`),
  ),

  getOAuthClients: () => Request(
    setGET,
    setPath(`/account/oauth-clients`),
  ),

  getOAuthClient: (clientId: number) => Request(
    setGET,
    setPath(`/account/oauth-clients/${clientId}`),
  ),

  getOAuthThumbnail: (clientId: number) => Request(
    setGET,
    setPath(`/account/oauth-clients/${clientId}/thumbnail`),
  ),

  getPayments: () => Request(
    setGET,
    setPath(`/account/payments`),
  ),

  getPayment: (paymentId: number) => Request(
    setGET,
    setPath(`/account/payments/${paymentId}`),
  ),

  getAccountSettings: () => Request(
    setGET,
    setPath(`/account/settings`),
  ),

  getTransfer: () => Request(
    setGET,
    setPath(`/account/transfer`),
  ),

  getUsers: () => Request(
    setGET,
    setPath(`/account/users`),
  ),

  getUser: (username: string) => Request(
    setGET,
    setPath(`/account/users/${username}/grants`),
  ),

  getUserGrants: (username: string) => Request(
    setGET,
    setPath(`/account/users/${username}/grants`),
  ),
};
