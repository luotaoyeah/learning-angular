import { yuan } from '@app/shared';

describe('src/app/shared/utils/yuan.ts', () => {
  it('should work', () => {
    expect(yuan(100)).toEqual(`&yen 100.00`);
    expect(yuan(99.9999)).toEqual(`&yen 100.00`);
    expect(yuan('99.9999')).toEqual(`&yen 99.9999`);
  });
});
