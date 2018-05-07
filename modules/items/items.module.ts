// items.module.ts
import { LitModule } from '@litstack/core';

import { ItemComponent } from './components/item/item.component';
import { ItemsComponent } from './items.component';

@LitModule({
    path: 'items',
    exports: [
        ItemComponent,
        ItemsComponent
    ]
})
export class ItemsModule {

}