import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import fetch from 'unfetch';

@Injectable()
export class ItemsApiService {
  baseUrl: string;
  baseUrl2: string;

  constructor() {
    this.baseUrl = 'assets/items.json';
  }

  fetchItems(): Observable<any> {
    return lazyFetch(`${this.baseUrl}`);
  }
}

function lazyFetch(url, options?) {
  return new Observable(fetchObserver => {
    let cancelToken = false;
    fetch(url, options)
      .then(res => {
        if (!cancelToken) {
          return res.json()
            .then(data => {
              fetchObserver.next(data);
              fetchObserver.complete();
            });
        }
      }).catch(err => fetchObserver.error(err));
    return () => {
      cancelToken = true;
    };
  });
}
