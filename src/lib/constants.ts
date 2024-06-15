import {MenuItem} from "@/lib/interfaces";
import {TbSmartHome} from "react-icons/tb";
import {FcAbout} from "react-icons/fc";
import {MdWorkspacePremium} from "react-icons/md";
import {FaBlog} from "react-icons/fa";
import {FiLock, FiUnlock} from "react-icons/fi";

export const MENU_ITEMS: MenuItem[] = [
    {
        id: '1',
        menuTitle: 'Home',
        pathTitle: 'home',
        path: '/',
        icon: TbSmartHome
    },
    {
        id: '2',
        menuTitle: 'About',
        pathTitle: 'about',
        path: '/about',
        icon: FcAbout
    },
    {
        id: '3',
        menuTitle: 'Portfolio',
        pathTitle: 'portfolio',
        path: '/portfolio',
        icon: MdWorkspacePremium
    },
    {
        id: '4',
        menuTitle: 'Blog',
        pathTitle: 'blog',
        path: '/blog',
        icon: FaBlog
    }
];

export const AUTH_MENU_ITEMS: MenuItem[] = [
    {
        id: '1',
        menuTitle: 'Register',
        pathTitle: 'register',
        path: '/register',
        icon: FiUnlock
    },
    {
        id: '2',
        menuTitle: 'Login',
        pathTitle: 'login',
        path: '/login',
        icon: FiLock
    }
]
