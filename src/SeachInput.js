/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useDebounce from "./useDebounce";

const SeachInput = ({ value, onChange }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onChange, 500)

    function handleChange(event) {
        setDisplayValue(event.target.value);
        debouncedChange(event.target.value);
    }

    return (
        <div className="campoTexto">
            <input type="search" value={displayValue} onChange={handleChange}   />
        </div>
     
        
    );
};

export default SeachInput;