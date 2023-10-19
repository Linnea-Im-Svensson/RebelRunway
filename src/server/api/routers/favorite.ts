import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const favoriteRouter = createTRPCRouter({
  addOrRemoveFavorites: protectedProcedure
    .input(z.object({ productId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const alreadyLiked = await ctx.db.favorite.findFirst({
        where: {
          productId: input.productId,
          userId: ctx.session.user.id,
        },
      });

      if (alreadyLiked !== null) {
        return ctx.db.favorite.delete({ where: { id: alreadyLiked.id } });
      } else {
        return ctx.db.favorite.create({
          data: {
            userId: ctx.session.user.id,
            productId: input.productId,
          },
        });
      }
    }),
  getFavoriteProducts: protectedProcedure.query(({ ctx }) => {
    return ctx.db.favorite.findMany({
      select: {
        product: true,
      },
    });
  }),
});
