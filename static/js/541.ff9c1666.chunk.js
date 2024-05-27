"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{2354:function(e,i,n){n(2791);var r=n(4420),t=n(1541),s=n(184);i.Z=function(){var e=(0,r.I0)(),i=(0,r.v9)((function(e){return e.psychologists.sortBy}));return(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"sort",children:"Sort by: "}),(0,s.jsxs)("select",{id:"sort",value:i,onChange:function(i){e((0,t.zR)(i.target.value))},children:[(0,s.jsx)("option",{value:"all",children:"Show All"}),(0,s.jsx)("option",{value:"name_asc",children:"Name A-Z"}),(0,s.jsx)("option",{value:"name_desc",children:"Name Z-A"}),(0,s.jsx)("option",{value:"price_high_low",children:"Price High to Low"}),(0,s.jsx)("option",{value:"price_low_high",children:"Price Low to High"}),(0,s.jsx)("option",{value:"popular",children:"Popular"}),(0,s.jsx)("option",{value:"not_popular",children:"Not Popular"})]})]})}},4523:function(e,i,n){n.d(i,{B:function(){return l}});var r=n(9439),t=n(2791),s=n(4420),c=n(2993),o=n(184),l=function(e){var i=e.psychologist,n=(e.index,i.about),l=i.avatar_url,a=i.experience,h=i.initial_consultation,u=i.license,d=i.name,p=i.price_per_hour,x=i.rating,v=i.reviews,j=i.specialization,g="/PsychologistsServices/images",f=(0,t.useState)(!1),m=(0,r.Z)(f,2),_=m[0],w=m[1],y=(0,s.v9)((function(e){return e.favorites.items})),Z=(0,t.useState)(y.some((function(e){return e.name===d}))),b=(0,r.Z)(Z,2),k=b[0],C=b[1],P=(0,s.I0)();(0,t.useEffect)((function(){C(y.some((function(e){return e.name===d})))}),[y,d]);return(0,o.jsx)("li",{children:(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:l,width:"96",height:"96",alt:"psychologistphoto"})})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:"Psychologist"}),(0,o.jsx)("h3",{children:d}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:["Experience: ",a]}),(0,o.jsxs)("li",{children:["License: ",u]}),(0,o.jsxs)("li",{children:["Specialization: ",j]}),(0,o.jsxs)("li",{children:["Initial consultation: ",h]})]}),(0,o.jsx)("p",{children:n})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"".concat(g,"/svg/star.svg"),alt:"star",width:"16",height:"16"}),(0,o.jsxs)("p",{children:["Rating: ",x]})]}),(0,o.jsx)("span",{children:"|"}),(0,o.jsx)("div",{children:(0,o.jsxs)("p",{children:["Price / 1 hour: ",p,"$"]})}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{type:"button",onClick:function(){k?(P((0,c.Ni)(i)),C(!1)):(P((0,c.a3)(i)),C(!0))},children:k?(0,o.jsx)("img",{src:"".concat(g,"/svg/heart-fill.svg"),alt:"star",width:"16",height:"16"}):(0,o.jsx)("img",{src:"".concat(g,"/svg/heart-empty.svg"),alt:"star",width:"16",height:"16"})})})]}),_&&(0,o.jsx)("div",{children:v.map((function(e,i){return(0,o.jsx)("div",{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:e.reviewer.slice(0,1)}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:e.reviewer}),(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"".concat(g,"/svg/star.svg"),alt:"star",width:"16",height:"16"}),(0,o.jsx)("span",{children:e.rating})]})]})]}),(0,o.jsx)("p",{children:e.comment})]})},i)}))}),(0,o.jsx)("button",{onClick:function(){w(!_)},children:_?"Show Less":"Read More"})]})})}},7541:function(e,i,n){n.r(i),n.d(i,{default:function(){return u}});var r=n(3433),t=n(2791),s=n(4420),c=n(2993),o=n(4523),l=n(2354),a=n(184),h=function(){var e=(0,s.I0)(),i=(0,s.v9)((function(e){return e.favorites.items})),n=(0,s.v9)((function(e){return e.psychologists.sortBy}));(0,t.useEffect)((function(){e((0,c.KR)())}),[e]);var h=function(e,i){switch(i){case"name_asc":return(0,r.Z)(e).sort((function(e,i){return e.name.localeCompare(i.name)}));case"name_desc":return(0,r.Z)(e).sort((function(e,i){return i.name.localeCompare(e.name)}));case"price_high_low":return(0,r.Z)(e).sort((function(e,i){return i.price_per_hour-e.price_per_hour}));case"price_low_high":return(0,r.Z)(e).sort((function(e,i){return e.price_per_hour-i.price_per_hour}));case"popular":return(0,r.Z)(e).sort((function(e,i){return i.rating-e.rating}));case"not_popular":return(0,r.Z)(e).sort((function(e,i){return e.rating-i.rating}));default:return e}}(i,n);return 0===i.length?(0,a.jsx)("div",{children:"No favorite psychologists."}):(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(l.Z,{}),(0,a.jsx)("ul",{children:h.map((function(e,i){return(0,a.jsx)(o.B,{psychologist:e,index:i},i)}))})]})};function u(){return(0,a.jsx)("div",{children:(0,a.jsx)(h,{})})}}}]);
//# sourceMappingURL=541.ff9c1666.chunk.js.map