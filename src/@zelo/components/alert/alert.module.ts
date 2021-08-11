import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ZeloAlertComponent } from '@zelo/components/alert/alert.component';

@NgModule({
    declarations: [
        ZeloAlertComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [
        ZeloAlertComponent
    ]
})
export class ZeloAlertModule {
}
