import { Doc0504030103Component } from './doc-05-04-03-01-03.component';
import { TranslateService } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';

class MockTranslateService {
  public defaultLang: string = '';

  public getDefaultLang(): string {
    return this.defaultLang;
  }

  public setDefaultLang(lang: string): void {
    this.defaultLang = lang;
  }
}

describe('Doc0504030103Component', () => {
  let component: Doc0504030103Component;
  let translateService: TranslateService;

  /*
   * 如果 component 依赖了其他的 service，也可以使用 mock service 进行测试
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Doc0504030103Component,
        {
          provide: TranslateService,
          useClass: MockTranslateService,
        },
      ],
    });

    component = TestBed.get(Doc0504030103Component);
    translateService = TestBed.get(TranslateService);
  });

  it('#currentLang should contain "中文"', () => {
    /*
     * 需要手动调用 lifecycle hooks
     */
    component.ngOnInit();
    expect(component.currentLang).toContain('其他');
  });

  it('#currentLang should contain "其他" ', () => {
    translateService.setDefaultLang('zh-CN');
    component.ngOnInit();
    expect(component.currentLang).not.toContain('其他');
    expect(component.currentLang).toContain('中文');
  });
});
