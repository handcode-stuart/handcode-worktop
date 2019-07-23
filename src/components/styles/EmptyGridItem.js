import styled from "styled-components";

export default styled.li`
    width: 100%;
    padding: 30px;
    background-color: #fff;
    margin: 0 0 20px;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ccc;
    border: 1px solid #ccc;
    border-radius: 4px;

    @media only screen and (min-width: 740px) {
        width: calc(50% - 20px);
        min-height: 320px;
        padding: 40px;
        margin: 0 10px 20px;
    }

    @media only screen and (min-width: 1440px) {
        width: calc(33.33% - 20px);
    }
`;
