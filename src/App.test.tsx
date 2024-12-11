import { describe, expect, it, vi } from "vitest";
import { App } from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<App />", () => {
  it("tests the app", async () => {
    const user = userEvent.setup();
    const windowOpenSpy = vi.spyOn(window, "open").mockImplementation(vi.fn());

    render(<App />);

    expect(screen.getByRole("paragraph")).toHaveTextContent("status: waiting");

    await user.click(screen.getByRole("button"));

    expect(await screen.findByRole("paragraph")).toHaveTextContent(
      "status: loading"
    );

    await vi.waitFor(() =>
      expect(windowOpenSpy).toHaveBeenCalledWith("https://example.com")
    );
  });
});
