import React from "react";
import PropTypes from "prop-types";

import StyledButton from "./styles/Button";

const Button = ({ link, text }) => {
    return (
        <StyledButton href={link} target='_blank' rel='noopener noreferrer'>
            {text}
        </StyledButton>
    );
};

Button.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Button;
