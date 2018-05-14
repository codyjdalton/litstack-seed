// index.ts
import { LitCompiler } from '@litstack/core/dist/compiler';

import { AppModule } from './modules/app.module';

LitCompiler.bootstrap(AppModule, process.env.PORT);