import { Auth0Provider } from '@bcwdev/auth0provider'
import { systemsService } from '../services/SystemsService'
import BaseController from '../utils/BaseController'

export class SystemController extends BaseController {
  constructor() {
    super('systems')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getSystems)
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
