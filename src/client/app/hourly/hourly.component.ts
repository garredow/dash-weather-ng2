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
	iconUrl: string;

	constructor() { }

	ngOnInit() {
		this.iconUrl = `./assets/icons/${this.icon}.png`;
		this.time *= 1000;
	}

}
