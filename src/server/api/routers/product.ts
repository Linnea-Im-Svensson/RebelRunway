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
      return (
        input.category &&
        ctx.db.product.findMany({
          where: {
            category: input.category,
          },
        })
      );
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
  getSearchedProducts: publicProcedure
    .input(z.object({ search: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.product.findMany({
        where: {
          name: {
            search: input.search.trim().split(" ").join("&"),
          },
        },
        take: 5,
      });
    }),
  getAllSearchedProducts: publicProcedure
    .input(z.object({ search: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.product.findMany({
        where: {
          name: {
            search: input.search,
          },
        },
      });
    }),
  getFilteredProducts: publicProcedure
    .input(
      z.object({
        category: z.nativeEnum(Category).optional(),
        subCategory: z.nativeEnum(SubCategory).optional(),
        minPrice: z.number().optional(),
        maxPrice: z.number().optional(),
        color: z.string().optional(),
      }),
    )
    .query(({ ctx, input }) => {
      if (input.minPrice && input.maxPrice) {
        return ctx.db.product.findMany({
          where: {
            price: {
              gt: input.minPrice,
              lt: input.maxPrice,
            },
            color: input.color,
            category: input.category,
            subCategory: input.subCategory,
          },
          orderBy: {
            price: "asc",
          },
        });
      } else {
        return ctx.db.product.findMany({
          where: {
            price: {
              gt: input.minPrice,
              lt: input.maxPrice,
            },
            color: input.color,
            category: input.category,
            subCategory: input.subCategory,
          },
        });
      }
    }),
});
