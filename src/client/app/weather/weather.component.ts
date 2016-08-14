import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { HourlyComponent } from '../hourly/hourly.component';
import { DailyComponent } from '../daily/daily.component';
import { WeatherService } from './index';

@Component({
	moduleId: module.id,
	selector: 'app-weather',
	templateUrl: 'weather.component.html',
	directives: [CardComponent, HourlyComponent, DailyComponent],
	providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
	isDataAvailable: boolean = false;
	weatherData: Promise<any>;
	todayMin: number;
	todayMax: number;
	location: string = 'Sunnyvale, CA';

	constructor(private _weatherService: WeatherService) { }

	ngOnInit() {
		window.navigator.geolocation.getCurrentPosition(
			(res: any) => {
				// console.log('getCurrentPosition: ', res);
				this.getData(res.coords);
			},
			(err: any) => {
				console.warn('getCurrentPosition: ', err);
				let coords: Object = {
					latitude: 39.986855,
					longitude: -75.196442
				};

				this.getData(coords);
			}
		);
	}

	getData(coords: Object) {
		this._weatherService.getWeather(coords)
			.then((res: any) => {
				console.log('weather res: ', res);
				res.currently.temperature = Math.floor(res.currently.temperature);
				this.weatherData = res;
				this.todayMax = Math.floor(res.daily.data[0].temperatureMax);
				this.todayMin = Math.floor(res.daily.data[0].temperatureMin);

				// Update the body's background image. TODO: Find a better way to do this.
				let body: any = document.querySelector('body');
				body.style.backgroundImage = `url('./assets/backgrounds/${res.currently.icon}.jpg')`;

				this.isDataAvailable = true;
			})
			.catch(err => console.log(err));

		this._weatherService.getLocation(coords)
			.then(res => {
				console.log('location: ', res);

				let city: string;
				let state: string;

				res.results[0].address_components.forEach((item: any) => {
					if (item.types[0] === 'locality') {
						city = item.short_name;
					} else if (item.types[0] === 'administrative_area_level_3' && !city) {
						city = item.short_name;
					} else if (item.types[0] === 'administrative_area_level_1') {
						state = item.short_name;
					}
				});

				this.location = `${city}, ${state}`;
			})
			.catch(err => console.log(err));
	}

}
