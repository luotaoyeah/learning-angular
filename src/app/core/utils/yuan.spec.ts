import { yuan } from '@app/core';

describe('src/app/core/utils/yuan.ts', () => {
  it('should work', () => {
    expect(yuan(100)).toEqual(`&yen 100.00`);
    expect(yuan(99.9999)).toEqual(`&yen 100.00`);
    expect(yuan('99.9999')).toEqual(`&yen 99.9999`);
  });
});
