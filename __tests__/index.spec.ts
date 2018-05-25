import { sum } from '../lib/index';

describe('index', () => {
    it('should work', () => {
        expect(sum(1,2)).toEqual(3);
    });
});