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
        	site.utils.cyberplayer($(".video > .player")[0], 'http://video.jk724.com/76eee6bcaf0b42afb19d6a480014c102/0e3dc851ca7542bca87408f8f9dc4731-88b0e2184495c56e4121b4c194312200.m3u8', "https://img.jk724.com/marketing/imgs/NC-img/NC_08.jpg");
        }
    }
	controller.init();
});
