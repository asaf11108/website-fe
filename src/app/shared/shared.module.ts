import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from './material.module.';
import { DialogComponent } from './components/dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [TableComponent, DialogComponent];

const modules = [MaterialModule, ReactiveFormsModule]

@NgModule({
  imports: [
    ...modules,
    CommonModule,
    NgxDatatableModule,
  ],
  declarations: [...components],
  exports: [...components, modules, MaterialModule],
})
export class SharedModule {}
