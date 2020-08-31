import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { checkProps } from "./test/testUtils";

import { findByTestAttr } from "./test/testUtils";
import Congrats from "./Congrats";
import { charCodeAt } from "prop-types/lib/ReactPropTypesSecret";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProp = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProp, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("render without error", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test('render no text when "sucess" props is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test('render non-empty message when "success" props is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

test("does not throw warnings with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
