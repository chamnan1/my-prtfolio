webpackJsonp([1,2],[,,,,,,,,,,,function(e,t,s){"use strict";var o=s(3),n=s(49),r=s(15),i=s.n(r),a=s(41),c=s.n(a),l=s(42),p=s.n(l),u=s(43),d=s.n(u);o.a.use(c.a,i.a),o.a.use(n.a);var f=[{path:"/",component:p.a},{path:"/projects",component:d.a,meta:{progress:{func:[{call:"color",modifier:"temp",argument:"#ffb000"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s"}}]}}}];t.a=new n.a({mode:"history",routes:f,linkActiveClass:"is-active"})},function(e,t,s){var o=s(1)(s(34),s(46),null,null);o.options.__file="/Users/tanisorn/my-prtfolio/src/components/navbar.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},,,,,,,,,,,,,,,,,,,,,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="undefined"!=typeof window;t.default={name:"VueProgress",serverCacheKey:function(){return"Progress"},computed:{style:function e(){var t=this.progress.options.location,e={"background-color":this.progress.options.canSuccess?this.progress.options.color:this.progress.options.failedColor,opacity:this.progress.options.show?1:0};return"top"==t||"bottom"==t?("top"===t?e.top="0px":e.bottom="0px",this.progress.options.inverse?e.right="0px":e.left="0px",e.width=this.progress.percent+"%",e.height=this.progress.options.thickness,e.transition="width "+this.progress.options.transition.speed+", opacity "+this.progress.options.transition.opacity):"left"!=t&&"right"!=t||("left"===t?e.left="0px":e.right="0px",this.progress.options.inverse?e.top="0px":e.bottom="0px",e.height=this.progress.percent+"%",e.width=this.progress.options.thickness,e.transition="height "+this.progress.options.transition.speed+", opacity "+this.progress.options.transition.opacity),e},progress:function(){return o?window.VueProgressBarEventBus.RADON_LOADING_BAR:{percent:0,options:{canSuccess:!0,show:!1,color:"rgb(19, 91, 55)",failedColor:"red",thickness:"2px",transition:{speed:"0.2s",opacity:"0.6s"},location:"top",autoRevert:!0,inverse:!1}}}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"navbar"}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"home"}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"projects",data:function(){return{projects:[]}},methods:{loadProjects:function(){var e=this;this.$Progress.start(),this.axios.get("https://api.github.com/users/zickfz/repos").then(function(t){e.$Progress.finish(),e.projects=t.data})}},mounted:function(){this.loadProjects()}}},function(e,t,s){t=e.exports=s(9)(),t.push([e.i,"\n.avatar {\n  display: inline-block;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  background-image: url("+s(40)+");\n  border: 1px solid #e5e5e5;\n  margin-bottom: 2em;\n}\n\n\n",""])},function(e,t,s){t=e.exports=s(9)(),t.push([e.i,"\n.__cov-progress {\n  position: fixed;\n  opacity: 1;\n  z-index: 999999;\n}\n",""])},,function(e,t,s){e.exports=s.p+"static/img/avatar.d15f87a.jpg"},,function(e,t,s){s(50);var o=s(1)(s(35),s(45),null,null);o.options.__file="/Users/tanisorn/my-prtfolio/src/containers/Home.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,s){var o=s(1)(s(36),s(48),null,null);o.options.__file="/Users/tanisorn/my-prtfolio/src/containers/projects.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] projects.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,s){s(51);var o=s(1)(s(33),s(47),null,null);o.options.__file="/Users/tanisorn/my-prtfolio/node_modules/vue-progressbar/vue-progressbar.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] vue-progressbar.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"home"}},[s("div",{staticClass:"avatar"}),e._v(" "),s("section",{staticClass:"hero"},[s("h1",{staticClass:"title is-1"},[s("vue-typer",{attrs:{text:"Hello,"}})],1),e._v(" "),s("p",{staticClass:"subtitle is-2"},[e._v("My name is Pom. I'm a Developer living in Bangkok.")])]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"section"},[s("div",{staticClass:"block"},[s("a",{attrs:{href:"https://www.linkedin.com/in/tanisorn/",target:"_blank"}},[s("i",{staticClass:"fa fa-linkedin-square icon is-large"})]),e._v(" "),s("a",{attrs:{href:"https://github.com/zickfz",target:"_blank"}},[s("i",{staticClass:"fa fa-github-square icon is-large"})]),e._v(" "),s("a",{attrs:{href:"https://www.facebook.com/tanisorn",target:"_blank"}},[s("i",{staticClass:"fa fa fa-facebook-square icon is-large"})])])])}]},e.exports.render._withStripped=!0},function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"nav has-shadow"},[s("div",{staticClass:"nav-left"},[s("router-link",{staticClass:"nav-item is-brand",attrs:{to:"/"}},[s("i",{staticClass:"fa fa-home icon is-medium"}),e._v("Home\n    ")]),e._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"/projects"}},[s("i",{staticClass:"fa fa-list-alt icon is-medium"}),e._v(" Project List\n    ")])],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"__cov-progress",style:e.style})},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"projects"}},[s("vue-progress-bar"),e._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half"},[s("div",{staticClass:"notification"},[e._v("\n        Github repositories\n      ")]),e._v(" "),s("div",{},[s("table",{staticClass:"table"},[e._m(0),e._v(" "),s("tbody",e._l(e.projects,function(t){return s("tr",[s("td",[e._v(e._s(t.name))]),e._v(" "),s("td",[s("a",{attrs:{href:t.html_url}},[e._v("See more")])]),e._v(" "),s("td",[e._v(e._s(t.description))])])}))])])])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",[e._v("Project Name")]),e._v(" "),s("th",[e._v("URL")]),e._v(" "),s("th",[e._v("Description")])])])}]},e.exports.render._withStripped=!0},,function(e,t,s){var o=s(37);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);s(10)("57d5f349",o,!1)},function(e,t,s){var o=s(38);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);s(10)("54efc406",o,!1)},,,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(3),n=s(13),r=s.n(n),i=s(14),a=s.n(i),c=s(12),l=s.n(c),p=s(11),u={color:"#bffaf3",failedColor:"#874b4b",thickness:"5px",transition:{speed:"0.2s",opacity:"0.6s"},autoRevert:!0,location:"top",inverse:!1};o.a.use(a.a),o.a.use(r.a,u),new o.a({template:'\n  <div>\n    <navbar />\n    <section class="section">\n      <div class="container is-fluid">\n        <router-view></router-view>\n      </div>\n    </section>\n  </div>\n  ',router:p.a,components:{navbar:l.a}}).$mount("#app")}],[54]);
//# sourceMappingURL=app.9733020d9fb1cb256d30.js.map