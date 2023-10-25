import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  // publicProcedure,
} from "~/server/api/trpc";

export const userDetailsRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.address.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  create: protectedProcedure
    .input(
      z.object({
        street: z.string(),
        postalNumber: z.string(),
        city: z.string(),
        country: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.address.create({
        data: {
          street: input.street,
          postalNumber: input.postalNumber,
          city: input.city,
          country: input.country,
          userId: ctx.session?.user.id,
        },
      });
    }),
});
