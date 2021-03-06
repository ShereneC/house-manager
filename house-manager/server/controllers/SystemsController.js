import { Auth0Provider } from '@bcwdev/auth0provider'
import { notesService } from '../services/NotesService'
import { systemsService } from '../services/SystemsService'
import BaseController from '../utils/BaseController'

export class SystemsController extends BaseController {
  constructor() {
    super('api/systems')
    this.router
      .get('', this.getSystems)
      .get('/:id', this.getSystemById)
      .get('/:id/notes', this.getNotesBySystemId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createSystem)
      .put('/:id', this.editSystem)
      .delete('/:id', this.deleteSystem)
  }

  async getSystems(req, res, next) {
    try {
      const systems = await systemsService.getSystems()
      res.send(systems)
    } catch (error) {
      next(error)
    }
  }

  async getSystemById(req, res, next) {
    try {
      const system = await systemsService.getSystemById(req.params.id)
      res.send(system)
    } catch (error) {
      next(error)
    }
  }

  async getNotesBySystemId(req, res, next) {
    try {
      const system = await notesService.getNotesBySystemId({ systemId: req.params.id })
      res.send(system)
    } catch (error) {
      next(error)
    }
  }

  async createSystem(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const system = await systemsService.createSystem(req.body)
      res.send(system)
    } catch (error) {
      next(error)
    }
  }

  async editSystem(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const system = await systemsService.editSystem(req.params.id, req.body)
      res.send(system)
    } catch (error) {
      next(error)
    }
  }

  async deleteSystem(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const systemToDelete = await systemsService.deleteSystem(req.params.id, req.body.creatorId)
      res.send(systemToDelete)
    } catch (error) {
      next(error)
    }
  }
}
