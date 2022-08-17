/* eslint-disable import/no-anonymous-default-export */
import { NextResponse, NextRequest } from "next/server";
import executeQuery from "../../../lib/db";

export default async (req: any, res: any) => {

  const { id } = req.query;

  if (req.method != "GET") {
    return res.json({ error: "Method not allowed" });
  }
  
  if (!id) {
    return res.status(400).json({ message: "Id é obrigatório" });
  }
  try {
    const result = await executeQuery({
      query: "SELECT * FROM brief where id = ?",
      values: [Number(id)],
    });
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erro ao buscar depoimentos");
  }
};
