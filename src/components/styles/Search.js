import styled from "styled-components";

export default styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0 40px;

    input {
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        font-weight: 400;
        padding: 10px;
        border: none;
        border-bottom: 1px solid #404040;
        outline: none;
        width: 100%;
        max-width: 500px;

        &::placeholder {
            color: #404040;
        }
    }
`;
