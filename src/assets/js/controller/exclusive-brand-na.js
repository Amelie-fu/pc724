/**
 * 作者：yujinjin9@126.com
 * 时间：2018-03-06
 * 描述：站点首页
 */
import "../site";
import '../../style/exclusive-brand.less';

$(function(){
	var controller = {
        init: function () {
        	site.utils.cyberplayer($(".video > .player")[0], 'http://video.jk724.com/d660b72b5ee74694a5187dc9d99871ed/ad72ba9daa464d0ea6cf4032991c0801-88b0e2184495c56e4121b4c194312200.m3u8', "https://img.jk724.com/marketing/imgs/NA-img/NA_05.jpg");
        }
    }
	controller.init();
});
