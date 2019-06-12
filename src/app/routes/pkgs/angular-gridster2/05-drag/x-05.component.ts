import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  DisplayGrid,
  GridsterComponentInterface,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponentInterface,
  GridType,
} from 'angular-gridster2';
import { SettingsNotify, SettingsService } from '@delon/theme';

/*
 * https://tiberiuzuld.github.io/angular-gridster2/drag
 */
@Component({
  selector: 'app-x-05',
  templateUrl: './x-05.component.html',
  styleUrls: ['./x-05.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X05Component implements OnInit {
  public options: GridsterConfig = {};
  public items: Array<GridsterItem> = [];

  constructor(public settingsService: SettingsService) {}

  public static handleDragStart(
    item: GridsterItem,
    itemComponent: GridsterItemComponentInterface,
    event: MouseEvent,
  ) {
    console.log(`[${X05Component.name}] [start]\n`, item, itemComponent, event);
  }

  public static handleDragStop(
    item: GridsterItem,
    itemComponent: GridsterItemComponentInterface,
    event: MouseEvent,
  ) {
    console.log(`[${X05Component.name}] [stop]\n`, item, itemComponent, event);
  }

  public static handleDragOverlap(
    source: GridsterItem,
    target: GridsterItem,
    grid?: GridsterComponentInterface,
  ) {
    console.log(`[${X05Component.name}] [overlap]\n`, source, target, grid);
  }

  public ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.Always,
      pushItems: true,
      swap: false,
      draggable: {
        delayStart: 0,
        enabled: true,
        /*
         * draggable.ignoreContentClass 里面的内容始终不能被拖动
         */
        ignoreContentClass: 'gridster-item-content',
        /*
         * 当 draggable.ignoreContent 为 true 时,
         * 只有 draggable.dragHandleClass 里面的内容可以拖动
         */
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
        stop: X05Component.handleDragStop,
        start: X05Component.handleDragStart,
        dropOverItems: false,
        dropOverItemsCallback: X05Component.handleDragOverlap,
      },
      disableScrollHorizontal: false,
      disableScrollVertical: false,
      resizable: {
        enabled: true,
      },
    };

    this.items = [
      { cols: 2, rows: 1, y: 0, x: 0 },
      { cols: 2, rows: 2, y: 0, x: 2 },
      { cols: 1, rows: 1, y: 0, x: 4 },
      { cols: 3, rows: 2, y: 1, x: 4 },
      { cols: 1, rows: 1, y: 4, x: 5 },
      { cols: 1, rows: 1, y: 2, x: 1 },
      { cols: 2, rows: 2, y: 5, x: 5 },
      { cols: 2, rows: 2, y: 3, x: 2 },
      { cols: 2, rows: 1, y: 2, x: 2 },
      { cols: 1, rows: 1, y: 3, x: 4 },
      { cols: 1, rows: 1, y: 0, x: 6 },
    ];

    this.settingsService.notify.subscribe((notify: SettingsNotify) => {
      if (notify.type === 'layout') {
        if (this.options.api && this.options.api.resize) {
          this.options.api.resize();
        }
      }
    });
  }

  public handleOptionsChange() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }
}
