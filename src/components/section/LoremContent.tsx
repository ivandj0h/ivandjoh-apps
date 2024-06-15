import React from 'react';

interface LoremContentProps {
    count: number;
}

const LoremContent: React.FC<LoremContentProps> = ({ count }) => {
    const loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    return (
        <div className="p-4">
            {Array.from({ length: count }, (_, index) => (
                <p key={index} className="mb-2">{loremText}</p>
            ))}
        </div>
    );
};

export default LoremContent;
