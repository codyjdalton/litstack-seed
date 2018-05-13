import { expect } from 'chai';

import { TestBed, LitComponentTest } from '@litstack/core/dist/testing';

import { AppComponent } from './app.component';
import { AppConstants } from './app.constants';
import { SpecConstants } from './spec.constants';

describe('AppComponent', () => {

    let component: LitComponentTest;

    beforeEach(() => {
        
        component = TestBed.start(AppComponent);
    });

    afterEach(() => {

        TestBed.stop();
    });

    it('should return a welcome message', (done) => {

        const expHeader: string = AppConstants.MESSAGE_V1 +
                                  SpecConstants.DEFAULT_CONTENT

        component.get('/')
                 .expect(200)
                 .expect('Content-Type', expHeader)
                 .expect((res) => {
                   expect(res.body.message)
                   .to.equal(AppConstants.WELCOME_MESSAGE);
                 })
                 .end((err, res) => {
                    if (err) return done(err);
                    done();
                 });
    });
});
