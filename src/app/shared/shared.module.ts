import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from './material.module.';
import { DialogPersonComponent } from './components/dialog-person/dialog-person.component';

const components = [TableComponent];

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    MaterialModule
  ],
  declarations: [...components, DialogPersonComponent],
  exports: [...components, MaterialModule],
})
export class SharedModule {}
