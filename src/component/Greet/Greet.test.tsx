import { render, screen } from "@testing-library/react";
import Greet from "./Greet";
test("greet render", () => {
  render(<Greet />);
  const greetElement = screen.getByText("Greet");
  expect(greetElement).toBeInTheDocument();
  //   describe("kjdkjdkjdkjd", () => {});
});
