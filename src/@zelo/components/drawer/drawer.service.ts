import { Injectable } from '@angular/core';
import { ZeloDrawerComponent } from '@zelo/components/drawer/drawer.component';

@Injectable({
    providedIn: 'root'
})
export class ZeloDrawerService {
    private _componentRegistry: Map<string, ZeloDrawerComponent> = new Map<string, ZeloDrawerComponent>();

    /**
     * Constructor
     */
    constructor() {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: ZeloDrawerComponent): void {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): ZeloDrawerComponent | undefined {
        return this._componentRegistry.get(name);
    }
}
