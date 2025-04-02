import{c as z,_ as y}from"./createLucideIcon-DB3gKnX-.js";import{u as O,_ as U,a as j,b,c as w,d as B,g as K,e as A,f as T,h as L,i as H,j as J,F as D}from"./index-Dm_HLB0U.js";import{v}from"./utils-DTaVIxUI.js";import{_ as G}from"./InquiryModal.vue_vue_type_script_setup_true_lang-CFsZugMr.js";import{f as Q,s as i,x as W,o as l,g as c,b as g,a as o,w as s,u as t,F as m,v as h,c as f,d as x,y as X,z as d,h as F,t as Y}from"./app-CpNEOMge.js";/**
 * @license lucide-vue-next v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=z("ArrowUpDownIcon",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]),Z={class:"w-full border border-gray-300 rounded-lg overflow-hidden shadow-md p-4"},ee={class:"rounded-md border"},te={class:"flex items-center justify-end space-x-2 py-4"},ae={class:"space-x-2"},de=Q({__name:"Inquiries",setup(se){const C=i([]),k=i(!1),p=i(null),P=e=>e?new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(e)):"-",R=async()=>{try{const e=await X.get("/api/inquiries");C.value=e.data.inquiries,p.value&&(p.value=C.value.find(({id:a})=>a===p.value.id)||null)}catch(e){console.error("Error fetching inquiries:",e)}};W(()=>{R()});const E=e=>{p.value=e.original,k.value=!0},M=[{accessorKey:"name",header:"Name",cell:({row:e})=>d("div",{class:"capitalize"},e.getValue("name"))},{accessorKey:"email",header:"Email",cell:({row:e})=>d("div",{class:"lowercase"},e.getValue("email"))},{accessorKey:"status",header:({column:e})=>d(y,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc")},()=>["Status",d(N,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>d("div",{class:"capitalize"},e.getValue("status"))},{accessorKey:"created_at",header:({column:e})=>d(y,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc")},()=>["Date",d(N,{class:"ml-2 h-4 w-4"})]),cell:({row:e})=>d("div",{},P(e.getValue("created_at")))}],S=i([]),V=i([]),q=i({}),I=i({}),$=i({}),u=O({data:C,columns:M,getCoreRowModel:K(),getPaginationRowModel:A(),getSortedRowModel:T(),getFilteredRowModel:L(),getExpandedRowModel:H(),onSortingChange:e=>v(e,S),onColumnFiltersChange:e=>v(e,V),onColumnVisibilityChange:e=>v(e,q),onRowSelectionChange:e=>v(e,I),onExpandedChange:e=>v(e,$),state:{get sorting(){return S.value},get columnFilters(){return V.value},get columnVisibility(){return q.value},get rowSelection(){return I.value},get expanded(){return $.value}}});return(e,a)=>(l(),c(m,null,[g("div",Z,[a[6]||(a[6]=g("div",{class:"flex justify-between items-center mb-4"},[g("h2",{class:"text-lg font-semibold"},"Inquiries")],-1)),g("div",ee,[o(t(B),null,{default:s(()=>[o(t(U),null,{default:s(()=>[(l(!0),c(m,null,h(t(u).getHeaderGroups(),r=>(l(),f(t(w),{key:r.id},{default:s(()=>[(l(!0),c(m,null,h(r.headers,n=>(l(),f(t(J),{key:n.id},{default:s(()=>[n.isPlaceholder?F("",!0):(l(),f(t(D),{key:0,render:n.column.columnDef.header,props:n.getContext()},null,8,["render","props"]))]),_:2},1024))),128))]),_:2},1024))),128))]),_:1}),o(t(j),null,{default:s(()=>{var r;return[(r=t(u).getRowModel().rows)!=null&&r.length?(l(!0),c(m,{key:0},h(t(u).getRowModel().rows,n=>(l(),c(m,{key:n.id},[o(t(w),{"data-state":n.getIsSelected()&&"selected",onClick:_=>E(n)},{default:s(()=>[(l(!0),c(m,null,h(n.getVisibleCells(),_=>(l(),f(t(b),{key:_.id},{default:s(()=>[o(t(D),{render:_.column.columnDef.cell,props:_.getContext()},null,8,["render","props"])]),_:2},1024))),128))]),_:2},1032,["data-state","onClick"]),n.getIsExpanded()?(l(),f(t(w),{key:0},{default:s(()=>[o(t(b),{colspan:n.getAllCells().length},{default:s(()=>[x(Y(JSON.stringify(n.original)),1)]),_:2},1032,["colspan"])]),_:2},1024)):F("",!0)],64))),128)):(l(),f(t(w),{key:1},{default:s(()=>[o(t(b),{colspan:M.length,class:"h-24 text-center"},{default:s(()=>a[3]||(a[3]=[x(" No results. ")])),_:1},8,["colspan"])]),_:1}))]}),_:1})]),_:1})]),g("div",te,[g("div",ae,[o(t(y),{variant:"outline",size:"sm",disabled:!t(u).getCanPreviousPage(),onClick:a[0]||(a[0]=r=>t(u).previousPage())},{default:s(()=>a[4]||(a[4]=[x("Previous")])),_:1},8,["disabled"]),o(t(y),{variant:"outline",size:"sm",disabled:!t(u).getCanNextPage(),onClick:a[1]||(a[1]=r=>t(u).nextPage())},{default:s(()=>a[5]||(a[5]=[x("Next")])),_:1},8,["disabled"])])])]),o(G,{isOpen:k.value,inquiry:p.value,"onUpdate:isOpen":a[2]||(a[2]=r=>k.value=r),onRefreshInquiries:R},null,8,["isOpen","inquiry"])],64))}});export{de as _};
