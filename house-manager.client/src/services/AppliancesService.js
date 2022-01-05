import { AppState } from '../AppState'
import { api } from './AxiosService'

class AppliancesService {
  async getAllAppliances() {
    const res = await api.get('api/appliances')
    AppState.appliances = res.data
  }

  async setActiveAppliance(id) {
    const res = await api.get('api/appliances/' + id)
    AppState.activeAppliance = res.data
  }

  async getNotesByApplianceId(id) {
    const res = await api.get('api/appliances/' + id + '/notes')
    AppState.notes[id] = res.data
  }
}

export const appliancesService = new AppliancesService()