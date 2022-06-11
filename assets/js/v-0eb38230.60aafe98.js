"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[60581],{38515:(n,s,e)=>{e.r(s),e.d(s,{default:()=>q});var a=e(78e3);const t=(0,a.Uk)("JavaScript 中有很多"),p={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects",target:"_blank",rel:"noopener noreferrer"},o=(0,a.Uk)("内置对象"),c=(0,a.Uk)("，它们可以直接在 TypeScript 中当做定义好了的类型。"),i=(0,a._)("p",null,"内置对象是指根据标准在全局作用域(Global)上存在的对象。这里的标准是指 ECMAScript 和其他环境(比如 DOM)的标准。",-1),r=(0,a.uE)('<h2 id="ecmascript-的内置对象" tabindex="-1"><a class="header-anchor" href="#ecmascript-的内置对象" aria-hidden="true">#</a> ECMAScript 的内置对象</h2><p>ECMAScript 标准提供的内置对象有:</p><p><code>Boolean</code>、<code>Error</code>、<code>Date</code>、<code>RegExp</code> 等。</p><p>我们可以在 TypeScript 中将变量定义为这些类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> b<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> e<span class="token operator">:</span> Error <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Error occurred&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> d<span class="token operator">:</span> Date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> r<span class="token operator">:</span> RegExp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),l=(0,a.Uk)("更多的内置对象，可以查看 "),u={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects",target:"_blank",rel:"noopener noreferrer"},d=(0,a.Uk)("MDN 的文档"),k=(0,a.Uk)("。"),m=(0,a.Uk)("而他们的定义文件，则在 "),v={href:"https://github.com/Microsoft/TypeScript/tree/master/src/lib",target:"_blank",rel:"noopener noreferrer"},b=(0,a.Uk)("TypeScript 核心库的定义文件"),g=(0,a.Uk)("中。"),h=(0,a.uE)('<h2 id="dom-和-bom-的内置对象" tabindex="-1"><a class="header-anchor" href="#dom-和-bom-的内置对象" aria-hidden="true">#</a> DOM 和 BOM 的内置对象</h2><p>DOM 和 BOM 提供的内置对象有:</p><p><code>Document</code>、<code>HTMLElement</code>、<code>Event</code>、<code>NodeList</code> 等。</p><p>TypeScript 中会经常用到这些类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> body<span class="token operator">:</span> HTMLElement <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>\n<span class="token keyword">let</span> allDiv<span class="token operator">:</span> NodeList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ndocument<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Do something</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),y=(0,a.Uk)("它们的定义文件同样在 "),f={href:"https://github.com/Microsoft/TypeScript/tree/master/src/lib",target:"_blank",rel:"noopener noreferrer"},S=(0,a.Uk)("TypeScript 核心库的定义文件"),M=(0,a.Uk)("中。"),T=(0,a._)("h2",{id:"typescript-核心库的定义文件",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#typescript-核心库的定义文件","aria-hidden":"true"},"#"),(0,a.Uk)(" TypeScript 核心库的定义文件")],-1),_={href:"https://github.com/Microsoft/TypeScript/tree/master/src/lib",target:"_blank",rel:"noopener noreferrer"},x=(0,a.Uk)("TypeScript 核心库的定义文件"),w=(0,a.Uk)("中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。"),E=(0,a.uE)('<p>当您在使用一些常用的方法的时候，TypeScript 实际上已经帮您做了很多类型判断的工作了，比如:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(1,14): error TS2345: Argument of type &#39;string&#39; is not assignable to parameter of type &#39;number&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，<code>Math.pow</code> 必须接受两个 <code>number</code> 类型的参数。事实上 <code>Math.pow</code> 的类型定义如下:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Math</span> <span class="token punctuation">{</span>\n  <span class="token doc-comment comment">/**\n   * Returns the value of a base expression taken to a specified power.\n   * <span class="token keyword">@param</span> <span class="token parameter">x</span> The base value of the expression.\n   * <span class="token keyword">@param</span> <span class="token parameter">y</span> The exponent value of the expression.\n   */</span>\n  <span class="token function">pow</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再举一个 DOM 中的例子:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>targetCurrent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(2,17): error TS2339: Property &#39;targetCurrent&#39; does not exist on type &#39;MouseEvent&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，<code>addEventListener</code> 方法是在 TypeScript 核心库中定义的:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Document</span>\n  <span class="token keyword">extends</span> <span class="token class-name">Node</span><span class="token punctuation">,</span>\n    GlobalEventHandlers<span class="token punctuation">,</span>\n    NodeSelector<span class="token punctuation">,</span>\n    DocumentEvent <span class="token punctuation">{</span>\n  <span class="token function">addEventListener</span><span class="token punctuation">(</span>\n    type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">listener</span><span class="token operator">:</span> <span class="token punctuation">(</span>ev<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">,</span>\n    useCapture<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以 <code>e</code> 被推断成了 <code>MouseEvent</code>，而 <code>MouseEvent</code> 是没有 <code>targetCurrent</code> 属性的，所以报错了。</p><p>注意，TypeScript 核心库的定义中不包含 Node.js 部分。</p><h2 id="用-typescript-写-node-js" tabindex="-1"><a class="header-anchor" href="#用-typescript-写-node-js" aria-hidden="true">#</a> 用 TypeScript 写 Node.js</h2><p>Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @types/node --save-dev\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',14),U={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects",target:"_blank",rel:"noopener noreferrer"},D=(0,a.Uk)("内置对象"),j={href:"https://github.com/Microsoft/TypeScript/tree/master/src/lib",target:"_blank",rel:"noopener noreferrer"},C=(0,a.Uk)("TypeScript 核心库的定义文件"),O={},q=(0,e(13860).Z)(O,[["render",function(n,s){const e=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",null,[t,(0,a._)("a",p,[o,(0,a.Wm)(e)]),c]),i,(0,a.kq)(" more "),r,(0,a._)("p",null,[l,(0,a._)("a",u,[d,(0,a.Wm)(e)]),k]),(0,a._)("p",null,[m,(0,a._)("a",v,[b,(0,a.Wm)(e)]),g]),h,(0,a._)("p",null,[y,(0,a._)("a",f,[S,(0,a.Wm)(e)]),M]),T,(0,a._)("p",null,[(0,a._)("a",_,[x,(0,a.Wm)(e)]),w]),E,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",U,[D,(0,a.Wm)(e)])]),(0,a._)("li",null,[(0,a._)("a",j,[C,(0,a.Wm)(e)])])])])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const e=n.__vccOpts||n;for(const[n,a]of s)e[n]=a;return e}},95858:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-0eb38230",path:"/code/language/typescript/basics/built-in-objects.html",title:"内置对象",lang:"zh-CN",frontmatter:{title:"内置对象",icon:"object",category:["TypeScript"],summary:"JavaScript 中有很多[内置对象][]，它们可以直接在 TypeScript 中当做定义好了的类型。\n内置对象是指根据标准在全局作用域(Global)上存在的对象。这里的标准是指 ECMAScript 和其他环境(比如 DOM)的标准。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/typescript/basics/built-in-objects.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"内置对象"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2020-06-03T17:08:34.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2020-06-03T17:08:34.000Z"}]]},excerpt:"<p>JavaScript 中有很多[内置对象][]，它们可以直接在 TypeScript 中当做定义好了的类型。</p>\n<p>内置对象是指根据标准在全局作用域(Global)上存在的对象。这里的标准是指 ECMAScript 和其他环境(比如 DOM)的标准。</p>\n",headers:[{level:2,title:"ECMAScript 的内置对象",slug:"ecmascript-的内置对象",children:[]},{level:2,title:"DOM 和 BOM 的内置对象",slug:"dom-和-bom-的内置对象",children:[]},{level:2,title:"TypeScript 核心库的定义文件",slug:"typescript-核心库的定义文件",children:[]},{level:2,title:"用 TypeScript 写 Node.js",slug:"用-typescript-写-node-js",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],git:{createdTime:1591204114e3,updatedTime:1591204114e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:2.02,words:607},filePathRelative:"code/language/typescript/basics/built-in-objects.md",localizedDate:"2020年6月3日"}}}]);