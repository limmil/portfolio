(window.webpackJsonpmyportfoliosite=window.webpackJsonpmyportfoliosite||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),c=(a(56),a(7)),i=a(8),s=a(10),m=a(9),u=a(11),p=(a(57),a(2)),d=a(6),h=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(p.Grid,{className:"landing-grid"},r.a.createElement(p.Cell,{col:12},r.a.createElement("img",{src:"/portfolio/dog.png",alt:"avatar",className:"avatar-img"}),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,"Minquan Li"),r.a.createElement("hr",null),r.a.createElement("p",null,"Java | Python | JavaScript | React | NodeJS | Express | MongoDB"),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"http://google.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),r.a.createElement("a",{href:"https://github.com/limmil",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})))))))}}]),t}(n.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-body"},r.a.createElement(p.Grid,{className:"contact-grid"},r.a.createElement(p.Cell,{col:6},r.a.createElement("h2",null,"Minquan Li"),r.a.createElement("img",{src:"/portfolio/dog.png",alt:"avatar",style:{height:"250px"}}),r.a.createElement("p",{style:{width:"75%",margin:"auto",paddingTop:"1em"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries")),r.a.createElement(p.Cell,{col:6},r.a.createElement("h2",null,"Contact Me"),r.a.createElement("hr",null),r.a.createElement("div",{className:"contact-list"},r.a.createElement(p.List,null,r.a.createElement(p.ListItem,null,r.a.createElement(p.ListItemContent,{style:{fontSize:"30px",fontFamily:"Anton"}},r.a.createElement("i",{className:"fa fa-phone-square","aria-hidden":"true"}),"(916) 943-5009")),r.a.createElement(p.ListItem,null,r.a.createElement(p.ListItemContent,{style:{fontSize:"30px",fontFamily:"Anton"}},r.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}),"minquan25@yahoo.com")))))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={activeTab:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggleCategories",value:function(){return 0===this.state.activeTab?r.a.createElement("div",{className:"projects-grid"},r.a.createElement(p.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},r.a.createElement(p.CardTitle,{style:{color:"#fff",height:"176px",background:"url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"}},"React Project #1"),r.a.createElement(p.CardText,null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"),r.a.createElement(p.CardActions,{border:!0},r.a.createElement(p.Button,{colored:!0},"GitHub")),r.a.createElement(p.CardMenu,{style:{color:"#fff"}},r.a.createElement(p.IconButton,{name:"share"}))),r.a.createElement(p.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},r.a.createElement(p.CardTitle,{style:{color:"#fff",height:"176px",background:"url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"}},"React Project #2"),r.a.createElement(p.CardText,null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"),r.a.createElement(p.CardActions,{border:!0},r.a.createElement(p.Button,{colored:!0},"GitHub"),r.a.createElement(p.Button,{colored:!0},"Demo")),r.a.createElement(p.CardMenu,{style:{color:"#fff"}},r.a.createElement(p.IconButton,{name:"share"})))):1===this.state.activeTab?r.a.createElement("div",null,r.a.createElement("h1",null,"This is Java")):2===this.state.activeTab?r.a.createElement("div",null,r.a.createElement("h1",null,"This is Python")):void 0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},r.a.createElement(p.Tab,null,"React"),r.a.createElement(p.Tab,null,"Java"),r.a.createElement(p.Tab,null,"Python")),r.a.createElement(p.Grid,null,r.a.createElement(p.Cell,{col:12},r.a.createElement("div",{className:"content"},this.toggleCategories()))))}}]),t}(n.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Grid,null,r.a.createElement(p.Cell,{col:4},r.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),r.a.createElement(p.Cell,{col:8},r.a.createElement("h4",{style:{marginTop:"0px"}},this.props.schoolName),r.a.createElement("p",null,this.props.schoolDescription)))}}]),t}(n.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Grid,null,r.a.createElement(p.Cell,{col:4},r.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),r.a.createElement(p.Cell,{col:8},r.a.createElement("h4",{style:{marginTop:"0px"}},this.props.jobName),r.a.createElement("p",null,this.props.jobDescription)))}}]),t}(n.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Grid,null,r.a.createElement(p.Cell,{col:12},r.a.createElement("div",{style:{display:"flex"}},this.props.skill," ",r.a.createElement(p.ProgressBar,{style:{margin:"auto",width:"75%"},progress:this.props.progress})," ")))}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.Grid,null,r.a.createElement(p.Cell,{col:4},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:"/portfolio/dog.png",alt:"avatar",style:{height:"200px"}})),r.a.createElement("h2",{style:{paddingTop:"2em"}},"Minquan Li"),r.a.createElement("h4",{style:{color:"grey"}},"Developer"),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),r.a.createElement("h5",null,"Phone"),r.a.createElement("p",null,"(916) 943-5009"),r.a.createElement("h5",null,"Email"),r.a.createElement("p",null,"minquan25@yahoo.com"),r.a.createElement("h5",null,"Website"),r.a.createElement("p",null,"limmil.github.io/portfolio"),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}})),r.a.createElement(p.Cell,{className:"resume-right-col",col:8},r.a.createElement("h2",null,"Education"),r.a.createElement(f,{startYear:2002,endYear:2006,schoolName:"My University",schoolDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}),r.a.createElement(f,{startYear:2007,endYear:2009,schoolName:"My 2nd University",schoolDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}),r.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),r.a.createElement("h2",null,"Experience"),r.a.createElement(b,{startYear:2009,endYear:2012,jobName:"First Job",jobDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}),r.a.createElement(b,{startYear:2012,endYear:2016,jobName:"Second Job",jobDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}),r.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),r.a.createElement("h2",null,"Skills"),r.a.createElement(g,{skill:"javascript",progress:100}),r.a.createElement(g,{skill:"HTML/CSS",progress:80}),r.a.createElement(g,{skill:"NodeJS",progress:50}),r.a.createElement(g,{skill:"React",progress:25}))))}}]),t}(n.Component),j=function(){return r.a.createElement(d.d,null,r.a.createElement(d.c,{exact:!0,path:"/",component:h}),r.a.createElement(d.c,{path:"/contact",component:E}),r.a.createElement(d.c,{path:"/projects",component:y}),r.a.createElement(d.c,{path:"/resume",component:v}))},k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"demo-big-content"},r.a.createElement(p.Layout,null,r.a.createElement(p.Header,{className:"header-color",title:r.a.createElement(d.b,{style:{textDecoration:"none",color:"white"},to:"/"},"My Portfolio"),scroll:!0},r.a.createElement(p.Navigation,null,r.a.createElement(d.b,{to:"/resume"},"Resume"),r.a.createElement(d.b,{to:"/projects"},"Projects"),r.a.createElement(d.b,{to:"/contact"},"Contact"))),r.a.createElement(p.Drawer,{title:r.a.createElement(d.b,{style:{textDecoration:"none",color:"black"},to:"/"},"MyPortfolio")},r.a.createElement(p.Navigation,null,r.a.createElement(d.b,{to:"/resume"},"Resume"),r.a.createElement(d.b,{to:"/projects"},"Projects"),r.a.createElement(d.b,{to:"/contact"},"Contact"))),r.a.createElement(p.Content,null,r.a.createElement("div",{className:"page-content"}),r.a.createElement(j,null))))}}]),t}(n.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(110),a(111);o.a.render(r.a.createElement(d.a,null,r.a.createElement(k,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/portfolio","/service-worker.js");x?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):C(e)}))}}()},45:function(e,t,a){e.exports=a(112)},56:function(e,t,a){},57:function(e,t,a){}},[[45,1,2]]]);
//# sourceMappingURL=main.d1ec88b7.chunk.js.map