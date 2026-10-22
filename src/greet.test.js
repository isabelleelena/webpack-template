import { greet } from "./greet";

test("greets by name", () => {
  expect(greet("webpack")).toBe("Hello, webpack!");
});
