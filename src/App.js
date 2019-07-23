import React from "react";

import GlobalStyle from "./components/styles/GlobalStyle";
import Grid from "./components/Grid";

const projects = [
    {
        id: 1,
        name: "CRM",
        github: "https://github.com/handcode-stuart/crm",
        website: "https://www.handcode.co.uk",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae felis tempor, accumsan elit vel, egestas purus.",
        tech: "React, NodeJS, Express",
    },
    {
        id: 2,
        name: "Orderly",
        github: "https://github.com/handcode-stuart/orderly",
        website: "https://www.handcode.co.uk",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae felis tempor, accumsan elit vel, egestas purus.",
        tech: "React, NodeJS, Express",
    },
    {
        id: 3,
        name: "Orderly",
        github: "https://github.com/handcode-stuart/orderly",
        website: "https://www.handcode.co.uk",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae felis tempor, accumsan elit vel, egestas purus.",
        tech: "React, NodeJS, Express",
    },
    {
        id: 4,
        name: "Orderly",
        github: "https://github.com/handcode-stuart/orderly",
        website: "https://www.handcode.co.uk",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae felis tempor, accumsan elit vel, egestas purus.",
        tech: "React, NodeJS, Express",
    },
    {
        id: 5,
        name: "Orderly",
        github: "https://github.com/handcode-stuart/orderly",
        website: "https://www.handcode.co.uk",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae felis tempor, accumsan elit vel, egestas purus.",
        tech: "React, NodeJS, Express",
    },
];

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Grid projects={projects} />
        </>
    );
};

export default App;
