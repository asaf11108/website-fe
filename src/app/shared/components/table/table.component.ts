import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewEncapsulation,
  ViewChild,
  TemplateRef,
  Output,
  EventEmitter,
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

  @ViewChild('dateRef', { static: true }) dateRef: TemplateRef<any>;
  @ViewChild('numberRef', { static: true }) numberRef: TemplateRef<any>;
  @ViewChild('iconRef', { static: true }) iconRef: TemplateRef<any>;

  @Input() data: T[] = [];
  @Input() loading: boolean;
  @Input('columns') set _columns(columns: ITableColumn[]) {
    this.columns = this.buildColumns(columns);
  }
  @Output() tableClick: EventEmitter<any> = new EventEmitter();

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.XSmall).subscribe((obs) => {
      this.view = obs.matches
        ? [250, 500]
        : [this.columns.reduce((acc, col) => acc + col.width, 0) + 50, 700];
    });
  }

  onActivateClick(event): void {
    event.type === 'click' && this.tableClick.emit(event);
  }

  private buildColumns(columns: ITableColumn[]): TableColumn[] {
    return columns.map((col) => {
      let cellTemplate: TemplateRef<any>;
      switch (col.type) {
        case ColumnType.Number:
          cellTemplate = this.numberRef;
          break;
        case ColumnType.Date:
          cellTemplate = this.dateRef;
          break;
        case ColumnType.Icon:
          cellTemplate = this.iconRef;
      }
      return {
        ...omit(col, 'columnType'),
        cellTemplate,
      };
    });
  }
}
