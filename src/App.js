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
        tech: "React, Redux, NodeJS, Express, JWT, MongoDB",
    },
    {
        id: 2,
        name: "Orderly",
        github: "https://github.com/handcode-stuart/orderly",
        website: "https://www.handcode.co.uk",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae felis tempor, accumsan elit vel, egestas purus.",
        tech: "React, Redux, NodeJS, Express, JWT, MongoDB",
    },
    {
        id: 3,
        name: "FPL stats",
        github: "",
        website: "",
        bio: "",
        tech: "React, Fant",
    },
    {
        id: 4,
        name: "Sales Taxes",
        github: "",
        website: "",
        bio: "",
        tech: "",
    },
    {
        id: 5,
        name: "Spotify clone",
        github: "",
        website: "",
        bio: "",
        tech: "",
    },
    {
        id: 6,
        name: "Duckr",
        github: "",
        website: "",
        bio: "",
        tech: "",
    },
    {
        id: 7,
        name: "Smart task input",
        github: "",
        website: "",
        bio: "",
        tech: "",
    },
    {
        id: 8,
        name: "Swansea FC",
        github: "",
        website: "",
        bio: "",
        tech: "",
    },
    {
        id: 9,
        name: "ReactNodeAuth",
        github: "",
        website: "",
        bio: "",
        tech: "",
    },
    {
        id: 10,
        name: "Site Saver",
        github: "",
        website: "",
        bio: "",
        tech: "",
    },
    {
        id: 11,
        name: "Colllab",
        github: "",
        website: "",
        bio: "",
        tech: "",
    },
    {
        id: 12,
        name: "Guestlist app",
        github: "",
        website: "",
        bio: "",
        tech: "",
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
