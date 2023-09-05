/**
 * @vitest-environment jsdom
 */
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import StartGame from ".";

describe("components/StartGame", () => {
  test("renders as expected", () => {
    render(<StartGame />);

    const headline = screen.getByText(/Start Game/i);

    expect(headline).toBeInTheDocument();
  });
});
