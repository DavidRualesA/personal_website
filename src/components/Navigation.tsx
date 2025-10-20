import React, {useState} from "react";

const Navigation: React.FC = () => {
    // State to track if the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    // Function to toggle mobile menu
    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to close menu when a link is clicked
    const handleLinkClick = (): void => {
        setIsMenuOpen(false);
    };
    
    // Navigation menu items
    const navItems = [
        {name: 'About', href: '#about'},
        {name: 'Experience', href: '#experience'},
        {name: 'Skills', href: '#skills'},
        {name: 'Projects', href: '#projects'},
        {name: 'Contact', href: '#contact'},

    ];

    return(
        <nav className="fixed top-0 left-0 right-0 bg-black text-white z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo/Name - Left side */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold tracking-tight hover:text-gray-300 transition-colors duration-300"> DR </a>
                    </div>

                    {/* Desktop Menu - Right Side (hidden on mobile) */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-base font-semibold uppercase tracking-wider hover:text-gray-300 transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                        ))}
                    </div>

                    {/* Hamburger Icon - Mobile Only */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-md hover:bg-gray-900 transition-colors duration-300"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill= "none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke= "currentColor"
                        >
                            {isMenuOpen ? (
                                // X icon when menu is opened
                                <path d = "M6 18L18 6M6 6l12 12" />
                            ) : (
                                // Hamburger icon when menu is closed
                                <path d = "M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (shown when isMenuOpen is true) */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
                    {navItems.map((item)=> (
                     <a
                        key={item.name}
                        href={item.href}
                        onClick={handleLinkClick}
                        className="block px-3 py-2 text-lg font-semibold uppercase tracking-wider hover:bg-gray-900 transition-colors duration-300"
                     >
                        {item.name}
                    </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navigation