import Request from './request';
import { setGET } from './methods';
import setPath from './path';

export default {
  getKernels: () => Request(
    setGET,
    setPath(`/linodes/kernels`),
  ),

  getTypes: () => Request(
    setGET,
    setPath(`/linodes/types`),
  ),

  getType: (typeId: string) => Request(
    setGET,
    setPath(`/linodes/types/${typeId}`),
  ),

  getRegions: () => Request(
    setGET,
    setPath(`/regions`),
  ),

  getRegion: (regionId: string) => Request(
    setGET,
    setPath(`/regions/${regionId}`),
  ),
};
