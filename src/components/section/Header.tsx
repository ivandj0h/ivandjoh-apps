import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import MenuListsItem from "@/components/section/MenuListsItem";
import {AUTH_MENU_ITEMS, MENU_ITEMS} from "@/lib/constants";
import AuthMenuListsItem from "@/components/section/AuthMenuListsItem";

const Header: React.FC = () => {
    return (
        <div className="bg-white sticky top-0 z-40 py-5 shadow">
            <div className="w-11/12 md:w-4/5 m-auto flex justify-between items-center">
                <Link href="/">
                    <div className="flex items-center space-x-2">
                        <Image
                            src='/images/logo.svg'
                            alt='logo'
                            width={30}
                            height={30}
                        /> <h1 className="text-2xl font-bold">ivandjoh</h1>
                    </div>
                </Link>
                <div className="hidden md:flex space-x-2 font-semibold">
                    <MenuListsItem items={MENU_ITEMS} />
                </div>
                <div className="flex items-center space-x-2">
                    <AuthMenuListsItem items={AUTH_MENU_ITEMS} />
                </div>
            </div>
        </div>
    );
};

export default Header;
