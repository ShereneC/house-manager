import { Auth0Provider } from '@bcwdev/auth0provider'
import { appliancesService } from '../services/AppliancesService'
import BaseController from '../utils/BaseController'

export class AppliancesController extends BaseController {
  constructor() {
    super('api/appliances')
    this.router
      .get('', this.getAppliances)
      .get('/:id', this.getApplianceById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createAppliance)
      .put('/:id', this.editAppliance)
      .delete('/:id', this.deleteAppliance)
  }

  async getAppliances(req, res, next) {
    try {
      const appliances = await appliancesService.getAppliances()
      res.send(appliances)
    } catch (error) {
      next(error)
    }
  }

  async getApplianceById(req, res, next) {
    try {
      const appliance = await appliancesService.getApplianceById(req.params.id)
      res.send(appliance)
    } catch (error) {
      next(error)
    }
  }

  async createAppliance(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const appliance = await appliancesService.createAppliance(req.body)
      res.send(appliance)
    } catch (error) {
      next(error)
    }
  }

  async editAppliance(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const appliance = await appliancesService.editAppliance(req.params.id, req.body)
      res.send(appliance)
    } catch (error) {
      next(error)
    }
  }

  async deleteAppliance(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const applianceToDelete = await appliancesService.deleteAppliance(req.params.id, req.body.creatorId)
      res.send(applianceToDelete)
    } catch (error) {
      next(error)
    }
  }
}
