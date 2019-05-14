import { Component, OnInit } from '@angular/core';
import {
  LangChangeEvent,
  TranslateService,
  TranslationChangeEvent,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/*
 * https://github.com/ngx-translate/core#translateservice
 */
@Component({
  selector: 'app-ngx-translate-04',
  templateUrl: './ngx-translate-04.component.html',
})
export class NgxTranslate04Component implements OnInit {
  constructor(private translateService: TranslateService) {}

  public ngOnInit() {
    // region TranslateService.currentLoader
    /*
     * TranslateService.currentLoader 属性,
     * 表示当前使用的 loader
     */
    console.assert(
      this.translateService.currentLoader instanceof TranslateHttpLoader,
    );
    // endregion

    // region TranslateService.onLangChange
    /*
     * TranslateService.onLangChange 事件,
     * 当修改当前语言时触发
     */
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log('[ngx-translate-04].[onLangChange]\n', event.lang);
    });
    // endregion

    // region TranslateService.onTranslationChange
    /*
     * TranslateService.onTranslationChange 事件,
     * 当修改翻译文件时触发
     */
    this.translateService.onTranslationChange.subscribe(
      (event: TranslationChangeEvent) => {
        console.log('[ngx-translate-04].[onTranslationChange]\n', event.lang);
      },
    );
    // endregion

    // region TranslateService.getDefaultLang()
    /*
     * TranslateService.getDefaultLang() 方法,
     * 用来获取当前使用的默认语言
     */
    console.log(
      '[ngx-translate-04].[getDefaultLang()]\n',
      this.translateService.getDefaultLang(),
    );
    // endregion

    // region TranslateService.instant()
    /*
     * TranslateService.instant() 方法,
     * 如果我们能够确定, 在我们调用 instant() 方法的时候, translation 数据已经加载完毕,
     * 那么我们就可以直接使用 instant() 方法获取翻译文本,
     * 如果我们不能够确定, 我们就应该使用 get() 方法获取翻译文本,
     * instant() 和 get() 的区别在于, instant() 是 synchronous 的, get() 是 asynchronous 的
     */
    const message01 = this.translateService.instant('menu.pkgs.ngx-translate');
    console.log('[ngx-translate-04].[instant()]\n', message01);
    // endregion

    // region TranslateService.get()
    this.translateService
      .get('menu.pkgs.ngx-translate')
      .subscribe((message02: string) => {
        console.log('[ngx-translate-04].[get()]\n', message02);
      });
    // endregion

    // region TranslateService.stream()
    /*
     * stream() 和 get() 的区别在于,
     * get() 方法只会返回一次,
     * stream() 方法会持续返回数据,translateService.
     * 当前语言发生变更时, stream() 会返回变更后的新的数据
     */
    this.translateService
      .stream('menu.pkgs.ngx-translate')
      .subscribe((message02: string) => {
        console.log('[ngx-translate-04].[get()]\n', message02);
      });
    // endregion

    // region TranslateService.getBrowserLang()
    /*
     * TranslateService.getBrowserLang() 方法,
     * 获取浏览器当前的语言
     */
    console.log(
      '[ngx-translate-04].[getBrowserLang()]\n',
      this.translateService.getBrowserLang(),
    );
    // endregion
  }
}
