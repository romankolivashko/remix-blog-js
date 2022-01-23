import bcrypt from 'bcrypt'
import {db} from './db.server'
import { createCookieSessionStorage } from 'remix'

//login user
export async function login({username, password}) {
  const user = await db.user.findUnique({
    where: {
      username
    }
  })

  if(!user) return null

  //check password
  const isCorrectPassword = await bcrypt.compare(password, user.passwordHash)

  if(!isCorrectPassword) return null

  return user
}