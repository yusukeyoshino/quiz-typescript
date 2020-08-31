import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProp = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProp, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("dose not throw warnings with expected props", () => {
  checkProps(GuessedWords, defaultProp);
});

describe("if there are no guessed words", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("render instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guessed-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are guessed words", () => {});
