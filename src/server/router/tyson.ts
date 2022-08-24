import { createRouter } from "./context";
import { Tyson } from "@prisma/client";
import { z } from "zod";

export const tysonRouter = createRouter()
  .query("pair", {
    async resolve({ ctx }) {
      const tysons = await ctx.prisma.tyson.findMany();

      const pair = getRandomPair(tysons);

      if (pair.length !== 2) throw new Error("Failed to find two pokemon");

      return {
        firstTyson: pair[0] as Tyson,
        secondTyson: pair[1] as Tyson,
      };
    },
  })
  .mutation("vote", {
    input: z.object({
      votedFor: z.number(),
      votedAgainst: z.number(),
    }),
    async resolve({ ctx, input }) {
      const voteInDb = await ctx.prisma.vote.create({
        data: {
          votedAgainstId: input.votedAgainst,
          votedForId: input.votedFor,
        },
      });
      return { success: true, vote: voteInDb };
    },
  });

const getRandomPair = (tysons: Tyson[]): Tyson[] => {
  const firstTyson = tysons[Math.floor(Math.random() * tysons.length)] as Tyson;

  const index = tysons.findIndex((t) => t.id === firstTyson.id);

  tysons.splice(index, 1);

  const secondTyson = tysons[
    Math.floor(Math.random() * tysons.length)
  ] as Tyson;

  return [firstTyson, secondTyson];
};
