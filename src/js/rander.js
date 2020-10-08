import $ from 'jquery';
import data from './get-music-info';
import { changeMusic } from './bind-event';
import Music from './music-class'
import blurImg from './gaussBlur'

data().then(data => {
    const musicList = $('.music-list');
    data.forEach((item) => {
        $('<dd>').text(item.name).appendTo(musicList);
    })
})

/**
 * 
 * @export
 * @param  {any} [info={}] 歌曲的信息
 * @param  {any} curNum 当前播放歌曲
 * @return {void}
 */
export default function rander(info = {}, curNum) {
    $('.cover-img img')[0].src = info.image;
    //当dom加载完毕重新改变dom对象
    $('audio').attr('src', info.audioSrc).on('loadedmetadata', function () {
        changeMusic(new Music($('audio'), info))
    })
    $('.info .name').text(info.name);
    $('.info .singer').text(info.singer);
    $('.info .album').text(info.album);
    $('.like').removeClass('liking').addClass(info.isLike ? 'liking' : '');
    $('.music-list dd').removeClass('active').eq(curNum).addClass('active');//跟据当前歌曲修改列表active
    blurImg(info.image, document.body)
    
    const allMinute = (Math.floor(info.duration  / 60)).toString().padStart(2,0);
    const allSecond = (Math.floor(info.duration ) % 60).toString().padStart(2,0);
    $('.all-time').text(`${allMinute}:${allSecond}`)
    $('.cur-time').text(`00:00`)
    $('.dot', '.control').css('left', "0%");
    $('.front-bg', '.control').css('width', "0%");
}


//初始化
(async function () {
    const result = await data();
    rander(result[0], 0);
})()