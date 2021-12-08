import { AppState } from '../AppState'
import { api } from './AxiosService'

class SystemsService {
  async getAllSystems() {
    console.log('hello from getall Systems')
    const res = await api.get('api/systems')
    console.log(res)
    AppState.systems = res.data
  }
}

export const systemsService = new SystemsService()