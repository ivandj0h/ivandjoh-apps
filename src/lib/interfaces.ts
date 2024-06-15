import {IconType} from "react-icons";

export interface MenuItem {
    id: string;
    menuTitle: string;
    pathTitle: string;
    path: string;
    icon: IconType;
}

export interface MenuListsItemProps {
    items: MenuItem[];
}

export interface AuthMenuItemProps {
    items: MenuItem[];
}
