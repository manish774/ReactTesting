import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("User Testing", () => {
  test("Render User Component", () => {
    render(<Users />);
    const title = screen.getByText("User List");
    expect(title).toBeInTheDocument();
  });
});
