import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener("click", (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setDropDownOpen(false);
        });
    });

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div
                key={option.valew}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select color</label>
                <div
                    onClick={() => setDropDownOpen(!dropDownOpen)}
                    className={`ui selection dropdown ${
                        dropDownOpen ? "visible active" : ""
                    }`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div
                        className={`menu ${
                            dropDownOpen ? "visible transition" : ""
                        }`}
                    >
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
