import React from "react";
import ProjectGridItem from "./components/ProjectGridItem";

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
                    <ProjectGridItem key={proj.id} project={proj} />
                ))}
            </ul>
        </div>
    );
};

export default App;
