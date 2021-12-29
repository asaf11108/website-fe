import { ColumnType, ITableColumn } from '../shared/components/table/table.model';

export const TABLE_CONFIG: ITableColumn[] = [
    { prop: 'id', name: 'Person ID', width: 150, type: ColumnType.Text },
    { prop: 'firstName', name: 'First Name', width: 150, type: ColumnType.Text },
    { prop: 'lastName', name: 'Last Name', width: 150, type: ColumnType.Text },
    { prop: 'email', name: 'Email', width: 300, type: ColumnType.Text },
    { prop: 'gender', name: 'Gender', width: 100, type: ColumnType.Text },
    { prop: 'birthDate', name: 'Birth Date', width: 150, type: ColumnType.Date },
    { prop: 'edit', width: 50, type: ColumnType.Icon }
];