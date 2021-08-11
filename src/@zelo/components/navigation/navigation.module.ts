import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ZeloScrollbarModule } from '@zelo/directives/scrollbar/public-api';
import { ZeloHorizontalNavigationBasicItemComponent } from '@zelo/components/navigation/horizontal/components/basic/basic.component';
import { ZeloHorizontalNavigationBranchItemComponent } from '@zelo/components/navigation/horizontal/components/branch/branch.component';
import { ZeloHorizontalNavigationDividerItemComponent } from '@zelo/components/navigation/horizontal/components/divider/divider.component';
import { ZeloHorizontalNavigationSpacerItemComponent } from '@zelo/components/navigation/horizontal/components/spacer/spacer.component';
import { ZeloHorizontalNavigationComponent } from '@zelo/components/navigation/horizontal/horizontal.component';
import { ZeloVerticalNavigationAsideItemComponent } from '@zelo/components/navigation/vertical/components/aside/aside.component';
import { ZeloVerticalNavigationBasicItemComponent } from '@zelo/components/navigation/vertical/components/basic/basic.component';
import { ZeloVerticalNavigationCollapsableItemComponent } from '@zelo/components/navigation/vertical/components/collapsable/collapsable.component';
import { ZeloVerticalNavigationDividerItemComponent } from '@zelo/components/navigation/vertical/components/divider/divider.component';
import { ZeloVerticalNavigationGroupItemComponent } from '@zelo/components/navigation/vertical/components/group/group.component';
import { ZeloVerticalNavigationSpacerItemComponent } from '@zelo/components/navigation/vertical/components/spacer/spacer.component';
import { ZeloVerticalNavigationComponent } from '@zelo/components/navigation/vertical/vertical.component';

@NgModule({
    declarations: [
        ZeloHorizontalNavigationBasicItemComponent,
        ZeloHorizontalNavigationBranchItemComponent,
        ZeloHorizontalNavigationDividerItemComponent,
        ZeloHorizontalNavigationSpacerItemComponent,
        ZeloHorizontalNavigationComponent,
        ZeloVerticalNavigationAsideItemComponent,
        ZeloVerticalNavigationBasicItemComponent,
        ZeloVerticalNavigationCollapsableItemComponent,
        ZeloVerticalNavigationDividerItemComponent,
        ZeloVerticalNavigationGroupItemComponent,
        ZeloVerticalNavigationSpacerItemComponent,
        ZeloVerticalNavigationComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        ZeloScrollbarModule
    ],
    exports: [
        ZeloHorizontalNavigationComponent,
        ZeloVerticalNavigationComponent
    ]
})
export class ZeloNavigationModule {
}
