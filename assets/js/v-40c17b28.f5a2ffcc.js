"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[81562],{86361:(n,s,a)=>{a.r(s),a.d(s,{default:()=>b});var e=a(78e3);const t=(0,e._)("p",null,"如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型:",-1),p=(0,e._)("h2",{id:"函数的合并",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#函数的合并","aria-hidden":"true"},"#"),(0,e.Uk)(" 函数的合并")],-1),o=(0,e.Uk)("之前学习过"),i=(0,e.Uk)("，我们可以使用重载定义多个函数类型:"),c=(0,e.uE)('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口的合并" tabindex="-1"><a class="header-anchor" href="#接口的合并" aria-hidden="true">#</a> 接口的合并</h2><p>接口中的属性在合并时会简单的合并到一个接口中:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相当于:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<strong>合并的属性的类型必须是唯一的</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 虽然重复了，但是类型都是 `number`，所以不会报错</span>\n  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  price<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 类型不一致，会报错</span>\n  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// index.ts(5,3): error TS2403: Subsequent variable declarations must have the same type.  Variable &#39;price&#39; must be of type &#39;number&#39;, but here has type &#39;string&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口中方法的合并，与函数的合并一样:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相当于:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>\n  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类的合并" tabindex="-1"><a class="header-anchor" href="#类的合并" aria-hidden="true">#</a> 类的合并</h2><p>类的合并与接口的合并规则一致。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',16),l={href:"http://www.typescriptlang.org/docs/handbook/declaration-merging.html",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("Declaration Merging"),u=(0,e.Uk)("("),k={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Declaration%20Merging.html",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Uk)("中文版"),m=(0,e.Uk)(")"),v={},b=(0,a(13860).Z)(v,[["render",function(n,s){const a=(0,e.up)("RouterLink"),v=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e.kq)(" more "),p,(0,e._)("p",null,[(0,e.Wm)(a,{to:"/code/language/typescript/basics/type-of-function.html#%E9%87%8D%E8%BD%BD"},{default:(0,e.w5)((()=>[o])),_:1}),i]),c,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",l,[r,(0,e.Wm)(v)]),u,(0,e._)("a",k,[d,(0,e.Wm)(v)]),m])])])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},72685:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-40c17b28",path:"/code/language/typescript/advanced/declaration-merging.html",title:"声明合并",lang:"zh-CN",frontmatter:{title:"声明合并",icon:"merge",category:["TypeScript"],summary:"如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型:\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/typescript/advanced/declaration-merging.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"声明合并"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-12T09:25:08.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2022-02-12T09:25:08.000Z"}]]},excerpt:"<p>如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型:</p>\n",headers:[{level:2,title:"函数的合并",slug:"函数的合并",children:[]},{level:2,title:"接口的合并",slug:"接口的合并",children:[]},{level:2,title:"类的合并",slug:"类的合并",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644657908e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:3}]},readingTime:{minutes:1.11,words:332},filePathRelative:"code/language/typescript/advanced/declaration-merging.md",localizedDate:"2020年6月3日"}}}]);