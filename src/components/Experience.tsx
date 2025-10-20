import React from 'react';
import cvFile from '../assets/CV David Ruales latest.pdf';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ExperienceItem {
    year: string;
    company: string;
    role: string;
    description: string;
    website: string;
    logoUrl: string;
}

const Experience: React.FC = () => {
    const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const experiences: ExperienceItem[] = [
        {
            year: "2015",
            company: "Abbott Laboratories",
            role: "Engineer Intern",
            description: "Started my journey in engineering and process optimization at a global healthcare company.",
            website: "https://www.aus.abbott/",
            logoUrl: "https://logo.clearbit.com/abbott.com"
        },
        {
            year: "2016",
            company: "Constructora Melendez S.A.",
            role: "Project & Data Analyst",
            description: "Applied data analysis to construction projects, improving decision-making and resource planning.",
            website: "https://constructoramelendez.com/",
            logoUrl: "https://logo.clearbit.com/constructoramelendez.com"
        },
        {
            year: "2017",
            company: "Tecnoquimicas S.A.",
            role: "Process & Data Engineer",
            description: "Engineered data-driven process improvements in pharmaceutical manufacturing.",
            website: "https://www.tqconfiable.com/",
            logoUrl: "https://logo.clearbit.com/tqconfiable.com"
        },
        {
            year: "2018",
            company: "Beaumonde on the Point",
            role: "Supply Chain & Logistics Data Analyst",
            description: "Optimized supply chain operations through data analysis and logistics improvements.",
            website: "https://www.beaumondeotp.com.au/",
            logoUrl: "https://logo.clearbit.com/beaumondeotp.com.au"
        },
        {
            year: "2020",
            company: "Lynch Group",
            role: "Data Analyst & Process Optimization Specialist",
            description: "Achieved 33% cost reduction through ML predictive models and Power BI dashboards.",
            website: "https://www.lynchgroup.com.au/",
            logoUrl: "https://logo.clearbit.com/lynchgroup.com.au"
        },
        {
            year: "2023",
            company: "Lynch Group",
            role: "Senior Data & Operations Analyst",
            description: "Deployed ML models that increased profitability by 15% and reduced transport costs by 12%.",
            website: "https://www.lynchgroup.com.au/",
            logoUrl: "https://logo.clearbit.com/lynchgroup.com.au"
        },
        {
            year: "2024",
            company: "Dataclysm",
            role: "Lead ML & Data Scientist",
            description: "Building AI-powered analytics for Australian schools. Developed ML models for student risk detection and AI assistants that reduced response times by 99.9%.",
            website: "https://dataclysm.com.au/",
            logoUrl: "https://logo.clearbit.com/dataclysm.com.au"
        }
    ];

    return (
        <section id="experience" className="relative bg-gray-50 py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={headerRef as React.RefObject<HTMLDivElement>}
                    className={`transition-all duration-1000 ${
                        headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
                        Experience
                    </h2>
                    <p className="text-2xl text-gray-600 mb-8 text-center">
                        10+ years building intelligent systems
                    </p>

                    {/* Download CV Button */}
                    <div className="flex justify-center mb-20">
                    <a
                        href={cvFile}
                        download="David_Ruales_CV.pdf"
                        className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download CV
                    </a>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Central vertical line */}
                    <div className="absolute left-16 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gray-300"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className="relative mb-16 md:mb-20">
                            {/* Year marker - centered on timeline */}
                            <div className="absolute left-16 md:left-1/2 transform -translate-x-1/2 z-10">
                                <div className="bg-gray-900 text-white font-bold px-4 py-2 rounded-lg shadow-lg text-2xl">
                                    {exp.year}
                                </div>
                            </div>

                            {/* Content with logo on opposite side */}
                            <div className="hidden md:grid md:grid-cols-2 md:gap-8 items-center">
                                {/* Left side */}
                                {index % 2 === 0 ? (
                                    // Description on left
                                    <div className="text-center pr-16">
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold text-gray-900">
                                                {exp.role}
                                            </h3>
                                            <p className="text-xl font-semibold text-blue-600">
                                                {exp.company}
                                            </p>
                                            <p className="text-xl text-gray-600 leading-relaxed mt-3">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    // Logo on left
                                    <div className="flex justify-center pr-16">
                                        <a
                                            href={exp.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-48 h-48 transition-all duration-300 hover:opacity-80"
                                        >
                                            <img
                                                src={exp.logoUrl}
                                                alt={`${exp.company} logo`}
                                                className="w-full h-full object-contain"
                                            />
                                        </a>
                                    </div>
                                )}

                                {/* Right side */}
                                {index % 2 === 0 ? (
                                    // Logo on right
                                    <div className="flex justify-center pl-16">
                                        <a
                                            href={exp.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-48 h-48 transition-all duration-300 hover:opacity-80"
                                        >
                                            <img
                                                src={exp.logoUrl}
                                                alt={`${exp.company} logo`}
                                                className="w-full h-full object-contain"
                                            />
                                        </a>
                                    </div>
                                ) : (
                                    // Description on right
                                    <div className="text-center pl-16">
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold text-gray-900">
                                                {exp.role}
                                            </h3>
                                            <p className="text-xl font-semibold text-blue-600">
                                                {exp.company}
                                            </p>
                                            <p className="text-xl text-gray-600 leading-relaxed mt-3">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Mobile view - description only */}
                            <div className="md:hidden ml-32">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {exp.role}
                                    </h3>
                                    <p className="text-xl font-semibold text-blue-600">
                                        {exp.company}
                                    </p>
                                    <p className="text-2xl text-gray-600 leading-relaxed mt-3">
                                        {exp.description}
                                    </p>
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
