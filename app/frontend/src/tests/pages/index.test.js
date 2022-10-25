import Home from '../../pages/index';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("todo list tests", () => {
  it("render a todo list default page with all components", () => {
    render(<Home />)
    // check if all components in default page are rendered
    expect(screen.getByText("TO DO LIST")).toBeInTheDocument();
    expect((screen.getAllByTestId("button")).length).toBe(2);
    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /searchon/i })).toBeInTheDocument();
    expect(screen.getByTestId("input")).toBeInTheDocument();
    expect(screen.getByTestId("inputAndSearchBar")).toBeInTheDocument();
    expect(screen.getByTestId("layout")).toBeInTheDocument();
    expect(screen.getByTestId("table")).toBeInTheDocument();
    expect(screen.getByTestId("title")).toBeInTheDocument();
  });
});
