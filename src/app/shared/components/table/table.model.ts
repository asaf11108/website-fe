import { TableColumn } from '@swimlane/ngx-datatable';

export enum ColumnType {
    Text,
    Number,
    Date
}

export interface ITableColumn extends Omit<TableColumn, 'cellTemplate'> {
  columnType: ColumnType;
}
