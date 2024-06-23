import express, { Request, Response, NextFunction} from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello')
  })

  export default router