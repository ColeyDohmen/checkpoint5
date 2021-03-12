import { api } from './AxiosService'
import { AppState } from '../AppState'
class BlogsService {
  async getAll() {
    const res = await api.get('/blogs')
    AppState.blogs = res.data
  }
}

export const blogsService = new BlogsService()
