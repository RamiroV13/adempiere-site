"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[41255],{40950:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var s=t(78e3);const a=(0,s._)("p",null,"如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。",-1),r=(0,s.uE)('<h2 id="什么是类型推论" tabindex="-1"><a class="header-anchor" href="#什么是类型推论" aria-hidden="true">#</a> 什么是类型推论</h2><p>以下代码虽然没有指定类型，但是会在编译的时候报错:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，它等价于:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。</p><p><strong>如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 <code>any</code> 类型而完全不被类型检查</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',9),p={href:"http://www.typescriptlang.org/docs/handbook/type-inference.html",target:"_blank",rel:"noopener noreferrer"},o=(0,s.Uk)("Type Inference"),i=(0,s.Uk)("("),c={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html",target:"_blank",rel:"noopener noreferrer"},l=(0,s.Uk)("中文版"),d=(0,s.Uk)(")"),u={},m=(0,t(13860).Z)(u,[["render",function(e,n){const t=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[a,(0,s.kq)(" more "),r,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",p,[o,(0,s.Wm)(t)]),i,(0,s._)("a",c,[l,(0,s.Wm)(t)]),d])])])}]])},13860:(e,n)=>{n.Z=(e,n)=>{const t=e.__vccOpts||e;for(const[e,s]of n)t[e]=s;return t}},8630:(e,n,t)=>{t.r(n),t.d(n,{data:()=>s});const s={key:"v-697acf65",path:"/code/language/typescript/basics/type-inference.html",title:"类型推论",lang:"zh-CN",frontmatter:{title:"类型推论",icon:"extend",category:["TypeScript"],summary:"如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/typescript/basics/type-inference.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"类型推论"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2020-06-03T17:08:34.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2020-06-03T17:08:34.000Z"}]]},excerpt:"<p>如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。</p>\n",headers:[{level:2,title:"什么是类型推论",slug:"什么是类型推论",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],git:{createdTime:1591204114e3,updatedTime:1591204114e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:.69,words:206},filePathRelative:"code/language/typescript/basics/type-inference.md",localizedDate:"2020年6月3日"}}}]);