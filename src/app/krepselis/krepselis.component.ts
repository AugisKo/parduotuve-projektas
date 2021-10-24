import { Component, Input, OnInit } from '@angular/core';
import { Preke } from 'src/app/models/preke/preke';
@Component({
  selector: 'app-krepselis',
  templateUrl: './krepselis.component.html',
  styleUrls: ['./krepselis.component.scss'],
})
export class KrepselisComponent implements OnInit {
  @Input()
  public preke?: Preke[];
  public rodomosPrekes: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public krepselioKiekis(): number {
    let kiekis = 0;
    this.preke?.forEach((prekes) => {
      kiekis += prekes.kiekis;
    });
    return kiekis;
  }

  public krepselioSarasas(): Preke[] {
    let krepselioPrekes: Preke[] = [];
    this.preke?.forEach((prekes) => {
      if (prekes.kiekis > 0) {
        krepselioPrekes.push(prekes);
      }
    });
    return krepselioPrekes;
  }

  public keistiPrekiuSarasa() {
    this.rodomosPrekes = !this.rodomosPrekes;
  }
}
