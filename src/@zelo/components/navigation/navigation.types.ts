import { IsActiveMatchOptions } from '@angular/router';

export interface ZeloNavigationItem {
    id?: string;
    title?: string;
    subtitle?: string;
    type:
    | 'aside'
    | 'basic'
    | 'collapsable'
    | 'divider'
    | 'group'
    | 'spacer';
    hidden?: (item: ZeloNavigationItem) => boolean;
    active?: boolean;
    disabled?: boolean;
    link?: string;
    externalLink?: boolean;
    target?:
    | '_blank'
    | '_self'
    | '_parent'
    | '_top'
    | string;
    exactMatch?: boolean;
    isActiveMatchOptions?: IsActiveMatchOptions;
    function?: (item: ZeloNavigationItem) => void;
    classes?: {
        title?: string;
        subtitle?: string;
        icon?: string;
        wrapper?: string;
    };
    icon?: string;
    badge?: {
        title?: string;
        classes?: string;
    };
    children?: ZeloNavigationItem[];
    meta?: any;
}

export type ZeloVerticalNavigationAppearance =
    | 'default'
    | 'compact'
    | 'dense'
    | 'thin';

export type ZeloVerticalNavigationMode =
    | 'over'
    | 'side';

export type ZeloVerticalNavigationPosition =
    | 'left'
    | 'right';
