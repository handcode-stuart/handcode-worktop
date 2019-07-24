import React from "react";
import PropTypes from "prop-types";
import StyledGridItem from "./styles/GridItem";
import Button from "./Button";

const GridItem = ({ project }) => {
    return (
        <StyledGridItem
            style={
                project.grad && {
                    background: `linear-gradient(45deg, ${project.grad[0]} 0%, ${
                        project.grad[1]
                    } 100%)`,
                }
            }
        >
            <div>
                <h2>{project.name}</h2>
                <p>
                    <strong>{project.tech}</strong>
                </p>
                <p>{project.bio}</p>
            </div>
            <div className='btn-holder'>
                {project.github && <Button link={project.github} text='Code' />}
                {project.website && <Button link={project.website} text='Website' />}
            </div>
        </StyledGridItem>
    );
};

GridItem.propTypes = {
    project: PropTypes.object.isRequired,
};

export default GridItem;
