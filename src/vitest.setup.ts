import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";

import { cleanup } from "@testing-library/react";

/**
 * React Testing Library cleanup
 * @see https://testing-library.com/docs/svelte-testing-library/setup/#vitest
 */
afterEach(() => cleanup());
