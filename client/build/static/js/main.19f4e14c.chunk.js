(this["webpackJsonpinmovie-webapp"]=this["webpackJsonpinmovie-webapp"]||[]).push([[0],{101:function(e,t,a){e.exports=a(132)},131:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0UlEQVR4nO2by28bVRTGvzPjcew8m9hOnIdbmqophQVCYoNQQtMuWLBgCRuiPpAQElKFYMnjL2CBhEAIVUVZFSQk/gDSQCsQYsGiUlWpKknTPBs/4qS2E3seh4Wp7TszaT1uZkZJ5rfKvXNz/Z3vnnvvzLUHCAg41NBuF3g20amyMQWicSL0gyF7KeyZIejMWAfzTYWkaZpMF+yb2aDOJCZI4h8YOO6uSm8gYJ4NOq+cS9+wuSaiziQmQDwLguSNPI9gGGCaNJsgGMCziU4dfOugjLwZIszJTC81TgdhlFU2pg5q8ADAjFGVjanGOjHNicY9VeQHphgl8Rr6vVXjPeYYxQzYb1tdK5hiPFgrfQsEBvgtwG8CA/wW4DeBAX4L8JvAAL8F+E1ggN8C/ObQGxBy0ng1H0LmUf1fuiM6jiVU3Flug6qJh0u9HTpScRWb2zIW1hVLX6PJCgydcD/dcI2AkMSId+tIdGmghi4LZQlza+FaORo2cHKw4kS+LY4MuPZHD65c762Vz7xYxNcXV3H5ahIrG2KQr46V8P37K/j1Vge++Mn6lD394RI2iiFcvpq0/azONgNvv7aJS2fz6I7quLPUhgvfDNeunxqq4OePHziRb4trU2AhUx2t5Zx19JuhUJZw5XovPpke2EtZFlwzYG0jhIpGWMk1n2SKzBg/XRLq/rzbjoebjhLVEa4ZYDCwlFWw5CADIgrj2/dWMGaa27nCk89pdN71642n4p61ABYyiqMMeExPuy6UCzv24/TL3134bqYPy1kFQ70aPngjh7de2XL0WXueAYrMtb/vrYWxvlU1oKPNaLoPWWKhXLQx4N6qgk9/HMBiRqlmWy6Ez671I19ydqq35wYkj2i1AP66216rT8XVlvvUDGuKyzLw0ZtZRMN1swwGbi+2Oep7zw2QJcZITAMA/DMfqdWP9LVugGGwpS4VV3Hp7AZOJMtCfXHH2XrgyiJ4LFYNVtXrYh6b0gqGzVeY4f+nmmKKwC5bnoQrBhxNiKMdDTNinfourZ+OodtNAWtWtII7GZAQt7GRmAqi1gXbLZ/P0J2ASwaIGZCKOZv/FU2Upduk9bba+t7fiEtrgDUDmoUZyBVEWVHFOn2KO9XtzpwIssOIXDEg2acL9wOpvuYWwG2V8M5XKdxPh4X6/h6rAVvbEvIlGelH4o1Wd7T5+w3AJQNkYmHUR2LNPbZqOln28VinjhdGypa2xbKE8c+PYzlbN0Ai4PnhHUdaXXsWaFwHUnHnW6BEwNhgBV9OrSEcsq54Lz+3g4nTRaHu3Yk8ejucZYCwkqiz8d8AvL5b4/SWjGxDynVFdAzHNPz7MFw7EAmHGKMDFazmFWwWq/6eHKwgX5KQbniqOxpXYQBYyYUgEYGIIREgEUOSgES3hohSD7xUlvAgU3+wOtKhY6BHw+3FCBayCk70V3BqqCwcouzC78pk5kxLBhwQBAMO/ZlgYIDfAvwmMMBvAX4TGOC3AL8JDPBbgN8EBvgtwG8CA4QSofWTy/2CKUbBAGase6vGe8wxmn4tzjc9VeMHphgFAxSSpgmY91aRdxBhTiFpurFOfGFiMl1gg86DbY/i9zcMg3W6YH59zrILKOfSN8A0SYQ579S5CxHm7N4YA4IXJwMCDjv/AYzxktIi9ouMAAAAAElFTkSuQmCC"},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),s=a(13),l=a(10),c=a(15),d=a(16),u=a(18),p=a(24),m=a(17),h=a(36),f=a(9),v=a(7),g=a(5),b=a(161),y=a(162),w=a(163),E=a(164),D=a(177),O=a(84),k=a.n(O),C=a(179),j=a(57),A=a(54),x=a.n(A),S=a(30),G=a.n(S),F=a(47),_=a(44),N=a.n(_),z="https://gnb3jgrhni.execute-api.us-east-1.amazonaws.com/dev",L=function(e){return function(t){t({type:"search_text_available",payload:e})}},W=function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,N.a.post("".concat(z,"/trending"),e).then((function(e){return a({type:"movie_data",payload:e.data.results})})).catch((function(e){console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.post("".concat(z,"/search"),e).then((function(e){a({type:"movie_data",payload:e.data.results})})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a){var n,r,i,o;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=[],r=0;r<e.length;r++)n.push(e[r].id);return i=n.join("%2C"),o={genres:i},t.next=6,N.a.post("".concat(z,"/filter"),o).then((function(e){a({type:"movie_data",payload:e.data.results})})).catch((function(e){console.log(e)}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleDelete=function(e){var t=a.state.selectedGenres.filter((function(t){return t.id!==e.id})),n=a.state.allGenres;n.push(e),a.setState({allGenres:n,selectedGenres:t}),0===a.state.selectedGenres.length&&a.props.refreshDashboard(!1)},a.handleAdd=function(e){var t=a.state.allGenres.filter((function(t){return t.id!==e.id})),n=a.state.selectedGenres;n.push(e),a.setState({selectedGenres:n,allGenres:t}),a.props.refreshDashboard(!0)},a.handleClear=function(){var e=a.state.selectedGenres,t=a.state.allGenres;e.filter((function(e){t.push(e)})),a.setState({allGenres:t,selectedGenres:[]}),a.props.refreshDashboard(!1)},a.filterIconClick=function(){a.setState({allGenresEnabled:!a.state.allGenresEnabled})},a.filterClick=function(){a.setState({allGenresEnabled:!1}),a.props.filterMovieData(a.state.selectedGenres)},a.state={allGenres:a.props.user.Genres.genres,selectedGenres:[],allGenresEnabled:!1,updateOnce:!0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",position:"relative"}},r.a.createElement(j.a,{className:t.root},r.a.createElement(C.a,{size:"small",clickable:!0,icon:r.a.createElement(x.a,{style:{marginRight:-12}}),className:t.chip,style:{display:"flex",marginLeft:5},onClick:function(){return e.filterIconClick()}}),this.state.selectedGenres&&this.state.selectedGenres.map((function(a){return r.a.createElement(C.a,{size:"small",key:a.id,icon:void 0,label:a.name,onDelete:function(){return e.handleDelete(a)},className:t.chip})})),this.state.selectedGenres.length>0?r.a.createElement("div",null,r.a.createElement(C.a,{size:"small",clickable:!0,label:"CLEAR",className:t.chip,style:{borderTopRightRadius:5,borderBottomRightRadius:5},onClick:function(){return e.handleClear()}}),r.a.createElement(C.a,{size:"small",clickable:!0,label:"FILTER",className:t.chip,style:{borderTopLeftRadius:5,borderBottomLeftRadius:5},onClick:function(){return e.filterClick()}})):null),this.state.allGenresEnabled?r.a.createElement(j.a,{variant:"outlined",elevation:3,style:{position:"absolute",justifyContent:"space-evenly",flexWrap:"wrap",backgroundColor:"#5E5E5E",width:250,borderRadius:13,padding:5,top:40,right:0}},this.state.allGenres&&this.state.allGenres.map((function(a){return r.a.createElement(C.a,{size:"small",key:a.id,icon:void 0,label:a.name,onClick:function(){return e.handleAdd(a)},style:{margin:3,padding:.2},className:t.chip})}))):null)}}]),t}(n.Component),M=(Object(g.a)((function(e){return{root:{display:"flex",justifyContent:"flex-end",flexWrap:"wrap",backgroundColor:"#454545",maxWidth:800,borderRadius:25,padding:.2},chip:{margin:e.spacing(.5)}}}))(Object(m.b)((function(e){return{user:e.user}}),{filterMovieData:R,refreshDashboard:L})(Object(h.f)(I))),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={setDialog:!1,barColor:!1,searchText:"",allGenres:a.props.user.Genres.genres,selectedGenres:[],allGenresEnabled:!1,updateOnce:!0},a.onScroll=function(){window.scrollY>60&&a.setState({barColor:!0}),window.scrollY<60&&a.setState({barColor:!1})},a.handleClickOpen=function(){a.setState({setDialog:!0})},a.handleClose=function(){a.setState({setDialog:!1})},a.handleChange=function(e){console.log(e),a.setState({searchText:e.target.value}),a.props.refreshDashboard(!0)},a.handleKeyPress=function(e){"Enter"===e.key&&(window.scrollTo(0,0),a.props.searchResultData({searchText:a.state.searchText})),0===a.state.searchText.length&&a.props.refreshDashboard(!1)},a.handleDelete=function(e){var t=a.state.selectedGenres.filter((function(t){return t.id!==e.id})),n=a.state.allGenres;n.push(e),a.setState({allGenres:n,selectedGenres:t}),0===a.state.selectedGenres.length&&a.props.refreshDashboard(!1)},a.handleAdd=function(e){var t=a.state.allGenres.filter((function(t){return t.id!==e.id})),n=a.state.selectedGenres;n.push(e),a.setState({selectedGenres:n,allGenres:t}),a.props.refreshDashboard(!0)},a.handleClear=function(){var e=a.state.selectedGenres,t=a.state.allGenres;e.filter((function(e){t.push(e)})),a.setState({allGenres:t,selectedGenres:[]}),a.props.refreshDashboard(!1)},a.filterIconClick=function(){a.setState({allGenresEnabled:!a.state.allGenresEnabled})},a.filterClick=function(){a.setState({allGenresEnabled:!1}),a.props.filterMovieData(a.state.selectedGenres)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll,!1),console.log(window.location.href)}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(b.a,{elevation:0,style:{width:window.innerWidth,position:"fixed",height:130,background:"linear-gradient(to top, transparent 0%, #000000 100%)",backgroundColor:"none"}},r.a.createElement(y.a,null,r.a.createElement(w.a,{href:"/"},r.a.createElement(E.a,{className:t.title,variant:"h6",noWrap:!0},"BingeFeast"),r.a.createElement(E.a,{className:t.title,style:{color:"#E46E36"},variant:"h6",noWrap:!0},".in")),r.a.createElement(w.a,null,r.a.createElement(E.a,{className:t.title,variant:"subtitle2",component:p.b,to:"/tvshows"},"TV Shows")),"/"===window.location.pathname||"/inMovie-webapp/"===window.location.pathname?r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(k.a,null)),r.a.createElement(D.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},value:this.state.searchText,onChange:this.handleChange,onKeyPress:this.handleKeyPress,inputProps:{"aria-label":"search"}})):null,r.a.createElement("div",{className:t.grow}),"/"===window.location.pathname||"/inMovie-webapp/"===window.location.pathname?r.a.createElement("div",{style:{display:"flex",flexDirection:"column",position:"relative"}},r.a.createElement(j.a,{className:t.root},r.a.createElement(C.a,{size:"small",clickable:!0,icon:r.a.createElement(x.a,{style:{marginRight:-12}}),className:t.chip,style:{display:"flex",marginLeft:5},onClick:function(){return e.filterIconClick()}}),this.state.selectedGenres&&this.state.selectedGenres.map((function(a){return r.a.createElement(C.a,{size:"small",key:a.id,icon:void 0,label:a.name,onDelete:function(){return e.handleDelete(a)},className:t.chip})})),this.state.selectedGenres.length>0?r.a.createElement("div",null,r.a.createElement(C.a,{size:"small",clickable:!0,label:"CLEAR",className:t.chip,style:{borderTopRightRadius:5,borderBottomRightRadius:5},onClick:function(){return e.handleClear()}}),r.a.createElement(C.a,{size:"small",clickable:!0,label:"FILTER",className:t.chip,style:{borderTopLeftRadius:5,borderBottomLeftRadius:5},onClick:function(){return e.filterClick()}})):null),this.state.allGenresEnabled?r.a.createElement(j.a,{variant:"outlined",elevation:3,style:{position:"absolute",justifyContent:"space-evenly",flexWrap:"wrap",backgroundColor:"#5E5E5E",width:250,borderRadius:13,padding:5,top:40,right:0}},this.state.allGenres&&this.state.allGenres.map((function(a){return r.a.createElement(C.a,{size:"small",key:a.id,icon:void 0,label:a.name,onClick:function(){return e.handleAdd(a)},style:{margin:3,padding:.2},className:t.chip})}))):null):null))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.user.user_cart)return{userCart:e.user.user_cart}}}]),t}(n.Component)),B=Object(g.a)((function(e){var t;return{grow:{flexGrow:1},title:(t={display:"none",textDecoration:"none"},Object(f.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(f.a)(t,"color","#FFFFFF"),t),search:Object(f.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(v.c)(e.palette.common.white,.05),"&:hover":{backgroundColor:Object(v.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(f.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),root:{display:"flex",justifyContent:"flex-end",flexWrap:"wrap",backgroundColor:"#454545",maxWidth:800,borderRadius:25,padding:.2},chip:{margin:e.spacing(.5)}}}))(Object(h.f)(Object(m.b)((function(e){return{user:e.user}}),{searchResultData:T,refreshDashboard:L,filterMovieData:R})(M))),Y=a(169),P=a(176),V=a(165),U=a(168),H=a(46),K=a.n(H),Q=a(166),X=a(167),q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(V.a,{className:e.root},r.a.createElement(Q.a,null,r.a.createElement(X.a,{className:e.media,image:"https://image.tmdb.org/t/p/w500".concat(this.state.data.poster_path),title:"Original Title: ".concat(this.state.data.original_name||this.state.data.original_title)})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.data)return{data:e.data}}}]),t}(n.Component),Z=Object(g.a)((function(e){return{root:{width:"13rem",height:300},media:{height:300}}}))(Object(m.b)((function(e){return{user:e.user}}),{})(q)),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).getGenre=function(){if(a.state.genres&&a.state.movieData.genre_ids){var e=a.state.genres.genres,t=a.state.movieData.genre_ids,n=[];t.forEach((function(t){for(var a=0;a<e.length;a++)t===e[a].id&&n.push(e[a].name)})),a.setState({genreStrings:n})}},a._addCartClick=function(){localStorage.setItem("selectedMovieDetails",JSON.stringify(a.state.movieData)),a.props.history.push({pathname:"/moviedetails"})},a.state={genreStrings:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getGenre()}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(V.a,{className:t.root},r.a.createElement("div",{onClick:function(){return e._addCartClick()}},r.a.createElement(Z,{data:this.state.movieData})),r.a.createElement(U.a,{className:t.CardContent},r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle2",style:{color:"#E5CA49",alignSelf:"center",marginTop:-10}},this.state.movieData.title||this.state.movieData.name),r.a.createElement(Y.a,{style:{display:"flex",color:"#FFFFFF",flexDirection:"column"}},r.a.createElement("div",null,r.a.createElement(E.a,{variant:"body2"},"".concat(this.state.movieData.vote_average," (").concat(this.state.movieData.vote_count,")")),r.a.createElement(E.a,{variant:"body2"},K()(this.state.movieData.release_date||this.state.movieData.first_air_date).format("LL")," (USA)")),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginTop:10}},r.a.createElement("div",{className:t.chipView},this.state.genreStrings.map((function(e,t){return r.a.createElement(C.a,{key:t,size:"small",label:e,style:{color:"#000000",backgroundColor:"#6A6A6A",height:20},component:"a"})})))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.parentData)return{movieData:e.parentData,genres:e.user.Genres}}}]),t}(n.Component),$=Object(g.a)((function(e){return{root:{width:"13rem",backgroundColor:"#101010"},CardContent:{display:"flex",flexDirection:"column",position:"relative"},chipView:{display:"flex",justifyContent:"flex-start",flexWrap:"wrap","& > *":{margin:e.spacing(.3)}}}}))(Object(m.b)((function(e){return{user:e.user}}))(Object(h.f)(J))),ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={movieData:[],refresh:!0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),console.log(window.location);!this.props.user.search_text_available&&this.props.trendingList({page:1,type:"all"})}},{key:"render",value:function(){this.props.classes;return r.a.createElement(P.a,{display:"flex",justifyContent:"center",width:window.innerWidth,bgcolor:"#1B1A20",style:{marginLeft:-8}},r.a.createElement(Y.a,{item:!0,xs:10},r.a.createElement(Y.a,{container:!0,justify:"center",spacing:3,style:{paddingTop:100}},this.state.movieData&&this.state.movieData.map((function(e,t){return r.a.createElement(Y.a,{key:t,item:!0},r.a.createElement($,{parentData:e}))})))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.user?{movieData:e.user.movie_data}:null}}]),t}(n.Component),te=Object(g.a)((function(e){return{media:{height:window.innerHeight,backgroundSize:"cover"},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}))(Object(m.b)((function(e){return{user:e.user}}),{trendingList:W})(Object(h.f)(ee))),ae=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={tvshowData:[],refresh:!0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){!this.props.user.search_text_available&&this.props.trendingList({page:1,type:"tv"}),console.log(window.location.pathname)}},{key:"render",value:function(){return r.a.createElement(P.a,{display:"flex",justifyContent:"center",width:window.innerWidth,bgcolor:"#1B1A20",style:{marginLeft:-8}},r.a.createElement(Y.a,{item:!0,xs:10},r.a.createElement(Y.a,{container:!0,justify:"center",spacing:3,style:{paddingTop:100}},this.state.tvshowData&&this.state.tvshowData.map((function(e,t){return r.a.createElement(Y.a,{key:t,item:!0},r.a.createElement($,{parentData:e}))})))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.user)return{tvshowData:e.user.movie_data}}}]),t}(n.Component),ne=Object(m.b)((function(e){return{user:e.user}}),{searchResultData:T,trendingList:W})(Object(h.f)(ae)),re=a(134),ie=a(174),oe=a(173),se=a(172),le=a(85),ce=a.n(le),de=a(170),ue=a(178),pe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).getAvailableStreams=function(){var e=a.props.user.details_data&&a.props.user.details_data[2];console.log(e)},a.getGenre=function(){if(a.state.genres){var e=a.state.genres.genres,t=a.state.movieData.genre_ids,n=[];t.forEach((function(t){for(var a=0;a<e.length;a++)t===e[a].id&&n.push(e[a].name)})),a.setState({genreStrings:n})}},a.handleDialogOpen=function(){a.setState({dialogOpen:!0})},a.handleDialogClose=function(){a.setState({dialogOpen:!1})},a.handleVideoButton=function(e){a.setState({videoSelected:e,dialogOpen:!0})},a.handlePopoverOpen=function(e){a.setState({videoSelected:e,popoverOpen:!0})},a.handlePopoverClose=function(){a.setState({popoverOpen:!1})},a.state={genreStrings:[],videoData:[],dialogOpen:!1,videoSelected:null,popoverOpen:!1,selectedStreams:[],streamAvailablity:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.user.details_data;console.log(this.props.user.details_data)}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{style:{flexDirection:"column",justifyItems:"space-between",alignContent:"flex-start",color:"#FFFFFF",marginLeft:10,width:600,height:"25rem"}},r.a.createElement(de.a,{id:"mouse-over-popover",className:t.popover,classes:{paper:t.paper},open:this.state.popoverOpen,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:this.handlePopoverClose,disableRestoreFocus:!0},this.state.videoSelected&&this.state.videoSelected.name),r.a.createElement(se.a,{fullScreen:!0,disableBackdropClick:!0,disableEscapeKeyDown:!0,open:this.state.dialogOpen,style:{width:"75%",height:"75%",margin:"auto",marginTop:"8%"}},r.a.createElement(w.a,{color:"inherit",onClick:function(){return e.handleDialogClose()},"aria-label":"Close",style:{position:"fixed",zIndex:1,backgroundColor:"white",marginTop:-45,marginLeft:"75%"}},r.a.createElement(ce.a,null)),r.a.createElement("iframe",{src:"https://www.youtube.com/embed/".concat(this.state.videoSelected&&this.state.videoSelected.key),style:{position:"absolute",width:"100%",height:"100%"},frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"video"})),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-end",width:window.innerWidth-500}},r.a.createElement(E.a,{gutterBottom:!0,variant:"h4",style:{color:"#E5CA49"}},this.state.movieData.title||this.state.movieData.name),r.a.createElement(E.a,{gutterBottom:!0,variant:"h6",style:{color:"#E5CA49",marginBottom:15}},"\xa0(",K()(this.state.movieData.release_date||this.state.movieData.first_air_date).format("YYYY"),")")),this.state.movieData.tagline&&r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle1",style:{color:"#E5CA49",margin:0}},this.state.movieData.tagline),r.a.createElement("div",{style:{marginTop:10}},r.a.createElement("a",{style:{display:"flex",flexDirection:"row",alignItems:"center",color:"#FFFFFF",textDecoration:"none",width:250},href:"https://www.imdb.com/title/".concat(this.state.movieData.imdb_id),target:"_blank"},r.a.createElement("img",{src:a(131),alt:"Smiley face",height:"28",width:"28"}),r.a.createElement(E.a,{variant:"body2"},"\xa0\xa0","".concat(this.state.movieData.vote_average," (").concat(this.state.movieData.vote_count,")"))),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",color:"#FFFFFF",alignItems:"baseline",textDecoration:"none",marginTop:10,justifyContent:"flex-start"}},this.props.user.details_data&&this.props.user.details_data[2]&&this.props.user.details_data[2].map((function(e,t){return"us"===e.country[0]||"in"===e.country[0]?r.a.createElement(ue.a,{title:"us"===e.country[0]?"US":"in"===e.country[0]&&"INDIA",placement:"bottom-end","aria-label":"add"},r.a.createElement("a",{style:{margin:10},href:e.url,target:"_blank"},r.a.createElement("img",{src:e.icon,alt:"Smiley face",width:"70"}))):null}))),r.a.createElement(E.a,{variant:"body2",style:{marginTop:10}},K()(this.state.movieData.release_date||this.state.movieData.first_air_date).format("LL"),"  (USA)"),r.a.createElement(E.a,{variant:"body2",style:{marginTop:10}},this.state.movieData.runtime||this.state.movieData.episode_run_time," mins")),r.a.createElement("div",{className:t.chipView},this.state.movieData.genres&&this.state.movieData.genres.map((function(e,t){return r.a.createElement(C.a,{key:t,size:"small",label:e.name,component:"a",variant:"outlined",style:{color:"#FFFFFF",backgroundColor:"#5A5A5A"},href:"#chip",clickable:!0})}))),r.a.createElement(E.a,{variant:"body2",width:300,style:{marginTop:10}},"Overview: ",this.state.movieData.overview),r.a.createElement("div",null,r.a.createElement(Y.a,{container:!0,className:t.buttons,spacing:1},this.state.videoData&&this.state.videoData.results.slice(0,30).map((function(a,n){return r.a.createElement("div",{key:n},r.a.createElement(oe.a,{variant:"contained",size:"small","aria-haspopup":"true",className:t.button,onMouseEnter:function(){return e.handlePopoverOpen(a)},onMouseLeave:e.handlePopoverClose,onClick:function(){return e.handleVideoButton(a)}},"".concat(n+1,".").concat(a.type)))})))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.movieData?{movieData:e.movieData,videoData:e.videoData}:null}}]),t}(n.Component),me=Object(g.a)((function(e){return{dialog:{width:500,height:800,borderRadius:15},buttons:{display:"flex",flexDirection:"row",alignContent:"flex-start",width:450,height:350,marginTop:10},button:{color:"#FFFFFF",backgroundColor:"#5A5A5A",margin:e.spacing(.6)},chipView:{display:"flex",justifyContent:"flex-start",width:400,marginTop:10,flexWrap:"wrap","& > *":{margin:e.spacing(.3)}},popover:{pointerEvents:"none"},paper:{padding:e.spacing(1)}}}))(Object(m.b)((function(e){return{user:e.user}}),{})(pe)),he=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={movieData:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.props.getDetails(JSON.parse(localStorage.selectedMovieDetails))}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(P.a,{display:"flex",style:{marginLeft:-8}},r.a.createElement(re.a,{className:e.backdrop,open:this.props.user.buffer_enable},r.a.createElement(ie.a,{color:"inherit"})),r.a.createElement(Y.a,{item:!0,xs:12,style:{backgroundColor:"#1B1A20"}},r.a.createElement(Y.a,null,r.a.createElement("div",{style:{display:"flex",position:"relative"}},r.a.createElement(X.a,{className:e.media,image:"https://image.tmdb.org/t/p/w500".concat(this.state.movieData&&this.state.movieData.backdrop_path)}),r.a.createElement("div",{style:{position:"absolute",backgroundSize:"cover",width:window.innerWidth-25,height:window.innerHeight,background:"linear-gradient(to left, transparent 0%, black 85%)"}}),r.a.createElement("div",{style:{position:"absolute",margin:50}},r.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginTop:50}},r.a.createElement(Z,{data:this.state.movieData}),r.a.createElement(me,{movieData:this.state.movieData,videoData:this.state.videoData,streamAvailablity:this.state.streamAvailablity})))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.user.details_data?{movieData:e.user.details_data[0],videoData:e.user.details_data[1],streamAvailablity:e.user.details_data[2],bufferEnabled:e.user.buffer_enable}:null}}]),t}(n.Component),fe=Object(g.a)((function(e){return{root:{width:window.innerWidth,margin:0,backgroundColor:"grey"},media:{width:window.innerWidth,height:window.innerHeight,backgroundSize:"cover"},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}))(Object(m.b)((function(e){return{user:e.user}}),{getDetails:function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),a({type:"buffer_enable",payload:!0}),t.next=4,N.a.post("".concat(z,"/getDetails"),e).then((function(e){a({type:"details_data",payload:e.data})})).catch((function(e){console.log(e)}));case 4:a({type:"buffer_enable",payload:!1});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(Object(h.f)(he))),ve=Object(h.f)((function(){return r.a.createElement("div",{style:{backgroundColor:"#000000"}},r.a.createElement(B,null),r.a.createElement(h.c,{style:{position:"absolute"}},r.a.createElement(h.a,{exact:!0,path:"/",component:te}),r.a.createElement(h.a,{exact:!0,path:"/tvshows",component:ne}),r.a.createElement(h.a,{exact:!0,path:"/moviedetails",component:fe}),r.a.createElement(h.a,{exact:!0,path:"/tvshowdetails",component:fe})))})),ge=a(33),be=a(87),ye=a(25),we={Genres:{genres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"},{id:10759,name:"Action & Adventure"},{id:10762,name:"Kids"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"}]},buffer_enable:!0},Ee=Object(ge.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"product_list":return Object(ye.a)({},e,{product_list:t.payload});case"user_cart":return Object(ye.a)({},e,{user_cart:t.payload});case"size_filter":return Object(ye.a)({},e,{size_filter:t.payload});case"movie_data":return Object(ye.a)({},e,{movie_data:t.payload});case"tvshow_data":return Object(ye.a)({},e,{tvshow_data:t.payload});case"details_data":return Object(ye.a)({},e,{details_data:t.payload});case"cart_remove":return Object(ye.a)({},e,{cart_remove:t.payload});case"buffer_enable":return Object(ye.a)({},e,{buffer_enable:t.payload});case"search_results":return Object(ye.a)({},e,{search_results:t.payload});case"search_text_available":return Object(ye.a)({},e,{search_text_available:t.payload});default:return e}}}),De=[be.a],Oe=Object(ge.e)((function(e,t){return"USER_LOGOUT"===t.type&&(e=void 0),Ee(e,t)}),{},Object(ge.d)(ge.a.apply(void 0,De))),ke=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{store:Oe},r.a.createElement(p.a,null,r.a.createElement(ve,null)))}}]),t}(n.Component),Ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function je(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(ke,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ce?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):je(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):je(t,e)}))}}()}},[[101,1,2]]]);
//# sourceMappingURL=main.19f4e14c.chunk.js.map