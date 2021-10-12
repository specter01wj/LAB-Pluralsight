import { Component, Input } from '@angular/core';

@Component({
    selector: 'saa-tabs-pane',
    templateUrl: './tabs-pane.component.html'
})

export class TabsPaneComponent {
    @Input() title: string | undefined;
    @Input() active = false;
}
