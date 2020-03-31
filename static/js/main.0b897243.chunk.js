(this["webpackJsonpmovies-app-react"]=this["webpackJsonpmovies-app-react"]||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),i=a.n(l),r=(a(13),a(5)),s=a(1),o=a(2),m=a(3),u=a(4),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={willWatch:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,n=t.removeMovie,l=t.addToWillWatch,i=t.removeWillWatch;return c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(a.backdrop_path||a.poster_path),alt:a.title}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h6",{className:"card-title"},a.title),c.a.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-center justify-content-md-between align-items-center"},c.a.createElement("p",{className:"mb-0"},"Rating: ",a.vote_average),this.state.willWatch?c.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){i(a),e.setState({willWatch:!1})}},"Remove Will Watch"):c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){l(a),e.setState({willWatch:!0})}},"Will Watch"),c.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:n.bind(null,a)},"Delete"))))}}]),a}(c.a.Component),d=a(14),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.sort_by,a=e.updateSortBy,n=function(e){return function(){return a(e)}},l=function(e){return d("nav-link",{active:t===e})};return c.a.createElement("div",null,c.a.createElement("ul",{className:"tabs nav nav-pills"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:l("popularity.desc"),onClick:n("popularity.desc")},"Popularity desc")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:l("revenue.desc"),onClick:n("revenue.desc")},"Revenue desc")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:l("vote_average.desc"),onClick:n("vote_average.desc")},"Vote average desc"))))}}]),a}(c.a.Component),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.cur_page,a=e.setPage,n=e.changePage,l=e.total_pages;return c.a.createElement("div",{className:"col-12 d-flex justify-content-center mb-4"},c.a.createElement("ul",{className:"tabs nav nav-pills"},c.a.createElement("li",{className:"page-item"},c.a.createElement("div",{className:"page-link",onClick:a.bind(null,1)},"1")),c.a.createElement("li",{className:"page-item"},c.a.createElement("div",{className:"page-link",onClick:n.bind(null,"-")},"<<")),c.a.createElement("li",{className:"page-item"},c.a.createElement("div",{className:"page-link noactive"},t)),c.a.createElement("li",{className:"page-item"},c.a.createElement("div",{className:"page-link",onClick:n.bind(null,"+")},">>")),c.a.createElement("li",{className:"page-item"},c.a.createElement("div",{className:"page-link",onClick:a.bind(null,500)},l))))}}]),a}(c.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getMovies=function(){fetch("".concat("https://api.themoviedb.org/3","/discover/movie?api_key=").concat("3f4ca4f3a9750da53450646ced312397","&sort_by=").concat(e.state.sort_by,"&page=").concat(e.state.current_page)).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results})})).catch((function(e){throw new Error(e)}))},e.removeMovie=function(t){var a=e.state,n=a.movies,c=a.moviesWillWatch,l=n.filter((function(e){return e.id!==t.id})),i=c.length?c.filter((function(e){return e.id!==t.id})):[];e.setState({movies:l,moviesWillWatch:i})},e.addToWillWatch=function(t){var a=[].concat(Object(r.a)(e.state.moviesWillWatch),[t]);e.setState({moviesWillWatch:a})},e.removeWillWatch=function(t){var a=Object(r.a)(e.state.moviesWillWatch).filter((function(e){return e.id!==t.id}));e.setState({moviesWillWatch:a})},e.updateSortBy=function(t){e.setPage(1),e.setState({sort_by:t})},e.setPage=function(t){e.state.current_page!==t&&e.setState({current_page:t})},e.changePage=function(t){var a=e.state,n=a.current_page,c=a.total_pages;"+"===t?n<c&&e.setPage(n+1):n>0&&e.setPage(n-1)},e.state={total_pages:500,current_page:1,movies:[],moviesWillWatch:[],sort_by:"popularity.desc"},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 col-md-9"},c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-12"},c.a.createElement(p,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy}))),c.a.createElement("div",{className:"row"},this.state.movies.map((function(t){return c.a.createElement("div",{className:"col-6 mb-4",key:t.id},c.a.createElement(v,{movie:t,removeMovie:e.removeMovie,addToWillWatch:e.addToWillWatch,removeWillWatch:e.removeWillWatch}))})))),c.a.createElement("div",null,c.a.createElement("p",null,"Will Watch: ",this.state.moviesWillWatch.length))),c.a.createElement("div",{className:"row"},c.a.createElement(h,{changePage:this.changePage,setPage:this.setPage,cur_page:this.state.current_page,total_pages:this.state.total_pages})))}},{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(e,t,a){t.current_page!==this.state.current_page&&this.getMovies()}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.0b897243.chunk.js.map