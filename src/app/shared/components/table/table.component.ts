import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewEncapsulation,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { ColumnMode, TableColumn } from '@swimlane/ngx-datatable';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ColumnType, ITableColumn } from './table.model';
import { omit } from 'lodash-es';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'fe-table',
  },
})
export class TableComponent<T> implements OnInit {
  ColumnMode = ColumnMode;

  view: [number, number];
  columns: TableColumn[] = [];

  @ViewChild('dateTmpl', { static: true }) dateTmpl: TemplateRef<any>;
  @ViewChild('numberTmpl', { static: true }) numberTmpl: TemplateRef<any>;

  @Input() data: T[] = [];
  @Input() loading: boolean;
  @Input('columns') set _columns(columns: ITableColumn[]) {
    this.columns = this.buildColumns(columns);
  }

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    const COLUMN_WIDTH = 200;
    const WIDTH_OFFSET = 50;
    this.breakpointObserver.observe(Breakpoints.XSmall).subscribe((obs) => {
      this.view = obs.matches
        ? [COLUMN_WIDTH + WIDTH_OFFSET, 500]
        : [COLUMN_WIDTH * this.columns.length + WIDTH_OFFSET, 700];
    });
  }

  private buildColumns(columns: ITableColumn[]): TableColumn[] {
    return columns.map((col) => {
      let cellTemplate: TemplateRef<any>;
      switch (col.columnType) {
        case ColumnType.Number:
          cellTemplate = this.numberTmpl;
          break;
        case ColumnType.Date:
          cellTemplate = this.dateTmpl;
          break;
      }
      return {
        ...omit(col, 'columnType'),
        cellTemplate,
      };
    });
  }
}
