import React from "react";
import { shallow } from "enzyme";
import GridItem from "../GridItem";

let wrapper;

const project = {
    id: 1,
    name: "CRM",
    github: "https://github.com/handcode-stuart/crm",
    website: "https://www.handcode.co.uk",
    bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae felis tempor, accumsan elit vel, egestas purus.",
    tech: "React, NodeJS, Express",
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

    it("should render the tech stack", () => {
        expect(
            wrapper.find(
                <p>
                    <strong>{project.tech}</strong>
                </p>,
            ),
        ).toBeTruthy();
    });

    it("should render the bio", () => {
        expect(wrapper.find(<p>{project.bio}</p>)).toBeTruthy();
    });
});
