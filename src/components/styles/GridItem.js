import styled from "styled-components";

export default styled.li`
    width: 100%;
    padding: 40px;
    background-color: #fafafa;
    margin-bottom: 20px;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media only screen and (min-width: 740px) {
        width: calc(50% - 10px);
        min-height: 380px;
    }
`;
