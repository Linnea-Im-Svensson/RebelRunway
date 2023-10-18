import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const userDetailsRouter = createTRPCRouter({

    create: protectedProcedure
    .input(z.object({ street: z.string() }))
    .mutation(({ ctx, input}) => {
        return ctx.db.address.create({
            data: {
                street: input.street,
                userId: ctx.session?.user.id
            }
        })
    })

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.address.findMany({
        where: {
            userId: ctx.session?.user.id
        }
    });
  }),


});