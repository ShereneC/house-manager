import { Auth0Provider } from '@bcwdev/auth0provider'
import { systemsService } from '../services/SystemsService'
import BaseController from '../utils/BaseController'

export class SystemsController extends BaseController {
  constructor() {
    super('api/systems')
    this.router
      .get('', this.getSystems)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }

  async getSystems(req, res, next) {
    try {
      const systems = await systemsService.getSystems()
      console.log(systems)
      res.send(systems)
    } catch (error) {
      next(error)
    }
  }
}
