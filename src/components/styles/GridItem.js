import styled from "styled-components";

export default styled.li`
    width: 100%;
    padding: 30px;
    background-color: #404040;
    margin: 0 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: #fff;
    border-radius: 4px;
    background: -moz-linear-gradient(45deg, #404040 0%, #545454 100%);
    background: -webkit-linear-gradient(45deg, #404040 0%, #545454 100%);
    background: linear-gradient(45deg, #404040 0%, #545454 100%);

    .btn-holder {
        margin-top: 24px;
    }

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
