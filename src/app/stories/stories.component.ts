import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { ItemsApiService } from '../items-api/items-api.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  items: Item[];
  item: Item;

  constructor(private _itemsApiService: ItemsApiService) {
    this.item = new Item();
    this.item.id = 1;

    this.items = [this.item];
  }

  ngOnInit() {
    // this._itemsApiService.fetchItems().subscribe(
    //   items => this.items = items,
    //   error => console.log('Error fetching items')
    // );
    this._itemsApiService.fetchItems().subscribe(
      items => this.items = items,
      error => console.log('Error fetching items')
    );
  }
}
