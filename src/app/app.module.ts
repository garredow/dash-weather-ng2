import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { AlertComponent } from './alert/alert.component';
import { CardComponent } from './card/card.component';
import { DailyComponent } from './daily/daily.component';
import { HourlyComponent } from './hourly/hourly.component';

import { Keys } from './shared/keys';
import { WeatherService } from './weather/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    CardComponent,
    DailyComponent,
    HourlyComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [Keys, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
