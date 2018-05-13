/**
 * items.component
 */
import { LitComponent } from '@litstack/core';
import { HttpRequest, HttpResponse } from '@litstack/core/dist/http';
import { GetMapping } from '@litstack/core/dist/http/mappings';

import { AppConstants } from '../app.constants';
import { Item } from './common/models/item.model';
import { ItemsService } from './common/services/items.service';

@LitComponent()
export class ItemsComponent {

    constructor(private itemsService: ItemsService) {
    }
    
    @GetMapping({
        produces: AppConstants.ITEMS_V1
    })
    getItems(req: any, res: HttpResponse) {

        // @TODO: Add this to litstack core
        // something like req.href
        const path: string = req.protocol + '://' + req.get('host') + req.originalUrl;
        
        // fetch all items (async)
        this.itemsService.fetchAll(path)
            .subscribe(
                (items: Item[]) => this.onItems(items, res)
            );
    }

    /**
     * @function onItems
     * @param {Item[]} items 
     * @param {HttpResponse} res 
     */
    private onItems(items: Item[], res: HttpResponse): void {
        // output items
        res.success(items);
    }
}