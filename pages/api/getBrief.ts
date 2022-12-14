/* eslint-disable import/no-anonymous-default-export */
import { NextResponse, NextRequest } from "next/server";
import executeQuery from "../../lib/db";

export default async (req: any, res: any) => {
  if (req.method != "GET") {
    return res.json({ error: "Method not allowed" });
  }
  try {
    const result = await executeQuery({
      query: "SELECT * FROM brief order by created_at desc;",
      values: [],
    });
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erro ao buscar depoimentos");
  }
};
