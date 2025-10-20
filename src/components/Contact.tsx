import React from 'react';

interface ContactMethod {
    label: string;
    value: string;
    href: string;
    icon: React.ReactNode;
}

const Contact: React.FC = () => {
    const contactMethods: ContactMethod[] = [
        {
            label: "Email",
            value: "david.ruales@outlook.com",
            href: "mailto:david.ruales@outlook.com",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/davidruales061293",
            href: "https://www.linkedin.com/in/davidruales061293",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        },
        {
            label: "Location",
            value: "Perth, Australia",
            href: "#",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        }
    ];

    return (
        <section id="contact" className="relative bg-white py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
                    Get in Touch
                </h2>
                <p className="text-xl text-gray-600 mb-20 text-center">
                    Let's build something that matters
                </p>

                {/* Contact Methods */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {contactMethods.map((method, index) => (
                        <a
                            key={index}
                            href={method.href}
                            target={method.label !== "Email" ? "_blank" : undefined}
                            rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
                            className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                        >
                            <div className="text-blue-600 mb-4">
                                {method.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {method.label}
                            </h3>
                            <p className="text-gray-600">
                                {method.value}
                            </p>
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <p className="text-2xl text-gray-900 font-semibold mb-6">
                        Interested in working together?
                    </p>
                    <a
                        href="mailto:davidruales93@gmail.com"
                        className="inline-block bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 text-lg"
                    >
                        Send me an email
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
