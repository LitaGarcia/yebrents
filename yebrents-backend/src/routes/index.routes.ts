import { Request, Response, Router } from 'express'

import authRoutes from './auth/auth.routes'
const router = Router()

// GET "/api"
router.get('/', (_req: Request, res: Response) => { // "_req" "_" when req its never read.
  console.log('Alguien anda por aqui')
  res.send('aqui van los modelos')
})
router.use('/auth', authRoutes)

export default router
