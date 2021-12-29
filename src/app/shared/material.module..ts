import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

const modules = [
  LayoutModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
