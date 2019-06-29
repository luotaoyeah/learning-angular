import { Page } from '@app/core';

describe('src/app/core/models/page.ts', () => {
  it('should set the default value of #total to 0', () => {
    const page = new Page();
    expect(page.total).toEqual(0);
  });

  it('should set the default value of #items to []', () => {
    const page = new Page<unknown>();
    expect(page.items).toEqual(jasmine.arrayWithExactContents<unknown>([]));
  });

  it('should parse #items', () => {
    const page = new Page<string>({
      items: ['0'],
    });
    expect(page.items).toEqual(jasmine.arrayWithExactContents<string>(['0']));
  });
});
