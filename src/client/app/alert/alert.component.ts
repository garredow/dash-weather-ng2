import { Component, OnInit, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'alert-row',
	templateUrl: 'alert.component.html'
})
export class AlertComponent implements OnInit {
	@Input() label: string;
	@Input() description: string;
	showDetail: boolean = false;

	constructor() { }

	ngOnInit() { }

	toggleDetail() {
		this.showDetail = !this.showDetail;
		console.log(this.showDetail);
	}

}
