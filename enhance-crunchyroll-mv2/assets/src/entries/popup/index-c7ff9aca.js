import{s as x,n as N,a as P,S as F,i as G,e as m,b as y,c as u,d as k,f as _,g as w,h as z,j as De,t as O,k as ee,l as te,m as H,o as B,p as qe,q as Le,u as Ae,r as Me,v as Ce,w as j,x as D,y as be,z as ke,A as J,B as Q,C as X,D as E,E as Ne,F as le,G as we,H as ye,I as $e}from"../../../index-16b32d61.js";import{e as S}from"../../../each-e59479a4.js";import{a as Oe}from"../../../downloads-1395e622.js";import{P as L,S as A,W as ne,D as se,g as Be,s as Ee}from"../../../settings-ec2c2194.js";function Pe(l){const e=l-1;return e*e*e+1}function W(l,{delay:e=0,duration:a=400,easing:n=Pe,x:s=0,y:i=0,opacity:t=0}={}){const o=getComputedStyle(l),r=+o.opacity,c=o.transform==="none"?"":o.transform,p=r*(1-t),[d,g]=x(s),[f,h]=x(i);return{delay:e,duration:a,easing:n,css:(v,b)=>`
			transform: ${c} translate(${(1-v)*d}${g}, ${(1-v)*f}${h});
			opacity: ${r-p*b}`}}const M=[];function Se(l,e=N){let a;const n=new Set;function s(o){if(P(l,o)&&(l=o,a)){const r=!M.length;for(const c of n)c[1](),M.push(c,l);if(r){for(let c=0;c<M.length;c+=2)M[c][0](M[c+1]);M.length=0}}}function i(o){s(o(l))}function t(o,r=N){const c=[o,r];return n.add(c),n.size===1&&(a=e(s,i)||N),o(l),()=>{n.delete(c),n.size===0&&a&&(a(),a=null)}}return{set:s,update:i,subscribe:t}}function ie(l,e=0){const a=l==0?0:Math.floor(Math.log(l)/Math.log(1024));return Number((l/Math.pow(1024,a)).toFixed(e))+" "+["B","KB","MB","GB"][a]}function ae(l,e,a){const n=l.slice();return n[4]=e[a],n}function oe(l){let e,a,n,s,i,t,o,r=l[4].title+"",c,p,d,g,f,h,v,b,$,I,R,T=ie(l[4].bytes,2)+"",U,Y,V,K,Z;function je(){return l[3](l[4])}return{c(){e=m("div"),a=m("div"),n=m("div"),s=m("img"),t=y(),o=m("p"),c=O(r),p=y(),d=m("div"),g=m("button"),g.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path></svg>',f=y(),h=m("div"),v=m("div"),b=m("div"),$=y(),I=m("div"),R=m("p"),U=O(T),Y=y(),V=m("hr"),ee(s.src,i=l[4].thumbnail)||u(s,"src",i),u(s,"alt",""),u(s,"class","svelte-1jqmbdr"),u(o,"class","svelte-1jqmbdr"),u(n,"class","download-details-main svelte-1jqmbdr"),u(g,"class","svelte-1jqmbdr"),u(d,"class","download-details-actions svelte-1jqmbdr"),u(a,"class","download-details svelte-1jqmbdr"),te(b,"width",l[4].currentSegment/l[4].totalSegments*100+"%"),u(b,"class","svelte-1jqmbdr"),u(v,"class","download-progress-bar svelte-1jqmbdr"),u(R,"class","svelte-1jqmbdr"),u(I,"class","download-progress-size svelte-1jqmbdr"),u(h,"class","download-progress svelte-1jqmbdr"),u(V,"class","svelte-1jqmbdr"),u(e,"class","download svelte-1jqmbdr")},m(C,q){k(C,e,q),_(e,a),_(a,n),_(n,s),_(n,t),_(n,o),_(o,c),_(a,p),_(a,d),_(d,g),_(e,f),_(e,h),_(h,v),_(v,b),_(h,$),_(h,I),_(I,R),_(R,U),_(e,Y),_(e,V),K||(Z=H(g,"click",je),K=!0)},p(C,q){l=C,q&1&&!ee(s.src,i=l[4].thumbnail)&&u(s,"src",i),q&1&&r!==(r=l[4].title+"")&&B(c,r),q&1&&te(b,"width",l[4].currentSegment/l[4].totalSegments*100+"%"),q&1&&T!==(T=ie(l[4].bytes,2)+"")&&B(U,T)},d(C){C&&w(e),K=!1,Z()}}}function re(l){let e;return{c(){e=m("div"),e.innerHTML="<p>No downloads</p>",u(e,"class","no-downloads svelte-1jqmbdr")},m(a,n){k(a,e,n)},d(a){a&&w(e)}}}function ze(l){let e,a,n=Object.keys(l[0]).length===0,s=S(Object.values(l[0])),i=[];for(let o=0;o<s.length;o+=1)i[o]=oe(ae(l,s,o));let t=n&&re();return{c(){e=m("div");for(let o=0;o<i.length;o+=1)i[o].c();a=y(),t&&t.c(),u(e,"class","container svelte-1jqmbdr")},m(o,r){k(o,e,r);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);_(e,a),t&&t.m(e,null)},p(o,[r]){if(r&5){s=S(Object.values(o[0]));let c;for(c=0;c<s.length;c+=1){const p=ae(o,s,c);i[c]?i[c].p(p,r):(i[c]=oe(p),i[c].c(),i[c].m(e,a))}for(;c<i.length;c+=1)i[c].d(1);i.length=s.length}r&1&&(n=Object.keys(o[0]).length===0),n?t||(t=re(),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:N,o:N,d(o){o&&w(e),z(i,o),t&&t.d()}}}function He(l,e,a){let n,s=Se({});De(l,s,o=>a(0,n=o));let i=[];return Oe(async o=>{if(o.currentSegment==o.totalSegments){delete n[o.id];return}qe(s,n[o.id]=o,n);const r=i.indexOf(o.id);if(r!=-1)return i.splice(r,1),delete n[o.id],!1}),[n,s,i,o=>i.push(o.id)]}class Ie extends F{constructor(e){super(),G(this,e,He,ze,P,{})}}function Re(l){let e,a,n,s,i,t,o,r;const c=l[3].default,p=Le(c,l,l[2],null);return{c(){e=m("details"),a=m("summary"),n=O(l[1]),s=y(),i=m("div"),p&&p.c(),u(a,"class","svelte-4ae7j3"),u(i,"class","svelte-4ae7j3"),u(e,"class","svelte-4ae7j3")},m(d,g){k(d,e,g),_(e,a),_(a,n),_(e,s),_(e,i),p&&p.m(i,null),e.open=l[0],t=!0,o||(r=H(e,"toggle",l[4]),o=!0)},p(d,[g]){(!t||g&2)&&B(n,d[1]),p&&p.p&&(!t||g&4)&&Ae(p,c,d,d[2],t?Ce(c,d[2],g,null):Me(d[2]),null),g&1&&(e.open=d[0])},i(d){t||(j(p,d),t=!0)},o(d){D(p,d),t=!1},d(d){d&&w(e),p&&p.d(d),o=!1,r()}}}function Te(l,e,a){let{$$slots:n={},$$scope:s}=e,{title:i}=e,{open:t=!0}=e;function o(){t=this.open,a(0,t)}return l.$$set=r=>{"title"in r&&a(1,i=r.title),"open"in r&&a(0,t=r.open),"$$scope"in r&&a(2,s=r.$$scope)},[t,i,s,n,o]}class We extends F{constructor(e){super(),G(this,e,Te,Re,P,{title:1,open:0})}}function ce(l,e,a){const n=l.slice();return n[4]=e[a],n}function ue(l,e,a){const n=l.slice();return n[7]=e[a],n}function fe(l,e,a){const n=l.slice();return n[10]=e[a],n}function de(l){let e,a,n,s,i;function t(...o){return l[1](l[7],...o)}return{c(){e=m("input"),u(e,"id",a=l[7].setting.key),u(e,"type","checkbox"),e.checked=n=E(l[7].value),u(e,"class","svelte-18033ow")},m(o,r){k(o,e,r),s||(i=H(e,"change",t),s=!0)},p(o,r){l=o,r&1&&a!==(a=l[7].setting.key)&&u(e,"id",a),r&1&&n!==(n=E(l[7].value))&&(e.checked=n)},d(o){o&&w(e),s=!1,i()}}}function _e(l){let e,a,n,s=S(l[7].values||[]),i=[];for(let t=0;t<s.length;t+=1)i[t]=me(fe(l,s,t));return{c(){e=m("tr"),a=m("table");for(let t=0;t<i.length;t+=1)i[t].c();n=y(),u(a,"class","svelte-18033ow"),u(e,"class","subtable svelte-18033ow")},m(t,o){k(t,e,o),_(e,a);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(a,null);_(e,n)},p(t,o){if(o&1){s=S(t[7].values||[]);let r;for(r=0;r<s.length;r+=1){const c=fe(t,s,r);i[r]?i[r].p(c,o):(i[r]=me(c),i[r].c(),i[r].m(a,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=s.length}},d(t){t&&w(e),z(i,t)}}}function me(l){let e,a,n,s=l[10].name+"",i,t,o,r,c,p,d,g,f,h;function v(...b){return l[2](l[7],l[10],...b)}return{c(){e=m("tr"),a=m("td"),n=m("label"),i=O(s),o=y(),r=m("td"),c=m("input"),g=y(),u(n,"for",t=`${l[7].setting.key}-${l[10].key}`),u(n,"class","svelte-18033ow"),u(a,"class","svelte-18033ow"),u(c,"id",p=`${l[7].setting.key}-${l[10].key}`),u(c,"type","checkbox"),c.checked=d=E(l[7].value)[l[10].key],u(c,"class","svelte-18033ow"),u(r,"class","svelte-18033ow"),u(e,"class","svelte-18033ow")},m(b,$){k(b,e,$),_(e,a),_(a,n),_(n,i),_(e,o),_(e,r),_(r,c),_(e,g),f||(h=H(c,"change",v),f=!0)},p(b,$){l=b,$&1&&s!==(s=l[10].name+"")&&B(i,s),$&1&&t!==(t=`${l[7].setting.key}-${l[10].key}`)&&u(n,"for",t),$&1&&p!==(p=`${l[7].setting.key}-${l[10].key}`)&&u(c,"id",p),$&1&&d!==(d=E(l[7].value)[l[10].key])&&(c.checked=d)},d(b){b&&w(e),f=!1,h()}}}function he(l){let e,a,n,s=l[7].name+"",i,t,o,r,c,p,d,g=typeof l[7].setting.default=="boolean"&&de(l),f=typeof l[7].setting.default=="object"&&_e(l);return{c(){e=m("tr"),a=m("td"),n=m("label"),i=O(s),r=y(),c=m("td"),g&&g.c(),p=y(),f&&f.c(),d=Ne(),u(n,"for",t=l[7].setting.key),u(n,"title",o=l[7].details),u(n,"class","svelte-18033ow"),u(a,"class","svelte-18033ow"),u(c,"class","svelte-18033ow"),u(e,"class","svelte-18033ow"),le(e,"subtable-label",typeof l[7].setting.default!="boolean")},m(h,v){k(h,e,v),_(e,a),_(a,n),_(n,i),_(e,r),_(e,c),g&&g.m(c,null),k(h,p,v),f&&f.m(h,v),k(h,d,v)},p(h,v){v&1&&s!==(s=h[7].name+"")&&B(i,s),v&1&&t!==(t=h[7].setting.key)&&u(n,"for",t),v&1&&o!==(o=h[7].details)&&u(n,"title",o),typeof h[7].setting.default=="boolean"?g?g.p(h,v):(g=de(h),g.c(),g.m(c,null)):g&&(g.d(1),g=null),v&1&&le(e,"subtable-label",typeof h[7].setting.default!="boolean"),typeof h[7].setting.default=="object"?f?f.p(h,v):(f=_e(h),f.c(),f.m(d.parentNode,d)):f&&(f.d(1),f=null)},d(h){h&&(w(e),w(p),w(d)),g&&g.d(),f&&f.d(h)}}}function Fe(l){let e,a=S(l[4].entries),n=[];for(let s=0;s<a.length;s+=1)n[s]=he(ue(l,a,s));return{c(){e=m("table");for(let s=0;s<n.length;s+=1)n[s].c();u(e,"class","svelte-18033ow")},m(s,i){k(s,e,i);for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,null)},p(s,i){if(i&1){a=S(s[4].entries);let t;for(t=0;t<a.length;t+=1){const o=ue(s,a,t);n[t]?n[t].p(o,i):(n[t]=he(o),n[t].c(),n[t].m(e,null))}for(;t<n.length;t+=1)n[t].d(1);n.length=a.length}},d(s){s&&w(e),z(n,s)}}}function ge(l){let e,a,n,s;return a=new We({props:{title:l[4].name,open:l[4].open,$$slots:{default:[Fe]},$$scope:{ctx:l}}}),{c(){e=m("div"),J(a.$$.fragment),n=y()},m(i,t){k(i,e,t),Q(a,e,null),_(e,n),s=!0},p(i,t){const o={};t&1&&(o.title=i[4].name),t&1&&(o.open=i[4].open),t&8193&&(o.$$scope={dirty:t,ctx:i}),a.$set(o)},i(i){s||(j(a.$$.fragment,i),s=!0)},o(i){D(a.$$.fragment,i),s=!1},d(i){i&&w(e),X(a)}}}function Ge(l){let e,a,n=S(l[0]),s=[];for(let t=0;t<n.length;t+=1)s[t]=ge(ce(l,n,t));const i=t=>D(s[t],1,1,()=>{s[t]=null});return{c(){e=m("div");for(let t=0;t<s.length;t+=1)s[t].c();u(e,"class","settings svelte-18033ow")},m(t,o){k(t,e,o);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(e,null);a=!0},p(t,[o]){if(o&1){n=S(t[0]);let r;for(r=0;r<n.length;r+=1){const c=ce(t,n,r);s[r]?(s[r].p(c,o),j(s[r],1)):(s[r]=ge(c),s[r].c(),j(s[r],1),s[r].m(e,null))}for(be(),r=n.length;r<s.length;r+=1)i(r);ke()}},i(t){if(!a){for(let o=0;o<n.length;o+=1)j(s[o]);a=!0}},o(t){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)D(s[o]);a=!1},d(t){t&&w(e),z(s,t)}}}function Ue(l,e,a){async function n(o){const r=Se(await Be(o));let c=!0;return r.subscribe(async p=>c?c=!1:await Ee(o,p)),r}let s=[];return(async()=>a(0,s=[{name:"Player",open:!0,entries:[{name:"Double click to maximize",details:"Shows the video player in fullscreen when double clicking it",setting:L.DoubleClickMaximize,value:await n(L.DoubleClickMaximize)},{name:"Disable stream limit",details:"Disable the max. parallel stream limit. With this enabled, the player may stop playing the video and show an error more often (a reload of the page fixes this)",setting:L.NoStreamLimit,value:await n(L.NoStreamLimit)},{name:"Default context menu",details:"Show the default context menu instead of the custom one when right clicking",setting:L.DefaultContextMenu,value:await n(L.DefaultContextMenu)}]},{name:"Series",open:!0,entries:[{name:"Show next episode airing date",details:"Show the date when the next episode of a series airs",setting:A.NextEpisodeAirDate,value:await n(A.NextEpisodeAirDate)},{name:"Relative episode numbers",details:"Show episode numbers relative to the season",setting:A.RelativeEpisodeNumber,value:await n(A.RelativeEpisodeNumber)},{name:"External anime list links",details:"Show links to external anime list/tracking websites",setting:A.AnimeListLinks,value:await n(A.AnimeListLinks),values:[{name:"AniList",key:"anilist"},{name:"MyAnimeList",key:"mal"}]}]},{name:"Watch",open:!0,entries:[{name:"External anime list links",details:"Show links to external anime list/tracking websites",setting:ne.AnimeListLinks,value:await n(ne.AnimeListLinks),values:[{name:"AniList",key:"anilist"},{name:"MyAnimeList",key:"mal"}]}]},{name:"Debug",open:!1,entries:[{name:"Show debug console download progress",details:"Show the video download progress in the extension debug console",setting:se.ShowConsoleDownloadProgress,value:await n(se.ShowConsoleDownloadProgress)}]}]))(),[s,(o,r)=>o.value.set(r.target.checked),(o,r,c)=>o.value.set({...E(o.value),[r.key]:c.target.checked})]}class Ve extends F{constructor(e){super(),G(this,e,Ue,Ge,P,{})}}function pe(l,e,a){const n=l.slice();return n[5]=e[a],n}function ve(l){let e,a,n;function s(){return l[4](l[5])}return{c(){e=m("button"),e.textContent=`${l[5]}`,u(e,"class","svelte-1cl460a")},m(i,t){k(i,e,t),a||(n=H(e,"click",s),a=!0)},p(i,t){l=i},d(i){i&&w(e),a=!1,n()}}}function Ke(l){let e,a,n,s,i;return a=new Ve({}),{c(){e=m("div"),J(a.$$.fragment),u(e,"class","svelte-1cl460a")},m(t,o){k(t,e,o),Q(a,e,null),i=!0},p(t,o){l=t},i(t){i||(j(a.$$.fragment,t),t&&we(()=>{i&&(s&&s.end(1),n=ye(e,W,l[1]),n.start())}),i=!0)},o(t){D(a.$$.fragment,t),n&&n.invalidate(),t&&(s=$e(e,W,l[2])),i=!1},d(t){t&&w(e),X(a),t&&s&&s.end()}}}function Je(l){let e,a,n,s,i;return a=new Ie({}),{c(){e=m("div"),J(a.$$.fragment),u(e,"class","svelte-1cl460a")},m(t,o){k(t,e,o),Q(a,e,null),i=!0},p(t,o){l=t},i(t){i||(j(a.$$.fragment,t),t&&we(()=>{i&&(s&&s.end(1),n=ye(e,W,l[1]),n.start())}),i=!0)},o(t){D(a.$$.fragment,t),n&&n.invalidate(),t&&(s=$e(e,W,l[2])),i=!1},d(t){t&&w(e),X(a),t&&s&&s.end()}}}function Qe(l){let e,a,n,s,i,t,o,r=S(l[3]),c=[];for(let f=0;f<r.length;f+=1)c[f]=ve(pe(l,r,f));const p=[Je,Ke],d=[];function g(f,h){return f[0]==="downloads"?0:f[0]==="settings"?1:-1}return~(i=g(l))&&(t=d[i]=p[i](l)),{c(){e=m("main"),a=m("nav");for(let f=0;f<c.length;f+=1)c[f].c();n=y(),s=m("div"),t&&t.c(),u(a,"class","svelte-1cl460a"),u(s,"class","main svelte-1cl460a"),u(e,"class","svelte-1cl460a")},m(f,h){k(f,e,h),_(e,a);for(let v=0;v<c.length;v+=1)c[v]&&c[v].m(a,null);_(e,n),_(e,s),~i&&d[i].m(s,null),o=!0},p(f,[h]){if(h&9){r=S(f[3]);let b;for(b=0;b<r.length;b+=1){const $=pe(f,r,b);c[b]?c[b].p($,h):(c[b]=ve($),c[b].c(),c[b].m(a,null))}for(;b<c.length;b+=1)c[b].d(1);c.length=r.length}let v=i;i=g(f),i===v?~i&&d[i].p(f,h):(t&&(be(),D(d[v],1,1,()=>{d[v]=null}),ke()),~i?(t=d[i],t?t.p(f,h):(t=d[i]=p[i](f),t.c()),j(t,1),t.m(s,null)):t=null)},i(f){o||(j(t),o=!0)},o(f){D(t),o=!1},d(f){f&&w(e),z(c,f),~i&&d[i].d()}}}function Xe(l,e,a){let n=["downloads","settings"],s=n[0],i,t;const o=r=>a(0,s=r);return l.$$.update=()=>{l.$$.dirty&1&&a(1,i={x:n.indexOf(s)==0?-200:200,duration:200}),l.$$.dirty&1&&a(2,t={x:n.indexOf(s)==0?200:-200,duration:200})},[s,i,t,n,o]}class Ye extends F{constructor(e){super(),G(this,e,Xe,Qe,P,{})}}new Ye({target:document.getElementById("app")});