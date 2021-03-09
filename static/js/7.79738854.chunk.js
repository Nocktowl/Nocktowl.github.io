(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[7],{172:function(t,e,n){"use strict";n.r(e);var i=n(2),r=(n(0),n(8)),s=n(21),a=n(70),o=n.n(a),c=function(t){var e=t.data;return Object(i.jsx)("div",{className:"cell-container",children:Object(i.jsxs)("article",{className:"mini-post",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h3",{children:Object(i.jsx)("a",{href:e.link,children:e.title})}),Object(i.jsx)("time",{className:"published",children:o()(e.date).format("MMMM, YYYY")})]}),Object(i.jsx)("a",{href:e.link,className:"image",children:Object(i.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),Object(i.jsx)("div",{className:"description",children:Object(i.jsx)("p",{children:e.desc})})]})})},u=[{title:"Facial Recognition using Siamese deep learning techniques",subtitle:"BTech Thesis",link:"",image:"/images/projects/face.jpg",date:"2015-11-20",desc:"Developed a new way to learn rare classes by transductive transfer and Siamese networks\nImplemented a recogniton tool in an optimized fashion using Tensorflow\nAchieved state of the art results in numerous challenging face datasets\nExtended it to oral cancer detection dataset demonstrating its transferability"},{title:"Visible Light Communication based Keyboard",subtitle:"Electronic Design Lab",link:"https://github.com/0neir0s/EDL",image:"/images/projects/vlc.jpg",date:"2017-03-09",desc:"A wireless keyboard transferring data by modulating intensity of an LED to an LCD based receiver\nDeveloped an efficient Interrupt based communication link using FSK modulation & photodiodes\nDesigned boards for peripheral circuitry, used AT89C5131 based development boards for processing\nMade it extremely robust by adding alignment indicator, protection circuitry in power block etc\nSucceeded in making it work over a range of 3.5 meters with 100"}];e.default=function(){return Object(i.jsx)(s.a,{title:"Projects",description:"Learn about Michael D'Angelo's projects.",children:Object(i.jsxs)("article",{className:"post",id:"projects",children:[Object(i.jsx)("header",{children:Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{"data-testid":"heading",children:Object(i.jsx)(r.b,{to:"/projects",children:"Projects"})}),Object(i.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),u.map((function(t){return Object(i.jsx)(c,{data:t},t.title)}))]})})}},70:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",r="day",s="week",a="month",o="quarter",c="year",u="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},$={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+f(i,2,"0")+":"+f(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,a),s=n-r<0,o=e.clone().add(i+(s?-1:1),a);return+(-(i+(n-r)/(s?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:a,y:c,w:s,d:r,D:u,h:i,m:n,s:e,ms:t,Q:o}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",g={};g[m]=l;var p=function(t){return t instanceof v},b=function(t,e,n){var i;if(!t)return m;if("string"==typeof t)g[t]&&(i=t),e&&(g[t]=e,i=t);else{var r=t.name;g[r]=t,i=r}return!n&&i&&(m=i),i||!n&&m},y=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new v(n)},j=$;j.l=b,j.i=p,j.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var v=function(){function l(t){this.$L=b(t.locale,null,!0),this.parse(t)}var f=l.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(d);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return j},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return y(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<y(t)},f.$g=function(t,e,n){return j.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var d=this,h=!!j.u(o)||o,l=j.p(t),f=function(t,e){var n=j.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return h?n:n.endOf(r)},$=function(t,e){return j.w(d.toDate()[t].apply(d.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},m=this.$W,g=this.$M,p=this.$D,b="set"+(this.$u?"UTC":"");switch(l){case c:return h?f(1,0):f(31,11);case a:return h?f(1,g):f(0,g+1);case s:var y=this.$locale().weekStart||0,v=(m<y?m+7:m)-y;return f(h?p-v:p+(6-v),g);case r:case u:return $(b+"Hours",0);case i:return $(b+"Minutes",1);case n:return $(b+"Seconds",2);case e:return $(b+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var d,h=j.p(s),l="set"+(this.$u?"UTC":""),f=(d={},d[r]=l+"Date",d[u]=l+"Date",d[a]=l+"Month",d[c]=l+"FullYear",d[i]=l+"Hours",d[n]=l+"Minutes",d[e]=l+"Seconds",d[t]=l+"Milliseconds",d)[h],$=h===r?this.$D+(o-this.$W):o;if(h===a||h===c){var m=this.clone().set(u,1);m.$d[f]($),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[j.p(t)]()},f.add=function(t,o){var u,d=this;t=Number(t);var h=j.p(o),l=function(e){var n=y(d);return j.w(n.date(n.date()+Math.round(e*t)),d)};if(h===a)return this.set(a,this.$M+t);if(h===c)return this.set(c,this.$y+t);if(h===r)return l(1);if(h===s)return l(7);var f=(u={},u[n]=6e4,u[i]=36e5,u[e]=1e3,u)[h]||1,$=this.$d.getTime()+t*f;return j.w($,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=j.z(this),r=this.$locale(),s=this.$H,a=this.$m,o=this.$M,c=r.weekdays,u=r.months,d=function(t,i,r,s){return t&&(t[i]||t(e,n))||r[i].substr(0,s)},l=function(t){return j.s(s%12||12,t,"0")},f=r.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:j.s(o+1,2,"0"),MMM:d(r.monthsShort,o,u,3),MMMM:d(u,o),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,c,2),ddd:d(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:j.s(s,2,"0"),h:l(1),hh:l(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:j.s(a,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:i};return n.replace(h,(function(t,e){return e||$[t]||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,u,d){var h,l=j.p(u),f=y(t),$=6e4*(f.utcOffset()-this.utcOffset()),m=this-f,g=j.m(this,f);return g=(h={},h[c]=g/12,h[a]=g,h[o]=g/3,h[s]=(m-$)/6048e5,h[r]=(m-$)/864e5,h[i]=m/36e5,h[n]=m/6e4,h[e]=m/1e3,h)[l]||m,d?g:j.a(g)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return g[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},f.clone=function(){return j.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},l}(),M=v.prototype;return y.prototype=M,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",r],["$M",a],["$y",c],["$D",u]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),y.extend=function(t,e){return t.$i||(t(e,v,y),t.$i=!0),y},y.locale=b,y.isDayjs=p,y.unix=function(t){return y(1e3*t)},y.en=g[m],y.Ls=g,y.p={},y}()}}]);
//# sourceMappingURL=7.79738854.chunk.js.map