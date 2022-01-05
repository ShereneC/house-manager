import { AppState } from '../AppState'
import { api } from './AxiosService'

class SystemsService {
  async getAllSystems() {
    const res = await api.get('api/systems')
    AppState.systems = res.data
  }

  async getSystemById(id) {
    const res = await api.get('api/systems/' + id)
    AppState.activeSystem = res.data
  }

  async setActiveSystem(id) {
    const res = await api.get('api/systems/' + id)
    AppState.activeSystem = res.data
  }

  async getNotesBySystemId(id) {
    const res = await api.get('api/systems/' + id + '/notes')
    AppState.notes[id] = res.data
  }
}

export const systemsService = new SystemsService()