import React from "react";

const data = [
    {
        id: 1,
        name: "CRM",
        github: "https://github.com/handcode-stuart/crm",
        website: "https://www.handcode.co.uk",
    },
    {
        id: 2,
        name: "Orderly",
        github: "https://github.com/handcode-stuart/orderly",
        website: "https://www.handcode.co.uk",
    },
];

const App = () => {
    return (
        <div>
            <h1>App</h1>
            <ul>
                {data.map(proj => (
                    <li key={proj.id}>
                        {proj.name}
                        <a href={proj.github} target='_blank' rel='noopener noreferrer'>
                            Code
                        </a>
                        <a href={proj.website} target='_blank' rel='noopener noreferrer'>
                            Website
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
