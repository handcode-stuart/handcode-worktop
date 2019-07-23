import React from "react";
import PropTypes from "prop-types";

import GridItem from "./GridItem";
import StyledGrid from "./styles/Grid";

const Grid = ({ projects }) => {
    return (
        <StyledGrid>
            {projects.map(proj => (
                <GridItem key={proj.id} project={proj} />
            ))}
        </StyledGrid>
    );
};

Grid.propTypes = {
    projects: PropTypes.array,
};

export default Grid;
