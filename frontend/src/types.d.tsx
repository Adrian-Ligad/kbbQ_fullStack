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

export type ReviewType = {
    name: string;
    rating: string;
    message: string;
    id: number;
}

export type HandleScroll = () => void;

