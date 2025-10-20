import React from 'react';
import davidHero from '../assets/davidHero.jpg';

const Hero: React.FC = () => {
    return (
        <div
            className="relative flex items-center w-full justify-center min-h-screen bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url(${davidHero})`,
                backgroundPosition: 'center 30%',
            }}
        >
            <div className='relative z-10 text-center mt-64 md:mt-72'>
                <h1 className="text-5xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-10xl font-bold text-white mb-4 drop-shadow-lg">
                DAVID RUALES
                </h1>
            </div>

        </div>
    );
};

export default Hero;
