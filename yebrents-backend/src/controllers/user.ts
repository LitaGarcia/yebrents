import { Request, Response } from 'express'
import handleHttp from '../utils/utils'

const signupUser = (req: Request, res: Response): void => {
  const { name, email, password } = req.body
  if (name === undefined || email === undefined || password === undefined) {
    res.status(400).json({ msg: 'All fields must be filled in' })
  }
  try {
    res.json(req.body)
    console.log(req.body)
  } catch (e) {
    handleHttp(res, 'ERROR_POST_ITEM')
  }
}

export {
  signupUser
}
