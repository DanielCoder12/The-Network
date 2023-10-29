import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ProfileService {

    async getProfileById(accountId) {
        AppState.profile = {}
        const res = await api.get(`api/profiles/${accountId}`)
        // logger.log('accounts posts', res.data)
        AppState.profile = res.data
    }

    clearAppState() {
        AppState.posts = []
        AppState.nextPage = null
        AppState.previousPage = null
        AppState.ads = []
    }

}

export const profileService = new ProfileService()