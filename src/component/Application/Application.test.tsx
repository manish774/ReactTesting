import React from "react";
import {
  fireEvent,
  getByLabelText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Application from "./Application";

const options = [
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "Canada", value: "ca" },
  { label: "India", value: "india" },
];
describe("Testing Forms Component", () => {
  test("Rendering of component", () => {
    render(<Application />);
  });

  test("Input field test", () => {
    render(<Application />);

    //--------------------------------------------------------
    const pageHeadingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeadingElement).toBeInTheDocument();
    //--------------------------------------------------------
    const pageSectionElement = screen.getByRole("heading", {
      level: 2,
    });
    // screen.debug();
    expect(pageSectionElement).toBeInTheDocument();
    //---------------------------------------------------------

    // ---------------------------------------------------------
    const inputField = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(inputField).toBeInTheDocument();
    // ---------------------------------------------------------
    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();
    //----------------------------------------------------------

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();
    //----------------------------------------------------------
    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    //---------------------------------------------------------
    const termsElement2 = screen.getByLabelText("I Agree");
    expect(termsElement2).toBeInTheDocument();
    //----------------------------------------------------------
    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
    //----------------------------------------------------------
  });

  test("Testing onchange for select", () => {
    const onChangeMock = jest.fn();
    render(<Application />);
    const nameElementByText = screen.getByLabelText("Job Location");
    expect(nameElementByText).toBeInTheDocument();

    //Checking options are available
    options.forEach((option) => {
      const optionElement = screen.getByRole("option", {
        name: option.label,
      });
      expect(optionElement).toBeInTheDocument();
    });

    fireEvent.change(nameElementByText, { target: { value: "uk" } });
    expect(onChangeMock).toHaveBeenCalledWith("uk");
  });
});
