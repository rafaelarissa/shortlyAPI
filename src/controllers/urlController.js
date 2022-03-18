import { connection } from "../database";
import { v4 as uuid } from 'uuid';

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

export async function getUrl(req, res) {
  const { shortUrl } = req.params;

  try {
    const { rows: urls } = await query.connection('SELECT * FROM urls WHERE shortUrl=$1', [shortUrl])
    const [url] = urls
    if(!url) {
      return res.sendStatus(404);
    }

    res.send(url);
  } catch (error) {
    
  }
}