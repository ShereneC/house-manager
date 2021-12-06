import { dbContext } from '../db/DbContext'

class SystemsService {
  async getSystems(query = {}) {
    const systems = await dbContext.Systems.find(query)
    return systems
  }
}
export const systemsService = new SystemsService()
