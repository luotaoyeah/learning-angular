import { HeaderStorageComponentI18n } from '../../../layout/default/header/storage/header-storage.component.i18n';
import { HeaderFullScreenComponentI18n } from '../../../layout/default/header/fullscreen/header-fullscreen.component.i18n';

const I18N = {
  'menu.home': 'HOME',
  'menu.home.home': 'HOME',
  'menu.doc': 'DOC',
  'menu.doc.02': 'SETUP',
  'menu.doc.03': 'FUNDAMENTAL',
  'menu.doc.03.tutorial': 'Tour Of Heroes App',
  'menu.doc.03.architecture': 'Architecture',
  'menu.doc.03.02.intro': 'Intro to Components',
  'menu.doc.03.02.intro-to-di': 'Intro to Services and DI',
  'menu.doc.03.03': 'Comoponents & Templates',
  'menu.doc.03.03.01': 'Displaying Data',
  'menu.doc.03.03.02': 'Template Syntax',
  'menu.doc.03.03.03': 'User Input',
  'menu.doc.03.03.04': 'Lifecycle Hooks',
  'menu.doc.03.03.05': 'Component Interaction',
  'menu.doc.03.03.06': 'Component Styles',
  'menu.doc.03.03.07': 'Dynamic Components',
  'menu.doc.03.03.08': 'Angular Elements',
  'menu.doc.03.03.09': 'Attribute Directives',
  'menu.doc.03.03.10': 'Structural Directives',
  'menu.doc.03.03.11': 'Pipes',
  'menu.doc.03.04': 'Form',
  'menu.doc.03.04.01': 'Introduction',
  'menu.doc.03.04.02': 'Reactive Form',
  'menu.doc.03.04.03': 'Template-Driven Form',
  'menu.doc.03.04.04': 'Form Validation',
  'menu.doc.03.04.05': 'Dynamic Forms',
  'menu.doc.03.05': 'Observables & RxJS',
  'menu.doc.03.05.01': 'Observables',
  'menu.doc.03.05.02': 'The RxJS Library',
  'menu.doc.03.05.03': 'Observables In Angular',
  'menu.doc.03.05.04': 'Practical Usage',
  'menu.doc.03.05.05': 'Compare To Other Techniques',
  'menu.doc.03.06': 'Bootstrapping',
  'menu.doc.03.07': 'NgModules',
  'menu.doc.03.07.01': 'NgModules Introduction',
  'menu.doc.03.07.02': 'JavaScript Modules vs. NgModules',
  'menu.doc.03.07.03': 'Frequently Used Modules',
  'menu.doc.03.07.04': 'Types of Feature Modules',
  'menu.doc.03.07.05': 'Entry Components',
  'menu.doc.03.07.06': 'Feature Modules',
  'menu.doc.03.07.07': 'Providers',
  'menu.doc.03.07.08': 'Singleton services',
  'menu.doc.03.07.09': 'Lazy Loading Feature Modules',
  'menu.doc.03.07.10': 'Sharing Modules',
  'menu.doc.03.07.11': 'NgModule API',
  'menu.doc.03.07.12': 'NgModule FAQs',
  'menu.doc.03.08': 'Dependency Injection',
  'menu.doc.03.08.01': 'Dependency Injection in Angular',
  'menu.doc.03.08.02': 'Hierarchical Dependency Injectors',
  'menu.doc.03.08.03': 'Dependency Providers',
  'menu.doc.03.08.04': 'Dependency Injection in Action',
  'menu.doc.03.08.05': 'Navigate the component tree with DI',
  'menu.doc.03.09': 'HttpClient',
  'menu.doc.03.10': 'Routing & Navigation',
  'menu.doc.03.11': 'Animations',
  'menu.doc.03.11.01': 'Introduction',
  'menu.doc.03.11.02': 'Transitions And Triggers',
  'menu.doc.03.11.03': 'Complex Sequences',
  'menu.doc.03.11.04': 'Reusable Animations',
  'menu.doc.03.11.05': 'Route Transition Animations',
  'menu.doc.04': 'TECHNIQUES',
  'menu.doc.04.02': 'i18n',
  'menu.doc.04.06': 'Angular Libraries',
  'menu.doc.04.06.03': 'Creating Libraries',
  'menu.doc.04.07': 'Schematics',
  'menu.doc.04.07.01': 'Schematics Overview',
  'menu.doc.04.07.02': 'Authoring Schematics',
  'menu.doc.04.07.03': 'Schematics for Libraries',
  'menu.doc.05': 'DEV WORKFLOW',
  'menu.doc.05.04': 'Testing',
  'menu.doc.06': 'CONFIGURATION',
  'menu.doc.06.02': 'Workspace Configuration',
  'menu.doc.08': 'CLI',
  'menu.doc.08.01': 'Overview',
  'menu.doc.08.02': 'ng add',
  'menu.doc.08.03': 'ng build',
  'menu.doc.08.04': 'ng config',
  'menu.doc.08.05': 'ng doc',
  'menu.doc.08.06': 'ng e2e',
  'menu.doc.08.07': 'ng generate',
  'menu.doc.08.08': 'ng help',
  'menu.doc.08.09': 'ng lint',
  'menu.doc.08.10': 'ng new',
  'menu.doc.08.11': 'ng run',
  'menu.doc.08.12': 'ng serve',
  'menu.doc.08.13': 'ng test',
  'menu.doc.08.14': 'ng update',
  'menu.doc.08.15': 'ng version',
  'menu.doc.08.16': 'ng xi18n',
  'menu.doc.09': 'API',
  'menu.doc.09.01': '@angular/core',
  'menu.doc.09.01.01': 'Entry Points',
  'menu.doc.09.01.02': 'Primary Entry Point Exports',
  'menu.doc.09.02': '@angular/common',
  'menu.doc.09.02.02': 'Primary Entry Point Exports',
  'menu.pkgs': 'PACKAGES',
  'menu.pkgs.ng-alain': 'ng-alain',
  'menu.pkgs.ng-alain.delon': 'delon',
  'menu.pkgs.ng-alain.delon.abc': 'abc',
  'menu.pkgs.ng-alain.delon.acl': 'acl',
  'menu.pkgs.jasmine': 'jasmine',
  'menu.pkgs.jasmine.global': 'global',
  'menu.pkgs.jasmine.namespace': 'namespace',
  'menu.pkgs.ngx-translate': 'ngx-translate',
  'menu.pkgs.ngrx': 'ngrx',
  'menu.pkgs.ngrx.store': 'STORE',
  'menu.pkgs.ngrx.store.01': 'Getting Started',
  'menu.pkgs.ngrx.store.02': 'Architecture',
  'menu.pkgs.ngrx.store.03': 'Advanced',
  'menu.pkgs.ngrx.store.04': 'Recipes',
  'menu.pkgs.ngrx.store.05': 'Testing',
  'menu.pkgs.ngrx.effects': 'EFFECTS',
  'menu.pkgs.ngrx.effects.01': 'Overview',
  'menu.pkgs.ngrx.effects.02': 'Testing',
  'menu.pkgs.ngrx.effects.03': 'Lifecycle',
  'menu.pkgs.ngrx.router-store': 'ROUTER STORE',
  'menu.pkgs.ngrx.router-store.01': 'Actions',
  'menu.pkgs.ngrx.router-store.02': 'Configuration',
  'menu.pkgs.ngrx.entity': 'ENTITY',
  'menu.pkgs.ngrx.entity.01': 'Entity Interfaces',
  'menu.pkgs.ngrx.entity.02': 'Entity Adapter',
  'menu.pkgs.ngrx.schematics': 'SCHEMATICS',
  'menu.pkgs.ngrx.schematics.01': 'Schematics',
  'menu.pkgs.angular-gridster2': 'angular-gridster2',
  'menu.pkgs.angular-gridster2.01': 'Home',
  'menu.pkgs.angular-gridster2.02': 'API',
  'menu.pkgs.angular-gridster2.03': 'Compact',
  'menu.pkgs.angular-gridster2.04': 'Display Grid',
  'menu.pkgs.angular-gridster2.05': 'Drag',
  'menu.pkgs.angular-gridster2.08': 'Grid Margins',
  'menu.blog': 'BLOG',
  'menu.blog.a-comprehensive-guide-to-angular-onpush':
    'A Comprehensive Guide to Angular onPush Change Detection Strategy',
  'menu.blog.never-again-be-confused-when-implementing-controlvalueaccessor':
    'Never Again Be Confused When Implementing Control Value Accessor In Angular Forms',
  'menu.blog.a-gentle-introduction-into-change-detection-in-angular':
    'A Gentle Introduction Into Change Detection In Angular',
  'menu.blog.working-with-dom-in-angular':
    'Working With DOM In Angular: Unexpected Consequences And Optimization Techniques',
  'menu.blog.here-is-what-you-need-to-know-about-dynamic-components-in-angular':
    'Here Is What You Need To Know About Dynamic Components In Angular',
  'menu.blog.do-you-still-think-that-ngzone-is-required-for-change-detection-in-angular':
    'Do You Still Think That NgZone Is Required For Change Detection In Angular',
  'menu.blog.everything-you-need-to-know-about-change-detection':
    'Everything You Need To Know About Change Detection In Angular',
  'menu.blog.boosting-performance-of-angular-applications-with-manual-change-detection':
    'Boosting Performance Of Angular Applications With Manual Change Detection',
  'menu.blog.if-you-think-ngdocheck-means-your-component-is-being-checked':
    'If You Think Ng Do Check Means Your Component Is Being Checked',
  'menu.account.logout': '退出登录',
  'reuse-tab.i18n.close': '关闭',
  'reuse-tab.i18n.close-other': '关闭其它',
  'reuse-tab.i18n.close-right': '关闭右边',
  'reuse-tab.i18n.clear': '关闭全部',
  'app.unlock': '解锁',
  'app.lock.title': '锁屏',
  'app.login.message-invalid-credentials': '账户或密码错误（admin/ant.design）',
  'app.login.tab-login-mobile': '手机号登录',
  'app.login.remember-me': '自动登录',
  'app.login.login': '登录',
  'app.login.title': '登录',
  'app.login.username.required': '请输入账号',
  'app.login.username.placeholder': '账号',
  'app.login.password.required': '请输入密码',
  'app.login.password.placeholder': '密码',
  'app.login.login-failed': '登录失败',
  'validation.password.required': '请输入密码',
  'interceptors.default.request-error': '请求失败',

  ...HeaderStorageComponentI18n.CN,
  ...HeaderFullScreenComponentI18n.CN,
};

export { I18N };
