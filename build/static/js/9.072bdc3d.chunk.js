(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[9],{1073:function(e,t,r){"use strict";r.r(t);var n=r(4),i=(r(0),r(627)),a=r(558),s=r(559),o=r(57),c=r(2),l={backgroundImage:"url(".concat("/img/others/img-17.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(o.c)((function(e){return e.theme.currentTheme}));return Object(c.jsx)("div",{className:"h-100 ".concat("light"===t?"bg-white":""),children:Object(c.jsxs)(a.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(c.jsx)(s.a,{xs:20,sm:20,md:24,lg:16,children:Object(c.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(c.jsx)(a.a,{justify:"center",children:Object(c.jsxs)(s.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(c.jsx)("h1",{children:"Sign In"}),Object(c.jsxs)("p",{children:["Don't have an account yet? ",Object(c.jsx)("a",{href:"/auth/register-2",children:"Sign Up"})]}),Object(c.jsx)("div",{className:"mt-4",children:Object(c.jsx)(i.a,Object(n.a)({},e))})]})})})}),Object(c.jsx)(s.a,{xs:0,sm:0,md:0,lg:8,children:Object(c.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:l,children:[Object(c.jsx)("div",{className:"text-right",children:Object(c.jsx)("img",{src:"/img/logo-white.png",alt:"logo"})}),Object(c.jsx)(a.a,{justify:"center",children:Object(c.jsxs)(s.a,{xs:0,sm:0,md:0,lg:20,children:[Object(c.jsx)("img",{className:"img-fluid mb-5",src:"/img/others/img-18.png",alt:""}),Object(c.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),Object(c.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),Object(c.jsx)("div",{className:"d-flex justify-content-end pb-4",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),Object(c.jsx)("span",{className:"mx-2 text-white",children:" | "}),Object(c.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})})]})})]})})}},601:function(e,t,r){"use strict";var n=r(265),i=r.n(n),a=r(19),s=r(625).a(),o=r(45),c=r(1085),l=i.a.create({baseURL:a.a,timeout:6e4}),d="/auth/login";l.interceptors.request.use((function(e){var t=localStorage.getItem(o.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(s.push(d),window.location.reload()),e}),(function(e){c.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(o.b),s.push(d),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),c.a.error(t),Promise.reject(e)}));var h=l,u={login:function(e){return h({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return h({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=u},627:function(e,t,r){"use strict";var n=r(0),i=r.n(n),a=r(57),s=r(643),o=r(74),c=r(1086),l=r(563),d=r(264),h=r(1069),u=r(1087),j=r(54),m=r(348),b=r(2),g=i.a.forwardRef((function(e,t){return Object(b.jsx)(m.a,{component:e.svg,className:e.className})})),p=r(85),x=r(601),f=r(64),O=r(626),w=function(e){var t=Object(f.g)(),r=e.otherSignIn,i=e.showForgetPassword,a=e.hideAuthMessage,m=e.onForgetPasswordClick,p=e.showLoading,w=e.extra,v=e.loading,y=e.showMessage,k=e.message,S=e.authenticated,N=e.showAuthMessage,z=e.token,P=e.redirect,I=e.allowRedirect;Object(n.useEffect)((function(){null!==z&&I&&t.push(P),y&&setTimeout((function(){a()}),3e3)}));var M=Object(b.jsxs)("div",{children:[Object(b.jsx)(s.a,{children:Object(b.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"or connect with"})}),Object(b.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(b.jsx)(o.a,{onClick:function(){p()},className:"mr-2",disabled:v,icon:Object(b.jsx)(g,{svg:j.m}),children:"Google"}),Object(b.jsx)(o.a,{onClick:function(){p()},icon:Object(b.jsx)(g,{svg:j.k}),disabled:v,children:"Facebook"})]})]});return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:y?1:0,marginBottom:y?20:0},children:Object(b.jsx)(c.a,{type:"error",showIcon:!0,message:k})}),Object(b.jsxs)(l.a,{layout:"vertical",name:"login-form",onFinish:function(e){p();x.a.login(e).then((function(e){S("fakeToken")})).then((function(e){N(e)}))},children:[Object(b.jsx)(l.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:Object(b.jsx)(d.a,{prefix:Object(b.jsx)(h.a,{className:"text-primary"})})}),Object(b.jsx)(l.a.Item,{name:"password",label:Object(b.jsxs)("div",{className:"".concat(i?"d-flex justify-content-between w-100 align-items-center":""),children:[Object(b.jsx)("span",{children:"Password"}),i&&Object(b.jsx)("span",{onClick:function(){return m},className:"cursor-pointer font-size-sm font-weight-normal text-muted",children:"Forget Password?"})]}),rules:[{required:!0,message:"Please input your password"}],children:Object(b.jsx)(d.a.Password,{prefix:Object(b.jsx)(u.a,{className:"text-primary"})})}),Object(b.jsx)(l.a.Item,{children:Object(b.jsx)(o.a,{type:"primary",htmlType:"submit",block:!0,loading:v,children:"Sign In"})}),r?M:null,w]})]})};w.defaultProps={otherSignIn:!0,showForgetPassword:!1};var v={showAuthMessage:p.c,showLoading:p.d,hideAuthMessage:p.b,authenticated:p.a};t.a=Object(a.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),v)(w)},643:function(e,t,r){"use strict";var n=r(3),i=r(1),a=r(5),s=r(7),o=r.n(s),c=r(0),l=r(62),d=r(173),h=r(105),u=r(12),j=function(e){var t,r=e.componentCls,a=e.sizePaddingEdgeHorizontal,s=e.colorSplit,o=e.lineWidth;return Object(i.a)({},r,Object(n.a)(Object(n.a)({},Object(u.f)(e)),(t={borderBlockStart:o+"px solid "+s,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:"0 "+e.dividerVerticalGutterMargin+"px",verticalAlign:"middle",borderTop:0,borderInlineStart:o+"px solid "+s},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:e.dividerHorizontalGutterMargin+"px 0"},"&-horizontal&-with-text":{display:"flex",margin:e.dividerHorizontalWithTextGutterMargin+"px 0",color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 "+s,"&::before, &::after":{position:"relative",top:"50%",width:"50%",borderBlockStart:o+"px solid transparent",borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},"&-horizontal&-with-text-left":{"&::before":{top:"50%",width:"5%"},"&::after":{top:"50%",width:"95%"}},"&-horizontal&-with-text-right":{"&::before":{top:"50%",width:"95%"},"&::after":{top:"50%",width:"5%"}}},Object(i.a)(t,r+"-inner-text",{display:"inline-block",padding:"0 1em"}),Object(i.a)(t,"&-dashed",{background:"none",borderColor:s,borderStyle:"dashed",borderWidth:o+"px 0 0"}),Object(i.a)(t,"&-horizontal&-with-text&-dashed",{"&::before, &::after":{borderStyle:"dashed none none"}}),Object(i.a)(t,"&-vertical&-dashed",{borderInlineStart:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0}),Object(i.a)(t,"&-plain&-with-text",{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize}),Object(i.a)(t,"&-horizontal&-with-text-left&-no-default-orientation-margin-left",Object(i.a)({"&::before":{width:0},"&::after":{width:"100%"}},r+"-inner-text",{paddingInlineStart:a})),Object(i.a)(t,"&-horizontal&-with-text-right&-no-default-orientation-margin-right",Object(i.a)({"&::before":{width:"100%"},"&::after":{width:0}},r+"-inner-text",{paddingInlineEnd:a})),t)))},m=Object(d.a)("Divider",(function(e){var t=Object(h.b)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[j(t)]}),{sizePaddingEdgeHorizontal:0}),b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};t.a=function(e){var t,r=c.useContext(l.b),s=r.getPrefixCls,d=r.direction,h=e.prefixCls,u=e.type,j=void 0===u?"horizontal":u,g=e.orientation,p=void 0===g?"center":g,x=e.orientationMargin,f=e.className,O=e.children,w=e.dashed,v=e.plain,y=b(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),k=s("divider",h),S=m(k),N=Object(a.a)(S,2),z=N[0],P=N[1],I=p.length>0?"-"+p:p,M=!!O,C="left"===p&&null!=x,E="right"===p&&null!=x,T=o()(k,P,k+"-"+j,(t={},Object(i.a)(t,k+"-with-text",M),Object(i.a)(t,k+"-with-text"+I,M),Object(i.a)(t,k+"-dashed",!!w),Object(i.a)(t,k+"-plain",!!v),Object(i.a)(t,k+"-rtl","rtl"===d),Object(i.a)(t,k+"-no-default-orientation-margin-left",C),Object(i.a)(t,k+"-no-default-orientation-margin-right",E),t),f),B=Object(n.a)(Object(n.a)({},C&&{marginLeft:x}),E&&{marginRight:x});return z(c.createElement("div",Object(n.a)({className:T},y,{role:"separator"}),O&&"vertical"!==j&&c.createElement("span",{className:k+"-inner-text",style:B},O)))}}}]);
//# sourceMappingURL=9.072bdc3d.chunk.js.map