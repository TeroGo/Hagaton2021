(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{115:function(t,e,a){},117:function(t,e,a){},118:function(t,e,a){t.exports={chartContainer:"Chart_chartContainer__llPnQ"}},224:function(t,e,a){"use strict";a.r(e);var n=a(2),r=a.n(n),o=a(99),c=a.n(o),i=(a(115),a(61)),s=a.n(i),u=a(100),d=a(45),l=(a(117),a(118),a(228)),j=a(6),f=function(t){var e;console.log(t.data);var a,n,r,o,c,i,s,u,d=0!==Object.keys(t.data).length;d&&(e=[{x:"Carbs: ".concat(null===(a=t.data)||void 0===a?void 0:a.summary.carbs),y:null===(n=t.data)||void 0===n?void 0:n.summary.carbs},{x:"Fat: ".concat(null===(r=t.data)||void 0===r?void 0:r.summary.fat),y:null===(o=t.data)||void 0===o||null===(c=o.summary)||void 0===c?void 0:c.fat},{x:"Protein: ".concat(null===(i=t.data)||void 0===i?void 0:i.summary.protein),y:null===(s=t.data)||void 0===s||null===(u=s.summary)||void 0===u?void 0:u.protein}]);return Object(j.jsx)("div",{children:d&&Object(j.jsx)(l.a,{data:e,colorScale:["skyblue","teal","maroon","pink"],radius:100})})},h=function(t){console.log(t.dataFromParent);var e=function(){var e;return(null===(e=t.dataFromParent)||void 0===e?void 0:e.ingredients)?"Calories "+t.dataFromParent.ingredients[0].calories+" / Carbs "+t.dataFromParent.ingredients[0].carbs+" / Fats "+t.dataFromParent.ingredients[0].fat+" / Protein "+t.dataFromParent.ingredients[0].protein:""}()||"";return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"100g contains about:"}),e]})},v=a(46),b=a.n(v);function m(t){switch(t){case"CHICKEN":return"\ud83c\udf57";case"BEEF":return"\ud83e\udd69";case"PORK":return"\ud83d\udc37";case"VEGETARIAN":return"\ud83e\udd55";case"SALMON":return"\ud83c\udf63";case"SHELLFISH":return"\ud83e\udd90";case"WHITE_FISH":return"\ud83d\udc1f";default:return t}}var p=function(t){var e=r.a.useState(""),a=Object(d.a)(e,2),n=a[0],o=a[1],c=t.foodData&&void 0!==t.foodData.summary;return Object(j.jsxs)("main",{children:[Object(j.jsxs)("section",{className:b.a.left,children:[Object(j.jsx)("label",{htmlFor:"foodInput",children:"Enter lunch description"}),Object(j.jsx)("textarea",{id:"foodInput",value:n,onChange:function(t){return o(t.currentTarget.value)}}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){t.getData(n)},children:"Haistele raaka-aineet"})})]}),Object(j.jsx)("section",{className:b.a.right,children:Object(j.jsxs)("div",{className:b.a.chart,children:[c&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{style:{fontSize:"256px",position:"absolute",top:"0"},children:m(t.foodData.summary.classification)})}),Object(j.jsx)(f,{data:t.foodData}),Object(j.jsx)(h,{dataFromParent:t.foodData})]})})]})};var x=function(){var t=r.a.useState({}),e=Object(d.a)(t,2),a=e[0],n=e[1];function o(t){return c.apply(this,arguments)}function c(){return(c=Object(u.a)(s.a.mark((function t(e){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,t.next=4,fetch("https://lunchmaster2k.herokuapp.com/api?text=".concat(e));case 4:return a=t.sent,t.next=7,a.json();case 7:r=t.sent,n(r),console.log(r),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),alert(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}return r.a.componentDidMount=function(){o()},Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(p,{foodData:a,getData:o})})},O=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,229)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,o=e.getLCP,c=e.getTTFB;a(t),n(t),r(t),o(t),c(t)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),O()},46:function(t,e,a){t.exports={left:"Layout_left__1GwK3",right:"Layout_right__leC12",chart:"Layout_chart__1TFcT"}}},[[224,1,2]]]);
//# sourceMappingURL=main.6d7a6a44.chunk.js.map