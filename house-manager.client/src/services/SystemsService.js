import { AppState } from '../AppState'
import { api } from './AxiosService'

class SystemsService {
  async getAllSystems() {
    const res = await api.get('api/systems')
    AppState.systems = res.data
  }
}

export const systemsService = new SystemsService()