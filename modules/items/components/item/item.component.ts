/**
 * item.component
 */
import { LitComponent } from '@litstack/core';
import { HttpRequest, HttpResponse, HttpNext } from '@litstack/core/dist/http';
import { GetMapping } from '@litstack/core/dist/http/mappings';

import { AppConstants } from '../../../app.constants';
import { Item } from '../../common/models/item.model';
import { ItemsService } from '../../common/services/items.service';

@LitComponent()
export class ItemComponent {

    constructor(private itemsService: ItemsService) {
    }
    
    @GetMapping({
        path: ':id',
        produces: AppConstants.ITEM_VI
    })
    getItem(req: HttpRequest, res: HttpResponse, next: HttpNext): void {

        const id: string = req.params.id;

        // fetch an item
        this.itemsService.fetchById(req.params.id)
            .subscribe(
                (item: Item) => this.onItem(item, res, next)
            );
    }

    @GetMapping({
        path: ':id',
        produces: AppConstants.MESSAGE_V1
    })
    public notFound(req: HttpRequest, res: HttpResponse): void {
        res.errored(404, {
            message: 'Unable to find item with id: ' + req.params.id
        });
    }

    /**
     * @method onItem
     * @param {Item | null} item
     * @param {HttpResponse} res
     */
    private onItem(item: Item, res: HttpResponse, next: HttpNext): void {
        if(item) {
            res.success(item);
            return;
        }

        next();
    }
}