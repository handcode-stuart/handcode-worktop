import styled from "styled-components";

export default styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;

    @media only screen and (min-width: 740px) {
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        flex-wrap: wrap;
    }
`;
