
import { expect } from 'chai';

import { TestBed, LitComponentTest } from '@litstack/core/dist/testing';

import { AppConstants } from '../app.constants';
import { ItemsComponent } from './items.component';
import { SpecConstants } from '../spec.constants';

describe('ItemsComponent', () => {

    let component: LitComponentTest;

    beforeEach(() => {
        
        component = TestBed.start(ItemsComponent);
    });

    afterEach(() => {

        TestBed.stop();
    });

    it('should return a list of items', (done) => {

        const expContent: string = AppConstants.ITEMS_V1 + 
                                   SpecConstants.DEFAULT_CONTENT;

        component.get('/')
                 .expect(200)
                 .expect('Content-Type', expContent)
                 .end((err, res) => {
                    if (err) return done(err);
                    done();
                 });
    });
});
