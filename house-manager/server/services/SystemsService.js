import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class SystemsService {
  async getSystems(query = {}) {
    const systems = await dbContext.Systems.find(query).populate('creator')
    return systems
  }

  async getSystemById(id) {
    const system = await dbContext.Systems.findById(id).populate('creator')
    if (!system) {
      throw new BadRequest('Invalid Id')
    }
    return system
  }

  async createSystem(body) {
    const res = await dbContext.Systems.create(body)
    return await dbContext.Systems.findById(body.id).populate('creator', 'name')
  }

  async editSystem(id, body) {
    const system = await dbContext.Systems.findById(id)
    if (system) {
      const editedSystem = await dbContext.Systems.findByIdAndUpdate(id, body, { new: true, runValidators: true })
      return editedSystem
    } else {
      throw new BadRequest('System not found with that id')
    }
  }

  async deleteSystem(id, userId) {
    const system = await dbContext.Systems.findById(id).populate('creator')
    if (!system) {
      throw new BadRequest('That system id does not exist')
    } else {
      if (userId === system.creator.id) {
        const systemToDie = await dbContext.Systems.findByIdAndDelete({ _id: id })
        return systemToDie
      } else {
        throw new BadRequest('This is not your system to delete')
      }
    }
  }
}
export const systemsService = new SystemsService()
