import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
	message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	setTimeout(() => {
  const data = req.body;
  if(data.email !== 'admin@admin.com' || data.password !== 'admin') {
    res.status(400).json({ message: 'Invalid credentials' })
    return;
  }
		res.status(200).json({ message: 'Success' })
	}, 2000)
}
