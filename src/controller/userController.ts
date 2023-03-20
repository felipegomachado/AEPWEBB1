import { Request, Response } from 'express'

class UserController{    
    public async list(req: Request, res: Response) {
        return res.json('LUigi Siqueira Capoia')
    }
}

export default new UserController()