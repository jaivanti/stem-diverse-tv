(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),c=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||a;return n?i.a.createElement(d,s(s({ref:t},u),{},{components:n})):i.a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(3),i=n(7),a=(n(0),n(112)),o={title:"Contributing Guidelines",slug:"/Contribution/contributing_guidelines"},s={unversionedId:"contributing_guidelines",id:"contributing_guidelines",isDocsHomePage:!1,title:"Contributing Guidelines",description:"* You can join us on AnitaB.org Open Source Zulip.  Each active repo has its own stream to direct questions to (for example #mentorship-system or #portal).  STEM-diverse-tv stream is #STEM-diverse-tv.",source:"@site/docs/contributing_guidelines.md",slug:"/Contribution/contributing_guidelines",permalink:"/stem-diverse-tv/docs/Contribution/contributing_guidelines",editUrl:"https://github.com/anitab-org/stem-diverse-tv/tree/master/docs/docs/contributing_guidelines.md",version:"current",sidebar:"docs",previous:{title:"Maintainer Guidelines",permalink:"/stem-diverse-tv/docs/Contribution/maintainer_guidelines"},next:{title:"Setup backend",permalink:"/stem-diverse-tv/docs/Guidelines/setup_backend"}},l=[{value:"General Guidelines",id:"general-guidelines",children:[]}],u={toc:l};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can join us on ",Object(a.b)("a",{parentName:"li",href:"https://anitab-org.zulipchat.com/"},"AnitaB.org Open Source Zulip"),".  Each active repo has its own stream to direct questions to (for example #mentorship-system or #portal).  STEM-diverse-tv stream is ",Object(a.b)("a",{parentName:"li",href:"https://anitab-org.zulipchat.com/#narrow/stream/225705-STEM-diverse-tv"},"#STEM-diverse-tv"),"."),Object(a.b)("li",{parentName:"ul"},"Remember that this is an inclusive community, committed to creating a safe, positive environment.  See the full ",Object(a.b)("a",{parentName:"li",href:"http://www.systers.io/code-of-conduct.html"},"Code of Conduct"),"."),Object(a.b)("li",{parentName:"ul"},"Follow our ",Object(a.b)("a",{parentName:"li",href:"https://github.com/anitab-org/mentorship-android/wiki/Commit-Message-Style-Guide"},"Commit Message Style Guide")," when you commit your changes."),Object(a.b)("li",{parentName:"ul"},"Please consider raising an issue before submitting a pull request (PR) to solve a problem that is not present in our ",Object(a.b)("a",{parentName:"li",href:"https://github.com/anitab-org/stem-diverse-tv-backend/issues"},"issue tracker"),". This allows maintainers to first validate the issue you are trying to solve and also reference the PR to a specific issue."),Object(a.b)("li",{parentName:"ul"},"When developing a new feature, include at least one test when applicable."),Object(a.b)("li",{parentName:"ul"},"When submitting a PR, please follow ",Object(a.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/anitab-org/stem-diverse-tv/master/.github/PULL_REQUEST_TEMPLATE.md"},"this template")," (which will probably be already filled up once you create the PR)."),Object(a.b)("li",{parentName:"ul"},"When submitting a PR with changes to user interface (e.g.: new screen, ...), please add screenshots to the PR description."),Object(a.b)("li",{parentName:"ul"},"Before committing your changes, ",Object(a.b)("strong",{parentName:"li"},"apply")," black auto-format - ",Object(a.b)("inlineCode",{parentName:"li"},"black {name_of_the_file.py}")," for specific file or ",Object(a.b)("inlineCode",{parentName:"li"},"black .")," to reformat all files"),Object(a.b)("li",{parentName:"ul"},"When you are finished with your work, please squash your commits otherwise we will squash them on your PR (this can help us maintain a clear commit history). "),Object(a.b)("li",{parentName:"ul"},"When creating an issue to report a bug in the project, please follow our ",Object(a.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/anitab-org/stem-diverse-tv/master/.github/ISSUE_TEMPLATE/bug_report.md"},"bug_report.md")," template."),Object(a.b)("li",{parentName:"ul"},"Issues labeled as \u201cFirst Timers Only\u201d are meant for contributors who have not contributed to the project yet. Please choose other issues to contribute to, if you have already contributed to these type of issues.")),Object(a.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If you\u2019re just getting started work on an issue labeled \u201cFirst Timers Only\u201d in any project. Additional resources are available on our ",Object(a.b)("a",{parentName:"li",href:"http://www.systers.io"},"website"),"."),Object(a.b)("li",{parentName:"ul"},"In an active repository (not an archived one), choose an open issue from the issue list, claim it in the comments, and a maintainer will assign it to you.  "),Object(a.b)("li",{parentName:"ul"},"After approval you must make continuous notes on your progress in the issue while working.  If there is not at least one comment every 3 days, the maintainer can reassign the issue."),Object(a.b)("li",{parentName:"ul"},"Create a branch specific to the issue you're working on, so that you send a PR from that branch instead of the base branch on your fork."),Object(a.b)("li",{parentName:"ul"},"If you\u2019d like to create a new issue, please go through our issue list first (open as well as closed) and make sure the issues you are reporting do not replicate the existing issues. "),Object(a.b)("li",{parentName:"ul"},"Have a short description on what has gone wrong (like a root cause analysis and description of the fix), if that information is not already present in the issue."),Object(a.b)("li",{parentName:"ul"},"If you have issues on multiple pages, report them separately. Do not combine them into a single issue.")))}c.isMDXComponent=!0}}]);