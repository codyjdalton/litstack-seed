/**
 * app.component
 */
import { LitComponent } from '@litstack/core/dist';
import { HttpRequest, HttpResponse } from '@litstack/core/dist/http';
import { GetMapping } from '@litstack/core/dist/http/mappings';

@LitComponent()
export class AppComponent {
    
    @GetMapping()
    home(req: HttpRequest, res: HttpResponse) {
        res.success({
            message: 'Hello world!'
        });
    }
}