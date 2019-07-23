import React from "react";
import { shallow } from "enzyme";
import App from "../../App";

let wrapper;

const data = [
    {
        id: 1,
        name: "CRM",
        github: "https://github.com/handcode-stuart/crm",
        website: "https://www.handcode.co.uk",
    },
    {
        id: 2,
        name: "Orderly",
        github: "https://github.com/handcode-stuart/orderly",
        website: "https://www.handcode.co.uk",
    },
];

describe("<App />", () => {
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it("should render", () => {
        expect(wrapper).toBeTruthy();
    });

    it("should render a list of projects", () => {
        expect(wrapper.find("li")).toHaveLength(2);

        expect(wrapper.find("Orderly")).toBeTruthy();
    });

    it("should render a link for the github of a project", () => {
        expect(
            wrapper.contains(
                <a
                    href='https://github.com/handcode-stuart/crm'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Code
                </a>,
            ),
        ).toBeTruthy();
    });

    it("should render a link for the website of a project", () => {
        expect(
            wrapper.contains(
                <a href='https://www.handcode.co.uk' target='_blank' rel='noopener noreferrer'>
                    Website
                </a>,
            ),
        ).toBeTruthy();
    });

    it("should render the name of a project", () => {
        expect(wrapper.find("CRM")).toBeTruthy();
    });
});
