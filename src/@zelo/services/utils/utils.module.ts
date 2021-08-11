import { NgModule } from '@angular/core';
import { ZeloUtilsService } from './utils.service';

@NgModule({
    providers: [
        ZeloUtilsService
    ]
})
export class ZeloUtilsModule {
    /**
     * Constructor
     */
    constructor(private _zeloUtilsService: ZeloUtilsService) {
    }
}
