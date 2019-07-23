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
        expect(wrapper.find("ProjectGridItem")).toHaveLength(2);
        expect(wrapper.find("Orderly")).toBeTruthy();
    });
});
