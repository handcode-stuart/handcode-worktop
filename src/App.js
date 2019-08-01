import React, { useState } from "react";
import PropTypes from "prop-types";

import GlobalStyle from "./components/styles/GlobalStyle";
import Grid from "./components/Grid";
import Search from "./components/Search";

const App = ({ projects }) => {
    const [filteredProjects, setFilteredProjects] = useState(projects);

    return (
        <>
            <GlobalStyle />
            <Search projects={projects} onFilter={setFilteredProjects} />
            <Grid projects={filteredProjects} />
        </>
    );
};

App.propTypes = {
    projects: PropTypes.array,
};

export default App;
