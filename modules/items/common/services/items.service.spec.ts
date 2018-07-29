
import { expect } from 'chai';
import { Injector } from 'super-injector';

import { ItemsService } from './items.service';

import { Item } from '../models/item.model';

describe('ItemComponent', () => {

    let service: ItemsService;

    beforeEach(() => {

        service = Injector.resolve(ItemsService);
    });

    it('should fetch an item by id', (done) => {

        service.fetchById('uuid-1')
            .subscribe(
                (item: Item)=> {
                    expect(item).to.not.be.null;
                    done();
                }
            );
    });

    it('should return null if no item is present', (done) => {
        service.fetchById('none-1')
            .subscribe(
                (item: Item)=> {
                    expect(item).to.be.null;
                    done();
                }
            );
    });

    it('should fetch a list of items', (done) => {

        service.fetchAll('some-path')
            .subscribe(
                (item: Item[])=> {
                    expect(item.length).to.be.above(0);
                    done();
                }
            );
    });
});