import Request from './request';
import { setGET } from './methods';
import setPath from './path';

export default {
  getStackScripts: () => Request(
    setGET,
    setPath(`/linode/stackscripts`),
  ),

  getStackScript: (stackScriptId: number) => Request(
    setGET,
    setPath(`/linode/stackscripts/${stackScriptId}`),
  ),
};
