import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageTitle = 'Acme Product Management';


  ngOnInit() {
  	of(2, 4, 6, 8).subscribe(console.log);

  	from([20, 15, 10, 5]).subscribe(
  		item => console.log(`Resulting item: ${item}`),
  		err => console.log(`Error occurred: ${err}`),
  		() => console.log(`Completed!`),
  	);

  	of('James', 'Mike', 'Peter').subscribe(
  		name => console.log(`Resulting item: ${name}`),
  		err => console.log(`Error occurred: ${err}`),
  		() => console.log(`Completed!`),
  	);
  }


}
