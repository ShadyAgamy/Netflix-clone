(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(20),i=n.n(a),s=(n(30),n(31),n(5)),r=n.n(s),l=n(8),d=n(4),u=n(21),v=n(24),f=n.n(v),h=n(0),b={height:"390",width:"100%",playerVars:{autoplay:1}};var j=function(e){var t=e.movie;console.log("Video component monted");var n=Object(c.useState)(""),o=Object(d.a)(n,2),a=o[0],i=o[1];return Object(c.useEffect)((function(){console.log(null===t||void 0===t?void 0:t.name),f()((null===t||void 0===t?void 0:t.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);console.log(t.get("v")),i(t.get("v"))})).catch((function(e){return console.log(e)}))}),[t,a]),Object(h.jsx)(u.a,{videoId:a,opts:b})},m=n(25),p=n.n(m).a.create({baseURL:"https://api.themoviedb.org/3"});n(72);var g=function(e){var t=e.title,n=e.fetchUrl,o=e.isLargeRow,a=Object(c.useState)([]),i=Object(d.a)(a,2),s=i[0],u=i[1],v=Object(c.useState)(""),f=Object(d.a)(v,2),b=f[0],m=f[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(n);case 2:t=e.sent,u(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("h2",{children:t}),Object(h.jsx)("div",{className:"row__posters",children:s.map((function(e){return Object(h.jsx)("img",{onClick:function(){return function(e){m(e)}(e)},className:"row__poster ".concat(o?"row__poster--large":""),src:"".concat("https://image.tmdb.org/t/p/original").concat(o?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),b?Object(h.jsx)(j,{movie:b}):null]})},O="7bbee3bd234e91723f59f57f5ef6b033",x={fetchTrending:"/trending/all/week?api_key=".concat(O,"&language=en-US"),fetchNetflixOriginals:"discover/tv?api_key=".concat(O,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(O,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(O,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(O,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(O,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(O,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(O,"&with_genres=99")};n(73);var _=function(){var e,t,n=Object(c.useState)([]),o=Object(d.a)(n,2),a=o[0],i=o[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(x.fetchNetflixOriginals);case 2:t=e.sent,n=Math.floor(Math.random()*t.data.results.length-1),i(t.data.results[n]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(a),Object(h.jsxs)("header",{className:"banner",style:{backgroundImage:'url("'.concat("https://image.tmdb.org/t/p/original","/").concat(null===a||void 0===a?void 0:a.backdrop_path,'")')},children:[Object(h.jsxs)("div",{className:"banner_contents",children:[Object(h.jsx)("h1",{className:"banner_title",children:(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name)}),Object(h.jsxs)("div",{className:"banner__buttons",children:[Object(h.jsx)("button",{className:"banner_button",children:"Play"}),Object(h.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(h.jsx)("h2",{className:"banner_description",children:(e=null===a||void 0===a?void 0:a.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(h.jsx)("div",{className:"banner--fadeBottom"})]})};n(74);var w=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?o(!0):o(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(h.jsxs)("div",{className:"nav ".concat(n&&"nav_black"),children:[Object(h.jsx)("img",{className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix Logo"}),Object(h.jsx)("img",{className:"nav_avatar",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"Avatar"})]})};var N=function(){return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(w,{}),Object(h.jsx)(_,{}),Object(h.jsx)(g,{title:"NETFLIX ORIGINAL",fetchUrl:x.fetchNetflixOriginals,isLargeRow:!0}),Object(h.jsx)(g,{title:"TRENDING NOW",fetchUrl:x.fetchTrending}),Object(h.jsx)(g,{title:"Top Rated",fetchUrl:x.fetchTopRated}),Object(h.jsx)(g,{title:"Action Movies",fetchUrl:x.fetchActionMovies}),Object(h.jsx)(g,{title:"Comedy Movies",fetchUrl:x.fetchComedyMovies}),Object(h.jsx)(g,{title:"Horror Movies",fetchUrl:x.fetchHorrorMovies}),Object(h.jsx)(g,{title:"Romance Movies",fetchUrl:x.fetchRomanceMovies}),Object(h.jsx)(g,{title:"documentaries ",fetchUrl:x.fetchDocumentaries})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root")),k()}},[[75,1,2]]]);
//# sourceMappingURL=main.963ad186.chunk.js.map