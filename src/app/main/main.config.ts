import { ColumnType, ITableColumn } from '../shared/components/table/table.model';

export const TABLE_CONFIG: ITableColumn[] = [
    { prop: 'websiteId', name: 'Website ID', width: 200, columnType: ColumnType.Text },
    { prop: 'date', name: 'Date', width: 200, columnType: ColumnType.Date },
    { prop: 'widgetId', name: 'Widget ID', width: 200, columnType: ColumnType.Text },
    { prop: 'clicks', name: 'Clicks', width: 200, columnType: ColumnType.Number },
    { prop: 'impressions', name: 'Impressions', width: 200, columnType: ColumnType.Number },
    { prop: 'revenue', name: 'Revenue', width: 200, columnType: ColumnType.Number },
];