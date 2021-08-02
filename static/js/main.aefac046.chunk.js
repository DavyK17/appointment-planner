(this["webpackJsonpreact-challenge"]=this["webpackJsonpreact-challenge"]||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(19),i=n.n(a),s=n(17),r=n(4),j=n(11),o=n(2),l=n(0),u=function(e){var t=e.contacts,n=e.onChange;return Object(l.jsxs)("select",{onChange:n,children:[Object(l.jsx)("option",{value:null,selected:!0,children:"Select a contact"},-1),t.map((function(e,t){return Object(l.jsxs)("option",{value:e.name,children:[e.name," (",e.phone,")"]},t)}))]})},b=function(e){var t=e.contacts,n=e.title,c=e.setTitle,a=(e.contact,e.setContact),i=e.date,s=e.setDate,j=e.time,o=e.setTime,b=e.handleSubmit;return Object(l.jsxs)("form",{onSubmit:b,children:[Object(l.jsx)("input",{type:"text",value:n,onChange:function(e){var t=e.target.value;return c(t)},required:!0,placeholder:"Title"}),Object(l.jsx)("input",{type:"date",value:i,onChange:function(e){var t=e.target.value;return s(t)},required:!0,placeholder:"Date",min:function(){var e=(new Date).toLocaleDateString("en-US").split("/"),t=Object(r.a)(e,3),n=t[0],c=t[1],a=t[2];return"".concat(a,"-").concat(n.padStart(2,"0"),"-").concat(c.padStart(2,"0"))}()}),Object(l.jsx)("input",{type:"time",value:j,onChange:function(e){var t=e.target.value;return o(t)},required:!0,placeholder:"Time"}),Object(l.jsx)(u,{contacts:t,onChange:function(e){var t=e.target.value;return a(t)}}),Object(l.jsx)("input",{type:"submit",value:"Add appointment"})]})},d=function(e){var t=e.data,n=Object.values(t);return Object(l.jsx)("div",{className:"tile-container",children:n.map((function(e,t){return Object(l.jsx)("p",{className:0===t?"tile-title":"tile",children:e},t)}))})},O=function(e){var t=e.tiles;return Object(l.jsx)("div",{children:t.map((function(e,t){return Object(l.jsx)(d,{data:e},t)}))})},h=function(e){var t=e.appointments,n=e.contacts,a=e.addAppointment,i=Object(c.useState)(""),s=Object(r.a)(i,2),j=s[0],o=s[1],u=Object(c.useState)(""),d=Object(r.a)(u,2),h=d[0],p=d[1],m=Object(c.useState)(""),x=Object(r.a)(m,2),v=x[0],f=x[1],g=Object(c.useState)(""),S=Object(r.a)(g,2),C=S[0],y=S[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Add Appointment"}),Object(l.jsx)(b,{contacts:n,title:j,setTitle:o,contact:h,setContact:p,date:v,setDate:f,time:C,setTime:y,handleSubmit:function(e){e.preventDefault(),a(j,h,v,C),o(""),p(""),f(""),y("")}})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Appointments"}),Object(l.jsx)(O,{tiles:t})]})]})},p=function(e){var t=e.name,n=e.setName,c=e.phone,a=e.setPhone,i=e.email,s=e.setEmail,r=e.handleSubmit;return Object(l.jsxs)("form",{onSubmit:r,children:[Object(l.jsx)("input",{type:"text",value:t,onChange:function(e){var t=e.target.value;return n(t)},required:!0,placeholder:"Name"}),Object(l.jsx)("input",{type:"tel",value:c,onChange:function(e){var t=e.target.value;return a(t)},pattern:"[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}",required:!0,placeholder:"Phone number (###-###-####)"}),Object(l.jsx)("input",{type:"email",value:i,onChange:function(e){var t=e.target.value;return s(t)},required:!0,placeholder:"Email address"}),Object(l.jsx)("input",{type:"submit",value:"Add contact"})]})},m=function(e){var t=e.contacts,n=e.addContact,a=Object(c.useState)(""),i=Object(r.a)(a,2),s=i[0],j=i[1],o=Object(c.useState)(""),u=Object(r.a)(o,2),b=u[0],d=u[1],h=Object(c.useState)(""),m=Object(r.a)(h,2),x=m[0],v=m[1],f=Object(c.useState)(!1),g=Object(r.a)(f,2),S=g[0],C=g[1];Object(c.useEffect)((function(){t.find((function(e){return e.name===s}))?C(!0):C(!1)}),[s,t,S]);return Object(l.jsxs)("div",{children:[Object(l.jsxs)("section",{children:[Object(l.jsxs)("h2",{children:["Add Contacts",!S||Object(l.jsx)("span",{style:{fontWeight:400,color:"red"},children:" - Name already exists!"})]}),Object(l.jsx)(p,{name:s,setName:j,phone:b,setPhone:d,email:x,setEmail:v,handleSubmit:function(e){e.preventDefault(),S||(n(s,b,x),j(""),d(""),v(""))}})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Contacts"}),Object(l.jsx)(O,{tiles:t})]})]})};var x=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),u=Object(r.a)(i,2),b=u[0],d=u[1],O="/contacts",p="/appointments";return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("nav",{children:[Object(l.jsx)(j.b,{to:O,activeClassName:"active",children:"Contacts"}),Object(l.jsx)(j.b,{to:p,activeClassName:"active",children:"Appointments"})]}),Object(l.jsx)("main",{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:O,children:Object(l.jsx)(m,{contacts:n,addContact:function(e,t,c){a([].concat(Object(s.a)(n),[{name:e,phone:t,email:c}]))}})}),Object(l.jsx)(o.a,{path:p,children:Object(l.jsx)(h,{contacts:n,appointments:b,addAppointment:function(e,t,n,c){d([].concat(Object(s.a)(b),[{title:e,contact:t,date:n,time:c}]))}})})]})})]})};i.a.render(Object(l.jsx)(j.a,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.aefac046.chunk.js.map