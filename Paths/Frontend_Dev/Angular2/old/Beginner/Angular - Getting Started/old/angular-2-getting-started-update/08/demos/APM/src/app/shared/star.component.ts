import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    starWidth: number;

    @Input() rating: number;
    
    @Output() ratingClicked: EventEmitter<string> =
            new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} is clicked!`);
        console.log(`log: The rating ${this.rating} was clicked!`);
    }

}
