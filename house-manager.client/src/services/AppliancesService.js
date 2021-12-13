import { AppState } from '../AppState'
import { api } from './AxiosService'

class AppliancesService {
  async getAllAppliances() {
    const res = await api.get('api/appliances')
    AppState.appliances = res.data
  }
}

export const appliancesService = new AppliancesService()