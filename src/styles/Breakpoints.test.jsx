import { breakAt, BreakpointSizes } from "./Breakpoints";

it.each([
  [BreakpointSizes.sm],
  [BreakpointSizes.md],
  [BreakpointSizes.lg],
  [BreakpointSizes.xl],
])("break at %ipx", (size) => {
  expect(breakAt(size)).toEqual(
    `@media (min-width: ${size}px)`);
});
