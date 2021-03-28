export type MenuItemType = {
    menuItemTitle?: string;
    comboHeader?:string;
    content: string;
}

export type MapStyles = {
    position: string;
    width: string;
    height: string;
}

export type HandleScroll = () => void;