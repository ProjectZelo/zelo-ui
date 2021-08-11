import { ModuleWithProviders, NgModule } from '@angular/core';
import { ZeloConfigService } from '@zelo/services/config/config.service';
import { ZELO_APP_CONFIG } from '@zelo/services/config/config.constants';

@NgModule()
export class ZeloConfigModule {
    /**
     * Constructor
     */
    constructor(private _zeloConfigService: ZeloConfigService) {
    }

    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders<ZeloConfigModule> {
        return {
            ngModule: ZeloConfigModule,
            providers: [
                {
                    provide: ZELO_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
