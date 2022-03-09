"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[243],{2808:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],i={id:"response-type",title:"Data response type",description:"Introduction to the response type inside DEPA"},s=void 0,m={unversionedId:"consent-artefact/response-type",id:"consent-artefact/response-type",title:"Data response type",description:"Introduction to the response type inside DEPA",source:"@site/internal/learn/consent-artefact/response-type.md",sourceDirName:"consent-artefact",slug:"/consent-artefact/response-type",permalink:"/learn/consent-artefact/response-type",editUrl:"https://github.com/depa-world/docs/main/internal/learn/consent-artefact/response-type.md",tags:[],version:"current",lastUpdatedAt:1646839958,formattedLastUpdatedAt:"3/9/2022",frontMatter:{id:"response-type",title:"Data response type",description:"Introduction to the response type inside DEPA"},sidebar:"learn",previous:{title:"Data request type",permalink:"/learn/consent-artefact/request-type"},next:{title:"Ecosystem and network",permalink:"/learn/networks/ecosystem-and-network"}},l=[{value:"Data response structure",id:"data-response-structure",children:[],level:3}],c={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"data-response-structure"},"Data response structure"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Headers"),"\nAll header fields defined here in the Data-response are mandatory. Apart from these custom headers can be added which the network can agree upon:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"req-id")),"\n",(0,o.kt)("em",{parentName:"p"}," An id of the data request for which this response is."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"schema-name")),"\n",(0,o.kt)("em",{parentName:"p"}," The schema name of the data-response. This is to identify the schema provided by the network. For a collision free naming we suggest to have the schema name of the format ","<","gateway-prefix>.","<","schema-name>"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"schema-version")),"\n",(0,o.kt)("em",{parentName:"p"}," The schema version identifier."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"content-type")),"\n",(0,o.kt)("em",{parentName:"p"}," The content-type of the data-response body. This can be of the form text/json, text/xml, application/pdf, image/jpeg etc.. This is similar to the Content-Type header defined in the RFC 7231."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"body-encrypted"),"\n",(0,o.kt)("em",{parentName:"p"}," Tell if the body of the response is encrypted."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"key"),"\n",(0,o.kt)("em",{parentName:"p"},"The key used to encrypt the body. This is in JWK format."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"multi-part")),"\n",(0,o.kt)("em",{parentName:"p"},"Is this a multi part response."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"part-no")),"\n",(0,o.kt)("em",{parentName:"p"},"Sequence no of the part which is fetched."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"total-parts")),"\n",(0,o.kt)("em",{parentName:"p"},"Total no of parts which are available."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"total-size-in-bytes")),"\n",(0,o.kt)("em",{parentName:"p"},"Size of the total data to be shared."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"part-size-in-bytes")),"\n",(0,o.kt)("em",{parentName:"p"},"Size of the data shared."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Body"),"\nThis is the data which gets shared")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Signature"),"\nThe signature of data-response in the JWS format."))),(0,o.kt)("p",null,"For the above data type the DP can provide the response in any of the defined content types, like text/JSON would give the txn details in the JSON format and application/pdf would share the txn details in the pdf format. It is suggested that DP model their systems to provide the results in text/JSON or text/xml format as they are more machine friendly. Some data types may or may not support application/pdf, image/png etc for backward compatibility."),(0,o.kt)("p",null,"Similarly in the case of health domain FHIR data exchange standards are accepted internationally and can be used as data type with DEPA."))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var m=2;m<o;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);