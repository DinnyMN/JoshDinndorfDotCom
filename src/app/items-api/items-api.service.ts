import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/item';
import { items } from './items';
import 'rxjs/add/observable/of';

@Injectable()
export class ItemsApiService {
  baseUrl: string;

  constructor() {
    this.baseUrl = '';
  }

  fetchItems(): Observable<any> {
    return lazyFetch(`${this.baseUrl}`);
  }
}

function lazyFetch(url, options?) {
  return Observable.of(items.sort((a, b) => { return b.time > a.time ? 1 : -1; }));
}
