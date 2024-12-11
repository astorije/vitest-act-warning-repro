# `act()` warning reproduction case for Vitest

The following `act()` warning ([[1]](https://codilime.com/blog/why-should-you-be-grateful-for-act-warnings-in-react-tests/) [[2]](https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning)) appears when running `npm test`:

```tsx
stderr | src/App.test.tsx > <App /> > tests the app
Warning: An update to App inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at App (/[...]/vitest-act-warning/src/App.tsx:6:55)

 ✓ src/App.test.tsx (1)
   ✓ <App /> (1)
     ✓ tests the app
```

This is an easy fix: replace `vi.waitFor()` at [src/App.test.tsx#L21](src/App.test.tsx#L21) with `waitFor()` imported from `@testing-library/react` and, voilà, problem solved:

```tsx
 ✓ src/App.test.tsx (1)
   ✓ <App /> (1)
     ✓ tests the app
```

But... why?

And that's not all: alternatively, removing [`globals: true`](https://vitest.dev/config/#globals) from [vite.config.ts#L14](vite.config.ts#L14) also silences the `act()` warning!

Also why?!

Cross-reference: I posted these questions at https://github.com/vitest-dev/vitest/discussions/7062 🤞

---

Helpful resources:

- https://codilime.com/blog/why-should-you-be-grateful-for-act-warnings-in-react-tests/
- https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
