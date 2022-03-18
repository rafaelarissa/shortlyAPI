import { connection } from "../database";

export async function setShortUrl(req, res) {
  const { url } = req.body;
  const shortUrl = uuid();

  try {
    await connection.query('INSERT INTO urls("shortUrl") VALUES ($1)',[shortUrl])
    return res.send(201)
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}