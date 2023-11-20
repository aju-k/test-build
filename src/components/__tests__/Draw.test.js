import {
  screen,
  waitForElementToBeRemoved,
  fireEvent,
  render,
} from "@testing-library/react";
import Draw from "../Draw";

describe("Making canvas ready", () => {
  it("check if canvas is rendered", async () => {
    render(<Draw />);
    fireEvent.click(screen.getByText("Save"));
    expect(screen.getByTestId("dataValue").textContent).toBe("37");
  });
});
