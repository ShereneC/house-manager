import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NotesService {
  async getNotes(query = {}) {
    const notes = await dbContext.Notes.find(query).populate('creator')
    return notes
  }

  async getNoteById(id) {
    const note = await dbContext.Notes.findById(id).populate('creator')
    if (!note) {
      throw new BadRequest('Invalid Id')
    }
    return note
  }

  async getNotesBySystemId(query = {}) {
    const notes = await dbContext.Notes.find(query).populate('creator', 'name')
    return notes
  }

  async getNotesByApplianceId(query = {}) {
    const notes = await dbContext.Notes.find(query).populate('creator', 'name')
    return notes
  }

  async createNote(body) {
    const res = await dbContext.Notes.create(body)
    return await dbContext.Notes.findById(body.id).populate('creator', 'name')
  }

  async editNote(id, body) {
    const note = await dbContext.Notes.findById(id)
    if (note) {
      const editedNote = await dbContext.Notes.findByIdAndUpdate(id, body, { new: true, runValidators: true })
      return editedNote
    } else {
      throw new BadRequest('Note not found with that id')
    }
  }

  async deleteNote(id, userId) {
    const note = await dbContext.Notes.findById(id).populate('creator')
    if (!note) {
      throw new BadRequest('That note id does not exist')
    } else {
      if (userId === note.creator.id) {
        const noteToDie = await dbContext.Notes.findByIdAndDelete({ _id: id })
        return noteToDie
      } else {
        throw new BadRequest('This is not your note to delete')
      }
    }
  }
}
export const notesService = new NotesService()
