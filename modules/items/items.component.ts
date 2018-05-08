/**
 * items.component
 */
import { LitComponent } from '@litstack/core';
import { HttpRequest, HttpResponse } from '@litstack/core/dist/http';
import { GetMapping } from '@litstack/core/dist/http/mappings';

import { ItemsService } from './common/services/items.service';

@LitComponent()
export class ItemsComponent {

    constructor(private itemsService: ItemsService) {
    }
    
    @GetMapping({
        produces: 'application/vnd.items.v1+json'
    })
    getItems(req: HttpRequest, res: HttpResponse) {
        res.success(this.itemsService.getAll());
    }
}