import styled from "styled-components";

export default styled.a`
    padding: 6px 8px;
    display: block;
    text-decoration: none;
    color: #fff;
    border-radius: 4px;
    margin-right: 4px;
    border: 2px solid #fff;
    transition: border-color 250ms ease-in-out, color 250ms ease-in-out;

    &:hover {
        border-color: #404040;
        color: #404040;
    }
`;
