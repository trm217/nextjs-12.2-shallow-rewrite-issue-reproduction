import { NextApiResponse } from 'next';
import { NextApiRequest } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != "GET") return res.status(405).end();

    const isMember = !!req.cookies["member"]

    return res.status(200).json({ isMember })
}