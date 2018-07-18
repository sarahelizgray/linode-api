import Request from './request';
import { setGET } from './methods';
import setPath from './path';

export default {
  getImages: () => Request(
    setGET,
    setPath(`/images`)
  ),

  getImage: (imageId: number) => Request(
    setGET,
    setPath(`/images/${imageId}`),
  ),
};
