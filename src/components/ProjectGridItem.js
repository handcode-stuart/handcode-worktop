import React from "react";
import PropTypes from "prop-types";

const ProjectGridItem = ({ project }) => {
    return (
        <li>
            {project.name}
            <a href={project.github} target='_blank' rel='noopener noreferrer'>
                Code
            </a>
            <a href={project.website} target='_blank' rel='noopener noreferrer'>
                Website
            </a>
        </li>
    );
};

ProjectGridItem.propTypes = {
    project: PropTypes.object.isRequired,
};

export default ProjectGridItem;
