import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CompactType, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';

/*
 * https://tiberiuzuld.github.io/angular-gridster2/compact
 */
@Component({
  selector: 'app-x-03',
  templateUrl: './x-03.component.html',
  styleUrls: ['./x-03.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X03Component implements OnInit {
  public options: GridsterConfig = {};
  public items: Array<GridsterItem> = [];

  public ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      maxCols: 10,
      pushItems: true,
      draggable: {
        enabled: true,
      },
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
  }

  public handleCompactTypeChange(type: CompactType) {
    this.options.compactType = type;
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }
}
