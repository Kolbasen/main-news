(this["webpackJsonpweb-react"]=this["webpackJsonpweb-react"]||[]).push([[0],{75:function(e,t,n){e.exports=n(92)},80:function(e,t,n){},81:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),i=(n(80),n(17)),s=n(29),u=(n(81),n(6)),l=n.n(u),m=n(11),p=n(8),d=n(122),f=n(124),h=n(125),g=n(126),b=n(45),v=n(62),w=Object(v.a)((function(e){return{items:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},card:{width:300,marginBottom:e.spacing(2)},media:{height:140}}})),O="http://localhost:8000/api",E=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(O),e.next=3,fetch(n,{method:"GET",headers:{CurrentId:"".concat(t)}});case 3:return a=e.sent,e.abrupt("return",D(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",n="".concat(O,"/admin/").concat(""),e.next=4,fetch(n,{method:"GET",headers:{Authorization:"Bearer ".concat(t)}});case 4:return a=e.sent,console.log(a),e.abrupt("return",D(a));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(m.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"admin/add",a="".concat(O,"/").concat("admin/add"),console.log(t),e.next=5,fetch(a,{method:"PUT",headers:{Authorization:"Bearer ".concat(n)},body:t});case 5:return r=e.sent,e.abrupt("return",D(r));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),"admin/edit",a="".concat(O,"/").concat("admin/edit"),e.next=5,fetch(a,{method:"PUT",headers:{Authorization:"Bearer ".concat(n)},body:t});case 5:return r=e.sent,e.abrupt("return",D(r));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(m.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"admin/delete",a="".concat(O,"/").concat("admin/delete"),e.next=4,fetch(a,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({id:t})});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="news/".concat(t),a="".concat(O,"/").concat(n),e.next=4,fetch(a);case 4:return r=e.sent,e.abrupt("return",D(r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"hotnews",t="".concat(O,"/").concat("hotnews"),e.next=4,fetch(t);case 4:return n=e.sent,e.abrupt("return",D(n));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="tags/".concat(t),a="".concat(O,"/").concat(n),e.next=4,fetch(a);case 4:return r=e.sent,e.abrupt("return",D(r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"admin/login",n="".concat(O,"/").concat("admin/login"),e.next=4,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return a=e.sent,e.abrupt("return",D(a));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return n=e.sent,a="OK"===t.statusText,e.abrupt("return",{success:a,entity:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),r=n[0],c=n[1],o=function(e,t){var n;return function(){var a=this,r=arguments;clearTimeout(n),n=setTimeout((function(){e.apply(a,r)}),t)}};function i(){window.innerHeight+Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)<document.documentElement.offsetHeight-10||r||(console.log("Height is critical"),c(!0))}return Object(a.useEffect)((function(){return window.addEventListener("scroll",o(i,500)),function(){return window.removeEventListener("scroll",o(i,500))}}),[i]),Object(a.useEffect)((function(){r&&(console.log("Perform fetch"),e())}),[e,r]),[r,c]};var I=function(e){var t=e.cards,n=e.setCards,c=e.setCurrentNews,o=Object(s.g)(),i=w(),u=Object(a.useState)(!0),v=Object(p.a)(u,2),O=v[0],y=v[1],j=Object(a.useState)(-1),x=Object(p.a)(j,2),C=x[0],k=x[1],N=T((function(){console.log(C),function(){var e=Object(m.a)(l.a.mark((function e(a){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(a);case 2:r=e.sent,console.log(r.entity),r.entity.length||R(!1),r.success&&r.entity.length?(D(!1),c=t.concat(r.entity),n(c),k(r.entity[r.entity.length-1].id)):console.log("Something went wrong");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(C)})),S=Object(p.a)(N,2),P=S[0],D=S[1],I=Object(a.useState)(!0),A=Object(p.a)(I,2),L=A[0],R=A[1];return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:(a=e.sent).success?(console.log(a.entity),k(a.entity[a.entity.length-1].id),n(a.entity),y(!1)):console.log("Something went wrong");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(C)}),[]),O?r.a.createElement("h1",null,"Is Loading..."):r.a.createElement("div",{style:{marginTop:"80px"}},t.map((function(e,t){return r.a.createElement("div",{key:t,className:i.items},r.a.createElement(d.a,{className:i.card},r.a.createElement(f.a,{onClick:function(){c(e.id),o.push("/news/".concat(e.id))}},r.a.createElement(h.a,{className:i.media,image:"http://localhost:8000/".concat(e.photo),title:"Contemplative Reptile"}),r.a.createElement(g.a,null,r.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.shortHeader)))))})),P&&L?"Fetching more cards":null)},A=n(21),L=function(e){return{type:"SELECT_CURRENT_NEWS",payload:e}},R=function(e){return{type:"ADD_HOT_NEWS",payload:e}},H=function(e){return console.log(e),{type:"ADD_CARDS",payload:e}};var B={setCurrentNews:L,setCards:H},U=Object(A.b)((function(e){return{cards:e.cards.cards}}),B)((function(e){var t=e.cards,n=e.setCards,a=e.setCurrentNews;return r.a.createElement(I,{cards:t,setCards:n,setCurrentNews:a})})),W=n(127),F=n(128),_=n(129),q=n(130),z=n(12),J=Object(v.a)((function(e){return{root:{display:"flex",flex:1},toolbar:{display:"flex",backgroundColor:"#000000"},items:{display:"flex",alignItems:"center",justifyContent:"center"},menuButton:{marginRight:e.spacing(2)},title:Object(z.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"})}}));function G(){var e=J(),t=Object(s.g)();return r.a.createElement("div",{className:e.root},r.a.createElement(W.a,{position:"fixed"},r.a.createElement(F.a,{className:e.toolbar},r.a.createElement("div",{className:e.items},r.a.createElement(_.a,{button:!0,component:"button",onClick:function(){return t.push("/")}},r.a.createElement(q.a,{primary:"\u0414\u043e\u043c\u043e\u0439"})),r.a.createElement(_.a,{button:!0,component:"button",onClick:function(){return t.push("/news/tag/world")}},r.a.createElement(q.a,{primary:"\u041c\u0438\u0440"})),r.a.createElement(_.a,{button:!0,component:"button",onClick:function(){return t.push("/news/tag/politics")}},r.a.createElement(q.a,{primary:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430"})),r.a.createElement(_.a,{button:!0,component:"button",onClick:function(){return t.push("/news/tag/ukraine")}},r.a.createElement(q.a,{primary:"\u0423\u043a\u0440\u0430\u0438\u043d\u0430"})),r.a.createElement(_.a,{button:!0,component:"button",onClick:function(){return t.push("/news/tag/russia")}},r.a.createElement(q.a,{primary:"\u0420\u043e\u0441\u0441\u0438\u044f"})),r.a.createElement(_.a,{button:!0,component:"button",onClick:function(){return t.push("/news/tag/technology")}},r.a.createElement(q.a,{primary:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}))))))}var M=Object(v.a)((function(e){return{items:{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"70px"},card:{width:150,height:50,marginBottom:e.spacing(2)},media:{height:140}}}));var Z=function(e){var t=e.hotNews,n=e.setCurrentNews,a=Object(s.g)(),c=M();return r.a.createElement("div",null,r.a.createElement(d.a,{className:c.card},r.a.createElement(g.a,null,r.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Hot news"))),t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(d.a,{className:c.card},r.a.createElement(f.a,{onClick:function(){console.log(a.id),n(e.id),a.push("/news/".concat(e.id))}},r.a.createElement(g.a,null,r.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.shortHeader)))))})))};var K={setCurrentNews:L},Y=Object(A.b)((function(e){return{cards:e.cards.cards,id:e.id.id,hotNews:e.hotNews.hotNews}}),K)((function(e){var t=e.hotNews,n=e.setCurrentNews,a=Object(s.h)();return r.a.createElement(Z,{key:a.key,hotNews:t,setCurrentNews:n})})),$=Object(v.a)((function(e){return{container:{display:"flex",marginTop:"70px",justifyContent:"center"},items:{display:"flex",flexDirection:"column",marginRight:40},card:{width:300,marginBottom:e.spacing(2)},media:{height:140}}}));var Q={setCurrentNews:L,setCards:H,setHotNews:R},V=Object(A.b)((function(e){return console.log(e),{cards:e.cards.cards,id:e.id.id,hotNews:e.hotNews.hotNews}}),Q)((function(e){var t=$(),n=Object(s.i)().id,c=e.setHotNews,o=Object(a.useState)({}),i=Object(p.a)(o,2),u=i[0],f=i[1],v=Object(a.useState)(!0),w=Object(p.a)(v,2),O=w[0],E=w[1];return Object(a.useEffect)((function(){E(!0),function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([k(t),N()]);case 3:n=e.sent,a=Object(p.a)(n,2),r=a[0],o=a[1],r.success&&o.success?(c(o.entity),f(r.entity),E(!1)):console.log("Something went wrong"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Request error: "),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()(n)}),[]),O?r.a.createElement("div",null,"Is Loading..."):(console.log(u),r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:t.items},r.a.createElement(d.a,{className:t.card},r.a.createElement(h.a,{className:t.media,image:"http://localhost:8000/static/".concat(u.photo),title:"Contemplative Reptile"})),r.a.createElement(d.a,{className:t.card},r.a.createElement(g.a,null,r.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},u.header))),r.a.createElement(d.a,{className:t.card},r.a.createElement(g.a,null,r.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},u.text)))),r.a.createElement("div",{style:{marginLeft:"30px"}},r.a.createElement(Y,null))))}));function X(){var e=Object(s.h)();return console.log(e),r.a.createElement(V,{key:e.key})}var ee=Object(v.a)((function(e){return{items:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},card:{width:300,marginBottom:e.spacing(2)},media:{height:140}}}));function te(e){var t=e.cards,n=e.setCards,c=e.setCurrentNews,o=Object(s.i)(),i=Object(s.g)(),u=ee(),v=Object(a.useState)(!0),w=Object(p.a)(v,2),O=w[0],E=w[1];return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(l.a.mark((function e(a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(a);case 2:r=e.sent,console.log(r),r.success&&(n(r.entity),console.log(t),E(!1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(o.tag)}),[]),O?r.a.createElement("h1",{style:{marginTop:"70px"}},"Is Loading..."):r.a.createElement("div",{style:{marginTop:"70px"}},t.map((function(e){return r.a.createElement("div",{key:e.id,className:u.items},r.a.createElement(d.a,{className:u.card},r.a.createElement(f.a,{onClick:function(){c(e.id),i.push("/news/".concat(e.id))}},r.a.createElement(h.a,{className:u.media,image:"http://localhost:8000/static/".concat(e.photo),title:"Contemplative Reptile"}),r.a.createElement(g.a,null,r.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.shortHeader)))))})))}var ne={setCurrentNews:L,setCards:H,setHotNews:R},ae=Object(A.b)((function(e){return{cards:e.cards.cards,id:e.id.id,hotNews:e.hotNews.hotNews}}),ne)((function(e){var t=e.cards,n=e.setCards,a=e.setCurrentNews,c=Object(s.h)();return r.a.createElement(te,{cards:t,setCards:n,key:c.key,setCurrentNews:a})})),re=n(131),ce=n(132),oe=n(133),ie=n(134),se=n(138),ue=n(136),le=n(66),me=n.n(le),pe=function(){return localStorage.getItem("token")},de=function(e){return localStorage.setItem("token",e),!0},fe=Object(v.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},elements:{marginTop:e.spacing(25),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3),padding:e.spacing(0,2,0,2)},avatar:{margin:e.spacing(1),backgroundColor:"#000000"},submit:{margin:e.spacing(3,0,2)},input:{marginBottom:e.spacing(1)}}}));function he(){var e=fe(),t=Object(a.useState)(""),n=Object(p.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),u=Object(p.a)(i,2),d=u[0],f=u[1],h=Object(a.useState)(!1),g=Object(p.a)(h,2),v=g[0],w=g[1],O=Object(a.useState)(!1),E=Object(p.a)(O,2),y=E[0],j=E[1],x=Object(a.useState)(""),C=Object(p.a)(x,2),k=C[0],N=C[1],S=function(){var e=Object(m.a)(l.a.mark((function e(t,n,a){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),r={username:t,password:n},e.prev=2,e.next=5,P(r);case 5:c=e.sent,console.log(c),c.success?c.entity.token&&(de(c.entity.token),w(!0)):(j(!1),N(c.entity.error)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),j(!1),N("Some error");case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n,a){return e.apply(this,arguments)}}();return v?r.a.createElement(s.a,{to:"/admin"}):r.a.createElement(re.a,{component:"main",maxWidth:"xs"},k,r.a.createElement(ce.a,null),r.a.createElement("div",{className:e.elements},r.a.createElement(oe.a,null,r.a.createElement(me.a,null)),r.a.createElement(b.a,{component:"h1",variant:"h5"},"Sing In"),r.a.createElement("form",{className:e.form},r.a.createElement(ie.a,{className:e.input},r.a.createElement(se.a,{id:"username",label:"Login",value:c,onChange:function(e){var t=e.target;return o(t.value)},autoFocus:!0,fullWidth:!0})),r.a.createElement(ie.a,{className:e.input},r.a.createElement(se.a,{id:"password",label:"Password",type:"password",value:d,onChange:function(e){var t=e.target;return f(t.value)},fullWidth:!0})),r.a.createElement(ie.a,null,r.a.createElement(ue.a,{className:e.submit,type:"submit",fullWidth:!0,color:"primary",variant:"contained",onClick:function(e){e.preventDefault(),S(c,d)}},y?"Logging in...":"Log In")))))}var ge=n(137),be=n(135),ve=n(44),we=n(26),Oe=n(67),Ee=n(68),ye=n(70),je=n(69),xe=n.n(je),Ce=(n(90),function(e){function t(){var e,n;Object(ve.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(Oe.a)(this,(e=Object(Ee.a)(t)).call.apply(e,[this].concat(r)))).state={src:null,crop:{unit:"%",width:30,aspect:16/9}},n.onSelectFile=function(e){if(e.target.files&&e.target.files.length>0){var t=new FileReader;t.addEventListener("load",(function(){n.setState({src:t.result})})),t.readAsDataURL(e.target.files[0])}},n.onImageLoaded=function(e){n.imageRef=e},n.onCropComplete=function(e){n.makeClientCrop(e)},n.onCropChange=function(e,t){n.setState({crop:e})},n}return Object(ye.a)(t,e),Object(we.a)(t,[{key:"makeClientCrop",value:function(){var e=Object(m.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.imageRef&&t.width&&t.height)){e.next=5;break}return e.next=3,this.getCroppedImg(this.imageRef,t,"newFile.jpeg");case 3:n=e.sent,this.setState({croppedImageUrl:n});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCroppedImg",value:function(e,t,n){var a=this,r=document.createElement("canvas"),c=e.naturalWidth/e.width,o=e.naturalHeight/e.height;return r.width=t.width,r.height=t.height,r.getContext("2d").drawImage(e,t.x*c,t.y*o,t.width*c,t.height*o,0,0,t.width,t.height),new Promise((function(e,t){r.toBlob((function(t){t?(console.log(t),t.name=n,window.URL.revokeObjectURL(a.fileUrl),a.fileUrl=window.URL.createObjectURL(t),a.props.setImageUrl(t),e(a.fileUrl)):console.error("Canvas is empty")}),"image/jpeg")}))}},{key:"render",value:function(){var e=this.state,t=e.crop,n=e.croppedImageUrl,a=e.src;return console.log(n),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{type:"file",onChange:this.onSelectFile})),a&&r.a.createElement(xe.a,{src:a,crop:t,ruleOfThirds:!0,onImageLoaded:this.onImageLoaded,onComplete:this.onCropComplete,onChange:this.onCropChange}),n&&r.a.createElement("img",{alt:"Crop",style:{maxWidth:"100%"},src:n}))}}]),t}(a.PureComponent));n(91);function ke(e){var t=e.value,n=e.submitData,c=e.addingNews,o=e.setAddingNews,i=Object(a.useState)(t.header),s=Object(p.a)(i,2),u=s[0],l=s[1],m=Object(a.useState)(t.shortHeader),d=Object(p.a)(m,2),f=d[0],h=d[1],g=Object(a.useState)(t.tags),v=Object(p.a)(g,2),w=v[0],O=v[1],E=Object(a.useState)(t.text),y=Object(p.a)(E,2),j=y[0],x=y[1],C=Object(a.useState)(pe()),k=Object(p.a)(C,2),N=k[0],S=(k[1],Object(a.useState)(!1)),P=Object(p.a)(S,2),D=P[0],T=P[1],I=Object(a.useState)(null),A=Object(p.a)(I,2),L=A[0],R=A[1];return r.a.createElement(re.a,{component:"main"},r.a.createElement(ce.a,null),r.a.createElement("button",{onClick:function(){T((function(e){return!e}))}},"Edit news"),r.a.createElement("button",{onClick:function(){n(t.id,f,u,w,j,"delete",L,N)}},"Delete news"),r.a.createElement(ge.a,{direction:"up",in:D||c,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("div",{className:"root"},r.a.createElement(b.a,null,"Add New Marker"),r.a.createElement("button",{onClick:function(){c?o(!1):T(!1)}},"Close"),r.a.createElement("form",{className:"form"},r.a.createElement(ie.a,null,r.a.createElement(Ce,{setImageUrl:function(e){R(e),console.log(L)}})),r.a.createElement(ie.a,null,r.a.createElement(se.a,{className:"input",label:"Short Header",onChange:function(e){var t=e.target;return h(t.value)},value:f,autoFocus:!0,fullWidth:!0,required:!0})),r.a.createElement(ie.a,null,r.a.createElement(se.a,{className:"input",label:"Header",onChange:function(e){var t=e.target;return l(t.value)},value:u,autoFocus:!0,fullWidth:!0,required:!0})),r.a.createElement(ie.a,null,r.a.createElement(se.a,{className:"input",label:"Tags",onChange:function(e){var t=e.target;return O(t.value)},value:w,fullWidth:!0,required:!0})),r.a.createElement(ie.a,null,r.a.createElement(be.a,{className:"input",label:"Text",onChange:function(e){var t=e.target;return x(t.value)},value:j,fullWidth:!0,required:!0})),r.a.createElement(ie.a,null,c?r.a.createElement(ue.a,{className:"input",color:"secondary",variant:"contained",onClick:function(){n(t.id,f,u,w,j,"add",L,N),h(""),l(""),O(""),x(""),o(!1)}},"Save Info"):r.a.createElement(ue.a,{className:"input",color:"secondary",variant:"contained",onClick:function(){n(t.id,f,u,w,j,"edit",L,N),T(!1)}},"Edit Info"))))))}function Ne(){var e=Object(a.useState)(!0),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),i=Object(p.a)(o,2),u=i[0],d=i[1],f=Object(a.useState)(!1),h=Object(p.a)(f,2),g=h[0],b=h[1],v=Object(a.useState)(!1),w=Object(p.a)(v,2),O=w[0],E=w[1],k=function(){var e=Object(m.a)(l.a.mark((function e(t,n,a,r,c,o){var i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n,a,r,c,o),(i=new FormData).append("shortHeader",t),i.append("header",n),i.append("tags",a),i.append("text",r),i.append("photo",c),e.prev=7,e.next=10,j(i,o);case 10:s=e.sent,console.log(s),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.log("API call error:",e.t0);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t,n,a,r,c,o){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(l.a.mark((function e(t,n,a,r,c,o,i){var s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=new FormData).append("id",t),s.append("shortHeader",n),s.append("header",a),s.append("tags",r),s.append("text",c),s.append("photo",o),e.prev=7,e.next=10,x(s,i);case 10:u=e.sent,console.log(u),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.log("API call error:",e.t0);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t,n,a,r,c,o,i){return e.apply(this,arguments)}}(),S=function(){var e=Object(m.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t,n);case 3:a=e.sent,console.log(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("API call error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),P=function(e,t,n,a,r,c,o,i){console.log(e,n,t,a,r,c,o,i),"add"===c&&k(t,n,a,r,o,i),"edit"===c&&N(e,t,n,a,r,o,i),"delete"===c&&S(e,i)};return Object(a.useEffect)((function(){pe()||E(!0)}),[]),Object(a.useEffect)((function(){(function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(pe());case 2:(t=e.sent).success?(console.log(t.entity),d(t.entity),c(!1)):console.log("Something went wrong");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n?r.a.createElement("h1",null,"Is Loading..."):O?r.a.createElement(s.a,{to:"/adminlogin"}):r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return b((function(e){return!e}))}},"Add news"),r.a.createElement(ke,{submitData:P,value:{id:null,shortHeader:"",header:"",tags:"",text:""},addingNews:g,setAddingNews:b}),u.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",{style:{display:"flex",alignItems:"center "}},r.a.createElement("img",{src:"http://localhost:8000/".concat(e.photo),height:"100",width:"100"}),r.a.createElement("p",null,e.shortHeader," "),r.a.createElement("h2",null,e.header," "),r.a.createElement("p",null,e.text," ")),r.a.createElement(ke,{submitData:P,value:e}))})))}var Se=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/admin",component:Ne}),r.a.createElement(s.b,{exact:!0,path:"/adminlogin",component:he}),r.a.createElement(a.Fragment,null,r.a.createElement(G,null),r.a.createElement(s.b,{exact:!0,path:"/",component:U}),r.a.createElement(s.b,{exact:!0,path:"/news/:id",children:r.a.createElement(X,null)}),r.a.createElement(s.b,{exact:!0,path:"/news/tag/:tag",children:r.a.createElement(ae,null)})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pe=n(34);function De(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?De(n,!0).forEach((function(t){Object(z.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):De(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ie={id:null};function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(n,!0).forEach((function(t){Object(z.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Re={cards:[{id:1,name:"asdsa",text:"asdasd",createdAt:"2019-10-12T21:11:07.500Z",updatedAt:"2019-10-12T21:11:07.500Z"}]};function He(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?He(n,!0).forEach((function(t){Object(z.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):He(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ue={hotNews:null},We=Object(Pe.b)({id:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_CURRENT_NEWS":return Te({},e,{id:t.payload});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CARDS":return Le({},e,{cards:t.payload});default:return e}},hotNews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_HOT_NEWS":return Be({},e,{hotNews:t.payload});default:return e}}}),Fe=Object(Pe.c)(We);o.a.render(r.a.createElement(A.a,{store:Fe},r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[75,1,2]]]);
//# sourceMappingURL=main.bf42ef46.chunk.js.map