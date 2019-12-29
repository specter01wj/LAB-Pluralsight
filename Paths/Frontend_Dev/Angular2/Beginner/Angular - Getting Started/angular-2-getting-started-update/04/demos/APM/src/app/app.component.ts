import { Component } from '@angular/core';

@Component({
	selector: "pm-root",
	template: `<div><h1>{{pageTitle}}</h1>
        		<div>My {{myNum}} Component</div>
    			</div>`
})

export class AppComponent {
	pageTitle: string = "James Wang Product Management!!!";
	myNum: number = 23;
}
