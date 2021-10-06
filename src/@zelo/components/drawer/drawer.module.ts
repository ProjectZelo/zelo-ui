import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeloDrawerComponent } from '@zelo/components/drawer/drawer.component';

@NgModule({
    declarations: [
        ZeloDrawerComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ZeloDrawerComponent
    ]
})
export class ZeloDrawerModule {
}
