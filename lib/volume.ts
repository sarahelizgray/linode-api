import Request from './request';
import { setGET } from './methods';
import setPath from './path';

export default {
  getVolumes: () => Request(
    setGET,
    setPath(`/volumes`),
  ),
  getVolume: (volumeId: number) => Request(
    setGET,
    setPath(`/volumes/${volumeId}`),
  ),
};
