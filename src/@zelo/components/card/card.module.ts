import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeloCardComponent } from '@zelo/components/card/card.component';

@NgModule({
    declarations: [
        ZeloCardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ZeloCardComponent
    ]
})
export class ZeloCardModule {
}
