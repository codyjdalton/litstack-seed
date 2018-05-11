/**
 * item.component
 */
import { LitComponent } from '@litstack/core';
import { HttpRequest, HttpResponse } from '@litstack/core/dist/http';
import { GetMapping } from '@litstack/core/dist/http/mappings';

import { Item } from '../../common/models/item.model';
import { ItemsService } from '../../common/services/items.service';

@LitComponent()
export class ItemComponent {

    constructor(private itemsService: ItemsService) {
    }
    
    @GetMapping({
        path: ':id',
        produces: 'application/vnd.items.v1+json'
    })
    getItem(req: HttpRequest, res: HttpResponse): void {

        const id: string = req.params.id;

        // fetch an item
        this.itemsService.fetchById(req.params.id)
            .subscribe(
                (item: Item) => this.onItem(id, item, res)
            );
    }

    private onItem(id: string, item: Item, res: HttpResponse): void {

        if(!item) {
            res.errored(404, {
                message: "Unable to find item with id:" + id
            });

            return;
        }
        
        res.success(item);
    }
}