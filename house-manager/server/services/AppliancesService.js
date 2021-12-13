import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class AppliancesService {
  async getAppliances(query = {}) {
    const appliances = await dbContext.Appliances.find(query).populate('creator')
    return appliances
  }

  async getApplianceById(id) {
    const appliance = await dbContext.Appliances.findById(id).populate('creator')
    if (!appliance) {
      throw new BadRequest('Invalid Id')
    }
    return appliance
  }

  async createAppliance(body) {
    const res = await dbContext.Appliances.create(body)
    return await dbContext.Appliances.findById(body.id).populate('creator', 'name')
  }

  async editAppliance(id, body) {
    const appliance = await dbContext.Appliances.findById(id)
    if (appliance) {
      const editedAppliance = await dbContext.Appliances.findByIdAndUpdate(id, body, { new: true, runValidators: true })
      return editedAppliance
    } else {
      throw new BadRequest('Appliance not found with that id')
    }
  }

  async deleteAppliance(id, userId) {
    const appliance = await dbContext.Appliances.findById(id).populate('creator')
    if (!appliance) {
      throw new BadRequest('That appliance id does not exist')
    } else {
      if (userId === appliance.creator.id) {
        const applianceToDie = await dbContext.Appliances.findByIdAndDelete({ _id: id })
        return applianceToDie
      } else {
        throw new BadRequest('This is not your appliance to delete')
      }
    }
  }
}
export const appliancesService = new AppliancesService()
