import { Component, Input, OnInit } from '@angular/core';

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
      <span class="domain">{{item.time | date}}</span>
    </div>
  </div>
</div>
  `
})
export class ItemComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
