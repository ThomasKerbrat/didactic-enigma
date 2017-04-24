import { NgModule } from '@angular/core'

import { DemoLibComponent } from './demo-lib.component'

@NgModule({
    declarations: [
        DemoLibComponent,
    ],
    exports: [
        DemoLibComponent,
    ],
})
export class DemoLibModule { }
