import React, { useState } from 'react';
import './DropDownMenu.scss';

const DropDownMenu = ({ options, nestedOptions, nestedSubOptions }) => {
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [activeSubSubmenu, setActiveSubSubmenu] = useState(null);

    const handleMouseEnterSubmenu = (index) => {
        setActiveSubmenu(index);
    };

    const handleMouseLeaveSubmenu = () => {
        setActiveSubmenu(null);
    };

    const handleMouseEnterSubSubmenu = (index) => {
        setActiveSubSubmenu(index);
    };

    const handleMouseLeaveSubSubmenu = () => {
        setActiveSubSubmenu(null);
    };

    return (
        <div className="dropdown-menu">
            {options.map((option, index) => (
                <div
                    key={index}
                    className="dropdown-item"
                    onMouseEnter={() => handleMouseEnterSubmenu(index)}
                    onMouseLeave={handleMouseLeaveSubmenu}
                >
                    {option}
                    {nestedOptions && nestedOptions[index] && activeSubmenu === index && (
                        <div className="nested-dropdown-menu">
                            {nestedOptions[index].map((nestedOption, nestedIndex) => (
                                <div
                                    key={nestedIndex}
                                    className="dropdown-item"
                                    onMouseEnter={() => handleMouseEnterSubSubmenu(nestedIndex)}
                                    onMouseLeave={handleMouseLeaveSubSubmenu}
                                >
                                    {nestedOption}
                                    {nestedSubOptions && nestedSubOptions[index] && nestedSubOptions[index][nestedIndex] && activeSubSubmenu === nestedIndex && (
                                        <div className="sub-nested-dropdown-menu">
                                            {nestedSubOptions[index][nestedIndex].map((subNestedOption, subNestedIndex) => (
                                                <div key={subNestedIndex} className="dropdown-item">
                                                    {subNestedOption}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DropDownMenu;


