import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-01-02',
  template: `
    <p-accordionTab
      header="Template Inline or Template File ?"
      [transitionOptions]="'0ms'"
    >
      <p>
        可以使用 templateUrl 指定一个外部的模板文件
      </p>
      <p>
        也可以直接使用 template 指定嵌入式的模板代码
      </p>
      <p>
        在使用命令 $ ng generate component 生成 component 时，可以通过指定参数
        --inline-template（-t）来生成嵌入式的模板代码
      </p>
    </p-accordionTab>
  `,
})
export class Doc03020102Component implements OnInit {
  constructor() {}

  public ngOnInit() {}
}
