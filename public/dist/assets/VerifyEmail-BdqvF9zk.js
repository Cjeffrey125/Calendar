import{C as c,i as g,c as p,w as o,o as n,a as i,u as t,m as y,b as a,g as v,h as b,d as r,n as x,P as h,e as k}from"./app-CpNEOMge.js";import{G as w}from"./GuestLayout-z7Xzwdkw.js";import{P as V}from"./PrimaryButton-CbHnWcNp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={key:0,class:"mb-4 font-medium text-sm text-green-600"},_={class:"mt-4 flex items-center justify-between"},L={__name:"VerifyEmail",props:{status:{type:String}},setup(u){const d=u,s=c({}),l=()=>{s.post(route("verification.send"))},m=g(()=>d.status==="verification-link-sent");return(f,e)=>(n(),p(w,null,{default:o(()=>[i(t(y),{title:"Email Verification"}),e[2]||(e[2]=a("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1)),m.value?(n(),v("div",B," A new verification link has been sent to the email address you provided during registration. ")):b("",!0),a("form",{onSubmit:k(l,["prevent"])},[a("div",_,[i(V,{class:x({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:o(()=>e[0]||(e[0]=[r(" Resend Verification Email ")])),_:1},8,["class","disabled"]),i(t(h),{href:f.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:o(()=>e[1]||(e[1]=[r("Log Out")])),_:1},8,["href"])])],32)]),_:1}))}};export{L as default};
