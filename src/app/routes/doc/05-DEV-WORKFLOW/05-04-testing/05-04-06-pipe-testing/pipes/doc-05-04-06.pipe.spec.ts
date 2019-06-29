import { Doc050406Pipe } from './doc-05-04-06.pipe';

/*
 * 测试一个 pipe 时, 可以直接测试它的 transform() 方法
 */
describe('src/app/routes/doc/05-DEV-WORKFLOW/05-04-testing/05-04-06-pipe-testing/pipes/doc-05-04-06.pipe.ts', () => {
  it('should work', () => {
    const doc050406Pipe = new Doc050406Pipe();
    expect(doc050406Pipe.transform('foo')).toEqual('FOO');
  });

  it('should return empty when pass null', () => {
    const doc050406Pipe = new Doc050406Pipe();
    // @ts-ignore
    expect(doc050406Pipe.transform(null)).toEqual('');
  });
});
