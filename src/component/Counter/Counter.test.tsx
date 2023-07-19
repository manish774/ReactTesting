import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";

import Counter from "./Counter";

describe("Testing Counter Component", () => {
  test("Heading", () => {
    render(<Counter count={10} />);
    const getCountHeading = screen.getByText("Counter comp");
    expect(getCountHeading).toBeInTheDocument();
  });

  test("Checking count", () => {
    render(<Counter count={10} />);
    const getCountHeading = screen.getByText("count: 10");
    expect(getCountHeading).toBeInTheDocument();
  });

  test("Checking handlers", async () => {
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();
    render(
      <Counter
        count={11}
        incrementCounter={handleIncrement}
        decrementCounter={handleDecrement}
      />
    );
    const getCountHeading = screen.getByText("count: 11");
    expect(getCountHeading).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: "Increment count",
    });
    const decrementButton = screen.getByRole("button", {
      name: "Decrement count",
    });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(handleIncrement).toHaveBeenCalledTimes(1);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });
});
