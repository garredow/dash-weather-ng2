import { Component } from '@angular/core';
import { WeatherComponent } from './weather/index';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
  entryComponents: [WeatherComponent]
})
export class AppComponent {
  title = 'app works!';
}
