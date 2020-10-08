import rander from './rander';
import data from './get-music-info'

let curMusic = 0;

//上一首
export async function prev() {
    const result = await data();
    curMusic--;
    if (curMusic < 0) {
        curMusic = result.length - 1;
    }
    rander(result[curMusic], curMusic)
}

// 下一首
export async function next() {
    const result = await data();
    curMusic++;
    if (curMusic >= result.length) {
        curMusic = 0;
    }
    rander(result[curMusic], curMusic)
}

//列表切歌
/**
 * 
 * @export
 * @param  {any} num //播放第几首歌
 * @return {void}
 */
export async function selectMusic(num) {
    const result = await data();
    curMusic = num;
    rander(result[curMusic], curMusic)
}

