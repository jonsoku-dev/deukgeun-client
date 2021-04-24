import { hash } from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'

let id = 1
export default async function signup(req: NextApiRequest, res: NextApiResponse) {
  id++
  if (req.method === 'POST') {
    await hash(req.body.password, 10, function (_: any, hash) {
      res.json({
        id: id,
        name: req.body.name,
        email: req.body.email,
        password: hash
      })
    })
  } else {
    res.status(405).json({ message: 'We only support POST' })
  }
}
