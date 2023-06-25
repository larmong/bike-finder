export const breakpoints = [1100, 840, 430, 320];
export const mediaQuery = breakpoints.map(
  (bp: number) => `@media (min-width: ${bp}px)`
);
