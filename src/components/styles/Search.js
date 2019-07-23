import styled from "styled-components";

export default styled.div`
    padding: 10px 10px 20px;

    @media only screen and (min-width: 740px) {
        padding: 10px 10px 20px;
    }

    input {
        font-family: "Open Sans", sans-serif;
        font-size: 18px;
        font-weight: 600;
        padding: 10px 0;
        border: none;
        border-bottom: 1px solid #404040;
        outline: none;
        width: 100%;

        &::placeholder {
            color: #404040;
        }

        @media only screen and (min-width: 740px) {
            font-size: 22px;
            max-width: calc(50% - 10px);
        }

        @media only screen and (min-width: 1440px) {
            max-width: calc(33.33% - 14px);
        }
    }
`;
