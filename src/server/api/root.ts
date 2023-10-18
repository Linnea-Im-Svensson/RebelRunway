import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
<<<<<<< Updated upstream
import { productRouter } from "./routers/product";
import { profileRouter } from "./routers/profile";
=======
import { userDetailsRouter } from "~/server/api/routers/userDetails";
>>>>>>> Stashed changes

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
<<<<<<< Updated upstream
  product: productRouter,
  profile: profileRouter,
=======
  userDetails: userDetailsRouter,
>>>>>>> Stashed changes
});

// export type definition of API
export type AppRouter = typeof appRouter;
