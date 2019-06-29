import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NzIconService } from 'ng-zorro-antd';
import {
  _HttpClient,
  ALAIN_I18N_TOKEN,
  MenuService,
  SettingsService,
  TitleService,
} from '@delon/theme';
import { TranslateService } from '@ngx-translate/core';
import { ACLService } from '@delon/acl';
import { ReuseTabMatchMode, ReuseTabService } from '@delon/abc';
import { I18NService, StartupService } from '@app/core';
import { defer } from 'rxjs';

describe('src/app/core/services/startup/startup.service.ts', () => {
  let service: StartupService;

  let MockHttpClient: jasmine.SpyObj<_HttpClient>;
  let MockNzIconService: jasmine.SpyObj<NzIconService>;
  let MockMenuService: jasmine.SpyObj<MenuService>;
  let MockTranslateService: jasmine.SpyObj<TranslateService>;
  let MockI18NService: jasmine.SpyObj<I18NService>;
  let MockSettingsService: jasmine.SpyObj<SettingsService>;
  let MockACLService: jasmine.SpyObj<ACLService>;
  let MockTitleService: jasmine.SpyObj<TitleService>;
  let MockReuseTabService: jasmine.SpyObj<ReuseTabService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StartupService,
        {
          provide: _HttpClient,
          useValue: jasmine.createSpyObj<_HttpClient>('_HttpClient', ['get']),
        },
        {
          provide: NzIconService,
          useValue: jasmine.createSpyObj<NzIconService>('NzIconService', [
            'addIcon',
          ]),
        },
        {
          provide: MenuService,
          useValue: jasmine.createSpyObj<MenuService>('MenuService', ['add']),
        },
        {
          provide: TranslateService,
          useValue: jasmine.createSpyObj<TranslateService>('TranslateService', [
            'setTranslation',
            'setDefaultLang',
          ]),
        },
        {
          provide: ALAIN_I18N_TOKEN,
          useValue: { defaultLang: 'zh-CN' },
        },
        {
          provide: SettingsService,
          useValue: jasmine.createSpyObj<SettingsService>('SettingsService', [
            'setUser',
            'setApp',
          ]),
        },
        {
          provide: ACLService,
          useValue: jasmine.createSpyObj<ACLService>('ACLService', ['setFull']),
        },
        {
          provide: TitleService,
          useValue: {
            suffix: '',
          },
        },
        {
          provide: ReuseTabService,
          useValue: {
            keepingScroll: true,
            mode: ReuseTabMatchMode.Menu,
          },
        },
      ],
    });

    service = TestBed.get(StartupService);
    MockHttpClient = TestBed.get(_HttpClient);
    MockNzIconService = TestBed.get(NzIconService);
    MockMenuService = TestBed.get(MenuService);
    MockTranslateService = TestBed.get(TranslateService);
    MockI18NService = TestBed.get(ALAIN_I18N_TOKEN);
    MockSettingsService = TestBed.get(SettingsService);
    MockACLService = TestBed.get(ACLService);
    MockTitleService = TestBed.get(TitleService);
    MockReuseTabService = TestBed.get(ReuseTabService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
    expect(MockHttpClient).toBeTruthy();
    expect(MockNzIconService).toBeTruthy();
    expect(MockMenuService).toBeTruthy();
    expect(MockTranslateService).toBeTruthy();
    expect(MockI18NService).toBeTruthy();
    expect(MockSettingsService).toBeTruthy();
    expect(MockACLService).toBeTruthy();
    expect(MockTitleService).toBeTruthy();
    expect(MockReuseTabService).toBeTruthy();
  });

  it('should load the static info if no real info', fakeAsync(() => {
    MockHttpClient.get.and.returnValue(Promise.resolve({}));
    MockHttpClient.get.and.returnValue(
      Promise.resolve({
        app: {},
        user: {},
        menu: [],
      }),
    );

    let result: null | undefined;
    service.load().then((value: null) => {
      result = value;
    });

    tick();

    expect(result).toBeNull();
  }));

  it('should catch error in #load()', fakeAsync(() => {
    let result: null | undefined;
    service.load().then((value: null) => {
      result = value;
    });

    MockHttpClient.get.and.returnValue(
      defer(() => Promise.reject(new Error('ERR01'))),
    );

    tick();

    expect(result).toBeNull();
    expect(MockTranslateService.setTranslation).not.toHaveBeenCalled();
  }));
});
