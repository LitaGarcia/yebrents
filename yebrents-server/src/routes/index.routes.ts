import {Router} from 'express'
const router = Router()

// GET "/api"
router.get('/', (_req, res) => { // "_req" "_" when req its never read.
    console.log("Alguien anda por aqui")
    res.send("todo bien")
})

import authRoutes from './auth/auth.routes'
router.use("/auth", authRoutes);

export default router;