(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{36:function(e,t,r){"use strict";var n=r(41),c=r.n(n),a={fetchTrending:function(){return c.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=42c4fa9c05708253e8c2f9a05f447e85").then((function(e){return e.data.results}))},fetchMovies:function(e){return c.a.get("https://api.themoviedb.org/3/search/movie?api_key=42c4fa9c05708253e8c2f9a05f447e85&query=".concat(e)).then((function(e){return e.data.results}))},fetchMovieById:function(e){return c.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=42c4fa9c05708253e8c2f9a05f447e85")).then((function(e){return e.data}))},fetchMovieCast:function(e){return c.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=42c4fa9c05708253e8c2f9a05f447e85")).then((function(e){return e.data}))},fetchMovieReview:function(e){return c.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=42c4fa9c05708253e8c2f9a05f447e85")).then((function(e){return e.data.results}))}};t.a=a},71:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,"default",(function(){return x}));var i=r(39),s=r.n(i),o=r(42),l=r(40),h=r(34),u=r(35),j=r(38),p=r(37),v=r(0),f=r(9),b=r(2),m=r(36),d=r(7),O=r(1),w=function(e){Object(j.a)(r,e);var t=Object(p.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props.cast,t=e.length;return Object(O.jsx)(O.Fragment,{children:t>0?Object(O.jsx)("ul",{className:"cast",children:e.map((function(e){var t=e.id,r=e.profile_path,n=e.name,c=e.character;return Object(O.jsxs)("li",{className:"cast-item",children:[Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:n,width:"120"}),Object(O.jsx)("p",{className:"cast-name",children:n}),Object(O.jsxs)("p",{children:["Character: ",c]})]},t)}))}):Object(O.jsx)("h3",{className:"cast",children:"No actors"})})}}]),r}(v.Component),g=function(e){Object(j.a)(r,e);var t=Object(p.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props.reviews,t=e.length;return Object(O.jsx)(O.Fragment,{children:t>0?Object(O.jsx)("ul",{className:"rewiews",children:e.map((function(e){var t=e.id,r=e.author,n=e.content;return Object(O.jsxs)("li",{children:[Object(O.jsxs)("p",{className:"review-author",children:["Author: ",r]}),Object(O.jsx)("p",{className:"review-content",children:n})]},t)}))}):Object(O.jsx)("h3",{className:"rewiews",children:"No reviews yet"})})}}]),r}(v.Component),x=function(e){Object(j.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(h.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={poster:null,title:null,overview:null,genres:[],vote:null,cast:[],reviews:[]},e.handleGoBack=function(){var t,r=e.props,n=r.location;r.history.push((null===n||void 0===n||null===(t=n.state)||void 0===t?void 0:t.from)||d.a.home)},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,r,n,c,a,i,l,h,u,j;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,m.a.fetchMovieById(t);case 3:return r=e.sent,n=r.poster_path,c=r.title,a=r.overview,i=r.genres,l=r.vote_average,this.setState({poster:n,title:c,overview:a,genres:Object(o.a)(i),vote:l}),e.next=12,m.a.fetchMovieCast(t);case 12:return h=e.sent,u=h.cast,this.setState({cast:Object(o.a)(u)}),e.next=17,m.a.fetchMovieReview(t);case 17:j=e.sent,this.setState({reviews:Object(o.a)(j)});case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.poster,r=e.title,n=e.overview,c=e.genres,i=e.vote,s=e.cast,o=e.reviews,l=this.props.match.url,h=this.props.location.state.from;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("button",{type:"button",onClick:this.handleGoBack,className:"go-back-button",children:"Go back"}),Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t),alt:r,className:"poster"}),Object(O.jsxs)("div",{className:"movie-info",children:[Object(O.jsx)("h1",{className:"movie-info__title",children:r}),Object(O.jsxs)("p",{children:["User score: ",i]}),Object(O.jsx)("h3",{className:"movie-info__title",children:"Overview"}),Object(O.jsx)("p",{children:n}),Object(O.jsx)("h3",{className:"movie-info__title",children:"Genres"}),Object(O.jsx)("p",{children:c.map((function(e){return e.name})).join(" ")})]})]}),Object(O.jsxs)("div",{className:"movie-add-info",children:[Object(O.jsx)("h2",{className:"movie-info__title",children:"Additional information"}),Object(O.jsxs)("ul",{className:"movie-info-list",children:[Object(O.jsx)("li",{children:Object(O.jsx)(f.b,{to:{pathname:"".concat(l,"/credits"),state:{from:h}},className:"movie-info-item",children:"Cast"})}),Object(O.jsx)("li",{children:Object(O.jsx)(f.b,{to:{pathname:"".concat(l,"/rewiews"),state:{from:h}},className:"movie-info-item",children:"Reviews"})})]})]}),Object(O.jsx)(b.b,{path:"".concat(l,"/credits"),render:function(e){return Object(O.jsx)(w,a(a({},e),{},{cast:s}))}}),Object(O.jsx)(b.b,{path:"".concat(l,"/reviews"),render:function(e){return Object(O.jsx)(g,a(a({},e),{},{reviews:o}))}})]})}}]),r}(v.Component)}}]);
//# sourceMappingURL=movies-details-page.1cb9282a.chunk.js.map