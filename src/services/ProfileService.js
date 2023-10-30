import { AppState } from "../AppState"
import { Account } from "../models/Account"
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

    async getAccFromSearch(data) {
        const res = await api.get(`api/profiles?query=${data}`)
        logger.log('profiles', res.data)
        AppState.profiles = res.data
    }

    clearAppState() {
        AppState.posts = []
        AppState.nextPage = null
        AppState.previousPage = null
        AppState.ads = []
        AppState.profile = {}
    }

}

export const profileService = new ProfileService()