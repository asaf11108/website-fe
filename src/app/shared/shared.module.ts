import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from './material.module.';

const components = [TableComponent];

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    MaterialModule
  ],
  declarations: [...components],
  exports: [...components, MaterialModule],
})
export class SharedModule {}
