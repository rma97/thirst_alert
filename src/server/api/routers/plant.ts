import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const plantRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const plants = await ctx.prisma.plant.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });

    return plants;
  }),
});
