(function(t){function e(e){for(var n,i,c=e[0],s=e[1],m=e[2],l=0,d=[];l<c.length;l++)i=c[l],r[i]&&d.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,m||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/tornooi/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var m=0;m<c.length;m++)e(c[m]);var u=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"1d19":function(t,e,a){"use strict";var n=a("24dd"),r=a.n(n);r.a},"24dd":function(t,e,a){},"4b10":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("43f9"),o=a.n(r),i=(a("51de"),a("e094"),a("7d05"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view",{key:t.$route.fullPath,attrs:{id:"content"}}),a("md-bottom-bar",{attrs:{id:"bottom-bar","md-sync-route":"","md-type":"fixed"}},[a("md-bottom-bar-item",{attrs:{to:"/","md-label":"Tornooi","md-icon":"home"}}),a("md-bottom-bar-item",{attrs:{to:t.teamLink,"md-label":"Mijn Ploeg","md-icon":"favorite"}}),a("md-bottom-bar-item",{attrs:{to:"/bar","md-label":"Alle Matchen","md-icon":"access_time"}})],1)],1)}),c=[],s={name:"app",data:function(){return{get teamLink(){return"/team".concat(window.localStorage.getItem("MY-JACKIES-CUP-TEAM-ID")?"/"+window.localStorage.getItem("MY-JACKIES-CUP-TEAM-ID"):"")}}}},m=s,u=(a("034f"),a("2877")),l=Object(u["a"])(m,i,c,!1,null,null,null),d=l.exports,h=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("over ! ")])},v=[],f=n["default"].extend({name:"overview"}),_=f,b=Object(u["a"])(_,p,v,!1,null,null,null),T=b.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"team-container"},[a("md-card",{staticClass:"team-data"},[t.selectedTeam?a("md-button",{staticClass:"md-icon-button",on:{click:function(e){return t.changeTeamClicked()}}},[a("md-icon",[t._v("swap_horiz")])],1):t._e(),a("div",[t._v(t._s(t.teamData.name))]),t.teamData.group?a("div",[a("router-link",{attrs:{to:{name:"group",params:{id:t.teamData.group.id}}}},[t._v("\n            Group: "+t._s(t.teamData.group.name)+"\n        ")])],1):t._e(),a("div")],1),a("h5",[t._v("Volgende Matchen:")]),a("match-list",{attrs:{matches:t.unPlayedMatches}}),a("h6",[t._v("Voorbije Matchen:")]),a("match-list",{attrs:{matches:t.playedMatches}})],1)},S=[],y=a("7338"),C=a.n(y),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.orderedMatches,function(t){return a("div",{key:t.id},[a("match",{attrs:{match:t}})],1)}),0)},w=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-card",{staticClass:"match-container"},[a("div",[a("div",[t._v("\n            "+t._s(t.match.hour.toString().padStart(2,"0"))+":"+t._s(t.match.minutes.toString().padStart(2,"0"))+"  T"+t._s(t.match.terrain)+" \n        ")]),a("div",{staticClass:"match-team-name-container"},[a("router-link",{attrs:{to:{name:"team",params:{id:t.match.homeTeam.id}}}},[t._v(t._s(t.match.homeTeam.name))])],1),a("div",[t._v("\n            "+t._s(t.homeTeamScore)+" "+t._s(t.homeTeamPenaltyScore)+"\n        ")])]),a("div",[a("div",[t._v("\n           "+t._s(t.match.comment)+"\n        ")]),a("div",{staticClass:"match-team-name-container"},[a("router-link",{attrs:{to:{name:"team",params:{id:t.match.outTeam.id}}}},[t._v(t._s(t.match.outTeam.name))])],1),a("div",[t._v("\n         "+t._s(t.outTeamScore)+" "+t._s(t.outTeamPenaltyScore)+"\n        ")])])])},P=[],I=n["default"].extend({name:"match",props:{match:Object},computed:{homeTeamScore:function(){return void 0!==this.match.homeTeamScore&&null!==this.match.homeTeamScore?this.match.homeTeamScore:"-"},homeTeamPenaltyScore:function(){return void 0!==this.match.homeTeamPenaltyScore&&null!==this.match.homeTeamPenaltyScore?`(${this.match.homeTeamPenaltyScore})`:""},outTeamScore:function(){return void 0!==this.match.outTeamScore&&null!==this.match.outTeamScore?this.match.outTeamScore:"-"},outTeamPenaltyScore:function(){return void 0!==this.match.outTeamPenaltyScore&&null!==this.match.outTeamPenaltyScore?`(${this.match.outTeamPenaltyScore})`:""}}}),$=I,j=(a("c565"),Object(u["a"])($,k,P,!1,null,null,null)),x=j.exports,D=n["default"].extend({name:"match-list",props:{matches:Array},computed:{orderedMatches:function(){return[...this.matches].sort((t,e)=>{return t.hour!==e.hour?t.hour-e.hour:t.minutes!==e.minutes?t.minutes-e.minutes:t.terrain-e.terrain?t.terrain-e.terrain:0})}},components:{Match:x}}),E=D,O=Object(u["a"])(E,M,w,!1,null,null,null),A=O.exports,G=n["default"].extend({name:"team",components:{MatchList:A},data(){return{teamData:{},matches:[]}},computed:{selectedTeam:function(){return!!(this.$route&&this.$route.params&&this.$route.params.id)&&window.localStorage.getItem("MY-JACKIES-CUP-TEAM-ID").toString()===this.$route.params.id.toString()},matchIDs:function(){let t=[];return this.teamData&&(this.teamData.homeMatches&&(t=[...t,...this.teamData.homeMatches]),this.teamData.outMatches&&(t=[...t,...this.teamData.outMatches])),t},playedMatches:function(){return this.matches.filter(t=>void 0!==t.outTeamScore&&null!==t.outTeamScore&&void 0!==t.homeTeamScore&&null!==t.homeTeamScore)},unPlayedMatches:function(){return this.matches.filter(t=>void 0===t.outTeamScore||null===t.outTeamScore||void 0===t.homeTeamScore||null===t.homeTeamScore)}},mounted(){C.a.get(`http://tornooi.dejackies.be/api/public-tournament/teaminfo/${this.$route.params.id}`,{withCredentials:!1}).then(t=>{this.teamData=t.data})},watch:{matchIDs:function(){const t=this.matchIDs.reduce((t,e)=>t+e.id+",","");C.a.get(`http://tornooi.dejackies.be/api/public-tournament/match?ids=${t}`,{withCredentials:!1}).then(t=>{this.matches=t.data})}},methods:{changeTeamClicked:function(){window.localStorage.removeItem("MY-JACKIES-CUP-TEAM-ID"),this.$router.push({path:"/team"})}}}),J=G,K=(a("81a0"),Object(u["a"])(J,g,S,!1,null,null,null)),L=K.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"center-container"},[t.err?a("div",[t._v(t._s(t.err))]):t._e(),a("h3",[t._v("Kies je ploeg:")]),a("md-field",[t.allTeams?a("md-select",{attrs:{name:"my-team"},model:{value:t.chosenTeamId,callback:function(e){t.chosenTeamId=e},expression:"chosenTeamId"}},t._l(t.allTeams,function(e){return a("md-option",{key:e.id,attrs:{value:e.id}},[t._v("\n                 "+t._s(e.name)+"\n            ")])}),1):t._e()],1),a("md-button",{staticClass:"md-raised md-primary",attrs:{disabled:void 0===t.chosenTeamId},on:{click:function(e){return t.okClicked()}}},[t._v("Ok")])],1)},Y=[],V=n["default"].extend({name:"my-team-picker",data(){return{allTeams:[],chosenTeamId:void 0,err:void 0}},created(){C.a.get("http://tornooi.dejackies.be/api/public-tournament/all/teams",{withCredentials:!1}).then(t=>this.allTeams=t.data).catch(t=>this.err=t)},methods:{okClicked(){this.chosenTeamId&&(window.localStorage.setItem("MY-JACKIES-CUP-TEAM-ID",this.chosenTeamId),this.$router.push({path:`/team/${this.chosenTeamId}`}))}}}),W=V,z=(a("1d19"),Object(u["a"])(W,U,Y,!1,null,null,null)),R=z.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.group&&t.group.teams?a("div",[a("div",[t._v("Group "+t._s(t.group.name)+":")]),a("group-rank",{attrs:{teams:t.group.teams}}),a("match-list",{attrs:{matches:t.group.matches}})],1):t._e()},B=[],F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"table-container"}},[a("table",[t._m(0),a("tbody",t._l(t.teams,function(e,n){return a("tr",{key:e.id},[a("td",[t._v(t._s(n+1)+".")]),a("td",{staticClass:"text-container"},[t._v(t._s(e.name))]),a("td",{staticClass:"number-container"},[t._v(t._s(e.points))]),a("td",{staticClass:"number-container"},[t._v(t._s(e.matchesPlayed))]),a("td",{staticClass:"number-container"},[t._v(t._s(e.matchesWon))]),a("td",{staticClass:"number-container"},[t._v(t._s(e.matchesLost))]),a("td",{staticClass:"number-container"},[t._v(t._s(e.matchesDrawed))]),a("td",{staticClass:"number-container"},[t._v(t._s(e.goalsScored))]),a("td",{staticClass:"number-container"},[t._v(t._s(e.goalsConcieved))])])}),0)])])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("\n                #\n            ")]),a("th"),a("th",[t._v("P")]),a("th",[t._v("M")]),a("th",[t._v("W")]),a("th",[t._v("V")]),a("th",[t._v("G")]),a("th",[t._v("GS")]),a("th",[t._v("GT")])])])}],N=n["default"].extend({name:"group-rank",props:{teams:Array}}),Q=N,X=(a("d073"),Object(u["a"])(Q,F,H,!1,null,null,null)),Z=X.exports,tt=n["default"].extend({name:"Group",components:{MatchList:A,GroupRank:Z},data(){return{group:void 0}},mounted(){C.a.get(`http://tornooi.dejackies.be/api/public-tournament/group/${this.$route.params.id}`,{withCredentials:!1}).then(t=>{console.log(t.data),this.group=t.data})}}),et=tt,at=Object(u["a"])(et,q,B,!1,null,null,null),nt=at.exports,rt=a("ed18"),ot=a.n(rt);ot.a.config(),n["default"].config.productionTip=!1,n["default"].use(o.a),n["default"].use(h["a"]);var it=[{path:"/",component:T},{path:"/overview",component:T},{path:"/team",component:R},{path:"/team/:id",name:"team",component:L},{path:"/group/:id",component:nt,name:"group"},{path:"*",redirect:"/"}],ct=new h["a"]({routes:it});new n["default"]({router:ct,render:function(t){return t(d)}}).$mount("#app")},"5a8e":function(t,e,a){},"64a9":function(t,e,a){},"7c06":function(t,e,a){},"7d05":function(t,e,a){},"81a0":function(t,e,a){"use strict";var n=a("7c06"),r=a.n(n);r.a},c565:function(t,e,a){"use strict";var n=a("4b10"),r=a.n(n);r.a},d073:function(t,e,a){"use strict";var n=a("5a8e"),r=a.n(n);r.a}});
//# sourceMappingURL=app.53b1e921.js.map