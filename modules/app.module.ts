// app.module.ts
import { LitModule } from '@litstack/core';

import { AppComponent } from './app.component';
import { ItemsModule } from './items/items.module';

@LitModule({
    exports: [
        AppComponent
    ],
    imports: [
        ItemsModule
    ]
})
export class AppModule {

}