import { Component, Input, OnInit } from '@angular/core';
import { Preke } from 'src/app/models/preke/preke';

@Component({
  selector: 'app-prekes',
  templateUrl: './prekes.component.html',
  styleUrls: ['./prekes.component.scss'],
})
export class PrekesComponent implements OnInit {
  @Input()
  public produktas?: Preke;
  constructor() {}

  ngOnInit(): void {}
}
