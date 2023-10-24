import { NextApiRequest, NextApiResponse } from "next";

type Data = string[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.json(["a", "b", "cd"]);
  }
}
