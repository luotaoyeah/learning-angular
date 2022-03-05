import { NtJsonPipe } from '@app/shared/pipes/nt-json.pipe';

describe('src/app/shared/pipes/nt-json.pipe.ts', () => {
  it('should work', () => {
    const ntJsonPipe = new NtJsonPipe();
    expect(ntJsonPipe.transform({})).toEqual(JSON.stringify({}, null, 2));
  });
});
