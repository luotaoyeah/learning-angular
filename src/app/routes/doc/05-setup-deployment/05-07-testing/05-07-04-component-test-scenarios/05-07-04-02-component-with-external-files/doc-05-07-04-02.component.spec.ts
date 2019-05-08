import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Doc05070402Component } from './doc-05-07-04-02.component';

describe('Doc05070402Component', () => {
  let fixture: ComponentFixture<Doc05070402Component>;
  let component: Doc05070402Component;

  beforeEach(async(() => {
    /*
     * 如果 component 通过 templateUrl 和 styleUrls 引入了外部的文件，
     * 则在测试之前，需要调用 TestBedStatic.compileComponents() 方法编译 component
     */
    TestBed.configureTestingModule({
      declarations: [Doc05070402Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc05070402Component);
    component = fixture.componentInstance;
  });

  it('should working', () => {
    expect(component).toBeTruthy();
  });
});
