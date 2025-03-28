import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AccordionPaneComponent } from './accordion-pane/accordion-pane.component';

@Component({
    selector: 'saa-accordion',
    templateUrl: './accordion.component.html'
})

export class AccordionComponent {
    @ContentChildren(AccordionPaneComponent) items: QueryList<AccordionPaneComponent> | undefined;
    activeIndex: number | null | undefined;

    selectItem(index: number): void {
        this.activeIndex = this.activeIndex != index ?  index : null; 
    }
}
