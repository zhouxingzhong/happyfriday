webpackJsonp([5,3],{0:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var a=n(74),r=i(a),s=n(153),d=i(s),o=n(80),_=i(o),c=n(82),u=i(c),p=n(30);i(p);n(131),n(79),r.default.use(d.default);var w=new d.default({routes:_.default});new r.default({router:w,store:u.default}).$mount("#app")},30:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(89),r=i(a),s=n(84),d=i(s),o=n(85),_=i(o),c=n(86),u=i(c);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return new u.default(function(a,s){e=e.toUpperCase();var o=void 0;if(o=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject,"GET"==e){var c="";(0,_.default)(n).forEach(function(e){c+=e+"="+n[e]+"&"}),c=c.substr(0,c.lastIndexOf("&")),t=t+"?"+c,o.open(e,t,i),o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.send()}else"POST"==e?(o.open(e,t,i),o.setRequestHeader("Content-type","application/json"),o.send((0,d.default)(n))):s("error type");o.onreadystatechange=function(){if(4==o.readyState)if(200==o.status){var e=o.response;"object"!==("undefined"==typeof e?"undefined":(0,r.default)(e))&&(e=JSON.parse(e)),a(e)}else s(o)}})}},73:function(e,t,n){e.exports=n.p+"static/img/1-1.jpg"},75:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},79:function(e,t){"use strict";!function(e,t){var n=e.documentElement,i="orientationchange"in window?"orientationchange":"resize",a=function(){var e=n.clientWidth;e&&(n.style.fontSize=20*(e/320)+"px")};e.addEventListener&&(t.addEventListener(i,a,!1),e.addEventListener("DOMContentLoaded",a,!1))}(document,window)},80:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(145),r=i(a);t.default=[{path:"/",component:r.default,children:[{path:"/",component:function(e){return n.e(1,function(){return e(n(146))})}},{path:"/item",component:function(e){return n.e(0,function(){return e(n(147))})}},{path:"score",component:function(e){return n.e(2,function(){return e(n(148))})}}]}]},81:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(30);i(a);t.default={addNum:function(e,t){var n=e.commit,i=e.state;n("REMBER_ANSWER",t),i.itemNum<i.itemDetail.length&&n("ADD_ITEMNUM",1)},initializeData:function(e){var t=e.commit;t("INIT_DATA")}}},82:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(74),r=i(a),s=n(28),d=i(s),o=n(83),_=i(o),c=n(81),u=i(c),p=n(30);i(p);r.default.use(d.default);var w={level:"第一周",itemNum:1,allTime:0,timer:"",itemDetail:[{topic_id:20,topic_name:"题目一",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,topic_name:"题目二",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,topic_name:"题目三",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]},{topic_id:21,topic_name:"题目四",topic_answer:[{topic_answer_id:13,topic_id:21,answer_name:"正确答案",is_standard_answer:1},{topic_answer_id:14,topic_id:21,answer_name:"A是错的",is_standard_answer:0},{topic_answer_id:15,topic_id:21,answer_name:"D是对的",is_standard_answer:0},{topic_answer_id:16,topic_id:21,answer_name:"C说的不对",is_standard_answer:0}]},{topic_id:21,topic_name:"题目五",topic_answer:[{topic_answer_id:17,topic_id:21,answer_name:"错误答案",is_standard_answer:1},{topic_answer_id:18,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:19,topic_id:21,answer_name:"错误答案",is_standard_answer:0},{topic_answer_id:20,topic_id:21,answer_name:"错误答案",is_standard_answer:0}]}],answerid:[]};t.default=new d.default.Store({state:w,actions:u.default,mutations:_.default})},83:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={ADD_ITEMNUM:function(e,t){e.itemNum+=t},REMBER_ANSWER:function(e,t){e.answerid[e.itemNum]=t.id},REMBER_TIME:function(e){e.timer=setInterval(function(){e.allTime++},1e3)},INIT_DATA:function(e){e.itemNum=1,e.answerid=0,e.answerid=[]}}},131:function(e,t){},135:function(e,t){},145:function(e,t,n){n(135);var i=n(14)(n(75),n(152),null,null);e.exports=i.exports},152:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},staticRenderFns:[]}}});