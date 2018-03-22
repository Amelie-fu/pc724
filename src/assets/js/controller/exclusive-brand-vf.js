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
        	site.utils.cyberplayer($(".video > .player")[0], 'http://video.jk724.com/37af3c24365a4e2ea39964e38c4240a5/7a7c58f058704a54960d2ff1697fef31-88b0e2184495c56e4121b4c194312200.m3u8', "https://img.jk724.com/marketing/imgs/vf-img/VF_21.jpg");
        }
    }
	controller.init();
});
