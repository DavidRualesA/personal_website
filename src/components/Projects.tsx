import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    highlights?: string[];
}

const Projects: React.FC = () => {
    const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const projects: Project[] = [
        {
            title: "Halo Educational Analytics Platform",
            description: "Comprehensive student analytics and wellbeing intelligence platform with advanced AI assistant for educational institutions",
            technologies: ["React","TypeScript", "Tailwind CSS","Vite", "Axios", "FastAPI", "Python", "SQLAlchemy", "Sqlite", "Postgress","LangChain", "LangGraph", "Azure OpenAI", "Scikit-learn", "Azure", "GitHub actions"],
            highlights: [
                "Student performance analytics & standardized test analysis",
                "AI assistant with voice input",
                "Machine Learning Model for Risk management"
            ]
        },
        {
            title: "Energy Sector Coordination App",
            description: "Progressive Web Application for coordinating mentors, schools, and sessions in educational programs",
            technologies: ["React", "TypeScript", "Tailwind CSS","FastAPI", "Python", "OpenAI"],
            highlights: [
                "Multi-school coordination system",
                "AI-powered Q&A assistant",
                "Offline support with service workers"
            ]
        },
        {
            title: "Enterprise Project Controls Platform",
            description: "Project controls platform for resources sector with advanced analytics and forecasting",
            technologies: ["Python", "Streamlit", "FastAPI", "Pandas", "SQLAlchemy", "Power BI", "Azure", "Data Lake", "Databricks"],
            highlights: [
                "Cost management with EVM analytics",
                "Risk management with Monte Carlo simulation",
                "AI assistant for project insights"
            ]
        },
        {
            title: "AI-Powered Email Triage System",
            description: "Email automation and response generation for construction industry using AI agents",
            technologies: ["React", "Vite", "Tailwind CSS", "Microsoft Power Automated", "Azure OpenAI", "Langchain", "Langgraph", "SQL"],
            highlights: [
                "Automated email categorization",
                "AI-generated contextual responses",
                "Real-time metrics dashboard"
            ]
        },
        {
            title: "Machine Learning Predictive Model ",
            description: "Machine Learning model that recommended itemes based on customer purchase likelihood",
            technologies: ["Python","Jupyter Notebooks", "Pandas", "NumPy", "Seaborn","Matplotlib", "Statsmodels", "Scikit-learn", "CSV"],
            highlights: [
                "Developed a customer purchase likelihood model using supervised learning (logistic regression, random forest)",
                "Implemented item recommendation engine based on predicted purchase probabilities",
                "Engineered customer behavior features from transaction and session data",
                "Evaluated model performance using ROC-AUC, Precision@K, and F1 metrics",
            ]
        },
    ];

    return (
        <section id="projects" className="relative bg-gray-50 py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={headerRef as React.RefObject<HTMLDivElement>}
                    className={`transition-all duration-1000 ${
                        headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
                        Recent Projects
                    </h2>
                    <p className="text-2xl text-gray-600 mb-20 text-center">
                        AI-powered solutions across education, enterprise, and automation
                    </p>
                </div>

                {/* Projects List */}
                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {project.title}
                            </h3>
                            <p className="text-lg text-gray-700 mb-4">
                                {project.description}
                            </p>

                            {/* Highlights */}
                            {project.highlights && (
                                <ul className="mb-6 space-y-2">
                                    {project.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="flex items-start text-gray-600">
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
