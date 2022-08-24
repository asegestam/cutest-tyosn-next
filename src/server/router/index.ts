// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { tysonRouter } from "./tyson";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("tyson.", tysonRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
