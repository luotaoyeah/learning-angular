import { TestBed, TestBedStatic } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { DelonLocaleService, SettingsService } from '@delon/theme';
import { NzI18nService } from 'ng-zorro-antd';
import { of } from 'rxjs';
import { I18NService } from '@app/core';

describe('src/app/core/services/i18n/i18n.service.ts', () => {
  let injector: TestBedStatic;
  let i18NService: I18NService;
  const MockSettingsService: {
    layout: {
      lang: string | null;
    };
  } = {
    layout: {
      lang: null,
    },
  };
  const MockNzI18nService = {
    setLocale: () => {},
  };
  const MockDelonLocaleService = {
    setLocale: () => {},
  };
  const MockTranslateService = {
    getBrowserLang: jasmine.createSpy('getBrowserLang'),
    addLangs: () => {},
    setLocale: () => {},
    getDefaultLang: () => '',
    use: () => of(),
    instant: jasmine.createSpy('instant'),
  };

  function genModule() {
    injector = TestBed.configureTestingModule({
      providers: [
        I18NService,
        { provide: SettingsService, useValue: MockSettingsService },
        { provide: NzI18nService, useValue: MockNzI18nService },
        { provide: DelonLocaleService, useValue: MockDelonLocaleService },
        { provide: TranslateService, useValue: MockTranslateService },
      ],
    });
    i18NService = injector.get(I18NService);
  }

  it('should created', () => {
    genModule();
    expect(i18NService).toBeTruthy();
    expect(i18NService.defaultLang).toBe('zh-CN');
    i18NService.fanyi('a');
    i18NService.fanyi('a', {});
    const t = injector.get(TranslateService) as TranslateService;
    expect(t.instant).toHaveBeenCalled();
  });

  it('should be used layout as default language', () => {
    MockSettingsService.layout.lang = 'en-US';
    genModule();
    expect(i18NService.defaultLang).toBe('en-US');
    MockSettingsService.layout.lang = null;
  });

  it('should be used browser as default language', () => {
    MockTranslateService.getBrowserLang.and.returnValue('zh-CN');
    genModule();
    expect(i18NService.defaultLang).toBe('zh-CN');
  });

  it('should be trigger notify when changed language', () => {
    genModule();
    i18NService.use('en-US');
    i18NService.change.subscribe(lang => {
      expect(lang).toBe('en-US');
    });
  });
});
