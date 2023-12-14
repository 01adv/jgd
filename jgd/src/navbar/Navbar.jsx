import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const triggerRef = useRef(null);

    const categories = [
        {
            name: 'Electronics',
            subcategories: ['TVs', 'Laptops', 'Smartphones'],
        },
        {
            name: 'Clothing',
            subcategories: ['Shirts', 'Jeans', 'Shoes'],
        },
        {
            name: 'Home & Garden',
            subcategories: ['Furniture', 'Kitchenware', 'Decorations'],
        },
    ];

    const handleHover = () => {
        setIsDropdownOpen(true);
    };

    const handleHoverExit = () => {
        setIsDropdownOpen(false);
    };

    const handleProductClick = () => {
        // Redirect to another page or perform other actions
        alert('Redirecting to product page');
    };

    const handleSubcategoryClick = (category, subcategory) => {
        // Implement logic to handle selection and redirect/update page based on category and subcategory
        alert(`Clicked ${category} > ${subcategory}`);
    };

    const handleHoverOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            triggerRef.current &&
            !triggerRef.current.contains(event.target)
        ) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mouseover', handleHoverOutside);
        return () => {
            document.removeEventListener('mouseover', handleHoverOutside);
        };
    }, []);

    return (
        <nav className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-white p-4 md:px-8">
            <div className="flex items-center justify-between">
                <a href="#" className="text-2xl font-bold">My Shop</a>
                <div
                    ref={triggerRef}
                    className="relative"
                    onMouseOver={handleHover}
                    onMouseLeave={handleHoverExit}
                    onClick={handleProductClick}
                >
                    <span className="cursor-pointer">
                        Products
                    </span>
                    <ul
                        ref={dropdownRef}
                        className={`absolute right-0 top-full bg-white shadow-md mt-2 py-2 ${isDropdownOpen ? 'block' : 'hidden'
                            }`}
                    >
                        {categories.map((category) => (
                            <li key={category.name}>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-orange-100 hover:text-orange-500"
                                >
                                    {category.name}
                                </a>
                                <ul className="pl-4">
                                    {category.subcategories.map((subCategory) => (
                                        <li key={`${category.name}-${subCategory}`}>
                                            <a
                                                href="#"
                                                onClick={() => handleSubcategoryClick(category.name, subCategory)}
                                                className="block px-4 py-2 hover:bg-orange-100 hover:text-orange-500"
                                            >
                                                {subCategory}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Add other navigation items as needed */}
            </div>
        </nav>
    );
};

export default Navbar;
