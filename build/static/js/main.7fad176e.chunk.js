(this["webpackJsonpgerman-train-app"]=this["webpackJsonpgerman-train-app"]||[]).push([[0],{44:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(17),r=n.n(c),s=(n(44),n(7)),o=n(8),h=n(18),l=n(11),d=n(10),u=n(58),j=n(54),b=n(1),p=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(u.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(b.jsx)(j.a,{children:Object(b.jsx)(u.a.Brand,{href:"#home",children:Object(b.jsx)("img",{src:"/logo.png",width:"42"})})})})}}]),n}(a.Component),O=n(55),m=n(56),f=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t,e=this.props.trip,n=new Date(e.dateTime).toLocaleString("de-DE");return"arrivals"===this.props.type&&(t=Object(b.jsxs)("div",{children:[Object(b.jsxs)("strong",{children:["From: ",e.origin]}),Object(b.jsxs)("p",{children:["Should Arrive At: ",n]})]})),"departures"===this.props.type&&(t=Object(b.jsxs)("div",{children:[Object(b.jsxs)("strong",{children:["To: ",e.origin]}),Object(b.jsxs)("p",{children:["Departure At: ",n]})]})),Object(b.jsx)(O.a,{children:Object(b.jsx)(m.a,{md:"12",children:t})})}}]),n}(a.Component),v=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(s.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=Object(b.jsx)("div",{});return this.props.trips.length>0&&(e=this.props.trips.map((function(e){return Object(b.jsx)(f,{type:t.props.board,id:e.detailsId,trip:e})}))),Object(b.jsx)(j.a,{children:Object(b.jsx)(O.a,{children:e})})}}]),n}(a.Component),x=n(39),g=n(60),S=n(61),k=n(57),y=n(59),C=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={input:"",locations:[]},a.handleInputChange=a.handleInputChange.bind(Object(h.a)(a)),a}return Object(o.a)(n,[{key:"handleInputChange",value:function(t){this.setState({input:t.target.value}),t.target.value.length>2&&this.getLocationsFromApi(t.target.value)}},{key:"getLocationsFromApi",value:function(t){var e=this;fetch("https://api.deutschebahn.com/freeplan/v1/location/"+t).then((function(t){return t.json()})).then((function(t){return e.setState({locations:t})}))}},{key:"submitLocation",value:function(t){this.setState({input:t.name,locations:[]}),this.props.handleLocationSubmit(t)}},{key:"render",value:function(){var t=this,e=Object(b.jsx)("div",{});return this.state.locations.length>0&&(e=this.state.locations.map((function(e){return Object(b.jsx)(x.a,{id:e.id,onClick:function(){return t.submitLocation(e)},children:e.name})}))),Object(b.jsx)("div",{children:Object(b.jsx)(j.a,{children:Object(b.jsxs)(O.a,{children:[Object(b.jsxs)(m.a,{md:"8",children:[Object(b.jsxs)(g.a,{className:"mb-3",children:[Object(b.jsx)(g.a.Text,{id:"basic-addon1",children:"Station/Stop"}),Object(b.jsx)(S.a,{placeholder:"Hamburg Hbf","aria-label":"Station/Stop","aria-describedby":"basic-addon1",onChange:this.handleInputChange,value:this.state.input})]}),Object(b.jsx)(y.a,{className:"flex-column",children:e})]}),Object(b.jsx)(m.a,{md:"4",children:Object(b.jsx)(k.a,{children:"Search"})})]})})})}}]),n}(a.Component),L=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={board:"arrivals",trips:[],loaded:!1,location:{id:1,name:""}},a.handleLocationSubmit=a.handleLocationSubmit.bind(Object(h.a)(a)),a.switchBoard=a.switchBoard.bind(Object(h.a)(a)),a}return Object(o.a)(n,[{key:"handleLocationSubmit",value:function(t){this.setState({location:t}),this.getData()}},{key:"switchBoard",value:function(t){this.setState({board:t}),this.getData()}},{key:"getData",value:function(){var t=this,e=new Date,n="https://api.deutschebahn.com/freeplan/v1/arrivalBoard/"+this.state.location.id+"?date="+e.toLocaleDateString();"departures"===this.state.board&&(n="https://api.deutschebahn.com/freeplan/v1/departureBoard/"+this.state.location.id+"?date="+e.toLocaleDateString()),console.log(n),fetch(n).then((function(t){return t.json()})).then((function(e){return t.setState({trips:e,loaded:!0})}))}},{key:"render",value:function(){var t=this;return this.state.location.name&&Object(b.jsx)("h2",{children:this.state.location.name}),Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)(p,{}),Object(b.jsx)(C,{handleLocationSubmit:this.handleLocationSubmit}),Object(b.jsxs)(j.a,{children:[Object(b.jsxs)(O.a,{className:"boardSelector",children:[Object(b.jsx)(m.a,{md:"6",children:Object(b.jsx)(k.a,{className:"full-width-button",onClick:function(){return t.switchBoard("arrivals")},children:"Arrivals"})}),Object(b.jsx)(m.a,{md:"6",children:Object(b.jsx)(k.a,{className:"full-width-button",onClick:function(){return t.switchBoard("departures")},children:"Departures"})})]}),Object(b.jsx)(O.a,{children:Object(b.jsx)(v,{trips:this.state.trips,board:this.state.board,location:this.state.location})})]})]})}}]),n}(a.Component),w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),c(t),r(t)}))};a.Component;r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),w()}},[[52,1,2]]]);
//# sourceMappingURL=main.7fad176e.chunk.js.map