(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||s[b]||i;return n?a.a.createElement(m,o(o({ref:t},u),{},{components:n})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(112)),c={title:"Client Expected Payload",slug:"/Backend/client_expected_payload"},o={unversionedId:"client_expected_payload",id:"client_expected_payload",isDocsHomePage:!1,title:"Client Expected Payload",description:"Frontend requirements:",source:"@site/docs/client_expected_payload.md",slug:"/Backend/client_expected_payload",permalink:"/stem-diverse-tv/docs/Backend/client_expected_payload",editUrl:"https://github.com/anitab-org/stem-diverse-tv/tree/master/docs/docs/client_expected_payload.md",version:"current",sidebar:"docs",previous:{title:"Database Design",permalink:"/stem-diverse-tv/docs/Backend/database_design"},next:{title:"Tech Stack",permalink:"/stem-diverse-tv/docs/Backend/tech_stack"}},l=[{value:"Applicaster frontend require specific data structure to be provided by backend:",id:"applicaster-frontend-require-specific-data-structure-to-be-provided-by-backend",children:[{value:"Category structure:",id:"category-structure",children:[]},{value:"Section structure:",id:"section-structure",children:[]}]}],u={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"frontend-requirements"},"Frontend requirements:"),Object(i.b)("p",null,"STEM Diverse TV is a backend project which provides informations for our frontend. Frontend build using Applicaster App Builder and it support 8 platforms:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Android mobile"),Object(i.b)("li",{parentName:"ul"},"iOS"),Object(i.b)("li",{parentName:"ul"},"Android TV"),Object(i.b)("li",{parentName:"ul"},"Amazon Fire"),Object(i.b)("li",{parentName:"ul"},"TvOS"),Object(i.b)("li",{parentName:"ul"},"Samsung"),Object(i.b)("li",{parentName:"ul"},"LG"),Object(i.b)("li",{parentName:"ul"},"Roku")),Object(i.b)("h2",{id:"applicaster-frontend-require-specific-data-structure-to-be-provided-by-backend"},"Applicaster frontend require specific data structure to be provided by backend:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"url")," in ",Object(i.b)("inlineCode",{parentName:"p"},"entry.content.src")," is Base64 url to section."),Object(i.b)("h3",{id:"category-structure"},"Category structure:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  "type": {\n    "value": "feed"\n  },\n  "title": "HOME",\n  "id": "HOMEId",\n  "entry": [\n    {\n      "type": {\n        "value": "feed"\n      },\n      "title": "HOME",\n      "id": "search",\n      "content": {\n        "type": "feed",\n        "src": "general-provider://fetchData?type=FEED_JSON&url=aHR0cHM6Ly9kbC5kcm9wYm94LmNvbS9zLzlpcWdscTFsbTJ5bzFhei9pbmxpbmVwbGF5ZXIuanNvbj9kbD0w"\n      }\n    },\n    {\n      "type": {\n        "value": "feed"\n      },\n      "title": "HOME2",\n      "id": "search2",\n      "content": {\n        "type": "feed",\n        "src": "general-provider://fetchData?type=FEED_JSON&url=aHR0cHM6Ly9kbC5kcm9wYm94LmNvbS9zL3hoc202cjl2NmVnc2M5dC9lbGJlX2ZlZWQuanNvbj9kbD0w"\n      }\n    }\n  ]\n}\n')),Object(i.b)("h3",{id:"section-structure"},"Section structure:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  "type": { "value": "feed" },\n  "author": { "name": "STEM DIVERSE TV" },\n  "id": "NSB-03",\n  "title": "LATEST",\n  "media_group": [],\n  "entry": [\n    {\n      "author": { "name": "SAS Software" },\n      "type": { "value": "video" },\n      "id": "NSBT-0001",\n      "title": "STEM Career Showcase for Students with Disabilities 2017",\n      "summary": "Students with disabilities meet and learn from successful STEM role models with similar disabilities at the North Carolina Museum of Natural Sciences.",\n      "published": "2005-04-06T20:25:05-08:00",\n      "updated": "2005-04-06T20:25:05-08:00",\n      "content": {\n        "src": "https://www.youtube.com/watch?v=AsAvCVAiqJo",\n        "type": "video/hls"\n      },\n      "link": { "type": "link", "href": "" },\n      "media_group": [\n        {\n          "type": "image",\n          "media_item": [\n            {\n              "key": "image_base",\n              "src": "http://i3.ytimg.com/vi/AsAvCVAiqJo/maxresdefault.jpg",\n              "type": "extern_image"\n            }\n          ]\n        }\n      ],\n      "extensions": { "section": "None" }\n    }\n  ]\n}\n')),Object(i.b)("p",null,"Custom data can be provided in extensions."))}d.isMDXComponent=!0}}]);