import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ZeloHorizontalNavigationComponent } from '@zelo/components/navigation/horizontal/horizontal.component';
import { ZeloNavigationService } from '@zelo/components/navigation/navigation.service';
import { ZeloNavigationItem } from '@zelo/components/navigation/navigation.types';

@Component({
    selector: 'zelo-horizontal-navigation-divider-item',
    templateUrl: './divider.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZeloHorizontalNavigationDividerItemComponent implements OnInit, OnDestroy {
    @Input() item: ZeloNavigationItem;
    @Input() name: string;

    private _zeloHorizontalNavigationComponent: ZeloHorizontalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _zeloNavigationService: ZeloNavigationService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the parent navigation component
        this._zeloHorizontalNavigationComponent = this._zeloNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._zeloHorizontalNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
