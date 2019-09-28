import * as express from 'express'
import { Request, Response } from 'express'

class HomeController {
    public path = '/'
    public router = express.Router()
    
    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/', this.index)
    }

    index = (req: Request, res: Response) => {
        
        res.render('home/index', { })
    }
}

export default HomeController