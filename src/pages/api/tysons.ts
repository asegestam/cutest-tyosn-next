// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const tysons = async (req: NextApiRequest, res: NextApiResponse) => {
  const tysons = await prisma.tyson.findMany();
  res.status(200).json(tysons);
};

export default tysons;
