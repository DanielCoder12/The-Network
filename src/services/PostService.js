import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostService {


    async getPosts() {
        const res = await api.get('api/posts')
        AppState.nextPage = res.data.older
        AppState.previousPage = res.data.newer
        AppState.posts = res.data.posts.map(p => new Post(p))
    }

    async createPost(data) {
        const res = await api.post('api/posts', data)
        // logger.log('new post', res.data)
        AppState.posts.unshift(new Post(res.data))
    }

    async changePosts(link) {
        const res = await api.get(link)
        // logger.log('new posts', res.data)
        AppState.nextPage = res.data.older
        AppState.previousPage = res.data.newer
        AppState.posts = res.data.posts.map(p => new Post(p))
    }

    async changeLikeState(postId) {
        const res = await api.post(`api/posts/${postId}/like`)
        // logger.log('results', res.data)
        const post = AppState.posts.find(p => p.id == postId)
        // logger.log('post', post)
        post.likeIds = res.data.likeIds
        post.likes = res.data.likes
    }

    async deletePost(postId) {
        // logger.log('post made it', postId)
        const res = await api.delete(`api/posts/${postId}`)
        const filtered = AppState.posts.filter(p => postId != p.id)
        AppState.posts = filtered
    }

    async getPostsForProfile(profileId) {
        const res = await api.get(`api/profiles/${profileId}/posts`)
        // logger.log('profile posts', res.data)
        AppState.nextPage = res.data.older
        AppState.previousPage = res.data.newer
        AppState.posts = res.data.posts.map(p => new Post(p))
    }

}

export const postService = new PostService()