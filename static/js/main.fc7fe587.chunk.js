(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{138:function(t,e){},140:function(t,e){},151:function(t,e){},153:function(t,e){},180:function(t,e){},182:function(t,e){},183:function(t,e){},188:function(t,e){},190:function(t,e){},209:function(t,e){},221:function(t,e){},224:function(t,e){},250:function(t,e,n){},251:function(t,e,n){},261:function(t,e,n){},262:function(t,e,n){},263:function(t,e,n){},264:function(t,e,n){},265:function(t,e,n){},266:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(4),r=n.n(c),o=n(40),i=n.n(o),s=n(41),l=n(42),u=n(44),h=n(43),d=n(128),f=n(127),j=n.n(f);var m=function(t){var e=Object(d.a)({},t),n=(e.id,e.name),a=e.offset,c=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PUBLIC,r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PRIVATE;console.log(c);var o=(new Date).getTime(),i=j.a.MD5(o+r+c).toString(),s="http://gateway.marvel.com/v1/public/characters?ts=".concat(o,"&apikey=").concat(c,"&hash=").concat(i,"&offset=").concat(a).concat(n);return console.log(s),fetch(s).then((function(t){return t.json()})).then((function(t){return{characters:t.data.results}}))},b=(n(250),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={term:""},t.onInputChange=function(e){t.setState({term:e})},t.onFormSubmit=function(e){e.preventDefault(),t.props.onFormSubmit(t.state.term)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsx)("div",{children:Object(a.jsx)("form",{className:"form",onSubmit:this.onFormSubmit,children:Object(a.jsxs)("div",{className:"field",children:[Object(a.jsx)("label",{children:"Search"}),Object(a.jsx)("input",{className:"searchbar",type:"text",value:this.state.term,onChange:function(e){t.setState({term:e.target.value})}})]})})})}}]),n}(r.a.Component)),O=(n(251),n(23)),v=(n(261),function(t){var e=t.character,n=t.onCharacterSelect,c=e.thumbnail.path,r=e.thumbnail.extension;return Object(a.jsx)("div",{children:Object(a.jsx)(O.Link,{to:"CharacterDetails",children:Object(a.jsxs)("div",{className:"CardContainer",onClick:function(){n(e)},children:[Object(a.jsx)("img",{src:"".concat(c,"/standard_fantastic.").concat(r)}),Object(a.jsx)("h3",{className:"CharacterName",children:e.name})]})})})}),C=(n(262),function(t){var e=t.characters,n=t.onCharacterSelect,c=e.map((function(t,c){return Object(a.jsx)(v,{character:e[c],onCharacterSelect:n},c)}));return Object(a.jsx)("div",{className:"CardList",children:c})}),S=(n(263),function(t){var e=t.selectedCard;if(!e)return Object(a.jsx)("div",{});var n=e.thumbnail.path,c=e.thumbnail.extension,r=e.urls.find((function(t){return"wiki"===t.type||"detail"===t.type}));return console.log(r),Object(a.jsx)("div",{children:Object(a.jsxs)(O.Element,{id:"CharacterDetails",name:"CharacterDetails",children:[Object(a.jsx)("h2",{children:e.name}),Object(a.jsxs)("div",{className:"CharacterProfile",children:[Object(a.jsx)("img",{src:"".concat(n,"/portrait_uncanny.").concat(c)}),Object(a.jsxs)("h3",{className:"CharacterDesc",children:[e.description," ",Object(a.jsx)("a",{target:"_blank",href:r.url,children:"Read More"})]})]})]})})}),p=(n(264),function(t){var e=t.handleRandom,n=Math.floor(1473*Math.random());return Object(a.jsx)("div",{className:"button-container",children:Object(a.jsx)("button",{onClick:function(){e(n)},className:"random-button",children:"Surprise Me!"})})}),x=(n(265),function(t){var e=t.onLoadClick;return Object(a.jsx)("div",{className:"button-container",children:Object(a.jsx)("button",{onClick:function(){return e()},className:"LoadMore",children:"Load More"})})}),_=/image_not_available/gi,g=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={characters:[],selectedCard:null,offset:0,name:null},t.onCharacterSelect=function(e){t.setState({selectedCard:e})},t.onFormSubmit=function(e){t.getMarvelResponse(null,"&nameStartsWith=".concat(e),0)},t.handleRandom=function(e){t.getMarvelResponse(null,null,e)},t.getMarvelResponse=function(e,n,a){m({id:e,name:n,offset:a}).then((function(e){var c=e.characters;t.setState({characters:c.filter((function(t){return!t.thumbnail.path.match(_)})),selectedCard:null,offset:a,name:n},(function(){console.log(t.state.characters)}))}))},t.onLoadClick=function(){m({id:null,name:t.state.name,offset:t.state.offset+20}).then((function(e){var n=e.characters;t.setState({characters:t.state.characters.concat(n.filter((function(t){return!t.thumbnail.path.match(_)}))),selectedCard:null,offset:t.state.offset+20},(function(){console.log(t.state.characters)}))}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getMarvelResponse(null,null,this.state.offset)}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"title",children:"Marvel Search"}),Object(a.jsx)(O.Element,{id:"CharacterDetails",name:"CharacterDetails"}),Object(a.jsx)(b,{onFormSubmit:this.onFormSubmit}),Object(a.jsx)(p,{handleRandom:this.handleRandom}),Object(a.jsx)(S,{selectedCard:this.state.selectedCard}),Object(a.jsx)(C,{characters:this.state.characters,onCharacterSelect:this.onCharacterSelect}),Object(a.jsx)(x,{onLoadClick:this.onLoadClick})]})}}]),n}(r.a.Component);i.a.render(Object(a.jsx)(g,{}),document.getElementById("root"))}},[[266,1,2]]]);
//# sourceMappingURL=main.fc7fe587.chunk.js.map