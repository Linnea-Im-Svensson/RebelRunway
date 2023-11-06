import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const cartRouter = createTRPCRouter({
  getProductsInCart: protectedProcedure.query(({ ctx }) => {
    return ctx.db.productInCart.findMany({
      where: { userId: ctx.session.user.id },
      include: { product: true },
    });
  }),
  removeProductInCart: protectedProcedure
    .input(z.object({ productInCartId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.productInCart.delete({
        where: { id: input.productInCartId },
      });
    }),
});
