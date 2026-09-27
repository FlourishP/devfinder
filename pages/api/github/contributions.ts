import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query;
  const resp = await fetch(`https://api.github.com/users/${username}/events/public`, {
    headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` }
  });
  const events = await resp.json();
  const days: Record<string, number> = {};
  events.filter((e:any) => e.type === 'PushEvent').forEach((e:any) => {
    const date = new Date(e.created_at).toISOString().split('T')[0];
    days[date] = (days[date] || 0) + e.payload.commits?.length || 0;
  });
  res.status(200).json(Object.entries(days).map(([date, count]) => ({ date, count })));
}
