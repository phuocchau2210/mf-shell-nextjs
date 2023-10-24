import { NextApiRequest, NextApiResponse } from "next";

type Data = string[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { uni } = req.query;

  if (req.method === "GET") {
    try {
      const feeServiceResp = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/${uni}`
      );
      const fees = await feeServiceResp.json();
      console.log(process.env.NEXT_PUBLIC_SERVER_ENDPOINT);
      res.json(fees);
    } catch (error) {
      console.log(error);
      res.status(500).send([]);
    }
  }
}
