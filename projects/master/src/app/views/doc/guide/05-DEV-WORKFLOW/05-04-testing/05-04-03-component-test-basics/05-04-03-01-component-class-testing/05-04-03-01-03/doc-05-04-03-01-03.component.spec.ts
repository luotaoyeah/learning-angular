import { Doc0504030103Component } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-03-component-test-basics/05-04-03-01-component-class-testing/05-04-03-01-03/doc-05-04-03-01-03.component';
import { TestBed } from '@angular/core/testing';
import { Doc0504030103Service } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-03-component-test-basics/05-04-03-01-component-class-testing/05-04-03-01-03/services/doc-05-04-03-01-03.service';

class MockDoc0504030103Service {
  public isLoggedIn: boolean = true;
  public user: { name: string } = { name: 'ADMIN' };
}

describe('Doc0504030103Component', () => {
  let component: Doc0504030103Component;
  let doc0504030103Service: Doc0504030103Service;

  /*
   * 如果 component 依赖了其他的 service, 也可以对这些 service 进行模拟,
   * 即, 使用 mock service 来进行测试
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Doc0504030103Component,
        {
          provide: Doc0504030103Service,
          useClass: MockDoc0504030103Service,
        },
      ],
    });

    component = TestBed.inject(Doc0504030103Component);
    doc0504030103Service = TestBed.inject(Doc0504030103Service);
  });

  it('should have the default value of "" for #welcome', () => {
    expect(component.welcome).toEqual('');
  });

  it('should set #message when execute #ngOnInit()', () => {
    /*
     * 需要手动调用生命周期函数
     */
    component.ngOnInit();
    expect(component.welcome).toContain('WELCOME');
  });

  it('should set #messasge to "PLEASE LOGIN" when #isLoggedIn is false', () => {
    doc0504030103Service.isLoggedIn = false;
    component.ngOnInit();
    expect(component.welcome).not.toContain('WELCOME');
    expect(component.welcome).toEqual('PLEASE LOGIN');
  });
});
