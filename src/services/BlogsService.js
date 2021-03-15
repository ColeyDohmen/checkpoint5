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
  }

  async delete(id) {
    await api.delete('api/blogs/' + id)
    this.getAll()
  }

  async getAllComments(id) {
    const res = await api.get(`api/blogs/${id}/comments`)
    AppState.comments = res.data
  }

  async createComment(newComment) {
    const res = await api.post('api/comments', newComment)
    AppState.comments.push(res.data)
  }

  async getBlogById(id) {
    const res = await api.get(`api/blogs/${id}`)
    AppState.activeBlog = res.data
  }
}

export const blogsService = new BlogsService()
