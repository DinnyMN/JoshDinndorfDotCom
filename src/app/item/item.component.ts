import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'app/models/item';

@Component({
  selector: 'app-item',
  styleUrls: ['./item.component.scss'],
  template: `
  <div class="item-laptop">
  <div>
    <a class="title" href="{{item.url}}">{{item.title}}</a>
    <span class="domain">({{item.domain}})</span>
    <div>
      <app-chip *ngFor="let tag of item.tags" class="domain" [text]="tag"></app-chip>
      <span class="domain">{{getTime() | date}}</span>
    </div>
  </div>
</div>
  `
})
export class ItemComponent implements OnInit {
  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

  getTime(): Date {
    this.item.time.setMonth(this.item.time.getMonth() - 1);
    return this.item.time;
  }
}
