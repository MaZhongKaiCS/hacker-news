(function(e){function t(t){for(var n,a,i=t[0],l=t[1],c=t[2],m=0,p=[];m<i.length;m++)a=i[m],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,a=1;a<s.length;a++){var l=s[a];0!==o[l]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},o={app:0},r=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7f186ac1"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(e){var t=[],s=o[e];if(0!==s)if(s)t.push(s[2]);else{var n=new Promise((function(t,n){s=o[e]=[t,n]}));t.push(s[2]=n);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=a(e);var c=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(m);var s=o[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",c.name="ChunkLoadError",c.type=n,c.request=r,s[1](c)}o[e]=void 0}};var m=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"299c":function(e,t,s){"use strict";s("6b47")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],a=s("2877"),i={},l=Object(a["a"])(i,o,r,!1,null,null,null),c=l.exports,m=(s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f")),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[e._m(0),s("commentBox",{staticClass:"commentBox"})],1)},p=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"nav"},[s("p",{staticClass:"title"},[e._v("Hacker News")]),s("p",{staticClass:"navItems"},[e._v("new")]),s("p",{staticClass:"navItems2"},[e._v("|")]),s("p",{staticClass:"navItems"},[e._v("past")]),s("p",{staticClass:"navItems2"},[e._v("|")]),s("p",{staticClass:"navItems"},[e._v("comments")]),s("p",{staticClass:"navItems2"},[e._v("|")]),s("p",{staticClass:"navItems"},[e._v("ask")]),s("p",{staticClass:"navItems2"},[e._v("|")]),s("p",{staticClass:"navItems"},[e._v("show")]),s("p",{staticClass:"navItems2"},[e._v("|")]),s("p",{staticClass:"navItems"},[e._v("jobs")]),s("p",{staticClass:"navItems2"},[e._v("|")]),s("p",{staticClass:"navItems"},[e._v("submit")])])}],v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"commentBox"},[s("div",{staticClass:"inputTextBox"},[s("label",{staticClass:"title"},[e._v("用户名")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.userName,expression:"userName",modifiers:{trim:!0}}],staticClass:"inputArea",attrs:{type:"text",placeholder:"你的用户名"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),s("label",{staticClass:"title"},[e._v("评论内容")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.userComment,expression:"userComment"}],staticClass:"inputArea",attrs:{name:"comment",id:"comment",cols:"60",rows:"10",placeholder:"评论内容"},domProps:{value:e.userComment},on:{input:function(t){t.target.composing||(e.userComment=t.target.value)}}}),s("button",{staticClass:"addComment",on:{click:function(t){return e.addComment()}}},[e._v("添加评论")])]),s("div",{staticClass:"commentList"},[s("ul",{staticClass:"list-group"},e._l(e.commentsList,(function(t,n){return s("li",{key:t.id,staticClass:"list-group-items"},[s("span",{on:{click:function(s){return e.hideContent(t)}}},[e._v("[-] ")]),s("span",{staticClass:"user"},[e._v("用户： "+e._s(t.user))]),e._v(" "),s("br"),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"item.show"}],staticClass:"contentBox"},[s("div",{staticClass:"content"},[e._v(e._s(t.content))]),s("button",{staticClass:"reply",on:{click:function(s){return e.changeIsReply(t)}}},[e._v("回复")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.replyShow,expression:"item.replyShow"}],staticClass:"replyBox"},[s("label",{staticClass:"replyTitle"},[e._v("用户名")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.replyUserName,expression:"replyUserName",modifiers:{trim:!0}}],staticClass:"replyInputArea",attrs:{type:"text",placeholder:"你的用户名"},domProps:{value:e.replyUserName},on:{input:function(t){t.target.composing||(e.replyUserName=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),s("label",{staticClass:"replyTitle"},[e._v("回复内容")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.replyUserComment,expression:"replyUserComment"}],staticClass:"replyInputArea",attrs:{name:"comment",id:"comment",cols:"50",rows:"8",placeholder:"回复内容"},domProps:{value:e.replyUserComment},on:{input:function(t){t.target.composing||(e.replyUserComment=t.target.value)}}}),s("button",{staticClass:"replyAddComment",on:{click:function(s){return e.addReply(t,n)}}},[e._v("回复")])]),s("div",{staticClass:"replyList"},[s("ul",{staticClass:"reply-group"},e._l(t.reply,(function(t){return s("li",{key:t.id,staticClass:"reply-group-items"},[s("span",{on:{click:function(s){return e.hideReplyItems(t)}}},[e._v("[-] ")]),s("span",{staticClass:"replyUser"},[e._v("用户： "+e._s(t.user))]),e._v(" "),s("br"),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"replyItems.show"}],staticClass:"replyContent"},[e._v(e._s(t.comment))]),s("button",{staticClass:"replyButton"},[e._v("回复")])])})),0)])])])})),0)])])},d=[],f=(s("e9c4"),{components:{},name:"inputTextBox",props:{},data:function(){return{commentsList:[],userName:"",userComment:"",replyUserName:"",replyUserComment:""}},methods:{localComments:function(){this.commentsList=JSON.parse(localStorage.getItem("comments")||"[]")},addComment:function(){var e={id:Date.now(),user:this.userName,content:this.userComment,show:!0,replyShow:!1,reply:[]},t=JSON.parse(localStorage.getItem("comments")||"[]");e.user&&e.content&&(t.push(e),localStorage.setItem("comments",JSON.stringify(t)),this.localComments()),this.userName="",this.userComment=""},hideContent:function(e){e.show=!e.show},addReply:function(e,t){var s={id:Date.now(),user:this.replyUserName,comment:this.replyUserComment,show:!0},n=JSON.parse(localStorage.getItem("comments")||"[]");s.user&&s.comment&&(console.log(!0),n[t].reply.push(s),localStorage.setItem("comments",JSON.stringify(n)),this.localComments()),this.replyUserName="",this.replyUserComment="",e.replyShow=!e.replyShow},changeIsReply:function(e){e.replyShow=!e.replyShow},hideReplyItems:function(e){console.log(e),e.show=!e.show}},created:function(){this.localComments(),console.log(this.commentsList)},mounted:function(){}}),h=f,y=(s("dbfb"),Object(a["a"])(h,v,d,!1,null,"2179f714",null)),C=y.exports,w={name:"Home",components:{commentBox:C}},b=w,_=(s("299c"),Object(a["a"])(b,u,p,!1,null,"36e649a8",null)),g=_.exports;n["a"].use(m["a"]);var x=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],N=new m["a"]({mode:"history",base:"/",routes:x}),I=N,S=s("2f62");n["a"].use(S["a"]);var O=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:I,store:O,render:function(e){return e(c)}}).$mount("#app")},"6b47":function(e,t,s){},"74f7":function(e,t,s){},dbfb:function(e,t,s){"use strict";s("74f7")}});
//# sourceMappingURL=app.3f4beb5d.js.map