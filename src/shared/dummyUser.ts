import { hash } from 'bcrypt'

export const dummyUser = async () => {
  return [
    {
      id: 1,
      email: 't@g.com',
      password: await hash('1234', 10)
    }
  ]
}
