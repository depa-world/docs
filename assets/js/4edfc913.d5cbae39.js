"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[569],{6034:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={title:"Entities",description:"Describing the entities in the architecture and their responsibilities"},l="Entities and their responsibilites",c={unversionedId:"about-depa/entities",id:"about-depa/entities",title:"Entities",description:"Describing the entities in the architecture and their responsibilities",source:"@site/internal/learn/about-depa/entities.md",sourceDirName:"about-depa",slug:"/about-depa/entities",permalink:"/learn/about-depa/entities",editUrl:"https://github.com/depa-world/docs/main/internal/learn/about-depa/entities.md",tags:[],version:"current",lastUpdatedAt:1646839958,formattedLastUpdatedAt:"3/9/2022",frontMatter:{title:"Entities",description:"Describing the entities in the architecture and their responsibilities"},sidebar:"learn",previous:{title:"ORGANS principles",permalink:"/learn/about-depa/organs-principles"},next:{title:"Actions",permalink:"/learn/about-depa/depa-actions"}},p=[{value:"1. Consent Manager (CM)",id:"1-consent-manager-cm",children:[],level:3},{value:"2. Data Provider (DP)",id:"2-data-provider-dp",children:[],level:3},{value:"3. Data Consumer (DC)",id:"3-data-consumer-dc",children:[],level:3}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"entities-and-their-responsibilites"},"Entities and their responsibilites"),(0,r.kt)("h3",{id:"1-consent-manager-cm"},"1. Consent Manager (CM)"),(0,r.kt)("p",null,"Consent managers are neutral, regulated, user-facing utilities whose primary role is to collect consent from users for sharing data from DPs to DCs. Other than enabling consent collection and providing the desired user interface for it, CMs has the following crucial responsibilities in our architecture which are listed below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User on-boarding"),": have an on-boarding process for the users. There are no technical specifications around this but CMs have the freedom to define this on their own. The end goal is to give a user an id for its identification which will be in the form of user@","<","cm domain>.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Discovery of DPs"),": CMs help users\u2019 discover the DPs. CM enables this by using the APIs exposed by the gateway to search for the DPs based on multiple criteria. The meta-information about the DPs is maintained by the gateways in the registry.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Linking of DPs"),": CM enables linking of DPs with users' CM account. The process of linking involves linking of accounts which the user maintains with the DP.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Consent lifecycle management"),": CMs manage the lifecycle of consent artefacts, including activities like revocation and pausing of consent.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Consent-related notifications"),": CMs notify users, DCs, DPs and gateway about key consent-related events like consent granted/revoked/paused. CMs also receive notifications from DU / DP systems about events in the data flow e.g., notifications indicating transmission or receipt of data, and maintain a record of such events for the benefit of the user."))),(0,r.kt)("p",null,"By design, CMs never get access to shared data, whether encrypted or raw. This ensures that entities who play the role of a CM are not incentivized by a need to aggregate user information and instead, are motivated to provide safe and reliable consent management services to the user. Overall, CMs are one of our main mechanisms for ensuring user centricity of our architecture."),(0,r.kt)("h3",{id:"2-data-provider-dp"},"2. Data Provider (DP)"),(0,r.kt)("p",null,"Data Providers are the data custodians of Data Principal and already hold a relationship for providing some services to the Data Principal. With in the DEPA ecosystem a DP will have the following responsibilities"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Linking with CM")," : A link between the DP and the CM can be initiated by either of the parties. DP should provide a suitable interface for Users to initiate the linking with a CM."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Consent Validation"),": A DP should validate the consent by verifying the signature received as part of the Consent Artifact. Post this only DP should go ahead with data preparation and sharing of data with DC."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Preparation"),": DP should prepare the data which can be fetched later by the DC as per the consent shared by the CM. This preparation phase can include fetching the data from archival and doing appropriate processing before making it available for DC."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Notifications")," : A DP should send DataTx Notifications to gateway and CM to inform about the status of the data transfer.")),(0,r.kt)("h3",{id:"3-data-consumer-dc"},"3. Data Consumer (DC)"),(0,r.kt)("p",null,"A data consumer within DEPA ecosystem will have the following responsibilities:-"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Consent Request initiation"),": DC to initiate the consent request based on the data requirement of the services being offered to the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data fetching")," : DC\u2019s will do the fetching of requested data post a user's consent is shared by the CM."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Notifications")," : DC should publish notifications on receiving data. These notifications will be published to CM and the gateway."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data purpose")," : DC should restrict itself to use the data only for the purpose mentioned.")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);