import React from 'react';
import davidHero from '../assets/davidHero.jpg';

const Hero: React.FC = () => {
    return (
        <div
            className="relative flex items-end w-full justify-center min-h-screen bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url(${davidHero})`,
                backgroundPosition: 'center 30%',
            }}
        >
            {/* Subtle gradient overlay at bottom for text */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'/>

            {/* Position text lower to avoid covering face */}
            <div className='relative z-10 text-center pb-16 md:pb-20 lg:pb-24 animate-fade-in px-4'>
                <h1
                    className="text-5xl md:text-6xl lg:text-8xl xl:text-10xl font-bold text-white mb-4"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)' }}
                >
                    DAVID RUALES
                </h1>
                <p
                    className='text-xl md:text-2xl text-white/90 mb-2'
                    style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
                >
                    AI/ML Backend Engineer
                </p>
                <p
                    className='text-lg md:text-xl text-white/80 mb-8'
                    style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
                >
                    Python • FastAPI • LangChain • React
                </p>
            </div>

        </div>
    );
};

export default Hero;
