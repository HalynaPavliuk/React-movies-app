(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(7),r=c.n(s),i=(c(13),c(0));var o=function(){return Object(i.jsx)("footer",{className:"page-footer light-blue darken-4",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 2021 Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"GitHub"})]})})})},l=c(2),j=c(3),h=c(5),d=c(4),b=c(8);var u=function(e){var t=e.Poster,c=e.Title,n=e.Genre,a=e.Year,s=e.ImdbID,r=e.Type;return Object(i.jsx)("div",{className:"col s12 m7",children:Object(i.jsxs)("div",{className:"card",id:s,children:[Object(i.jsx)("div",{className:"card-image",children:Object(i.jsx)("img",{src:t})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("p",{children:c}),Object(i.jsx)("p",{children:n}),Object(i.jsxs)("p",{children:[a," - ",r]})]})]})})};var v=function(e){var t=e.movies,c=void 0===t?[]:t;return Object(i.jsx)("div",{className:"movies",children:c.length?c.map((function(e){return Object(i.jsx)(u,Object(b.a)({},e),e.ImdbID)})):Object(i.jsx)("h4",{children:" File not found "})})};var p=function(){return Object(i.jsx)("div",{class:"progress",children:Object(i.jsx)("div",{class:"indeterminate"})})},m=function(e){Object(h.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={search:"",type:"all"},e.handleFilter=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){e.props.searchMovie(e.state.search,e.state.type)}))},e}return Object(j.a)(c,[{key:"render",value:function(){var e=this;this.props.searchMovie;return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{className:"col s12 ",children:[Object(i.jsxs)("div",{className:"row ",children:[Object(i.jsx)("input",{placeholder:"Searc movie",id:"search",type:"search",className:"validate ",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})}}),Object(i.jsx)("button",{className:"btn waves-effect waves-light light-blue",type:"button",name:"action",onClick:function(){return e.props.searchMovie(e.state.search,e.state.type)},children:"Search"})]}),Object(i.jsxs)("div",{className:"filter",children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{name:"moviegroup",type:"radio","data-type":"all",onChange:this.handleFilter,checked:"all"===this.state.type}),Object(i.jsx)("span",{children:"All"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{name:"moviegroup",type:"radio","data-type":"movie",onChange:this.handleFilter,checked:"movie"===this.state.type}),Object(i.jsx)("span",{children:"Movie only"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{name:"moviegroup",type:"radio","data-type":"series",onChange:this.handleFilter,checked:"series"===this.state.type}),Object(i.jsx)("span",{children:"Series only"})]})]})]})})}}]),c}(a.a.Component),O=m,x="6d347b5b",f=function(e){Object(h.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).onSearch=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";n.setState({loading:!0}),fetch("http://www.omdbapi.com/?&apikey=".concat(x,"&s=").concat(e).concat("all"!==t?"&type=".concat(t):"")).then((function(e){return e.json()})).then((function(e){return n.setState({movies:e.Search,loading:!1})}))},n.state={movies:[],loading:!0},n}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("http://www.omdbapi.com/?&apikey=".concat(x,"&s=venom")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,c=e.loading;return Object(i.jsxs)("main",{className:"container content",children:[Object(i.jsx)(O,{searchMovie:this.onSearch}),c?Object(i.jsx)(p,{}):Object(i.jsx)(v,{movies:t})]})}}]),c}(a.a.Component),g=f;var y=function(){return Object(i.jsx)("nav",{className:"light-blue darken-4",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"#",className:"brand-logo",children:"React Movies"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#",children:"GitHub"})})})]})})};var N=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(y,{}),Object(i.jsx)(g,{}),Object(i.jsx)(o,{})]})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.defcf532.chunk.js.map