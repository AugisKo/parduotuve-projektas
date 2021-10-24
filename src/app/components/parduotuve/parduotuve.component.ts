import { Component, OnInit } from '@angular/core';
import { Preke } from 'src/app/models/preke/preke';

@Component({
  selector: 'app-parduotuve',
  templateUrl: './parduotuve.component.html',
  styleUrls: ['./parduotuve.component.scss'],
})
export class ParduotuveComponent implements OnInit {
  public prekes: Preke[] = [];
  constructor() {
    this.prekes.push(
      new Preke('Krepšinio kamuolys', 15, 'src/assets/img/kamuolys.jpeg')
    );
    this.prekes.push(
      new Preke('Futbolo kamuolys', 18, 'src/assets/img/fkamuolys.jpeg')
    );
    this.prekes.push(
      new Preke('Teniso kamuolys', 5, 'src/assets/img/tkamuolys.jpeg')
    );
  }

  ngOnInit(): void {}
}
