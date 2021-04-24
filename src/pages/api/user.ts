import { verify } from 'jsonwebtoken'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

import { dummyUser } from '@/shared/dummyUser'
import { secret } from '@/shared/secret'

const authenticated = (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
  verify(req.headers.authorization!, secret, async function (err, decoded) {
    if (!err && decoded) return await fn(req, res)
    res.status(401).json({ message: 'Sorry you are not authenticated' })
  })
}

export default authenticated(async function user(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const users = await dummyUser()
    res.json(users)
  } else {
    res.status(405).json({ message: 'We only support GET' })
  }
})
