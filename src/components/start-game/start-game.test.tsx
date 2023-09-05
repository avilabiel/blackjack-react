/**
 * @vitest-environment jsdom
 */
import { afterEach, describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import StartGame from ".";

// beforeEach(() => {
//   vi.spyOn(global, "fetch").mockResolvedValue({
//     json: vi.fn().mockResolvedValue({
//       players: [
//         {
//           id: 1,
//           balance: 1000,
//           originalPlayerId: 1,
//         },
//         {
//           id: 2,
//           balance: 1000,
//           originalPlayerId: 2,
//         },
//       ],
//       bets: [],
//       rounds: [],
//       reports: [],
//       id: 4,
//       createdAt: "2023-09-05T22:18:49.777Z",
//     }),
//   } as unknown as Response);
// });

afterEach(() => {
  vi.restoreAllMocks();
});

describe("components/StartGame", () => {
  test("renders as expected", () => {
    render(<StartGame />);

    const button = screen.getByText(/Start Game/i);

    expect(button).toBeInTheDocument();
  });

  test("starts a game", async () => {
    render(<StartGame />);

    const buttonBeforeClick = screen.getByText(/Start Game/i);

    fireEvent.click(screen.getByText("Start Game"));

    await waitFor(() => {
      const buttonAfterClick = screen.queryByText(/Start Game/i);

      expect(buttonBeforeClick).toBeEnabled();
      expect(buttonAfterClick).not.toBeInTheDocument();
    });
  });
});
