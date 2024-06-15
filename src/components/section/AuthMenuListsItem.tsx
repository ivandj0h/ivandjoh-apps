import React from 'react'
import Link from "next/link";
import {AuthMenuItemProps} from "@/lib/interfaces";

const AuthMenuListsItem: React.FC<AuthMenuItemProps> = ({ items }) => {
    return (
        <ul className="flex">
            {items.map(item => (
                <li key={item.id}>
                    <Link href={item.path} className="flex gap-2 items-center px-5 py-2 text-green-700 font-semibold">
                        {React.createElement(item.icon)}
                        <span>{item.menuTitle}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default AuthMenuListsItem;
