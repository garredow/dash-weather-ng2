import { Component, OnInit, Input, trigger, state, style, animate, transition } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'alert-row',
	templateUrl: 'alert.component.html',
	animations: [
		trigger('showDetail', [
			state('true', style({
				opacity: 1,
				transform: 'translateX(0px)',
				display: 'block'
			})),
			state('false', style({
				opacity: 0,
				transform: 'translateX(-30px)',
				display: 'none'
			})),
			transition('true => false', animate('300ms ease-in')),
			transition('false => true', animate('300ms ease-out'))
		])
	]
})
export class AlertComponent implements OnInit {
	@Input() label: string;
	@Input() description: string;
	showDetail: boolean = false;

	constructor() { }

	ngOnInit() { }

	toggleDetail() {
		this.showDetail = !this.showDetail;
	}

}
