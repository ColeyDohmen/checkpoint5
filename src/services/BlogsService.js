import { api } from './AxiosService'
import { AppState } from '../AppState'
class BlogsService {
  async getAll() {
    const res = await api.get('api/blogs')
    AppState.blogs = res.data
  }

  async createBlog(newBlog) {
    const res = await api.post('api/blogs', newBlog)
    AppState.blogs.push(res.data)
    // return res.data.id
  }
}

export const blogsService = new BlogsService()
