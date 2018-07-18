import Request from '../lib/request';

describe('request', () => {
  it('should reduce an empty object', () => {
    const result = Request();
    expect(result).toEqual({});
  });
});
