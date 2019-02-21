import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-item-information',
  templateUrl: './item-information.component.html',
  styleUrls: ['./item-information.component.less']
})
export class ItemInformationComponent implements OnInit {

  @Input() itemInformation: Item;

  constructor() { }

  ngOnInit() {
  }

}
