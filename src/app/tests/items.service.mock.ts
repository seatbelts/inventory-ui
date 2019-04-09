import { Observable, of } from 'rxjs';
import { Item } from '../items/shared/item';
import { items } from './items.data';

export const ItemsServiceMock = {

  getAllItems: () => of(items),
  saveNewItem: (item) => of(item),
  updateItem: (id, item) => of(item),
  removeItem: (id) => of(items),
  item: (item) => item,

};

