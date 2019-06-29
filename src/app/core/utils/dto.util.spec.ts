import { DtoUtil } from '@app/core';
import { isNil } from 'lodash-es';

class TestDTO {
  public foo: string = '';

  constructor(t: Partial<TestDTO> = {}) {
    DtoUtil.keys(t).forEach(key => {
      const value = Reflect.get(t, key);
      if (!isNil(value)) {
        switch (key) {
          default:
            Reflect.set(this, key, value);
            break;
        }
      }
    });
  }
}

describe('src/app/core/utils/dto.util.ts', () => {
  it('should parse DTO by #from()', () => {
    const testDTO = DtoUtil.from(TestDTO, null);
    expect(testDTO instanceof TestDTO).toBe(true);
  });

  it('should parse DTOs by #fromArray()', () => {
    const testDTOs = DtoUtil.fromArray<TestDTO>(TestDTO, []);
    expect(testDTOs.length).toEqual(0);
  });

  it('should get keys by #keys()', () => {
    const keys = DtoUtil.keys<TestDTO>(new TestDTO());
    expect(keys).toEqual(jasmine.arrayWithExactContents(['foo']));
  });
});
