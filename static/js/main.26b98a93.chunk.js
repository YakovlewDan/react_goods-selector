(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(3),o=c.n(n),s=c(4),a=c(5),d=c(8),l=c(7),r=c(1),i=c.n(r),u=(c(13),c(14),c(6)),b=c.n(u),h=c(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(s.a)(this,c);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:"Jam"},e.handleRemoveGood=function(){e.setState({selectedGood:""})},e.handleAddGood=function(t){e.setState({selectedGood:t})},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(h.jsxs)("main",{className:"section container",children:[t?Object(h.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(h.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.handleRemoveGood})]}):Object(h.jsx)("h1",{className:"title",children:"No goods selected"}),Object(h.jsx)("table",{className:"table",children:Object(h.jsx)("tbody",{children:j.map((function(c){return Object(h.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":t===c}),children:[Object(h.jsx)("td",{children:t===c?Object(h.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.handleRemoveGood,children:"-"}):Object(h.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.handleAddGood(c)},children:"+"})}),Object(h.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.a.Component);o.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.26b98a93.chunk.js.map