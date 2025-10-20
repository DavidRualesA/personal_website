import React from 'react';

interface ExperienceItem {
    year: string;
    company: string;
    role: string;
    description: string;
}

const Experience: React.FC = () => {
    const experiences: ExperienceItem[] = [
        {
            year: "2015",
            company: "Abbott Laboratories",
            role: "Engineer Intern",
            description: "Started my journey in engineering and process optimization at a global healthcare company."
        },
        {
            year: "2016",
            company: "Constructora Melendez S.A.",
            role: "Project & Data Analyst",
            description: "Applied data analysis to construction projects, improving decision-making and resource planning."
        },
        {
            year: "2017",
            company: "Tecnoquimicas S.A.",
            role: "Process & Data Engineer",
            description: "Engineered data-driven process improvements in pharmaceutical manufacturing."
        },
        {
            year: "2018",
            company: "Beaumonde on the Point",
            role: "Supply Chain & Logistics Data Analyst",
            description: "Optimized supply chain operations through data analysis and logistics improvements."
        },
        {
            year: "2020",
            company: "Lynch Group",
            role: "Data Analyst & Process Optimization Specialist",
            description: "Achieved 33% cost reduction through ML predictive models and Power BI dashboards."
        },
        {
            year: "2023",
            company: "Lynch Group",
            role: "Senior Data & Operations Analyst",
            description: "Deployed ML models that increased profitability by 15% and reduced transport costs by 12%."
        },
        {
            year: "2024",
            company: "Dataclysm",
            role: "Lead ML & Data Scientist",
            description: "Building AI-powered analytics for Australian schools. Developed ML models for student risk detection and AI assistants that reduced response times by 99.9%."
        }
    ];

    return (
        <section id="experience" className="relative bg-white py-20 md:py-32">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
                    Experience
                </h2>
                <p className="text-xl text-gray-600 mb-20 text-center">
                    10+ years building intelligent systems
                </p>

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

                            {/* Content - alternating sides on desktop */}
                            <div className={`flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                <div className={`ml-32 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            {exp.role}
                                        </h3>
                                        <p className="text-xl font-semibold text-blue-600">
                                            {exp.company}
                                        </p>
                                        <p className="text-lg text-gray-600 leading-relaxed mt-3">
                                            {exp.description}
                                        </p>
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
