import React from 'react';
import davidFamily from '../assets/davidFamily.jpg';
import haloV0 from '../assets/halov.0.jpeg';
import haloVF from '../assets/halov.f.jpeg';

const About: React.FC = () => {
    return (
        <section id="about" className="relative bg-white py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Personal Story Section */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
                        Moving Countries
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p className='text-2xl'>
                                "Where should we go for our honeymoon?"... That was the question my wife and I  asked ourselves. 
                                We chose Australia, not just for a vacation, but for growth.
                            </p>
                            <p className='text-2xl'>
                                What began as a decision to study and develop professionally turned into something more.
                                We fell in love with this country, its peaceful rhythm, joyful way of life, and
                                the freedom to think, create, and simply be.
                            </p>
                            <p className='text-2xl'>
                                So, we decided to stay. In march 2025, we became citizens and 
                                Australia officially became home.
                            </p>
                            <p className="text-2xl font-semibold text-gray-900">
                                But one thing hasn't changed:
                                I'm still here loving coding and building systems that solve real problems,
                                raising a family, and training for the day my little one and I 
                                win a father-daughter day competition.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src={davidFamily}
                                alt="David with family in Australia"
                                className="rounded-2xl shadow-2xl w-full h-auto"
                            />
                        </div>
                    </div>
                </div>

                {/* Profesional Profile */}
                <div className="mb-20 py-16 bg-gradient-to-r from-blue-50 to-purple-50 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-16 lg:px-16 rounded-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                        Who am I?
                    </h2>
                    <div className="max-w-4xl space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p className='text-2xl'> 
                            I'm David Ruales, an engineer passionate about turning ideas into intelligent systems. 
                            I've got about nine years of experience across industries, I've blended my background in engineering, data science, and AI/ML to design solutions.
                            What drives me is purpose, building tools or systems that help people make better decisions
                            Today, I focus on creating meaningful, scalable AI systems that merge innovation with impact.
                            I've seen how the right mix of data, technology, and human insight can create real change. 
                            Whether I'm coding an agent that interprets natural language, designing a Machine Learnign model, or Analysing data, 
                            I bring curiosity, empathy, and a love for building things that matter.
                        </p>

                    </div>
                </div>

                {/* Halo Education - Proudest Work */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Building for Future Generations
                    </h2>
                    <p className="text-2xl text-gray-700 mb-12 max-w-3xl">
                        <span className="font-bold text-blue-900">Halo Education</span> is my most recent project development. 
                        Halo is an AI-powered analytics platform for Australian schools aim to help teachers, leaders and parents to 
                        improve health and wellbeing of students.
                    </p>

                    {/* Before and After */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="relative group">
                            <div className="absolute -top-4 left-4 bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold z-10">
                                Where it started
                            </div>
                            <img
                                src={haloV0}
                                alt="Halo Education - Paper prototype"
                                className="rounded-xl shadow-lg w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <p className="mt-4 text-gray-600 italic">
                                Hand-sketched dashboard design on paper
                            </p>
                        </div>
                        <div className="relative group">
                            <div className="absolute -top-4 left-4 bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold z-10">
                                Where it is now
                            </div>
                            <img
                                src={haloVF}
                                alt="Halo Education - Production platform"
                                className="rounded-xl shadow-lg w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <p className="mt-4 text-gray-600 italic">
                                Live platform serving Australian schools
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
                        <h3 className="text-4xl font-bold text-gray-900 mb-4">The Impact</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-blue-600 font-bold mr-3">→</span>
                                <span className='text-2xl'>ML models developed to identify at-risk students before they fall behind</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 font-bold mr-3">→</span>
                                <span className='text-2xl'>AI Assistant that answers plain English questions about student data in seconds</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 font-bold mr-3">→</span>
                                <span className='text-2xl'>Enabling early intervention for attendance, performance, and wellbeing issues</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
