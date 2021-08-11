import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeloHighlightComponent } from '@zelo/components/highlight/highlight.component';

@NgModule({
    declarations: [
        ZeloHighlightComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ZeloHighlightComponent
    ]
})
export class ZeloHighlightModule {
}
