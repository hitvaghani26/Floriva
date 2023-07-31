import React, { useState } from 'react';
import {sort} from "../assets"
const Sort = () => {
    const [selectedOption, setSelectedOption] = useState('popularity');
    const [visible, isVisible] = useState(false);

    function showdropdown() {
        isVisible(!visible)
    }

    function handleOptionChange (str) {
        setSelectedOption(str);
        isVisible(false);

    };
    console.log();
    return (
        <div className='sort-section'>

            <div className={`sort-body ${visible ? 'visible-true' : 'visible-false'}`} >
                <div className={`custom-dropdown ${visible ? 'visible-true' : 'visible-false'}`}>
                    <div className={`custom-dropdown-option ${visible ? 'visible-true' : 'visible-false'}`} 
                    onClick={() => handleOptionChange("popularity")}>
                    popularity
                    </div>
                    <div className='custom-dropdown-option' 
                    onClick={() => handleOptionChange("price-high to low")}>
                    price-high to low
                    </div>
                    <div className='custom-dropdown-option' 
                    onClick={() => handleOptionChange("price-low to high")}>
                    price-low to high
                    </div>
                </div>
            </div>
        <div className='selected-option' onClick={showdropdown}>
        <img src={sort}  alt='sortpng' />
             <p  >{selectedOption}</p>
        </div>
        </div>
    );
};

export default Sort;
