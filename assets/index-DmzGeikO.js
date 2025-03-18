import{j as t}from"./index-CPp3-wTk.js";import{M as h}from"./MetaData-BilzSi7t.js";import{P as d}from"./PageTitle-CDMnHu4j.js";import{A as l}from"./react-apexcharts.min-BSBmDPqG.js";const n=[50,30,40,20,25,15,10],s={chart:{type:"donut",height:380,toolbar:{show:!1},background:"transparent"},title:{text:"Marketing Budget",style:{fontWeight:"500"},align:"right"},stroke:{show:!0,width:1,colors:["var(--color-base-100)"]},fill:{type:"gradient"},plotOptions:{pie:{startAngle:-45,endAngle:315,donut:{size:"60%",labels:{show:!0,value:{formatter:e=>"$"+e+"K",color:"var(--color-base-content)"},total:{show:!0,color:"#FF4560",formatter:()=>"$"+n.reduce((e,r)=>e+r,0)+"K"}}}}},tooltip:{enabled:!0,y:{formatter:e=>"$"+e+"K"}},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}],labels:["Content","Social Media","SEO","Paid Display","Affiliate","Magazine","Promotional Items"],colors:["#167bff","#FDA403","#FB6D48","#A25772","#8E7AB5","#FFA299","#E3C878"],series:n},p=()=>{var e,r;return t.jsx(l,{options:s,type:(e=s.chart)==null?void 0:e.type,height:(r=s.chart)==null?void 0:r.height,series:s.series})},a={chart:{type:"pie",height:380,toolbar:{show:!1},background:"transparent"},theme:{monochrome:{enabled:!0,color:"#167bff",shadeTo:"light",shadeIntensity:.8}},stroke:{show:!0,width:1,colors:["var(--color-base-100)"]},title:{text:"App Downloads",style:{fontWeight:"500"},align:"right"},tooltip:{enabled:!0,y:{formatter:e=>e+" Downloads"}},labels:["Android","iOS","Windows","MacOS","Amazon FireOS"],series:[39243,22187,6947,3375,2688]},b=()=>{var e,r;return t.jsx(l,{options:a,type:(e=a.chart)==null?void 0:e.type,height:(r=a.chart)==null?void 0:r.height,series:a.series})},c=[2512,1003,2009,4322,521],o={chart:{type:"donut",height:380,toolbar:{show:!1},background:"transparent",dropShadow:{enabled:!0,color:"#111",top:-1,left:3,blur:3,opacity:.2}},title:{text:"Inventory",style:{fontWeight:"500"},align:"right",offsetX:-24},legend:{position:"right"},stroke:{show:!0,width:1,colors:["var(--color-base-100)"]},fill:{type:"pattern",pattern:{style:["squares","verticalLines","slantedLines","circles","horizontalLines"],width:4,height:4,strokeWidth:1}},plotOptions:{pie:{startAngle:-45,endAngle:315,donut:{size:"60%",labels:{show:!0,value:{color:"var(--color-base-content)",formatter:e=>e+" Units"},total:{show:!0,color:"#FF4560",formatter:()=>c.reduce((e,r)=>e+r,0)+" Units"}}}}},tooltip:{enabled:!0,y:{formatter:e=>e+" Units"}},labels:["Smartwatch","Smartphone","Tablet","Headphone","Laptop"],colors:["#167bff","#FB6D48","#FDA403","#A25772","#8E7AB5"],series:c},g=()=>{var e,r;return t.jsx(l,{options:o,type:(e=o.chart)==null?void 0:e.type,height:(r=o.chart)==null?void 0:r.height,series:o.series})},i={chart:{height:380,type:"pie",toolbar:{show:!1},background:"transparent"},stroke:{show:!0,width:1,colors:["var(--color-base-100)"]},title:{text:"Website Traffic",style:{fontWeight:"500"},align:"right"},tooltip:{enabled:!0,y:{formatter:e=>e+" Visitors"}},labels:["Search","Direct","Referral","Social","Webinars","Advertisement"],colors:["#167bff","#FDA403","#FB6D48","#A25772","#8E7AB5","#FFA299"],series:[428,180,88,209,91,52]},m=()=>{var e,r;return t.jsx(l,{options:i,type:(e=i.chart)==null?void 0:e.type,height:(r=i.chart)==null?void 0:r.height,series:i.series})},j=()=>t.jsxs(t.Fragment,{children:[t.jsx(h,{title:"Apex Pie Charts"}),t.jsx(d,{title:"Pie Charts",items:[{label:"Apex Charts"},{label:"Pie",active:!0}]}),t.jsxs("div",{className:"mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2",children:[t.jsx("div",{className:"card card-border bg-base-100",children:t.jsxs("div",{className:"card-body gap-3 pb-0",children:[t.jsx("div",{className:"card-title",children:"Simple Pie"}),t.jsx(m,{})]})}),t.jsx("div",{className:"card card-border bg-base-100",children:t.jsxs("div",{className:"card-body gap-3 pb-0",children:[t.jsx("div",{className:"card-title",children:"Monochrome Pie"}),t.jsx(b,{})]})}),t.jsx("div",{className:"card card-border bg-base-100",children:t.jsxs("div",{className:"card-body gap-3 pb-0",children:[t.jsx("div",{className:"card-title",children:"Gradient Donut"}),t.jsx(p,{})]})}),t.jsx("div",{className:"card card-border bg-base-100",children:t.jsxs("div",{className:"card-body gap-3 pb-0",children:[t.jsx("div",{className:"card-title",children:"Pattern Donut"}),t.jsx(g,{})]})})]})]});export{j as default};
