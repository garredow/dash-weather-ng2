import { Injectable } from '@angular/core';
import { Jsonp, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Keys } from '../shared/keys';

@Injectable()
export class WeatherService {
	useSampleData: boolean = true;

	constructor(private _http: Http, private _jsonp: Jsonp, private _keys: Keys) { }

	getWeather(coords: any) {
		if (!this.useSampleData) {
			let url: string = `https://api.forecast.io/forecast/${this._keys.forecastIO}/${coords.latitude},${coords.longitude}?callback=JSONP_CALLBACK`;
			return this._jsonp.get(url)
				.map((res: any) => res._body)
				.toPromise()
				.catch((err: any) => {
					Promise.reject(err);
				});
		} else {
			return this._http.get('app/weather/sample_data.json')
			.map((res: Response) => res.json())
			.toPromise()
			.catch((err: any) => {
				Promise.reject(err);
			});
		}
	}

	getLocation(coords: any) {
		if (this.useSampleData) {
			coords = {
				latitude: 39.986855,
				longitude: -75.196442
			};
		}

		let url: string = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&key=${this._keys.google}`;
		return this._http.get(url)
			.map((res: Response) => res.json())
			.toPromise()
			.catch((err: any) => {
				Promise.reject(err);
			});
	}

	_handleError(err: any) {
		console.log(err);
		return Observable.throw(err);
	}
}
