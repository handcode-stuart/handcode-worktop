import React from "react";
import { shallow } from "enzyme";
import Search from "../Search";

let wrapper;

describe("<Search />", () => {
    beforeEach(() => {
        wrapper = shallow(<Search />);
    });

    it("should render", () => {
        expect(wrapper).toBeTruthy();
    });

    it("should filter projects accordingly", () => {});
});
