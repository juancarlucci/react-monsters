(this["webpackJsonpreact-monsters"]=this["webpackJsonpreact-monsters"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(2),c=n.n(s),o=(n(12),n(3)),l=n(4),i=n(6),u=n(5),m=(n(13),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),r.a.createElement("h2",null," ",e.monster.name," "),r.a.createElement("p",null," ",e.monster.email," "))}),h=(n(14),function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(m,{key:e.id,monster:e})})))}),d=(n(15),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search-box",type:"search",placeholder:t,onChange:n})}),f=(n(16),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,a=t.searchField,s=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(d,{placeholder:"search monsters2",handleChange:function(t){return e.setState({searchField:t.target.value})}}),r.a.createElement(h,{monsters:s}))}}]),n}(a.Component));c.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.2a47f7c2.chunk.js.map