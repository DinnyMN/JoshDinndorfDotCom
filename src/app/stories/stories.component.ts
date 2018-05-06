import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

import { ItemsApiService } from '../items-api/items-api.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  items: Item[];

  constructor(private _itemsApiService: ItemsApiService) {
  }

  ngOnInit() {
    this._itemsApiService.fetchItems().subscribe(
      items => this.items = items,
      error => console.log('Error fetching items')
    );
  }
}
