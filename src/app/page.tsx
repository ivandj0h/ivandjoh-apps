import React from 'react';

const HomePage: React.FC = () => {
    const lines = Array.from({ length: 60 }, (_, i) => i);

    return (
        <main>
            <div className="max-w-7xl">
                <h1 className="text-4xl leading-tight">ivandjoh.com</h1>
            </div>

            {lines.map((i) => (
                <p key={i}>{`baris ke ${i}`}</p>
            ))}
        </main>
    );
};

export default HomePage;
