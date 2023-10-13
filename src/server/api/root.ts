import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { productRouter } from "./routers/product";
import { favoriteRouter } from "./routers/favorite";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  product: productRouter,
  favorite: favoriteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
