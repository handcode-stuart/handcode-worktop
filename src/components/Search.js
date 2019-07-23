import React from "react";
import PropTypes from "prop-types";

import StyledSearch from "./styles/Search";

const Search = ({ projects, onFilter }) => {
    const doFilter = e => {
        const filteredProjects = projects.filter(proj => {
            proj.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
        onFilter(filteredProjects);
    };

    return (
        <StyledSearch>
            <input type='text' placeholder='Search by name...' onChange={e => doFilter(e)} />
        </StyledSearch>
    );
};

Search.propTypes = {
    projects: PropTypes.array,
    onFilter: PropTypes.func,
};

export default Search;
