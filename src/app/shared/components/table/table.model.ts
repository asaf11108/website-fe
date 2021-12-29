import { TableColumn } from '@swimlane/ngx-datatable';

export enum ColumnType {
    Text,
    Number,
    Date,
    Icon
}

export interface ITableColumn extends Omit<TableColumn, 'cellTemplate'> {
  type: ColumnType;
}
