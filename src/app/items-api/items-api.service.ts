import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../models/item';
import { items } from './items';

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
  return of(items.sort((a, b) => { return b.time > a.time ? 1 : -1; }));
}
