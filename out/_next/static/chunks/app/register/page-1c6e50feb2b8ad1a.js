(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[454],{4744:()=>{},310:()=>{},5208:()=>{},9890:(e,s,t)=>{Promise.resolve().then(t.bind(t,3929))},3929:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>m});var a=t(5155),l=t(2115),i=t(2651),n=t(6046),r=t(2451),o=t.n(r);function m(){(0,n.useRouter)();let[e,s]=(0,l.useState)(!1),[t,r]=(0,l.useState)({email:"",password:"",firstName:"",lastName:""}),[m,c]=(0,l.useState)(),d=e=>{r(s=>({...s,[e.target.name]:e.target.value}))};(0,l.useEffect)(()=>{u()},[]),(0,l.useEffect)(()=>{console.log(t)},[t]);let g=async()=>{try{console.log("subm",t),p(x(t,m))}catch(e){console.log(e.message)}},u=async()=>{let e=await fetch("https://api.ahimsapure.com//api/v1/files/applicationpublickey").then(e=>{if(e.ok)return e.text();throw Error("Network response was not ok")});console.log("response",e),c(e);let s=o().pki.publicKeyFromPem(e).encrypt("Hello, this is a secret message!");return console.log("Encrypted Message (Base64):",o().util.encode64(s)),e},x=async(e,s)=>{try{let t=JSON.stringify(e);console.log("Data to encrypt:",t);let a=o().pki.publicKeyFromPem(s),l=o().util.createBuffer(t,"utf8"),i=a.encrypt(l.getBytes(),"RSAES-PKCS1-V1_5");return o().util.encode64(i)}catch(e){console.error("Encryption error:",e)}},p=async e=>{try{console.log("registerfn encpt dt",e);let s=await i.A.post("https://api.ahimsapure.com//api/v1/auth/register",{payload:e},{headers:{"Content-Type":"application/json"}});console.log("Registration response:",s.data)}catch(e){var s;console.error("Error:",(null===(s=e.response)||void 0===s?void 0:s.data)||e.message)}};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"isolate bg-white px-6 py-24 sm:py-32 lg:px-8 relative",children:[(0,a.jsxs)("div",{className:"mx-auto max-w-2xl text-center",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Register"}),(0,a.jsx)("p",{className:"mt-2 text-lg leading-8 text-gray-600",children:"Sign up to Ahimsapure"})]}),(0,a.jsxs)("form",{onSubmit:e=>e.preventDefault(),action:"#",method:"POST",className:"mx-auto mt-16 max-w-xl sm:mt-20",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"first-name",className:"block text-sm font-semibold leading-6 text-gray-900",children:"First name"}),(0,a.jsx)("div",{className:"mt-2.5",children:(0,a.jsx)("input",{type:"text",name:"firstName",value:null==t?void 0:t.firstName,onChange:e=>{d(e)},id:"first_name",autoComplete:"given-name",className:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-sm font-semibold leading-6 text-gray-900",children:"Last name"}),(0,a.jsx)("div",{className:"mt-2.5",children:(0,a.jsx)("input",{type:"text",name:"lastName",id:"lastName",value:null==t?void 0:t.lastName,onChange:e=>{d(e)},autoComplete:"given-name",className:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,a.jsxs)("div",{className:"sm:col-span-2",children:[(0,a.jsx)("label",{htmlFor:"last-name",className:"block text-sm font-semibold leading-6 text-gray-900",children:"Email"}),(0,a.jsx)("div",{className:"mt-2.5",children:(0,a.jsx)("input",{type:"email",name:"email",id:"email",value:null==t?void 0:t.email,onChange:e=>{d(e)},autoComplete:"email",className:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,a.jsxs)("div",{className:"sm:col-span-2",children:[(0,a.jsx)("label",{htmlFor:"last-name",className:"block text-sm font-semibold leading-6 text-gray-900",children:"Password"}),(0,a.jsx)("div",{className:"mt-2.5",children:(0,a.jsx)("input",{type:"password",name:"password",onChange:e=>{d(e)},value:t.password,id:"password",autoComplete:"family-name",className:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]})]}),(0,a.jsx)("div",{className:"mt-10",children:(0,a.jsx)("button",{type:"submit",onClick:e=>{g(e)},className:"block w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Submit"})})]}),(0,a.jsxs)("p",{className:"mt-10 text-center text-sm text-gray-500",children:["Already registered?"," ",(0,a.jsx)("a",{href:"/login",className:"font-semibold leading-6 text-emerald-400 hover:text-indigo-500",children:"Sign in"})]})]})})}}},e=>{var s=s=>e(e.s=s);e.O(0,[164,441,517,358],()=>s(9890)),_N_E=e.O()}]);