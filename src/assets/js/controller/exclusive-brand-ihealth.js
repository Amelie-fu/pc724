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
        	site.utils.cyberplayer($(".video > .player")[0], 'http://video.jk724.com/579eb6ea344a46398ab34c43ea57b34a/abe73be98129471892fe912da673102f-88b0e2184495c56e4121b4c194312200.m3u8', "https://img.jk724.com/marketing/imgs/IH-img/IH_05.jpg");
        }
    }
	controller.init();
});
