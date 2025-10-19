import React from 'react';
import davidSeating from '../assets/davidSeating.jpeg';

const Hero: React.FC = () => {
    return (
        <div
            className="flex items-center justify-center min-h-screen"
            style={{
                backgroundImage: `url(${davidSeating})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <h1 className="text-4xl font-bold text-cyan-500">DAVID RUALES</h1>
        </div>
    );
};

export default Hero;
