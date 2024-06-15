import {MenuItem} from "@/lib/interfaces";

export const MENU_ITEMS: MenuItem[] = [
    {
        id: '1',
        menuTitle: 'Home',
        pathTitle: 'home',
        path: '/',
        icon: 'TbSmartHome'
    },
    {
        id: '2',
        menuTitle: 'About',
        pathTitle: 'about',
        path: '/about',
        icon: 'FcAbout'
    },
    {
        id: '3',
        menuTitle: 'Portfolio',
        pathTitle: 'portfolio',
        path: '/portfolio',
        icon: 'MdWorkspacePremium'
    },
    {
        id: '4',
        menuTitle: 'Blog',
        pathTitle: 'blog',
        path: '/blog',
        icon: 'FaBlog'
    }
];
