export interface MenuItem {
    id: string;
    menuTitle: string;
    pathTitle: string;
    path: string;
    icon: string;
}

export interface MenuListsItemProps {
    items: MenuItem[];
}
