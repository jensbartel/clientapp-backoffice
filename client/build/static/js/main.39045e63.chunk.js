(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e){e.exports=JSON.parse('{"afghanistan":"157","albania":"158","algeria":"159","angola":"160","argentina":"161","argentine":"161","armenia":"162","australia":"139","austria":"163","azerbaijan":"164","bahamas":"165","bahrain":"166","bangladesh":"167","barbados":"168","belarus":"169","belgium":"135","bhutan":"170","bolivia":"171","bosnia and herzegovina":"172","bosnia":"172","botswana":"173","brazil":"174","brunei":"175","bulgaria":"176","cambodia":"177","cameroon":"178","canada":"134","central african republic":"179","chad":"180","chile":"181","china":"145","colombia":"182","congo":"183","congo dr":"184","costa rica":"185","cote d\'ivoire":"186","croatia":"187","cuba":"188","cyprus":"189","czech republic":"150","czech":"150","denmark":"190","dominica":"191","dominican republic":"192","ecuador":"193","egypt":"194","el salvador":"195","ethiopia":"196","fiji":"197","finland":"198","france":"133","gabon":"199","gambia":"200","georgia":"201","germany":"141","ghana":"202","greece":"203","grenada":"204","guatemala":"205","guinea":"206","haiti":"207","honduras":"208","hongkong":"209","hong kong":"209","hk":"209","hungary":"210","iceland":"211","india":"212","indonesia":"213","iran":"214","iraq":"215","ireland":"216","israel":"217","italy":"140","jamaica":"218","jordan":"219","kazakhstan":"220","kenya":"221","kiribati":"222","korea":"148","south korea":"148","kuwait":"223","kyrgyzstan":"224","laos":"225","latvia":"226","lebanon":"227","liberia":"228","libya":"229","liechtenstein":"230","lithuania":"231","luxembourg":"232","luxemburg":"232","macedonia":"233","madagascar":"234","malaysia":"235","maldives":"236","mali":"237","malta":"238","marshall islands":"239","mauritius":"240","mexico":"241","micronesia":"242","moldova":"243","monaco":"244","mongolia":"245","montenegro":"246","morocco":"247","mozambique":"248","myanmar":"249","namibia":"250","nepal":"251","netherlands":"152","the netherlands":"152","new zealand":"154","nicaragua":"252","nigeria":"253","norway":"137","oman":"254","pakistan":"255","palau":"256","panama":"257","papua new guinea":"258","paraguay":"259","peru":"260","philippines":"261","poland":"262","portugal":"263","qatar":"264","romania":"265","russia":"147","rwanda":"266","samoa":"267","saudi arabia":"268","senegal":"269","serbia":"270","seychelles":"271","sierra leone":"272","singapore":"153","slovakia":"273","slovenia":"274","solomon islands":"275","somalia":"276","south africa":"277","south sudan":"278","spain":"146","sri lanka":"279","sudan":"280","sweden":"281","switzerland":"131","syria":"282","syrian arab republic":"282","taiwan":"143","tajikistan":"283","tanzania":"284","thailand":"285","timor-leste":"286","timor":"286","togo":"287","tonga":"288","trinidad and tobago":"289","tunesia":"290","turkey":"291","turkmenistan":"292","tuvalu":"293","uae":"294","united arab emirates":"294","uganda":"295","uk":"136","united kingdom":"136","england":"136","scotland":"136","great britain":"136","gb":"136","ukraine":"296","uruguay":"297","usa":"132","us":"132","united states":"132","uzbekistan":"298","vanuatu":"299","vatican":"300","venezuela":"301","vietnam":"302","viet nam":"302","yemen":"303","zambia":"304","zimbabwe":"305"}')},66:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(21),i=n.n(c),s=n(5),o=n(3),l=n(8),u=n.n(l),d=n(14),j=n(6),b=Object(a.createContext)(),O=n(2),h="ADMIN_LOADED",m="AUTH_ERROR",p="LOGIN_SUCCESS",x="LOGIN_FAIL",f="LOGOUT",g="CLEAR_ERRORS",v="GET_CLIENTS",y="DELETE_CLIENTS",C="CLIENTS_ERROR",k="CLEAR_CLIENTS",N="GET_USERS",E="SET_CURRENT",w="USERS_ERROR",S="CLEAR_USERS",A="GENERATE_CSV",R="GENERATE_CSV_ONEUSER",_="CLEAR_CSV",U=function(e,t){switch(t.type){case h:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!0,loading:!1,admin:t.payload});case p:return localStorage.setItem("token",t.payload.token),Object(O.a)(Object(O.a)(Object(O.a)({},e),t.payload),{},{isAuthenticated:!0,loading:!1});case x:return localStorage.removeItem("token"),Object(O.a)(Object(O.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,admin:null,error:t.payload});case m:case f:return localStorage.removeItem("token"),Object(O.a)(Object(O.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,admin:null,error:null});case g:if(!t.payload)return Object(O.a)(Object(O.a)({},e),{},{error:null});var n=null;return e.error&&(void 0===(n=t.payload.forEach((function(t){return e.error.filter((function(e){return e.id!==t}))})))&&(n=null),console.log("errFiltered",n)),Object(O.a)(Object(O.a)({},e),{},{error:n});default:return e}},L=n(12),T=n.n(L),D=function(e){e?T.a.defaults.headers.common["x-auth-token"]=e:delete T.a.defaults.headers.common["x-auth-token"]},F=n(0),z=function(e){var t={token:localStorage.getItem("token"),isAuthenticated:!1,loading:!0,admin:null,error:null},n=Object(a.useReducer)(U,t),r=Object(j.a)(n,2),c=r[0],i=r[1],s=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&D(localStorage.token),e.prev=1,e.next=4,T.a.get("/api/auth");case 4:t=e.sent,i({type:h,payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),i({type:m});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,T.a.post("/api/auth",t,n);case 4:a=e.sent,l(),i({type:p,payload:a.data}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),i({type:x,payload:e.t0.response.data.errors}),setTimeout((function(){return l()}),5e3);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){i({type:g})};return Object(F.jsx)(b.Provider,{value:{token:c.token,isAuthenticated:c.isAuthenticated,loading:c.loading,admin:null,error:c.error,loadAdmin:s,login:o,logout:function(){i({type:f})},clearErrors:l},children:e.children})},I=Object(a.createContext)(),P=function(e,t){switch(t.type){case v:return Object(O.a)(Object(O.a)({},e),{},{clients:t.payload,loading:!1});case y:return{clients:[],error:null,loading:!1};case C:return Object(O.a)(Object(O.a)({},e),{},{error:t.payload});case k:return Object(O.a)(Object(O.a)({},e),{},{clients:null,error:null});default:return e}},G=function(e){var t=Object(a.useReducer)(P,{clients:null,error:null,loading:!0}),n=Object(j.a)(t,2),r=n[0],c=n[1],i=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&D(localStorage.token),e.prev=1,e.next=4,T.a.get("/api/clients");case 4:t=e.sent,c({type:v,payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c({type:C,payload:e.t0.response.msg});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.delete("/api/clients");case 2:c({type:y});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(F.jsx)(I.Provider,{value:{clients:r.clients,error:r.error,getClients:i,deleteClients:s,clearClients:function(){c({type:k})}},children:e.children})},q=Object(a.createContext)(),B=function(e,t){switch(t.type){case A:return Object(O.a)(Object(O.a)({},e),{},{csv:[],csvAll:t.payload[0],todaysDate:t.payload[1]});case R:return Object(O.a)(Object(O.a)({},e),{},{csv:t.payload[0],todaysDate:t.payload[1]});case _:return Object(O.a)(Object(O.a)({},e),{},{csv:[],csvAll:[],todaysDate:null});default:return e}},V=n(22),M=function(e){var t=Object(a.useReducer)(B,{csv:[],csvAll:[],todaysDate:null}),n=Object(j.a)(t,2),r=n[0],c=n[1],i=function(e){var t;if(", "===e)t="";else if(", "===e.slice(-2))t=e.slice(0,-2);else{if(", "!==e.substring(0,2))return e;t=e.slice(2)}return t},s=function(e){var t=new Date,n=t.getFullYear()+("0"+(t.getMonth()+1)).slice(-2)+t.getDate(),a=[["No","\u65e5\u4ed8","\u9867\u5ba2\uff03","\u62c5\u5f53","\u656c\u79f0","\u9867\u5ba2\u540d","\u696d\u754c","\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9","\u56fd\uff08\u5728\uff09","\u4f4f\u6240 line 1","\u4f4f\u6240 line 2","\u4f4f\u6240 ZIP code","\u52e4\u52d9\u5148 line 1","\u52e4\u52d9\u5148 line 2","\u52e4\u52d9\u5148 ZIP code","\u5f79\u8077","Tel.","Mobile","FAX","Tel. (Work)","Mobile (Work)","FAX (Work)","\u5099\u8003","Wanobi catalog","Catalog Home","Catalog Office","\u4f1a\u793e\u540d Company","\u30ad\u30fc\u30ef\u30fc\u30c9 Keyword"]],r=[],c=0;return e.forEach((function(e){c+=1,(r=function(e,t){for(var n=[],a=0;a<e;a++)n.push(t);return n}(28,""))[0]=c.toString(),r[5]=e.clientName,r[26]=e.company,r[8]=function(e){var t=e.toLowerCase();return!1===Object.keys(V).includes(t)?e:V[t]}(e.country),r[1]=e.date.slice(0,10).replaceAll("-","/"),r[7]=e.email,r[4]=function(e){switch(e){case"2":return"6";case"3":return"7";case"4":return"9";case"5":return"12";default:return e}}(e.greeting),r[3]=e.incharge,r[6]=e.industry,r[17]=e.mobile,r[22]=e.notes,r[15]=e.position,r[9]=i(e.reviewAddressLine1),r[10]=i(e.reviewAddressLine2),r[16]=e.tel,"1"===e.wanobi?r[23]="TRUE":r[23]="FALSE",a.push(r)})),[a,n]};return Object(F.jsx)(q.Provider,{value:{csv:r.csv,csvAll:r.csvAll,todaysDate:r.todaysDate,generateCsv:function(e){var t=s(e);c({type:A,payload:t})},generateCsvForOne:function(e,t){var n=s(e);c({type:R,payload:n})},clearCsv:function(){c({type:_})}},children:e.children})},W=Object(a.createContext)(),J=function(e,t){switch(t.type){case N:return Object(O.a)(Object(O.a)({},e),{},{users:t.payload,loading:!1});case E:return Object(O.a)(Object(O.a)({},e),{},{currentUser:t.payload});case w:return Object(O.a)(Object(O.a)({},e),{},{error:t.payload});case S:return Object(O.a)(Object(O.a)({},e),{},{users:null,error:null});default:return e}},H=function(e){var t=Object(a.useReducer)(J,{users:null,error:null,currentUser:null}),n=Object(j.a)(t,2),r=n[0],c=n[1],i=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&D(localStorage.token),e.prev=1,e.next=4,T.a.get("/api/users");case 4:t=e.sent,c({type:N,payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c({type:w,payload:e.t0.response.msg});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return Object(F.jsx)(W.Provider,{value:{users:r.users,error:r.error,currentUser:r.currentUser,getUsers:i,clearUsers:function(){c({type:S})},setCurrentUser:function(e){c({type:E,payload:e})}},children:e.children})},X=(n(66),n(23)),Z=n(16),K=n.n(Z),Y=function(){var e=Object(a.useContext)(b),t=Object(a.useContext)(W),n=Object(a.useContext)(I),r=Object(a.useContext)(q),c=e.logout,i=t.clearUsers,l=t.currentUser,u=n.clearClients,d=n.deleteClients,O=r.csvAll,h=r.csv,m=r.todaysDate,p=r.clearCsv,x=Object(o.g)(),f=Object(a.useState)(!1),g=Object(j.a)(f,2),v=g[0],y=g[1],C=Object(a.useState)(!1),k=Object(j.a)(C,2),N=k[0],E=k[1],w=Object(a.useState)(!1),S=Object(j.a)(w,2),A=S[0],R=S[1];return K.a.setAppElement("#root"),Object(F.jsx)("div",{className:"menu-container",children:Object(F.jsxs)("div",{className:"menu",children:[Object(F.jsx)(K.a,{isOpen:v,onRequestClose:function(){return y(!1)},style:Q,children:Object(F.jsxs)("div",{className:"modal-content",children:[Object(F.jsx)("h2",{children:"Warning:"}),Object(F.jsxs)("p",{children:["Deleting all data cannot be undone.",Object(F.jsx)("br",{}),"Proceed with caution."]}),Object(F.jsx)("button",{onClick:function(){y(!1),E(!0)},children:"Proceed"}),Object(F.jsx)("button",{onClick:function(){return y(!1)},children:"Cancel"})]})}),Object(F.jsx)(K.a,{isOpen:N,onRequestClose:function(){return E(!1)},style:Q,children:Object(F.jsxs)("div",{className:"modal-content",children:[Object(F.jsx)("h2",{children:"Reset database?"}),Object(F.jsx)("button",{onClick:function(){E(!1),R(!0),u(),p(),d()},children:"Reset"}),Object(F.jsx)("button",{onClick:function(){return E(!1)},children:"Cancel"})]})}),Object(F.jsx)(K.a,{isOpen:A,onRequestClose:function(){return R(!1)},style:Q,children:Object(F.jsxs)("div",{className:"modal-content",children:[Object(F.jsx)("p",{className:"move-up",children:"Database has been reset."}),Object(F.jsx)("button",{onClick:function(){return R(!1)},children:"Close"})]})}),Object(F.jsx)("p",{children:Object(F.jsx)(s.b,{to:"/all",children:"View All"})}),Object(F.jsx)("p",{children:Object(F.jsx)(X.CSVLink,{data:O,filename:"".concat(m,"_sbk-client.csv"),children:"Download All"})}),"/clients"===x.pathname&&l&&Object(F.jsx)("p",{children:Object(F.jsx)(X.CSVLink,{data:h,filename:"".concat(m,"_sbk-client_").concat(l.split("@")[0].toUpperCase(),".csv"),children:"Download Current"})}),Object(F.jsx)("p",{onClick:function(){return y(!0)},children:"Reset Database"}),Object(F.jsx)("p",{children:Object(F.jsx)("button",{type:"button",onClick:function(){c(),i(),u(),p()},children:"Logout"})})]})})},Q={overlay:{backgroundColor:"none"},content:{backgroundColor:"#d9d9d9",border:"1px solid #c7c7c7",textAlign:"center",margin:"auto",height:"40vh",width:"50vw",display:"flex",justifyContent:"center",flexDirection:"column"}},$=function(e){var t=Object(a.useContext)(b),n=Object(a.useContext)(W),r=Object(a.useContext)(I),c=Object(a.useContext)(q),i=t.loadAdmin,o=n.users,l=n.getUsers,u=n.setCurrentUser,d=n.currentUser,j=r.clients,O=r.getClients,h=r.loading,m=c.generateCsv;Object(a.useEffect)((function(){i(),l(),O(),null!==d&&u(null)}),[]),Object(a.useEffect)((function(){j&&m(j)}),[]);var p=function(e){return j.filter((function(t){return t._partition===e._partition}))};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Y,{}),null!==j&&null!==o&&!h&&Object(F.jsxs)("div",{className:"clients-container",children:[0===o.length?Object(F.jsx)("div",{children:"No users on file."}):Object(F.jsx)(F.Fragment,{children:o.map((function(e){return 0!==p(e).length?Object(F.jsxs)("div",{className:"view-all",children:[Object(F.jsxs)("div",{className:"clients-table",children:["User: ",e.name]}),p(e).map((function(e){return Object(F.jsxs)("div",{className:"clients-table",children:[Object(F.jsx)("div",{children:e.clientName}),Object(F.jsx)("div",{className:"client-hide",children:e.email}),Object(F.jsx)("div",{className:"client-hide",children:e.company}),Object(F.jsx)("div",{className:"client-hide",children:e.position}),Object(F.jsx)("div",{children:e.country})]},e._id)}))]},e._id):Object(F.jsxs)("div",{style:{marginTop:"2rem",marginBottom:"2rem"},children:["No clients on file for ",Object(F.jsx)("strong",{children:e.name}),"."]},e.name)}))}),Object(F.jsx)("div",{className:"back-to-top",children:Object(F.jsx)(s.b,{to:"/",children:"\u2191 Back to Top"})})]})]})},ee=function(e){var t,n=Object(a.useContext)(b),r=Object(a.useContext)(I),c=Object(a.useContext)(W),i=Object(a.useContext)(q),o=n.loadAdmin,l=r.clients,u=r.loading,d=r.getClients,j=c.users,O=c.getUsers,h=c.setCurrentUser,m=c.currentUser,p=i.generateCsv,x=i.generateCsvForOne;Object(a.useEffect)((function(){o(),O(),d(),e.location.state&&h(e.location.state.user.name)}),[]),Object(a.useEffect)((function(){if(l&&p(l),l&&j&&m){var e=j.filter((function(e){return e.name===m}))[0],t=l.filter((function(t){return t._partition===e._partition}));x(t,e.name)}}),[l,j]);var f=[];return l&&j&&null!==m&&(t=j.filter((function(e){return e.name===m}))[0],f=l.filter((function(e){return e._partition===t._partition}))),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Y,{}),null!==l&&null!==j&&!u&&null!==m&&Object(F.jsxs)("div",{className:"clients-container",children:[0===f.length?Object(F.jsxs)("div",{style:{marginBottom:"2rem"},children:["No clients on file for ",Object(F.jsxs)("strong",{children:[t.name,"."]})]}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("div",{className:"clients-table",children:["User: ",t.name]}),f.map((function(e){return Object(F.jsxs)("div",{className:"clients-table",children:[Object(F.jsx)("div",{className:"",children:e.clientName}),Object(F.jsx)("div",{className:"client-hide",children:e.email}),Object(F.jsx)("div",{className:"client-hide",children:e.company}),Object(F.jsx)("div",{className:"client-hide",children:e.position}),Object(F.jsx)("div",{className:"",children:e.country})]},e._id)}))]}),Object(F.jsx)("div",{className:"back-to-top",children:Object(F.jsx)(s.b,{to:"/",children:"\u2191 Back to Top"})})]})]})},te=function(){return Object(F.jsx)("div",{className:"footer",children:Object(F.jsx)("p",{children:"\xa9 Shibunkaku Co., Ltd. 2021"})})},ne=n.p+"static/media/shibunkaku_logo.4c549ebe.svg",ae=function(){var e=Object(a.useContext)(b).clearErrors;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:"chrome-patch"}),Object(F.jsx)("div",{className:"header",id:"header",children:Object(F.jsx)(s.b,{to:"/",children:Object(F.jsx)("img",{src:ne,alt:"",className:"logo",id:"logo",onClick:function(){return e()}})})})]})},re=function(){var e=Object(a.useContext)(W),t=Object(a.useContext)(I),n=Object(a.useContext)(q),r=e.users,c=e.getUsers,i=e.loading,o=t.getClients,l=t.clients,u=n.generateCsv;return Object(a.useEffect)((function(){c(),o()}),[]),Object(a.useEffect)((function(){l&&u(l)}),[l]),Object(F.jsx)(F.Fragment,{children:null!==r&&!i&&Object(F.jsx)("div",{className:"container",children:Object(F.jsx)("div",{className:"user-grid",children:r.map((function(e){return Object(F.jsx)(s.b,{to:{pathname:"clients",state:{user:e}},children:Object(F.jsx)("div",{children:e.name})},e._id)}))})})})},ce=function(){var e=Object(a.useContext)(b),t=Object(a.useContext)(W),n=e.loadAdmin,r=t.setCurrentUser,c=t.currentUser;return Object(a.useEffect)((function(){n(),null!==c&&r(null)}),[]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Y,{}),Object(F.jsx)(re,{})]})},ie=n(17),se=function(){var e=Object(a.useContext)(b).error;return null!==e&&Object(F.jsx)("div",{style:{margin:"auto",fontSize:"0.8rem"},children:e[0].msg})},oe=function(e){var t=Object(a.useContext)(b),n=t.login,r=t.isAuthenticated,c=Object(a.useState)({email:"",password:""}),i=Object(j.a)(c,2),s=i[0],o=i[1];Object(a.useEffect)((function(){r&&e.history.push("/")}),[r,e.history]);var l=s.email,u=s.password,d=function(e){o(Object(O.a)(Object(O.a)({},s),{},Object(ie.a)({},e.target.name,e.target.value)))};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:"dummy"}),Object(F.jsxs)("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),l=l.trim(),n({email:l,password:u})},children:[Object(F.jsx)("input",{type:"text",placeholder:"Email",name:"email",value:l,onChange:d}),Object(F.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:u,onChange:d}),Object(F.jsx)("input",{className:"login-btn",type:"submit",value:"Login"}),Object(F.jsx)(se,{})]})]})},le=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:"not-found",children:Object(F.jsx)("h3",{children:"Page not found."})}),Object(F.jsx)("div",{style:{margin:"0.5rem 12.5% 0"},children:Object(F.jsx)(s.b,{to:"/",children:"\u2191 Back to Top"})})]})},ue=n(41),de=["component"],je=function(e){var t=e.component,n=Object(ue.a)(e,de),r=Object(a.useContext)(b),c=r.isAuthenticated,i=r.loading;return Object(F.jsx)(o.b,Object(O.a)(Object(O.a)({},n),{},{render:function(e){return c||i?Object(F.jsx)(t,Object(O.a)({},e)):Object(F.jsx)(o.a,{to:"/login"})}}))};localStorage.token&&D(localStorage.token);var be=function(){return Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(z,{children:Object(F.jsx)(H,{children:Object(F.jsx)(G,{children:Object(F.jsx)(M,{children:Object(F.jsx)(s.a,{children:Object(F.jsxs)("div",{className:"wrapper",children:[Object(F.jsx)(ae,{}),Object(F.jsxs)(o.d,{children:[Object(F.jsx)(je,{exact:!0,path:"/",component:ce}),Object(F.jsx)(je,{exact:!0,path:"/clients",component:ee}),Object(F.jsx)(je,{exact:!0,path:"/all",component:$}),Object(F.jsx)(o.b,{exact:!0,path:"/login",component:oe}),Object(F.jsx)(o.b,{path:"/",component:le})]}),Object(F.jsx)(te,{})]})})})})})})})};i.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(be,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.39045e63.chunk.js.map