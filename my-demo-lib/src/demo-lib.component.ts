import { Component } from '@angular/core';

@Component({
    selector: 'demo-lib',
    template: '{{ message }}'
})
export class DemoLibComponent {
    message = 'I am the demo-lib component';
}
