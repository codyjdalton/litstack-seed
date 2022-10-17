/**
 * app.component
 */
import { LitComponent } from '@litstack/core';
import { HttpRequest, HttpResponse } from '@litstack/core';
import { GetMapping } from '@litstack/core';

import { AppConstants } from './app.constants';

@LitComponent()
export class AppComponent {
    
    @GetMapping({
        produces: AppConstants.MESSAGE_V1
    })
    home(res: HttpResponse) {
        res.success({
            message: AppConstants.WELCOME_MESSAGE
        });
    }
}