import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

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


    of(2, 4, 6).pipe(
      map(item => item * 2),
      tap(item => console.log(item)),













      
      take(2)
    ).subscribe(console.log);


    from([20, 15, 10, 5])
      .pipe(
        tap(item => console.log(`emitted item ... ${item}`)),
        map(item => item * 2),
        map(item => item - 10),
        map(item => {
          if(item === 0) {
            throw new Error('zero detected');
          }
          return item;
        }),
        take(3)
      )
      .subscribe(
        item => console.log(`Resulting item: ${item}`),
        err => console.log(`Error occurred: ${err}`),
        () => console.log(`Completed!`),
      );


  }


}
