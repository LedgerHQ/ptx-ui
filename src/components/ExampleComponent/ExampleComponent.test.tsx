import { fireEvent, render, screen } from "../../test-utils";
import ExampleComponent from ".";

describe("ExampleComponent", () => {
  const mockText = "some text";
  it("renders with text", () => {
    render(<ExampleComponent text={mockText} />);

    const banner = screen.getByRole("banner");

    expect(banner).toBeInTheDocument();
    expect(banner).toHaveTextContent(mockText);
    expect(banner).not.toHaveStyle({
      borderStyle: "solid",
    });
    expect(banner).toHaveStyle({
      cursor: "auto",
    });
  });

  it("handles click", () => {
    const mockOnClick = jest.fn();

    render(<ExampleComponent text={mockText} onClick={mockOnClick} />);

    const banner = screen.getByRole("banner");

    fireEvent.click(banner);

    expect(mockOnClick).toHaveBeenCalled();
    expect(banner).toHaveStyle({
      cursor: "pointer",
    });
  });

  it("renders border if hasBorder is true", () => {
    render(<ExampleComponent text={mockText} hasBorder />);

    expect(screen.getByRole("banner")).toHaveStyle({
      borderStyle: "solid",
    });
  });
});
