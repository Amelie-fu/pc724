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
        	site.utils.cyberplayer($(".video > .player")[0], 'http://video.jk724.com/5dd9a95965bc47a097dfe30b79140ce4/a6440b86d5ef4bdabaebe7c6f4d2544d-88b0e2184495c56e4121b4c194312200.m3u8', "https://img.jk724.com/marketing/imgs/LC-img/LC_05.jpg");
        }
    }
	controller.init();
});
