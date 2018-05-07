/**
 * item.component
 */
import { LitComponent } from '@litstack/core';
import { HttpRequest, HttpResponse } from '@litstack/core/dist/http';
import { GetMapping } from '@litstack/core/dist/http/mappings';

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
        res.success(this.itemsService.getOne());
    }
}