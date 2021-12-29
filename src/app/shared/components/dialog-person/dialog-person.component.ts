import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dialog-person',
  templateUrl: './dialog-person.component.html',
  styleUrls: ['./dialog-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogPersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
