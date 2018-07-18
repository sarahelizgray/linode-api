import { setGET } from '../lib/methods';

describe('methods', () => {
  describe('setGET', () => {
    it('should set the method to GET', () => {
      const result = setGET({});
      expect(result).toEqual({ method: 'GET' });
    });
  });
});
