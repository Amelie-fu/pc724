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
        	site.utils.cyberplayer($(".video > .player")[0], 'http://video.jk724.com/972855ef70154247b627073b3b732566/b9093958de43477f9f41b26cdbf4d795-88b0e2184495c56e4121b4c194312200.m3u8', "https://img.jk724.com/marketing/imgs/NO-img/NO_06.jpg");
        }
    }
	controller.init();
});
