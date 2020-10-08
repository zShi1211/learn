import { axios } from './index'
import urls from './url'

// 横幅
export async function banner(type) {
    return axios.get(urls.banner, {
        params: {
            type
        }
    })
}

// 推荐歌单
export async function personalized(limit) {
    return axios.get(urls.personalized, {
        params: {
            limit
        }
    })
}

// 歌单详情
export async function palyListDetail(id) {
    return axios.get(urls.playlistDetail, {
        params: {
            id
        }
    })
}
// 歌曲详情
export async function songDetail(ids) {
    return axios.get(urls.songDetail, {
        params: {
            ids
        }
    })
}
// 推荐歌单评论
export async function commentPlayList(id, limit = 20, offset = 1) {
    return axios.get(urls.commentPlaylist, {
        params: {
            id,
            limit,
            offset
        }
    })
}
// 推荐歌曲mp3
export async function getSongUrl(id) {
    return axios.get(urls.songUrl, {
        params: {
            id,
        }
    })
}

// 获取歌词
export async function getLyric(id) {
    return axios.get(urls.getLyric, {
        params: {
            id,
        }
    })
}
// 获取歌曲评论
export async function commentMusic(id, limit = 20, offset = 1) {
    return axios.get(urls.commentMusic, {
        params: {
            id,
            limit,
            offset
        }
    })
}
// 获取热门搜索
export async function searchHot() {
    return axios.get(urls.searchHot)
}
// 获取搜索联想
export async function searchSuggest(keywords) {
    return axios.get(urls.searchSuggest, {
        params: {
            keywords
        }
    })
}
// 获取搜索歌曲列表
export async function searchMusic(keywords, limit = 20, offset = 1) {
    return axios.get(urls.searchMusic, {
        params: {
            keywords,
            limit,
            offset
        }
    })
}