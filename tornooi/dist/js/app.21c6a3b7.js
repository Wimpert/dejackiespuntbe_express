(function(e){function t(t){for(var n,r,s=t[0],c=t[1],d=t[2],l=0,m=[];l<s.length;l++)r=s[l],o[r]&&m.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},o={app:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/tornooi/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),o=a.n(n);o.a},"1d19":function(e,t,a){"use strict";var n=a("24dd"),o=a.n(n);o.a},"24dd":function(e,t,a){},"4b10":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=a("43f9"),i=a.n(o),r=(a("51de"),a("e094"),a("7d05"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view",{key:e.$route.fullPath,attrs:{id:"content"}}),a("md-bottom-bar",{attrs:{id:"bottom-bar","md-active-item":"wrong-value","md-sync-route":!1}},[a("md-bottom-bar-item",{class:{activeBottonBarItem:"team"===e.activeRoute},attrs:{id:"team",to:e.teamLink,"md-label":"Mijn Ploeg","md-icon":"favorite"}}),a("md-bottom-bar-item",{class:{activeBottonBarItem:"group"===e.activeRoute},attrs:{id:"group",to:{path:"/group"},"md-label":"Groupen","md-icon":"list"}}),a("md-bottom-bar-item",{class:{activeBottonBarItem:"round"===e.activeRoute},attrs:{id:"round",to:"/round","md-label":"Rondes","md-icon":"access_time"}})],1)],1)}),s=[],c=(a("6b54"),a("7f7f"),{name:"app",data:function(){return{get teamLink(){return"/team".concat(window.localStorage.getItem("MY-JACKIES-CUP-TEAM-ID")?"/"+window.localStorage.getItem("MY-JACKIES-CUP-TEAM-ID"):"")},activeRoute:void 0}},mounted:function(){this.setRoute()},methods:{setRoute:function(){if(this.$route.name){this.activeRoute=this.$route.name;var e=this.$route.params.id?this.$route.params.id.toString():"-99";"team"===this.activeRoute&&e!==window.localStorage.getItem("MY-JACKIES-CUP-TEAM-ID")&&(this.activeRoute=void 0)}else this.activeRoute=void 0}},watch:{$route:function(){this.setRoute()}}}),d=c,u=(a("034f"),a("2877")),l=Object(u["a"])(d,r,s,!1,null,null,null),m=l.exports,h=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"team-container team-data"},[a("div",{staticClass:"header"},[a("div",{staticClass:"row"},[a("div",{staticClass:"header-button team-name"},[e.selectedTeam?a("md-button",{staticClass:"md-icon-button md-dense",on:{click:function(t){return e.changeTeamClicked()}}},[a("md-icon",{staticStyle:{color:"white"}},[e._v("keyboard_arrow_left")])],1):e._e(),e._v("\n                "+e._s(e.teamData.name)+"\n            ")],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"header-button",class:{active:1===e.activeMenuItem},on:{click:function(t){e.activeMenuItem=1}}},[a("md-icon",[e._v("timer")]),a("span",[e._v("Matchen")])],1),a("div",{staticClass:"header-button",class:{active:2===e.activeMenuItem},on:{click:function(t){e.activeMenuItem=2}}},[a("md-icon",[e._v("equalizer")]),a("span",[e._v("Statistieken")])],1)])]),1===e.activeMenuItem?a("div",[a("div",[e.teamData&&e.teamData.group?a("div",{staticClass:"group-link"},[a("router-link",{staticClass:"jackies-router",attrs:{to:{name:"group",params:{id:e.teamData.group.id}}}},[a("div",[a("md-icon",[e._v("list")]),e._v("  Group "+e._s(e.teamData.group.name)+" "),a("md-icon",[e._v("zoom_in")])],1)])],1):e._e()]),a("div",[e._v("Volgende Matchen:")]),a("match-list",{attrs:{matches:e.unPlayedMatches}}),a("div",[e._v("Voorbije Matchen:")]),a("match-list",{attrs:{matches:e.playedMatches}})],1):e._e(),2===e.activeMenuItem?a("div",[e._v("\n        stats\n    ")]):e._e()])},v=[],f=a("7338"),g=a.n(f),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.orderedMatches,function(e){return a("div",{key:e.id},[a("match",{attrs:{match:e}})],1)}),0)},b=[],I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("md-card",{staticClass:"match-container"},[a("div",[a("div",[e._v("\n            "+e._s(e.match.hour.toString().padStart(2,"0"))+":"+e._s(e.match.minutes.toString().padStart(2,"0"))+"  T"+e._s(e.match.terrain)+" \n        ")]),a("div",{staticClass:"match-team-name-container"},[e.match.homeTeam?a("router-link",{attrs:{to:{name:"team",params:{id:e.match.homeTeam.id}}}},[e._v(e._s(e.match.homeTeam.name))]):e._e()],1),a("div",[e._v("\n            "+e._s(e.homeTeamScore)+" "+e._s(e.homeTeamPenaltyScore)+"\n        ")])]),a("div",[a("div",[e._v("\n           "+e._s(e.match.comment)+"\n        ")]),a("div",{staticClass:"match-team-name-container"},[e.match.outTeam?a("router-link",{attrs:{to:{name:"team",params:{id:e.match.outTeam.id}}}},[e._v(e._s(e.match.outTeam.name))]):e._e()],1),a("div",[e._v("\n         "+e._s(e.outTeamScore)+" "+e._s(e.outTeamPenaltyScore)+"\n        ")])])])},C=[],S=n["default"].extend({name:"match",props:{match:Object},computed:{homeTeamScore:function(){return void 0!==this.match.homeTeamScore&&null!==this.match.homeTeamScore?this.match.homeTeamScore:"-"},homeTeamPenaltyScore:function(){return void 0!==this.match.homeTeamPenaltyScore&&null!==this.match.homeTeamPenaltyScore?`(${this.match.homeTeamPenaltyScore})`:""},outTeamScore:function(){return void 0!==this.match.outTeamScore&&null!==this.match.outTeamScore?this.match.outTeamScore:"-"},outTeamPenaltyScore:function(){return void 0!==this.match.outTeamPenaltyScore&&null!==this.match.outTeamPenaltyScore?`(${this.match.outTeamPenaltyScore})`:""}}}),T=S,k=(a("c565"),Object(u["a"])(T,I,C,!1,null,null,null)),w=k.exports,y=n["default"].extend({name:"match-list",props:{matches:Array},computed:{orderedMatches:function(){return[...this.matches].sort((e,t)=>{return e.hour!==t.hour?e.hour-t.hour:e.minutes!==t.minutes?e.minutes-t.minutes:e.terrain-t.terrain?e.terrain-t.terrain:0})}},components:{Match:w}}),M=y,P=Object(u["a"])(M,_,b,!1,null,null,null),x=P.exports,$=n["default"].extend({name:"team",components:{MatchList:x},data(){return{teamData:{},matches:[],activeMenuItem:1}},computed:{selectedTeam:function(){return!!(this.$route&&this.$route.params&&this.$route.params.id)&&window.localStorage.getItem("MY-JACKIES-CUP-TEAM-ID").toString()===this.$route.params.id.toString()},matchIDs:function(){let e=[];return this.teamData&&(this.teamData.homeMatches&&(e=[...e,...this.teamData.homeMatches]),this.teamData.outMatches&&(e=[...e,...this.teamData.outMatches])),e},playedMatches:function(){return this.matches.filter(e=>void 0!==e.outTeamScore&&null!==e.outTeamScore&&void 0!==e.homeTeamScore&&null!==e.homeTeamScore)},unPlayedMatches:function(){return this.matches.filter(e=>void 0===e.outTeamScore||null===e.outTeamScore||void 0===e.homeTeamScore||null===e.homeTeamScore)}},mounted(){g.a.get(`http://tornooi.dejackies.be/api/public-tournament/teaminfo/${this.$route.params.id}`,{withCredentials:!1}).then(e=>{this.teamData=e.data})},watch:{matchIDs:function(){const e=this.matchIDs.reduce((e,t)=>e+t.id+",","");g.a.get(`http://tornooi.dejackies.be/api/public-tournament/match?ids=${e}`,{withCredentials:!1}).then(e=>{this.matches=e.data})}},methods:{changeTeamClicked:function(){window.localStorage.removeItem("MY-JACKIES-CUP-TEAM-ID"),this.$router.push({path:"/team"})}}}),j=$,L=(a("81a0"),Object(u["a"])(j,p,v,!1,null,null,null)),D=L.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"center-container"},[e.err?a("div",[e._v(e._s(e.err))]):e._e(),a("h3",[e._v("Kies je ploeg:")]),a("md-field",[e.allTeams?a("md-select",{attrs:{name:"my-team"},model:{value:e.chosenTeamId,callback:function(t){e.chosenTeamId=t},expression:"chosenTeamId"}},e._l(e.allTeams,function(t){return a("md-option",{key:t.id,attrs:{value:t.id}},[e._v("\n                 "+e._s(t.name)+"\n            ")])}),1):e._e()],1),a("md-button",{staticClass:"md-raised md-primary",attrs:{disabled:void 0===e.chosenTeamId},on:{click:function(t){return e.okClicked()}}},[e._v("Ok")])],1)},R=[],A=n["default"].extend({name:"my-team-picker",data(){return{allTeams:[],chosenTeamId:void 0,err:void 0}},created(){g.a.get("http://tornooi.dejackies.be/api/public-tournament/all/teams",{withCredentials:!1}).then(e=>this.allTeams=e.data).catch(e=>this.err=e)},methods:{okClicked(){this.chosenTeamId&&(window.localStorage.setItem("MY-JACKIES-CUP-TEAM-ID",this.chosenTeamId),this.$router.push({path:`/team/${this.chosenTeamId}`}))}}}),O=A,G=(a("1d19"),Object(u["a"])(O,E,R,!1,null,null,null)),J=G.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("tournament-header",{attrs:{leagues:e.leagues,selectedSubPropId:e.selectedGroupId,selectedLeagueIndex:e.selectedLeagueIndex},on:{subPropClicked:e.handleSubPropClicked,leagueClicked:e.handleLeagueClicked}}),e.group&&e.group.teams?a("div",[a("group-rank",{attrs:{teams:e.group.teams}}),a("match-list",{attrs:{matches:e.group.matches}})],1):e._e()],1)},U=[],Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"table-container"}},[a("table",[e._m(0),a("tbody",e._l(e.teams,function(t,n){return a("tr",{key:t.id},[a("td",[e._v(e._s(n+1)+".")]),a("td",{staticClass:"text-container"},[e._v(e._s(t.name))]),a("td",{staticClass:"number-container"},[e._v(e._s(t.points))]),a("td",{staticClass:"number-container"},[e._v(e._s(t.matchesPlayed))]),a("td",{staticClass:"number-container"},[e._v(e._s(t.matchesWon))]),a("td",{staticClass:"number-container"},[e._v(e._s(t.matchesLost))]),a("td",{staticClass:"number-container"},[e._v(e._s(t.matchesDrawed))]),a("td",{staticClass:"number-container"},[e._v(e._s(t.goalsScored))]),a("td",{staticClass:"number-container"},[e._v(e._s(t.goalsConcieved))])])}),0)])])},B=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("\n                #\n            ")]),a("th"),a("th",[e._v("P")]),a("th",[e._v("M")]),a("th",[e._v("W")]),a("th",[e._v("V")]),a("th",[e._v("G")]),a("th",[e._v("GS")]),a("th",[e._v("GT")])])])}],N=n["default"].extend({name:"group-rank",props:{teams:Array}}),V=N,z=(a("d073"),Object(u["a"])(V,Y,B,!1,null,null,null)),H=z.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.leagues?a("div",{staticClass:"header"},[void 0!==e.selectedLeagueIndex&&void 0!==e.leagues?a("div",{staticClass:"row"},e._l(e.leagues,function(t,n){return a("div",{key:t.id,staticClass:"header-button",class:{active:e.selectedLeagueIndex===n},on:{click:function(t){return e.leagueClicked(n)}}},[e._v("\n            "+e._s(t.name)+"\n           ")])}),0):e._e(),void 0!==e.selectedLeagueIndex&&void 0!==e.leagues?a("div",{staticClass:"row"},e._l(e.leagues[e.selectedLeagueIndex][e.subPropName],function(t){return a("div",{key:t.id,staticClass:"header-button",class:{active:e.selectedSubPropId===t.id},on:{click:function(a){return e.subPropClicked(t.id)}}},[e._v("\n            "+e._s(t.name)+"\n        ")])}),0):e._e()]):e._e()},q=[],F=n["default"].extend({name:"tournament-header",props:{leagues:Array,subPropName:{default:"groups"},selectedLeagueIndex:{default:0},selectedSubPropId:{default:0}},methods:{leagueClicked:function(e){this.$emit("leagueClicked",e)},subPropClicked:function(e){this.$emit("subPropClicked",e)}}}),Q=F,X=Object(u["a"])(Q,W,q,!1,null,null,null),Z=X.exports,ee=n["default"].extend({name:"Group",components:{MatchList:x,GroupRank:H,TournamentHeader:Z},data(){return{group:void 0,selectedGroupId:void 0,leagues:void 0,selectedLeagueIndex:void 0}},mounted(){this.$route.params.id&&(this.selectedGroupId=this.$route.params.id),g.a.get("http://tornooi.dejackies.be/api/public-tournament/all/leagues",{withCredentials:!1}).then(e=>{this.leagues=e.data,void 0===this.selectedLeagueIndex&&(this.selectedLeagueIndex=0),this.selectedGroupId||(this.selectedGroupId=this.leagues[this.selectedLeagueIndex].groups[0].id)})},watch:{selectedGroupId:function(){void 0!==this.selectedGroupId&&this.loadAndSetGroupData(this.selectedGroupId)}},methods:{loadAndSetGroupData:function(e){g.a.get(`http://tornooi.dejackies.be/api/public-tournament/group/${e}`,{withCredentials:!1}).then(e=>{this.group=e.data})},handleSubPropClicked:function(e){this.selectedGroupId=e},handleLeagueClicked:function(e){this.selectedLeagueIndex=e,this.selectedGroupId=void 0,this.group=void 0}}}),te=ee,ae=Object(u["a"])(te,K,U,!1,null,null,null),ne=ae.exports,oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("tournament-header",{attrs:{leagues:e.leagues,selectedSubPropId:e.selectedRoundId,selectedLeagueIndex:e.selectedLeagueIndex,subPropName:"rounds"},on:{subPropClicked:e.handleSubPropClicked,leagueClicked:e.handleLeagueClicked}}),e.round&&e.round.matches?a("match-list",{attrs:{matches:e.round.matches}}):e._e()],1)},ie=[],re=n["default"].extend({name:"Round",components:{MatchList:x,TournamentHeader:Z},data(){return{round:void 0,selectedRoundId:void 0,leagues:void 0,selectedLeagueIndex:void 0}},mounted(){this.$route.params.id&&(this.selectedRoundId=this.$route.params.id),g.a.get("http://tornooi.dejackies.be/api/public-tournament/all/leagues",{withCredentials:!1}).then(e=>{this.leagues=e.data,void 0===this.selectedLeagueIndex&&(this.selectedLeagueIndex=0),this.selectedRoundId||(this.selectedRoundId=this.leagues[this.selectedLeagueIndex].rounds[0].id)})},watch:{selectedRoundId:function(){void 0!==this.selectedRoundId&&this.loadAndSetRoundData(this.selectedRoundId)}},methods:{loadAndSetRoundData:function(e){g.a.get(`http://tornooi.dejackies.be/api/public-tournament/round/${e}`,{withCredentials:!1}).then(e=>{this.round=e.data})},handleSubPropClicked:function(e){this.selectedRoundId=e},handleLeagueClicked:function(e){this.selectedLeagueIndex=e,this.selectedRoundId=void 0,this.round=void 0}}}),se=re,ce=Object(u["a"])(se,oe,ie,!1,null,null,null),de=ce.exports,ue=a("ed18"),le=a.n(ue);le.a.config(),n["default"].config.productionTip=!1,n["default"].use(i.a),n["default"].use(h["a"]);var me=[{path:"/team",component:J},{path:"/team/:id",name:"team",component:D},{path:"/group/:id?",component:ne,name:"group"},{path:"/round/:id?",component:de,name:"round"},{path:"*",redirect:"/team".concat(window.localStorage.getItem("MY-JACKIES-CUP-TEAM-ID")?"/"+window.localStorage.getItem("MY-JACKIES-CUP-TEAM-ID"):"")}],he=new h["a"]({routes:me});new n["default"]({router:he,render:function(e){return e(m)}}).$mount("#app")},"5a8e":function(e,t,a){},"64a9":function(e,t,a){},"7c06":function(e,t,a){},"7d05":function(e,t,a){},"81a0":function(e,t,a){"use strict";var n=a("7c06"),o=a.n(n);o.a},c565:function(e,t,a){"use strict";var n=a("4b10"),o=a.n(n);o.a},d073:function(e,t,a){"use strict";var n=a("5a8e"),o=a.n(n);o.a}});
//# sourceMappingURL=app.21c6a3b7.js.map