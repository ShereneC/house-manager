import { Auth0Provider } from '@bcwdev/auth0provider'
import { systemsService } from '../services/SystemsService'
import BaseController from '../utils/BaseController'

export class SystemsController extends BaseController {
  constructor() {
    super('api/systems')
    this.router
      .get('', this.getSystems)
      .get('/:id', this.getSystemById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createSystem)
  }

  async getSystems(req, res, next) {
    try {
      const systems = await systemsService.getSystems()
      console.log(res)
      res.send(systems)
    } catch (error) {
      next(error)
    }
  }

  async getSystemById(req, res, next) {
    try {
      const system = await systemsService.getSystemById(req.params.id)
      console.log(res)
      res.send(system)
    } catch (error) {
      next(error)
    }
  }

  async createSystem(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const system = await systemsService.createSystem(req.body)
      console.log(res)
      res.send(system)
    } catch (error) {
      next(error)
    }
  }
}
