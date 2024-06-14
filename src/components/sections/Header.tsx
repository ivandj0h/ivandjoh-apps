import React from 'react';
import Image from 'next/image';
import {MENU_HEADER} from '@/lib/constants';
import {Button} from '@/components/ui/button';
import Link from "next/link";

const HeaderSection: React.FC = () => {
    return (
        <div className='flex p-4 shadow-md sticky top-0 z-50 bg-white items-center justify-between'>
            <div className='flex items-center gap-10'>
                <Image src='/logo.svg' alt='logo' width={90} height={40}/>
                <ul className='md:flex gap-8 hidden'>
                    {MENU_HEADER.map((item) => (
                        <Link href={item.path} key={item.id}>
                            <li className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>{item.menuName}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <Button>Login</Button>
        </div>
    );
};

export default HeaderSection;
