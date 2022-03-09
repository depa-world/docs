"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20],{8563:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"consent-about",title:"About",description:"This page describes the concept of a Consent Artefact, key to DEPA."},c="Consent Artefact",p={unversionedId:"consent-artefact/consent-about",id:"consent-artefact/consent-about",title:"About",description:"This page describes the concept of a Consent Artefact, key to DEPA.",source:"@site/internal/learn/consent-artefact/consent-artefact.md",sourceDirName:"consent-artefact",slug:"/consent-artefact/",permalink:"/learn/consent-artefact/",editUrl:"https://github.com/depa-world/docs/main/internal/learn/consent-artefact/consent-artefact.md",tags:[],version:"current",lastUpdatedAt:1646839958,formattedLastUpdatedAt:"3/9/2022",frontMatter:{id:"consent-about",title:"About",description:"This page describes the concept of a Consent Artefact, key to DEPA."},sidebar:"learn",previous:{title:"Reciprocity",permalink:"/learn/about-depa/reciprocity"},next:{title:"Subscriptions and Notifications",permalink:"/learn/consent-artefact/subscriptions-notifications"}},l=[],m={toc:l};function f(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consent-artefact"},"Consent Artefact"),(0,o.kt)("p",null,"In our framework, consent is always electronically sought from the user and is captured using a document called the ",(0,o.kt)("em",{parentName:"p"},"Consent Artefact"),"."),(0,o.kt)("p",null,"Within DEPA, the network agrees on a common standard of the consent artefact which takes care of the use cases in that domain."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"consentArtifactTemplate",src:n(7063).Z,width:"408",height:"341"})),(0,o.kt)("p",null,"A consent artefact will have three components to it:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Headers"),": Provide information on how the body of the consent artefact should be parsed"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Headers")),"\n",(0,o.kt)("em",{parentName:"p"},"All header fields defined here are mandatory. Apart from these custom headers can be added."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"id")),"\n",(0,o.kt)("em",{parentName:"p"},"A unique id of the consent artifact. The uniqueness should be maintained by the CM system."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"schema-name")),"\n",(0,o.kt)("em",{parentName:"p"},"The schema name of the consent artifact. This is to identify the schema provided by the network. For a collision free naming we suggest to have the schema name of the format ","<","gateway-prefix>.","<","schema-name>"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"schema-version")),"\n",(0,o.kt)("em",{parentName:"p"},"The schema version identifier of the consent artifact."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"content-type")),"\n",(0,o.kt)("em",{parentName:"p"},"The content-type of the body. This can be either JSON / XML."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"date-time")),"\n",(0,o.kt)("em",{parentName:"p"},"The time when the consent artifact was generated."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"expiry-time")),"\n",(0,o.kt)("em",{parentName:"p"},"The expiry time of the consent artifact. I:e after this it should be considered invalid."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Body"),": contains the consent artefact details, and caters to the following:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Data Principal")," - mentions Data principal identifier who gave the consent. This section should not contain any PII information of the Data Principal. This will typically be the CM id issued by the Consent Manager to the Data Principal.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Data Request Details")," - This section tells the DP that this is what the consent has been given for. This section will clearly set the boundaries for data sharing.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Accounts")," - The Data Principal would choose the accounts from which he intends to share the requested data. This information needs to be provided for each of the data requests which the DC makes. Users may choose to provide the information from multiple accounts, in that case it's the responsibility of the DC to do the aggregation on the provided data sets if required. This section would contain the account ids provided by the DP at the time of linking and the LinkingToken as the proof of linking.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Signature"),": The signature of the consent artifact in the JWS format"))))}f.isMDXComponent=!0},7063:function(e,t,n){t.Z=n.p+"assets/images/consent-artefact-template-2e1864d8c8e68ab4b6c81216b4fdf547.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(n),h=r,u=f["".concat(c,".").concat(h)]||f[h]||m[h]||o;return n?a.createElement(u,i(i({ref:t},l),{},{components:n})):a.createElement(u,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);