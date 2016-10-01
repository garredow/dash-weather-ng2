import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'daily-row',
	templateUrl: 'daily.component.html',
	styleUrls: ['daily.component.css'],
})
export class DailyComponent implements OnInit {
	@Input() data: Daily;
	iconUrl: string;
	minTemp: number;
	maxTemp: number;
	summary: string;

	constructor() { }

	ngOnInit() {
		this.data.time *= 1000;
		this.data.temperatureMin = Math.floor(this.data.temperatureMin);
		this.data.temperatureMax = Math.floor(this.data.temperatureMax);
		this.iconUrl = `./assets/icons/${this.data.icon}.png`;
	}

}

export interface Daily {
	icon: string;
	summary: string;
	time: number;
	temperatureMin: number;
	temperatureMax: number;
	precipProbability: number;
}
