
import { expect } from 'chai';

import { TestBed, LitComponentTest } from '@litstack/core/dist/testing';

import { ItemComponent } from './item.component';
import { AppConstants } from '../../../app.constants';
import { SpecConstants } from '../../../spec.constants';

describe('ItemComponent', () => {

    let component: LitComponentTest;
    let expContent: string;

    beforeEach(() => {

        expContent = AppConstants.ITEM_VI + SpecConstants.DEFAULT_CONTENT;
        
        component = TestBed.start(ItemComponent);
    });

    afterEach(() => {

        TestBed.stop();
    });

    it('should return a single item', (done) => {

        component.get('/uuid-1')
                 .expect(200)
                 .expect('Content-Type', expContent)
                 .expect((res) => {
                     expect(res.body.id).to.equal('uuid-1')
                 })
                 .end((err, res) => {
                    if (err) return done(err);
                    done();
                 });
    });

    it('should return 404 if the item is not found', (done) => {

        const notFoundHeader: string = AppConstants.MESSAGE_V1 + 
                                       SpecConstants.DEFAULT_CONTENT;

        component.get('/uuid-5')
                 .expect(404)
                 .expect('Content-Type', notFoundHeader)
                 .expect((res) => {
                     expect(res.body.message).to.not.be.undefined;
                 })
                 .end((err, res) => {
                    if (err) return done(err);
                    done();
                 });
    });
});
