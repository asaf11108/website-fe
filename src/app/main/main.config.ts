import { ColumnType, ITableColumn } from '../shared/components/table/table.model';

export const TABLE_CONFIG: ITableColumn[] = [
    { prop: 'id', name: 'Person ID', width: 200, columnType: ColumnType.Text },
    { prop: 'firstName', name: 'First Name', width: 200, columnType: ColumnType.Text },
    { prop: 'lastName', name: 'Last Name', width: 200, columnType: ColumnType.Text },
    { prop: 'email', name: 'Email', width: 200, columnType: ColumnType.Text },
    { prop: 'gender', name: 'Gender', width: 200, columnType: ColumnType.Text },
    { prop: 'birthDate', name: 'Birth Date', width: 200, columnType: ColumnType.Date },
];