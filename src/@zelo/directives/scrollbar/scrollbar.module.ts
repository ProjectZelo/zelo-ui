import { NgModule } from '@angular/core';
import { ZeloScrollbarDirective } from '@zelo/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        ZeloScrollbarDirective
    ],
    exports: [
        ZeloScrollbarDirective
    ]
})
export class ZeloScrollbarModule {
}
