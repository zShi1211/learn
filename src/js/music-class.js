import $ from 'jquery';
export default class {
    constructor(ele = $('audio'), info) {
        this.ele = $(ele).get(0);//转为原生dom
        this.info = info;
        this.timer = null;
        this.curtime = $('.curtime');
        this.alltime = $('.alltime');
    }
    play() {
        this.ele.play();
        $('.cover-img').addClass('play');
        $('.play-toggle').addClass('play');
        if (!this.timer) {
            this.setTimer()
        }
    }
    setTimer() {
        this.timer = setInterval(() => {
            this.setCurTime();
            this.curBZ();
        }, 1000);
    }
    pause() {
        this.ele.pause();
        $('.cover-img').removeClass('play');
        $('.play-toggle').removeClass('play');
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    setCurTime() {
        const curMinute = (Math.floor(this.ele.currentTime / 60)).toString().padStart(2, 0);
        const curSecond = (Math.round(this.ele.currentTime) % 60).toString().padStart(2, 0);
        $('.cur-time').text(`${curMinute}:${curSecond}`)
    }
    curBZ() {
        const zb = Math.round(this.ele.currentTime) / Math.round(this.ele.duration) * 100;
        this.progressChange(zb, '.control');
    }
    progressChange(num, scope) {
        $('.dot', scope).css('left', num + '%')
        $('.front-bg', scope).css('width', num + '%')
    }
    timeChange(num) {
        if(num === null){
            return;
        }
        this.ele.currentTime = Math.floor(this.ele.duration * num);
        const zb = num * 100;
        this.progressChange(zb, '.control');
        this.setCurTime();
    }
    volumeChange(num) {
        this.ele.volume = num;
        const zb = num * 100;
        this.progressChange(zb, '.volume-control');
    }
}