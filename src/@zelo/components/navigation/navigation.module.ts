import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ZeloHorizontalNavigationBasicItemComponent } from './horizontal/components/basic/basic.component';
import { ZeloHorizontalNavigationBranchItemComponent } from './horizontal/components/branch/branch.component';
import { ZeloHorizontalNavigationDividerItemComponent } from './horizontal/components/divider/divider.component';
import { ZeloHorizontalNavigationSpacerItemComponent } from './horizontal/components/spacer/spacer.component';
import { ZeloHorizontalNavigationComponent } from './horizontal/horizontal.component';
import { ZeloVerticalNavigationAsideItemComponent } from './vertical/components/aside/aside.component';
import { ZeloVerticalNavigationBasicItemComponent } from './vertical/components/basic/basic.component';
import { ZeloVerticalNavigationCollapsableItemComponent } from './vertical/components/collapsable/collapsable.component';
import { ZeloVerticalNavigationDividerItemComponent } from './vertical/components/divider/divider.component';
import { ZeloVerticalNavigationGroupItemComponent } from './vertical/components/group/group.component';
import { ZeloVerticalNavigationSpacerItemComponent } from './vertical/components/spacer/spacer.component';
import { ZeloVerticalNavigationComponent } from './vertical/vertical.component';
import { ZeloScrollbarModule } from 'src/@zelo/directives/scrollbar/scrollbar.module';


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
export class ZeloNavModule {
}
