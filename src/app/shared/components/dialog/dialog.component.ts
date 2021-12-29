import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from '../../api/model/person';
import { forEach } from 'lodash';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnInit {
  form = new FormGroup({});

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Object
    ) { }

  ngOnInit(): void {
    forEach(this.data, (val, key) => {
      this.form.addControl(key, new FormControl(val));
    })
  }

  submit() {
    this.dialogRef.close(this.form.value);
  }
}
