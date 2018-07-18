import setPath from '../lib/path';

describe('path', () => {
  it('should update the url property', () => {
    const result = setPath('/shenanigans')({});
    expect(result).toEqual({ path: '/shenanigans' });
  });
});
