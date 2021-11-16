import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LayoutModule } from '@angular/cdk/layout';

const components = [TableComponent];

@NgModule({
  imports: [CommonModule, NgxDatatableModule, LayoutModule],
  declarations: [...components],
  exports: [...components],
})
export class SharedModule {}
