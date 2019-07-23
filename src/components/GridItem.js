import React from "react";
import PropTypes from "prop-types";
import StyledGridItem from "./styles/GridItem";
import Button from "./Button";

const GridItem = ({ project }) => {
    return (
        <StyledGridItem>
            <h2>{project.name}</h2>
            <Button link={project.github} text='Code' />
            <Button link={project.website} text='Website' />
        </StyledGridItem>
    );
};

GridItem.propTypes = {
    project: PropTypes.object.isRequired,
};

export default GridItem;
