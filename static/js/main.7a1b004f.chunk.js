(this["webpackJsonpGithub API Project"]=this["webpackJsonpGithub API Project"]||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(8),c=s(6),i=s(3),l=s.n(i),r=s(5),o=s(2),d={headers:{Authorization:"token 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",Accept:"application/vnd.github.v3+json"}},u=s(4),b=s(1),x=function(e){var t=e.author,s=e.commit,a=e.html_url,n=e.sha,c=new Date(s.author.date).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return Object(b.jsxs)("li",{className:"flex items-start -ml-7 mt-6",children:[Object(b.jsx)(u.a,{className:"flex-shrink-0 mr-3 text-green-500 bg-white",size:28}),Object(b.jsxs)("div",{className:"flex-1",children:[Object(b.jsx)("a",{className:"text-lg font-semibold text-indigo-800 hover:text-indigo-600 mb-1 inline-block",href:a,rel:"nofollow",target:"_blank",children:s.message}),Object(b.jsxs)("ul",{className:"flex items-center flex-wrap gap-x-4 text-gray-600",children:[t?Object(b.jsxs)("li",{className:"flex items-center text-sm",children:[Object(b.jsxs)("a",{className:"flex items-center font-semibold hover:underline mr-1",href:t.html_url,rel:"nofollow",target:"_blank",children:[Object(b.jsx)("img",{className:"rounded-full mr-1",src:t.avatar_url,alt:"Profile picture of ".concat(t.login),width:"24",height:"24"}),t.login]}),Object(b.jsx)("span",{className:"hidden md:inline md:mr-1",children:"committed on"}),c]}):null,Object(b.jsx)("li",{className:"font-mono leading-5 font-semibold tracking-wide text-2xs bg-gray-100 px-2",children:n.substring(0,7)})]})]})]})},m=function(e){var t=e.className,s=void 0===t?"":t;return Object(b.jsxs)("svg",{className:"animate-spin inline-block ".concat(s),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em",children:[Object(b.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),Object(b.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})},j=function(e){var t=e.description,s=e.html_url,n=e.language,i=e.name,j=e.open_issues_count,h=e.owner,g=e.stargazers_count,f=Object(a.useState)([]),p=Object(o.a)(f,2),O=p[0],N=p[1],w=Object(a.useState)(!1),v=Object(o.a)(w,2),y=v[0],k=v[1],S="rounded-sm hover:text-indigo-800 hover:underline focus:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-8 focus:ring-indigo-500 transition duration-200 ease-in-out",_=function(){var e=Object(r.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/".concat(h.login,"/").concat(i,"/commits?per_page=10"),d);case 2:if(t=e.sent,k(!1),!t.ok){e.next=9;break}return e.next=7,t.json();case 7:s=e.sent,N(s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("li",{id:i,className:"p-6 mx-auto bg-white rounded-xl shadow-xl mb-3",children:[Object(b.jsx)("h5",{className:"text-3xl font-bold text-gray-900",children:Object(b.jsx)("a",{className:"hover:text-indigo-600",href:s,rel:"nofollow",target:"_blank",children:i})}),t&&Object(b.jsx)("p",{className:"text-gray-500 text-xl",children:t}),Object(b.jsxs)("ul",{className:"flex items-center text-gray-600 mt-6 mb-8 gap-x-8",children:[Object(b.jsx)("li",{className:"flex-initial",children:Object(b.jsxs)("a",{className:S,href:"".concat(s,"/pulls"),rel:"nofollow",target:"_blank","aria-label":"Pull requests",children:[Object(b.jsx)(u.b,{className:"mr-2"}),"PRs"]})}),Object(b.jsx)("li",{className:"flex-initial",children:Object(b.jsxs)("a",{className:S,href:"".concat(s,"/issues"),rel:"nofollow",target:"_blank",children:[Object(b.jsx)(u.c,{className:"mr-2","aria-label":"Open issues"}),j]})}),Object(b.jsx)("li",{className:"flex-initial",children:Object(b.jsxs)("a",{className:S,href:"".concat(s,"/stargazers"),rel:"nofollow",target:"_blank",children:[Object(b.jsx)(u.d,{className:"mr-2","aria-label":"Star count"}),g]})}),Object(b.jsx)("li",{className:"flex-initial",children:Object(b.jsx)("span",{className:"px-3 inline-flex text-sm font-semibold rounded-full bg-indigo-100 text-indigo-800",children:n})})]}),Object(b.jsx)("div",{className:"pl-4",children:Object(b.jsx)("ul",{id:"".concat(i,"-commits"),className:"border-l-4 border-gray-100 pl-3",children:O.map((function(e){return Object(b.jsx)(x,Object(c.a)({},e),e.node_id)}))})}),0===O.length&&Object(b.jsxs)("button",{className:"bg-white py-2 px-4 border border-indigo-300 rounded-full shadow-sm text-sm leading-4 font-medium text-indigo-800 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out disabled:opacity-50 inline-flex justify-center items-center",type:"button",onClick:function(e){e.preventDefault(),k(!0),_()},disabled:y,children:["Load latest commits",y&&Object(b.jsx)(m,{className:"ml-2"})]})]})},h=function(){var e=[36,44,56,72][Math.floor(4*Math.random())],t="animate-pulse bg-gray-300 rounded-lg";return Object(b.jsxs)("li",{className:"p-6 mx-auto bg-white rounded-xl shadow-xl mb-3",children:[Object(b.jsx)("h5",{className:"h-8 w-".concat(e," mb-2 ").concat(t)}),Object(b.jsx)("p",{className:"h-6 mb-6 ".concat(t)}),Object(b.jsxs)("ul",{className:"flex items-center gap-x-8",children:[Object(b.jsx)("li",{className:"flex-initial h-5 w-12 ".concat(t)}),Object(b.jsx)("li",{className:"flex-initial h-5 w-12 ".concat(t)}),Object(b.jsx)("li",{className:"flex-initial h-5 w-12 ".concat(t)}),Object(b.jsx)("li",{className:"flex-initial h-5 w-12 ".concat(t)})]})]})},g=function(){var e=new URLSearchParams(window.location.search).get("org")||"netflix",t=Object(a.useState)(e),s=Object(o.a)(t,2),n=s[0],i=s[1],u=Object(a.useState)(!0),x=Object(o.a)(u,2),g=x[0],f=x[1],p=Object(a.useState)([]),O=Object(o.a)(p,2),N=O[0],w=O[1],v=function(){var e=Object(r.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/orgs/".concat(n,"/repos"),d);case 2:if(t=e.sent,f(!1),!t.ok){e.next=10;break}return e.next=7,t.json();case 7:s=e.sent,window.history.pushState({},"","/?org=".concat(n)),w(s);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){v()}),[]),Object(b.jsxs)("div",{className:"lg:grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto",children:[Object(b.jsxs)("header",{className:"lg:sticky lg:h-screen top-0 self-start py-16 lg:py-28",children:[Object(b.jsxs)("h1",{className:"text-5xl lg:text-7xl font-extrabold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-br from-white to-pink-100",children:["Github",Object(b.jsx)("br",{}),"Repo Search"]}),Object(b.jsx)("p",{className:"text-2xl lg:text-3xl mb-10 text-pink-50 lg:font-light",children:"See Github repos belonging to any organization"}),Object(b.jsxs)("form",{className:"flex items-center gap-2",onSubmit:function(e){e.preventDefault(),f(!0),v()},children:[Object(b.jsxs)("label",{className:"flex-1 block",children:[Object(b.jsx)("span",{className:"sr-only",children:"Search:"}),Object(b.jsx)("input",{type:"text",name:"org",className:"bg-white py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md border-gray-300 rounded-lg capitalize transition duration-200 ease-in-out disabled:opacity-50",placeholder:"Search Github organizations",value:n,disabled:g,onChange:function(e){return i(e.currentTarget.value)},autoFocus:!0})]}),Object(b.jsxs)("button",{className:"flex-none text-white py-2 px-4 border border-transparent rounded-lg shadow-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out disabled:opacity-50 inline-flex justify-center items-center",type:"submit",disabled:g,children:["Search",g&&Object(b.jsx)(m,{className:"ml-2 text-xl"})]})]})]}),Object(b.jsxs)("ul",{id:"repo-list",className:"my-6 -mx-4 lg:mx-0",children:[g&&!N.length&&[1,2,3,4,5].map((function(e){return Object(b.jsx)(h,{},e)})),N.map((function(e){return Object(b.jsx)(j,Object(c.a)({},e),e.id)}))]})]})},f=(s(15),document.getElementById("root"));n.render(Object(b.jsx)(g,{}),f)}},[[16,1,2]]]);
//# sourceMappingURL=main.7a1b004f.chunk.js.map