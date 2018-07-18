import Request from './request';
import { setGET } from './methods';
import setPath from './path';

export default {
  getSupportTickets: () => Request(
    setGET,
    setPath(`/support/tickets`),
  ),
  getSupportTicket: (supportTicketId: number) => Request(
    setGET,
    setPath(`/support/tickets/${supportTicketId}`),
  ),
  getSupportTicketReplies: (supportTicketId: number) => Request(
    setGET,
    setPath(`/support/tickets/${supportTicketId}/replies`),
  ),
};
