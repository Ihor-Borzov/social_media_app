/*! For license information please see main.e2783b8b.chunk.js.LICENSE.txt */
(this.webpackJsonpmuchoppp=this.webpackJsonpmuchoppp||[]).push([[0],{10:function(e,t,n){e.exports={wrapper:"Users_wrapper__2fQNR",ussers_container:"Users_ussers_container__2rWcb",usser_icon:"Users_usser_icon__2-8zS",wrapper__for_AspectRatio:"Users_wrapper__for_AspectRatio__3og9b",imgAspectRatio_wrapper:"Users_imgAspectRatio_wrapper__378m_",img_wrapper:"Users_img_wrapper__QxNWj",button_wrapper:"Users_button_wrapper__3Hg54",user_info:"Users_user_info__2uDWn",name_and_status:"Users_name_and_status__1DQgl",country_and_city:"Users_country_and_city__34Xb3",name:"Users_name___X1FW",status:"Users_status__1Cf7r",country:"Users_country__3vNC_",city:"Users_city__8P_4B",activePage:"Users_activePage__1_EKW",pageNumbers:"Users_pageNumbers__3Z_rO",buttonNext:"Users_buttonNext__2fDn5",buttonPrev:"Users_buttonPrev__Rfqtg"}},101:function(e,t,n){"use strict";n(1);var r=n(67),a=n(129),c=n.n(a),i=n(0);t.a=function(e){return Object(i.jsx)("div",{className:c.a.imgWrap,children:Object(i.jsx)("img",{src:r.a,alt:"preloader"})})}},122:function(e,t,n){"use strict";t.a=n.p+"static/media/user.974a2221.jpg"},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(40),a=n(3),c=n(19),i="SEND_USER_MESSAGE",s={dialogsData:[{id:1,name:"Dimych"},{id:2,name:"Ahmed"},{id:3,name:"Pahsa"},{id:4,name:"Olya"},{id:5,name:"Vita"},{id:6,name:"Maksym"}],messagesData:[{id:1,message:"hi"},{id:0,message:"koorva mach ego"},{id:1,message:"Hi how are you?"},{id:0,message:"Hi how are you?"}],userInputMessage:""},o=function(e){return function(t){t(function(e){return{type:i,data:e}}(e)),t(Object(c.a)("dialogsForm"))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;return t.type===i?Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:0,message:t.data}]),userInputMessage:""}):e}},128:function(e,t,n){},129:function(e,t,n){},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n(127),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"dcee9e24-009d-463a-88e9-8f7f599b9d34"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data.resultCode}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data.resultCode}))}},i={getUserProfile:function(e){return a.get("profile/ ".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/"+e)},setStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},s={authenticate:function(){return a.get("auth/me/").then((function(e){return e.data}))},login:function(e){return a.post("auth/login/",e)},getCaptchaUrl:function(){return a.get("/security/get-captcha-url")},logout:function(){return a.delete("auth/login/")}}},163:function(e,t,n){},164:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(65),i=n.n(c),s=(n(163),n(26)),o=n(29),u=n(27),l=n(18),d=n(7),f=(n(164),n(14)),p=n(69),b=n.n(p),j=n(0);var h=function(e){return Object(j.jsxs)("div",{className:b.a.friend,children:[Object(j.jsx)("div",{className:b.a.circle,children:Object(j.jsx)("img",{src:e.picture,alt:"Friend's avatar"})}),Object(j.jsx)("span",{className:b.a.friends_name,children:e.name})]})},g=n(9),_=n.n(g),m=n(23),O=n.n(m),v=n(42),x=n(3),w=n(19),N=n(15),C="SET_USERS_DATA",S="Auth/GET_CAPTCHA_URL_SUCCESS",U={id:null,login:null,email:null,password:null,rememberMe:!1,isAuth:!1,captchaUrl:null},y=function(e,t,n,r){return{type:C,data:{id:e,email:t,login:n,isAuth:r}}},P=function(e){return{type:S,payload:{captchaUrl:e}}},k=function(){return function(e){return N.a.authenticate().then((function(t){if(0===t.resultCode){var n=t.data,r=n.id,a=n.email,c=n.login;e(y(r,a,c,!0))}else e(y(null,null,null,!1))}))}},A=function(){return function(){var e=Object(v.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(P(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(){return function(e){N.a.logout().then((function(t){0===t.data.resultCode&&e(k())}))}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(x.a)(Object(x.a)({},e),t.data);case S:return Object(x.a)(Object(x.a)({},e),t.payload);default:return e}},M="OPEN_CLOSE_HAMBURGER_MENU",I="CLOSE_HAMBURGER_MENU",L={hamburgerMenu:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(x.a)(Object(x.a)({},e),{},{hamburgerMenu:!e.hamburgerMenu});case I:return Object(x.a)(Object(x.a)({},e),{},{hamburgerMenu:!1});default:return e}},T=n.p+"static/media/Profile.b0c5a322.png";var D=Object(f.b)((function(e){return{state:e.navBarPage,authorizedId:e.auth.id,isAuth:e.auth.isAuth,login:e.auth.login,onOffBurgerMenu:e.header.hamburgerMenu}}),{logoutThunk:E,closeHamburgerMenuAC:function(){return{type:I,payload:!1}}})((function(e){var t=e.state.friendData.map((function(e){return Object(j.jsx)(h,{picture:e.picture,name:e.name},e.id)}));return Object(j.jsxs)("div",{className:e.onOffBurgerMenu?_.a.nav_bar:_.a.noBar,children:[Object(j.jsx)("div",{className:_.a.item,children:Object(j.jsx)(l.b,{to:"/profile/"+e.authorizedId,onClick:e.closeHamburgerMenuAC,className:function(e){return e.isActive?_.a.activeLink:_.a.notActiveLink},children:"Profile"})}),"    ",Object(j.jsx)("div",{className:"".concat(_.a.item," ").concat(_.a.another),children:Object(j.jsx)(l.b,{to:"/dialogs",onClick:e.closeHamburgerMenuAC,className:function(e){return e.isActive?_.a.activeLink:_.a.notActiveLink},children:"Messages"})}),"  ",Object(j.jsx)("div",{className:_.a.item,children:Object(j.jsx)(l.b,{to:"/users",onClick:e.closeHamburgerMenuAC,className:function(e){return e.isActive?_.a.activeLink:_.a.notActiveLink},children:"Users"})}),Object(j.jsxs)("div",{className:_.a.item,children:[" ",Object(j.jsx)(l.b,{to:"/settings",onClick:e.closeHamburgerMenuAC,className:function(e){return e.isActive?_.a.activeLink:_.a.notActiveLink},children:"Settings"})," "]}),Object(j.jsx)("div",{className:_.a.item,children:e.isAuth?Object(j.jsx)("div",{className:_.a.logOut,onClick:function(){e.logoutThunk(),e.closeHamburgerMenuAC()},children:Object(j.jsx)(l.c,{to:"/profile/*",children:"Logout"})}):Object(j.jsx)("div",{className:_.a.logIn,onClick:e.closeHamburgerMenuAC,children:Object(j.jsx)(l.c,{to:"/login",children:"Login"})})}),Object(j.jsxs)("div",{className:_.a.MyFriends,children:[Object(j.jsx)("div",{className:_.a.BestFriends,children:"Best Friends"}),Object(j.jsxs)("div",{className:_.a.friends,children:[Object(j.jsxs)("div",{className:_.a.friend,children:[Object(j.jsx)(l.c,{to:"/profile/22624",children:Object(j.jsx)("div",{className:_.a.circle,children:Object(j.jsx)("img",{src:T,alt:"Friend's avatar"})})}),Object(j.jsx)("span",{className:_.a.friends_name,children:"Ihor Borzov"})]}),t]})]})]})})),R=n(128),B=n.n(R);var H=function(e){return Object(j.jsx)("div",{className:B.a.content,children:"Settings"})},G=n(101),W=n(70),X=n.n(W);var V=function(e){return Object(j.jsxs)("div",{className:X.a.header,children:[Object(j.jsx)("img",{src:"https://i.pinimg.com/originals/9f/69/af/9f69af8062e69951f7527962f45e63d1.png",alt:"Web page icon"}),Object(j.jsxs)("div",{className:e.onOffBurgerMenu?X.a.header__burger_active:X.a.header__burger,onClick:e.openCloseHamburgerMenuAC,children:[" ",Object(j.jsx)("span",{})," "]})]})},Q=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).componentDidMount=function(){},e.render=function(){return Object(j.jsx)(V,Object(x.a)({},e.props))},e}return n}(a.a.Component),Z=Object(f.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,onOffBurgerMenu:e.header.hamburgerMenu}}),{logoutThunk:E,openCloseHamburgerMenuAC:function(){return{type:M}}})(Q),J=n(124),Y=n(88),q=n(47),K=n(45),$=n(31),ee=n.n($),te=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).componentDidMount=function(){},e.componentDidUpdate=function(){},e.onSubmit=function(t){e.props.loginThunk(t)},e.render=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"LOGIN please!"}),Object(j.jsx)("div",{children:"You are welcome to visit my page - find me in the best friends (Nav-Bar): Ihor Borzov"}),e.props.isAuth?Object(j.jsx)(d.a,{to:"/profile/"+e.props.authorizedId}):Object(j.jsx)(re,{onSubmit:e.onSubmit,captchaUrl:e.props.captchaUrl,loginThunk:e.props.loginThunk})]})},e}return n}(a.a.Component),ne=Object(q.a)(20),re=Object(J.a)({form:"login"})((function(e){return Object(j.jsx)("form",{onSubmit:e.handleSubmit,className:ee.a.loginForm,children:Object(j.jsxs)("div",{className:ee.a.wrapper,children:[Object(j.jsx)("div",{children:Object(j.jsx)(Y.a,{placeholder:"email",component:K.a,name:"email",validate:[q.b,ne]})}),Object(j.jsx)("div",{children:Object(j.jsx)(Y.a,{placeholder:"password",component:K.a,name:"password",validate:[q.b,ne]})}),Object(j.jsx)("div",{className:ee.a.rememberMe,children:Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:" remember me "}),Object(j.jsx)(Y.a,{type:"checkbox",component:"input",name:"rememberMe"})]})}),e.error&&Object(j.jsxs)("div",{className:ee.a.commonError,children:[" ",e.error]}),Object(j.jsxs)("div",{className:ee.a.buttonsWrapper,children:[Object(j.jsx)("button",{className:ee.a.loginButton,children:"Login"}),Object(j.jsx)("div",{className:ee.a.loginButton,onClick:function(){e.loginThunk({email:"free@samuraijs.com",password:"free"})},children:"Guest Login"})]}),e.captchaUrl&&Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:e.captchaUrl,alt:"captcha"}),Object(K.c)("symbols from image","captcha",[q.b],K.a)]})]})})})),ae=Object(f.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl,authorizedId:e.auth.id}}),{loginThunk:function(e){return function(t){N.a.login(e).then((function(e){0===e.data.resultCode?t(k()):(console.log(e.data.resultCode),10===e.data.resultCode&&t(A()),t(Object(w.b)("login",{_error:e.data.messages[0]})))}))}}})(te),ce=n(131),ie=n(133),se=Object(ie.a)((function(e){return e.usersPage.users}),(function(e){return console.log("reselector worked"),e})),oe=function(e){return e.usersPage.pageSize},ue=function(e){return e.usersPage.totalUsersCount},le=function(e){return e.usersPage.currentPage},de=function(e){return e.usersPage.isFetching},fe=function(e){return e.usersPage.following_unfollowingIds},pe=n(40),be="FOLLOW",je="UNFOLLOW",he="SET_USERS",ge="SET_CURRENT_PAGE",_e="SET_TOTAL_USER_COUNT",me="TOGGLE_IS_FETCHING",Oe="TOGGLE_IS_FOLLOWING_PROGRESS",ve={users:[],pageSize:5,portionSize:10,totalUsersCount:26,currentPage:1,isFetching:!1,following_unfollowingIds:[]},xe=function(e){return{type:he,users:e}},we=function(e){return{type:_e,newTotalUsersCount:e}},Ne=function(e){return{type:me,isFetching:e}},Ce=function(e,t){return{type:Oe,check:e,id:t}},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return Object(x.a)(Object(x.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(x.a)(Object(x.a)({},e),{},{followed:!0}):e}))});case je:return Object(x.a)(Object(x.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(x.a)(Object(x.a)({},e),{},{followed:!1}):e}))});case he:return Object(x.a)(Object(x.a)({},e),{},{users:t.users});case ge:return Object(x.a)(Object(x.a)({},e),{},{currentPage:t.page});case _e:return Object(x.a)(Object(x.a)({},e),{},{totalUsersCount:t.newTotalUsersCount});case me:return Object(x.a)(Object(x.a)({},e),{},{isFetching:t.isFetching});case Oe:return Object(x.a)(Object(x.a)({},e),{},{following_unfollowingIds:t.check?[].concat(Object(pe.a)(e.following_unfollowingIds),[t.id]):e.following_unfollowingIds.filter((function(e){return e!==t.id}))});default:return e}},Ue=n(28),ye=n(67),Pe=n(10),ke=n.n(Pe),Ae=function(e){for(var t=e.portionSize,n=e.totalUsersCount,a=e.pageSize,c=e.setCurrentPage,i=e.currentPage,s=e.isFetching,o=Math.ceil(n/a),u=Math.ceil(o/t),l=Object(r.useState)(1),d=Object(Ue.a)(l,2),f=d[0],p=d[1],b=(f-1)*t+1,h=f*t,g=[],_=1;_<=o;_++)g.push(_);return Object(j.jsxs)("div",{className:ke.a.pageNumbers,children:[f>1&&Object(j.jsx)("button",{className:ke.a.buttonPrev,onClick:function(){p(f-1)},children:"Prev"}),g.filter((function(e){return e>=b&&e<=h})).map((function(e){return Object(j.jsx)("span",{onClick:function(t){c(e)},className:i===e?ke.a.activePage:ke.a.notActivePage,children:s&&i===e?Object(j.jsx)("img",{src:ye.a,alt:"preloader"}):e},e)})),f<u&&Object(j.jsx)("button",{className:ke.a.buttonNext,onClick:function(){p(f+1)},children:"Next"})]})},Ee=n(122),Fe=function(e){var t=e.user,n=e.following_unfollowingIds,r=e.unfollow,a=e.follow;return Object(j.jsxs)("div",{className:ke.a.ussers_container,children:[Object(j.jsx)("div",{className:ke.a.usser_icon,children:Object(j.jsxs)("div",{className:ke.a.wrapper__for_AspectRatio,children:[Object(j.jsx)("div",{className:ke.a.imgAspectRatio_wrapper,children:Object(j.jsx)("div",{className:ke.a.img_wrapper,children:Object(j.jsxs)(l.c,{to:"/profile/"+t.id,children:[Object(j.jsx)("img",{src:t.photos.large?t.photos.large:Ee.a,alt:"avatar"}),"   "]})})}),Object(j.jsxs)("div",{className:ke.a.button_wrapper,children:["  ....Subscribe....",t.followed?Object(j.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"   Unfollow  "}):Object(j.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"   follow  "})]})]})}),Object(j.jsxs)("div",{className:ke.a.user_info,children:[Object(j.jsxs)("div",{className:ke.a.name_and_status,children:[Object(j.jsx)("div",{className:ke.a.name,children:t.name}),Object(j.jsx)("div",{className:ke.a.status,children:t.status?t.status:"I am lazy and do not have a status"})]}),Object(j.jsxs)("div",{className:ke.a.country_and_city,children:[Object(j.jsx)("div",{className:ke.a.country,children:"user.location.country"}),Object(j.jsx)("div",{className:ke.a.city,children:"user.location.city"})]})]})]})},Me=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);return Object(j.jsxs)("div",{className:ke.a.wrapper,children:[Object(j.jsx)(Ae,{totalUsersCount:e.totalUsersCount,portionSize:e.portionSize,pageSize:e.pageSize,setCurrentPage:e.setCurrentPage,currentPage:e.currentPage,isFetching:e.isFetching}),e.users.map((function(t){return Object(j.jsx)(Fe,{user:t,following_unfollowingIds:e.following_unfollowingIds,unfollow:e.unfollow,follow:e.follow},t.id)}))]})},Ie=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).setCurrentPage=function(t){e.props.setCurrentPage(t),e.props.getUsers(t,e.props.pageSize)},e.render=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(Me,{setCurrentPage:e.setCurrentPage,totalUsersCount:e.props.totalUsersCount,pageSize:e.props.pageSize,portionSize:e.props.portionSize,users:e.props.users,currentPage:e.props.currentPage,follow:e.props.follow,unfollow:e.props.unfollow,toggleIsFollowingProgress:e.props.toggleIsFollowingProgress,following_unfollowingIds:e.props.following_unfollowingIds,isFetching:e.props.isFetching})})},e}return Object(ce.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}}]),n}(a.a.Component),Le=Object(f.b)((function(e){return{users:se(e),pageSize:oe(e),totalUsersCount:ue(e),currentPage:le(e),isFetching:de(e),following_unfollowingIds:fe(e),portionSize:e.usersPage.portionSize}}),{getUsers:function(e,t){return function(n){n(Ne(!0)),N.c.getUsers(e,t).then((function(e){n(Ne(!1)),n(xe(e.items)),n(we(e.totalCount))}))}},follow:function(e){return function(t){t(Ce(!0,e)),N.c.follow(e).then((function(n){0===n&&t(function(e){return{type:be,userId:e}}(e)),t(Ce(!1,e))}))}},unfollow:function(e){return function(t){t(Ce(!0,e)),N.c.unfollow(e).then((function(n){0===n&&t(function(e){return{type:je,userId:e}}(e)),t(Ce(!1,e))}))}},setUsers:xe,setCurrentPage:function(e){return{type:ge,page:e}},setTotalUsersCount:we,toggleIsFetching:Ne,toggleIsFollowingProgress:Ce})(Ie),ze="INITIALIZED_SUCCESS",Te={initialized:!1},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;return t.type===ze?Object(x.a)(Object(x.a)({},e),{},{initialized:!0}):e},Re=n(64),Be=n(11),He=n(123),Ge={friendData:[{id:1,name:"Vector Sohunaishvily",picture:"https://www.illumination.com/wp-content/uploads/2019/11/DM1_Vector.png"},{id:2,name:"Felonious Gru",picture:"https://static.wikia.nocookie.net/heroes-and-villians/images/7/7e/Gru.png"},{id:3,name:"Dr Nefario",picture:"https://www.black-leatherjacket.com/image/cache/data/Dr-nefario-jacket/dr-nefario-jacket-900x900.jpg"},{id:4,name:"Marlena Gru",picture:"https://static.wikia.nocookie.net/heroes-and-villians/images/4/4c/Screenshot_2016-03-21-20-42-19-1.png"},{id:5,name:"Margo Gru ",picture:"https://static.wikia.nocookie.net/despicableme/images/0/02/Margo_Posing.png"},{id:6,name:"Mr. Perkins",picture:"https://s3.amazonaws.com/intanibase/iad_characters/966.jpg"}]},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge;return e},Xe=n(132),Ve=n(125),Qe=Object(Be.c)({dialogsPage:He.b,myPostsPage:Re.b,navBarPage:We,usersPage:Se,auth:F,form:Ve.a,app:De,header:z}),Ze=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Be.d,Je=Object(Be.e)(Qe,Ze(Object(Be.a)(Xe.a))),Ye=Je;window.__store=Je;var qe=a.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),Ke=a.a.lazy((function(){return n.e(4).then(n.bind(null,300))})),$e=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).catchAllUnhandledErrors=function(t,n){e.props.showGlobalError()},e.componentDidMount=function(){e.props.initializeApp(),window.addEventListener("unhandledrejection",e.catchAllUnhandledErrors)},e.componentWillUnmount=function(){window.removeEventListener("unhandledrejection",e.catchAllUnhandledErrors)},e.render=function(){return e.props.initialized?Object(j.jsxs)("div",{className:"AppWrapper",children:[Object(j.jsx)(Z,{}),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(l.a,{basename:"/social_media_app",children:["         ",Object(j.jsx)(D,{}),Object(j.jsx)("div",{className:"body_wrapper",children:Object(j.jsxs)(d.d,{children:[Object(j.jsx)(d.b,{path:"/dialogs/*",element:Object(j.jsx)(a.a.Suspense,{fallback:Object(j.jsx)("div",{children:"React.lazy is working"}),children:Object(j.jsx)(Ke,{})})}),Object(j.jsx)(d.b,{path:"/profile/*",element:Object(j.jsx)(a.a.Suspense,{fallback:Object(j.jsx)("div",{children:"React.lazy is working"}),children:Object(j.jsx)(qe,{})})}),Object(j.jsx)(d.b,{exact:!0,path:"/",element:Object(j.jsx)(d.a,{to:"/profile/".concat(e.props.authorizedId)})}),"    ",Object(j.jsx)(d.b,{path:"/settings/*",element:Object(j.jsx)(H,{})}),Object(j.jsx)(d.b,{path:"/users/*",element:Object(j.jsx)(Le,{})}),Object(j.jsx)(d.b,{path:"/login/*",element:Object(j.jsx)(ae,{})}),Object(j.jsx)(d.b,{path:"*",element:Object(j.jsx)("div",{children:"404 NOT FOUND"})}),"   "]})})]})})]}):Object(j.jsx)(G.a,{})},e}return n}(a.a.Component),et=Object(f.b)((function(e){return{initialized:e.app.initialized,authorizedId:e.auth.id}}),{initializeApp:function(){return function(e){e(k()).then((function(){e({type:ze})}))}},showGlobalError:Re.g})($e),tt=function(e){return Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f.a,{store:Ye,children:Object(j.jsx)(et,{})})})},nt=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,298)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(tt,{}),document.getElementById("root")),nt()},31:function(e,t,n){e.exports={commonError:"Login_commonError__2fYc_",loginForm:"Login_loginForm__3w69Q",wrapper:"Login_wrapper__3UA6A",rememberMe:"Login_rememberMe__1oDur",buttonsWrapper:"Login_buttonsWrapper__JG4Js",loginButton:"Login_loginButton__1OzTX"}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return b}));var r=n(3),a=n(92),c=(n(1),n(88)),i=n(89),s=n.n(i),o=n(0),u=["input"],l=["input"],d=function(e){var t=e.input,n=Object(a.a)(e,u);return Object(o.jsxs)(p,Object(r.a)(Object(r.a)({},e),{},{children:["  ",Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n)),"   "]}))},f=function(e){var t=e.input,n=Object(a.a)(e,l);return Object(o.jsxs)(p,Object(r.a)(Object(r.a)({},e),{},{children:["  ",Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n)),"   "]}))},p=function(e){var t=e.meta,n=e.children,r=t.touched&&t.error;return Object(o.jsxs)("div",{className:"".concat(s.a.formControle," ").concat(r?s.a.error:""),children:[Object(o.jsx)("div",{children:n}),r&&Object(o.jsxs)("span",{children:[" ",t.error]})]})},b=function(e,t,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,Object(r.a)({placeholder:e,component:a,validate:n,name:t},i)),s]})}},47:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"this field is required"},a=function(e){return function(t){if(t&&t.length>e)return"maximum amount of characters is"+e}}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"g",(function(){return x})),n.d(t,"d",(function(){return w})),n.d(t,"c",(function(){return N})),n.d(t,"h",(function(){return C})),n.d(t,"e",(function(){return S})),n.d(t,"f",(function(){return U}));var r=n(23),a=n.n(r),c=n(42),i=n(40),s=n(3),o=n(19),u=n(15),l="ADD_NEW_POST",d="SET_USER_PROFILE",f="SET_STATUS",p="REMOVE_POST",b="SAVE_PHOTO_SUCCESS",j="FETCHING_USER_PICTURE",h="SET_GLOBAL_ERROR",g={postsData:[{id:0,likes:10,message:"some message"},{id:1,likes:11,message:"momolongmo"},{id:2,likes:12,message:"some hurucasami"}],userProfile:null,status:"",isFetching:!1,errorFlag:!1},_=function(e){return{type:f,status:e}},m=function(e){return{type:j,fetch:e}},O=function(){return{type:h}},v=function(e){return function(t){t(function(e){return{type:l,text:e}}(e)),t(Object(o.a)("NewPost"))}},x=function(){return function(e){e(O()),setTimeout((function(){e(O())}),3e3)}},w=function(e){return function(t){t(m(!0)),u.b.getUserProfile(e).then((function(e){t({type:d,userProfile:e}),t(m(!1))}))}},N=function(e){return function(t){u.b.getStatus(e).then((function(e){t(_(e.data))}))}},C=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.b.setStatus(e);case 3:0===t.sent.data.resultCode&&n(_(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(m(!0)),t.next=3,u.b.savePhoto(e);case 3:0===(r=t.sent).data.resultCode&&(n(m(!1)),n((a=r.data.data.photos,{type:b,photos:a})));case 5:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.id,t.next=3,u.b.saveProfile(e);case 3:if(0!==(i=t.sent).data.resultCode){t.next=8;break}n(w(c)),t.next=10;break;case 8:return n(Object(o.b)("profileDataA",{_error:i.data.messages[0]})),t.abrupt("return",Promise.reject(i.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{postsData:[].concat(Object(i.a)(e.postsData),[{id:e.postsData.length,likes:5,message:t.text}])});case p:return Object(s.a)(Object(s.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.id}))});case d:return Object(s.a)(Object(s.a)({},e),{},{userProfile:t.userProfile});case f:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case b:return Object(s.a)(Object(s.a)({},e),{},{userProfile:Object(s.a)(Object(s.a)({},e.userProfile),{},{photos:t.photos})});case j:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.fetch});case h:return Object(s.a)(Object(s.a)({},e),{},{errorFlag:!e.errorFlag});default:return e}}},67:function(e,t,n){"use strict";t.a=n.p+"static/media/loader.f53aa23f.gif"},69:function(e,t,n){e.exports={friend:"Friend_friend__Czo3p",circle:"Friend_circle__6OWR1",friends_name:"Friend_friends_name__3AmH7"}},70:function(e,t,n){e.exports={header:"Header_header__2YcOo",header__burger:"Header_header__burger__2VL0_",header__burger_active:"Header_header__burger_active__36RL3"}},89:function(e,t,n){e.exports={formControle:"FormControls_formControle__1-oH2",error:"FormControls_error__5Wo6Z",commonError:"FormControls_commonError__DXeem"}},9:function(e,t,n){e.exports={nav_bar:"Nav_bar_nav_bar__2M1PX",noBar:"Nav_bar_noBar__fhQ7l",MyFriends:"Nav_bar_MyFriends__2OiuZ",item:"Nav_bar_item__32w2d",login:"Nav_bar_login__1Pxez",activeLink:"Nav_bar_activeLink__1ojz6",notActiveLink:"Nav_bar_notActiveLink__3U2cx",logOut:"Nav_bar_logOut__3Rwa8",logIn:"Nav_bar_logIn__1P_WZ",friends:"Nav_bar_friends__1ML5H",BestFriends:"Nav_bar_BestFriends__1hy40",friend:"Nav_bar_friend__uqrvX",circle:"Nav_bar_circle__3FeWe",friends_name:"Nav_bar_friends_name__1pf5x"}}},[[289,1,2]]]);
//# sourceMappingURL=main.e2783b8b.chunk.js.map