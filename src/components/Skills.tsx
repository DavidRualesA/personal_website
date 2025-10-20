import React from 'react';

interface SkillCategory {
    title: string;
    skills: string[];
}

const Skills: React.FC = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: "Languages & Core",
            skills: ["Python", "SQL", "JavaScript", "TypeScript", "VBA"]
        },
        {
            title: "AI & ML",
            skills: ["LangChain", "LangGraph", "Scikit-learn", "Pandas", "NumPy", "Seaborn", "Matplotlib"]
        },
        {
            title: "Backend",
            skills: ["FastAPI", "Pydantic", "SQLAlchemy", "RESTful APIs", "Sqlite", "Postgress"]
        },
        {
            title: "Frontend",
            skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "Recharts", "Axios"]
        },
        {
            title: "Cloud & DevOps",
            skills: ["Azure", "Docker", "Git", "GitHub Actions"]
        },
        {
            title: "Analytics & BI",
            skills: ["Power BI", "Excel VBA", "Jupyter Notebooks"]
        }
    ];

    return (
        <section id="skills" className="relative bg-white py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
                    Skills
                </h2>
                <p className="text-2xl text-gray-600 mb-20 text-center">
                    Technical expertise across the full stack
                </p>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-base font-medium"
                                    >
                                        {skill}
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

export default Skills;
