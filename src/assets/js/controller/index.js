/**
 * 作者：yujinjin9@126.com
 * 时间：2018-03-06
 * 描述：站点首页
 */
import "../site";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import '../../style/index.less';

$(function(){
	var controller = {
        init: function () {
        	this.bindEvent();
        },
        bindEvent(){
        	this.mySwiper = new Swiper(".swiper-container", {
        		loop: true,
        		speed:600,
        		grabCursor : true,
        		parallax:true,
        		autoplay:{
        		  delay: 3000,
        		},	
        		pagination: {
        		  el:'#bannerpagination',
        		  clickable :true,
        		},
        		navigation: {
        	      nextEl: '.arrow-right',
        	      prevEl: '.arrow-left',
        	    },
        	});
        	let _this = this;
        	site.utils.cyberplayer($(".video > .player")[0], 'https://ggdbk8kz8u8531ereak.exp.bcevod.com/mda-hhpq1109fc2xgap2/mda-hhpq1109fc2xgap2.m3u8', "https://ggdbk8kz8u8531ereak.exp.bcevod.com/mda-hhpq1109fc2xgap2/mda-hhpq1109fc2xgap2.jpg").then((cyberplayer)=>{
        		_this.cyberplayer = cyberplayer;
        	});
        	$("a.player").click(function(){
        		_this.cyberplayer.play();
        	});
        }
    }
	controller.init();
});
