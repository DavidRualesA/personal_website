import React from 'react';

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    location: string;
}

const Experience: React.FC = () => {
    const experiences: ExperienceItem[] = [
        {
            company: "Dataclysm",
            role: "Lead ML & Data Scientist",
            period: "Dec 2024 - Present",
            location: "Perth, Australia"
        },
        {
            company: "Lynch Group",
            role: "Senior Data & Operations Analyst",
            period: "Mar 2023 - Apr 2025",
            location: "Perth, Australia"
        },
        {
            company: "Lynch Group",
            role: "Data Analyst & Process Optimization Specialist",
            period: "Apr 2020 - Feb 2023",
            location: "Perth, Australia"
        },
        {
            company: "Beaumonde on the Point",
            role: "Supply Chain & Logistics Data Analyst",
            period: "Jun 2018 - Mar 2020",
            location: "Perth, Australia"
        },
        {
            company: "Tecnoquimicas S.A.",
            role: "Process & Data Engineer",
            period: "Oct 2017 - Jan 2018",
            location: "Cali, Colombia"
        },
        {
            company: "Constructora Melendez S.A.",
            role: "Project & Data Analyst",
            period: "Feb 2016 - Oct 2017",
            location: "Cali, Colombia"
        },
        {
            company: "Abbott Laboratories",
            role: "Engineer Intern",
            period: "May 2015 - Nov 2015",
            location: "Cali, Colombia"
        }
    ];

    return (
        <section id="experience" className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                    Experience
                </h2>
                <p className="text-2xl text-gray-600 mb-16">
                    9+ years of experience
                </p>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-blue-400"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className="relative mb-8 md:mb-12">
                            <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Timeline dot */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                                {/* Content card */}
                                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-blue-600">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {exp.role}
                                        </h3>
                                        <p className="text-lg font-semibold text-blue-600 mb-3">
                                            {exp.company}
                                        </p>
                                        <div className="flex flex-col gap-1 text-sm text-gray-600">
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {exp.period}
                                            </span>
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
