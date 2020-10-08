import Music from './music-class'
import $ from "jquery"
import { prev, next, selectMusic } from './chang-music'


// 当前歌曲对象
let music;
$('.play-toggle').click(function () {
    if (!music.ele.onended) {
        music.ele.onended = function () {
            $('.next').trigger('touchend')
        }
    }
    if (music.ele.paused) {
        music.play();
    } else {
        music.pause();
    }
})

$('.show-list').on('touchend',function () {
    $('.modal').addClass('show').find('.list').addClass('show');
})

$('.close').on('touchend',function () {
    $('.modal').removeClass('show').find('.list').removeClass('show');
})

$('.like').on('touchend',function () {
    if (music.info.isLike) {
        $(this).removeClass('liking');
        music.info.isLike = false;
    } else {
        $(this).addClass('liking')
        music.info.isLike = true;
    }
})

$('.music-list').click(e => {
    if(e.target.classList.contains('active')){
        return;
    }
    $(e.target).addClass('active').siblings('.active').removeClass('active');
    $('.close').trigger('touchend');
    selectMusic($(e.target).index()) //切换歌曲传入当前dd的index
    //每次切换歌曲时清空当前的定时器，以免影响后续歌曲
    if(music.timer){
        clearInterval(music.timer);
        music.time = null;
    }
    music.ele.onloadedmetadata = function () {
        music.play()
    }
})

$('.modal').on('touchend',function (e) {
    if (e.target === this) {
        $('.close').trigger('touchend');
    }
})

$('.prev').on('touchend',function () {
    prev(); 
    //每次切换歌曲时清空当前的定时器，以免影响后续歌曲
    if(music.timer){
        clearInterval(music.timer);
        music.time = null;
    }
    music.ele.onloadedmetadata = function () {
        music.play()
    }
})

$('.next').on('touchend',function () {
    next();
    //每次切换歌曲时清空当前的定时器，以免影响后续歌曲
     if(music.timer){
        clearInterval(music.timer);
        music.time = null;
    }
    music.ele.onloadedmetadata = function () {
        music.play()
    }
})

function bindScope(scope, type) {
    $('.dot', scope).on('touchstart', function (e) {
        e.preventDefault();
        const touch = e.targetTouches[0];
        const dotStyle = $('.dot', scope)[0].getBoundingClientRect();
        const progressStyle = $('.progress', scope)[0].getBoundingClientRect();
        const disX = touch.clientX - dotStyle.left;
        let zb = null;
        if (type === 'audio') {
            clearInterval(music.timer);
            music.timer = null;
        }
        document.ontouchmove = function (e) {
            const touch = e.targetTouches[0];
            const left = touch.clientX - disX - progressStyle.left;
            const newLeft = Math.max(0, Math.min(progressStyle.width, left));
            zb = newLeft / progressStyle.width;
            if (type === 'audio') {

                const curMinute = (Math.floor(music.ele.duration * zb / 60)).toString().padStart(2, 0);
                const curSecond = (Math.round(music.ele.duration * zb) % 60).toString().padStart(2, 0);
                $('.cur-time').text(`${curMinute}:${curSecond}`)
                music.progressChange(zb * 100, '.control');//转为百分比
            } else if (type === 'volume') {
                music.volumeChange(zb)
            }
        }
        document.ontouchend = function (e) {
            if (type === 'audio') {
                music.setTimer();
                //如果没有拖拽圆点，zb就是null,所以在timeChange进行容错
                music.timeChange(zb);
            }
            document.ontouchmove = null;
            document.ontouchend = null;
        }
    })

    $('.back-bg', scope)[0].ontouchstart = function (e) {
        const touch = e.targetTouches[0];
        progresClick(touch.clientX)
    }

    $('.front-bg', scope)[0].ontouchstart = function (e) {
        const touch = e.targetTouches[0];
        progresClick(touch.clientX)
    }




    function progresClick(num) {
        const progressStyle = $('.progress', scope)[0].getBoundingClientRect();
        const x = num - progressStyle.left;
        const zb = x / progressStyle.width;
        if (type === 'audio') {
            music.timeChange(zb)
        } else if (type === 'volume') {
            music.volumeChange(zb)
        }
    }

}

bindScope('.control', 'audio');
bindScope('.volume-control', 'volume');



//让其他模块修改歌曲对象
export function changeMusic(musicObj) {
    music = musicObj;
}

