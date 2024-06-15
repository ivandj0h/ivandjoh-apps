import React from "react";
import Link from "next/link";
import { MenuListsItemProps } from "@/lib/interfaces";

const MenuListsItem: React.FC<MenuListsItemProps> = ({ items }) => {
    return (
        <ul className="flex space-x-5">
            {items.map(item => (
                <li key={item.id}>
                    <Link href={item.path} className="flex items-center space-x-2">
                        <i className={item.icon}></i>
                        <span>{item.menuTitle}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MenuListsItem;
