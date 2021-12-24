import { Auth0Provider } from '@bcwdev/auth0provider'
import { notesService } from '../services/NotesService'
import BaseController from '../utils/BaseController'

export class NotesController extends BaseController {
  constructor() {
    super('api/notes')
    this.router
      .get('', this.getNotes)
      .get('/:id', this.getNoteById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createNote)
      .put('/:id', this.editNote)
      .delete('/:id', this.deleteNote)
  }

  async getNotes(req, res, next) {
    try {
      const notes = await notesService.getNotes()
      res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async getNoteById(req, res, next) {
    try {
      const note = await notesService.getNoteById(req.params.id)
      res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async createNote(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const note = await notesService.createNote(req.body)
      res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async editNote(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const note = await notesService.editNote(req.params.id, req.body)
      res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async deleteNote(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const noteToDelete = await notesService.deleteNote(req.params.id, req.body.creatorId)
      res.send(noteToDelete)
    } catch (error) {
      next(error)
    }
  }
}
