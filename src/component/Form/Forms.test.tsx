import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import Form from "./Form";

describe("Testing Forms Component", () => {
  test("Rendering of component", () => {
    render(<Form />);
  });

  test("Input field test", () => {
    render(<Form />);

    //--------------------------------------------------------
    const pageHeadingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeadingElement).toBeInTheDocument();
    //--------------------------------------------------------
    const pageSectionElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(pageSectionElement).toBeInTheDocument();
    //---------------------------------------------------------
    const nameElementByText = screen.getByLabelText("Name");
    /*Here Name is the label corresponding to the input Element,it will find the Label element 
    then it find the input associated with it, id and html for will help wit that*/
    expect(nameElementByText).toBeInTheDocument();
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
});
