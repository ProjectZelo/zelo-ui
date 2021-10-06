import { NgModule } from '@angular/core';
import { ZeloScrollResetDirective } from '@Zelo/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        ZeloScrollResetDirective
    ],
    exports: [
        ZeloScrollResetDirective
    ]
})
export class ZeloScrollResetModule {
}
