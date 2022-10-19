import Home from '../../src/pages/index';
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("todo list tests", () => {
  it("render a todo list", () => {
    render(<Home />)
    // check if all components are rendered
    expect(screen.getByText("TO DO LIST")).toBeInTheDocument();
  })
});
