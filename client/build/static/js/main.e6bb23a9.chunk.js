(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e){e.exports=JSON.parse('{"afghanistan":"157","albania":"158","algeria":"159","angola":"160","argentina":"161","argentine":"161","armenia":"162","australia":"139","austria":"163","azerbaijan":"164","bahamas":"165","bahrain":"166","bangladesh":"167","barbados":"168","belarus":"169","belgium":"135","bhutan":"170","bolivia":"171","bosnia and herzegovina":"172","bosnia":"172","botswana":"173","brazil":"174","brunei":"175","bulgaria":"176","cambodia":"177","cameroon":"178","canada":"134","central african republic":"179","chad":"180","chile":"181","china":"145","colombia":"182","congo":"183","congo dr":"184","costa rica":"185","cote d\'ivoire":"186","croatia":"187","cuba":"188","cyprus":"189","czech republic":"150","czech":"150","denmark":"190","dominica":"191","dominican republic":"192","ecuador":"193","egypt":"194","el salvador":"195","ethiopia":"196","fiji":"197","finland":"198","france":"133","gabon":"199","gambia":"200","georgia":"201","germany":"141","ghana":"202","greece":"203","grenada":"204","guatemala":"205","guinea":"206","haiti":"207","honduras":"208","hongkong":"209","hong kong":"209","hk":"209","hungary":"210","iceland":"211","india":"212","indonesia":"213","iran":"214","iraq":"215","ireland":"216","israel":"217","italy":"140","jamaica":"218","jordan":"219","kazakhstan":"220","kenya":"221","kiribati":"222","korea":"148","south korea":"148","kuwait":"223","kyrgyzstan":"224","laos":"225","latvia":"226","lebanon":"227","liberia":"228","libya":"229","liechtenstein":"230","lithuania":"231","luxembourg":"232","luxemburg":"232","macedonia":"233","madagascar":"234","malaysia":"235","maldives":"236","mali":"237","malta":"238","marshall islands":"239","mauritius":"240","mexico":"241","micronesia":"242","moldova":"243","monaco":"244","mongolia":"245","montenegro":"246","morocco":"247","mozambique":"248","myanmar":"249","namibia":"250","nepal":"251","netherlands":"152","the netherlands":"152","new zealand":"154","nicaragua":"252","nigeria":"253","norway":"137","oman":"254","pakistan":"255","palau":"256","panama":"257","papua new guinea":"258","paraguay":"259","peru":"260","philippines":"261","poland":"262","portugal":"263","qatar":"264","romania":"265","russia":"147","rwanda":"266","samoa":"267","saudi arabia":"268","senegal":"269","serbia":"270","seychelles":"271","sierra leone":"272","singapore":"153","slovakia":"273","slovenia":"274","solomon islands":"275","somalia":"276","south africa":"277","south sudan":"278","spain":"146","sri lanka":"279","sudan":"280","sweden":"281","switzerland":"131","syria":"282","syrian arab republic":"282","taiwan":"143","tajikistan":"283","tanzania":"284","thailand":"285","timor-leste":"286","timor":"286","togo":"287","tonga":"288","trinidad and tobago":"289","tunesia":"290","turkey":"291","turkmenistan":"292","tuvalu":"293","uae":"294","united arab emirates":"294","uganda":"295","uk":"136","united kingdom":"136","england":"136","scotland":"136","great britain":"136","gb":"136","ukraine":"296","uruguay":"297","usa":"132","us":"132","united states":"132","uzbekistan":"298","vanuatu":"299","vatican":"300","venezuela":"301","vietnam":"302","viet nam":"302","yemen":"303","zambia":"304","zimbabwe":"305"}')},66:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(21),i=n.n(r),s=n(5),o=n(3),l=n(8),u=n.n(l),d=n(14),j=n(6),b=Object(a.createContext)(),h=n(2),O="ADMIN_LOADED",p="AUTH_ERROR",m="LOGIN_SUCCESS",x="LOGIN_FAIL",f="LOGOUT",g="CLEAR_ERRORS",v="GET_CLIENTS",y="DELETE_CLIENTS",k="CLIENTS_ERROR",C="CLEAR_CLIENTS",N="GET_USERS",E="SET_CURRENT",w="USERS_ERROR",S="CLEAR_USERS",A="GENERATE_CSV",_="GENERATE_CSV_ONEUSER",R="CLEAR_CSV",U=function(e,t){switch(t.type){case O:return Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!0,loading:!1,admin:t.payload});case m:return localStorage.setItem("token",t.payload.token),Object(h.a)(Object(h.a)(Object(h.a)({},e),t.payload),{},{isAuthenticated:!0,loading:!1});case x:return localStorage.removeItem("token"),Object(h.a)(Object(h.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,admin:null,error:t.payload});case p:case f:return localStorage.removeItem("token"),Object(h.a)(Object(h.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,admin:null,error:null});case g:if(!t.payload)return Object(h.a)(Object(h.a)({},e),{},{error:null});var n=null;return e.error&&(void 0===(n=t.payload.forEach((function(t){return e.error.filter((function(e){return e.id!==t}))})))&&(n=null),console.log("errFiltered",n)),Object(h.a)(Object(h.a)({},e),{},{error:n});default:return e}},D=n(12),L=n.n(D),T=function(e){e?L.a.defaults.headers.common["x-auth-token"]=e:delete L.a.defaults.headers.common["x-auth-token"]},z=n(0),F=function(e){var t={token:localStorage.getItem("token"),isAuthenticated:!1,loading:!0,admin:null,error:null},n=Object(a.useReducer)(U,t),c=Object(j.a)(n,2),r=c[0],i=c[1],s=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&T(localStorage.token),e.prev=1,e.next=4,L.a.get("/api/auth");case 4:t=e.sent,i({type:O,payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),i({type:p});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,L.a.post("/api/auth",t,n);case 4:a=e.sent,l(),i({type:m,payload:a.data}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),i({type:x,payload:e.t0.response.data.errors}),setTimeout((function(){return l()}),5e3);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){i({type:g})};return Object(z.jsx)(b.Provider,{value:{token:r.token,isAuthenticated:r.isAuthenticated,loading:r.loading,admin:null,error:r.error,loadAdmin:s,login:o,logout:function(){i({type:f})},clearErrors:l},children:e.children})},I=Object(a.createContext)(),Y=function(e,t){switch(t.type){case v:return Object(h.a)(Object(h.a)({},e),{},{clients:t.payload,loading:!1});case y:return{clients:[],error:null,loading:!1};case k:return Object(h.a)(Object(h.a)({},e),{},{error:t.payload});case C:return Object(h.a)(Object(h.a)({},e),{},{clients:null,error:null});default:return e}},M=function(e){var t=Object(a.useReducer)(Y,{clients:null,error:null,loading:!0}),n=Object(j.a)(t,2),c=n[0],r=n[1],i=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&T(localStorage.token),e.prev=1,e.next=4,L.a.get("/api/clients");case 4:t=e.sent,r({type:v,payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:k,payload:e.t0.response.msg});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.delete("/api/clients");case 2:r({type:y});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(z.jsx)(I.Provider,{value:{clients:c.clients,error:c.error,getClients:i,deleteClients:s,clearClients:function(){r({type:C})}},children:e.children})},P=Object(a.createContext)(),G=function(e,t){switch(t.type){case A:return Object(h.a)(Object(h.a)({},e),{},{csv:[],csvAll:t.payload[0],todaysDate:t.payload[1]});case _:return Object(h.a)(Object(h.a)({},e),{},{csv:t.payload[0],todaysDate:t.payload[1]});case R:return Object(h.a)(Object(h.a)({},e),{},{csv:[],csvAll:[],todaysDate:null});default:return e}},q=n(22),B=function(e){var t=Object(a.useReducer)(G,{csv:[],csvAll:[],todaysDate:null}),n=Object(j.a)(t,2),c=n[0],r=n[1],i=function(e){var t;if(", "===e)t="";else if(", "===e.slice(-2))t=e.slice(0,-2);else{if(", "!==e.substring(0,2))return e;t=e.slice(2)}return t},s=function(e,t){var n=new Date,a=n.getFullYear()+("0"+(n.getMonth()+1)).slice(-2)+n.getDate(),c=[["\u652f\u5e97\u540d(\u30b3\u30fc\u30c9\u6307\u5b9a\u3001\u672a\u5165\u529b\u6642\u306f\u300c\u672c\u793e\u300d)","\u6d77\u5916\u30d5\u30e9\u30b0(1=\u6d77\u5916\u30010\u3082\u3057\u304f\u306f\u672a\u5165\u529b\u6642\u306f\u6d77\u5916\u3067\u306f\u306a\u3044)","\u2605\u9867\u5ba2\u540d(\u5fc5\u9808)","\u2605\u9867\u5ba2\u540d\u304b\u306a","\u2605\u656c\u79f0(\u30b3\u30fc\u30c9\u6307\u5b9a\u3001\u672a\u5165\u529b\u6642\u306f\u300c\u69d8\u300d)","\u2605\u751f\u5e74\u6708\u65e5(YYYY/MM/DD)","\u2605\u5730\u533a\u540d(\u30b3\u30fc\u30c9\u6307\u5b9a)","\u2605\u30ad\u30fc\u30ef\u30fc\u30c9","\u767b\u9332\u65e5(YYYY/MM/DD)","\u2605\u81ea\u5b85\u90f5\u4fbf\u756a\u53f7(\u30cf\u30a4\u30d5\u30f3\u6709\u308a\u7121\u3057\u3001\u3069\u3061\u3089\u3067\u3082\u53ef)","\u2605\u81ea\u5b85\u4f4f\u6240\uff11","\u2605\u81ea\u5b85\u4f4f\u6240\uff12","\u2605\u81ea\u5b85\u96fb\u8a71\u756a\u53f7\uff11(\u30cf\u30a4\u30d5\u30f3\u6709\u308a\u7121\u3057\u3001\u3069\u3061\u3089\u3067\u3082\u53ef)","\u2605\u81ea\u5b85\u96fb\u8a71\u756a\u53f7\uff12(\u30cf\u30a4\u30d5\u30f3\u6709\u308a\u7121\u3057\u3001\u3069\u3061\u3089\u3067\u3082\u53ef)","\u2605\u81ea\u5b85FAX(\u30cf\u30a4\u30d5\u30f3\u6709\u308a\u7121\u3057\u3001\u3069\u3061\u3089\u3067\u3082\u53ef)","\u2605\u52e4\u52d9\u5148\u540d","\u2605\u52e4\u52d9\u5148\u5185\u5bb9","\u2605\u5f79\u8077\u540d","\u2605\u52e4\u52d9\u5148\u90f5\u4fbf\u756a\u53f7(\u30cf\u30a4\u30d5\u30f3\u6709\u308a\u7121\u3057\u3001\u3069\u3061\u3089\u3067\u3082\u53ef)","\u2605\u52e4\u52d9\u5148\u4f4f\u6240\uff11","\u2605\u52e4\u52d9\u5148\u4f4f\u6240\uff12","\u2605\u52e4\u52d9\u5148\u96fb\u8a71\u756a\u53f7\uff11(\u30cf\u30a4\u30d5\u30f3\u6709\u308a\u7121\u3057\u3001\u3069\u3061\u3089\u3067\u3082\u53ef)","\u2605\u52e4\u52d9\u5148\u96fb\u8a71\u756a\u53f7\uff12(\u30cf\u30a4\u30d5\u30f3\u6709\u308a\u7121\u3057\u3001\u3069\u3061\u3089\u3067\u3082\u53ef)","\u2605\u52e4\u52d9\u5148FAX(\u30cf\u30a4\u30d5\u30f3\u6709\u308a\u7121\u3057\u3001\u3069\u3061\u3089\u3067\u3082\u53ef)","\u72b6\u6cc1\u533a\u5206(\u30b3\u30fc\u30c9\u6307\u5b9a\u3001\u672a\u5165\u529b\u6642\u306f\u300c\u672c\u4eba\u300d)","\u672c\u4eba\u72b6\u6cc1\u5185\u5bb9","\u2605\u7d39\u4ecb\u72b6\u6cc1\u5185\u5bb9","\u5176\u4ed6\u72b6\u6cc1\u5185\u5bb9","\u2605\uff24M\u767a\u884c\uff08\u76ee\u9332\uff09(\u3059\u308b=1 \u3057\u306a\u3044=0)","\u2605\u81ea\u5b85\u9001\u4ed8(\u3059\u308b=1 \u3057\u306a\u3044=0)","\u2605\u52e4\u52d9\u5148\u9001\u4ed8(\u3059\u308b=1 \u3057\u306a\u3044=0)","\u2605\u55b6\u696d\u62c5\u5f53(\u30b3\u30fc\u30c9\u6307\u5b9a)","\u65b0\u898fNT(\u30b3\u30fc\u30c9\u6307\u5b9a)","\u2605\u9001\u4ed8\u30e9\u30f3\u30af(\u30b3\u30fc\u30c9\u6307\u5b9a)","\u2605\u76ee\u9332\u7a2e\u985e(\u30b3\u30fc\u30c9\u6307\u5b9a)","\u2605\u5099\u8003","\u2605\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"]],r=[];return e.forEach((function(e){var n;r=function(e,t){for(var n=[],a=0;a<e;a++)n.push(t);return n}(30,""),"\u65e5\u672c"===e.country||"Japan"===e.country?(r[1]="",r[9]=e.zipcode,r[10]=e.city,r[11]=i(e.reviewAddressLine2),r[33]="1"):(r[1]="1",r[9]="",r[10]=i(e.reviewAddressLine1),r[11]=e.city+" "+e.zipcode,r[33]="7"),r[2]=(n=e.clientName).includes("\uff08")?n.split("\uff08")[0]:n,r[3]=function(e){var t="";if(e.includes("\uff08")){var n=e.split("\uff08");t=n[1].substring(0,n[1].length-1)}return t}(e.clientName),r[15]=e.company,r[6]=function(e){var t=e.toLowerCase();return!1===Object.keys(q).includes(t)?e:q[t]}(e.country),r[8]=e.date.slice(0,10).replaceAll("-","/"),r[36]=e.email,r[4]=function(e){switch(e){case"2":return"6";case"3":return"7";case"4":return"9";case"5":return"12";default:return e}}(e.greeting),r[31]=function(e,t){var n=e.substring(5),a=t.filter((function(e){return e._id===n})),c="undefined";return a[0].name&&(c=V[a[0].name]),c}(e._partition,t),r[16]=e.industry,r[13]=e.mobile,r[35]=e.notes,r[17]=e.position,r[12]=e.tel,r[30]="0","1"===e.wanobi?(r[28]="1",r[29]="1",r[34]="2"):(r[28]="0",r[29]="0",r[34]="6"),c.push(r)})),[c,a]};return Object(z.jsx)(P.Provider,{value:{csv:c.csv,csvAll:c.csvAll,todaysDate:c.todaysDate,generateCsv:function(e,t){var n=s(e,t);r({type:A,payload:n})},generateCsvForOne:function(e,t,n){var a=s(e,[{name:t,_id:n}]);r({type:_,payload:a})},clearCsv:function(){r({type:R})}},children:e.children})},V={"dai@shibunkaku.co.jp":"219","irie@shibunkaku.co.jp":"225","yamamoto@shibunkaku.co.jp":"226","kaneko@shibunkaku.co.jp":"228","yamauchi@shibunkaku.co.jp":"359","ymaruyama@shibunkaku.co.jp":"388","ryo@shibunkaku.co.jp":"403","he@shibunkaku.co.jp":"424","bartel@shibunkaku.co.jp":"425","ku@shibunkaku.co.jp":"426","yoshioka@shibunkaku.co.jp":"428","shimizu@shibunkaku.co.jp":"429","nagata@shibunkaku.co.jp":"437","kariya@shibunkaku.co.jp":"438"},J=Object(a.createContext)(),X=function(e,t){switch(t.type){case N:return Object(h.a)(Object(h.a)({},e),{},{users:t.payload,loading:!1});case E:return Object(h.a)(Object(h.a)({},e),{},{currentUser:t.payload});case w:return Object(h.a)(Object(h.a)({},e),{},{error:t.payload});case S:return Object(h.a)(Object(h.a)({},e),{},{users:null,error:null});default:return e}},H=function(e){var t=Object(a.useReducer)(X,{users:null,error:null,currentUser:null}),n=Object(j.a)(t,2),c=n[0],r=n[1],i=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&T(localStorage.token),e.prev=1,e.next=4,L.a.get("/api/users");case 4:t=e.sent,r({type:N,payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:w,payload:e.t0.response.msg});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return Object(z.jsx)(J.Provider,{value:{users:c.users,error:c.error,currentUser:c.currentUser,getUsers:i,clearUsers:function(){r({type:S})},setCurrentUser:function(e){r({type:E,payload:e})}},children:e.children})},W=(n(66),n(23)),K=n(16),Q=n.n(K),Z=function(){var e=Object(a.useContext)(b),t=Object(a.useContext)(J),n=Object(a.useContext)(I),c=Object(a.useContext)(P),r=e.logout,i=t.clearUsers,l=t.currentUser,u=n.clearClients,d=n.deleteClients,h=c.csvAll,O=c.csv,p=c.todaysDate,m=c.clearCsv,x=Object(o.g)(),f=Object(a.useState)(!1),g=Object(j.a)(f,2),v=g[0],y=g[1],k=Object(a.useState)(!1),C=Object(j.a)(k,2),N=C[0],E=C[1],w=Object(a.useState)(!1),S=Object(j.a)(w,2),A=S[0],_=S[1];return Q.a.setAppElement("#root"),Object(z.jsx)("div",{className:"menu-container",children:Object(z.jsxs)("div",{className:"menu",children:[Object(z.jsx)(Q.a,{isOpen:v,onRequestClose:function(){return y(!1)},style:$,children:Object(z.jsxs)("div",{className:"modal-content",children:[Object(z.jsx)("h2",{children:"Warning:"}),Object(z.jsxs)("p",{children:["Deleting all data cannot be undone.",Object(z.jsx)("br",{}),"Proceed with caution."]}),Object(z.jsx)("button",{onClick:function(){y(!1),E(!0)},children:"Proceed"}),Object(z.jsx)("button",{onClick:function(){return y(!1)},children:"Cancel"})]})}),Object(z.jsx)(Q.a,{isOpen:N,onRequestClose:function(){return E(!1)},style:$,children:Object(z.jsxs)("div",{className:"modal-content",children:[Object(z.jsx)("h2",{children:"Reset database?"}),Object(z.jsx)("button",{onClick:function(){E(!1),_(!0),u(),m(),d()},children:"Reset"}),Object(z.jsx)("button",{onClick:function(){return E(!1)},children:"Cancel"})]})}),Object(z.jsx)(Q.a,{isOpen:A,onRequestClose:function(){return _(!1)},style:$,children:Object(z.jsxs)("div",{className:"modal-content",children:[Object(z.jsx)("p",{className:"move-up",children:"Database has been reset."}),Object(z.jsx)("button",{onClick:function(){return _(!1)},children:"Close"})]})}),Object(z.jsx)("p",{children:Object(z.jsx)(s.b,{to:"/all",children:"View All"})}),Object(z.jsx)("p",{children:Object(z.jsx)(W.CSVLink,{data:h,filename:"".concat(p,"_sbk-client.csv"),children:"Download All"})}),"/clients"===x.pathname&&l&&Object(z.jsx)("p",{children:Object(z.jsx)(W.CSVLink,{data:O,filename:"".concat(p,"_sbk-client_").concat(l.split("@")[0].toUpperCase(),".csv"),children:"Download Current"})}),Object(z.jsx)("p",{onClick:function(){return y(!0)},children:"Reset Database"}),Object(z.jsx)("p",{children:Object(z.jsx)("button",{type:"button",onClick:function(){r(),i(),u(),m()},children:"Logout"})})]})})},$={overlay:{backgroundColor:"none"},content:{backgroundColor:"#d9d9d9",border:"1px solid #c7c7c7",textAlign:"center",margin:"auto",height:"40vh",width:"50vw",display:"flex",justifyContent:"center",flexDirection:"column"}},ee=function(e){var t=Object(a.useContext)(b),n=Object(a.useContext)(J),c=Object(a.useContext)(I),r=Object(a.useContext)(P),i=t.loadAdmin,o=n.users,l=n.getUsers,u=n.setCurrentUser,d=n.currentUser,j=c.clients,h=c.getClients,O=c.loading,p=r.generateCsv;Object(a.useEffect)((function(){i(),l(),h(),null!==d&&u(null)}),[]),Object(a.useEffect)((function(){j&&o&&p(j,o)}),[]);var m=function(e){return j.filter((function(t){return t._partition===e._partition}))};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Z,{}),null!==j&&null!==o&&!O&&Object(z.jsxs)("div",{className:"clients-container",children:[0===o.length?Object(z.jsx)("div",{children:"No users on file."}):Object(z.jsx)(z.Fragment,{children:o.map((function(e){return 0!==m(e).length?Object(z.jsxs)("div",{className:"view-all",children:[Object(z.jsxs)("div",{className:"clients-table",children:["User: ",e.name]}),m(e).map((function(e){return Object(z.jsxs)("div",{className:"clients-table",children:[Object(z.jsx)("div",{children:e.clientName}),Object(z.jsx)("div",{className:"client-hide",children:e.email}),Object(z.jsx)("div",{className:"client-hide",children:e.company}),Object(z.jsx)("div",{className:"client-hide",children:e.position}),Object(z.jsx)("div",{children:e.country})]},e._id)}))]},e._id):Object(z.jsxs)("div",{style:{marginTop:"2rem",marginBottom:"2rem"},children:["No clients on file for ",Object(z.jsx)("strong",{children:e.name}),"."]},e.name)}))}),Object(z.jsx)("div",{className:"back-to-top",children:Object(z.jsx)(s.b,{to:"/",children:"\u2191 Back to Top"})})]})]})},te=function(e){var t,n=Object(a.useContext)(b),c=Object(a.useContext)(I),r=Object(a.useContext)(J),i=Object(a.useContext)(P),o=n.loadAdmin,l=c.clients,u=c.loading,d=c.getClients,j=r.users,h=r.getUsers,O=r.setCurrentUser,p=r.currentUser,m=i.generateCsv,x=i.generateCsvForOne;Object(a.useEffect)((function(){o(),h(),d(),e.location.state&&O(e.location.state.user.name)}),[]),Object(a.useEffect)((function(){if(l&&j&&m(l,j),l&&j&&p){var e=j.filter((function(e){return e.name===p}))[0],t=l.filter((function(t){return t._partition===e._partition}));x(t,e.name,e._id)}}),[l,j]);var f=[];return l&&j&&null!==p&&(t=j.filter((function(e){return e.name===p}))[0],f=l.filter((function(e){return e._partition===t._partition}))),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Z,{}),null!==l&&null!==j&&!u&&null!==p&&Object(z.jsxs)("div",{className:"clients-container",children:[0===f.length?Object(z.jsxs)("div",{style:{marginBottom:"2rem"},children:["No clients on file for ",Object(z.jsxs)("strong",{children:[t.name,"."]})]}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)("div",{className:"clients-table",children:["User: ",t.name]}),f.map((function(e){return Object(z.jsxs)("div",{className:"clients-table",children:[Object(z.jsx)("div",{className:"",children:e.clientName}),Object(z.jsx)("div",{className:"client-hide",children:e.email}),Object(z.jsx)("div",{className:"client-hide",children:e.company}),Object(z.jsx)("div",{className:"client-hide",children:e.position}),Object(z.jsx)("div",{className:"",children:e.country})]},e._id)}))]}),Object(z.jsx)("div",{className:"back-to-top",children:Object(z.jsx)(s.b,{to:"/",children:"\u2191 Back to Top"})})]})]})},ne=function(){return Object(z.jsx)("div",{className:"footer",children:Object(z.jsx)("p",{children:"\xa9 Shibunkaku Co., Ltd. 2021"})})},ae=n.p+"static/media/shibunkaku_logo.4c549ebe.svg",ce=function(){var e=Object(a.useContext)(b).clearErrors;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("div",{className:"chrome-patch"}),Object(z.jsx)("div",{className:"header",id:"header",children:Object(z.jsx)(s.b,{to:"/",children:Object(z.jsx)("img",{src:ae,alt:"",className:"logo",id:"logo",onClick:function(){return e()}})})})]})},re=function(){var e=Object(a.useContext)(J),t=Object(a.useContext)(I),n=Object(a.useContext)(P),c=e.users,r=e.getUsers,i=e.loading,o=t.getClients,l=t.clients,u=n.generateCsv;return Object(a.useEffect)((function(){r(),o()}),[]),Object(a.useEffect)((function(){l&&c&&u(l,c)}),[l]),Object(z.jsx)(z.Fragment,{children:null!==c&&!i&&Object(z.jsx)("div",{className:"container",children:Object(z.jsx)("div",{className:"user-grid",children:c.map((function(e){return Object(z.jsx)(s.b,{to:{pathname:"clients",state:{user:e}},children:Object(z.jsx)("div",{children:e.name})},e._id)}))})})})},ie=function(){var e=Object(a.useContext)(b),t=Object(a.useContext)(J),n=e.loadAdmin,c=t.setCurrentUser,r=t.currentUser;return Object(a.useEffect)((function(){n(),null!==r&&c(null)}),[]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Z,{}),Object(z.jsx)(re,{})]})},se=n(17),oe=function(){var e=Object(a.useContext)(b).error;return null!==e&&Object(z.jsx)("div",{style:{margin:"auto",fontSize:"0.8rem"},children:e[0].msg})},le=function(e){var t=Object(a.useContext)(b),n=t.login,c=t.isAuthenticated,r=Object(a.useState)({email:"",password:""}),i=Object(j.a)(r,2),s=i[0],o=i[1];Object(a.useEffect)((function(){c&&e.history.push("/")}),[c,e.history]);var l=s.email,u=s.password,d=function(e){o(Object(h.a)(Object(h.a)({},s),{},Object(se.a)({},e.target.name,e.target.value)))};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("div",{className:"dummy"}),Object(z.jsxs)("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),l=l.trim(),n({email:l,password:u})},children:[Object(z.jsx)("input",{type:"text",placeholder:"Email",name:"email",value:l,onChange:d}),Object(z.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:u,onChange:d}),Object(z.jsx)("input",{className:"login-btn",type:"submit",value:"Login"}),Object(z.jsx)(oe,{})]})]})},ue=function(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("div",{className:"not-found-container",children:Object(z.jsxs)("div",{className:"not-found",children:[Object(z.jsx)("h3",{children:"Page not found."}),Object(z.jsx)(s.b,{to:"/",children:"\u2191 Back to Top"})]})}),Object(z.jsx)("div",{})]})},de=n(41),je=["component"],be=function(e){var t=e.component,n=Object(de.a)(e,je),c=Object(a.useContext)(b),r=c.isAuthenticated,i=c.loading;return Object(z.jsx)(o.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return r||i?Object(z.jsx)(t,Object(h.a)({},e)):Object(z.jsx)(o.a,{to:"/login"})}}))};localStorage.token&&T(localStorage.token);var he=function(){return Object(z.jsx)("div",{className:"App",children:Object(z.jsx)(F,{children:Object(z.jsx)(H,{children:Object(z.jsx)(M,{children:Object(z.jsx)(B,{children:Object(z.jsx)(s.a,{children:Object(z.jsxs)("div",{className:"wrapper",children:[Object(z.jsx)(ce,{}),Object(z.jsxs)(o.d,{children:[Object(z.jsx)(be,{exact:!0,path:"/",component:ie}),Object(z.jsx)(be,{exact:!0,path:"/clients",component:te}),Object(z.jsx)(be,{exact:!0,path:"/all",component:ee}),Object(z.jsx)(o.b,{exact:!0,path:"/login",component:le}),Object(z.jsx)(o.b,{path:"/",component:ue})]}),Object(z.jsx)(ne,{})]})})})})})})})};i.a.render(Object(z.jsx)(c.a.StrictMode,{children:Object(z.jsx)(he,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.e6bb23a9.chunk.js.map