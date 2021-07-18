import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {AutoUnsubscribe} from "../unsubscribe";
import {EventEmitterService} from "../event-emitter.service";

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
@AutoUnsubscribe
export class SidebarComponent implements OnInit {


	public data:any = {  };
	public subscriptions = [];

	constructor(
		public auth: AuthService,
		private userData : EventEmitterService
	) {

	}
	ngOnInit(): void {
		let userDataEvent = this.userData.getUserData.subscribe((data)=>{
			this.data = data;
		});
		// @ts-ignore
		this.subscriptions.push(userDataEvent);
	}
}
