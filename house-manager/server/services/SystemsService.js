import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class SystemsService {
  async getSystems(query = {}) {
    const systems = await dbContext.Systems.find(query)
    return systems
  }

  async getSystemById(id) {
    const system = await dbContext.Systems.findById(id).populate('creator')
    if (!system) {
      throw new BadRequest('Invalid Id')
    }
    return system
  }
}
export const systemsService = new SystemsService()
