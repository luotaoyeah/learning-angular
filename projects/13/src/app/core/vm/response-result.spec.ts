import { ResponseResult } from '@app/core';

describe('src/app/core/models/response-result.ts', () => {
  it('should set the default value of #state true', () => {
    const responseResult = new ResponseResult();
    expect(responseResult.state).toBe(true);
  });

  it('should set the default value of #message to ""', () => {
    const responseResult = new ResponseResult();
    expect(responseResult.message).toEqual('');
  });
});
