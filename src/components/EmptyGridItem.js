import React from "react";
import StyledEmptyGridItem from "./styles/EmptyGridItem";

const GridItem = ({ project }) => {
    return (
        <StyledEmptyGridItem>
            <h4>No projects found...</h4>
        </StyledEmptyGridItem>
    );
};

export default GridItem;
