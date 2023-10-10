import { Category, SubCategory } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  getAllProducts: publicProcedure.query(({ ctx }) => {
    return ctx.db.product.findMany();
  }),
  getCategoryProducts: publicProcedure
    .input(z.object({ category: z.nativeEnum(Category) }))
    .query(({ ctx, input }) => {
      return ctx.db.product.findMany({
        where: {
          category: input.category,
        },
      });
    }),
  getSubCategoryProducts: publicProcedure
    .input(z.object({ subCategory: z.nativeEnum(SubCategory) }))
    .query(({ ctx, input }) => {
      return ctx.db.product.findMany({
        where: {
          subCategory: input.subCategory,
        },
      });
    }),
});
