import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const favoriteRouter = createTRPCRouter({
  addToFavorites: protectedProcedure
    .input(z.object({ productId: z.string() }))
    .mutation(({ ctx, input }) => {
      console.log(ctx.session.user.id + " " + input.productId);
      return ctx.db.favorite.create({
        data: {
          userId: ctx.session.user.id,
          productId: input.productId,
        },
      });
    }),
  getFavoriteProducts: protectedProcedure.query(({ ctx }) => {
    return ctx.db.favorite.findMany({
      select: {
        product: true,
      },
    });
  }),
});
