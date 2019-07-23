import React from "react";
import { shallow } from "enzyme";
import Grid from "../Grid";

let wrapper;

const projects = [
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

describe("<Grid />", () => {
    beforeEach(() => {
        wrapper = shallow(<Grid projects={projects} />);
    });

    it("should render", () => {
        expect(wrapper).toBeTruthy();
    });

    it("should render a list of projects", () => {
        expect(wrapper.find("GridItem")).toHaveLength(2);
        expect(wrapper.find("Orderly")).toBeTruthy();
    });
});
