// This file is required by karma.conf.js and loads recursively all the .spec and framework files

/*
 * 使用 fakeAsync(), async() 进行测试时,
 * 必须引入 'zone.js/dist/zone-testing'
 */
import 'zone.js/dist/zone-testing';

/*
 * 在 fakeAsync() zone 中使用 rxjs scheduler 时,
 * 必须引入 'zone.js/dist/zone-patch-rxjs-fake-async'
 */
import 'zone.js/dist/zone-patch-rxjs-fake-async';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// tslint:disable-next-line:no-any
declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
