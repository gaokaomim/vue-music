webpackJsonp([1],{116:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return s});var i={g_tk:5381,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},r={param:"jsonpCallback"},s=0},161:function(t,e,n){"use strict";var i=n(110),r=n(446),s=n(433),a=n.n(s),o=n(435),c=n.n(o),u=n(434),l=n.n(u),d=n(432),f=n.n(d);i.a.use(r.a),e.a=new r.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",component:a.a},{path:"/singer",component:c.a},{path:"/search",component:l.a},{path:"/rank",component:f.a}]})},163:function(t,e){},165:function(t,e,n){function i(t){n(421)}var r=n(31)(n(188),n(442),i,"data-v-73b00972",null);t.exports=r.exports},184:function(t,e,n){"use strict";function i(){var t=c()({},l.b,{platform:"h5",uin:0,needNewCode:1});return n.i(u.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,l.c)}function r(){var t=c()({},l.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return f.a.get("api/getDiscList",{params:t}).then(function(t){return a.a.resolve(t.data)})}e.a=i,e.b=r;var s=n(117),a=n.n(s),o=n(197),c=n.n(o),u=n(186),l=n(116),d=n(166),f=n.n(d)},185:function(t,e,n){"use strict";function i(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)}function r(t,e){if(!i(t,e)){var n=t.className.split(" ");n.push(e),t.className=n.join(" ")}}e.a=r},186:function(t,e,n){"use strict";function i(t,e,n){return t+=(t.indexOf("?")<0?"?":"&")+r(e),new a.a(function(e,i){c()(t,n,function(t,n){t?i(t):e(n)})})}function r(t){var e="";for(var n in t){var i=void 0!==t[n]?t[n]:"";e+="&"+n+"="+encodeURIComponent(i)}return e?e.substring(1):""}e.a=i;var s=n(117),a=n.n(s),o=n(426),c=n.n(o)},187:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(162),r=(n.n(i),n(110)),s=n(165),a=n.n(s),o=n(161),c=n(163),u=(n.n(c),n(164));n.n(u).a.attach(document.body),new r.a({el:"#app",render:function(t){return t(a.a)},router:o.a})},188:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(431),r=n.n(i),s=n(436),a=n.n(s);e.default={components:{MHeader:r.a,Tab:a.a}}},189:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(118),r=n.n(i);e.default={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){this.$refs.wrapper&&(this.scroll=new r.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click}))},enable:function(){this.scroll&&this.scroll.enable()},disable:function(){this.scroll&&this.scroll.disable()},refresh:function(){this.scroll&&this.scroll.refresh()}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},20)}}}},190:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(118),r=n.n(i),s=n(185);e.default={data:function(){return{dots:[],currentPageIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},mounted:function(){var t=this;setTimeout(function(){t._setSliderWidth(),t._initDots(),t._initSlider(),t.autoPlay&&t._play()},20),window.addEventListener("resize",function(){t.slider&&(t._setSliderWidth(!0),t.slider.refresh())},20)},methods:{_setSliderWidth:function(t){this.children=this.$refs.sliderGroup.children;for(var e=0,i=this.$refs.slider.clientWidth,r=0;r<this.children.length;r++){var a=this.children[r];n.i(s.a)(a,"slider-item"),a.style.width=i+"px",e+=i}this.loop&&!t&&(e+=2*i),this.$refs.sliderGroup.style.width=e+"px"},_initDots:function(){this.dots=new Array(this.children.length)},_initSlider:function(){var t=this;this.slider=new r.a(this.$refs.slider,{scrollX:!0,screenY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400}),this.slider.on("scrollEnd",function(){var e=t.slider.getCurrentPage().pageX;t.loop&&(e-=1),t.currentPageIndex=e,t.autoPlay&&(clearTimeout(t.timer),t._play())})},_play:function(){var t=this,e=this.currentPageIndex+1;this.loop&&(e+=1),this.timer=setTimeout(function(){t.slider.goToPage(e,0,400)},this.interval)}},destroyed:function(){clearTimeout(this.timer)}}},191:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},192:function(t,e){},193:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(429),r=n.n(i),s=n(430),a=n.n(s),o=n(184),c=n(116);e.default={data:function(){return{recommends:[],discList:[]}},created:function(){var t=this;setTimeout(function(){t._getRecommend()},2e3),this._getDiscList()},methods:{_getRecommend:function(){var t=this;n.i(o.a)().then(function(e){e.code===c.a&&(t.recommends=e.data.slider)})},_getDiscList:function(){var t=this;n.i(o.b)().then(function(e){e.code===c.a&&(t.discList=e.data.list)})},loadImage:function(){this.checkLoaded||(this.$refs.scroll.refresh(),this.checkLoaded=!0)}},components:{Slider:a.a,Scroll:r.a}}},194:function(t,e){},195:function(t,e){},196:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},416:function(t,e){},417:function(t,e){},418:function(t,e){},419:function(t,e){},420:function(t,e){},421:function(t,e){},422:function(t,e){},423:function(t,e){},424:function(t,e){},429:function(t,e,n){function i(t){n(423)}var r=n(31)(n(189),n(444),i,"data-v-c46eaa8a",null);t.exports=r.exports},430:function(t,e,n){function i(t){n(424)}var r=n(31)(n(190),n(445),i,"data-v-d589a78a",null);t.exports=r.exports},431:function(t,e,n){function i(t){n(419)}var r=n(31)(n(191),n(440),i,"data-v-56a58140",null);t.exports=r.exports},432:function(t,e,n){function i(t){n(417)}var r=n(31)(n(192),n(438),i,"data-v-106fcaa0",null);t.exports=r.exports},433:function(t,e,n){function i(t){n(422)}var r=n(31)(n(193),n(443),i,"data-v-74b4415a",null);t.exports=r.exports},434:function(t,e,n){function i(t){n(416)}var r=n(31)(n(194),n(437),i,"data-v-0e6b8440",null);t.exports=r.exports},435:function(t,e,n){function i(t){n(418)}var r=n(31)(n(195),n(439),i,"data-v-4b8ff140",null);t.exports=r.exports},436:function(t,e,n){function i(t){n(420)}var r=n(31)(n(196),n(441),i,"data-v-6919f4cc",null);t.exports=r.exports},437:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    搜索")])},staticRenderFns:[]}},438:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("排行")])},staticRenderFns:[]}},439:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    歌手")])},staticRenderFns:[]}},440:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-header"},[n("div",{staticClass:"icon"}),t._v(" "),n("h1",{staticClass:"text"},[t._v("Chicken Music")])])}]}},441:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab"},[n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/recommend"}},[n("span",{staticClass:"tab-link"},[t._v("推荐")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/singer"}},[n("span",{staticClass:"tab-link"},[t._v("歌手")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/rank"}},[n("span",{staticClass:"tab-link"},[t._v("排行\n        ")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/search"}},[n("span",{staticClass:"tab-link"},[t._v("搜索")])])],1)},staticRenderFns:[]}},442:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("m-header"),t._v(" "),n("tab"),t._v(" "),n("keep-alive",[n("router-view")],1)],1)},staticRenderFns:[]}},443:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},[n("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:t.discList}},[n("div",[t.recommends.length?n("div",{staticClass:"slider-wrapper"},[n("slider",t._l(t.recommends,function(e){return n("div",[n("a",{attrs:{href:e.linkUrl}},[n("img",{attrs:{src:e.picUrl},on:{load:t.loadImage}})])])}))],1):t._e(),t._v(" "),n("div",{staticClass:"recommend-list"},[n("h1",{staticClass:"list-title"},[t._v("热门歌单推荐")]),t._v(" "),n("ul",t._l(t.discList,function(e){return n("li",{staticClass:"item"},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:e.imgurl,width:"60",height:"60"}})]),t._v(" "),n("div",{staticClass:"text"},[n("h2",{staticClass:"name",domProps:{innerHTML:t._s(e.creator.name)}}),t._v(" "),n("p",{staticClass:"desc",domProps:{innerHTML:t._s(e.dissname)}})])])}))])])]),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},444:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"wrapper"},[t._t("default")],2)},staticRenderFns:[]}},445:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"dots"},t._l(t.dots,function(e,i){return n("span",{staticClass:"dot",class:{active:t.currentPageIndex===i}})}))])},staticRenderFns:[]}}},[187]);
//# sourceMappingURL=app.a514de1be3215d6b8927.js.map