import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
    {
        title: "What is React?",
        content: "React react react react react react react react react",
    },
    {
        title: "Why use React?",
        content: "use use use use use use use use use ",
    },
    {
        title: "How do you use React?",
        content: "use use use use use use use use use use use use use ",
    },
];

const options = [
    {
        label: "The color Red",
        value: "Red",
    },
    {
        label: "The color Green",
        value: "Green",
    },
    {
        label: "The color Blue",
        value: "Blue",
    },
];

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <br />
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            />
        </div>
    );
};
