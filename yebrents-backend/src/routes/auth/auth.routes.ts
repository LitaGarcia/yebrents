import { Router } from 'express'
import { signupUser } from '../../controllers/user'
const router = Router()

router.get('/', (_req, res) => {
  console.log('verificando')
  res.send('auth route')
})

router.post('/signup', signupUser)

export default router
