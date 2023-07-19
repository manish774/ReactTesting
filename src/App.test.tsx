import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("App component testing", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    const EditElement = screen.getByText(/Manish/);
    expect(linkElement).toBeInTheDocument();
    expect(EditElement).toBeInTheDocument();
  });

  test("testing Modal", async () => {
    render(<App />);
    const dialogButton = screen.getByText(/Open Dialog/);
    fireEvent.click(dialogButton);

    await waitFor(() => {
      const dialogTest = screen.getByText("Greetings, one and all!");
      expect(dialogTest).toBeInTheDocument();
    });
  });
});
