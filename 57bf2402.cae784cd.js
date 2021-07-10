(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return O}));var a=n(2),r=n(9),b=(n(0),n(198)),c={id:"infobox",title:"InfoBox",sidebar_label:"InfoBox"},i={id:"infobox",isDocsHomePage:!1,title:"InfoBox",description:"Used for displaying information.",source:"@site/docs/infobox.md",permalink:"/frontatish/docs/infobox",editUrl:"https://github.com/Groww/frontatish/edit/alpha/docs/documentation/docs/infobox.md",sidebar_label:"InfoBox"},o=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[{value:"label",id:"label",children:[]},{value:"backgroundColor",id:"backgroundcolor",children:[]},{value:"borderColor",id:"bordercolor",children:[]},{value:"icon",id:"icon",children:[]},{value:"style",id:"style",children:[]},{value:"textStyle",id:"textstyle",children:[]}]}],l={rightToc:o};function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Used for displaying information."),Object(b.b)("div",{className:"image-horizontal-preview"},Object(b.b)("figure",null,Object(b.b)("img",{src:"/frontatish/img/InfoBox.png",alt:"primary-button"}))),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// react base imports\n\nimport { InfoBox } from \'frontatish\';\n\n// without icon, and borders\n<InfoBox\n    label="Default"\n    backgroundColor="info"\n/>\n\n// with default icon: exclamationCircle\n<InfoBox\n    label="With default icon"\n    backgroundColor="warning"\n    icon\n/>\n\n// all the props\n<InfoBox\n    label="All props"\n    backgroundColor="success"\n    borderColor="warning"\n    style={{ marginTop: 20 }}\n    textStyle={{ color: \'#ff00c4\' }}\n/>\n')),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("h3",{id:"label"},"label"),Object(b.b)("p",null,"Label to display inside the info box"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"None ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"backgroundcolor"},"backgroundColor"),Object(b.b)("p",null,"Set background color from the values provided"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Values"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"info ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"info, success, warning, error, transparent ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"bordercolor"},"borderColor"),Object(b.b)("p",null,"Set border color from the values provided"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Values"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"info, success, warning, error ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"icon"},"icon"),Object(b.b)("p",null,"Set as true for an exclamationCircle icon, or pass any of the ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://oblador.github.io/react-native-vector-icons/"}),"AntDesign icon names")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Values"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean or string ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"false or exclamationCircle when true ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"true, false, iconName from AntDesign  ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"style"},"style"),Object(b.b)("p",null,"A react native style object which takes care of styling the InfoBox component as per your needs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ViewStyle ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))),Object(b.b)("h3",{id:"textstyle"},"textStyle"),Object(b.b)("p",null,"A react native style object which takes care of text styling as per your needs"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ViewStyle ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none ",Object(b.b)("img",{width:"500"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"No ",Object(b.b)("img",{width:"500"}))))))}O.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),O=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},j=function(e){var t=O(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),j=O(n),d=a,m=j["".concat(c,".").concat(d)]||j[d]||p[d]||b;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<b;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);