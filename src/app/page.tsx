"use client"


import React, { MouseEvent } from 'react';
import { Button } from '@/components/ui/button';

const Home: React.FC = () => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked');
  };

  return (
      <>
        <div className='flex p-4 justify-center'>
          <Button onClick={handleClick}>Hello World!</Button>
        </div>
      </>
  );
};

export default Home;
