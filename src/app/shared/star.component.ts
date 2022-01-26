import { Component, EventEmitter, Input, OnChanges, Output } from  '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{ //Building a nested component
    @Input() rating: number;
    starWidth: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    OnClick() {
        this.notify.emit(`The rating ${this.rating} was clicked`);
    }

    ngOnChanges(): void{
        this.starWidth = this.rating * 75 / 5;
    }
}