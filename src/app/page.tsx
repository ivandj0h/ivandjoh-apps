"use client"

import React, { useState, MouseEvent } from 'react';
import { Button } from '@/components/ui/button';
import LoremContent from "@/components/section/LoremContent";

const Home: React.FC = () => {
    const [count, setCount] = useState(0);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        setCount(count + 30);
    };

    return (
        <>
            <div className='flex p-4 justify-center'>
                <Button onClick={handleClick}>Generate Text</Button>
            </div>
            <div>
                <LoremContent count={count} />
            </div>
        </>
    );
};

export default Home;
