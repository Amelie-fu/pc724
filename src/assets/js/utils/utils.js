/**
 * 作者：yujinjin9@126.com 
 * 时间：2015-09-28 
 * 描述：前端常用工具函数
 */
module.exports = {
	//日期格式化
	dateFormat(date, fmt) {
        // TODO: 没有经过测试
        if (!date || !date instanceof Date) {
            return "";
        }
        fmt = fmt?fmt:"yyyy-MM-dd";
        var o = {
            "M+": date.getMonth() + 1, // 月份
            "d+": date.getDate(), // 日
            "h+": date.getHours(), // 小时
            "m+": date.getMinutes(), // 分
            "s+": date.getSeconds(), // 秒
            "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
            "S": date.getMilliseconds() // 毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
   	},
   	
   	// url解析
   	parseUrl(url) {
    	if(!url) {
			return;
		}
		var _a_el = document.createElement("a");
		_a_el.href = url;
		return {
			protocol: _a_el.protocol.replace(':', ''), //协议
			host: _a_el.hostname, //域名
			port: _a_el.port,
			query: (function() {
				if(_a_el.search) {
					return _a_el.search;
				}
				//兼容http://xxxx/#/id=xxx这种格式
				if(url.indexOf("?") != -1) {
					return url.substring(url.indexOf("?"));
				}
				return "";
			})(),
			params: (function() {
				var ret = {},
					seg = _a_el.search;
				//兼容http://xxxx/#/id=xxx这种格式
				if(!seg && url.indexOf("?") != -1) {
					seg = url.substring(url.indexOf("?"));
				}
				seg = seg.replace(/^\?/, '').split('&');
				var len = seg.length,
					i = 0,
					s;
				for(; i < len; i++) {
					if(!seg[i]) {
						continue;
					}
					s = seg[i].split('=');
					ret[s[0]] = s[1];
				}
				return ret;
			})(), //参数对象
			file: (_a_el.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
			hash: _a_el.hash.replace('#', ''),
			path: _a_el.pathname.replace(/^([^\/])/, '/$1'),
			relative: (_a_el.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
			segments: _a_el.pathname.replace(/^\//, '').split('/')
		}
    },
    
    //前端生成GUID
    generateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },
    
    //本地缓存数据
    localStorage(key, value) {
        if (!window || !window.localStorage) {
            //site.modal.alert("您开启了秘密浏览或无痕浏览模式，请关闭!");
            return;
        }
        if (arguments.length === 0) {
            //site.log.warn("没有参数");
        } else if (arguments.length === 1) {
            return window.localStorage.getItem(key);
        } else if (value === null || value === '') {
            window.localStorage.removeItem(key);
        } else if (typeof (value) === "object") {
            window.localStorage.setItem(key, JSON.stringify(value));
        } else {
            window.localStorage.setItem(key, value);
        }
    },

    //验证身份证
    validateIDCard(IDCard) {
        if (!IDCard) {
            return false;
        }
        IDCard = IDCard.replace(/\s+/g, "");
        var reg = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
        if (reg.test(IDCard)) {
            return true;
        } else {
            return false;
        }
    },

    //验证手机号
    validateMobile(mobile) {
        if (!mobile) {
            return false;
        }
        mobile = $.trim(mobile).replace(/\s/g, '');
        if (!(/^(13[0-9]|15[012356789]|17[0123456789]|18[0-9]|14[57])[0-9]{8}$/.test($.trim(mobile)))) {
            return false;
        } else {
            return true;
        }
    },
    
    /**
	 * 百度视频播放器播放
	 * @param selector 播放视频的选择器DOM
	 * @param playURL 播放视频的URL
	 * @param coverUrl 播放视频的预览图
	 * @param options 视频播放器的配置项
	 * @param return Promise对象,成功之后传入播放器的的对象,如果失败会传入false参数
	 */ 
	cyberplayer(selector, playURL, coverUrl, options){
		return new Promise((resolve, reject) => {
			if(!playURL) {
				mui.toast('无法获取到视频播放URL！');
				reject(false);
				return;
			}
			require(["../lib/cyberplayer"], function (cyberplayer) {
				try{
					options = Object.assign({}, {
						width: '100%', // 宽度，也可以支持百分比(不过父元素宽度要有)
						height: '100%', // 高度，也可以支持百分比
						file: playURL, // 播放地址
						image: coverUrl, // 预览图
						autostart: false, // 是否自动播放
						stretching: "uniform", // 拉伸设置
						repeat: false, // 是否重复播放
						volume: 100, // 音量
						controls: true, // controlbar是否显示
						starttime: 0, // 视频开始播放时间，如果不设置，则可以从上次播放时间点续播
						primary: "html5", // 首先使用html5还是flash播放，默认：html5
						ak: "974be5fa22fb45c7af33c14d07161306" // 公有云平台注册即可获得accessKey
					}, options || {});
					let cyberplayerObject = cyberplayer(selector).setup(options);
					resolve(cyberplayerObject);
				} catch(e) {
					alert("视频播出错....");
					app.log.error(e);
					reject(false);
				}
			});
		});
	},

    downloadTempFile(file) {
        location.href = config.contextPath + '/File/DownloadTempFile?fileType=' + file.fileType + '&fileToken=' + file.fileToken + '&fileName=' + file.fileName;
    },

    downloadFile(url, queryFilter) {
        var form = $("<form>");
        form.attr('style', 'display:none');
        form.attr('target', '');
        form.attr('method', 'post');
        form.attr('action', url);

        if (queryFilter) {
            var inputArray = [];
            for (var key in queryFilter) {
                var input1 = $('<input>');
                input1.attr('type', 'hidden');
                input1.attr('name', key);
                input1.attr('value', queryFilter[key]);
                inputArray.push(input1);
            }

            $('body').append(form);
            for (var i = 0; i < inputArray.length; i++) {
                form.append(inputArray[i]);
            }

            form.submit();
            form.remove();
        }
    },

    getCookieValue(key) {
        var equalities = document.cookie.split('; ');
        for (var i = 0; i < equalities.length; i++) {
            if (!equalities[i]) {
                continue;
            }
            var splitted = equalities[i].split('=');
            if (splitted.length != 2) {
                continue;
            }
            if (decodeURIComponent(splitted[0]) === key) {
                return decodeURIComponent(splitted[1] || '');
            }
        }
        return null;
    },

    setCookieValue(key, value, expireDate, path) {
        var cookieValue = encodeURIComponent(key) + '=' + encodeURIComponent(value);
        if (expireDate) {
            cookieValue = cookieValue + "; expires=" + expireDate.toUTCString();
        }
        if (path) {
            cookieValue = cookieValue + "; path='" + path + "'";
        }
        document.cookie = cookieValue;
    },

    isPc() {
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
        }
        return flag;
    }
}
