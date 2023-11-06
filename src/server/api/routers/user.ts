import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.user.create({
        data: { email: input.email, password: input.password },
      });
    }),
});
