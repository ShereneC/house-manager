import { dbContext } from '../db/DbContext'

async function getSystems() {
  const systems = await dbContext.Systems
  return systems
}

export const systemsService = new SystemsService()
