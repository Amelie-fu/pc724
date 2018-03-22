import components from "./components";
import log from "./utils/log";
import utils from "./utils/utils";
import {ajax, ajaxMock} from "./services/ajax";
import api from "./services/api";
import "../style/common.less";

const site = {
	config: {
		contextPath: "/", //项目相对路径
	    uploadImgServer: "", //图片上传服务
	    webapiDomain: "", //项目相对路径
	    projectPath: "", //项目全路径
	    resourecePath: "/assets", //资源路径
	    mobilePath: "", //移动端全路径
	    isDebug: (!process.env.NODE_ENV && process.env.NODE_RUN !== "0"), //前端是否调试模式
	    isRelease: (process.env.NODE_RUN === "1"), //是否发布环境
	    version: "0.0.3" //版本号
	},
};
Object.keys(components).forEach((key) => {
    site[key] = components[key];
});
site.config = Object.assign(site.config, config);
if(site.config.isDebug){
	log.level = log.levels.DEBUG;
}
window.site = $.extend(true, site, {log, utils, ajax, ajaxMock, api});

// 系统页面初始化
$(function(){
	var controller = {
        init: function () {
        	this.initHeader();
        },
        initHeader(){
			let file = utils.parseUrl(window.location.href).file || "index.html", liElements = $(".header ul li");
			for(let i = 0; i < liElements.length; i++) {
				if($(liElements[i]).data("file").includes(file) && !$(liElements[i]).hasClass("active")){
					$(".header ul li.active").removeClass("active");
					$(liElements[i]).addClass("active");
					$(liElements[i-1]).find("a").css("background","none");
					break;
				}
			}
		}
    }
	controller.init();
});