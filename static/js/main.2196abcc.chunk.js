(this["webpackJsonpweb-playback-sdk-sample-app"]=this["webpackJsonpweb-playback-sdk-sample-app"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(18),r=n.n(s),i=n(2),j=n(38),o=n.n(j),l=n(47),u=n(7),b=n(8),h=(n(67),n(60)),d=n(19),O=(n(69),n(70),n(1));var x=function(e){var t=Object(c.useState)(),n=Object(u.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(),i=Object(u.a)(r,2),j=i[0],o=i[1];return Object(c.useEffect)((function(){fetch("https://api.spotify.com/v1/search?q=".concat(e.currentTrack.name,"&type=track&q=").concat(e.currentTrack.artists,"&type=artist&limit=1"),{method:"GET",headers:{Authorization:"Bearer "+e.token}}).then((function(e){return e.json()})).then((function(e){s(e.tracks.items[0]),console.log(e.tracks.items[0]),console.log(e.tracks.items[0].album.images)}))}),[]),Object(c.useEffect)((function(){fetch("https://corsanywhere.herokuapp.com/https://melon.danielko.me/api/v1/lyric/".concat(e.currentTrack.songId),{headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(e){return e.json()})).then((function(e){o(e.lyric.split("\n"))}))}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("style",{type:"text/css"}),Object(O.jsxs)("div",{className:"main-card-container",children:[a&&Object(O.jsxs)(d.a,{className:"bg-dark text-white mx-auto p-1",children:[Object(O.jsx)(d.a.Img,{variant:"top",src:a.album.images[0].url,alt:e.currentTrack.name}),Object(O.jsxs)(d.a.Body,{children:[Object(O.jsx)(d.a.Title,{children:e.currentTrack.artists}),Object(O.jsx)(d.a.Text,{children:e.currentTrack.name})]})]}),j&&j.map((function(e){return Object(O.jsx)("p",{children:e})}))]}),a&&Object(O.jsx)(h.a,{token:e.token,uris:a.uri,showSaveIcon:!0,initialVolume:.3,playerPosition:"bottom",styles:{sliderColor:"rgb(213, 126, 140)",sliderHeight:"10px"}})]})};var p=n(20),m=n(56),f=n(40),k=n(25),g=function(e){var t=Object(c.useState)(),n=Object(u.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){fetch("https://corsanywhere.herokuapp.com/https://melon.danielko.me/api/v1/chart/live",{headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(e){return e.json()})).then((function(e){var t=Object.entries(e).map((function(e){return e[1]}));s(t)}))}),[]),console.log(a),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(m.a,{fluid:"sm, md, lg",children:[Object(O.jsx)(d.a.Body,{children:Object(O.jsxs)(f.a,{children:[Object(O.jsx)(k.a,{xs:3,md:!0,lg:1,children:"Ranking"}),Object(O.jsx)(k.a,{xs:6,md:6,lg:3,children:"Track Title"}),Object(O.jsx)(k.a,{xs:3,children:"Artist"})]})}),a&&a.map((function(t){return Object(O.jsx)(d.a,{className:"bg-transparent",children:Object(O.jsx)(p.b,{to:"/songs/"+t.name,onClick:function(){e.handleOnClick(t)},children:Object(O.jsx)(d.a.Body,{children:Object(O.jsxs)(f.a,{children:[Object(O.jsxs)(k.a,{xs:3,md:!0,lg:1,children:[t.ranking,"."]}),Object(O.jsx)(k.a,{xs:6,md:6,lg:3,children:t.name}),Object(O.jsx)(k.a,{xs:3,children:t.artists})]})})},t.ranking)})}))]})})},y=n(33),v=n(42),T=function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(v.a,{className:"bg-dark text-white",children:[Object(O.jsx)(v.a.Brand,{children:Object(O.jsx)(p.b,{to:"/",children:"Top-100"})}),Object(O.jsx)(y.a.Link,{as:p.b,to:"/About",children:"About"}),""===e.token?Object(O.jsx)(y.a.Link,{as:p.b,to:"/auth/login",children:"Spotify Login"}):Object(O.jsx)(y.a.Item,{children:"Logged In"})]})})};var w=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(),r=Object(u.a)(s,2),j=r[0],h=r[1],d=function(e){h(e)};return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/auth/token");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.access_token);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(T,{token:n}),Object(O.jsxs)("main",{children:[Object(O.jsx)(b.a,{path:"/",exact:!0,render:function(e){return Object(O.jsx)(g,Object(i.a)(Object(i.a)({},e),{},{handleOnClick:d}))}}),Object(O.jsx)(b.a,{path:"/songs/:song",render:function(e){return Object(O.jsx)(x,Object(i.a)(Object(i.a)({},e),{},{currentTrack:j,token:n}))}})]})]})})};n(81),n(82),n(83);r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(p.a,{children:Object(O.jsx)(w,{})})}),document.getElementById("root"))},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},81:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.2196abcc.chunk.js.map