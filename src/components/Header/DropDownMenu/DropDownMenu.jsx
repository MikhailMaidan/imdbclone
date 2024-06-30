import React from 'react';
import './DropDownMenu.scss';

const DropDownMenu = ({ options }) => {
    return (
        <div className="dropdown-menu">
            {options.map((option, index) => (
                <div key={index} className="dropdown-item">
                    {option}
                </div>
            ))}
        </div>
    );
};

export default DropDownMenu;
