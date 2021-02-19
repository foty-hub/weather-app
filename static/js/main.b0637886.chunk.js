(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(6),r=a.n(s),o=(a(11),a(3)),i=a.n(o),u=a(5),d=a(2),l=(a.p,a(13),a(0)),j={"01d":"fa-sun","02d":"fa-cloud-sun","03d":"fa-cloud","04d":"fa-cloud","09d":"fa-cloud-sun-rain","10d":"fa-cloud-showers-heavy","11d":"fa-bolt","13d":"fa-snowflake","50d":"fa-smog"},m=function(e){return Object(l.jsxs)("div",{className:"forecast-row",children:[Object(l.jsx)("p",{className:"date",children:e.time}),Object(l.jsx)("i",{className:"fas "+j[e.icon]}),Object(l.jsx)("p",{className:"desc",children:e.desc}),Object(l.jsxs)("p",{className:"morn-temp",children:[e.max,"\u2103"]}),Object(l.jsxs)("p",{className:"even-temp",children:[e.min,"\u2103"]})]})},b=function(e){return Object(l.jsxs)("div",{className:"current-display",children:[Object(l.jsxs)("h1",{className:"temp-today",children:[isNaN(e.temp)?"loading...":e.temp,"\u2103"]}),Object(l.jsx)("p",{className:"desc-today",children:e.desc}),Object(l.jsx)("form",{onSubmit:e.onSubmit,children:Object(l.jsx)("input",{type:"text",autoComplete:"off",className:"search-bar",placeholder:"eg... London, UK",onChange:e.onChange})}),Object(l.jsxs)("div",{className:"location",children:[Object(l.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"black",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.4751 9.98256C19.4751 14.1151 12.4585 21.67 11.9926 21.9632C11.5267 22.2564 4.51001 14.1151 4.51001 9.98256C4.51001 5.85006 7.86007 2.5 11.9926 2.5C16.1251 2.5 19.4751 5.85006 19.4751 9.98256ZM14.4868 9.98256C14.4868 11.3601 13.3701 12.4767 11.9926 12.4767C10.6151 12.4767 9.49838 11.3601 9.49838 9.98256C9.49838 8.60506 10.6151 7.48837 11.9926 7.48837C13.3701 7.48837 14.4868 8.60506 14.4868 9.98256Z",fill:"#5d1168"})}),Object(l.jsx)("p",{className:"city",children:e.location})]})]})},p=a.p+"static/media/london-gradient.76174e0b.png",O=function(){var e="";e=localStorage.getItem("Location")?localStorage.getItem("Location"):"london, uk";var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)([]),o=Object(d.a)(r,2),j=o[0],O=o[1],f=Object(n.useState)([]),h=Object(d.a)(f,2),x=h[0],g=h[1],v=Object(n.useState)([]),S=Object(d.a)(v,2),w=S[0],N=S[1],y=Object(n.useState)([]),I=Object(d.a)(y,2),C=I[0],E=I[1],k=Object(n.useState)([]),M=Object(d.a)(k,2),D=M[0],L=M[1],T=Object(n.useState)(),R=Object(d.a)(T,2),_=R[0],A=R[1],U=Object(n.useState)(e),F=Object(d.a)(U,2),J=F[0],B=F[1],Q=Object(n.useState)(),V=Object(d.a)(Q,2),Z=V[0],P=V[1],q=Object(n.useState)(),K=Object(d.a)(q,2),X=(K[0],K[1]),Y=Object(n.useState)([]),z=Object(d.a)(Y,2),H=z[0],W=z[1];Object(n.useEffect)((function(){ee(J)}),[J]);var G=function(e){var t=new Date(1e3*e),a=t.getDay(),n=function(e){if(e>3&&e<21)return e+"th";switch(e%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd";default:return e+"th"}}(t.getDate()),c=t.getMonth();return"".concat(["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"][a]," ").concat(n," ").concat(["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"][c])},$=function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(a,"&units=metric&appid=a7ff38ee1c49b77064c72f94875dcc9e"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,s(r.current),O(r.current.weather[0].description),X(r.current.weather[0].icon),W(r.daily.map((function(e){return e.weather[0].icon}))),g(r.daily.map((function(e){return G(e.dt)}))),N(r.daily.map((function(e){return e.weather[0].description}))),E(r.daily.map((function(e){return Math.round(e.temp.max)}))),L(r.daily.map((function(e){return Math.round(e.temp.min)}))),console.log(r);case 16:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ee=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,c,s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://maps.googleapis.com/maps/api/geocode/json?address=".concat(t,"&key=AIzaSyCMCT2J6HObmXkBZiD-gMAdmucOoTXEn_U"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,s="",r="",e.t0=c.status,e.next="OK"===e.t0?12:"ZERO_RESULTS"===e.t0?18:"INVALID_REQUEST"===e.t0?20:"OVER_DAILY_LIMIT"===e.t0||"OVER_QUERY_LIMIT"===e.t0||"REQUEST_DENIED"===e.t0||"INVALID_REQUEST"===e.t0?22:24;break;case 12:return s=c.results[0].geometry.location.lat,r=c.results[0].geometry.location.lng,P(c.results[0].formatted_address),localStorage.setItem("Location",J),$(s,r),e.abrupt("break",25);case 18:return alert("No matching address found"),e.abrupt("break",25);case 20:return alert("Invalid request"),e.abrupt("break",25);case 22:return alert("API request failed"),e.abrupt("break",25);case 24:alert("Unknown error occurred");case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"londonimage",children:Object(l.jsx)("img",{src:p,alt:"london-image"})}),Object(l.jsxs)("div",{className:"todaysforecast",children:[Object(l.jsx)(b,{temp:Math.round(c.temp),desc:j,location:Z,onSubmit:function(e){e.preventDefault(),B(_)},onChange:function(e){A(e.target.value)}}),Object(l.jsx)("p",{className:"subtitle",children:"next 7 days"})]}),Object(l.jsxs)("div",{className:"forecast",children:[Object(l.jsx)(m,{time:x[1],desc:w[1],max:C[1],min:D[1],icon:H[1]}),Object(l.jsx)(m,{time:x[2],desc:w[2],max:C[2],min:D[2],icon:H[2]}),Object(l.jsx)(m,{time:x[3],desc:w[3],max:C[3],min:D[3],icon:H[3]}),Object(l.jsx)(m,{time:x[4],desc:w[4],max:C[4],min:D[4],icon:H[4]}),Object(l.jsx)(m,{time:x[5],desc:w[5],max:C[5],min:D[5],icon:H[5]}),Object(l.jsx)(m,{time:x[6],desc:w[6],max:C[6],min:D[6],icon:H[6]}),Object(l.jsx)(m,{time:x[7],desc:w[7],max:C[7],min:D[7],icon:H[7]})]})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.b0637886.chunk.js.map