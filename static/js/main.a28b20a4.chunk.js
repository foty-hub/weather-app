(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,c,s){},13:function(e,c,s){},15:function(e,c,s){"use strict";s.r(c);var t=s(1),a=s.n(t),n=s(5),r=s.n(n),l=(s(11),s(4)),j=s.n(l),d=s(6),i=s(2),o=(s.p,s(13),s(0)),m=function(){var e="https://api.openweathermap.org/data/2.5/onecall?lat=".concat("-0.1278","&lon=").concat("51.5074","&units=metric&appid=").concat("a7ff38ee1c49b77064c72f94875dcc9e"),c=Object(t.useState)([]),s=Object(i.a)(c,2),a=s[0],n=s[1],r=Object(t.useState)([]),l=Object(i.a)(r,2),m=l[0],p=l[1],h=Object(t.useState)([]),b=Object(i.a)(h,2),u=b[0],O=b[1];function x(e){var c=new Date(1e3*e),s=c.getDay(),t=function(e){if(e>3&&e<21)return e+"th";switch(e%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd";default:return e+"th"}}(c.getDate()),a=c.getMonth();return"".concat(["Sun","Mon","Tues","Weds","Thurs","Fri","Sat"][s]," ").concat(t," ").concat(["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"][a])}Object(t.useEffect)((function(){N()}),[]);var N=function(){var c=Object(d.a)(j.a.mark((function c(){var s,t;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch(e);case 2:return s=c.sent,c.next=5,s.json();case 5:t=c.sent,n(t.current),p(t.current.weather[0].description),O(t.daily.map((function(e){return x(e.dt)}))),console.log(t),console.log(u);case 11:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("h1",{className:"temp-today",children:[Math.round(a.temp),"\u2103"]}),Object(o.jsx)("p",{className:"desc-today",children:m}),Object(o.jsxs)("div",{className:"location",children:[Object(o.jsx)("img",{src:"location-icon.svg",alt:"location-icon"}),Object(o.jsx)("p",{className:"city",children:"London, UK"}),Object(o.jsx)("a",{href:"#",children:"Change Location"})]}),Object(o.jsx)("p",{className:"subtitle",children:"next 7 days"}),Object(o.jsxs)("div",{className:"forecast",children:[Object(o.jsxs)("div",{className:"forecast-row",children:[Object(o.jsx)("p",{className:"date",children:u[1]}),Object(o.jsx)("p",{className:"desc",children:"Cloudy"}),Object(o.jsx)("p",{className:"morn-temp",children:"1\u2103"}),Object(o.jsx)("p",{className:"even-temp",children:"-2\u2103"})]}),Object(o.jsxs)("div",{className:"forecast-row",children:[Object(o.jsx)("p",{className:"date",children:u[2]}),Object(o.jsx)("p",{className:"desc",children:"Cloudy"}),Object(o.jsx)("p",{className:"morn-temp",children:"1\u2103"}),Object(o.jsx)("p",{className:"even-temp",children:"-2\u2103"})]}),Object(o.jsxs)("div",{className:"forecast-row",children:[Object(o.jsx)("p",{className:"date",children:u[3]}),Object(o.jsx)("p",{className:"desc",children:"Cloudy"}),Object(o.jsx)("p",{className:"morn-temp",children:"1\u2103"}),Object(o.jsx)("p",{className:"even-temp",children:"-2\u2103"})]}),Object(o.jsxs)("div",{className:"forecast-row",children:[Object(o.jsx)("p",{className:"date",children:u[4]}),Object(o.jsx)("p",{className:"desc",children:"Cloudy"}),Object(o.jsx)("p",{className:"morn-temp",children:"1\u2103"}),Object(o.jsx)("p",{className:"even-temp",children:"-2\u2103"})]}),Object(o.jsxs)("div",{className:"forecast-row",children:[Object(o.jsx)("p",{className:"date",children:u[5]}),Object(o.jsx)("p",{className:"desc",children:"Cloudy"}),Object(o.jsx)("p",{className:"morn-temp",children:"1\u2103"}),Object(o.jsx)("p",{className:"even-temp",children:"-2\u2103"})]}),Object(o.jsxs)("div",{className:"forecast-row",children:[Object(o.jsx)("p",{className:"date",children:u[6]}),Object(o.jsx)("p",{className:"desc",children:"Cloudy"}),Object(o.jsx)("p",{className:"morn-temp",children:"1\u2103"}),Object(o.jsx)("p",{className:"even-temp",children:"-2\u2103"})]}),Object(o.jsxs)("div",{className:"forecast-row",children:[Object(o.jsx)("p",{className:"date",children:u[7]}),Object(o.jsx)("p",{className:"desc",children:"Cloudy"}),Object(o.jsx)("p",{className:"morn-temp",children:"1\u2103"}),Object(o.jsx)("p",{className:"even-temp",children:"-2\u2103"})]})]})]})},p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(c){var s=c.getCLS,t=c.getFID,a=c.getFCP,n=c.getLCP,r=c.getTTFB;s(e),t(e),a(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.a28b20a4.chunk.js.map