import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class notesService {
  async getnotes(query = {}) {
    const notes = await dbContext.notes.find(query).populate('creator')
    return notes
  }

  async getnoteById(id) {
    const note = await dbContext.notes.findById(id).populate('creator')
    if (!note) {
      throw new BadRequest('Invalid Id')
    }
    return note
  }

  async createnote(body) {
    const res = await dbContext.notes.create(body)
    return await dbContext.notes.findById(body.id).populate('creator', 'name')
  }

  async editnote(id, body) {
    const note = await dbContext.notes.findById(id)
    if (note) {
      const editednote = await dbContext.notes.findByIdAndUpdate(id, body, { new: true, runValidators: true })
      return editednote
    } else {
      throw new BadRequest('note not found with that id')
    }
  }

  async deletenote(id, userId) {
    const note = await dbContext.notes.findById(id).populate('creator')
    if (!note) {
      throw new BadRequest('That note id does not exist')
    } else {
      if (userId === note.creator.id) {
        const noteToDie = await dbContext.notes.findByIdAndDelete({ _id: id })
        return noteToDie
      } else {
        throw new BadRequest('This is not your note to delete')
      }
    }
  }
}
export const notesService = new notesService()
