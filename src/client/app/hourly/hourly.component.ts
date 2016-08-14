import { Component, OnInit, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'hourly-row',
	templateUrl: 'hourly.component.html'
})
export class HourlyComponent implements OnInit {
	@Input() icon: string;
	@Input() summary: string;
	@Input() time: number;
	@Input() data: any;
	@Input() previous: any;
	iconUrl: string;
	difference: string;

	constructor() { }

	ngOnInit() {
		this.iconUrl = `./assets/icons/${this.data.icon}.png`;
		this.data.time *= 1000;
		this.data.temperature = Math.round(this.data.temperature);

		if (this.previous) {
			if (this.data.temperature > this.previous.temperature) {
				this.difference = 'warmer';
			} else if (this.data.temperature < this.previous.temperature) {
				this.difference = 'cooler';
			} else {
				this.difference = '';
			}
		}
	}

}
