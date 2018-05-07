import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('posts/all')
  },
  addPost (params) {
    return Api().post('posts/create', params)
  },
  updatePost (params) {
    return Api().put('posts/update/' + params.id, params)
  },
  getPost (params) {
    return Api().get('posts/post/' + params.id)
  },
  deletePost (id) {
    return Api().delete('posts/' + id)
  }
}
