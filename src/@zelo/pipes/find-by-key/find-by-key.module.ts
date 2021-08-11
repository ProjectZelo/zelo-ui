import { NgModule } from '@angular/core';
import { ZeloFindByKeyPipe } from '@zelo/pipes/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [
        ZeloFindByKeyPipe
    ],
    exports: [
        ZeloFindByKeyPipe
    ]
})
export class ZeloFindByKeyPipeModule {
}
