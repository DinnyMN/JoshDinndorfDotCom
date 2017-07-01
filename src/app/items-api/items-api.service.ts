import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import fetch from 'unfetch';

@Injectable()
export class ItemsApiService {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://joshdinndorffunction.azurewebsites.net/api/GetItems?code=stXUEWh7kOJioLGFV1t3DvO9jBkq1t6DW8ID3BoXN7M0roLnD8YxsA==';
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
