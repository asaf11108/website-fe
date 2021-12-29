import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from './material.module.';
import { DialogComponent } from './components/dialog/dialog.component';

const components = [TableComponent, DialogComponent];

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
