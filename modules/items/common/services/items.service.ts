/**
* items.service
*/
import { LitService } from '@litstack/core';
import { of, merge, Observable } from 'rxjs';
import { mapTo, delay } from 'rxjs/operators';

import { Item } from '../models/item.model';

@LitService()
export class ItemsService {

    private items: Item[] = [
        {
            id: 'uuid-1',
            description: 'Description test',
            price: 100,
            tags: [
                'test-tag',
                'another-test-tag'
            ]
        },
        {
            id: 'uuid-2',
            description: 'Another description test',
            price: 50,
            tags: [
                'yet-another-tag'
            ]
        }
    ];

    /**
     * @method fetchAll
     * @param {string} path
     * @returns {Observable<Item[]>}
     */
    fetchAll(path: string): Observable<Item[]> {
        const res = of(null);
        return merge( // simulate HTTP request or storage call
            res.pipe(mapTo(
                this.getItems(path)
            ), delay(600))
        );
    }

    /**
     * @method fetchById
     * @param {string} id
     * @returns {Observable<Item>}
     */
    fetchById(id: string): Observable<Item> {
        const res = of(null);
        return merge( // simulate HTTP request or storage call
            res.pipe(mapTo(
                this.getItemById(id)
            ), delay(300))
        );
    }

    /**
     * @method getItems
     * @param {string} path
     * @returns {Item[]}
     */
    private getItems(path: string): Item[] {
        return this.items.map(
            (item: Item) => {
                return {
                    id: item.id,
                    description: item.description,
                    meta: {
                        href: path + '/' + item.id
                    }
                }
            }
        );
    }

    /**
     * @method getItemById
     * @param {string} id
     * @returns {Item}
     */
    private getItemById(id: string): Item {
        return this.items.filter(
            (item: Item) => item.id === id
        )[0] || null;
    }
}