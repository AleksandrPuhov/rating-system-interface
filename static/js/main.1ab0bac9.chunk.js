(this["webpackJsonprating-system-interface"]=this["webpackJsonprating-system-interface"]||[]).push([[0],{148:function(e,n,t){},149:function(e,n,t){},245:function(e,n,t){"use strict";t.r(n);var r,a=t(0),s=t.n(a),i=t(19),u=t.n(i),c=(t(148),t(149),t(250)),o=t(108),d=t(248),l=t(71),f=function(){return Object(l.b)()},m=l.c,b=t(49),j=t(34),p=Object(j.b)({name:"goodUserReduser",initialState:{userList:[]},reducers:{addNewGoodUser:function(e,n){e.userList.push(Object(b.a)(Object(b.a)({},n.payload),{},{raiting:1}))},raitingPlus:function(e,n){e.userList[n.payload].raiting++},raitingMinus:function(e,n){e.userList[n.payload].raiting--},deleteUserByIndex:function(e,n){e.userList.splice(n.payload,1)}}}),g=p.actions,x=g.addNewGoodUser,h=g.raitingPlus,O=g.raitingMinus,U=g.deleteUserByIndex,v=function(e){return e.goodUserReduser.userList},_=p.reducer,L=Object(j.b)({name:"badUserReduser",initialState:{userList:[]},reducers:{addNewBadUser:function(e,n){e.userList.push(Object(b.a)(Object(b.a)({},n.payload),{},{raiting:-1}))},raitingPlus:function(e,n){e.userList[n.payload].raiting++},raitingMinus:function(e,n){e.userList[n.payload].raiting--},deleteUserByIndex:function(e,n){e.userList.splice(n.payload,1)}}}),R=L.actions,w=R.addNewBadUser,N=R.raitingPlus,I=R.raitingMinus,y=R.deleteUserByIndex,B=function(e){return e.badUserReduser.userList},S=L.reducer;!function(e){e.Good="1",e.Bad="2"}(r||(r={}));var P=t(139),G=Object(j.b)({name:"userReduser",initialState:{userList:[],page:1},reducers:{reloadUserList:function(e,n){e.userList=n.payload,e.page=1},setUserListAndPage:function(e,n){var t;(t=e.userList).push.apply(t,Object(P.a)(n.payload.userList)),e.page=n.payload.page},deleteUserByIndex:function(e,n){e.userList.splice(n.payload,1)},addNewUser:function(e,n){e.userList.push(Object(b.a)({},n.payload))}}}),k=G.actions,H=k.reloadUserList,M=k.setUserListAndPage,C=k.deleteUserByIndex,A=k.addNewUser,T=function(e){return e.userReduser.userList},W=function(e){return e.userReduser.page},z=G.reducer,D=Object(j.b)({name:"stateUIReduser",initialState:{tabNum:r.Good,modalShowState:!1,modalShowGood:!1,modalUid:""},reducers:{change:function(e,n){e.tabNum=n.payload},modalShow:function(e,n){e.modalShowState=!0,e.modalShowGood=n.payload.modalShowGood,e.modalUid=n.payload.modalUid},modalHidden:function(e,n){e.modalShowState=!1}}}),E=D.actions,J=E.change,q=E.modalShow,F=E.modalHidden,Q=function(e){return e.stateUIReduser.tabNum},K=function(e){return e.stateUIReduser.modalShowState},X=function(e){return e.stateUIReduser.modalShowGood},$=D.reducer,V=function(e){return function(n,t){var r=t().badUserReduser.userList,a=r.findIndex((function(n){return n.uid===e}));if(a>=0){var s=r[a],i=s.uid,u=s.first_name,c=s.last_name,o=s.username;n(A({uid:i,first_name:u,last_name:c,username:o})),n(y(a))}}},Y=function(e){return function(n,t){n(J(e))}},Z=function(){return function(e,n){e(F(!0))}},ee=function(e){return function(n,t){var r=t().goodUserReduser.userList,a=r.findIndex((function(n){return n.uid===e}));if(a>=0){var s=r[a],i=s.uid,u=s.first_name,c=s.last_name,o=s.username;n(A({uid:i,first_name:u,last_name:c,username:o})),n(U(a))}}},ne=t(64),te=t.n(ne),re=t(141),ae=t(252),se=t(253),ie=t(68),ue=t(7),ce=function(e){var n=e.first_name,t=e.last_name,r=e.username,a=e.raiting,s=e.showRaiting,i=void 0!==s&&s,u=e.plusBtnHandler,c=e.minusBtnHandler,o=e.deleteBtnHandler;return Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsxs)("div",{children:[Object(ue.jsx)("p",{children:"username: "+r}),Object(ue.jsx)("p",{children:"Name:"+n+" "+t})]}),Object(ue.jsxs)("div",{className:te.a.btnsPanel,children:[Object(ue.jsx)(ie.a,{"data-testid":"btnPlusTest",className:te.a.btnPlus,shape:"circle",icon:Object(ue.jsx)(re.a,{}),onClick:u}),i?Object(ue.jsx)("p",{className:te.a.pageNumber,children:a}):null,Object(ue.jsx)(ie.a,{"data-testid":"btnMinusTest",className:te.a.btnMinus,shape:"circle",icon:Object(ue.jsx)(ae.a,{}),onClick:c}),i&&0===a?Object(ue.jsx)(ie.a,{"data-testid":"btnDeleteTest",className:te.a.btnDelete,shape:"circle",size:"large",icon:Object(ue.jsx)(se.a,{}),onClick:o}):null]})]})},oe=function(e){var n,t=e.uid,a=m((n=t,function(e){return e.goodUserReduser.userList.find((function(e){return e.uid===n}))})),s=f(),i=function(){void 0!==a&&(a.raiting>=5?s(function(e){return function(n,t){n(q({modalShowGood:!0,modalUid:e}))}}(t)):s(function(e){return function(n,t){var r=t().goodUserReduser.userList.findIndex((function(n){return n.uid===e}));r>=0&&n(h(r))}}(t)))},u=function(){void 0!==a&&s(function(e){return function(n,t){var a=t().goodUserReduser.userList,s=a.findIndex((function(n){return n.uid===e}));s>=0&&(0===a[s].raiting?(n(w(a[s])),n(U(s)),n(Y(r.Bad))):n(O(s)))}}(t))};return void 0===a?null:Object(ue.jsx)(ce,{first_name:a.first_name,last_name:a.last_name,username:a.username,raiting:a.raiting,showRaiting:!0,plusBtnHandler:function(){return i()},minusBtnHandler:function(){return u()},deleteBtnHandler:function(){s(ee(t))}})},de=function(e){var n,t=e.uid,a=f(),s=m((n=t,function(e){return e.badUserReduser.userList.find((function(e){return e.uid===n}))})),i=function(){void 0!==s&&a(function(e){return function(n,t){var a=t().badUserReduser.userList,s=a.findIndex((function(n){return n.uid===e}));s>=0&&(0===a[s].raiting?(n(x(a[s])),n(y(s)),n(Y(r.Good))):n(N(s)))}}(t))},u=function(){void 0!==s&&(s.raiting<=-5?a(function(e){return function(n,t){n(q({modalShowGood:!1,modalUid:e}))}}(t)):a(function(e){return function(n,t){var r=t().badUserReduser.userList.findIndex((function(n){return n.uid===e}));r>=0&&n(I(r))}}(t)))};return void 0===s?null:Object(ue.jsx)(ce,{first_name:s.first_name,last_name:s.last_name,username:s.username,raiting:s.raiting,showRaiting:!0,plusBtnHandler:function(){return i()},minusBtnHandler:function(){return u()},deleteBtnHandler:function(){a(V(t))}})},le=t(73),fe=t.n(le),me=function(){var e=o.a.TabPane,n=m(Q),t=m(v),a=m(B),s=f();return Object(ue.jsxs)(o.a,{type:"card",activeKey:n,onChange:function(e){s(Y(e))},children:[Object(ue.jsx)(e,{tab:"Good Raiting Users",children:Object(ue.jsx)("div",{className:fe.a.userList,children:Object(ue.jsx)(d.b,{dataSource:t,renderItem:function(e){return Object(ue.jsx)(d.b.Item,{className:fe.a.userListItem,children:Object(ue.jsx)(oe,{uid:e.uid})},e.uid)}})})},r.Good),Object(ue.jsx)(e,{tab:"Bad Raiting Users",children:Object(ue.jsx)("div",{className:fe.a.userList,children:Object(ue.jsx)(d.b,{dataSource:a,renderItem:function(e){return Object(ue.jsx)(d.b.Item,{className:fe.a.userListItem,children:Object(ue.jsx)(de,{uid:e.uid})},e.uid)}})})},r.Bad)]})},be=t(65),je=t.n(be),pe=t(254),ge=t(142),xe=t(56),he=t.n(xe),Oe=t(99),Ue=t(134),ve=t.n(Ue).a.create({baseURL:"https://random-data-api.com/api/"}),_e=function(){var e=Object(Oe.a)(he.a.mark((function e(n){var t,r,a;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ve.get("users/random_user?size=3&page="+n);case 3:if((t=e.sent).data){e.next=6;break}throw new Error("No data from random-data-api");case 6:return r=t.data,a=r.map((function(e){return{uid:e.uid,first_name:e.first_name,last_name:e.last_name,username:e.username}})),e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}(),Le=function(){return function(){var e=Object(Oe.a)(he.a.mark((function e(n,t){var r;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_e(1);case 2:r=e.sent,n(H(r));case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},Re=function(e){var n,t=e.uid,a=f(),s=m((n=t,function(e){return e.userReduser.userList.find((function(e){return e.uid===n}))})),i=function(){void 0!==s&&(a(function(e){return function(n,t){var r=t().userReduser.userList,a=r.findIndex((function(n){return n.uid===e}));a>=0&&(n(x(r[a])),n(C(a)))}}(t)),a(Y(r.Good)))},u=function(){void 0!==s&&(a(function(e){return function(n,t){var r=t().userReduser.userList,a=r.findIndex((function(n){return n.uid===e}));a>=0&&(n(w(r[a])),n(C(a)))}}(t)),a(Y(r.Bad)))};return void 0===s?null:Object(ue.jsx)(ce,{first_name:s.first_name,last_name:s.last_name,username:s.username,raiting:0,plusBtnHandler:function(){return i()},minusBtnHandler:function(){return u()}})},we=function(){var e=f(),n=m(T),t=m(W);Object(a.useEffect)((function(){e(Le())}),[]);return Object(ue.jsxs)("div",{className:je.a.UserPanel,children:[Object(ue.jsxs)("div",{className:je.a.pageNavigation,children:[Object(ue.jsx)(ie.a,{"data-testid":"btnNewTest",shape:"circle",icon:Object(ue.jsx)(pe.a,{}),size:"large",className:je.a.btnReload,onClick:function(){e(Le())}}),Object(ue.jsx)("p",{className:je.a.pageNumber,children:t}),Object(ue.jsx)(ie.a,{"data-testid":"btnNextTest",shape:"circle",size:"large",icon:Object(ue.jsx)(ge.a,{}),onClick:function(){e(function(){var e=Object(Oe.a)(he.a.mark((function e(n,t){var r,a;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t().userReduser.page,e.next=3,_e(r+1);case 3:a=e.sent,n(M({userList:a,page:r+1}));case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())}})]}),Object(ue.jsx)("div",{className:je.a.userList,children:Object(ue.jsx)(d.b,{dataSource:n,renderItem:function(e){return Object(ue.jsx)(d.b.Item,{children:Object(ue.jsx)(Re,{uid:e.uid})},e.uid)}})})]})},Ne=t(249),Ie=function(){var e=f(),n=m(K),t=m(X),r=e((function(e,n){var t=n().stateUIReduser.modalShowGood,r=n().stateUIReduser.modalUid,a=t?n().goodUserReduser.userList:n().badUserReduser.userList,s=a.findIndex((function(e){return e.uid===r}));return s<0?null:a[s]}));return Object(ue.jsx)(Ne.a,{visible:n,onOk:function(){e((function(e,n){var t=n().stateUIReduser.modalShowGood,r=n().stateUIReduser.modalUid;e(t?ee(r):V(r))})),e(Z())},onCancel:function(){e(Z())},children:null===r?null:t?Object(ue.jsxs)("p",{children:["\u041d\u0443\u0436\u043d\u043e \u0432\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0434\u0438\u0442\u044c ",r.username,". \u0421\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e?"]}):Object(ue.jsxs)("p",{children:["\u041f\u043e\u0440\u0430 \u0437\u0430\u0431\u0430\u043d\u0438\u0442\u044c ",r.username,". \u0421\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e?"]})})},ye=function(){return Object(ue.jsxs)("div",{className:"App",children:[Object(ue.jsx)(c.a,{className:"App-left",children:Object(ue.jsx)(we,{})}),Object(ue.jsx)(c.a,{className:"App-right",children:Object(ue.jsx)(me,{})}),Object(ue.jsx)(Ie,{})]})},Be=Object(j.a)({reducer:{goodUserReduser:_,badUserReduser:S,userReduser:z,stateUIReduser:$}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(244);u.a.render(Object(ue.jsx)(s.a.StrictMode,{children:Object(ue.jsx)(l.a,{store:Be,children:Object(ue.jsx)(ye,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,n,t){e.exports={btnsPanel:"UserItem_btnsPanel__3G820",pageNumber:"UserItem_pageNumber__3ceqC",btnPlus:"UserItem_btnPlus__3pzaB",btnMinus:"UserItem_btnMinus__EuJLf",btnDelete:"UserItem_btnDelete__3tWQu"}},65:function(e,n,t){e.exports={UserPanel:"UserPanel_UserPanel__18xWq",btnReload:"UserPanel_btnReload__1XaFW",pageNavigation:"UserPanel_pageNavigation__GjQ5o",pageNumber:"UserPanel_pageNumber__AiU8d",userList:"UserPanel_userList__1NW6H"}},73:function(e,n,t){e.exports={userList:"UserRaitingPanel_userList__2a-iM"}}},[[245,1,2]]]);
//# sourceMappingURL=main.1ab0bac9.chunk.js.map