// app.module.ts
import { LitModule } from '@litstack/core/dist';

import { AppComponent } from './app.component';

@LitModule({
    exports: [
        AppComponent
    ]
})
export class AppModule {

}