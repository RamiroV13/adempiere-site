"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[15392],{13125:(n,a,e)=>{e.r(a),e.d(a,{default:()=>k});var s=e(78e3);const t=(0,s._)("p",null,"类型别名用来给一个类型起个新名字。",-1),p=(0,s.uE)('<h2 id="简单的例子" tabindex="-1"><a class="header-anchor" href="#简单的例子" aria-hidden="true">#</a> 简单的例子</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token keyword">type</span> <span class="token class-name">NameResolver</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token keyword">type</span> <span class="token class-name">NameOrResolver</span> <span class="token operator">=</span> Name <span class="token operator">|</span> NameResolver<span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span>n<span class="token operator">:</span> NameOrResolver<span class="token punctuation">)</span><span class="token operator">:</span> Name <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> n<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">n</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，我们使用 <code>type</code> 创建类型别名。</p><p>类型别名常用于联合类型。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',5),o={href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases",target:"_blank",rel:"noopener noreferrer"},c=(0,s.Uk)("Advanced Types # Type Aliases"),l=(0,s.Uk)("("),r={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D",target:"_blank",rel:"noopener noreferrer"},i=(0,s.Uk)("中文版"),d=(0,s.Uk)(")"),u={},k=(0,e(13860).Z)(u,[["render",function(n,a){const e=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[t,(0,s.kq)(" more "),p,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",o,[c,(0,s.Wm)(e)]),l,(0,s._)("a",r,[i,(0,s.Wm)(e)]),d])])])}]])},13860:(n,a)=>{a.Z=(n,a)=>{const e=n.__vccOpts||n;for(const[n,s]of a)e[n]=s;return e}},56657:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s={key:"v-bdbcba86",path:"/code/language/typescript/advanced/type-aliases.html",title:"类型别名",lang:"zh-CN",frontmatter:{title:"类型别名",icon:"alias",category:["TypeScript"],summary:"类型别名用来给一个类型起个新名字。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/typescript/advanced/type-aliases.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"类型别名"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2020-06-03T17:08:34.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2020-06-03T17:08:34.000Z"}]]},excerpt:"<p>类型别名用来给一个类型起个新名字。</p>\n",headers:[{level:2,title:"简单的例子",slug:"简单的例子",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],git:{createdTime:1591204114e3,updatedTime:1591204114e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:.34,words:102},filePathRelative:"code/language/typescript/advanced/type-aliases.md",localizedDate:"2020年6月3日"}}}]);