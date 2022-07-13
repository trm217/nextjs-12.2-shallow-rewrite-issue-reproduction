import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != "GET") return res.status(405).end();

    if (req.query.member) {
        res.setHeader("Set-Cookie", "member=false; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT");
        res.status(200).json({ isMember: false });
    } else {
        res.setHeader("Set-Cookie", "member=true; Path=/; Expires=Fri, 01 Jan 2070 00:00:00 GMT");
        res.status(200).json({ isMember: true });
    }
}