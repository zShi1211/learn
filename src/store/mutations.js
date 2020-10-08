import { PLAYER_LIST, NOW_PLAYER_MUSIC, CHANGE_PAUSE } from './mutationsType'
export default {
    [PLAYER_LIST](state, playerList) {
        state.playerList = playerList;
    },
    [NOW_PLAYER_MUSIC](state, payload) {
        state.nowPlayerMusic = {
            musicInfo: payload.info,
            index: payload.index,
            allInfo: payload
        }
    },
    [CHANGE_PAUSE](state, bool) {
        state.isPause = bool;
    }
}