(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(3),r=n.n(a),i=n(4),s=n(5),o=n(6),l=n(8),d=n(7),j=n(0),b=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("ul",{style:{listStyle:"none",paddingLeft:0},children:[Object(j.jsxs)("li",{children:["Good: ",t]}),Object(j.jsxs)("li",{children:["Neutral: ",n]}),Object(j.jsxs)("li",{children:["Bad: ",c]}),Object(j.jsxs)("li",{children:["Total: ",a]}),Object(j.jsxs)("li",{children:["Positive feedback: ",r,"%"]})]})})},u=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)("button",{name:e,onClick:n,children:e},e)}))})},h=function(e){var t=e.title,n=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:t}),n]})},O=function(e){var t=e.message;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("p",{children:t})})},g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.updateStatistics=function(t){t.preventDefault(),e.setState(Object(i.a)({},t.target.name,e.state[t.target.name]+1))},e.countTotalFeedback=function(e,t,n){return e+t+n},e.countPositiveFeedbackPercentage=function(e,t,n){return e+t+n===0?0:e/(e+t+n)*100},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(j.jsxs)("form",{children:[Object(j.jsx)(h,{title:"Please leave feedback",children:Object(j.jsx)(u,{options:["good","neutral","bad"],onLeaveFeedback:this.updateStatistics})}),Object(j.jsx)(h,{title:"Statistics",children:t+n+c===0?Object(j.jsx)(O,{message:"No feedback given"}):Object(j.jsx)(b,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(t,n,c),positivePercentage:this.countPositiveFeedbackPercentage(t,n,c)})})]})}}]),n}(c.Component);r.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.56fd0b99.chunk.js.map