import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

import { dummyUser } from '@/shared/dummyUser'
import { secret } from '@/shared/secret'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const users = await dummyUser()
    const isOk = await compare(req.body.password, users[0].password)
    if (isOk) {
      const claims = { sub: req.body.email }
      const jwt = sign(claims, secret, { expiresIn: '1h' })
      res.json({ message: 'OK', token: jwt })
    } else {
      res.status(401).json({ message: 'Password is not correct' })
    }
  } else {
    res.status(405).json({ message: 'We only support POST' })
  }
}
