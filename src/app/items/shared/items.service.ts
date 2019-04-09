import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Item } from './item';
import { AppConfig } from 'src/app/shared/app-config';

import { CustomHttpService } from 'src/app/core/custom-http.service';
import { AppConfigService } from 'src/app/shared/app-config.service';

@Injectable()
export class ItemsService {

  private config: AppConfig;
  private itemToEdit: Item;

  constructor(
    private http: CustomHttpService,
    private configObject: AppConfigService
  ) {
    this.config = this.configObject.config;
  }

  getAllItems(): Observable<Item[]> {
    const requestUrl = `${this.config.baseUrl}`;
    return this.http.get(requestUrl);
  }

  saveNewItem(payload: object): Observable<Item> {
    const requestUrl = `${this.config.baseUrl}`;
    return this.http.post(requestUrl, payload);
  }

  updateItem(payload: object): Observable<Item> {
    const requestUrl = `${this.config.baseUrl}/${payload['id']}`;
    return this.http.put(requestUrl, payload);
  }

  removeItem(id: string): Observable<any> {
    const requestUrl = `${this.config.baseUrl}/${id}`;
    return this.http.delete(requestUrl);
  }

  set item(item: Item) {
    this.itemToEdit = item;
  }

  get item(): Item {
    return this.itemToEdit;
  }
}

