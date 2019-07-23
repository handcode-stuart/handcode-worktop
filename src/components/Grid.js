import React from "react";
import PropTypes from "prop-types";

import GridItem from "./GridItem";
import EmptyGridItem from "./EmptyGridItem";
import StyledGrid from "./styles/Grid";

const Grid = ({ projects }) => {
    return (
        <StyledGrid>
            {projects.length > 0 ? (
                projects.map(proj => <GridItem key={proj.id} project={proj} />)
            ) : (
                <EmptyGridItem />
            )}
        </StyledGrid>
    );
};

Grid.propTypes = {
    projects: PropTypes.array,
};

export default Grid;
