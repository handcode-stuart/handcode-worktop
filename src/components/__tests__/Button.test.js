import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

let wrapper;

describe("<Button />", () => {
    beforeEach(() => {
        wrapper = shallow(<Button link='https://www.handcode.co.uk' text='Handcode' />);
    });

    it("should render", () => {
        expect(wrapper).toBeTruthy();
    });
});
