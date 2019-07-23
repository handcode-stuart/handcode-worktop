import React from "react";
import { shallow } from "enzyme";
import GridItem from "../GridItem";

let wrapper;

const project = {
    id: 1,
    name: "CRM",
    github: "https://github.com/handcode-stuart/crm",
    website: "https://www.handcode.co.uk",
};
describe("<GridItem />", () => {
    beforeEach(() => {
        wrapper = shallow(<GridItem project={project} />);
    });

    it("should render", () => {
        expect(wrapper).toBeTruthy();
    });

    it("should render the project name", () => {
        expect(wrapper.find(project.name)).toBeTruthy();
    });

    it("should render the github link", () => {
        expect(wrapper.find(`Button[link='${project.github}']`).length).toBe(1);
    });

    it("should render the website link", () => {
        expect(wrapper.find(`Button[link='${project.website}']`).length).toBe(1);
    });
});
