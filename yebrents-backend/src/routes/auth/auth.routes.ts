import { Router } from 'express'
const router = Router()

router.get('/', (_req, res) => {
  console.log('verificando')
  res.send('auth route')
})

export default router
