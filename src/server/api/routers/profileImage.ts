import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const profileImageRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.user.findMany({
      where: {
        id: ctx.session.user.id,
      },
    });
  }),

  update: protectedProcedure
    .input(
      z.object({
        image: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.user.update({
        where: { id: ctx.session?.user.id },
        data: {
          image: input.image,
        },
      });
    }),
});
