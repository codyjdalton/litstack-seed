/**
* items.service
*/
import { LitService } from '@litstack/core';

import { Item } from '../models/item.model';

@LitService()
export class ItemsService {

    private items: Item[] = [
        {
            id: 'test-1',
            description: 'Description test'
        },
        {
            id: 'test-2',
            description: 'Description test'
        }
    ];

    getAll(): Item[] {
        return this.items;
    }

    getOne(): Item {
        return this.items[0];
    }
}