import React from 'react';
import Link from 'next/link';
import MenuListsItem from "@/components/section/MenuListsItem";
import {MENU_ITEMS} from "@/lib/constants";

const Header: React.FC = () => {
    return (
        <div className="bg-white sticky top-0 z-40 py-5 shadow">
            <div className="w-11/12 md:w-4/5 m-auto flex justify-between items-center">
                <Link href="/">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-4xl font-bold">ivandjoh.com</h1>
                    </div>
                </Link>
                <div className="hidden md:flex space-x-5 text-sm font-semibold">
                    <MenuListsItem items={MENU_ITEMS} />
                </div>
                <div className="flex items-center space-x-5">
                    <Link href="/register">
                        <button className="px-5 py-2 text-indigo-600 font-semibold">
                            Register
                        </button>
                    </Link>
                    <Link href="/login">
                        <button className="px-5 py-2 border border-indigo-600 rounded-md text-indigo-600 font-semibold">
                            SignIn
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
