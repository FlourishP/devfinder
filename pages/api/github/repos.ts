import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, per_page } = req.query;
  const resp = await fetch(`https://api.github.com/users/${username}/repos?per_page=${per_page||12}&sort=updated`, {
    headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` }
  });
  const data = await resp.json();
  res.status(resp.status).json(data);
}
