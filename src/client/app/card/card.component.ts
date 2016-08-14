import { Component, OnInit, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-card',
	templateUrl: 'card.component.html'
})
export class CardComponent implements OnInit {
	@Input() label: string;

	constructor() { }

	ngOnInit() { }

}
