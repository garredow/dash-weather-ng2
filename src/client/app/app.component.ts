import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';
import { WeatherComponent } from './weather/index';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import { Keys } from './shared/keys';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [FORM_DIRECTIVES, WeatherComponent],
    providers: [HTTP_PROVIDERS, JSONP_PROVIDERS, Keys]
})
export class AppComponent {

    constructor() { }
}
