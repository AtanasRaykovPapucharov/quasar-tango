import{c as u,h as a,a5 as s,n as l,g as c,a6 as d,i as f,a7 as m}from"./index.4496cd08.js";import{k as g}from"./QBtn.774e6d9a.js";const k={dark:{type:Boolean,default:null}};function T(t,e){return u(()=>t.dark===null?e.dark.isActive:t.dark)}const w={name:String};function A(t={}){return(e,r,n)=>{e[r](a("input",{class:"hidden"+(n||""),...t.value}))}}function b(){let t=null;const e=c();function r(){t!==null&&(clearTimeout(t),t=null)}return s(r),l(r),{removeTimeout:r,registerTimeout(n,i){r(),g(e)===!1&&(t=setTimeout(()=>{t=null,n()},i))}}}const o={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},v=Object.keys(o);o.all=!0;function D(t){const e={};for(const r of v)t[r]===!0&&(e[r]=!0);return Object.keys(e).length===0?o:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}const p=["INPUT","TEXTAREA"];function R(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&p.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}function S(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),d.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function j(){return f(m)}export{k as a,w as b,A as c,S as d,b as e,j as f,D as g,R as s,T as u};